// Uygulamadaki soru türleri (mobile/lib/core/constants/app_constants.dart ile aynı sıra ve gruplar).
// hazir: konu anlatımı yayında mı? (src/data/konular/<slug>.ts varsa evet)

export interface Kategori {
  slug: string;
  ad: string;
  aciklama: string;
}

export interface Alan {
  id: string;
  ad: string;
  renk: string;
  kategoriler: (Kategori & { hazir?: boolean })[];
}

export const ALANLAR: Alan[] = [
  {
    id: 'gorsel-yetenek',
    ad: 'Görsel Yetenek ve Algı',
    renk: 'var(--camgobegi)',
    kategoriler: [
      { slug: 'golge-bulma', ad: 'Gölge Bulma', aciklama: 'Bir nesnenin hangi gölgeye ait olduğunu biçim ve ayrıntılara bakarak bulma.' },
      { slug: 'yansima-simetri', ad: 'Yansıma ve Simetri', aciklama: 'Bir şeklin aynadaki ya da simetri çizgisine göre görüntüsünü bulma.' },
      { slug: 'kusbakisi-perspektif', ad: 'Kuş Bakışı', aciklama: 'Nesnelere üstten ya da başka bir yönden bakınca ne görüneceğini tahmin etme.' },
      { slug: 'sekil-tamamlama', ad: 'Şekil Tamamlama', aciklama: 'Eksik parçayı desen, çizgi ve renk devamlılığına bakarak bulma.' },
      { slug: 'kup-sayma', ad: 'Küp', aciklama: 'Küp yapılarında sayma, farklı yönlerden görünüş ve açınım soruları.' },
      { slug: 'kagit-katlama', ad: 'Kâğıt Katlama', aciklama: 'Katlanıp kesilen ya da delinen kâğıdın açılınca nasıl görüneceğini bulma.' },
      { slug: 'labirent', ad: 'Labirent', aciklama: 'Doğru girişi ve yolu planlayarak hedefe ulaşma.' },
    ],
  },
  {
    id: 'mantik-muhakeme',
    ad: 'Mantık ve Muhakeme',
    renk: 'var(--sari)',
    kategoriler: [
      { slug: 'matris', ad: 'Matris', aciklama: 'Satır ve sütunlardaki kuralı bulup eksik hücreyi tamamlama.' },
      { slug: 'oruntu', ad: 'Örüntü', aciklama: 'Şekil, renk ya da sayı dizisindeki kuralı bulup sıradakini seçme.' },
      { slug: 'mantik-terazi', ad: 'Mantık Terazisi', aciklama: 'Terazilerden nesnelerin ağırlık ilişkisini çıkarma.' },
      { slug: 'benzesim-analoji', ad: 'Benzeşim (Analoji)', aciklama: 'İki nesne arasındaki ilişkiyi bulup başka bir çifte uygulama.' },
      { slug: 'sifreleme-kodlama', ad: 'Şifreleme ve Kodlama', aciklama: 'Sembollerin anlamını çözüp şifreyi yeni bir örneğe uygulama.' },
      { slug: 'olay-siralama', ad: 'Olay Sıralama', aciklama: 'Resimleri olayların oluş sırasına göre dizme.' },
    ],
  },
  {
    id: 'dikkat-hafiza',
    ad: 'Dikkat ve Hafıza',
    renk: 'var(--pembe)',
    kategoriler: [
      { slug: 'kisa-sureli-hafiza', ad: 'Kısa Süreli Hafıza', aciklama: 'Kısa süre gösterilen görseli akılda tutup soruları cevaplama.' },
      { slug: 'dikkat-sorulari', ad: 'Dikkat Soruları', aciklama: 'Sahnedeki ayrıntıları sayma, eşleri bulma ve ayırt etme.' },
      { slug: 'hangisi-farkli', ad: 'Hangisi Farklı', aciklama: 'Gruptaki kurala uymayan şekli bulma.' },
      { slug: 'fark-bulma', ad: 'Fark Bulma', aciklama: 'İki resim arasındaki farkları bulma ve sayma.' },
    ],
  },
];

// Yalnız dosya adları okunur (içerik yüklenmez), böylece konular/index.ts ile döngü oluşmaz.
const HAZIR = new Set(
  Object.keys(import.meta.glob(['./konular/*.ts', '!./konular/index.ts'])).map((y) => y.replace(/^.*\/(.+)\.ts$/, '$1')),
);
for (const alan of ALANLAR) for (const k of alan.kategoriler) (k as Kategori & { hazir: boolean }).hazir = HAZIR.has(k.slug);

export const TUM_KATEGORILER = ALANLAR.flatMap((a) => a.kategoriler.map((k) => ({ ...(k as Kategori & { hazir: boolean }), alan: a })));
