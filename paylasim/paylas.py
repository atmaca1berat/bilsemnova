"""BilsemNova: takvimdeki gönderileri Instagram hesabına ve Facebook Sayfası'na paylaşır.

GitHub Actions çeyrek saatte bir çalıştırır (.github/workflows/paylas.yml); kurulum KURULUM.md'de.
Yalnız standart kütüphane kullanır.

  python paylasim/paylas.py             zamanı gelenleri paylaşır, paylasim/durum.json'u günceller
  python paylasim/paylas.py --kuru      istek atmadan ne yapacağını yazar; durum.json'a dokunmaz
  python paylasim/paylas.py --kuru --simdi 2026-09-22T20:31:00+03:00   belirli bir anı dener
  python paylasim/paylas.py --dogrula   paylasim/takvim.json'u denetler; hata varsa çıkış kodu 1
  python paylasim/paylas.py --kontrol   salt okuma: Sayfa/Instagram kimliklerini ve erişimi gösterir
  python paylasim/paylas.py --birlestir ONCE SONRA   (iş akışı kullanır: durum kayıtlarını birleştirir)

Ortam: META_TOKEN (gizli), IG_KULLANICI_ID, FB_SAYFA_ID, SITE_KOKU, GRAPH_SURUM,
       FB_HIKAYE=0 / FB_REELS=0 → Facebook'ta hikâye / Reels paylaşılmaz ("atlandi" yazılır).
"""
from __future__ import annotations

import argparse
import copy
import functools
import http.client
import json
import os
import re
import sys
import time
import unicodedata
import urllib.error
import urllib.parse
import urllib.request
from collections import Counter
from dataclasses import dataclass
from datetime import datetime, timedelta, timezone
from pathlib import Path

KOK = Path(__file__).resolve().parent.parent  # depo kökü; takvimdeki medya yolları buna göredir
SITE_VARSAYILAN = 'https://atmaca1berat.github.io/bilsemnova/'
SURUM_VARSAYILAN = 'v26.0'  # Graph API'nin en yeni sürümü (29 Temmuz 2026)
GECIKME_SINIRI = timedelta(hours=6)
AZAMI_DENEME = 3
BITMIS = {'tamam', 'hata', 'atlandi'}
ADET = {'gonderi': (1, 10), 'hikaye': (1, 1), 'reels': (1, 1)}
TR = timezone(timedelta(hours=3))
MB = 1024 * 1024
# Hız sınırı (4, 17, 32, 613, 80001, 80002) ya da geçersiz token (190): çalışma durur, deneme sayılmaz.
DURDURAN_KODLAR = {4, 17, 32, 613, 80001, 80002, 190}
ETIKET_SINIRI = 5  # Instagram artık gönderi başına 5 etikete izin veriyor

# ── Gizlilik ─────────────────────────────────────────────────────────────
_gizliler: set[str] = set()
_KALIPLAR = [
    (re.compile(r'(access_token["\']?\s*[:=]\s*["\']?)[^\s&"\',}]+', re.I), r'\1***'),
    (re.compile(r'\b((?:Bearer|OAuth)\s+)[A-Za-z0-9._~+/=-]{16,}', re.I), r'\1***'),
    (re.compile(r'\bEAA[A-Za-z0-9]{20,}'), '***'),
]


def gizli_ekle(deger: str) -> None:
    """Bu değer bundan sonra hiçbir çıktıda görünmez."""
    if deger and len(deger) >= 8:
        _gizliler.add(deger)


def maskele(metin: object) -> str:
    """Kayıtlı gizli değerleri ve token'a benzeyen her şeyi *** yapar."""
    s = str(metin)
    for gizli in sorted(_gizliler, key=len, reverse=True):
        s = s.replace(gizli, '***').replace(urllib.parse.quote(gizli, safe=''), '***')
    for kalip, yerine in _KALIPLAR:
        s = kalip.sub(yerine, s)
    return s


def log(mesaj: object) -> None:
    print(maskele(mesaj), flush=True)


def an() -> str:
    return datetime.now(TR).isoformat(timespec='seconds')


def zaman_oku(deger: object) -> datetime | None:
    """ISO 8601 zamanı okur; biçim bozuksa ya da saat dilimi yoksa None."""
    if not isinstance(deger, str):
        return None
    try:
        zaman = datetime.fromisoformat(deger)
    except ValueError:
        return None
    return zaman if zaman.tzinfo else None


def medya_url(site: str, yol: str) -> str:
    return site.rstrip('/') + '/' + urllib.parse.quote(yol.lstrip('/'))


@dataclass
class Ayar:
    token: str = ''
    ig_id: str = ''
    fb_id: str = ''
    site: str = SITE_VARSAYILAN
    surum: str = SURUM_VARSAYILAN
    fb_hikaye: bool = True
    fb_reels: bool = True

    @classmethod
    def ortamdan(cls) -> Ayar:
        e = {ad: os.environ.get(ad, '').strip() for ad in (
            'META_TOKEN', 'IG_KULLANICI_ID', 'FB_SAYFA_ID', 'SITE_KOKU', 'GRAPH_SURUM', 'FB_HIKAYE', 'FB_REELS')}
        kapali = {'0', 'false', 'hayir', 'hayır', 'kapali', 'kapalı'}
        surum = e['GRAPH_SURUM'] or SURUM_VARSAYILAN
        ayar = cls(token=e['META_TOKEN'], ig_id=e['IG_KULLANICI_ID'], fb_id=e['FB_SAYFA_ID'],
                   site=e['SITE_KOKU'] or SITE_VARSAYILAN, surum=surum if surum.startswith('v') else 'v' + surum,
                   fb_hikaye=e['FB_HIKAYE'].lower() not in kapali, fb_reels=e['FB_REELS'].lower() not in kapali)
        gizli_ekle(ayar.token)
        return ayar

    def fb_acik(self, tur: str) -> bool:
        return {'hikaye': self.fb_hikaye, 'reels': self.fb_reels}.get(tur, True)


