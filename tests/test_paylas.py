"""paylasim/paylas.py testleri. HTTP katmanı sahte bir Meta ile değiştirilir; ağa hiç çıkılmaz.

Depo kökünden: python3 -m unittest discover -s tests -v
"""
import copy
import importlib.util
import io
import itertools
import json
import os
import sys
import tempfile
import unittest
import urllib.parse
from collections import defaultdict
from contextlib import redirect_stdout
from dataclasses import dataclass
from datetime import datetime, timedelta, timezone
from pathlib import Path
from unittest import mock

DEPO = Path(__file__).resolve().parent.parent
_tanim = importlib.util.spec_from_file_location('paylas', DEPO / 'paylasim' / 'paylas.py')
paylas = importlib.util.module_from_spec(_tanim)
sys.modules['paylas'] = paylas  # dataclass, modülü sys.modules'ta arar
_tanim.loader.exec_module(paylas)

TOKEN = 'EAAGsistemKullanicisiTokeni0123456789abcdefXYZ'  # sahte
SAYFA_TOKEN = 'EAAGsayfaTokeni9876543210zyxwvutsrqpoKLM'  # sahte
TR = timezone(timedelta(hours=3))
SIMDI = datetime(2026, 9, 22, 20, 40, tzinfo=TR)
SITE = paylas.SITE_VARSAYILAN
ID = '2026-09-22-akis'
METIN = 'Günün sorusu #bilsem'


@dataclass
class Cagri:
    yontem: str
    url: str
    veri: dict
    basliklar: dict

    @property
    def yol(self) -> str:
        return urllib.parse.urlsplit(self.url).path


class SahteMeta:
    """Graph API'nin küçük bir taklidi: her isteği kaydeder, istenen uç noktaya hata döndürür."""

    def __init__(self, eksik=(), hata=None, durumlar=None, patlat=None):
        self.cagrilar: list[Cagri] = []
        self.uykular: list[int] = []
        self.eksik = set(eksik)  # HEAD'de 404 dönecek adresler
        self.hata = hata or {}  # '[YÖNTEM ]yol soneki' → (HTTP kodu, yanıt)
        self.durumlar = {k: list(v) for k, v in (durumlar or {}).items()}  # konteyner → status_code sırası
        self.patlat = patlat  # adresinde bu metin geçen istekte süreç "kesilir"
        self.sayac = defaultdict(lambda: itertools.count(1))

    def uyu(self, saniye):
        self.uykular.append(saniye)

    def __call__(self, yontem, url, govde, basliklar, zaman_asimi=60):
        cagri = Cagri(yontem, url, dict(urllib.parse.parse_qsl(govde.decode())) if govde else {}, dict(basliklar))
        self.cagrilar.append(cagri)
        if self.patlat and self.patlat in url:
            raise KeyboardInterrupt
        if yontem == 'HEAD':
            return (404 if url in self.eksik else 200), b''
        for anahtar, deger in self.hata.items():
            hata_yontemi, _, sonek = anahtar.rpartition(' ')
            if cagri.yol.endswith(sonek) and hata_yontemi in ('', yontem):
                if isinstance(deger, BaseException):  # ağ hatası taklidi
                    raise deger
                return deger[0], json.dumps(deger[1]).encode()
        return 200, json.dumps(self._yanit(cagri)).encode()

    def _yeni(self, onek):
        return f'{onek}{next(self.sayac[onek])}'

    def _yanit(self, c):
        if urllib.parse.urlsplit(c.url).netloc == 'rupload.facebook.com':
            return {'success': True}
        parca = c.yol.split('/')[2:]  # sürümden sonrası, ör. ['IG1', 'media']
        if c.yontem == 'GET':
            alan = urllib.parse.parse_qs(urllib.parse.urlsplit(c.url).query)['fields'][0]
            if alan == 'access_token':
                return {'access_token': SAYFA_TOKEN, 'id': parca[0]}
            if alan.startswith('status_code'):
                sira = self.durumlar.get(parca[0], ['FINISHED'])
                return {'status_code': sira.pop(0) if len(sira) > 1 else sira[0]}
            if alan == 'status':
                return {'status': {'video_status': 'ready', 'publishing_phase': {'status': 'complete'}}}
        uc = parca[-1]
        if uc == 'media':
            return {'id': self._yeni('k')}
        if uc == 'media_publish':
            return {'id': 'ig-' + c.veri['creation_id']}
        if uc == 'photos':
            foto = self._yeni('foto')
            return {'id': foto, 'post_id': 'SAYFA1_' + foto}
        if uc == 'feed':
            return {'id': 'SAYFA1_gonderi'}
        if uc == 'photo_stories':
            return {'success': True, 'post_id': 'hikaye1'}
        if uc == 'video_reels':
            if c.veri['upload_phase'] == 'start':
                return {'video_id': 'vid1', 'upload_url': 'https://rupload.facebook.com/video-upload/vid1'}
            return {'success': True, 'post_id': 'reel1'}
        raise AssertionError(f'beklenmeyen istek: {c.yontem} {c.url}')

    def istekler(self, yontem, sonek):
        return [c for c in self.cagrilar if c.yontem == yontem and c.yol.endswith(sonek)]


