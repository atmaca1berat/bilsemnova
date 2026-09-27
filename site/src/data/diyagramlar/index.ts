import { DIYAGRAMLAR as kagitKatlama } from './kagit-katlama';

// Konu slug'ı → o konunun öğretici çizimleri (ad → satır içi SVG).
// Yeni konular çizimlerini src/data/diyagramlar/<slug>/<ad>.svg dosyaları olarak ekler; burada otomatik okunur.
const dosyalar = import.meta.glob('./*/*.svg', { query: '?raw', import: 'default', eager: true }) as Record<string, string>;

const setler: Record<string, Record<string, string>> = { 'kagit-katlama': kagitKatlama };
for (const [yol, icerik] of Object.entries(dosyalar)) {
  const eslesme = yol.match(/^\.\/([^/]+)\/(.+)\.svg$/);
  if (!eslesme) continue;
  const [, slug, ad] = eslesme;
  (setler[slug] ??= {})[ad] = icerik.replace(/<\?xml[^>]*>\s*/, '').trim();
}

export const DIYAGRAM_SETLERI = setler;