# ── Meta Graph API ───────────────────────────────────────────────────────
class GraphHatasi(Exception):
    def __init__(self, mesaj: str, kod: object = None, belirsiz: bool = False):
        super().__init__(maskele(mesaj))
        self.kod = kod
        self.belirsiz = belirsiz  # istek Meta'da işlenmiş olabilir (ağ hatası, zaman aşımı, 5xx)


class DurdurHatasi(GraphHatasi):
    """Hız sınırı, geçersiz token ya da eksik ayar: çalışma durur, deneme sayılmaz."""


class IslemeHatasi(GraphHatasi):
    """Meta videoyu işleyemedi; yayınlanmadığı için yeniden denenebilir."""


class BelirsizHata(GraphHatasi):
    """Yayın isteğinin sonucu bilinmiyor; gönderi yayınlanmış olabileceği için yeniden denenmez."""


def http_istek(yontem: str, url: str, govde: bytes | None, basliklar: dict,
               zaman_asimi: int = 60) -> tuple[int, bytes]:
    istek = urllib.request.Request(url, data=govde, method=yontem,
                                   headers={'User-Agent': 'bilsemnova-paylasim/1.0', **basliklar})
    try:
        with urllib.request.urlopen(istek, timeout=zaman_asimi) as yanit:
            return yanit.status, yanit.read()
    except urllib.error.HTTPError as hata:
        return hata.code, hata.read()


