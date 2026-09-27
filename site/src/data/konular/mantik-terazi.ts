import type { Konu } from '../konu-tipleri';

// Mantık terazisi konu anlatımı. Örneklerin ve alıştırmaların hepsi soru görselinden bağımsız çözüldü
// ve cevap anahtarıyla karşılaştırıldı (27 Eylül 2026). Açıklamalar sorunun kendi görseline göre yazıldı.
// Aynı soru kimliği 1, 2 ve 3. sınıfta aynı görseli kullandığı için her kimlik yalnız bir sınıftan seçildi.

const konu: Konu = {
  slug: 'mantik-terazi',
  ad: 'Mantık Terazisi',
  alan: 'Mantık ve Muhakeme',
  siniflar: '1-3. sınıf',
  ozet: 'Mantık terazisi soruları nasıl çözülür? 5 temel kural, 7 çözümlü örnek ve 8 alıştırmayla BİLSEM hazırlığı için ücretsiz konu anlatımı.',
  giris:
    'Mantık terazisi sorularında kefelere şekiller ya da sayılar konur. Çocuktan, terazilerin dengesine bakarak bir şeklin değerini, dengeyi sağlayacak eksik miktarı ya da şekillerin ağırlık sırasını bulması beklenir. Bu anlatımda soruların arkasındaki beş kuralı, adım adım çözülmüş örnekleri ve alıştırmaları bulacaksınız.',
  okumaDakika: 12,
  uygulamadakiSoru: 945,
  guncelleme: '2026-09-27',
  bolumler: [
    {
      id: 'nedir',
      baslik: 'Mantık terazisi soruları nedir?',
      bloklar: [
        {
          t: 'p',
          html: 'Mantık terazisi, eşitlik ve karşılaştırma mantığını ölçen bir soru tipidir; zekâ testlerinde ve BİLSEM\'e hazırlık materyallerinde sık karşılaşılır. Soruda bir ya da birkaç terazi çizilir. Kefeleri <b>aynı hizada</b> duran terazi dengededir; bir kefesi <b>aşağı inmiş</b> terazi ise o tarafın daha ağır olduğunu gösterir.',
        },
        { t: 'sorugorsel', soru: '2-terazi-medium-008', aciklama: 'Örnek bir mantık terazisi sorusu: üstteki terazide 4 kalp 12 ile dengede; alttaki terazide tek kalbin karşısına ne gelmesi gerektiği soruluyor.' },
        {
          t: 'p',
          html: 'Sorular iki biçimde gelir: <b>“Soru işareti yerine ne gelmelidir?”</b> ya da <b>“Terazilere göre şekillerin ağırdan hafife sıralanışı hangisidir?”</b> Çocuk terazileri okurken şu becerileri birlikte kullanır:',
        },
        {
          t: 'liste',
          maddeler: [
            '<b>Eşitlik:</b> Dengedeki terazinin iki kefesinin eşit olduğunu bilmek.',
            '<b>Karşılaştırma:</b> Aşağı inen kefenin ağır, yukarı kalkan kefenin hafif olduğunu okumak.',
            '<b>Yerine koyma:</b> Bir terazide bulunan değeri başka bir terazide kullanmak.',
            '<b>Sayı işlemleri:</b> Toplama, çıkarma ve eşit paylaştırma yapmak.',
            '<b>Sıralama:</b> Birden çok karşılaştırmayı tek bir sıraya dizmek.',
          ],
        },
        {
          t: 'p',
          html: 'BilsemNova uygulamasında 1, 2 ve 3. sınıf için ayrı ayrı 315\'er, toplam <b>945 mantık terazisi sorusu</b> var. Sorular kolay, orta ve zor olmak üzere üç seviyededir; 1. sınıfta 3, 2 ve 3. sınıfta 4 şık bulunur.',
        },
      ],
    },
    {
      id: 'kurallar',
      baslik: 'Beş temel kural',
      bloklar: [
        { t: 'p', html: 'Uygulamadaki mantık terazisi sorularının hepsi bu beş kurala dayanır. Bu kuralları bilen çocuk, ilk kez gördüğü bir teraziyi de okuyabilir.' },
        {
          t: 'kural',
          no: 1,
          baslik: 'Dengedeki terazi bir eşitliktir',
          html: 'Kefeler aynı hizadaysa iki taraf <b>eşit ağırlıktadır</b>. Teraziyi bir eşitlik gibi okuyun: “3 kare = 6”. Soru işaretli kefeye, karşı kefeyle tam eşit olacak şey gelir; fazlası da eksiği de dengeyi bozar.',
          diyagram: 'denge',
        },
        {
          t: 'kural',
          no: 2,
          baslik: 'Aşağı inen kefe daha ağırdır',
          html: 'Eğik terazide <b>aşağıdaki kefe ağır</b>, yukarıdaki hafiftir. İki kefede aynı şekil varsa, dengeyi kurmak için hafif kefeye <b>aradaki fark kadar</b> şekil eklenir: 4 yıldıza karşı 1 yıldız varsa 3 yıldız eklenir, çünkü 1 + 3 = 4.',
          diyagram: 'egik',
        },
        {
          t: 'kural',
          no: 3,
          baslik: 'Tek şeklin değerini paylaştırarak bul',
          html: 'Aynı şekilden birkaç tane bir sayıyı dengeliyorsa, o sayıyı şekillere <b>eşit olarak paylaştırın</b>. 3 kare 6 ediyorsa her kareye 2 düşer. Kontrol etmek için geri toplayın: 2 + 2 + 2 = 6.',
          diyagram: 'paylastir',
        },
        {
          t: 'kural',
          no: 4,
          baslik: 'Bildiğini yerine koy',
          html: 'Bir terazi “1 kare = 2 baklava” diyorsa, karenin geçtiği her yere 2 baklava koyabilirsiniz. Teraziler zincir gibi bağlıysa bunu <b>adım adım</b> tekrarlayın: her baklava da 3 kalp ediyorsa 1 kare 3 + 3 = <b>6 kalp</b> eder. Bir terazide bulunan sayı da aynı yolla öbür teraziye taşınır.',
          diyagram: 'yerineKoy',
        },
        {
          t: 'kural',
          no: 5,
          baslik: 'Tek şekil birkaç şekli dengeliyorsa daha ağırdır',
          html: '1 baklava 2 kareyi dengeliyorsa bir baklava, bir kareden <b>daha ağırdır</b>. Her terazinin söylediğini ikili karşılaştırma olarak yazın (baklava > kare, kare > üçgen), sonra hepsini tek sıraya dizin: <b>baklava > kare > üçgen</b>.',
          diyagram: 'siralama',
        },
        {
          t: 'kutu',
          tur: 'dikkat',
          baslik: 'Soru işareti neyi soruyor?',
          html: 'Sayılı terazilerde soru işareti bir sayıdır: karşısındaki şeklin değeri. Şekilli terazilerde ise karşı kefeyi dengelemek için <b>kaç tane</b> şekil gerektiğini sorar. Zincirli sorularda bu, zincirin <b>en sonundaki</b> şekildir: “1 kare kaç kalp eder?”',
        },
      ],
    },
    {
      id: 'denge',
      baslik: 'Dengeyi tamamlama ve sayılı teraziler',
      bloklar: [
        {
          t: 'p',
          html: 'Bu sorularda ya eğik bir terazinin dengesi tamamlanır ya da kefelerdeki sayılardan bir şeklin değeri bulunur. Hepsinin anahtarı aynıdır: dengedeki terazide iki taraf eşittir.',
        },
        {
          t: 'ornek',
          soru: '1-terazi-easy-008',
          baslik: 'Eğik teraziyi dengele',
          adimlar: [
            'Üstteki terazide sol kefede 3 kalp, sağ kefede 1 kalp var. Sol kefe aşağı inmiş: 3 kalp, 1 kalpten ağır.',
            'Alttaki terazi dengede: solda yine 3 kalp, sağda 1 kalp ve soru işareti var.',
            'Dengede iki kefe eşit olmalı. 1 kalbe <b>2 kalp</b> daha eklenirse 1 + 2 = 3 olur.',
            'Soru işareti, eklenecek kalp sayısıdır: 2.',
          ],
          eleme: 'A\'daki 1 ile sağda 2 kalp olur; sol kefe yine ağır basar. C\'deki 3 soldaki kalp sayısıdır; sağda zaten 1 kalp olduğu için 4 kalp olur ve bu kez sağ kefe ağır basar. Doğru cevap <b>B</b>.',
        },
        {
          t: 'ornek',
          soru: '1-terazi-easy-012',
          baslik: 'Bir kalp kaç eder?',
          adimlar: [
            'Üstteki terazi dengede: 2 kalp, 10 ile eşit.',
            '10\'u iki kalbe eşit paylaştırın: her kalbe <b>5</b> düşer (5 + 5 = 10).',
            'Alttaki terazide tek kalp var; karşısına onun değeri gelir: 5.',
          ],
          eleme: 'A\'daki 6 ile iki kalp 12, C\'deki 4 ile 8 eder; ikisi de 10\'u tutmaz. Doğru cevap <b>B</b>.',
        },
        {
          t: 'ornek',
          soru: '2-terazi-medium-087',
          baslik: 'Önce yıldızı, sonra kalbi bul',
          adimlar: [
            'Üstteki terazi: 3 yıldız = 12. 12\'yi üç yıldıza paylaştırın: 1 yıldız = <b>4</b>.',
            'Ortadaki terazi: yıldız + kalp = 11. Yıldızın yerine 4 koyun: 4 + kalp = 11.',
            '4\'e kaç eklenirse 11 olur? 7. Yani 1 kalp = <b>7</b>.',
            'Alttaki terazide tek kalp var; soru işaretinin yerine 7 gelir.',
          ],
          eleme: 'A\'daki 11 ortadaki terazinin toplamıdır; içinden yıldızın 4\'ü çıkarılmamış. B\'deki 5 ile 4 + 5 = 9, D\'deki 9 ile 4 + 9 = 13 olur; ikisi de 11 etmez. Doğru cevap <b>C</b>.',
        },
      ],
    },
    {
      id: 'yerine-koyma',
      baslik: 'Şekilleri birbirine çevirme',
      bloklar: [
        {
          t: 'p',
          html: 'Bu terazilerde sayı yoktur; teraziler şekillerin birbirine göre değerini verir. Çocuk bir şeklin yerine ona denk olan şekilleri koyarak sonuca ulaşır.',
        },
        {
          t: 'ornek',
          soru: '2-terazi-medium-020',
          baslik: 'Her kalbin yerine 2 üçgen',
          adimlar: [
            'Üstteki terazi dengede: 1 kalp = 2 üçgen.',
            'Alttaki terazide 3 kalp var. Her kalbin yerine 2 üçgen koyun.',
            '2 + 2 + 2 = <b>6 üçgen</b>. Soru işaretli kefeye 6 üçgen gelmeli.',
          ],
          eleme: 'D\'deki 5, 3 ile 2 toplanarak bulunur; oysa her kalp için ayrı ayrı 2 üçgen gerekir. B\'deki 7 ve C\'deki 8, 6 üçgenden fazladır; sağ kefe ağır basar. Doğru cevap <b>A</b>.',
        },
        {
          t: 'ornek',
          soru: '3-terazi-hard-042',
          baslik: 'Zincirli teraziler',
          adimlar: [
            'Birinci terazi: 1 altıgen = 3 üçgen.',
            'İkinci terazi: 1 üçgen = 3 kalp.',
            'Altıgenin yerine 3 üçgen, her üçgenin yerine de 3 kalp koyun: 3 + 3 + 3 = <b>9 kalp</b>.',
            'Üçüncü terazide 1 altıgen var; soru işareti, karşısına gelecek kalp sayısıdır: 9.',
          ],
          eleme: 'A (8), B (10) ve D (11) 9\'a yakın sayılardır ama hesabı tutmaz: üç üçgenin her biri 3 kalp eder, 3 + 3 + 3 = 9. Doğru cevap <b>C</b>.',
        },
      ],
    },
    {
      id: 'siralama',
      baslik: 'En ağırdan en hafife sıralama',
      bloklar: [
        {
          t: 'p',
          html: 'Sıralama sorularında sayı sorulmaz; terazilerden şekillerin hangisinin daha ağır olduğu çıkarılır. Tek başına birkaç şekli dengeleyen şekil, o şekillerin her birinden ağırdır.',
        },
        {
          t: 'ornek',
          soru: '1-terazi-easy-048',
          baslik: 'Yıldız, daire ve kalp',
          adimlar: [
            'Üstteki terazi: 1 yıldız, 2 daireyi dengeliyor. Yıldız bir daireden ağır: <b>yıldız > daire</b>.',
            'Alttaki terazi: 1 daire, 2 kalbi dengeliyor: <b>daire > kalp</b>.',
            'İki karşılaştırmayı birleştirin: <b>yıldız > daire > kalp</b>. Yıldız en ağır, kalp en hafif.',
          ],
          eleme: 'B\'de sıra tersine çevrilmiş (hafiften ağıra). C\'de daire yıldızdan önce gelmiş; oysa tek yıldız iki daireyi dengeliyor. Doğru cevap <b>A</b>.',
        },
        {
          t: 'ornek',
          soru: '3-terazi-hard-074',
          baslik: 'Üç şekli tek sıraya dizmek',
          adimlar: [
            'Üstteki terazi: 1 kalp = 3 yıldız, yani <b>kalp > yıldız</b>.',
            'Alttaki terazi: 1 yıldız = 2 altıgen, yani <b>yıldız > altıgen</b>.',
            'Yıldız iki karşılaştırmanın ortasında kalır: <b>kalp > yıldız > altıgen</b>.',
            'Şıklarda aynı üç şekil farklı sıralarla verilmiş; her şıkkı soldan sağa okuyarak kontrol edin.',
          ],
          eleme: 'A\'da altıgen yıldızdan önce, B\'de yıldız kalpten önce, C\'de altıgen en başta gelmiş. Kalp en ağır, altıgen en hafif olmalı. Doğru cevap <b>D</b>.',
        },
        {
          t: 'kutu',
          tur: 'ipucu',
          baslik: 'Kalp her zaman hafif değildir',
          html: 'Şeklin türü ya da büyüklüğü ağırlığı hakkında bir şey söylemez. Yukarıdaki iki örnekte kalp bir soruda en hafif, öbüründe en ağır. Karar vermek için yalnızca terazilere bakın.',
        },
      ],
    },
    {
      id: 'yontem',
      baslik: '5 adımda çözüm yöntemi',
      bloklar: [
        { t: 'p', html: 'Her mantık terazisi sorusunda aynı sırayı izlemek hem hızı hem doğruluğu artırır:' },
        {
          t: 'liste',
          numarali: true,
          maddeler: [
            '<b>Terazileri oku.</b> Hangisi dengede, hangisi eğik? Eğikse aşağı inen kefe ağırdır.',
            '<b>Her teraziyi bir cümleye çevir.</b> “3 yıldız = 12”, “1 kalp = 2 üçgen”, “yıldız > daire” gibi.',
            '<b>Tek bilinmeyenli teraziden başla.</b> Önce değeri doğrudan bulunan teraziyi çöz: paylaştır ya da farkı bul.',
            '<b>Yerine koy.</b> Bulduğun değeri ya da denk şekilleri bir sonraki teraziye taşı.',
            '<b>Kontrol et ve ele.</b> Seçtiğin şıkkı soru işaretinin yerine koy: terazi gerçekten dengede kalıyor mu?',
          ],
        },
        {
          t: 'kutu',
          tur: 'ipucu',
          baslik: 'Kâğıda yazmak hatayı azaltır',
          html: 'Üç terazili sorularda her terazinin cümlesini alt alta yazmak (“1 altıgen = 3 üçgen”, “1 üçgen = 3 kalp”) zincirin ortasında kaybolmayı önler. Cevabı bulduktan sonra teraziye geri koyup kontrol etmek bir dakikadan kısa sürer.',
        },
      ],
    },
    {
      id: 'tuzaklar',
      baslik: 'Çeldirici tuzakları ve sık yapılan hatalar',
      bloklar: [
        { t: 'p', html: 'Yanlış şıkların çoğu doğru cevaba çok yakın sayılardır (1-2 fazla ya da eksik); bir kısmı da belirli bir hatayı yakalamak için seçilir. En sık yapılan hatalar:' },
        {
          t: 'liste',
          maddeler: [
            '<b>Görünen sayıyı kopyalamak:</b> Terazideki toplamı (örneğin 11) çözmeden cevap sanmak.',
            '<b>Çarpmak yerine toplamak:</b> “1 kalp = 2 üçgen” iken 3 kalp için 3 + 2 = 5 demek; doğrusu 2 + 2 + 2 = 6.',
            '<b>Zincirin ortasında durmak:</b> “1 altıgen = 3 üçgen”i görüp üçgenleri kalbe çevirmeyi atlamak.',
            '<b>Eğik teraziyi ters okumak:</b> Yukarı kalkan kefeyi ağır sanmak.',
            '<b>Fark yerine sayının kendisini eklemek:</b> Denge için eksik olanı değil, karşı kefedeki şekil sayısını eklemek.',
            '<b>Sıralamayı ters çevirmek:</b> “Ağırdan hafife” yerine “hafiften ağıra” dizmek.',
            '<b>Şeklin görünüşüne güvenmek:</b> Büyük görünen şekli ağır sanmak ya da “kalp hafiftir” gibi alışkanlıkla karar vermek.',
          ],
        },
        {
          t: 'kutu',
          tur: 'veli',
          baslik: 'Velilere öneri',
          html: 'Çocuğunuz bir şık seçtiğinde <b>“Bunu soru işaretinin yerine koyarsak terazi dengede kalır mı?”</b> diye sorun. Cevabını teraziye geri koyup kontrol eden çocuk, yanlışını da çoğu zaman kendisi bulur.',
        },
      ],
    },
    {
      id: 'evde',
      baslik: 'Evde nasıl çalışılır?',
      bloklar: [
        {
          t: 'p',
          html: 'Terazi mantığı, elle tutulur nesnelerle en kolay öğrenilen konulardandır. Gerçek bir denge kurmak, çocuğun “eşit” ve “daha ağır” kavramlarını somutlaştırır.',
        },
        {
          t: 'liste',
          maddeler: [
            '<b>Askı terazisi:</b> Bir elbise askısının iki ucuna birer kâğıt bardak asın; bardaklar kefe olur. Ağırlık olarak aynı büyüklükte legolar, bilyeler ya da madeni paralar kullanın.',
            '<b>“Kaç tane eklemeliyim?” oyunu:</b> Bir bardağa 5, öbürüne 2 lego koyun. Çocuk dengeyi kurmak için kaç lego ekleyeceğini önce tahmin etsin, sonra deneyin.',
            '<b>Takas oyunu:</b> “1 mavi lego = 2 kırmızı lego” gibi bir takas kuralı koyun ve “3 mavi lego kaç kırmızı eder?” diye sorun. Bu, yerine koyma mantığının oyun hâlidir.',
            '<b>Sıralama oyunu:</b> Bir elma, bir mandalina ve bir cevizi ikişer ikişer elde tartın; sonra üçünü en ağırdan en hafife dizin. Mutfak tartısı varsa tahmini birlikte kontrol edin.',
            '<b>Süre:</b> Haftada birkaç kez 10-15 dakika yeterli. Kısa ve düzenli çalışma, uzun ve seyrek çalışmadan daha etkilidir.',
          ],
        },
        {
          t: 'kutu',
          tur: 'veli',
          baslik: 'Soru sorarak yönlendirin',
          html: '<b>“Hangi kefe aşağıda, neden?”</b>, <b>“Bu iki kefe eşit mi?”</b>, <b>“Bir kalp kaç eder, nasıl bulduk?”</b> gibi sorular, çocuğun kuralı kendisinin bulmasını sağlar. Cevabı söylemek yerine teraziye birlikte bakın.',
        },
      ],
    },
    {
      id: 'alistirma',
      baslik: 'Alıştırmalar',
      bloklar: [
        { t: 'p', html: 'Aşağıdaki 8 soruyu çocuğunuzla birlikte çözün. Her sorunun altındaki düğmeyle cevabı ve kısa açıklamasını görebilirsiniz.' },
        {
          t: 'alistirma',
          sorular: [
            { soru: '1-terazi-easy-019', aciklama: 'Üstteki terazide 5 kalp, 2 kalpten ağır. Alttaki teraziyi dengelemek için sağ kefeye 5 − 2 = 3 kalp daha eklenir.' },
            { soru: '1-terazi-easy-092', aciklama: '3 üçgen 12 ile dengede. 12\'yi üç üçgene paylaştırınca her üçgene 4 düşer (4 + 4 + 4 = 12).' },
            { soru: '1-terazi-easy-002', aciklama: '1 yıldız = 2 kalp. Alttaki 2 yıldızın her birinin yerine 2 kalp koyunca 2 + 2 = 4 kalp olur.' },
            { soru: '1-terazi-easy-030', aciklama: '2 baklava = 8, yani 1 baklava = 4. Ortadaki terazide 4 + kalp = 7 olduğuna göre 1 kalp = 3.' },
            { soru: '2-terazi-medium-057', aciklama: '1 kalp 3 yıldızı, 1 yıldız 2 daireyi dengeliyor. Kalp yıldızdan, yıldız daireden ağır: kalp > yıldız > daire.' },
            { soru: '2-terazi-medium-036', aciklama: '1 yıldız = 3 kalp, 1 kalp = 2 daire. Her kalbin yerine 2 daire koyunca 2 + 2 + 2 = 6 daire olur.' },
            { soru: '3-terazi-hard-032', aciklama: '1 kalp = 3 üçgen. Alttaki 4 kalbin her biri 3 üçgen eder: 3 + 3 + 3 + 3 = 12 üçgen.' },
            { soru: '3-terazi-hard-066', aciklama: '1 daire = 2 üçgen, 1 üçgen = 4 kalp. Dairenin yerine 2 üçgen, her üçgenin yerine 4 kalp koyunca 4 + 4 = 8 kalp olur.' },
          ],
        },
      ],
    },
  ],
  slaytlar: [
    { t: 'kapak' },
    {
      t: 'metin',
      ust: 'Soru nasıl görünür?',
      baslik: 'Terazi dengede mi, eğik mi?',
      soru: '2-terazi-medium-008',
      maddeler: ['Kefeler aynı hizada: iki taraf eşit', 'Bir kefe aşağıda: o taraf daha ağır', 'Soru işareti: dengeyi sağlayacak değer'],
    },
    { t: 'metin', ust: 'Kural 1', baslik: 'Dengedeki terazi bir eşitliktir', diyagram: 'denge', maddeler: ['Kefeler aynı hizada → iki taraf eşit', 'Teraziyi “3 kare = 6” gibi okuyun'] },
    { t: 'metin', ust: 'Kural 2', baslik: 'Aşağı inen kefe daha ağırdır', diyagram: 'egik', maddeler: ['Aşağıdaki kefe ağır, yukarıdaki hafif', 'Dengeyi farkla tamamlayın: 4 = 1 + 3'] },
    { t: 'metin', ust: 'Kural 3', baslik: 'Tek şeklin değerini paylaştırarak bul', diyagram: 'paylastir', maddeler: ['3 kare = 6 → 1 kare = 2', 'Kontrol: 2 + 2 + 2 = 6'] },
    { t: 'metin', ust: 'Kural 4', baslik: 'Bildiğini yerine koy', diyagram: 'yerineKoy', maddeler: ['1 kare = 2 baklava, 1 baklava = 3 kalp', 'Adım adım: 1 kare = 6 kalp'] },
    { t: 'metin', ust: 'Kural 5', baslik: 'Tek şekil birkaç şekli dengeliyorsa daha ağırdır', diyagram: 'siralama', maddeler: ['Her terazi bir karşılaştırma verir', 'Tek sıraya dizin: baklava > kare > üçgen'] },
    { t: 'soru', ust: 'Örnek 1 · Eğik terazi', baslik: 'Soru işareti yerine ne gelmelidir?', soru: '1-terazi-easy-008' },
    {
      t: 'cevap',
      ust: 'Örnek 1 · Çözüm',
      baslik: 'Denge için 2 kalp eklenir',
      soru: '1-terazi-easy-008',
      adimlar: ['Solda 3 kalp, sağda 1 kalp: sol ağır.', 'Dengede iki kefe eşit olmalı.', '1 + 2 = 3: soru işareti 2.'],
    },
    { t: 'soru', ust: 'Örnek 2 · Sayılı teraziler', baslik: 'Soru işareti yerine ne gelmelidir?', soru: '2-terazi-medium-087' },
    {
      t: 'cevap',
      ust: 'Örnek 2 · Çözüm',
      baslik: 'Önce yıldız, sonra kalp',
      soru: '2-terazi-medium-087',
      adimlar: ['3 yıldız = 12 → 1 yıldız = 4', 'Yıldız + kalp = 11 → 4 + 7 = 11', 'Soru işareti: 7'],
    },
    { t: 'soru', ust: 'Örnek 3 · Zincirli teraziler', baslik: 'Soru işareti yerine ne gelmelidir?', soru: '3-terazi-hard-042' },
    {
      t: 'cevap',
      ust: 'Örnek 3 · Çözüm',
      baslik: '1 altıgen = 9 kalp',
      soru: '3-terazi-hard-042',
      adimlar: ['1 altıgen = 3 üçgen', '1 üçgen = 3 kalp', '3 + 3 + 3 = 9 kalp'],
    },
    { t: 'soru', ust: 'Örnek 4 · Sıralama', baslik: 'Ağırdan hafife sıralanış hangisidir?', soru: '3-terazi-hard-074' },
    {
      t: 'cevap',
      ust: 'Örnek 4 · Çözüm',
      baslik: 'Kalp > yıldız > altıgen',
      soru: '3-terazi-hard-074',
      adimlar: ['1 kalp = 3 yıldız → kalp daha ağır', '1 yıldız = 2 altıgen → yıldız daha ağır', 'Sıra: kalp > yıldız > altıgen'],
    },
    {
      t: 'metin',
      ust: 'Yöntem',
      baslik: '5 adımda çözüm',
      numarali: true,
      maddeler: ['Terazileri oku: dengede mi, eğik mi?', 'Her teraziyi bir cümleye çevir', 'Tek bilinmeyenli teraziden başla', 'Bulduğunu yerine koy', 'Şıkkı teraziye koyup kontrol et'],
    },
    {
      t: 'metin',
      ust: 'Dikkat',
      baslik: 'Çeldirici tuzakları',
      maddeler: ['Görünen sayıyı kopyalamak', 'Çarpmak yerine toplamak: 3 + 2 değil, 2 + 2 + 2', 'Zincirin ortasında durmak', 'Eğik teraziyi ters okumak', 'Sıralamayı ters çevirmek'],
    },
    {
      t: 'metin',
      ust: 'Evde',
      baslik: '“Kaç tane eklemeliyim?” oyunu',
      maddeler: ['Elbise askısı, iki kâğıt bardak, legolar', 'Bir bardağa 5, öbürüne 2 lego koyun', 'Önce tahmin, sonra deneme', 'Haftada birkaç kez 10-15 dakika'],
    },
    { t: 'kapanis' },
  ],
};

export default konu;
