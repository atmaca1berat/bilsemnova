// Uygulamadaki soru türleri (mobile/lib/core/constants/app_constants.dart ile aynı sıra ve gruplar).
// hazir: konu anlatımı yayında mı?

export interface Kategori {
  slug: string;
  ad: string;
  aciklama: string;
  hazir: boolean;
}

export interface Alan {
  id: string;
  ad: string;
  renk: string;
  kategoriler: Kategori[];
}

export const ALANLAR: Alan[] = [
  {
    id: 'gorsel-yetenek',
    ad: 'Görsel Yetenek ve Algı',
    renk: 'var(--camgobegi)',
    kategoriler: [
      { slug: 'golge-bulma', ad: 'Gölge Bulma', aciklama: 'Bir nesnenin hangi gölgeye ait olduğunu biçim ve ayrıntılara bakarak bulma.', hazir: false },
      { slug: 'yansima-simetri', ad: 'Yansıma ve Simetri', aciklama: 'Bir şeklin aynadaki ya da simetri çizgisine göre görüntüsünü bulma.', hazir: false },
      { slug: 'kusbakisi-perspektif', ad: 'Kuş Bakışı', aciklama: 'Nesnelere üstten ya da başka bir yönden bakınca ne görüneceğini tahmin etme.', hazir: false },
      { slug: 'sekil-tamamlama', ad: 'Şekil Tamamlama', aciklama: 'Eksik parçayı desen, çizgi ve renk devamlılığına bakarak bulma.', hazir: false },
      { slug: 'kup-sayma', ad: 'Küp', aciklama: 'Küp yapılarında sayma, farklı yönlerden görünüş ve açınım soruları.', hazir: false },
      { slug: 'kagit-katlama', ad: 'Kâğıt Katlama', aciklama: 'Katlanıp kesilen ya da delinen kâğıdın açılınca nasıl görüneceğini bulma.', hazir: true },
      { slug: 'labirent', ad: 'Labirent', aciklama: 'Doğru girişi ve yolu planlayarak hedefe ulaşma.', hazir: false },
    ],
  },
  {
    id: 'mantik-muhakeme',
    ad: 'Mantık ve Muhakeme',
    renk: 'var(--sari)',
    kategoriler: [
      { slug: 'matris', ad: 'Matris', aciklama: 'Satır ve sütunlardaki kuralı bulup eksik hücreyi tamamlama.', hazir: false },
      { slug: 'oruntu', ad: 'Örüntü', aciklama: 'Şekil, renk ya da sayı dizisindeki kuralı bulup sıradakini seçme.', hazir: false },
      { slug: 'mantik-terazi', ad: 'Mantık Terazisi', aciklama: 'Terazilerden nesnelerin ağırlık ilişkisini çıkarma.', hazir: false },
      { slug: 'benzesim-analoji', ad: 'Benzeşim (Analoji)', aciklama: 'İki nesne arasındaki ilişkiyi bulup başka bir çifte uygulama.', hazir: false },
      { slug: 'sifreleme-kodlama', ad: 'Şifreleme ve Kodlama', aciklama: 'Sembollerin anlamını çözüp şifreyi yeni bir örneğe uygulama.', hazir: false },
      { slug: 'olay-siralama', ad: 'Olay Sıralama', aciklama: 'Resimleri olayların oluş sırasına göre dizme.', hazir: false },
    ],
  },
  {
    id: 'dikkat-hafiza',
    ad: 'Dikkat ve Hafıza',
    renk: 'var(--pembe)',
    kategoriler: [
      { slug: 'kisa-sureli-hafiza', ad: 'Kısa Süreli Hafıza', aciklama: 'Kısa süre gösterilen görseli akılda tutup soruları cevaplama.', hazir: false },
      { slug: 'dikkat-sorulari', ad: 'Dikkat Soruları', aciklama: 'Sahnedeki ayrıntıları sayma, eşleri bulma ve ayırt etme.', hazir: false },
      { slug: 'hangisi-farkli', ad: 'Hangisi Farklı', aciklama: 'Gruptaki kurala uymayan şekli bulma.', hazir: false },
      { slug: 'fark-bulma', ad: 'Fark Bulma', aciklama: 'İki resim arasındaki farkları bulma ve sayma.', hazir: false },
    ],
  },
];

export const TUM_KATEGORILER = ALANLAR.flatMap((a) => a.kategoriler.map((k) => ({ ...k, alan: a })));
