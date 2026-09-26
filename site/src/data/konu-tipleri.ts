// Konu anlatımlarının veri yapısı. Aynı kaynaktan hem makale sayfası hem slaytlar (ve onların PDF'leri) üretilir.
// Soru anahtarları src/data/sorular.json'daki "<sınıf>-<id>" biçimindedir (araclar/soru_aktar.py üretir).

export type Blok =
  | { t: 'p'; html: string }
  | { t: 'h3'; metin: string }
  | { t: 'liste'; maddeler: string[]; numarali?: boolean }
  | { t: 'kural'; no: number; baslik: string; html: string; diyagram?: string }
  | { t: 'kutu'; tur: 'ipucu' | 'dikkat' | 'veli'; baslik: string; html: string }
  | { t: 'diyagram'; ad: string; aciklama?: string }
  | { t: 'sorugorsel'; soru: string; aciklama: string }
  | { t: 'ornek'; soru: string; baslik: string; adimlar: string[]; eleme?: string }
  | { t: 'alistirma'; sorular: { soru: string; aciklama: string }[] };

export interface Bolum {
  id: string;
  baslik: string;
  bloklar: Blok[];
}

export type Slayt =
  | { t: 'kapak' }
  | { t: 'metin'; ust?: string; baslik: string; maddeler?: string[]; numarali?: boolean; html?: string; diyagram?: string; soru?: string }
  | { t: 'soru'; ust?: string; baslik: string; soru: string }
  | { t: 'cevap'; ust?: string; baslik: string; soru: string; adimlar: string[] }
  | { t: 'kapanis' };

export interface Konu {
  slug: string;
  ad: string;
  alan: string;
  siniflar: string;
  /** Arama motoru açıklaması (≤ 160 karakter). */
  ozet: string;
  /** Sayfa başındaki giriş paragrafı. */
  giris: string;
  okumaDakika: number;
  uygulamadakiSoru: number;
  guncelleme: string;
  bolumler: Bolum[];
  slaytlar: Slayt[];
}
