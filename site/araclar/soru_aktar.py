"""Konu anlatımlarında kullanılan soruları uygulamanın soru bankasından siteye aktarır.

Uygulama deposu (BilsemDeha, özel) sitenin derlendiği yerde yok; bu yüzden gereken sorular
yerelde bir kez aktarılıp siteyle birlikte commit'lenir.

Liste: araclar/soru_listesi.txt — her satır "sınıf kategori/yolu soru-id" (# ile başlayan satır yorum).
Çıktı:
  public/soru/<sınıf>-<id>/soru.svg, a.svg, b.svg, c.svg[, d.svg]
  src/data/sorular.json  → {"<sınıf>-<id>": {sinif, kategori, id, altTip, zorluk, soruMetni, sikSayisi, dogru}}

Her SVG ayrı dosya: aynı sayfada satır içi kullanılırsa mask/marker kimlikleri çakışıyor.
Kullanım: python3 araclar/soru_aktar.py
"""
import gzip
import json
import os
import shutil

SITE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
BANKA = '/Users/beratatmaca/Desktop/bilsem/mobile/assets/questions'
HARF = 'abcd'


def banka_sorulari(sinif, kategori):
    veri = json.load(gzip.open(f'{BANKA}/grade{sinif}/{kategori}/tests.json.gz'))
    for zorluk, testler in veri.items():
        for test in (testler if isinstance(testler, list) else testler['tests']):
            for soru in test['questions']:
                yield zorluk, soru


def main():
    liste = []
    with open(os.path.join(SITE, 'araclar', 'soru_listesi.txt'), encoding='utf-8') as f:
        for satir in f:
            satir = satir.split('#')[0].strip()
            if satir:
                sinif, kategori, soru_id = satir.split()
                liste.append((int(sinif), kategori, soru_id))

    hedef_kok = os.path.join(SITE, 'public', 'soru')
    if os.path.isdir(hedef_kok):
        shutil.rmtree(hedef_kok)
    dizin = {}
    onbellek = {}
    for sinif, kategori, soru_id in liste:
        if (sinif, kategori) not in onbellek:
            onbellek[(sinif, kategori)] = {q['id']: (z, q) for z, q in banka_sorulari(sinif, kategori)}
        if soru_id not in onbellek[(sinif, kategori)]:
            raise SystemExit(f'bankada yok: {sinif} {kategori} {soru_id}')
        zorluk, soru = onbellek[(sinif, kategori)][soru_id]
        if soru['display'].get('type') != 'svg' or any(o.get('type') != 'svg' for o in soru['options']):
            raise SystemExit(f'yalnız SVG sorular desteklenir: {soru_id}')
        anahtar = f'{sinif}-{soru_id}'
        klasor = os.path.join(hedef_kok, anahtar)
        os.makedirs(klasor)
        with open(os.path.join(klasor, 'soru.svg'), 'w', encoding='utf-8') as f:
            f.write(soru['display']['svg'])
        for i, sik in enumerate(soru['options']):
            with open(os.path.join(klasor, f'{HARF[i]}.svg'), 'w', encoding='utf-8') as f:
                f.write(sik['svg'])
        dizin[anahtar] = {
            'sinif': sinif, 'kategori': kategori, 'id': soru_id, 'altTip': soru.get('subType'),
            'zorluk': zorluk, 'soruMetni': soru.get('questionText', ''), 'sikSayisi': len(soru['options']),
            'dogru': HARF[soru['correctIndex']].upper(),
        }
    with open(os.path.join(SITE, 'src', 'data', 'sorular.json'), 'w', encoding='utf-8') as f:
        json.dump(dizin, f, ensure_ascii=False, indent=1)
    print(f'{len(dizin)} soru aktarıldı')
    png_uret(hedef_kok)


def png_uret(kok):
    """Her SVG'nin beyaz zeminli, saydamsız PNG kopyası (2x). Ders notu PDF'i bunları kullanır:
    SVG'lerdeki delik maskeleri PDF'te yüzlerce saydamlık katmanına dönüşüp Acrobat'ta sayfaların
    gidip gelmesine yol açıyordu."""
    import re
    import subprocess
    from PIL import Image
    chrome = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
    adet = 0
    for klasor, _, dosyalar in os.walk(kok):
        for ad in dosyalar:
            if not ad.endswith('.svg'):
                continue
            yol = os.path.join(klasor, ad)
            svg = open(yol, encoding='utf-8').read(4000)
            w = re.search(r'<svg[^>]*\swidth="([\d.]+)', svg)
            h = re.search(r'<svg[^>]*\sheight="([\d.]+)', svg)
            gen, yuk = (round(float(w.group(1))), round(float(h.group(1)))) if w and h else (400, 400)
            sarici = yol[:-4] + '._.html'
            with open(sarici, 'w', encoding='utf-8') as f:
                f.write(f'<!doctype html><body style="margin:0;background:#fff"><img src="{ad}" style="display:block;width:{gen}px;height:{yuk}px"></body>')
            png = yol[:-4] + '.png'
            subprocess.run([chrome, '--headless=new', '--disable-gpu', '--hide-scrollbars', '--force-device-scale-factor=2',
                            f'--window-size={max(gen, 1)},{max(yuk, 1)}', '--allow-file-access-from-files',
                            f'--screenshot={png}', f'file://{sarici}'], check=True, capture_output=True)
            os.remove(sarici)
            im = Image.open(png).convert('RGB').crop((0, 0, gen * 2, yuk * 2))
            im.save(png, optimize=True)
            adet += 1
    print(f'{adet} PNG üretildi')


if __name__ == '__main__':
    main()