def oge(kimlik=ID, tur='gonderi', medya=None, zaman='2026-09-22T20:30:00+03:00', metin=METIN,
        platformlar=('instagram', 'facebook'), kapak=None):
    if medya is None:
        medya = {'gonderi': ['paylasim/medya/2026-09-22/1.jpg'], 'hikaye': ['paylasim/medya/2026-09-22/hikaye.jpg'],
                 'reels': ['paylasim/medya/2026-09-22/reels.mp4']}[tur]
    sonuc = {'id': kimlik, 'zaman': zaman, 'tur': tur, 'medya': medya, 'metin': metin, 'platformlar': list(platformlar)}
    if kapak:
        sonuc['kapak'] = kapak
    return sonuc


def ozet(durum, kimlik=ID):
    return {p: (k['durum'], k['deneme']) for p, k in durum.get(kimlik, {}).items()}


def sahte_jpeg(genislik, yukseklik, ilerlemeli=False):
    app0 = b'\xff\xe0\x00\x10JFIF\x00\x01\x01\x00\x00\x01\x00\x01\x00\x00'
    sof = ((b'\xff\xc2' if ilerlemeli else b'\xff\xc0') + b'\x00\x11\x08' + yukseklik.to_bytes(2, 'big')
           + genislik.to_bytes(2, 'big') + b'\x03\x01\x22\x00\x02\x11\x01\x03\x11\x01')
    return b'\xff\xd8' + app0 + sof + b'\xff\xda\x00\x02' + bytes(32) + b'\xff\xd9'


def kutu(tip, ic):
    return (8 + len(ic)).to_bytes(4, 'big') + tip + ic


def sahte_mp4(genislik, yukseklik, sure_sn, moov_basta=True):
    mvhd = kutu(b'mvhd', bytes(12) + (1000).to_bytes(4, 'big') + int(sure_sn * 1000).to_bytes(4, 'big') + bytes(80))
    bir = (0x00010000).to_bytes(4, 'big')
    matris = bir + bytes(12) + bir + bytes(12) + (0x40000000).to_bytes(4, 'big')
    tkhd = kutu(b'tkhd', bytes(40) + matris + (genislik << 16).to_bytes(4, 'big') + (yukseklik << 16).to_bytes(4, 'big'))
    moov, mdat = kutu(b'moov', mvhd + kutu(b'trak', tkhd)), kutu(b'mdat', bytes(64))
    return kutu(b'ftyp', b'isom\x00\x00\x02\x00isomiso2avc1mp41') + (moov + mdat if moov_basta else mdat + moov)


