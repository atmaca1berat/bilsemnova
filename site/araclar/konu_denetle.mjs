// Konu anlatımlarının mekanik denetimi (derlemeden önce çalıştır):
//   node araclar/konu_denetle.mjs [slug ...]
// Denetler: anılan her soru sorular.json'da ve konunun soru listesinde var mı; "Doğru cevap X" harfi anahtarla
// aynı mı; çizimler var mı; aynı soru hem örnekte hem alıştırmada mı; sosyal medyaya ayrılmış soru kullanılmış mı;
// özet ≤ 160 karakter; slayt türleri ve zorunlu alanlar. Hata varsa çıkış kodu 1.
// Node 23+ .ts dosyalarını tür bilgisini silerek doğrudan çalıştırır (konu dosyaları yalnız "import type" kullanır).
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const SITE = join(dirname(fileURLToPath(import.meta.url)), '..');
const KONULAR = join(SITE, 'src/data/konular');
const SORULAR = JSON.parse(readFileSync(join(SITE, 'src/data/sorular.json'), 'utf8'));
const AYRILMIS = process.env.AYRILMIS ?? '';
const ayrilmis = new Set(
  AYRILMIS && existsSync(AYRILMIS)
    ? readFileSync(AYRILMIS, 'utf8').split('\n').map((s) => s.split('#')[0].trim()).filter(Boolean)
        .map((s) => { const [sinif, , id] = s.split(/\s+/); return `${sinif}-${id}`; })
    : [],
);
const listeOku = (slug) => {
  const yol = slug === 'kagit-katlama' ? join(SITE, 'araclar/soru_listesi.txt') : join(SITE, 'araclar/sorular', `${slug}.txt`);
  if (!existsSync(yol)) return null;
  return new Set(readFileSync(yol, 'utf8').split('\n').map((s) => s.split('#')[0].trim()).filter(Boolean)
    .map((s) => { const [sinif, , id] = s.split(/\s+/); return `${sinif}-${id}`; }));
};

const secilen = process.argv.slice(2);
const dosyalar = readdirSync(KONULAR).filter((f) => f.endsWith('.ts') && f !== 'index.ts')
  .filter((f) => !secilen.length || secilen.includes(f.replace(/\.ts$/, '')));

