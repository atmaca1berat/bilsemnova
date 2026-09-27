"""Konu anlatımlarında kullanılan soruları uygulamanın soru bankasından siteye aktarır.

Uygulama deposu (BilsemDeha, özel) sitenin derlendiği yerde yok; bu yüzden gereken sorular
yerelde bir kez aktarılıp siteyle birlikte commit'lenir.

Listeler: araclar/soru_listesi.txt ve araclar/sorular/*.txt — her satır "sınıf kategori/yolu soru-id"
(# ile başlayan kısım yorum). Aynı soru birden çok listede olabilir.
Çıktı:
  public/soru/<sınıf>-<id>/soru.svg, a.svg, b.svg, c.svg[, d.svg]  (+ aynı adla .jpg: PDF için düz kopya)
  src/data/sorular.json  → {"<sınıf>-<id>": {sinif, kategori, id, altTip, zorluk, soruMetni, sikSayisi, dogru, hafiza}}

Bankadaki bütün görüntü biçimleri SVG'ye çevrilir (uygulamadaki visual_question_display.dart ile aynı
yerleşim): svg, icon-stage (panel + simge + yazı), composite (satır/sütun/üst üste simge, simge dizisi,
satır içi svg), mirror-half (yarısı gösterilen simge + ayna ekseni), image-crop-puzzle (eksik parçalı resim).
Şıklar: svg, icon (döndür/çevir), icon-row, image-crop, number, letter.
Simgeler (mobile/assets/icons/grup1/<slug>.webp) SVG'nin içine gömülür: <img> içindeki SVG dış dosya yükleyemez.
Kullanım: python3 araclar/soru_aktar.py
"""
import base64
import glob
import gzip
import json
import os
import re
import shutil
import subprocess
from html import escape

SITE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
MOBIL = '/Users/beratatmaca/Desktop/bilsem/mobile'
BANKA = f'{MOBIL}/assets/questions'
IKONLAR = f'{MOBIL}/assets/icons/grup1'
CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
HARF = 'abcd'

_ikon_onbellek = {}


IKON_EN_BUYUK = 360  # piksel; sitede bir simge bundan büyük gösterilmiyor (retina dahil)


def ikon(slug):
    """Simgeyi küçültüp (en fazla IKON_EN_BUYUK px) WebP olarak gömer: uygulamadaki simgeler büyük ve
    olduğu gibi gömülünce resimli bir soru 300 KB'ı buluyordu."""
    if slug not in _ikon_onbellek:
        import io
        from PIL import Image
        yol = os.path.join(IKONLAR, f'{slug}.webp')
        if not os.path.exists(yol):
            raise SystemExit(f'simge yok: {yol}')
        im = Image.open(yol)
        im.thumbnail((IKON_EN_BUYUK, IKON_EN_BUYUK), Image.LANCZOS)
        tampon = io.BytesIO()
        im.save(tampon, 'WEBP', quality=82, method=6)
        _ikon_onbellek[slug] = 'data:image/webp;base64,' + base64.b64encode(tampon.getvalue()).decode()
    return _ikon_onbellek[slug]


def svg_sar(w, h, icerik, vb=None):
    vb = vb or f'0 0 {w} {h}'
    return (f'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" '
            f'width="{w}" height="{h}" viewBox="{vb}">{icerik}</svg>')


def ikon_ogesi(slug, x, y, w, h, rotate=0, flipH=False, flipV=False):
    """Simgeyi (x, y, w, h) kutusuna 'contain' ile yerleştirir; merkez etrafında döndürür/çevirir."""
    cx, cy = x + w / 2, y + h / 2
    donusum = []
    if rotate or flipH or flipV:
        donusum.append(f'translate({cx} {cy})')
        if rotate:
            donusum.append(f'rotate({rotate})')
        if flipH or flipV:
            donusum.append(f'scale({-1 if flipH else 1} {-1 if flipV else 1})')
        donusum.append(f'translate({-cx} {-cy})')
    t = f' transform="{" ".join(donusum)}"' if donusum else ''
    return (f'<image href="{ikon(slug)}" x="{x}" y="{y}" width="{w}" height="{h}" '
            f'preserveAspectRatio="xMidYMid meet"{t}/>')


