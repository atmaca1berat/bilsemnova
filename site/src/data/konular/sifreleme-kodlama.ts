import type { Konu } from '../konu-tipleri';

// Şifreleme ve kodlama konu anlatımı. Örneklerin ve alıştırmaların hepsi soru görselinden bağımsız çözüldü
// ve cevap anahtarıyla karşılaştırıldı (27 Eylül 2026). Açıklamalar sorunun kendi görseline göre yazıldı.
// Sembollü şıklar 1. sınıftan (3 şık) seçildi: 4 şıklı sürümlerde semboller telefonda çok küçülüyor.

const konu: Konu = {
  slug: 'sifreleme-kodlama',
  ad: 'Şifreleme ve Kodlama',
  alan: 'Mantık ve Muhakeme',
  siniflar: '1-3. sınıf',
  ozet: 'Şifreleme ve kodlama soruları nasıl çözülür? 5 temel kural, 7 çözümlü örnek ve 8 alıştırmayla BİLSEM hazırlığı için ücretsiz konu anlatımı.',
  giris:
    'Şifreleme ve kodlama sorularında her sembolün bir anlamı vardır: bir harf ya da bir sayı. Çocuktan, verilen tabloyu kullanarak bir kelimeyi sembollerle yazması, sembollerin değerini hesaplaması ya da gizli kuralı bulup uygulaması beklenir. Bu anlatımda beş temel kuralı, adım adım çözülmüş örnekleri ve alıştırmaları bulacaksınız.',
  okumaDakika: 12,
  uygulamadakiSoru: 945,
  guncelleme: '2026-09-27',
  bolumler: [
    {
      id: 'nedir',
      baslik: 'Şifreleme ve kodlama soruları nedir?',
      bloklar: [
        {
          t: 'p',
          html: 'Şifreleme soruları, bir sembol ile anlamı arasındaki eşlemeyi kurup kullanmayı ölçer; BİLSEM\'e hazırlık materyallerinde sık görülen bir mantık sorusu tipidir. Soruda genellikle bir <b>şifre tablosu</b> verilir: her sembolün yanında ya da altında onun anlamı yazar.',
        },
        { t: 'sorugorsel', soru: '1-sifre-easy-027', aciklama: 'Örnek bir şifreleme sorusu: tabloda dört sembolün harf karşılığı veriliyor; “AS” kelimesinin sembollerle nasıl yazılacağı soruluyor.' },
        {
          t: 'p',
          html: 'Uygulamadaki soruların çoğu üç biçimde gelir: sembolleri sayıya çevirip <b>hesaplamak</b>, bir kelimeyi sembollerle <b>yazmak</b> ve gizli bir değeri ya da <b>tekrar eden kuralı</b> bulmak. Soru hep aynıdır: <b>“Şifreye göre doğru cevap hangisidir?”</b> Çocuk bu sırada şu becerileri kullanır:',
        },
        {
          t: 'liste',
          maddeler: [
            '<b>Eşleme:</b> Her sembolü tablodaki anlamıyla eşleştirmek.',
            '<b>Sıra takibi:</b> Harfleri ve sembolleri soldan sağa, atlamadan çevirmek.',
            '<b>Görsel dikkat:</b> Renk, şekil ve yön farklarını görmek.',
            '<b>İşlem:</b> Sembollerin değerlerini toplamak, eksik değeri bulmak.',
            '<b>Örüntü bulma:</b> Tekrar eden parçayı görüp devamını bulmak.',
          ],
        },
        {
          t: 'p',
          html: 'BilsemNova uygulamasında 1, 2 ve 3. sınıf için ayrı ayrı 315\'er, toplam <b>945 şifreleme ve kodlama sorusu</b> var. Sorular kolay, orta ve zor olmak üzere üç seviyededir; 1. sınıfta 3, 2 ve 3. sınıfta 4 şık bulunur.',
        },
      ],
    },
    {
      id: 'kurallar',
      baslik: 'Beş temel kural',
      bloklar: [
        { t: 'p', html: 'Bütün şifreleme soruları aynı beş kurala dayanır. Tablo değişir, semboller değişir; kurallar aynı kalır.' },
        {
          t: 'kural',
          no: 1,
          baslik: 'Tablo bir sözlüktür',
          html: 'Şifre tablosunda her sembolün <b>tek bir anlamı</b> vardır. Sembolü tabloda bulun, karşısındaki harfi ya da sayıyı okuyun. Tablo iki yönlü çalışır: sembolden anlama (<b>şifre çözme</b>) ve anlamdan sembole (<b>şifreleme</b>).',
          diyagram: 'tablo',
        },
        {
          t: 'kural',
          no: 2,
          baslik: 'Sırayı koru: harf harf, soldan sağa',
          html: 'Bir kelimeyi şifrelerken harfleri <b>soldan sağa</b>, birini bile atlamadan tek tek çevirin. Aynı harf kelimede iki kez geçiyorsa <b>aynı sembol</b> de iki kez yazılır: ANNE kelimesindeki iki N, yan yana iki aynı sembol olur.',
          diyagram: 'sira',
        },
        {
          t: 'kural',
          no: 3,
          baslik: 'Önce sayıya çevir, sonra hesapla',
          html: 'Sembollerin sayı değeri verilmişse işlemi sembollerle değil, sayılarla yapın. Her sembolün altına değerini yazın, sonra toplayın. Aynı sembol iki kez geçiyorsa değeri de <b>iki kez</b> toplanır.',
          diyagram: 'hesapla',
        },
        {
          t: 'kural',
          no: 4,
          baslik: 'Bilinmeyeni bul, tabloya ekle',
          html: 'Bir sembolün değeri verilmemişse bilinen değeri <b>yerine koyarak</b> bulun: daire = 3 ve daire + kalp = 8 ise 3 + kalp = 8, yani kalp = 5. Bulduğunuz değeri tabloya ekleyin; artık o sembolü de biliyorsunuz.',
          diyagram: 'bilinmeyen',
        },
        {
          t: 'kural',
          no: 5,
          baslik: 'Tekrar eden parçayı bul',
          html: 'Bazı sorularda sayılar bir dizi hâlinde verilir ve sıradaki sayı sorulur. Dizide <b>aynı sırayla tekrar eden parçayı</b> bulun (6, 3, 8 | 6, 3, …) ve parçanın devamını yazın. Sayıların yerine tablodaki sembolleri düşünmek tekrarı görmeyi kolaylaştırır.',
          diyagram: 'tekrar',
        },
        {
          t: 'kutu',
          tur: 'dikkat',
          baslik: 'Renge, şekle ve yöne dikkat',
          html: 'Şifre tablolarında semboller yalnızca şekilleriyle değil, <b>renkleriyle</b> de ayrılır: sarı daire ile mavi dairenin değeri farklıdır. Bazı yanlış şıklarda ise sembol <b>ters çevrilmiştir</b>: sola bakan turuncu etiket, sağa bakan hâliyle aynı sembol değildir.',
        },
      ],
    },
    {
      id: 'sayi-sifreleri',
      baslik: 'Sembolleri sayıya çevirmek',
      bloklar: [
        {
          t: 'p',
          html: 'Bu sorularda tablo her sembole bir sayı verir: bazen bir şekle, bazen yalnızca bir renge. Soru, sembollerle yazılmış bir toplamanın sonucunu sorar.',
        },
        {
          t: 'ornek',
          soru: '1-sifre-easy-001',
          baslik: 'İki sembolün toplamı',
          adimlar: [
            'Tablo: beşgen = 2, daire = 8, baklava = 5.',
            'İşlemde beşgen ve baklava var. Değerlerini yazın: beşgen yerine 2, baklava yerine 5.',
            '2 + 5 = <b>7</b>.',
          ],
          eleme: 'A\'daki 6, 2 + 5 toplamını tutmaz. B\'deki 8 dairenin değeridir; oysa işlemde daire yok. Doğru cevap <b>C</b>.',
        },
        {
          t: 'ornek',
          soru: '2-sifre-medium-012',
          baslik: 'Renkler de şifre olabilir',
          adimlar: [
            'Tabloda dört renkli daire var: sarı = 10, mor = 3, pembe = 7, mavi = 4. Şekil hep aynı; sembolü <b>renk</b> belirliyor.',
            'İşlem: mavi + pembe + sarı.',
            'Değerleri yerine koyun: 4 + 7 + 10 = <b>21</b>.',
          ],
          eleme: 'Mavi ile moru karıştırmamak gerekir: ikisi de daire ama değerleri farklı (4 ve 3). A\'daki 19, C\'deki 25 ve D\'deki 23 toplamı tutmaz. Doğru cevap <b>B</b>.',
        },
        {
          t: 'ornek',
          soru: '3-sifre-hard-001',
          baslik: 'Aynı sembol iki kez',
          adimlar: [
            'Tablo: kare = 8, turuncu etiket = 7, üçgen = 9, kalp = 2.',
            'İşlem: kalp + kare + kare. Kare iki kez geçiyor; değeri de iki kez toplanır.',
            '2 + 8 + 8 = <b>18</b>.',
          ],
          eleme: 'B\'deki 17, karelerden birinin yerine turuncu etiket konunca (2 + 8 + 7); D\'deki 19, karelerden birinin yerine üçgen konunca (2 + 8 + 9); C\'deki 20 ise iki karenin yerine iki üçgen konunca (2 + 9 + 9) bulunur. Doğru cevap <b>A</b>.',
        },
      ],
    },
    {
      id: 'harf-sifreleri',
      baslik: 'Kelimeyi sembollerle yazmak',
      bloklar: [
        {
          t: 'p',
          html: 'Bu sorularda tablo her sembole bir harf verir. Çocuk, verilen kelimeyi harf harf sembole çevirir ve doğru sembol dizisini şıklarda bulur.',
        },
        {
          t: 'ornek',
          soru: '1-sifre-easy-068',
          baslik: 'İki harfli kelime',
          adimlar: [
            'Tablo: turuncu etiket = L, kalp = Ğ, daire = E, beşgen = S.',
            'Kelime EL. İlk harf E: tabloda <b>daire</b>. İkinci harf L: <b>turuncu etiket</b>.',
            'Doğru dizi soldan sağa: daire, turuncu etiket.',
          ],
          eleme: 'B\'de aynı iki sembol ters sırada; bu LE olur. C\'de daire yerine kalp var; bu ĞL olur. Doğru cevap <b>A</b>.',
        },
        {
          t: 'ornek',
          soru: '1-sifre-medium-001',
          baslik: 'Kelimede tekrar eden harf',
          adimlar: [
            'Tablo: baklava = P, beşgen = U, kalp = Ş, daire = K, turuncu etiket = L, yıldız = A.',
            'Kelime KUŞU. Harf harf çevirin: K → daire, U → beşgen, Ş → kalp, U → beşgen.',
            'U iki kez geçtiği için <b>beşgen de iki kez</b> yazılır: 2. ve 4. sırada.',
            'Doğru dizi: daire, beşgen, kalp, beşgen.',
          ],
          eleme: 'A\'da ilk iki sembol yer değiştirmiş; bu UKŞU olur. C\'de ilk sembol baklava; baklava P harfidir, bu PUŞU olur. Doğru cevap <b>B</b>.',
        },
        {
          t: 'kutu',
          tur: 'ipucu',
          baslik: 'Önce ilk harfe bakın',
          html: 'Şıklar çoğu zaman aynı sembollerin farklı sıralarıdır. Önce yalnızca ilk harfin sembolüne bakıp uymayan şıkları eleyin, sonra ikinci harfe geçin. Bu yöntem uzun kelimelerde de hızlı ve güvenlidir.',
        },
      ],
    },
    {
      id: 'gizli-deger',
      baslik: 'Gizli değeri ve tekrar eden kuralı bulmak',
      bloklar: [
        {
          t: 'p',
          html: 'Bu sorularda cevap tabloda hazır değildir: ya bir sembolün değeri başka bir işlemden bulunur ya da bir sayı dizisinin kuralı keşfedilip uygulanır.',
        },
        {
          t: 'ornek',
          soru: '2-sifre-medium-007',
          baslik: 'Baklavanın değeri kaç?',
          adimlar: [
            'Birinci bilgi: beşgen = 6.',
            'İkinci bilgi: beşgen + baklava = 14. Beşgenin yerine 6 koyun: 6 + baklava = 14.',
            '6\'ya kaç eklenirse 14 olur? <b>8</b>. Baklava = 8.',
          ],
          eleme: 'B\'deki 10 ile 6 + 10 = 16, C\'deki 9 ile 15, D\'deki 7 ile 13 olur; hiçbiri 14 etmez. Doğru cevap <b>A</b>.',
        },
        {
          t: 'ornek',
          soru: '3-sifre-medium-025',
          baslik: 'Tekrar eden dört sayı',
          adimlar: [
            'Tablo: üçgen → 3, kare → 1, kalp → 9, daire → 6.',
            'Dizi: 3, 1, 9, 6, 3, 1, ? Sayıların yerine sembolleri koyun: üçgen, kare, kalp, daire, üçgen, kare, ?',
            'Tekrar eden parça <b>3, 1, 9, 6</b> (üçgen, kare, kalp, daire). İkinci turda 3 ve 1 geldi; sırada <b>9</b> var.',
          ],
          eleme: 'A\'daki 6, bir sayı atlanınca; D\'deki 3, parça erken baştan başlatılınca seçilir. B\'deki 12 dizide hiç geçmiyor. Doğru cevap <b>C</b>.',
        },
        {
          t: 'kutu',
          tur: 'ipucu',
          baslik: 'Bulduğunuzu geri koyun',
          html: 'Bulduğunuz değeri işleme geri koyun: baklava = 8 ise 6 + 8 gerçekten 14 ediyor mu? Dizilerde de bulduğunuz sayıyı ekleyip parçanın aynı sırayla tekrarlandığına bakın.',
        },
        {
          t: 'kutu',
          tur: 'ipucu',
          baslik: 'Tabloyu kendiniz kurmanız gereken sorular',
          html: 'Bazı sorularda solda birkaç kelime, sağda bu kelimelerin sayı kodları verilir. Uygulamadaki bu sorularda kodlar kelimelerle <b>aynı sıradadır</b>: kodları soldan sağa, yukarıdan aşağı okuyun; ilk kod ilk kelimenin, ikinci kod ikinci kelimenin kodudur. İlk kelimeyi koduyla <b>harf harf</b> eşleştirin (kelime KAR, kod 527 ise K = 5, A = 2, R = 7), bu tablonun öbür kelime-kod çiftlerinde de tuttuğunu kontrol edin, sonra istenen kelimeyi bu tabloyla çevirin.',
        },
      ],
    },
    {
      id: 'yontem',
      baslik: '5 adımda çözüm yöntemi',
      bloklar: [
        { t: 'p', html: 'Her şifreleme sorusunda aynı sırayı izlemek hem hızı hem doğruluğu artırır:' },
        {
          t: 'liste',
          numarali: true,
          maddeler: [
            '<b>Tabloyu oku.</b> Semboller neyi anlatıyor: harf mi, sayı mı? Semboller şekille mi, renkle mi ayrılıyor?',
            '<b>Soruyu belirle.</b> Kelime mi şifrelenecek, işlem mi yapılacak, gizli değer mi bulunacak, dizi mi devam edecek?',
            '<b>Tek tek çevir.</b> Soldan sağa, sembol sembol; aynı sembol her yerde aynı anlama gelir.',
            '<b>Hesapla ya da kuralı uygula.</b> Toplamayı sayılarla yap; bilinmeyeni yerine koyarak bul; tekrar eden parçayı devam ettir.',
            '<b>Şıkları ele ve kontrol et.</b> Önce ilk sembole ya da sayıya bak, sonra gerisine; cevabını işleme geri koy.',
          ],
        },
        {
          t: 'kutu',
          tur: 'ipucu',
          baslik: 'Kendi tablonuzu yazın',
          html: 'Tablodaki semboller küçük ya da çoksa, kâğıda sembolü ve anlamını yan yana yazmak (kalp = Ş, beşgen = U …) karıştırmayı azaltır. Bulunan yeni değerler de bu listeye eklenir.',
        },
      ],
    },
    {
      id: 'tuzaklar',
      baslik: 'Çeldirici tuzakları ve sık yapılan hatalar',
      bloklar: [
        { t: 'p', html: 'Yanlış şıklar rastgele değildir; çoğu belirli bir hatayı yakalamak için hazırlanır. En sık karşılaşılanlar:' },
        {
          t: 'liste',
          maddeler: [
            '<b>Sırayı karıştırmak:</b> Doğru sembolleri seçip yerlerini değiştirmek (EL yerine LE).',
            '<b>Komşu sembolü okumak:</b> Tabloda yan yana duran iki sembolün anlamlarını karıştırmak.',
            '<b>Rengi gözden kaçırmak:</b> Aynı şekildeki iki farklı renkli sembolü aynı sanmak.',
            '<b>Ters çevrilmiş sembol:</b> Yönü değişmiş sembolü doğru sanmak.',
            '<b>Tekrarı unutmak:</b> İki kez geçen harfi ya da sembolü bir kez yazmak ya da bir kez toplamak.',
            '<b>Görünen sayıyı cevap sanmak:</b> Tablodaki bir değeri ya da işlemdeki bir sayıyı çözmeden seçmek.',
            '<b>Diziyi yanlış yerden başlatmak:</b> Tekrar eden parçayı erken bitirip baştan saymak.',
          ],
        },
        {
          t: 'kutu',
          tur: 'veli',
          baslik: 'Velilere öneri',
          html: 'Çocuğunuz yanlış bir şık seçtiğinde <b>“Bu şık hangi harfi (ya da sayıyı) yanlış çevirmiş?”</b> diye birlikte bakın. Yanlış şıkkın nereden geldiğini bulan çocuk, tabloyu okumayı gerçekten öğrenmiş demektir.',
        },
      ],
    },
    {
      id: 'evde',
      baslik: 'Evde nasıl çalışılır?',
      bloklar: [
        {
          t: 'p',
          html: 'Şifreleme, çocukların en çok eğlendiği konulardandır; çünkü evde kendi gizli alfabenizi kurabilirsiniz.',
        },
        {
          t: 'liste',
          maddeler: [
            '<b>Gizli alfabe:</b> Birlikte 5-6 harf için sembol seçin (yıldız = A, kalp = N …) ve tabloyu bir kartona yazın. Birbirinize sembollerle kısa kelimeler (ANNE, BABA, EV) yazıp çözün.',
            '<b>Renk kodu:</b> Renkli legolara ya da boncuklara sayı değeri verin (kırmızı = 2, mavi = 5). Çocuk bir sıra boncuğun toplamını bulsun.',
            '<b>Gizli değer oyunu:</b> “Mavi = 5, mavi + sarı = 9. Sarı kaç?” gibi soruları gerçek boncuklarla kurun; önce tahmin, sonra sayarak kontrol.',
            '<b>Tekrar eden desen:</b> Boncukları bir kurala göre dizin (kırmızı, mavi, sarı, kırmızı, mavi …); çocuk sıradakini bulsun, sonra kendisi bir desen kursun.',
            '<b>Süre:</b> Haftada birkaç kez 10-15 dakika yeterli. Kısa ve düzenli çalışma, uzun ve seyrek çalışmadan daha etkilidir.',
          ],
        },
        {
          t: 'kutu',
          tur: 'veli',
          baslik: 'Soru sorarak yönlendirin',
          html: '<b>“Bu sembol tabloda nerede?”</b>, <b>“Bu harf kelimede kaç kez geçiyor?”</b>, <b>“Hangi parça tekrar ediyor?”</b> gibi sorular, çocuğun kuralı kendisinin bulmasını sağlar. Cevabı söylemek yerine tabloyu birlikte okuyun.',
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
            { soru: '1-sifre-easy-014', aciklama: 'Tabloda E baklava, V yıldız. EV kelimesi soldan sağa baklava, yıldız diye yazılır.' },
            { soru: '1-sifre-easy-007', aciklama: 'Pembe daire 4, mor daire 3: 4 + 3 = 7.' },
            { soru: '1-sifre-easy-004', aciklama: 'Kalp = 2. Kalp + yıldız = 7 olduğuna göre 2 + yıldız = 7, yani yıldız = 5.' },
            { soru: '1-sifre-easy-002', aciklama: 'Dizide 9, 1, 2 parçası tekrar ediyor (baklava, kalp, yıldız). 9 ve 1\'den sonra 2 gelir.' },
            { soru: '2-sifre-hard-030', aciklama: 'Daire 7, üçgen 9. İşlemde iki daire ve bir üçgen var: 7 + 7 + 9 = 23.' },
            { soru: '2-sifre-medium-014', aciklama: 'Tekrar eden parça 5, 1, 2, 9 (turuncu etiket, baklava, üçgen, kalp). İkinci turda 5 ve 1 geldi; sırada 2 var.' },
            { soru: '3-sifre-hard-012', aciklama: 'Sarı daire 2, mor 9, mavi 10: 2 + 9 + 10 = 21. Tablodaki beş renk birbirine karıştırılmamalı.' },
            { soru: '3-sifre-hard-016', aciklama: 'Beşgen = 8. Beşgen + yıldız = 17 olduğuna göre 8 + yıldız = 17, yani yıldız = 9.' },
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
      baslik: 'Tabloyu oku, şifreyi çöz',
      soru: '1-sifre-easy-027',
      maddeler: ['Tablo: her sembolün bir anlamı var', 'Kelime ya da işlem: çevrilecek şey', 'Şıklar: sembol dizisi ya da sayı'],
    },
    { t: 'metin', ust: 'Kural 1', baslik: 'Tablo bir sözlüktür', diyagram: 'tablo', maddeler: ['Her sembolün tek bir anlamı var', 'Sembolden harfe ya da harften sembole'] },
    { t: 'metin', ust: 'Kural 2', baslik: 'Sırayı koru: harf harf, soldan sağa', diyagram: 'sira', maddeler: ['Hiçbir harfi atlamayın', 'Aynı harf → aynı sembol'] },
    { t: 'metin', ust: 'Kural 3', baslik: 'Önce sayıya çevir, sonra hesapla', diyagram: 'hesapla', maddeler: ['Her sembolün altına değerini yazın', 'Tekrar eden sembol tekrar toplanır'] },
    { t: 'metin', ust: 'Kural 4', baslik: 'Bilinmeyeni bul, tabloya ekle', diyagram: 'bilinmeyen', maddeler: ['Bildiğini yerine koy: 3 + kalp = 8', 'Kalp = 5; bunu tabloya ekle'] },
    { t: 'metin', ust: 'Kural 5', baslik: 'Tekrar eden parçayı bul', diyagram: 'tekrar', maddeler: ['Parçayı bul: 6, 3, 8', 'Parçanın devamını yaz'] },
    { t: 'soru', ust: 'Örnek 1 · Sayı şifresi', baslik: 'Şifreye göre doğru cevap hangisidir?', soru: '3-sifre-hard-001' },
    {
      t: 'cevap',
      ust: 'Örnek 1 · Çözüm',
      baslik: 'Aynı sembol iki kez toplanır',
      soru: '3-sifre-hard-001',
      adimlar: ['Kalp = 2, kare = 8', 'İşlem: kalp + kare + kare', '2 + 8 + 8 = 18'],
    },
    { t: 'soru', ust: 'Örnek 2 · Harf şifresi', baslik: 'Şifreye göre doğru cevap hangisidir?', soru: '1-sifre-easy-068' },
    {
      t: 'cevap',
      ust: 'Örnek 2 · Çözüm',
      baslik: 'EL: önce daire, sonra etiket',
      soru: '1-sifre-easy-068',
      adimlar: ['E → daire', 'L → turuncu etiket', 'Soldan sağa: daire, etiket'],
    },
    { t: 'soru', ust: 'Örnek 3 · Gizli değer', baslik: 'Şifreye göre doğru cevap hangisidir?', soru: '2-sifre-medium-007' },
    {
      t: 'cevap',
      ust: 'Örnek 3 · Çözüm',
      baslik: 'Baklava = 8',
      soru: '2-sifre-medium-007',
      adimlar: ['Beşgen = 6', '6 + baklava = 14', '14 − 6 = 8'],
    },
    { t: 'soru', ust: 'Örnek 4 · Tekrar eden kural', baslik: 'Şifreye göre doğru cevap hangisidir?', soru: '3-sifre-medium-025' },
    {
      t: 'cevap',
      ust: 'Örnek 4 · Çözüm',
      baslik: 'Sırada 9 var',
      soru: '3-sifre-medium-025',
      adimlar: ['Parça: 3, 1, 9, 6', 'İkinci turda 3 ve 1 geldi', 'Sıradaki sayı 9'],
    },
    {
      t: 'metin',
      ust: 'Yöntem',
      baslik: '5 adımda çözüm',
      numarali: true,
      maddeler: ['Tabloyu oku', 'Soruyu belirle: kelime, işlem, gizli değer ya da dizi', 'Soldan sağa, tek tek çevir', 'Hesapla ya da kuralı uygula', 'İlk sembolden başlayarak ele, sonra kontrol et'],
    },
    {
      t: 'metin',
      ust: 'Dikkat',
      baslik: 'Çeldirici tuzakları',
      maddeler: ['Sırayı karıştırmak (EL yerine LE)', 'Komşu sembolü okumak', 'Rengi gözden kaçırmak', 'Ters çevrilmiş sembol', 'Tekrarı unutmak'],
    },
    {
      t: 'metin',
      ust: 'Evde',
      baslik: '“Gizli alfabe” oyunu',
      maddeler: ['5-6 harf için sembol seçin', 'Tabloyu bir kartona yazın', 'ANNE, BABA, EV gibi kelimeler yazıp çözün', 'Haftada birkaç kez 10-15 dakika'],
    },
    { t: 'kapanis' },
  ],
};

export default konu;