class Graph:
    """Token URL'ye hiç girmez: POST'ta form gövdesinde, GET'te Authorization başlığında gider."""

    def __init__(self, ayar: Ayar, istek=None, uyu=None):
        self.ayar = ayar
        self.istek = istek or http_istek
        self.uyu = uyu or time.sleep
        self.taban = f'https://graph.facebook.com/{ayar.surum}/'
        self._sayfa_tokeni = ''

    def _cagir(self, yontem: str, url: str, govde: bytes | None, basliklar: dict, zaman_asimi: int = 60) -> dict:
        try:
            kod, ham = self.istek(yontem, url, govde, basliklar, zaman_asimi)
        except (OSError, http.client.HTTPException) as hata:
            raise GraphHatasi(f'bağlantı hatası: {hata}', belirsiz=True) from None
        bozuk = False
        try:
            veri = json.loads(ham or b'{}')
        except ValueError:
            veri, bozuk = {'error': {'message': ham[:200].decode('utf-8', 'replace')}}, True
        hata = veri.get('error') if isinstance(veri, dict) else None
        if kod >= 400 or hata:
            hata = hata if isinstance(hata, dict) else {'message': str(hata)}
            kodu = hata.get('code')
            sinif = DurdurHatasi if kodu in DURDURAN_KODLAR else GraphHatasi
            raise sinif(f'HTTP {kod}: {hata.get("message", "")} (kod {kodu}, alt kod {hata.get("error_subcode")})', kodu,
                        belirsiz=kod >= 500 or (bozuk and kod < 400))
        return veri

    def get(self, yol: str, alanlar: str, token: str = '') -> dict:
        url = f'{self.taban}{yol}?{urllib.parse.urlencode({"fields": alanlar})}'
        return self._cagir('GET', url, None, {'Authorization': f'Bearer {token or self.ayar.token}'})

    def post(self, yol: str, veri: dict, token: str = '') -> dict:
        govde = urllib.parse.urlencode({**veri, 'access_token': token or self.ayar.token}).encode()
        return self._cagir('POST', self.taban + yol, govde, {'Content-Type': 'application/x-www-form-urlencoded'})

    def yayinda_mi(self, url: str) -> bool:
        """Medya GitHub Pages'te yayında mı? 404 ya da ağ hatası: henüz değil."""
        try:
            kod, _ = self.istek('HEAD', url, None, {}, 30)
        except (OSError, http.client.HTTPException):
            return False
        return 200 <= kod < 300

    def paylas(self, platform: str, oge: dict, urller: list[str], kapak: str | None, onceki: dict, not_al) -> str:
        """onceki: platformun önceki kaydı. not_al(alan, değer): yayın isteğinden hemen önce kalıcı iz bırakır;
        yanıt kaybolur ya da süreç kesilirse sonraki deneme bu izle gönderinin yayınlanıp yayınlanmadığını yoklar."""
        return {'instagram': self.instagram, 'facebook': self.facebook}[platform](oge, urller, kapak, onceki, not_al)

    def _yayinla(self, yol: str, veri: dict, token: str) -> dict:
        """Facebook'ta gönderiyi yayınlayan son istek. Yanıtı belirsizse gönderi yayınlanmış olabilir:
        yeniden denemek ikiler, bu yüzden BelirsizHata verir."""
        try:
            return self.post(yol, veri, token)
        except DurdurHatasi:
            raise
        except GraphHatasi as hata:
            if hata.belirsiz:
                raise BelirsizHata(str(hata)) from None
            raise

    @staticmethod
    def _kimlik(deger: str, ad: str) -> str:
        if not deger:
            raise DurdurHatasi(f'{ad} tanımlı değil')
        return deger

    def _bekle(self, hazir_mi, sure: int, aralik: int) -> bool:
        """hazir_mi() True dönene dek aralığı ikiye katlayarak (en çok 30 sn) bekler; süre dolarsa False."""
        gecen = 0
        while not hazir_mi():
            if gecen >= sure:
                return False
            self.uyu(aralik)
            gecen += aralik
            aralik = min(aralik * 2, 30)
        return True

    # Instagram API with Facebook Login: konteyner oluştur → FINISHED'ı bekle → yayınla.
    def ig_hazir_mi(self, konteyner: str) -> bool:
        yanit = self.get(konteyner, 'status_code,status')
        if yanit.get('status_code') in ('ERROR', 'EXPIRED'):
            raise GraphHatasi(f'konteyner {yanit["status_code"]}: {yanit.get("status", "")}')
        return yanit.get('status_code') == 'FINISHED'

    def ig_bekle(self, konteyner: str, sure: int) -> None:
        if not self._bekle(lambda: self.ig_hazir_mi(konteyner), sure, 3):
            raise GraphHatasi(f'konteyner {sure} sn içinde hazır olmadı')

    def instagram(self, oge: dict, urller: list[str], kapak: str | None, onceki: dict, not_al) -> str:
        ig, tur, metin = self._kimlik(self.ayar.ig_id, 'IG_KULLANICI_ID'), oge['tur'], oge.get('metin', '')
        eski = onceki.get('konteyner')
        if eski:  # önceki denemede yayın isteği gönderilmişti; sonucu bilinmiyor
            durum = self.get(eski, 'status_code').get('status_code')
            if durum == 'PUBLISHED':
                log(f'  instagram: önceki deneme zaten yayınlamış (konteyner {eski})')
                return eski
            if durum == 'FINISHED':
                return self.post(f'{ig}/media_publish', {'creation_id': eski})['id']
        sure = 120
        if tur == 'reels':
            veri = {'media_type': 'REELS', 'video_url': urller[0], 'caption': metin, 'share_to_feed': 'true'}
            if kapak:
                veri['cover_url'] = kapak
            sure = 300  # Meta: durumu en çok 5 dakika sorgula
        elif tur == 'hikaye':
            veri = {'media_type': 'STORIES', 'image_url': urller[0]}
        elif len(urller) == 1:
            veri = {'image_url': urller[0], 'caption': metin}
        else:
            cocuklar = [self.post(f'{ig}/media', {'image_url': u, 'is_carousel_item': 'true'})['id'] for u in urller]
            for cocuk in cocuklar:
                self.ig_bekle(cocuk, sure)
            veri = {'media_type': 'CAROUSEL', 'children': ','.join(cocuklar), 'caption': metin}
        konteyner = self.post(f'{ig}/media', veri)['id']
        self.ig_bekle(konteyner, sure)
        not_al('konteyner', konteyner)
        return self.post(f'{ig}/media_publish', {'creation_id': konteyner})['id']

    # Facebook Sayfası: sistem kullanıcısı token'ıyla Sayfa token'ı alınır, paylaşım onunla yapılır.
    def sayfa_tokeni(self) -> str:
        if not self._sayfa_tokeni:
            yanit = self.get(self._kimlik(self.ayar.fb_id, 'FB_SAYFA_ID'), 'access_token')
            self._sayfa_tokeni = yanit.get('access_token') or self.ayar.token
            gizli_ekle(self._sayfa_tokeni)
        return self._sayfa_tokeni

    def facebook(self, oge: dict, urller: list[str], _kapak: str | None, onceki: dict, not_al) -> str:
        sayfa, tur, metin = self._kimlik(self.ayar.fb_id, 'FB_SAYFA_ID'), oge['tur'], oge.get('metin', '')
        t = self.sayfa_tokeni()
        if tur == 'reels':  # Sayfa Reels'te kapak parametresi yok
            eski = onceki.get('video_id')
            if eski and self.fb_reels_yayinlandi_mi(eski, t):
                log(f"  facebook: önceki deneme Reels'i zaten yayınlamış ({eski})")
                return eski
            video = self.post(f'{sayfa}/video_reels', {'upload_phase': 'start'}, t)['video_id']
            yukleme = self._cagir('POST', f'https://rupload.facebook.com/video-upload/{self.ayar.surum}/{video}', b'',
                                  {'Authorization': f'OAuth {t}', 'file_url': urller[0]}, 300)
            if not yukleme.get('success'):
                raise GraphHatasi('Reels videosu yüklenemedi')
            not_al('video_id', video)
            bitis = self.post(f'{sayfa}/video_reels', {'upload_phase': 'finish', 'video_id': video,
                                                       'video_state': 'PUBLISHED', 'description': metin}, t)
            if not bitis.get('success'):
                raise GraphHatasi('Reels yayınlanamadı')
            # Yayın isteği kabul edildi: yalnız kesin işleme hatası yeniden denenir. Süre dolması ya da
            # durum sorgusunun kendisinin hata vermesi tamam sayılır; yeniden denemek Reels'i ikiler.
            try:
                if not self._bekle(lambda: self.fb_video_hazir_mi(video, t), 300, 5):
                    log(f'  facebook: Reels hâlâ işleniyor ({video}); yayın isteği kabul edildi, tamam sayıldı')
            except IslemeHatasi:
                raise
            except GraphHatasi as hata:
                log(f'  facebook: Reels durumu sorgulanamadı ({hata}); yayın isteği kabul edildi, tamam sayıldı')
            return str(bitis.get('post_id') or video)
        if tur == 'hikaye':
            foto = self.post(f'{sayfa}/photos', {'url': urller[0], 'published': 'false'}, t)['id']
            yanit = self._yayinla(f'{sayfa}/photo_stories', {'photo_id': foto}, t)
            if not yanit.get('success'):
                raise GraphHatasi('hikâye yayınlanamadı')
            return str(yanit.get('post_id') or foto)
        if len(urller) == 1:
            yanit = self._yayinla(f'{sayfa}/photos', {'url': urller[0], 'caption': metin, 'published': 'true'}, t)
            return str(yanit.get('post_id') or yanit['id'])
        veri = {'message': metin}
        for sira, url in enumerate(urller):
            foto = self.post(f'{sayfa}/photos', {'url': url, 'published': 'false'}, t)['id']
            veri[f'attached_media[{sira}]'] = json.dumps({'media_fbid': foto})
        return self._yayinla(f'{sayfa}/feed', veri, t)['id']

    def fb_reels_yayinlandi_mi(self, video: str, token: str) -> bool:
        faz = self.get(video, 'status', token).get('status', {}).get('publishing_phase') or {}
        return faz.get('status') in ('in_progress', 'complete')

    def fb_video_hazir_mi(self, video: str, token: str) -> bool:
        durum = self.get(video, 'status', token).get('status', {})
        for faz in ('uploading_phase', 'processing_phase', 'publishing_phase'):
            hata = (durum.get(faz) or {}).get('error')
            if hata:
                raise IslemeHatasi(f'Reels {faz}: {hata.get("message") if isinstance(hata, dict) else hata}')
        if durum.get('video_status') in ('error', 'expired'):
            raise IslemeHatasi(f'Reels durumu: {durum["video_status"]}')
        return durum.get('video_status') == 'ready' or (durum.get('publishing_phase') or {}).get('status') == 'complete'