class ZamanlayiciTest(unittest.TestCase):
    def setUp(self):
        paylas.gizli_ekle(TOKEN)
        self.ayar = paylas.Ayar(token=TOKEN, ig_id='IG1', fb_id='SAYFA1')

    def calistir(self, takvim, durum, meta, simdi=SIMDI, ayar=None):
        kayitlar, cikti = [], io.StringIO()
        with redirect_stdout(cikti):
            sorun = paylas.calistir(takvim, durum, ayar or self.ayar, simdi,
                                    kaydet=lambda d: kayitlar.append(copy.deepcopy(d)), istek=meta, uyu=meta.uyu)
        return sorun, cikti.getvalue(), kayitlar

    def test_tek_gorsel(self):
        meta, durum = SahteMeta(), {}
        sorun, _, _ = self.calistir([oge()], durum, meta)
        url = SITE + 'paylasim/medya/2026-09-22/1.jpg'
        self.assertFalse(sorun)
        self.assertEqual([c.veri for c in meta.istekler('POST', 'IG1/media')],
                         [{'image_url': url, 'caption': METIN, 'access_token': TOKEN}])
        self.assertEqual(len(meta.istekler('GET', '/k1')), 1)
        self.assertEqual(meta.istekler('POST', 'media_publish')[0].veri['creation_id'], 'k1')
        self.assertEqual([c.veri for c in meta.istekler('POST', 'SAYFA1/photos')],
                         [{'url': url, 'caption': METIN, 'published': 'true', 'access_token': SAYFA_TOKEN}])
        self.assertEqual(ozet(durum), {'instagram': ('tamam', 1), 'facebook': ('tamam', 1)})
        self.assertEqual((durum[ID]['instagram']['medya_id'], durum[ID]['facebook']['medya_id']),
                         ('ig-k1', 'SAYFA1_foto1'))

    def test_kaydirmali(self):
        medya = [f'paylasim/medya/2026-09-22/{i}.jpg' for i in (1, 2, 3)]
        meta, durum = SahteMeta(), {}
        self.calistir([oge(medya=medya)], durum, meta)
        urller = [SITE + m for m in medya]
        ig = [c.veri for c in meta.istekler('POST', 'IG1/media')]
        self.assertEqual(ig[:3], [{'image_url': u, 'is_carousel_item': 'true', 'access_token': TOKEN} for u in urller])
        self.assertEqual(ig[3], {'media_type': 'CAROUSEL', 'children': 'k1,k2,k3', 'caption': METIN,
                                 'access_token': TOKEN})
        self.assertEqual(meta.istekler('POST', 'media_publish')[0].veri['creation_id'], 'k4')
        self.assertEqual([c.veri for c in meta.istekler('POST', 'SAYFA1/photos')],
                         [{'url': u, 'published': 'false', 'access_token': SAYFA_TOKEN} for u in urller])
        akis = meta.istekler('POST', 'SAYFA1/feed')[0].veri
        self.assertEqual(akis['message'], METIN)
        self.assertEqual([json.loads(akis[f'attached_media[{i}]']) for i in range(3)],
                         [{'media_fbid': f'foto{i}'} for i in (1, 2, 3)])
        self.assertEqual(ozet(durum), {'instagram': ('tamam', 1), 'facebook': ('tamam', 1)})
        self.assertEqual(durum[ID]['facebook']['medya_id'], 'SAYFA1_gonderi')

    def test_hikaye(self):
        meta, durum = SahteMeta(), {}
        self.calistir([oge(tur='hikaye', metin='')], durum, meta)
        url = SITE + 'paylasim/medya/2026-09-22/hikaye.jpg'
        self.assertEqual([c.veri for c in meta.istekler('POST', 'IG1/media')],
                         [{'media_type': 'STORIES', 'image_url': url, 'access_token': TOKEN}])
        self.assertEqual([c.veri for c in meta.istekler('POST', 'SAYFA1/photos')],
                         [{'url': url, 'published': 'false', 'access_token': SAYFA_TOKEN}])
        self.assertEqual(meta.istekler('POST', 'photo_stories')[0].veri,
                         {'photo_id': 'foto1', 'access_token': SAYFA_TOKEN})
        self.assertEqual(ozet(durum), {'instagram': ('tamam', 1), 'facebook': ('tamam', 1)})
        self.assertEqual(durum[ID]['facebook']['medya_id'], 'hikaye1')

    def test_reels_konteyner_hazir_olunca_yayinlanir(self):
        meta, durum = SahteMeta(durumlar={'k1': ['IN_PROGRESS', 'IN_PROGRESS', 'FINISHED']}), {}
        kapak = 'paylasim/medya/2026-09-22/kapak.jpg'
        self.calistir([oge(tur='reels', kapak=kapak)], durum, meta)
        video = SITE + 'paylasim/medya/2026-09-22/reels.mp4'
        self.assertEqual([c.url for c in meta.istekler('HEAD', '')], [video, SITE + kapak])
        self.assertEqual(meta.istekler('POST', 'IG1/media')[0].veri,
                         {'media_type': 'REELS', 'video_url': video, 'caption': METIN, 'share_to_feed': 'true',
                          'cover_url': SITE + kapak, 'access_token': TOKEN})
        ig_sira = [(c.yontem, c.yol.rsplit('/', 1)[-1]) for c in meta.cagrilar
                   if '/IG1/' in c.yol or c.yol.endswith('/k1')]
        self.assertEqual(ig_sira, [('POST', 'media'), ('GET', 'k1'), ('GET', 'k1'), ('GET', 'k1'),
                                   ('POST', 'media_publish')])
        self.assertEqual(meta.uykular, [3, 6])
        baslat, bitir = [c.veri for c in meta.istekler('POST', 'SAYFA1/video_reels')]
        self.assertEqual(baslat, {'upload_phase': 'start', 'access_token': SAYFA_TOKEN})
        (yukleme,) = [c for c in meta.cagrilar if 'rupload.facebook.com' in c.url]
        self.assertEqual(yukleme.url, 'https://rupload.facebook.com/video-upload/v26.0/vid1')
        self.assertEqual(yukleme.basliklar, {'Authorization': f'OAuth {SAYFA_TOKEN}', 'file_url': video})
        self.assertEqual(bitir, {'upload_phase': 'finish', 'video_id': 'vid1', 'video_state': 'PUBLISHED',
                                 'description': METIN, 'access_token': SAYFA_TOKEN})
        self.assertEqual(meta.istekler('GET', '/vid1')[0].basliklar, {'Authorization': f'Bearer {SAYFA_TOKEN}'})
        self.assertEqual(ozet(durum), {'instagram': ('tamam', 1), 'facebook': ('tamam', 1)})
        self.assertEqual(durum[ID]['facebook']['medya_id'], 'reel1')

    def test_fb_reels_yayin_sonrasi_sorgu_hatasi_yeniden_paylasmaz(self):
        takvim = [oge(tur='reels', platformlar=['facebook'])]
        for yanit in ((500, {'error': {'message': 'Geçici hata', 'code': 2}}),
                      (400, {'error': {'message': 'Application request limit reached', 'code': 4}})):
            durum = {}
            self.calistir(takvim, durum, SahteMeta(hata={'GET /vid1': yanit}))
            self.assertEqual(ozet(durum), {'facebook': ('tamam', 1)})
        islenemedi = {'status': {'video_status': 'error', 'processing_phase': {'error': {'message': 'Çözünürlük düşük'}}}}
        durum = {}
        self.calistir(takvim, durum, SahteMeta(hata={'GET /vid1': (200, islenemedi)}))
        self.assertEqual(ozet(durum), {'facebook': ('tekrar', 1)})
        self.assertIn('Çözünürlük düşük', durum[ID]['facebook']['son_hata'])

    def test_ig_yayin_yaniti_kaybolursa_ikinci_kez_yayinlamaz(self):
        takvim, durum = [oge(platformlar=['instagram'])], {}
        hata = {'IG1/media_publish': (500, {'error': {'message': 'An unknown error has occurred.', 'code': 1}})}
        self.calistir(takvim, durum, SahteMeta(hata=hata))
        self.assertEqual(ozet(durum), {'instagram': ('tekrar', 1)})
        self.assertEqual(durum[ID]['instagram']['konteyner'], 'k1')
        meta = SahteMeta(durumlar={'k1': ['PUBLISHED']})  # yayın aslında gerçekleşmişti
        self.calistir(takvim, durum, meta)
        self.assertEqual([c.url for c in meta.cagrilar if c.yontem == 'POST'], [])
        self.assertEqual(ozet(durum), {'instagram': ('tamam', 2)})

    def test_ig_yayinlanmamis_konteyner_yeniden_kullanilir(self):
        durum = {ID: {'instagram': {'durum': 'tekrar', 'deneme': 1, 'konteyner': 'k9'}}}
        meta = SahteMeta(durumlar={'k9': ['FINISHED']})
        self.calistir([oge(platformlar=['instagram'])], durum, meta)
        self.assertEqual(meta.istekler('POST', 'IG1/media'), [])
        self.assertEqual([c.veri['creation_id'] for c in meta.istekler('POST', 'media_publish')], ['k9'])
        self.assertEqual(ozet(durum), {'instagram': ('tamam', 2)})

    def test_konteyner_yayin_isteginden_once_kaydedilir(self):
        kayitlar, meta = [], SahteMeta(patlat='media_publish')  # yayın isteği sırasında süreç kesiliyor
        with redirect_stdout(io.StringIO()), self.assertRaises(KeyboardInterrupt):
            paylas.calistir([oge(platformlar=['instagram'])], {}, self.ayar, SIMDI,
                            kaydet=lambda d: kayitlar.append(copy.deepcopy(d)), istek=meta, uyu=meta.uyu)
        self.assertEqual(kayitlar[-1], {ID: {'instagram': {'konteyner': 'k1'}}})

    def test_fb_yayin_yaniti_belirsizse_yeniden_denenmez(self):
        takvim = [oge(platformlar=['facebook'])]
        for hata in ((500, {'error': {'message': 'Bilinmeyen hata', 'code': 1}}), ConnectionResetError('koptu')):
            durum = {}
            sorun, _, _ = self.calistir(takvim, durum, SahteMeta(hata={'SAYFA1/photos': hata}))
            self.assertTrue(sorun)
            self.assertEqual(ozet(durum), {'facebook': ('hata', 1)})
            self.assertIn('yayınlanmış olabilir', durum[ID]['facebook']['son_hata'])
            meta = SahteMeta()
            self.calistir(takvim, durum, meta)
            self.assertEqual(meta.cagrilar, [])
        # Yayınlanmamış foto yüklemesindeki 5xx belirsiz sayılmaz: gönderi henüz yok, yeniden denenir.
        durum = {}
        medya = ['paylasim/medya/2026-09-22/1.jpg', 'paylasim/medya/2026-09-22/2.jpg']
        self.calistir([oge(medya=medya, platformlar=['facebook'])], durum,
                      SahteMeta(hata={'SAYFA1/photos': (500, {'error': {'message': 'Bilinmeyen hata', 'code': 1}})}))
        self.assertEqual(ozet(durum), {'facebook': ('tekrar', 1)})

    def test_fb_reels_onceki_video_yayinlandiysa_yeniden_yuklenmez(self):
        takvim = [oge(tur='reels', platformlar=['facebook'])]
        for faz, istek_sayisi, medya_id in (('complete', 0, 'vid7'), ('not_started', 2, 'reel1')):
            durum = {ID: {'facebook': {'durum': 'tekrar', 'deneme': 1, 'video_id': 'vid7'}}}
            meta = SahteMeta(hata={'GET /vid7': (200, {'status': {'publishing_phase': {'status': faz}}})})
            self.calistir(takvim, durum, meta)
            self.assertEqual(len(meta.istekler('POST', 'SAYFA1/video_reels')), istek_sayisi)
            self.assertEqual(ozet(durum), {'facebook': ('tamam', 2)})
            self.assertEqual(durum[ID]['facebook']['medya_id'], medya_id)

    def test_fb_reels_video_kimligi_yayin_isteginden_once_kaydedilir(self):
        meta, anlik = SahteMeta(), []

        def kaydet(d):  # her kayıtta o ana dek atılmış video_reels isteği sayısını da tut
            anlik.append((copy.deepcopy(d), len(meta.istekler('POST', 'SAYFA1/video_reels'))))
        with redirect_stdout(io.StringIO()):
            paylas.calistir([oge(tur='reels', platformlar=['facebook'])], {}, self.ayar, SIMDI,
                            kaydet=kaydet, istek=meta, uyu=meta.uyu)
        self.assertEqual(anlik[0], ({ID: {'facebook': {'video_id': 'vid1'}}}, 1))  # yalnız start atılmışken

    def test_hatali_ogeler_calisma_aninda_da_paylasilmaz(self):
        takvim = [oge('cift-platform', platformlar=['instagram', 'instagram']), {**oge(), 'id': 20260922},
                  oge('ikiz'), oge('ikiz')]
        meta, durum = SahteMeta(), {}
        sorun, cikti, _ = self.calistir(takvim, durum, meta)
        self.assertTrue(sorun)
        self.assertEqual((meta.cagrilar, durum), ([], {}))
        self.assertIn('birden çok kez', cikti)

    def test_reels_konteyner_hatasi_deneme_sayar(self):
        meta, durum = SahteMeta(durumlar={'k1': ['IN_PROGRESS', 'ERROR']}), {}
        self.calistir([oge(tur='reels', platformlar=['instagram'])], durum, meta)
        self.assertEqual(ozet(durum), {'instagram': ('tekrar', 1)})
        self.assertIn('ERROR', durum[ID]['instagram']['son_hata'])
        self.assertEqual(meta.istekler('POST', 'media_publish'), [])

    def test_ig_basarili_fb_basarisiz_sonraki_calismada_yalniz_fb(self):
        hata = {'SAYFA1/photos': (400, {'error': {'message': 'Görsel indirilemedi', 'code': 324}})}
        meta, durum = SahteMeta(hata=hata), {}
        sorun, _, kayitlar = self.calistir([oge()], durum, meta)
        self.assertFalse(sorun)  # yeniden denenecek; henüz dikkat gerektirmiyor
        self.assertEqual(ozet(durum), {'instagram': ('tamam', 1), 'facebook': ('tekrar', 1)})
        self.assertIn('Görsel indirilemedi', durum[ID]['facebook']['son_hata'])
        self.assertEqual(kayitlar[-2][ID]['instagram']['durum'], 'tamam')  # IG sonucu FB denenmeden kaydedildi
        self.assertNotIn('facebook', kayitlar[-2][ID])
        meta = SahteMeta()
        self.calistir([oge()], durum, meta)
        self.assertEqual([c.url for c in meta.cagrilar if '/IG1/' in c.url], [])
        self.assertEqual(len(meta.istekler('POST', 'SAYFA1/photos')), 1)
        self.assertEqual(ozet(durum), {'instagram': ('tamam', 1), 'facebook': ('tamam', 2)})

    def test_uc_denemeden_sonra_hata(self):
        hata = {'SAYFA1/photos': (400, {'error': {'message': 'İzin yok', 'code': 200}})}
        takvim, durum = [oge(platformlar=['facebook'])], {}
        for beklenen in ('tekrar', 'tekrar', 'hata'):
            sorun, _, _ = self.calistir(takvim, durum, SahteMeta(hata=hata))
            self.assertEqual(durum[ID]['facebook']['durum'], beklenen)
        self.assertTrue(sorun)
        self.assertEqual(durum[ID]['facebook']['deneme'], 3)
        meta = SahteMeta()
        self.calistir(takvim, durum, meta)
        self.assertEqual(meta.cagrilar, [])

    def test_alti_saatten_fazla_geciken_atlanir(self):
        meta, durum = SahteMeta(), {}
        sorun, _, _ = self.calistir([oge(zaman=(SIMDI - timedelta(hours=6, minutes=1)).isoformat())], durum, meta)
        self.assertTrue(sorun)
        self.assertEqual(meta.cagrilar, [])
        self.assertEqual(ozet(durum), {'instagram': ('atlandi', 0), 'facebook': ('atlandi', 0)})
        durum = {}
        self.calistir([oge(zaman=(SIMDI - timedelta(hours=5, minutes=59)).isoformat())], durum, SahteMeta())
        self.assertEqual(ozet(durum), {'instagram': ('tamam', 1), 'facebook': ('tamam', 1)})

    def test_medya_404_ise_deneme_sayilmaz(self):
        url = SITE + 'paylasim/medya/2026-09-22/1.jpg'
        meta, durum = SahteMeta(eksik={url}), {}
        sorun, cikti, kayitlar = self.calistir([oge()], durum, meta)
        self.assertFalse(sorun)
        self.assertEqual([(c.yontem, c.url) for c in meta.cagrilar], [('HEAD', url)])
        self.assertEqual((durum, kayitlar), ({}, []))
        self.assertIn('henüz yayında değil', cikti)
        self.calistir([oge()], durum, SahteMeta())
        self.assertEqual(ozet(durum), {'instagram': ('tamam', 1), 'facebook': ('tamam', 1)})

    def test_token_ne_logda_ne_durumda_ne_adreste(self):
        mesaj = f'Invalid OAuth access token {TOKEN} (access_token={SAYFA_TOKEN}) {SAYFA_TOKEN}'
        yanit = (400, {'error': {'message': mesaj, 'type': 'OAuthException', 'code': 100}})
        meta, durum = SahteMeta(hata={'IG1/media': yanit, 'SAYFA1/photos': yanit}), {}
        _, cikti, _ = self.calistir([oge()], durum, meta)
        gorunen = cikti + json.dumps(durum, ensure_ascii=False)
        for gizli in (TOKEN, SAYFA_TOKEN):
            self.assertNotIn(gizli, gorunen)
        self.assertIn('***', durum[ID]['instagram']['son_hata'])
        self.assertIn('***', durum[ID]['facebook']['son_hata'])
        for c in meta.cagrilar:
            self.assertNotIn(TOKEN, c.url)
            self.assertNotIn(SAYFA_TOKEN, c.url)
        get = [c for c in meta.cagrilar if c.yontem == 'GET']
        post = [c for c in meta.cagrilar if c.yontem == 'POST']
        self.assertTrue(get and all(c.basliklar['Authorization'].startswith('Bearer ') for c in get))
        self.assertTrue(post and all(c.veri['access_token'] in (TOKEN, SAYFA_TOKEN) for c in post))

    def test_hiz_siniri_calismayi_durdurur_deneme_saymaz(self):
        hata = {'SAYFA1/photos': (400, {'error': {'message': 'Application request limit reached', 'code': 4}})}
        durum = {}
        with self.assertRaises(paylas.DurdurHatasi):
            self.calistir([oge(), oge('2026-09-22-ikinci')], durum, SahteMeta(hata=hata))
        self.assertEqual(ozet(durum), {'instagram': ('tamam', 1)})
        self.assertNotIn('2026-09-22-ikinci', durum)

    def test_facebook_hikaye_bayrakla_kapatilir(self):
        ayar = paylas.Ayar(token=TOKEN, ig_id='IG1', fb_id='SAYFA1', fb_hikaye=False)
        meta, durum = SahteMeta(), {}
        sorun, _, _ = self.calistir([oge(tur='hikaye', metin='')], durum, meta, ayar=ayar)
        self.assertFalse(sorun)
        self.assertEqual(ozet(durum), {'instagram': ('tamam', 1), 'facebook': ('atlandi', 0)})
        self.assertEqual([c.url for c in meta.cagrilar if 'SAYFA1' in c.url], [])

    def test_zaman_sirasi_ve_zamani_gelmeyen(self):
        yalniz_ig = ['instagram']
        takvim = [oge('ikinci', zaman='2026-09-22T20:35:00+03:00', medya=['paylasim/2.jpg'], platformlar=yalniz_ig),
                  oge('birinci', zaman='2026-09-22T17:30:00Z', medya=['paylasim/1.jpg'], platformlar=yalniz_ig),
                  oge('gelecek', zaman='2026-09-22T20:41:00+03:00', platformlar=yalniz_ig)]
        meta, durum = SahteMeta(), {}
        self.calistir(takvim, durum, meta)
        self.assertEqual([c.veri['image_url'] for c in meta.istekler('POST', 'IG1/media')],
                         [SITE + 'paylasim/1.jpg', SITE + 'paylasim/2.jpg'])
        self.assertEqual(set(durum), {'birinci', 'ikinci'})