def svg_boyut(svg):
    w = re.search(r'<svg[^>]*\swidth="([\d.]+)', svg[:3000])
    h = re.search(r'<svg[^>]*\sheight="([\d.]+)', svg[:3000])
    if w and h:
        return float(w.group(1)), float(h.group(1))
    vb = re.search(r'viewBox="\s*[-\d.]+[\s,]+[-\d.]+[\s,]+([\d.]+)[\s,]+([\d.]+)', svg[:3000])
    return (float(vb.group(1)), float(vb.group(2))) if vb else (200.0, 200.0)


def svg_gom(svg, x, y, w, h):
    """Satır içi SVG'yi ayrı bir <image> olarak gömer (kimlik çakışmasını önler)."""
    veri = 'data:image/svg+xml;base64,' + base64.b64encode(svg.encode()).decode()
    return f'<image href="{veri}" x="{x}" y="{y}" width="{w}" height="{h}" preserveAspectRatio="xMidYMid meet"/>'


# ── Görüntü (display) biçimleri ─────────────────────────────────────────────
def icon_stage(d):
    x0, y0, w, h = d.get('viewBox', [0, 0, 800, 400])
    parca = [f'<rect x="{x0}" y="{y0}" width="{w}" height="{h}" fill="{d.get("background", "#FFFFFF")}"/>']
    for p in d.get('panels', []):
        parca.append(f'<rect x="{p.get("x", 0)}" y="{p.get("y", 0)}" width="{p.get("w", 80)}" height="{p.get("h", 80)}" '
                     f'rx="{p.get("r", 12)}" fill="{p.get("fill", "#FAFAFA")}" stroke="{p.get("stroke", "#CCCCCC")}" '
                     f'stroke-width="{p.get("strokeWidth", 2)}"/>')
    for s in d.get('shapes', []):
        if (s.get('kind') or 'text') == 'text':
            boyut = s.get('size', 28)
            # Uygulamada metnin sol üst köşesi (x, y); SVG'de taban çizgisi → yaklaşık yazı yüksekliği kadar aşağı.
            parca.append(f'<text x="{s.get("x", 0)}" y="{s.get("y", 0) + boyut * 0.95}" font-family="Nunito, Arial, sans-serif" '
                         f'font-weight="700" font-size="{boyut}" fill="{s.get("color", "#333333")}">{escape(str(s.get("text", "")))}</text>')
    for ic in d.get('icons', []):
        parca.append(ikon_ogesi(ic['slug'], ic.get('x', 0), ic.get('y', 0), ic.get('w', 80), ic.get('h', 80),
                                ic.get('rotate', 0), ic.get('flipH', False), ic.get('flipV', False)))
    return svg_sar(w, h, ''.join(parca), f'{x0} {y0} {w} {h}')