# ── Zamanlayıcı ──────────────────────────────────────────────────────────
def tarif(oge: dict) -> str:
    adet = len(oge.get('medya', []))
    return {'gonderi': 'tek görsel' if adet == 1 else f'kaydırmalı, {adet} görsel', 'hikaye': 'hikâye',
            'reels': 'reels' + (' + kapak' if oge.get('kapak') else '')}.get(oge.get('tur'), str(oge.get('tur')))


def calistir(takvim: list, durum: dict, ayar: Ayar, simdi: datetime, kuru: bool = False,
             kaydet=None, istek=None, uyu=None) -> bool:
    """Zamanı gelmiş öğeleri zaman sırasıyla paylaşır; her sonuçtan hemen sonra kaydet(durum) çağrılır.

    Dikkat isteyen bir sonuç (hata ya da gecikmeden atlama) olduysa True döner.
    Hız sınırı, geçersiz token ya da eksik ayar DurdurHatasi olarak yukarı iletilir.
    """
    graph = Graph(ayar, istek, uyu)
    if kuru:
        durum, kaydet = copy.deepcopy(durum), None
    kaydet = kaydet or (lambda _durum: None)
    on = '[kuru] ' if kuru else ''

    def isaretle(kimlik: str, platform: str, alanlar: dict) -> None:
        onceki = durum.setdefault(kimlik, {}).get(platform, {})
        iz = {k: onceki[k] for k in ('konteyner', 'video_id') if k in onceki}  # ikilenmeyi önleyen izler kalır
        durum[kimlik][platform] = {**iz, 'deneme': onceki.get('deneme', 0), **alanlar, 'zaman': an()}

    def not_al(kimlik: str, platform: str, alan: str, deger: str) -> None:
        durum.setdefault(kimlik, {}).setdefault(platform, {})[alan] = deger
        kaydet(durum)

    def isle(zaman: datetime, oge: dict) -> bool:
        kimlik, tur, platformlar, medya = oge['id'], oge['tur'], oge['platformlar'], oge['medya']
        if (not isinstance(kimlik, str) or not kimlik or tur not in ADET or not isinstance(platformlar, list)
                or len(set(platformlar)) != len(platformlar) or not set(platformlar) <= {'instagram', 'facebook'}
                or not isinstance(medya, list) or not medya):
            raise ValueError('id, tur, platformlar ya da medya geçersiz (--dogrula ile denetle)')
        bekleyen = [p for p in platformlar if durum.get(kimlik, {}).get(p, {}).get('durum') not in BITMIS]
        if not bekleyen:
            return False
        if simdi - zaman > GECIKME_SINIRI:
            log(f'{on}{kimlik}: 6 saatten fazla gecikti, paylaşılmayacak ({", ".join(bekleyen)} → atlandi)')
            for p in bekleyen:
                isaretle(kimlik, p, {'durum': 'atlandi', 'not': '6 saatten fazla gecikti'})
            kaydet(durum)
            return True
        kapali = [p for p in bekleyen if p == 'facebook' and not ayar.fb_acik(tur)]
        for p in kapali:
            log(f'{on}{kimlik}: Facebook {tur} paylaşımı kapalı (FB_{tur.upper()}=0) → atlandi')
            isaretle(kimlik, p, {'durum': 'atlandi', 'not': f'FB_{tur.upper()}=0'})
            bekleyen.remove(p)
        if kapali:
            kaydet(durum)
        if not bekleyen:
            return False
        urller = [medya_url(ayar.site, yol) for yol in medya]
        kapak = medya_url(ayar.site, oge['kapak']) if oge.get('kapak') else None
        if kuru:
            log(f'[kuru] {kimlik} ({tarif(oge)}) → {", ".join(bekleyen)}')
            for url in urller + ([kapak] if kapak else []):
                log(f'         {url}')
            return False
        eksik = next((u for u in urller + ([kapak] if kapak else []) if not graph.yayinda_mi(u)), None)
        if eksik:
            log(f'{kimlik}: medya henüz yayında değil, sonraki çalışmaya kaldı ({eksik})')
            return False
        sorun = False
        for p in bekleyen:
            onceki = durum.get(kimlik, {}).get(p, {})
            deneme = onceki.get('deneme', 0) + 1
            try:
                medya_id = graph.paylas(p, oge, urller, kapak, onceki, functools.partial(not_al, kimlik, p))
            except DurdurHatasi:
                raise
            except BelirsizHata as hata:
                mesaj = ("yanıt belirsiz, gönderi yayınlanmış olabilir; Sayfa'yı kontrol et, "
                         f'yayınlanmadıysa bu kaydı silip yeniden dene ({hata})')
                isaretle(kimlik, p, {'durum': 'hata', 'deneme': deneme, 'son_hata': maskele(mesaj)[:300]})
                log(f'{kimlik} → {p}: hata, yeniden denenmeyecek: {mesaj}')
                sorun = True
            except Exception as hata:
                son = 'hata' if deneme >= AZAMI_DENEME else 'tekrar'
                isaretle(kimlik, p, {'durum': son, 'deneme': deneme, 'son_hata': maskele(hata)[:300]})
                log(f'{kimlik} → {p}: {son} (deneme {deneme}/{AZAMI_DENEME}): {hata}')
                sorun = sorun or son == 'hata'
            else:
                isaretle(kimlik, p, {'durum': 'tamam', 'deneme': deneme, 'medya_id': str(medya_id)})
                log(f'{kimlik} → {p}: tamam ({medya_id})')
            kaydet(durum)
        return sorun

    sorun, sirali = False, []
    sayac = Counter(o['id'] for o in takvim if isinstance(o, dict) and isinstance(o.get('id'), str))
    for oge in takvim:
        zaman = zaman_oku(oge.get('zaman')) if isinstance(oge, dict) else None
        if zaman is None:
            log(f'{oge.get("id") if isinstance(oge, dict) else "?"}: zaman okunamadı, işlenmedi (--dogrula ile denetle)')
            sorun = True
        elif isinstance(oge.get('id'), str) and sayac[oge['id']] > 1:
            log(f'{oge["id"]}: bu id takvimde birden çok kez geçiyor, işlenmedi (--dogrula ile denetle)')
            sorun = True
        else:
            sirali.append((zaman, oge))
    sirali.sort(key=lambda z: z[0])
    for zaman, oge in sirali:
        if zaman > simdi:
            continue
        try:
            sorun = isle(zaman, oge) or sorun
        except DurdurHatasi:
            raise
        except Exception as hata:
            log(f'{oge.get("id")}: öğe işlenemedi: {type(hata).__name__}: {hata}')
            sorun = True
    if kuru:
        sonraki = next((f'{o.get("id")} ({z.isoformat()})' for z, o in sirali if z > simdi), 'yok')
        log(f'[kuru] sıradaki: {sonraki}')
    return sorun