class KomutSatiriTest(unittest.TestCase):
    def setUp(self):
        gecici = tempfile.TemporaryDirectory()
        self.addCleanup(gecici.cleanup)
        self.kok = Path(gecici.name)
        (self.kok / 'paylasim').mkdir()
        self.durum_yolu = self.kok / 'paylasim' / 'durum.json'
        self.durum_yolu.write_text('{}\n', 'utf-8')
        for yama in (mock.patch.object(paylas, 'KOK', self.kok),
                     mock.patch.dict(os.environ, {'META_TOKEN': TOKEN, 'IG_KULLANICI_ID': 'IG1', 'FB_SAYFA_ID': 'SAYFA1'})):
            yama.start()
            self.addCleanup(yama.stop)
        for ad in ('SITE_KOKU', 'GRAPH_SURUM', 'FB_HIKAYE', 'FB_REELS'):
            os.environ.pop(ad, None)

    def takvim_yaz(self, takvim):
        (self.kok / 'paylasim' / 'takvim.json').write_text(json.dumps(takvim, ensure_ascii=False), 'utf-8')

    def medya(self, yol, icerik):
        (self.kok / yol).parent.mkdir(parents=True, exist_ok=True)
        (self.kok / yol).write_bytes(icerik)
        return yol

    def main(self, *argumanlar):
        cikti = io.StringIO()
        with redirect_stdout(cikti):
            kod = paylas.main(list(argumanlar))
        return kod, cikti.getvalue()

    def test_kuru_istek_atmaz_durumu_degistirmez(self):
        self.takvim_yaz([oge(), oge('2026-09-23-akis', zaman='2026-09-23T20:30:00+03:00'),
                         oge('eski', zaman='2026-09-22T09:00:00+03:00')])
        once = self.durum_yolu.read_bytes()
        del os.environ['META_TOKEN']  # kuru çalışma token istemez
        yasak = mock.Mock(side_effect=AssertionError('kuru çalışmada ağ isteği atıldı'))
        with mock.patch.object(paylas, 'http_istek', yasak), mock.patch.object(paylas.urllib.request, 'urlopen', yasak):
            kod, cikti = self.main('--kuru', '--simdi', '2026-09-22T20:40:00+03:00')
        self.assertEqual(kod, 0, cikti)
        yasak.assert_not_called()
        self.assertIn(f'[kuru] {ID} (tek görsel) → instagram, facebook', cikti)
        self.assertIn(SITE + 'paylasim/medya/2026-09-22/1.jpg', cikti)
        self.assertIn('sıradaki: 2026-09-23-akis', cikti)
        self.assertIn('[kuru] eski: 6 saatten fazla gecikti', cikti)  # yalnız bildirilir, çıkış kodu 0 kalır
        self.assertEqual(self.durum_yolu.read_bytes(), once)
        self.assertEqual(sorted(p.name for p in (self.kok / 'paylasim').iterdir()), ['durum.json', 'takvim.json'])

    def test_gercek_calisma_diske_yazar(self):
        self.takvim_yaz([oge(zaman=(datetime.now(TR) - timedelta(minutes=5)).isoformat(timespec='seconds'))])
        with mock.patch.object(paylas, 'http_istek', SahteMeta()):
            kod, cikti = self.main()
        self.assertEqual(kod, 0, cikti)
        self.assertEqual(ozet(json.loads(self.durum_yolu.read_text('utf-8'))),
                         {'instagram': ('tamam', 1), 'facebook': ('tamam', 1)})
        self.assertNotIn(TOKEN, cikti)

    def test_basari_yarida_kesilse_de_diske_yazilmis_olur(self):
        self.takvim_yaz([oge(zaman=(datetime.now(TR) - timedelta(minutes=5)).isoformat(timespec='seconds'))])
        meta = SahteMeta(patlat='/SAYFA1')  # Instagram bitti, Facebook'un ilk isteğinde süreç kesiliyor
        with mock.patch.object(paylas, 'http_istek', meta), self.assertRaises(KeyboardInterrupt):
            self.main()
        self.assertEqual(ozet(json.loads(self.durum_yolu.read_text('utf-8'))), {'instagram': ('tamam', 1)})

    def test_token_yoksa_calismaz(self):
        self.takvim_yaz([oge()])
        del os.environ['META_TOKEN']
        kod, cikti = self.main()
        self.assertEqual(kod, 1)
        self.assertIn('META_TOKEN tanımlı değil', cikti)

    def test_dogrula_hatali_takvimi_yakalar(self):
        dogru = self.medya('paylasim/medya/dogru.jpg', sahte_jpeg(1080, 1350))
        genis = self.medya('paylasim/medya/genis.jpg', sahte_jpeg(2000, 1000))
        sonda = self.medya('paylasim/medya/sonda.mp4', sahte_mp4(1080, 1920, 30, moov_basta=False))
        uzun = self.medya('paylasim/medya/uzun.mp4', sahte_mp4(1080, 1920, 120))
        self.takvim_yaz([
            oge('a', medya=[dogru]),
            oge('a', medya=[dogru]),  # tekrar eden id
            oge('b', medya=[dogru], zaman='2026-09-22T20:30:00'),  # saat dilimi yok
            oge('c', medya=[genis]),  # 2:1, akış sınırının dışında
            oge('d', tur='hikaye', medya=[dogru], metin=''),  # hikâye 9:16 değil
            oge('e', medya=['paylasim/medya/yok.jpg']),  # dosya yok
            oge('f', tur='reels', medya=[dogru]),  # reels ama JPG
            oge('g', tur='reels', medya=[sonda]),  # moov kutusu sonda
            oge('h', tur='reels', medya=[uzun]),  # Facebook Reels için 90 sn'den uzun
            oge('i', medya=[dogru] * 11),  # 10'dan fazla görsel
            oge('j', tur='hikaye', medya=[self.medya('paylasim/medya/h.jpg', sahte_jpeg(1080, 1920))],
                metin='açıklama'),  # hikâyede metin
            oge('k', tur='video', medya=[dogru]),  # bilinmeyen tür
            oge('l', medya=[dogru], platformlar=['twitter']),  # bilinmeyen platform
            oge('m', medya=['paylasim/medya/kare.jpg']),  # diskte Kare.jpg; GitHub Pages harf duyarlı
            oge('n', medya=[dogru], metin='Günün sorusu #a #b #c #d #e #f'),  # 5'ten fazla etiket
        ])
        self.medya('paylasim/medya/Kare.jpg', sahte_jpeg(1080, 1080))
        kod, cikti = self.main('--dogrula')
        self.assertEqual(kod, 1)
        hatali = {satir.split()[1].rstrip(':') for satir in cikti.splitlines() if satir.startswith('HATA')}
        self.assertEqual(hatali, set('abcdefghijklmn'))
        for parca in ('id tekrar ediyor', 'saat dilimli', '4:5 ile 1.91:1', 'hikâye 9:16', 'bulunamadı',
                      'MP4 olmalı', 'faststart', '3-90 sn', '1-10 medya', 'metin boş', 'tur gonderi', 'platformlar',
                      'büyük/küçük harf', 'en fazla 5 etiket'):
            self.assertIn(parca, cikti)

    def test_dogrula_gecerli_takvim(self):
        m = self.medya
        self.takvim_yaz([
            oge('tek', medya=[m('paylasim/medya/1.jpg', sahte_jpeg(1080, 1350))]),
            oge('kaydirmali', medya=[m('paylasim/medya/2.jpg', sahte_jpeg(1080, 1350, ilerlemeli=True)),
                                     m('paylasim/medya/kare.jpg', sahte_jpeg(1080, 1080))]),
            oge('hikaye', tur='hikaye', metin='', medya=[m('paylasim/medya/h.jpg', sahte_jpeg(1080, 1920))]),
            oge('reels', tur='reels', medya=[m('paylasim/medya/r.mp4', sahte_mp4(1080, 1920, 30))],
                kapak=m('paylasim/medya/k.jpg', sahte_jpeg(1080, 1920))),
        ])
        kod, cikti = self.main('--dogrula')
        self.assertEqual(kod, 0, cikti)
        self.assertIn('4 öğe: 0 hata, 1 uyarı', cikti)
        self.assertIn('ilk görsele göre kırpar', cikti)

    def test_ornek_takvim_ve_bos_durum(self):
        ornek = json.loads((DEPO / 'paylasim' / 'takvim.ornek.json').read_text('utf-8'))
        self.assertEqual({o['tur'] for o in ornek}, {'gonderi', 'hikaye', 'reels'})
        self.assertTrue(any(o['tur'] == 'gonderi' and len(o['medya']) > 1 for o in ornek))
        for o in ornek:
            for yol in o['medya'] + ([o['kapak']] if 'kapak' in o else []):
                self.medya(yol, sahte_mp4(1080, 1920, 30) if yol.endswith('.mp4')
                           else sahte_jpeg(1080, 1350 if o['tur'] == 'gonderi' else 1920))
        self.assertEqual(paylas.dogrula(ornek, self.kok), ([], []))
        # Depodaki durum.json ilk paylaşımdan sonra dolar; burada yalnız geçerli bir JSON nesnesi olmalı.
        self.assertIsInstance(json.loads((DEPO / 'paylasim' / 'durum.json').read_text('utf-8')), dict)

    def test_birlestir_komutu_eksik_durum_dosyasinda_da_calisir(self):
        once, sonra = self.kok / 'once.json', self.kok / 'sonra.json'
        once.write_text('{}', 'utf-8')
        sonra.write_text(json.dumps({ID: {'instagram': {'durum': 'tamam', 'deneme': 1}}}), 'utf-8')
        self.durum_yolu.unlink()  # depoda henüz izlenmeyen / olmayan durum.json
        kod, _ = self.main('--birlestir', str(once), str(sonra))
        self.assertEqual(kod, 0)
        self.assertEqual(json.loads(self.durum_yolu.read_text('utf-8')), {ID: {'instagram': {'durum': 'tamam', 'deneme': 1}}})

    def test_ortam_ayarlari(self):
        os.environ.update({'FB_HIKAYE': '0', 'GRAPH_SURUM': '26.0', 'SITE_KOKU': ''})
        ayar = paylas.Ayar.ortamdan()
        self.assertEqual((ayar.fb_hikaye, ayar.fb_reels, ayar.surum, ayar.site),
                         (False, True, 'v26.0', paylas.SITE_VARSAYILAN))