def composite(d):
    yerlesim = d.get('layout', 'row')
    bosluk = d.get('gap', 24)
    dolgu = d.get('padding', 22)
    ogeler = []
    for o in d.get('items', []):
        tur = o.get('kind', 'icon')
        if tur == 'icon':
            s = o.get('size', 100)
            ogeler.append((s, s, lambda x, y, o=o, s=s: ikon_ogesi(o['slug'], x, y, s, s, o.get('rotate', 0),
                                                                   o.get('flipH', False), o.get('flipV', False))))
        elif tur == 'icon-row':
            s, g, n = o.get('size', 62), o.get('gap', 6), len(o.get('slugs', []))
            gen = n * s + (n - 1) * g

            def dizi(x, y, o=o, s=s, g=g, gen=gen):
                ic = ''.join(ikon_ogesi(sl, x + i * (s + g), y, s, s) for i, sl in enumerate(o['slugs']))
                if o.get('rotate') or o.get('flipH') or o.get('flipV'):
                    cx, cy = x + gen / 2, y + s / 2
                    t = f'translate({cx} {cy}) rotate({o.get("rotate", 0)}) scale({-1 if o.get("flipH") else 1} {-1 if o.get("flipV") else 1}) translate({-cx} {-cy})'
                    return f'<g transform="{t}">{ic}</g>'
                return ic
            ogeler.append((gen, s, dizi))
        elif tur == 'svg':
            sw, sh = svg_boyut(o['content'])
            sw, sh = o.get('width', sw), o.get('height', sh)
            ogeler.append((sw, sh, lambda x, y, o=o, sw=sw, sh=sh: svg_gom(o['content'], x, y, sw, sh)))
    if yerlesim == 'column':
        W = max(w for w, _, _ in ogeler) + 2 * dolgu
        H = sum(h for _, h, _ in ogeler) + bosluk * (len(ogeler) - 1) + 2 * dolgu
    elif yerlesim == 'stack':
        W = max(w for w, _, _ in ogeler) + 2 * dolgu
        H = max(h for _, h, _ in ogeler) + 2 * dolgu
    else:
        W = sum(w for w, _, _ in ogeler) + bosluk * (len(ogeler) - 1) + 2 * dolgu
        H = max(h for _, h, _ in ogeler) + 2 * dolgu
    kenar = ' stroke="#E0E0E0" stroke-width="1.5"' if d.get('border', True) else ''
    parca = [f'<rect x="0.75" y="0.75" width="{W - 1.5}" height="{H - 1.5}" rx="{d.get("borderRadius", 14)}" '
             f'fill="{d.get("background", "#FFFFFF")}"{kenar}/>']
    x, y = dolgu, dolgu
    for w, h, ciz in ogeler:
        if yerlesim == 'column':
            parca.append(ciz((W - w) / 2, y))
            y += h + bosluk
        elif yerlesim == 'stack':
            parca.append(ciz((W - w) / 2, (H - h) / 2))
        else:
            parca.append(ciz(x, (H - h) / 2))
            x += w + bosluk
    return svg_sar(round(W), round(H), ''.join(parca))


def mirror_half(d):
    s = d.get('size', 160)
    yari = d.get('shownHalf', 'left')
    kutu = {'left': (0, 0, s / 2, s), 'right': (s / 2, 0, s / 2, s), 'top': (0, 0, s, s / 2), 'bottom': (0, s / 2, s, s / 2)}
    karsi = {'left': 'right', 'right': 'left', 'top': 'bottom', 'bottom': 'top'}[yari]
    gx, gy, gw, gh = kutu[yari]
    kx, ky, kw, kh = kutu[karsi]
    cizgiler = ''.join(f'<line x1="{kx + i}" y1="{ky}" x2="{kx + i - kh}" y2="{ky + kh}" stroke="#EDEDED" stroke-width="3"/>'
                       for i in range(0, int(kw + kh) + 1, 10))
    eksen = (f'<line x1="{s / 2}" y1="0" x2="{s / 2}" y2="{s}"' if yari in ('left', 'right')
             else f'<line x1="0" y1="{s / 2}" x2="{s}" y2="{s / 2}"')
    return svg_sar(s, s, (
        f'<defs><clipPath id="gorunen"><rect x="{gx}" y="{gy}" width="{gw}" height="{gh}"/></clipPath>'
        f'<clipPath id="kayip"><rect x="{kx}" y="{ky}" width="{kw}" height="{kh}"/></clipPath></defs>'
        f'<rect width="{s}" height="{s}" fill="#FFFFFF"/>'
        f'<g clip-path="url(#kayip)"><rect x="{kx}" y="{ky}" width="{kw}" height="{kh}" fill="#F5F5F5"/>{cizgiler}</g>'
        f'<g clip-path="url(#gorunen)">{ikon_ogesi(d["slug"], 0, 0, s, s)}</g>'
        f'{eksen} stroke="#E53935" stroke-width="2.5" stroke-dasharray="8 6"/>'))


def image_crop_puzzle(d):
    s = d.get('size', 200)
    m = d.get('missing', {})
    x, y = s * m.get('xPct', 30) / 100 + 10, s * m.get('yPct', 55) / 100 + 10
    w, h = s * m.get('wPct', 30) / 100, s * m.get('hPct', 25) / 100
    return svg_sar(s + 20, s + 20, (
        f'<rect x="0.75" y="0.75" width="{s + 18.5}" height="{s + 18.5}" rx="12" fill="#FFFFFF" stroke="#ECEEF1" stroke-width="1.5"/>'
        f'{ikon_ogesi(d["slug"], 10, 10, s, s)}'
        f'<rect x="{x}" y="{y}" width="{w}" height="{h}" rx="4" fill="#FFFFFF" stroke="#BDBDBD" stroke-width="2"/>'))