# ── Takvim denetimi (--dogrula) ──────────────────────────────────────────
def jpeg_olcu(yol: Path) -> tuple[int, int]:
    """JPEG başlığındaki SOF bölümünden (genişlik, yükseklik) okur."""
    with open(yol, 'rb') as f:
        if f.read(2) != b'\xff\xd8':
            raise ValueError('JPEG değil')
        while True:
            bayt = f.read(1)
            while bayt and bayt != b'\xff':
                bayt = f.read(1)
            while bayt == b'\xff':
                bayt = f.read(1)
            if not bayt or bayt in (b'\xd9', b'\xda'):
                raise ValueError('ölçü bilgisi (SOF) bulunamadı')
            isaret = bayt[0]
            if isaret == 0x01 or 0xD0 <= isaret <= 0xD8:
                continue
            uzunluk = int.from_bytes(f.read(2), 'big')
            if uzunluk < 2:
                raise ValueError('bozuk JPEG')
            if 0xC0 <= isaret <= 0xCF and isaret not in (0xC4, 0xC8, 0xCC):
                sof = f.read(5)
                return int.from_bytes(sof[3:5], 'big'), int.from_bytes(sof[1:3], 'big')
            f.seek(uzunluk - 2, os.SEEK_CUR)


def _kutular(veri: bytes):
    """MP4 (ISO BMFF) kutularını (tip, içerik) olarak sıralar."""
    i = 0
    while i + 8 <= len(veri):
        boyut, tip, bas = int.from_bytes(veri[i:i + 4], 'big'), veri[i + 4:i + 8], 8
        if boyut == 1:
            boyut, bas = int.from_bytes(veri[i + 8:i + 16], 'big'), 16
        elif boyut == 0:
            boyut = len(veri) - i
        if boyut < bas:
            raise ValueError('bozuk MP4 kutusu')
        yield tip, veri[i + bas:i + boyut]
        i += boyut