class BirlestirTest(unittest.TestCase):
    def test_yalniz_bu_calismanin_degistirdikleri_uzaktakinin_ustune_yazilir(self):
        tekrar, tamam = {'durum': 'tekrar', 'deneme': 1}, {'durum': 'tamam', 'deneme': 2}
        once = {'a': {'instagram': tekrar}, 'b': {'facebook': {'durum': 'hata', 'deneme': 3}}}
        sonra = {'a': {'instagram': tamam}, 'b': {'facebook': {'durum': 'hata', 'deneme': 3}},
                 'c': {'facebook': tamam}}
        uzak = {'a': {'instagram': tekrar}, 'd': {'instagram': tamam}}  # çalışma sırasında b elle silindi, d eklendi
        self.assertEqual(paylas.birlestir(once, sonra, uzak),
                         {'a': {'instagram': tamam}, 'c': {'facebook': tamam}, 'd': {'instagram': tamam}})


class BicimTest(unittest.TestCase):
    def test_jpeg_olcu(self):
        with tempfile.TemporaryDirectory() as klasor:
            yol = Path(klasor) / 'a.jpg'
            for ilerlemeli in (False, True):
                yol.write_bytes(sahte_jpeg(1080, 1350, ilerlemeli))
                self.assertEqual(paylas.jpeg_olcu(yol), (1080, 1350))
            yol.write_bytes(b'\x89PNG\r\n\x1a\n')
            with self.assertRaises(ValueError):
                paylas.jpeg_olcu(yol)

    def test_mp4_bilgi(self):
        with tempfile.TemporaryDirectory() as klasor:
            yol = Path(klasor) / 'r.mp4'
            yol.write_bytes(sahte_mp4(1080, 1920, 12.5))
            self.assertEqual(paylas.mp4_bilgi(yol), (1080, 1920, 12.5, True))
            yol.write_bytes(sahte_mp4(1080, 1920, 12.5, moov_basta=False))
            self.assertFalse(paylas.mp4_bilgi(yol)[3])

    def test_medya_url_kodlanir(self):
        self.assertEqual(paylas.medya_url('https://ornek.github.io/site', 'paylasim/medya/ağustos 1/şekil.jpg'),
                         'https://ornek.github.io/site/paylasim/medya/a%C4%9Fustos%201/%C5%9Fekil.jpg')

    def test_maskele(self):
        paylas.gizli_ekle(TOKEN)
        kayitsiz = 'EAAB' + 'x1' * 30
        metin = paylas.maskele(f'{TOKEN} | access_token=gizli123deger&x=1 | "access_token": "baskaGizli456" | '
                               f'Authorization: Bearer abcdefghijklmnop1234 | {kayitsiz}')
        for gizli in (TOKEN, 'gizli123deger', 'baskaGizli456', 'abcdefghijklmnop1234', kayitsiz):
            self.assertNotIn(gizli, metin)
        self.assertIn('x=1', metin)