def goruntu_svg(d):
    tur = d.get('type')
    if tur == 'svg':
        return d['svg']
    return {'icon-stage': icon_stage, 'composite': composite, 'mirror-half': mirror_half,
            'image-crop-puzzle': image_crop_puzzle}[tur](d)


# ── Şık biçimleri ───────────────────────────────────────────────────────────
def sik_svg(o):
    tur = o.get('type')
    if tur == 'svg':
        return o['svg']
    if tur == 'icon':
        return svg_sar(200, 200, '<rect width="200" height="200" fill="#FFFFFF"/>' +
                       ikon_ogesi(o['slug'], 12, 12, 176, 176, o.get('rotate', 0), o.get('flipH', False), o.get('flipV', False)))
    if tur == 'icon-row':
        return composite({'layout': 'row', 'gap': 0, 'padding': 8, 'border': False, 'background': '#FFFFFF',
                          'items': [{'kind': 'icon-row', 'slugs': o['slugs'], 'size': 62, 'gap': o.get('gap', 6),
                                     'flipH': o.get('flipH', False), 'flipV': o.get('flipV', False), 'rotate': o.get('rotate', 0)}]})
    if tur == 'image-crop':
        kaynak = o.get('sourceSize', 200)
        cx, cy, cw, ch = o['cropX'], o['cropY'], o['cropW'], o['cropH']
        return svg_sar(round(cw), round(ch), (
            f'<defs><clipPath id="kirp"><rect x="{cx}" y="{cy}" width="{cw}" height="{ch}"/></clipPath></defs>'
            f'<g clip-path="url(#kirp)">{ikon_ogesi(o["slug"], 0, 0, kaynak, kaynak)}</g>'), f'{cx} {cy} {cw} {ch}')
    if tur in ('number', 'letter'):
        deger = escape(str(o.get('value', '')))
        return svg_sar(200, 200, (
            '<rect width="200" height="200" fill="#FFFFFF"/>'
            # <img> içindeki SVG web fontu yükleyemez; her cihazda bulunan kalın bir yazı tipi kullanılır.
            f'<text x="100" y="100" dominant-baseline="central" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" '
            f'font-weight="800" font-size="{96 if len(deger) <= 2 else 64}" fill="#1B1846">{deger}</text>'))
    raise SystemExit(f'desteklenmeyen şık biçimi: {tur}')


# ── Bankadan okuma ──────────────────────────────────────────────────────────
def banka_sorulari(sinif, kategori):
    veri = json.load(gzip.open(f'{BANKA}/grade{sinif}/{kategori}/tests.json.gz'))
    for zorluk, testler in veri.items():
        for test in (testler if isinstance(testler, list) else testler['tests']):
            for soru in test['questions']:
                yield zorluk, soru


def listeleri_oku():
    dosyalar = [os.path.join(SITE, 'araclar', 'soru_listesi.txt')] + sorted(glob.glob(os.path.join(SITE, 'araclar', 'sorular', '*.txt')))
    liste, gorulen = [], set()
    for yol in dosyalar:
        if not os.path.exists(yol):
            continue
        with open(yol, encoding='utf-8') as f:
            for satir in f:
                satir = satir.split('#')[0].strip()
                if not satir:
                    continue
                sinif, kategori, soru_id = satir.split()
                if (sinif, soru_id) not in gorulen:
                    gorulen.add((sinif, soru_id))
                    liste.append((int(sinif), kategori, soru_id))
    return liste