def mp4_bilgi(yol: Path) -> tuple[int, int, float, bool]:
    """MP4'ten (genişlik, yükseklik, süre sn, moov kutusu mdat'tan önce mi) okur."""
    toplam, konum, moov, mdat_once = yol.stat().st_size, 0, None, False
    with open(yol, 'rb') as f:
        while moov is None and konum + 8 <= toplam:
            f.seek(konum)
            boyut, tip, bas = int.from_bytes(f.read(4), 'big'), f.read(4), 8
            if boyut == 1:
                boyut, bas = int.from_bytes(f.read(8), 'big'), 16
            elif boyut == 0:
                boyut = toplam - konum
            if boyut < bas:
                raise ValueError('bozuk MP4 kutusu')
            if tip == b'mdat':
                mdat_once = True
            elif tip == b'moov':
                moov = f.read(boyut - bas)
            konum += boyut
    if moov is None:
        raise ValueError('moov kutusu yok')
    genislik = yukseklik = 0
    sure = 0.0
    for tip, ic in _kutular(moov):
        if tip == b'mvhd':
            uzun = ic[0] == 1
            olcek = int.from_bytes(ic[20:24] if uzun else ic[12:16], 'big')
            sure = int.from_bytes(ic[24:32] if uzun else ic[16:20], 'big') / olcek if olcek else 0.0
        elif tip == b'trak' and not genislik:
            for alt, tk in _kutular(ic):
                if alt == b'tkhd' and len(tk) >= 84:
                    g, y = int.from_bytes(tk[-8:-4], 'big') >> 16, int.from_bytes(tk[-4:], 'big') >> 16
                    a, b = int.from_bytes(tk[-44:-40], 'big', signed=True), int.from_bytes(tk[-40:-36], 'big', signed=True)
                    if a == 0 and b != 0:  # 90°/270° döndürülmüş video
                        g, y = y, g
                    genislik, yukseklik = g, y
    return genislik, yukseklik, sure, not mdat_once


def _tam_adla_var_mi(kok: Path, yol: Path) -> bool:
    """Harf duyarlı varlık denetimi: macOS 1.JPG'yi 1.jpg sayar, GitHub Pages saymaz."""
    yer = kok
    for parca in yol.parts:
        adlar = {unicodedata.normalize('NFC', ad) for ad in os.listdir(yer)} if yer.is_dir() else set()
        if unicodedata.normalize('NFC', parca) not in adlar:
            return False
        yer = yer / parca
    return yer.is_file()


def _dosya_denetle(kok: Path, yol: str, rol: str, ig: bool, fb: bool, oranlar: list):
    """(hata_mı, mesaj) üretir. rol: gonderi | hikaye | reels | kapak. Sınırlar Meta dokümanından."""
    p = Path(yol)
    if p.is_absolute() or '..' in p.parts:
        yield True, f'{yol}: depo köküne göre göreli bir yol olmalı'
        return
    dosya = kok / p
    if not _tam_adla_var_mi(kok, p):
        yield True, f'{yol}: dosya bulunamadı (büyük/küçük harf de aynı olmalı)'
        return
    video = rol == 'reels'
    if dosya.suffix.lower() not in (('.mp4',) if video else ('.jpg', '.jpeg')):
        yield True, f'{yol}: {"MP4" if video else "JPG"} olmalı'
        return
    try:
        gen, yuk, sure, moov_basta = mp4_bilgi(dosya) if video else (*jpeg_olcu(dosya), 0.0, True)
    except (ValueError, OSError) as hata:
        yield True, f'{yol}: okunamadı ({hata})'
        return
    if not gen or not yuk:
        yield True, f'{yol}: ölçü okunamadı'
        return
    boyut, oran = dosya.stat().st_size, gen / yuk
    if video:
        if boyut > 100 * MB:
            yield True, f'{yol}: {boyut / MB:.0f} MB; GitHub 100 MB üstü dosyayı kabul etmez'
        if abs(oran - 9 / 16) > 0.01:
            yield True, f'{yol}: {gen}x{yuk}; Reels 9:16 olmalı'
        if fb and (gen < 540 or yuk < 960):
            yield True, f'{yol}: {gen}x{yuk}; Facebook Reels en az 540x960 ister'
        if ig and gen > 1920:
            yield True, f'{yol}: genişlik {gen}; Instagram en çok 1920 piksel kabul eder'
        en_uzun = 90 if fb else 900
        if not 3 <= sure <= en_uzun:
            yield True, f'{yol}: süre {sure:.1f} sn; 3-{en_uzun} sn olmalı'
        if not moov_basta:
            yield True, f'{yol}: moov kutusu dosya başında değil (ffmpeg ile -movflags +faststart kullan)'
        return
    sinir = 8 if ig else 10
    if boyut > sinir * MB:
        yield True, f'{yol}: {boyut / MB:.1f} MB; sınır {sinir} MB'
    if gen < 320:
        yield False, f'{yol}: genişlik {gen} px; Instagram 320 px\'e büyütür (bulanık görünebilir)'
    if rol == 'gonderi':
        oranlar.append(round(oran, 3))
        if not (gen * 5 >= yuk * 4 and gen * 100 <= yuk * 191):
            yield True, f'{yol}: {gen}x{yuk}; akış görseli 4:5 ile 1.91:1 arasında olmalı'
    elif abs(oran - 9 / 16) > 0.01:
        yield rol == 'hikaye', f'{yol}: {gen}x{yuk}; {"hikâye" if rol == "hikaye" else "Reels kapağı"} 9:16 olmalı'


