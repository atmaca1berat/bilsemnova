"""Konu anlatımlarının PDF'lerini üretir: slaytlar (16:9, slayt başına bir sayfa) ve ders notu (A4).

Siteyi derler, geçici bir önizleme sunucusu açar, her konunun /slayt/ ve /ders-notu/ sayfasını
headless Chrome ile PDF'e yazdırır, PDF'leri public/pdf/'e koyar ve siteyi yeniden derler.
Konu içeriği değiştiğinde çalıştırın: python3 araclar/pdf_uret.py [slug ...]  (slug verilmezse hepsi)
"""
import os
import shutil
import subprocess
import sys
import time
import urllib.request

SITE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
PORT = 4399
KOK = f'http://localhost:{PORT}'


def derle():
    subprocess.run(['npx', 'astro', 'build'], cwd=SITE, check=True, capture_output=True)


def yazdir(adres, hedef):
    subprocess.run([CHROME, '--headless=new', '--disable-gpu', '--no-pdf-header-footer', '--virtual-time-budget=8000',
                    '--run-all-compositor-stages-before-draw', f'--print-to-pdf={hedef}', adres],
                   check=True, capture_output=True)
    print(f'  {os.path.relpath(hedef, SITE)}  {os.path.getsize(hedef) // 1024} KB')


def duzlestir(yol, genislik=1920, kalite=84):
    """Slayt PDF'ini sayfa başına tek JPEG resme çevirir. Vektör hâlinde yüzlerce saydamlık maskesi ve
    degrade deseni vardı; Acrobat her sayfada bunları yeniden hesapladığı için görseller gidip geliyordu."""
    import io
    import fitz
    from PIL import Image
    kaynak = fitz.open(yol)
    hedef = fitz.open()
    for sayfa in kaynak:
        olcek = genislik / sayfa.rect.width
        pix = sayfa.get_pixmap(matrix=fitz.Matrix(olcek, olcek), alpha=False)
        tampon = io.BytesIO()
        Image.frombytes('RGB', (pix.width, pix.height), pix.samples).save(tampon, 'JPEG', quality=kalite, optimize=True)
        yeni = hedef.new_page(width=sayfa.rect.width, height=sayfa.rect.height)
        yeni.insert_image(yeni.rect, stream=tampon.getvalue())
    kaynak.close()
    hedef.save(yol, deflate=True, garbage=4)
    print(f'  düzleştirildi: {os.path.relpath(yol, SITE)}  {os.path.getsize(yol) // 1024} KB')


def main():
    derle()
    konular = sorted(d for d in os.listdir(os.path.join(SITE, 'dist', 'konu-anlatimlari'))
                     if os.path.isdir(os.path.join(SITE, 'dist', 'konu-anlatimlari', d, 'slayt')))
    if sys.argv[1:]:
        konular = [k for k in konular if k in sys.argv[1:]]
    # Astro 7 proje başına tek önizleme sunucusu çalıştırır: açık olanı kapatıp kendimizinkini açarız.
    subprocess.run(['npx', 'astro', 'preview', 'stop'], cwd=SITE, capture_output=True)
    sunucu = subprocess.Popen(['npx', 'astro', 'preview', '--port', str(PORT)], cwd=SITE,
                              stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    try:
        for _ in range(40):
            try:
                urllib.request.urlopen(KOK + '/', timeout=2)
                break
            except OSError:
                time.sleep(0.5)
        else:
            sys.exit('önizleme sunucusu açılmadı')
        hedef_klasor = os.path.join(SITE, 'public', 'pdf')
        os.makedirs(hedef_klasor, exist_ok=True)
        for slug in konular:
            print(slug)
            slayt_pdf = os.path.join(hedef_klasor, f'{slug}-slaytlar.pdf')
            yazdir(f'{KOK}/konu-anlatimlari/{slug}/slayt/', slayt_pdf)
            duzlestir(slayt_pdf)
            yazdir(f'{KOK}/konu-anlatimlari/{slug}/ders-notu/', os.path.join(hedef_klasor, f'{slug}-ders-notu.pdf'))
    finally:
        sunucu.terminate()
        subprocess.run(['npx', 'astro', 'preview', 'stop'], cwd=SITE, capture_output=True)
    derle()
    print('PDF\'ler public/pdf/ klasöründe; site yeniden derlendi.')


if __name__ == '__main__':
    main()