def main():
    liste = listeleri_oku()
    hedef_kok = os.path.join(SITE, 'public', 'soru')
    os.makedirs(hedef_kok, exist_ok=True)
    # Artımlı: listede olmayan soru klasörleri silinir; içeriği değişmeyen SVG yeniden yazılmaz, JPEG'i yeniden çizilmez.
    istenen = {f'{sinif}-{soru_id}' for sinif, _, soru_id in liste}
    for eski in os.listdir(hedef_kok):
        if eski not in istenen and os.path.isdir(os.path.join(hedef_kok, eski)):
            shutil.rmtree(os.path.join(hedef_kok, eski))
    degisen = []
    dizin, onbellek = {}, {}
    for sinif, kategori, soru_id in liste:
        if (sinif, kategori) not in onbellek:
            onbellek[(sinif, kategori)] = {q['id']: (z, q) for z, q in banka_sorulari(sinif, kategori)}
        if soru_id not in onbellek[(sinif, kategori)]:
            raise SystemExit(f'bankada yok: {sinif} {kategori} {soru_id}')
        zorluk, soru = onbellek[(sinif, kategori)][soru_id]
        anahtar = f'{sinif}-{soru_id}'
        klasor = os.path.join(hedef_kok, anahtar)
        os.makedirs(klasor, exist_ok=True)
        parcalar = [('soru', goruntu_svg(soru['display']))] + [(HARF[i], sik_svg(o)) for i, o in enumerate(soru['options'])]
        for ad, icerik in parcalar:
            yol = os.path.join(klasor, f'{ad}.svg')
            eski = open(yol, encoding='utf-8').read() if os.path.exists(yol) else None
            if eski != icerik:
                with open(yol, 'w', encoding='utf-8') as f:
                    f.write(icerik)
                degisen.append(yol)
            elif not os.path.exists(yol[:-4] + '.jpg'):
                degisen.append(yol)
        dsp = soru['display']
        dizin[anahtar] = {
            'sinif': sinif, 'kategori': kategori, 'id': soru_id, 'altTip': soru.get('subType'),
            'zorluk': zorluk, 'soruMetni': soru.get('questionText', ''), 'sikSayisi': len(soru['options']),
            'dogru': HARF[soru['correctIndex']].upper(),
            # Hafıza sorularında görsel uygulamada bu kadar saniye gösterilip kapanır.
            'hafiza': dsp.get('memoryDuration', 10) if (dsp.get('memoryMode') or dsp.get('type') == 'memory') else None,
        }
    with open(os.path.join(SITE, 'src', 'data', 'sorular.json'), 'w', encoding='utf-8') as f:
        json.dump(dizin, f, ensure_ascii=False, indent=1)
    print(f'{len(dizin)} soru aktarıldı, {len(degisen)} görsel yeni ya da değişti')
    png_uret(degisen)


def png_uret(yollar):
    """Her SVG'nin beyaz zeminli, saydamsız JPEG kopyası (2x). Ders notu PDF'i bunları kullanır:
    SVG'lerdeki delik maskeleri PDF'te yüzlerce saydamlık katmanına dönüşüp Acrobat'ta sayfaların
    gidip gelmesine yol açıyordu. Tarayıcı açılışları paralel yapılır (yüzlerce görsel var)."""
    from concurrent.futures import ThreadPoolExecutor
    from PIL import Image

    def ciz(yol):
        ad = os.path.basename(yol)
        gen, yuk = (round(v) for v in svg_boyut(open(yol, encoding='utf-8').read(4000)))
        sarici = yol[:-4] + '._.html'
        with open(sarici, 'w', encoding='utf-8') as f:
            f.write(f'<!doctype html><body style="margin:0;background:#fff"><img src="{ad}" style="display:block;width:{gen}px;height:{yuk}px"></body>')
        png = yol[:-4] + '._.png'
        subprocess.run([CHROME, '--headless=new', '--disable-gpu', '--hide-scrollbars', '--force-device-scale-factor=2',
                        f'--window-size={max(gen, 1)},{max(yuk, 1)}', '--allow-file-access-from-files',
                        f'--screenshot={png}', f'file://{sarici}'],
                       check=True, capture_output=True)
        os.remove(sarici)
        Image.open(png).convert('RGB').crop((0, 0, gen * 2, yuk * 2)).save(yol[:-4] + '.jpg', quality=88, optimize=True)
        os.remove(png)

    with ThreadPoolExecutor(max_workers=6) as havuz:
        list(havuz.map(ciz, yollar))
    print(f'{len(yollar)} JPEG üretildi')


if __name__ == '__main__':
    main()
