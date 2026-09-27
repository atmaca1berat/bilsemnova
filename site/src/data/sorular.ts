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
}

const SORULAR = veri as Record<string, SoruBilgisi>;
export const HARFLER = ['A', 'B', 'C', 'D'];

export function soru(anahtar: string): SoruBilgisi {
  const s = SORULAR[anahtar];
  if (!s) throw new Error(`Soru bulunamadı: ${anahtar} (araclar/soru_listesi.txt'e ekleyip soru_aktar.py'yi çalıştırın)`);
  return s;
}

// duz: düz JPEG kopyası (PDF'e dönüşen sayfalarda; SVG maskeleri PDF'i ağırlaştırıyor).
export const soruGorseli = (anahtar: string, parca: 'soru' | 'a' | 'b' | 'c' | 'd', duz = false) =>
  `/soru/${anahtar}/${parca}.${duz ? 'jpg' : 'svg'}`;
