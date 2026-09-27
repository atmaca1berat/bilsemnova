import veri from './sorular.json';

export interface SoruBilgisi {
  sinif: number;
  kategori: string;
  id: string;
  altTip: string;
  zorluk: string;
  soruMetni: string;
  sikSayisi: number;
  dogru: string;
  /** Hafıza sorusu: görsel uygulamada bu kadar saniye gösterilip kapanır. */
  hafiza: number | null;
  /** Soru görselinin en/boy oranı. */
  oran: number;
}

const SORULAR = veri as Record<string, SoruBilgisi>;
export const HARFLER = ['A', 'B', 'C', 'D'];

export function soru(anahtar: string): SoruBilgisi {
  const s = SORULAR[anahtar];
  if (!s) throw new Error(`Soru bulunamadı: ${anahtar} (araclar/soru_listesi.txt'e ekleyip soru_aktar.py'yi çalıştırın)`);
  return s;
}

// Soru görselinin biçimine göre sınıf: uzun görseller (alt alta iki resim) ve kare sahneler, geniş dizilerle
// aynı yükseklik sınırına sokulunca ayrıntıları okunmayacak kadar küçülüyor; sayfalar bu sınıfa göre boyut verir.
export function gorselBicimi(anahtar: string): 'gorsel-dik' | 'gorsel-kare' | 'gorsel-genis' {
  const { oran } = soru(anahtar);
  return oran < 0.8 ? 'gorsel-dik' : oran > 1.6 ? 'gorsel-genis' : 'gorsel-kare';
}

// duz: düz JPEG kopyası (PDF'e dönüşen sayfalarda; SVG maskeleri PDF'i ağırlaştırıyor).
export const soruGorseli = (anahtar: string, parca: 'soru' | 'a' | 'b' | 'c' | 'd', duz = false) =>
  `/soru/${anahtar}/${parca}.${duz ? 'jpg' : 'svg'}`;