def _oge_denetle(oge: object, kok: Path):
    """Tek takvim öğesi için (hata_mı, mesaj) üretir."""
    if not isinstance(oge, dict):
        yield True, 'öğe bir JSON nesnesi olmalı'
        return
    if not isinstance(oge.get('id'), str) or not oge['id'].strip():
        yield True, 'id eksik'
    zaman = zaman_oku(oge.get('zaman'))
    if zaman is None:
        yield True, 'zaman ISO 8601 biçiminde ve saat dilimli olmalı (ör. 2026-09-22T20:30:00+03:00)'
    elif zaman.utcoffset() != timedelta(hours=3):
        yield False, 'saat dilimi +03:00 (Türkiye) değil'
    tur, platformlar, metin = oge.get('tur'), oge.get('platformlar'), oge.get('metin', '')
    if tur not in ADET:
        yield True, 'tur gonderi, hikaye ya da reels olmalı'
        return
    if (not isinstance(platformlar, list) or not platformlar or len(set(platformlar)) != len(platformlar)
            or not set(platformlar) <= {'instagram', 'facebook'}):
        yield True, 'platformlar yalnız "instagram" ve/veya "facebook" içeren tekrarsız bir liste olmalı'
        platformlar = []
    ig, fb = 'instagram' in platformlar, 'facebook' in platformlar
    if not isinstance(metin, str):
        yield True, 'metin bir dize olmalı'
        metin = ''
    if tur == 'hikaye' and metin:
        yield True, 'hikâyede metin boş olmalı (hikâyeye açıklama eklenemez)'
    if ig and len(metin) > 2200:
        yield True, f'metin {len(metin)} karakter; Instagram sınırı 2200'
    etiket = len(re.findall(r'#\w', metin))
    if ig and etiket > ETIKET_SINIRI:
        yield True, f'{etiket} etiket var; Instagram gönderi başına en fazla {ETIKET_SINIRI} etikete izin veriyor'
    if ig and len(re.findall(r'@\w', metin)) > 20:
        yield True, 'Instagram en çok 20 @bahsetme kabul eder'
    medya, kapak = oge.get('medya'), oge.get('kapak')
    if not isinstance(medya, list) or not all(isinstance(m, str) for m in medya):
        yield True, 'medya bir dosya yolu listesi olmalı'
        return
    en_az, en_cok = ADET[tur]
    if not en_az <= len(medya) <= en_cok:
        yield True, f'{tur} için {en_az}-{en_cok} medya gerekir, {len(medya)} var'
    if kapak is not None and (tur != 'reels' or not isinstance(kapak, str)):
        yield True, 'kapak yalnız reels için ve dosya yolu olarak verilir'
        kapak = None
    oranlar: list[float] = []
    for yol, rol in [(m, tur) for m in medya] + ([(kapak, 'kapak')] if kapak else []):
        yield from _dosya_denetle(kok, yol, rol, ig, fb, oranlar)
    if len(set(oranlar)) > 1:
        yield False, 'kaydırmalı görsellerin en-boy oranları farklı; Instagram hepsini ilk görsele göre kırpar'


def dogrula(takvim: object, kok: Path) -> tuple[list[str], list[str]]:
    """Takvimi şema, zaman ve medya dosyaları açısından denetler → (hatalar, uyarılar)."""
    if not isinstance(takvim, list):
        return ['takvim bir JSON listesi olmalı'], []
    hatalar: list[str] = []
    uyarilar: list[str] = []
    gorulen: set[str] = set()
    for sira, oge in enumerate(takvim, 1):
        ad = oge.get('id') if isinstance(oge, dict) and isinstance(oge.get('id'), str) and oge['id'] else f'#{sira}'
        if ad in gorulen:
            hatalar.append(f'{ad}: id tekrar ediyor')
        gorulen.add(ad)
        for agir, mesaj in _oge_denetle(oge, kok):
            (hatalar if agir else uyarilar).append(f'{ad}: {mesaj}')
    return hatalar, uyarilar


# ── Komut satırı ─────────────────────────────────────────────────────────
def json_yaz(yol: Path, veri: object) -> None:
    gecici = yol.with_name(yol.name + '.tmp')
    gecici.write_text(json.dumps(veri, ensure_ascii=False, indent=2, sort_keys=True) + '\n', 'utf-8')
    os.replace(gecici, yol)  # yarıda kesilse bile durum.json bozulmaz


def birlestir(once: dict, sonra: dict, uzak: dict) -> dict:
    """Bu çalışmanın değiştirdiği platform kayıtlarını (once → sonra) depodaki güncel durum.json'un
    üstüne yazar; çalışma sürerken depoda yapılmış başka değişiklikler korunur."""
    sonuc = copy.deepcopy(uzak)
    for kimlik, kayit in sonra.items():
        for platform, deger in kayit.items():
            if once.get(kimlik, {}).get(platform) != deger:
                sonuc.setdefault(kimlik, {})[platform] = deger
    return sonuc


