// Sitenin tüm sayfalarında kullanılan sabitler.

export const SITE = {
  ad: 'BilsemNova',
  adres: 'https://bilsemnova.com',
  eposta: 'bilsemnova@gmail.com',
  instagram: 'https://www.instagram.com/bilsemnova/',
  // Meta pikseli yalnız çerez onayıyla yüklenir (KVKK).
  pikselKimligi: '1623717782687609',
  appStore: 'https://apps.apple.com/app/id6792328680',
  googlePlay: 'https://play.google.com/store/apps/details?id=com.bilsemnova.app',
  gizlilik: 'https://atmaca1berat.github.io/bilsemnova-yasal/gizlilik.html',
  gizlilikSite: 'https://atmaca1berat.github.io/bilsemnova-yasal/gizlilik.html#tanitim-sitesi',
  kosullar: 'https://atmaca1berat.github.io/bilsemnova-yasal/kullanim-kosullari.html',
} as const;

// Uygulamadaki gerçek sayılar (soru bankası, 27 Eylül 2026). Değişince burayı güncelle.
export const SAYILAR = {
  soru: '17.000+',
  kategori: 17, // 3 alanda 17 soru türü (uygulamadaki alt kategoriler)
  oyun: 25,
  kagitKatlamaSoru: 945,
} as const;
