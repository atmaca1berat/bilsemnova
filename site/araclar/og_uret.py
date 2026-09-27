"""Paylaşım önizleme görselleri (1200x630): WhatsApp, Instagram, Facebook bağlantı kartlarında görünür.

Çıktı: public/img/og-kapak.jpg (ana sayfa) ve src/data/konular/*.ts'deki her konu için public/img/og/<slug>.jpg.
Kullanım: python3 araclar/og_uret.py
"""
import os
import subprocess

from PIL import Image

SITE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PUB = os.path.join(SITE, 'public')
CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'

CSS = f'''
@font-face {{ font-family: 'Baloo 2'; src: url('file://{PUB}/fonts/Baloo2-800.woff'); font-weight: 800; }}
@font-face {{ font-family: 'Nunito'; src: url('file://{PUB}/fonts/Nunito-800.woff'); font-weight: 800; }}
@font-face {{ font-family: 'Nunito'; src: url('file://{PUB}/fonts/Nunito-900.woff'); font-weight: 900; }}
* {{ margin: 0; box-sizing: border-box; }}
body {{ width: 1200px; height: 630px; overflow: hidden; font-family: 'Nunito'; font-weight: 800; color: #fff;
  background: radial-gradient(700px 450px at 12% -10%, rgba(107,91,255,.55), transparent 60%),
              radial-gradient(600px 420px at 110% 110%, rgba(255,107,176,.3), transparent 60%), #0b0b2e; position: relative; }}
.ic {{ position: absolute; left: 70px; top: 64px; right: 420px; display: grid; gap: 22px; }}
.logo {{ display: flex; align-items: center; gap: 14px; font-family: 'Baloo 2'; font-size: 38px; }}
.logo img {{ width: 58px; height: 58px; border-radius: 14px; }}
.logo em {{ font-style: normal; color: #ffcb47; }}
.cip {{ justify-self: start; font-weight: 900; font-size: 20px; letter-spacing: 3px; color: #7ee6f0; padding: 8px 16px; border-radius: 99px; border: 2px solid rgba(126,230,240,.5); background: rgba(126,230,240,.08); }}
h1 {{ font-family: 'Baloo 2'; font-size: 74px; line-height: 1.02; }}
h1 span {{ background: linear-gradient(90deg,#ffcb47,#ff6bb0); -webkit-background-clip: text; background-clip: text; color: transparent; }}
p {{ font-size: 27px; color: rgba(236,233,255,.82); line-height: 1.35; }}
.deha {{ position: absolute; right: 30px; bottom: -20px; width: 400px; filter: drop-shadow(0 20px 40px rgba(0,0,0,.45)); }}
.adres {{ position: absolute; left: 70px; bottom: 44px; font-weight: 900; font-size: 24px; color: #ffcb47; }}
'''


def uret(ad, govde):
    html = f'<!doctype html><html><head><meta charset="utf-8"><style>{CSS}</style></head><body>{govde}</body></html>'
    gecici = os.path.join(SITE, 'araclar', f'_og_{ad.replace("/", "_")}.html')
    png = gecici[:-5] + '.png'
    with open(gecici, 'w', encoding='utf-8') as f:
        f.write(html)
    subprocess.run([CHROME, '--headless=new', '--disable-gpu', '--hide-scrollbars', '--force-device-scale-factor=1',
                    '--window-size=1200,630', '--virtual-time-budget=3000', '--allow-file-access-from-files',
                    f'--screenshot={png}', f'file://{gecici}'], check=True, capture_output=True)
    hedef = os.path.join(PUB, 'img', f'{ad}.jpg')
    os.makedirs(os.path.dirname(hedef), exist_ok=True)
    Image.open(png).convert('RGB').resize((1200, 630)).save(hedef, quality=88, optimize=True)
    os.remove(gecici)
    os.remove(png)
    print(os.path.relpath(hedef, SITE), os.path.getsize(hedef) // 1024, 'KB')


logo = f'<div class="logo"><img src="file://{PUB}/img/uygulama-simgesi.webp"><span>Bilsem<em>Nova</em></span></div>'

uret('og-kapak', f'''<div class="ic">{logo}<span class="cip">BİLSEM · 1-3. SINIF</span>
<h1>BİLSEM sınavı tablette. <span>Formata şimdiden alışın.</span></h1>
<p>17.000+ görsel soru · deneme sınavları · zekâ oyunları · veli karnesi</p></div>
<img class="deha" src="file://{PUB}/img/deha-wave.webp"><div class="adres">bilsemnova.com</div>''')


def konu_bilgisi(yol):
    """Konu dosyasından adı ve blok sayılarını okur (dosyalar aynı kalıpta yazılır)."""
    import re
    metin = open(yol, encoding='utf-8').read()
    ad = re.search(r"^\s*ad:\s*'([^']+)'", metin, re.M).group(1)
    kural = len(re.findall(r"t:\s*'kural'", metin))
    ornek = len(re.findall(r"t:\s*'ornek'", metin))
    alistirma = 0
    for blok in re.finditer(r"t:\s*'alistirma'.*?\]\s*,?\s*\}", metin, re.S):
        alistirma += len(re.findall(r"soru:\s*'", blok.group(0)))
    return ad, kural, ornek, alistirma


MASKOTLAR = ['think', 'thumbsup', 'wave', 'celebrate']
KONULAR = os.path.join(SITE, 'src', 'data', 'konular')
for i, dosya in enumerate(sorted(f for f in os.listdir(KONULAR) if f.endswith('.ts') and f != 'index.ts')):
    slug = dosya[:-3]
    ad, kural, ornek, alistirma = konu_bilgisi(os.path.join(KONULAR, dosya))
    baslik = f'{ad} <span>nasıl çözülür?</span>' if ad.endswith('Soruları') else f'{ad} soruları <span>nasıl çözülür?</span>'
    uret(f'og/{slug}', f'''<div class="ic">{logo}<span class="cip">ÜCRETSİZ KONU ANLATIMI</span>
<h1>{baslik}</h1>
<p>{kural} kural · {ornek} çözümlü örnek · {alistirma} alıştırma · slayt ve PDF</p></div>
<img class="deha" src="file://{PUB}/img/deha-{MASKOTLAR[i % len(MASKOTLAR)]}.webp"><div class="adres">bilsemnova.com/konu-anlatimlari</div>''')