def kontrol(ayar: Ayar, graph: Graph | None = None) -> int:
    """Salt okuma: token'ın gördüğü Sayfaları ve bağlı Instagram hesaplarını (kimlikleriyle) listeler,
    tanımlı kimlikleri doğrular, Instagram yayın kotasını gösterir. Hiçbir şey paylaşmaz."""
    g = graph or Graph(ayar)
    sayfalar = g.get('me/accounts', 'id,name,instagram_business_account{id,username}').get('data', [])
    if not sayfalar:
        log('Token hiçbir Sayfa görmüyor: sistem kullanıcısına Sayfa atanmış mı, izinler seçilmiş mi?')
        return 1
    for sayfa in sayfalar:
        ig = sayfa.get('instagram_business_account') or {}
        log(f'Sayfa "{sayfa.get("name")}": FB_SAYFA_ID={sayfa.get("id")} · '
            f'IG_KULLANICI_ID={ig.get("id", "-")} (@{ig.get("username", "bağlı Instagram yok")})')
    sorun = False
    if ayar.fb_id:
        uyan = [s for s in sayfalar if s.get('id') == ayar.fb_id]
        log(f'FB_SAYFA_ID {"doğru" if uyan else "listede YOK"}: {ayar.fb_id}')
        sorun |= not uyan
    else:
        log('FB_SAYFA_ID tanımlı değil (GitHub Variables).')
        sorun = True
    if ayar.ig_id:
        hesap = g.get(ayar.ig_id, 'username')
        kota = g.get(f'{ayar.ig_id}/content_publishing_limit', 'config,quota_usage').get('data', [{}])
        kota = kota[0] if kota else {}
        log(f'IG_KULLANICI_ID doğru: @{hesap.get("username")} · son 24 saatte '
            f'{kota.get("quota_usage", "?")}/{(kota.get("config") or {}).get("quota_total", "?")} yayın')
    else:
        log('IG_KULLANICI_ID tanımlı değil (GitHub Variables).')
        sorun = True
    return 1 if sorun else 0


def main(argv: list[str] | None = None) -> int:
    ap = argparse.ArgumentParser(description='BilsemNova zamanlanmış Instagram / Facebook paylaşımı')
    ap.add_argument('--kuru', action='store_true', help="istek atmadan ne yapacağını yazar; durum.json'a dokunmaz")
    ap.add_argument('--dogrula', action='store_true', help="takvim.json'u denetler; hata varsa çıkış kodu 1")
    ap.add_argument('--kontrol', action='store_true', help='salt okuma: Sayfa/Instagram kimliklerini ve erişimi gösterir')
    ap.add_argument('--simdi', metavar='ZAMAN', help='yalnız --kuru ile: "şimdi" yerine bu ISO 8601 zamanı kullan')
    ap.add_argument('--birlestir', nargs=2, type=Path, metavar=('ONCE', 'SONRA'),
                    help="iş akışı için: çalışmanın yeni kayıtlarını paylasim/durum.json'un üstüne uygular")
    arg = ap.parse_args(argv)
    simdi = datetime.now(timezone.utc)
    if arg.simdi:
        simdi = zaman_oku(arg.simdi)
        if simdi is None or not arg.kuru:
            ap.error('--simdi yalnız --kuru ile ve saat dilimli bir zamanla kullanılır')
    takvim_yolu, durum_yolu = KOK / 'paylasim' / 'takvim.json', KOK / 'paylasim' / 'durum.json'
    try:
        if arg.birlestir:
            once, sonra = (json.loads(yol.read_text('utf-8') or '{}') for yol in arg.birlestir)
            uzak = json.loads(durum_yolu.read_text('utf-8') or '{}') if durum_yolu.is_file() else {}
            json_yaz(durum_yolu, birlestir(once, sonra, uzak))
            return 0
        if arg.kontrol:
            ayar = Ayar.ortamdan()
            if not ayar.token:
                log('META_TOKEN tanımlı değil (GitHub: Settings > Secrets and variables > Actions).')
                return 1
            return kontrol(ayar)
        if not takvim_yolu.is_file():
            log('paylasim/takvim.json yok; yapılacak iş yok.')
            return 1 if arg.dogrula else 0
        takvim = json.loads(takvim_yolu.read_text('utf-8'))
        if arg.dogrula:
            hatalar, uyarilar = dogrula(takvim, KOK)
            for mesaj in uyarilar:
                log(f'UYARI {mesaj}')
            for mesaj in hatalar:
                log(f'HATA  {mesaj}')
            log(f'{len(takvim) if isinstance(takvim, list) else 0} öğe: {len(hatalar)} hata, {len(uyarilar)} uyarı')
            return 1 if hatalar else 0
        durum = json.loads(durum_yolu.read_text('utf-8') or '{}') if durum_yolu.is_file() else {}
        ayar = Ayar.ortamdan()
        if not arg.kuru and not ayar.token:
            log('META_TOKEN tanımlı değil (GitHub: Settings > Secrets and variables > Actions).')
            return 1
        log(f'{"[kuru] " if arg.kuru else ""}şimdi {simdi.astimezone(TR).isoformat(timespec="minutes")}, '
            f'takvimde {len(takvim)} öğe')
        sorun = calistir(takvim, durum, ayar, simdi, kuru=arg.kuru, kaydet=lambda d: json_yaz(durum_yolu, d))
        return 1 if sorun and not arg.kuru else 0
    except DurdurHatasi as hata:
        log(f'Çalışma durduruldu, kalanlar sonraki çalışmaya kaldı: {hata}')
        return 1
    except Exception as hata:
        log(f'Beklenmeyen hata: {type(hata).__name__}: {hata}')
        return 1


if __name__ == '__main__':
    sys.exit(main())