let hataSayisi = 0;
for (const dosya of dosyalar) {
  const slug = dosya.replace(/\.ts$/, '');
  const hatalar = [];
  const uyarilar = [];
  let konu;
  try {
    konu = (await import(pathToFileURL(join(KONULAR, dosya)).href)).default;
  } catch (e) {
    console.log(`✗ ${slug}: dosya yüklenemedi — ${e.message}`);
    hataSayisi++;
    continue;
  }
  const liste = listeOku(slug);
  if (!liste) hatalar.push('soru listesi dosyası yok');
  const cizimKlasoru = join(SITE, 'src/data/diyagramlar', slug);
  const cizimler = slug === 'kagit-katlama'
    ? new Set(['ayna', 'katSayisi', 'yarimSekil', 'tersSira', 'kosegen'])
    : new Set(existsSync(cizimKlasoru) ? readdirSync(cizimKlasoru).filter((f) => f.endsWith('.svg')).map((f) => f.replace(/\.svg$/, '')) : []);

  const soruKontrol = (anahtar, yer) => {
    if (!SORULAR[anahtar]) hatalar.push(`${yer}: soru sorular.json'da yok → ${anahtar}`);
    if (liste && !liste.has(anahtar)) hatalar.push(`${yer}: soru, konunun soru listesinde yok → ${anahtar}`);
    if (ayrilmis.has(anahtar)) hatalar.push(`${yer}: sosyal medyaya AYRILMIŞ soru kullanılmış → ${anahtar}`);
  };
  const cizimKontrol = (ad, yer) => { if (ad && !cizimler.has(ad)) hatalar.push(`${yer}: çizim yok → ${ad}`); };
  const harfKontrol = (metin, anahtar, yer) => {
    const m = metin?.match(/Doğru cevap(?:\s*:)?\s*(?:<b>)?\s*([A-D])\b/);
    if (!m) { uyarilar.push(`${yer}: "Doğru cevap X" ifadesi bulunamadı`); return; }
    if (SORULAR[anahtar] && m[1] !== SORULAR[anahtar].dogru) hatalar.push(`${yer}: metin "${m[1]}" diyor, anahtar ${SORULAR[anahtar].dogru} → ${anahtar}`);
  };

  if (!konu.ozet || konu.ozet.length > 160) hatalar.push(`özet ${konu.ozet?.length ?? 0} karakter (≤160 olmalı)`);
  for (const alan of ['slug', 'ad', 'alan', 'siniflar', 'giris', 'okumaDakika', 'uygulamadakiSoru', 'guncelleme']) {
    if (konu[alan] === undefined || konu[alan] === '') hatalar.push(`zorunlu alan eksik: ${alan}`);
  }
  if (konu.slug !== slug) hatalar.push(`slug dosya adıyla aynı değil: ${konu.slug}`);

  const ornekler = [];
  const alistirmalar = [];
  let kural = 0;
  for (const b of konu.bolumler ?? []) {
    for (const blok of b.bloklar ?? []) {
      const yer = `bölüm "${b.id}"`;
      if (blok.t === 'ornek') {
        ornekler.push(blok.soru);
        soruKontrol(blok.soru, yer);
        harfKontrol(blok.eleme, blok.soru, `${yer} örnek`);
        if (!blok.adimlar?.length) hatalar.push(`${yer}: örnekte adım yok → ${blok.soru}`);
      } else if (blok.t === 'alistirma') {
        for (const a of blok.sorular) { alistirmalar.push(a.soru); soruKontrol(a.soru, `${yer} alıştırma`); if (!a.aciklama) hatalar.push(`${yer}: alıştırma açıklaması boş → ${a.soru}`); }
      } else if (blok.t === 'sorugorsel') {
        soruKontrol(blok.soru, yer);
      } else if (blok.t === 'kural') {
        kural++;
        cizimKontrol(blok.diyagram, `${yer} kural ${blok.no}`);
      } else if (blok.t === 'diyagram') {
        cizimKontrol(blok.ad, yer);
      } else if (!['p', 'h3', 'liste', 'kutu'].includes(blok.t)) {
        hatalar.push(`${yer}: bilinmeyen blok türü ${blok.t}`);
      }
    }
  }
  const ortak = ornekler.filter((s) => alistirmalar.includes(s));
  if (ortak.length) hatalar.push(`aynı soru hem örnekte hem alıştırmada: ${ortak.join(', ')}`);
  const tekrar = alistirmalar.filter((s, i) => alistirmalar.indexOf(s) !== i);
  if (tekrar.length) hatalar.push(`alıştırmada tekrar eden soru: ${tekrar.join(', ')}`);
  if (ornekler.length < 5) uyarilar.push(`yalnız ${ornekler.length} çözümlü örnek`);
  if (alistirmalar.length < 6) uyarilar.push(`yalnız ${alistirmalar.length} alıştırma`);

  const slaytlar = konu.slaytlar ?? [];
  if (slaytlar[0]?.t !== 'kapak' || slaytlar.at(-1)?.t !== 'kapanis') hatalar.push('slaytlar kapakla başlayıp kapanışla bitmeli');
  slaytlar.forEach((s, i) => {
    const yer = `slayt ${i + 1}`;
    if (!['kapak', 'metin', 'soru', 'cevap', 'kapanis'].includes(s.t)) hatalar.push(`${yer}: bilinmeyen tür ${s.t}`);
    if (s.soru) soruKontrol(s.soru, yer);
    if (s.diyagram) cizimKontrol(s.diyagram, yer);
    if (s.t === 'soru' && slaytlar[i + 1]?.t !== 'cevap') uyarilar.push(`${yer}: soru slaytından sonra cevap slaytı yok`);
    if (s.t === 'cevap' && slaytlar[i - 1]?.soru !== s.soru) uyarilar.push(`${yer}: cevap slaytı önceki soruyla eşleşmiyor`);
  });
  // Çizim dosyası temel kontrol
  for (const ad of cizimler) {
    if (slug === 'kagit-katlama') break;
    const svg = readFileSync(join(cizimKlasoru, `${ad}.svg`), 'utf8');
    if (!/viewBox=/.test(svg)) hatalar.push(`çizim ${ad}: viewBox yok`);
    if (/<style|<script|href="http|xlink:href="http/.test(svg)) hatalar.push(`çizim ${ad}: style/script/dış bağlantı var`);
    if (!/aria-label=/.test(svg)) uyarilar.push(`çizim ${ad}: aria-label yok`);
  }

  const durum = hatalar.length ? '✗' : '✓';
  console.log(`${durum} ${slug}: ${kural} kural, ${ornekler.length} örnek, ${alistirmalar.length} alıştırma, ${slaytlar.length} slayt, ${cizimler.size} çizim`);
  for (const h of hatalar) console.log(`    HATA  ${h}`);
  for (const u of uyarilar) console.log(`    uyarı ${u}`);
  hataSayisi += hatalar.length;
}
process.exit(hataSayisi ? 1 : 0);