if __name__ == '__main__':
    unittest.main()


class KontrolTesti(unittest.TestCase):
    """--kontrol salt okumadır: yalnız GET atar, kimlikleri doğrular."""

    def _graph(self, sayfalar):
        cagrilar = []

        def istek(yontem, url, govde, basliklar, zaman_asimi=60):
            cagrilar.append((yontem, url))
            yol = urllib.parse.urlsplit(url).path
            if yol.endswith('/me/accounts'):
                return 200, json.dumps({'data': sayfalar}).encode()
            if yol.endswith('/content_publishing_limit'):
                return 200, json.dumps({'data': [{'quota_usage': 2, 'config': {'quota_total': 100}}]}).encode()
            return 200, json.dumps({'username': 'bilsemnova'}).encode()
        ayar = paylas.Ayar(token='EAAtesttokentesttokentesttoken', ig_id='IG1', fb_id='FB1')
        return ayar, paylas.Graph(ayar, istek=istek), cagrilar

    def test_kimlikler_dogruysa_basarili_ve_yalniz_get(self):
        ayar, graph, cagrilar = self._graph([{'id': 'FB1', 'name': 'BilsemNova',
                                              'instagram_business_account': {'id': 'IG1', 'username': 'bilsemnova'}}])
        with redirect_stdout(io.StringIO()) as cikti:
            self.assertEqual(paylas.kontrol(ayar, graph), 0)
        self.assertTrue(all(y == 'GET' for y, _ in cagrilar))
        self.assertIn('FB_SAYFA_ID=FB1', cikti.getvalue())
        self.assertIn('IG_KULLANICI_ID=IG1', cikti.getvalue())
        self.assertNotIn('EAAtesttoken', cikti.getvalue())

    def test_sayfa_yoksa_ya_da_kimlik_yanlissa_hata(self):
        ayar, graph, _ = self._graph([])
        with redirect_stdout(io.StringIO()):
            self.assertEqual(paylas.kontrol(ayar, graph), 1)
        ayar, graph, _ = self._graph([{'id': 'BASKA', 'name': 'X'}])
        with redirect_stdout(io.StringIO()):
            self.assertEqual(paylas.kontrol(ayar, graph), 1)
