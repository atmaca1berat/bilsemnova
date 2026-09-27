import type { Konu } from '../konu-tipleri';

// Örüntü konu anlatımı. Örneklerin ve alıştırmaların hepsi soru görselinden bağımsız çözüldü
// ve cevap anahtarıyla karşılaştırıldı (27 Eylül 2026). Açıklamalar sorunun kendi görseline göre yazıldı.

const konu: Konu = {
  slug: 'oruntu',
  ad: 'Örüntü',
  alan: 'Mantık ve Muhakeme',
  siniflar: '1-3. sınıf',
  ozet: 'Örüntü soruları nasıl çözülür? Tekrar eden birim, artış-azalış, iç içe diziler ve dönme; 7 çözümlü örnek ve 8 alıştırmayla ücretsiz BİLSEM hazırlığı.',
  giris:
    'Örüntü sorularında şekiller, sayılar ya da harfler bir kurala göre sıralanır; çocuktan kuralı bulup dizinin devamını ya da boşluğu tamamlaması beklenir. Bu anlatımda örüntülerin arkasındaki altı kuralı, adım adım çözülmüş örnekleri ve alıştırmaları bulacaksınız.',
  okumaDakika: 11,
  uygulamadakiSoru: 1800,
  guncelleme: '2026-09-27',
  bolumler: [
    {
      id: 'nedir',
      baslik: 'Örüntü soruları nedir?',
      bloklar: [
        {
          t: 'p',
          html: 'Örüntü, belli bir kurala göre <b>tekrar eden</b> ya da <b>düzenli değişen</b> bir dizidir: renkler aynı sırayla tekrar eder, sayılar hep aynı miktarda artar, bir ok her adımda biraz daha döner. Akıl yürütmeyi ölçen testlerde ve BİLSEM\'e hazırlık materyallerinde sık görülen bir soru tipidir.',
        },
        { t: 'sorugorsel', soru: '3-oruntu-medium-069', aciklama: 'Örnek bir örüntü sorusu: yeşil, sarı ve mavi daireler aynı sırayla tekrar ediyor; sıradaki daire bulunacak.' },
        {
          t: 'p',
          html: 'Soru çoğunlukla <b>“Sıradaki ne olmalı?”</b> ya da <b>“Boşluğa hangisi gelir?”</b> biçimindedir. Çocuk bu sırada şu becerileri kullanır:',
        },
        {
          t: 'liste',
          maddeler: [
            '<b>Kural bulma:</b> Diziyi baştan okuyup neyin tekrar ettiğini ya da nasıl değiştiğini görmek.',
            '<b>Sayı duygusu:</b> Ardışık sayılar arasındaki farkları hesaplamak.',
            '<b>Sıra bilgisi:</b> Harf örüntülerinde alfabedeki sırayı kullanmak.',
            '<b>Zihinde döndürme:</b> Dönen bir şeklin bir sonraki konumunu canlandırmak.',
          ],
        },
        {
          t: 'p',
          html: 'BilsemNova uygulamasında 1, 2 ve 3. sınıf için ayrı ayrı 600\'er, toplam <b>1800 örüntü sorusu</b> var. Sorular kolay, orta ve zor olmak üzere üç seviyededir; 1. sınıfta üç, 2 ve 3. sınıfta dört şık bulunur.',
        },
      ],
    },
    {
      id: 'kurallar',
      baslik: 'Altı temel kural',
      bloklar: [
        { t: 'p', html: 'Örüntü sorularının çoğu aşağıdaki altı kuraldan birine dayanır. Diziyi görünce kuralları sırayla denemek, çözümü kolaylaştırır.' },
        {
          t: 'kural',
          no: 1,
          baslik: 'Tekrar eden birimi bul',
          html: 'Şekil ve renk örüntülerinin çoğunda birkaç öğeden oluşan bir <b>birim</b> aynen tekrar eder: daire, üçgen, kare; daire, üçgen, kare… Birimi bulmak için diziyi baştan oku ve baştaki öğelerin <b>aynı sırayla yeniden başladığı</b> yeri işaretle. Birim iki, üç ya da dört öğeli olabilir; bazen aynı öğe birimde iki kez yer alır.',
          diyagram: 'birim',
        },
        {
          t: 'kural',
          no: 2,
          baslik: 'Farkları yaz: artış ve azalış',
          html: 'Sayı dizilerinde komşu sayılar arasındaki farkı dizinin üstüne yaz. Farklar hep aynıysa (her seferinde <b>+4</b> ya da <b>−5</b> gibi) aynı farkı bir kez daha uygula. Azalan dizilerde fark çıkarmadır.',
          diyagram: 'sabitAdim',
        },
        {
          t: 'kural',
          no: 3,
          baslik: 'Farkların da örüntüsü olabilir',
          html: 'Farklar eşit değilse vazgeçme, farkların kendisine bak: +1, +2, +3 diye artıyorsa sıradaki fark <b>+4</b> olur. Bazı dizilerde de her sayı bir öncekinin <b>iki katıdır</b> (3, 6, 12, 24 gibi).',
          diyagram: 'degisenAdim',
        },
        {
          t: 'kural',
          no: 4,
          baslik: 'İç içe iki dizi olabilir',
          html: 'Bazen iki ayrı dizi, bir oradan bir buradan sırayla yazılır. Farklar bir artıp bir azalıyorsa sayıları <b>atlayarak</b> oku: birinci, üçüncü, beşinci sayılar bir dizi; ikinci, dördüncü, altıncı sayılar başka bir dizidir. Sonra boşluğun hangi diziye düştüğüne bak.',
          diyagram: 'icIce',
        },
        {
          t: 'kural',
          no: 5,
          baslik: 'Dönen şekil hep aynı yöne döner',
          html: 'Ok ya da şekil her adımda <b>aynı yöne</b> (çoğunlukla saat yönüne) ve <b>aynı miktarda</b> döner: genellikle çeyrek tur ya da çeyrek turun yarısı. İki komşu şekil arasındaki dönüşü bul, bir adım daha çevir. Zor sorularda dönüş miktarı da sırayla değişebilir.',
          diyagram: 'donme',
        },
        {
          t: 'kural',
          no: 6,
          baslik: 'Harflerde Türk alfabesini say',
          html: 'Harf dizileri sayı dizileri gibi ilerler; yalnız sayarken <b>Türk alfabesini</b> kullan: A, B, C, Ç, D, E, F, G, Ğ, H, I, İ, J, K… <b>Ç, Ğ, I, İ, Ö, Ş ve Ü</b> harflerini atlamak en sık yapılan hatadır. İki harf arasındaki adımı parmakla sayarak bul.',
          diyagram: 'harfSira',
        },
        {
          t: 'kutu',
          tur: 'dikkat',
          baslik: 'Simetrik ve kayan diziler',
          html: 'Bazı dizilerde birim tekrar etmez; dizi <b>ortadaki öğeye göre ayna gibi</b> simetriktir (kırmızı, sarı, mavi, sarı, kırmızı gibi). Tablo biçimindeki sorularda ise her satır, bir öncekinin <b>aynı miktarda kaymış</b> hâlidir (çoğunlukla bir, bazı zor sorularda iki adım). İkisinde de kuralı önce dizinin tam kısmında bul.',
        },
      ],
    },
    {
      id: 'tekrar',
      baslik: 'Tekrar eden desenler',
      bloklar: [
        { t: 'p', html: 'Şekil ve renk örüntülerinin çoğunda bir birim aynen tekrar eder. Birimi bulan çocuk, boşluğu birimin içindeki sıraya bakarak doldurur.' },
        {
          t: 'ornek',
          soru: '1-oruntu-medium-163',
          baslik: 'İkişer ikişer tekrar eden kalpler',
          adimlar: [
            'Diziyi baştan sesli okuyalım: mor, mor, turuncu, turuncu, mor, mor, turuncu…',
            'Birim dört kalpten oluşuyor: <b>iki mor, iki turuncu</b>.',
            'Son birim mor, mor, turuncu diye başladı; birimi tamamlamak için bir <b>turuncu</b> kalp daha gerekiyor.',
          ],
          eleme: 'A\'daki mor kalp, ikinci turuncu gelmeden birimi bozar; C\'deki kırmızı kalp dizide hiç yok. Doğru cevap <b>B</b>.',
        },
        {
          t: 'ornek',
          soru: '1-oruntu-medium-078',
          baslik: 'Her satır bir adım kayıyor',
          adimlar: [
            'Birinci satır yeşil, kırmızı, sarı, mor. İkinci satırda aynı renkler bir adım <b>sola kaymış</b>: baştaki yeşil en sona geçmiş.',
            'Üçüncü satırda da baştaki kırmızı sona geçmiş: sarı, mor, yeşil, kırmızı.',
            'Aynı kaydırma bir kez daha: baştaki sarı sona geçer. Dördüncü satır <b>mor, yeşil, kırmızı, sarı</b> olur.',
          ],
          eleme: 'A\'da sıra bozuk, yeşil başa geçmiş; B ise üçüncü satırın son iki rengini yer değiştirmiş hâli. Doğru cevap <b>C</b>.',
        },
      ],
    },
    {
      id: 'sayilar',
      baslik: 'Sayı ve harf örüntüleri',
      bloklar: [
        { t: 'p', html: 'Sayı dizilerinde ilk iş, komşu sayılar arasındaki farkları yazmaktır. Farklar eşitse kural hazırdır; eşit değilse farkların kendi örüntüsüne ya da iç içe iki diziye bakılır. Harf dizileri de aynı yolla çözülür; tek fark, saymanın <b>Türk alfabesinde</b> yapılmasıdır.' },
        {
          t: 'ornek',
          soru: '1-oruntu-easy-028',
          baslik: 'Her adımda 3 fazla',
          adimlar: [
            'Farkları yazalım: 2\'den 5\'e +3, 5\'ten 8\'e +3, 8\'den 11\'e +3.',
            'Farklar hep aynı: dizi her adımda <b>3 artıyor</b>.',
            'Sıradaki sayı: 11 + 3 = <b>14</b>.',
          ],
          eleme: '13 ve 16, 11\'e 3 eklenince çıkmaz: 13 için 2, 16 için 5 eklenmiş. Doğru cevap <b>A</b>.',
        },
        {
          t: 'ornek',
          soru: '2-oruntu-easy-043',
          baslik: 'Farklar da artıyor',
          adimlar: [
            'Farkları yazalım: +1, +2, +3. Farklar eşit değil ama kendileri de bir örüntü: <b>birer birer artıyor</b>.',
            'Öyleyse sıradaki fark +4 olmalı.',
            'Sıradaki sayı: 7 + 4 = <b>11</b>.',
          ],
          eleme: 'B\'deki 10, son farkı yine +3 alan çocuğun cevabıdır; A\'daki 13 ve C\'deki 12 fazla. Doğru cevap <b>D</b>.',
        },
        {
          t: 'ornek',
          soru: '3-oruntu-medium-037',
          baslik: 'İç içe iki dizi',
          adimlar: [
            'Farklar +3, −1, +3, −1 diye gidip geliyor: bu, iç içe iki dizi olduğunu gösterir.',
            'Birinci, üçüncü ve beşinci sayılar 1, 3, 5; ikinci, dördüncü ve altıncı sayılar 4, 6, 8. İki dizi de <b>ikişer</b> artıyor.',
            'Boşluk yedinci sırada, yani birinci diziye ait: 5\'ten sonra <b>7</b> gelir.',
          ],
          eleme: 'Farklarla da kontrol edelim: 8\'den sonra sıra −1\'de, 8 − 1 = 7. A\'daki 11, B\'deki 6 ve C\'deki 9 bu kurala uymaz. Doğru cevap <b>D</b>.',
        },
        {
          t: 'ornek',
          soru: '3-oruntu-medium-056',
          baslik: 'Üçer harf ileri',
          adimlar: [
            'Alfabeyi yazalım: A, B, C, Ç, D, E, F, G, Ğ, H, I, İ, J, K…',
            'A\'dan Ç\'ye 3 harf ileri (B, C, Ç); Ç\'den F\'ye 3 harf (D, E, F); F\'den H\'ye 3 harf (G, Ğ, H).',
            'Kural: her seferinde <b>3 harf ileri</b>. H\'den 3 harf ileri gidelim: I, İ, <b>J</b>.',
          ],
          eleme: 'L, I ile İ\'yi atlayınca; K, yalnız İ\'yi atlayınca bulunur. M de 3 harf kuralına uymaz. Doğru cevap <b>C</b>.',
        },
      ],
    },
    {
      id: 'donme',
      baslik: 'Dönen şekiller',
      bloklar: [
        { t: 'p', html: 'Dönme örüntülerinde her adımda şeklin yönü değişir. Önce iki komşu şekil arasındaki dönüşü bulun: hangi yöne, ne kadar? Sonra dönüşün her adımda aynı kalıp kalmadığını kontrol edin.' },
        {
          t: 'ornek',
          soru: '2-oruntu-hard-016',
          baslik: 'Dönüş miktarı sırayla değişiyor',
          adimlar: [
            'Ok yukarıdan sağa dönmüş: saat yönünde <b>çeyrek tur</b>. Sağdan sağ alta ise <b>çeyrek turun yarısı</b> kadar dönmüş.',
            'Sağ alttan sol alta yine çeyrek tur, sol alttan sola yine yarım çeyrek. Dönüşler sırayla değişiyor: çeyrek, yarım çeyrek, çeyrek, yarım çeyrek.',
            'Sıradaki dönüş çeyrek tur: sola bakan ok saat yönünde çeyrek tur dönünce <b>yukarı</b> bakar.',
          ],
          eleme: 'D son okun aynısı, hiç dönmemiş; A sağa, C sağ üste bakıyor ve kurala uymuyor. Doğru cevap <b>B</b>.',
        },
        {
          t: 'kutu',
          tur: 'ipucu',
          baslik: 'Kalemle döndürün',
          html: 'Dönüşü gözünüzde canlandırmak zorsa bir kalemi masaya ilk okun yönünde koyun ve her adımda okla birlikte çevirin. Kaç adımda ne kadar döndüğünü elle görmek, kuralı hemen ortaya çıkarır.',
        },
      ],
    },
    {
      id: 'yontem',
      baslik: '5 adımda çözüm yöntemi',
      bloklar: [
        { t: 'p', html: 'Her örüntü sorusunda aynı sırayı izlemek hem hızı hem doğruluğu artırır:' },
        {
          t: 'liste',
          numarali: true,
          maddeler: [
            '<b>Diziyi sesli oku.</b> “Mor, mor, turuncu…” ya da “2, 5, 8…” diye baştan sona söylemek birimi ortaya çıkarır.',
            '<b>Ne değiştiğini bul.</b> Şekil mi, renk mi, sayı mı, yön mü? Birden çok özellik değişiyorsa her birini ayrı izle.',
            '<b>Tekrar mı, değişim mi, karar ver.</b> Tekrar ediyorsa birimi işaretle; değişiyorsa farkları ya da dönüşleri yaz.',
            '<b>Kuralı bütün dizide dene.</b> Kural yalnız ilk iki öğeye değil, dizinin tamamına uymalı.',
            '<b>Önce cevabı söyle, sonra şıklara bak.</b> Sıradakini şıklara bakmadan bulmak, çeldiricilere kapılmayı önler.',
          ],
        },
        {
          t: 'kutu',
          tur: 'ipucu',
          baslik: 'Farkları dizinin üstüne yaz',
          html: 'Sayı ve harf örüntülerinde farkları küçük oklarla dizinin üstüne yazmak, kuralı bir bakışta gösterir. Farklar eşit değilse ikinci bir satırda farkların nasıl değiştiğine bakın.',
        },
      ],
    },
    {
      id: 'tuzaklar',
      baslik: 'Çeldirici tuzakları ve sık yapılan hatalar',
      bloklar: [
        { t: 'p', html: 'Yanlış şıklar rastgele değildir; her biri belirli bir hatayı yakalamak için hazırlanır. En sık karşılaşılanlar:' },
        {
          t: 'liste',
          maddeler: [
            '<b>Birimi eksik görmek:</b> Mor, mor, turuncu, turuncu gibi birimlerde iki aynı öğeyi tek sanmak.',
            '<b>Farkı yanlış hesaplamak:</b> Bir eksik ya da bir fazla ekleyip yakın bir sayıyı seçmek.',
            '<b>Değişen farkı görmemek:</b> Farklar artarken son farkı yine öncekiyle aynı almak.',
            '<b>İç içe diziyi tek dizi sanmak:</b> Boşluğun hangi diziye ait olduğunu kontrol etmemek.',
            '<b>Türk harflerini atlamak:</b> Ç, Ğ, I, İ, Ö, Ş, Ü harflerini saymamak.',
            '<b>Yanlış yöne döndürmek:</b> Saat yönündeki dönüşü ters çevirmek ya da hiç döndürmemek.',
          ],
        },
        {
          t: 'kutu',
          tur: 'veli',
          baslik: 'Velilere öneri',
          html: 'Çocuğunuz bir şık seçtiğinde <b>“Bu şıktan sonra ne gelirdi?”</b> diye sorun. Kuralı yüksek sesle söyleyebilen ve diziyi bir adım daha sürdürebilen çocuk, örüntüyü gerçekten görmüş demektir.',
        },
      ],
    },
    {
      id: 'evde',
      baslik: 'Evde nasıl çalışılır?',
      bloklar: [
        {
          t: 'p',
          html: 'Örüntüler günlük hayatın her yerindedir: boncuk dizileri, fayanslar, merdiven basamakları, takvim. Somut nesnelerle kurulan diziler, kâğıttaki soruları anlamayı kolaylaştırır.',
        },
        {
          t: 'liste',
          maddeler: [
            '<b>Boncuk ya da lego dizisi:</b> Kırmızı, mavi, mavi gibi bir birim kurup çocuğunuzdan devam ettirmesini isteyin; sonra rolleri değiştirin.',
            '<b>Sayı merdiveni:</b> Yere çizdiğiniz sayı doğrusunda ikişer, üçer, beşer zıplayın; geriye doğru da deneyin.',
            '<b>Harf treni:</b> Türk alfabesini bir şerit hâlinde yazın ve “A\'dan üç harf ileri git” gibi yönergelerle oynayın.',
            '<b>Saat oyunu:</b> Bir kalemi saat yönünde çeyrek tur çevirip “Bir sonraki adımda nereyi gösterir?” diye sorun.',
            '<b>Süre:</b> Haftada birkaç kez 10-15 dakika yeterli. Kısa ve düzenli çalışma, uzun ve seyrek çalışmadan daha etkilidir.',
          ],
        },
        {
          t: 'kutu',
          tur: 'veli',
          baslik: 'Soru sorarak yönlendirin',
          html: '<b>“Hangisi tekrar ediyor?”</b>, <b>“Her seferinde ne kadar artıyor?”</b>, <b>“Bir sonraki adımda ne olur?”</b> gibi sorular, çocuğun kuralı kendisinin bulmasını sağlar. Yanlış cevapta diziyi birlikte sesli okumak çoğu zaman yeterlidir.',
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
            { soru: '3-oruntu-easy-006', aciklama: 'Yeşil ve kırmızı beşgenler sırayla geliyor. Son beşgen yeşil olduğu için sıradaki kırmızı beşgen.' },
            { soru: '1-oruntu-medium-169', aciklama: 'Birim üç daireden oluşuyor: küçük, orta, büyük. Son birim küçük ve orta diye başladığına göre sıradaki büyük turuncu daire.' },
            { soru: '1-oruntu-medium-129', aciklama: 'Dizi ortadaki kırmızı üçgene göre simetrik: üçgenin iki yanında kahverengi altıgen var. Sona, baştaki pembe beşgen gelir.' },
            { soru: '2-oruntu-medium-025', aciklama: 'Sayılar her adımda 3 azalıyor: 20, 17, 14, 11. Sıradaki 11 − 3 = 8.' },
            { soru: '3-oruntu-medium-047', aciklama: 'Her sayı bir öncekinin iki katı: 1, 2, 4, 8. Sıradaki 8\'in iki katı, 16.' },
            { soru: '2-oruntu-medium-055', aciklama: 'Harfler Türk alfabesinde ikişer ileri gidiyor: A\'dan C\'ye (B, C), C\'den D\'ye (Ç, D), D\'den F\'ye (E, F). F\'den iki harf ileri Ğ.' },
            { soru: '2-oruntu-medium-146', aciklama: 'Sarı altıgenin çevresindeki pembe üçgenler her adımda bir azalıyor: 6, 5, 4, 3. Sıradaki şekilde 2 üçgen olmalı; A\'da 3 üçgen var.' },
            { soru: '3-oruntu-medium-016', aciklama: 'Mor ok her adımda saat yönünde çeyrek turun yarısı kadar dönüyor: yukarı, sağ üst, sağ, sağ alt. Sıradaki aşağı bakan ok.' },
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
      baslik: '“Sıradaki ne olmalı?”',
      soru: '3-oruntu-medium-069',
      maddeler: ['Şekil, sayı ya da harfler sırayla dizilir', 'Dizi bir kurala göre tekrar eder ya da değişir', 'Boşluğa gelecek olanı bul'],
    },
    { t: 'metin', ust: 'Kural 1', baslik: 'Tekrar eden birimi bul', diyagram: 'birim', maddeler: ['Birimi işaretle: daire, üçgen, kare…', 'Aynı sırayla sürdür.'] },
    { t: 'metin', ust: 'Kural 2', baslik: 'Farkları yaz: artış ve azalış', diyagram: 'sabitAdim', maddeler: ['Farklar eşitse aynı farkı ekle.', 'Azalan dizide farkı çıkar.'] },
    { t: 'metin', ust: 'Kural 3', baslik: 'Farkların da örüntüsü olabilir', diyagram: 'degisenAdim', maddeler: ['+1, +2, +3 → sıradaki fark +4', 'Bazen her sayı öncekinin iki katı'] },
    { t: 'metin', ust: 'Kural 4', baslik: 'İç içe iki dizi olabilir', diyagram: 'icIce', maddeler: ['Sayıları atlayarak oku.', 'Boşluk hangi diziye ait, bak.'] },
    { t: 'metin', ust: 'Kural 5', baslik: 'Dönen şekil hep aynı yöne döner', diyagram: 'donme', maddeler: ['Dönüşün yönünü ve miktarını bul.', 'Bir adım daha çevir.'] },
    { t: 'metin', ust: 'Kural 6', baslik: 'Harflerde Türk alfabesini say', diyagram: 'harfSira', maddeler: ['Ç, Ğ, I, İ, Ö, Ş, Ü de sayılır.', 'Adımı parmakla say.'] },
    { t: 'soru', ust: 'Örnek 1 · Tekrar eden birim', baslik: 'Sıradaki ne olmalı?', soru: '1-oruntu-medium-163' },
    {
      t: 'cevap',
      ust: 'Örnek 1 · Çözüm',
      baslik: 'Birim: iki mor, iki turuncu',
      soru: '1-oruntu-medium-163',
      adimlar: ['Sesli oku: mor, mor, turuncu, turuncu…', 'Son birim mor, mor, turuncu diye başladı.', 'Birimi tamamlayan: turuncu kalp.'],
    },
    { t: 'soru', ust: 'Örnek 2 · Değişen fark', baslik: 'Sıradaki sayı hangisi?', soru: '2-oruntu-easy-043' },
    {
      t: 'cevap',
      ust: 'Örnek 2 · Çözüm',
      baslik: 'Farklar +1, +2, +3, +4',
      soru: '2-oruntu-easy-043',
      adimlar: ['Farkları yaz: +1, +2, +3.', 'Farklar birer artıyor: sıradaki +4.', '7 + 4 = 11.'],
    },
    { t: 'soru', ust: 'Örnek 3 · İç içe diziler', baslik: 'Sıradaki sayı hangisi?', soru: '3-oruntu-medium-037' },
    {
      t: 'cevap',
      ust: 'Örnek 3 · Çözüm',
      baslik: 'İki dizi sırayla yazılmış',
      soru: '3-oruntu-medium-037',
      adimlar: ['1, 3, 5 ve 4, 6, 8: iki dizi.', 'Boşluk yedinci sırada: birinci dizi.', '5\'ten sonra 7 gelir.'],
    },
    { t: 'soru', ust: 'Örnek 4 · Dönme', baslik: 'Sıradaki ok hangisi?', soru: '2-oruntu-hard-016' },
    {
      t: 'cevap',
      ust: 'Örnek 4 · Çözüm',
      baslik: 'Çeyrek, yarım çeyrek, çeyrek…',
      soru: '2-oruntu-hard-016',
      adimlar: ['Dönüşler sırayla: çeyrek tur, yarım çeyrek.', 'Sıradaki dönüş çeyrek tur.', 'Sola bakan ok yukarı döner.'],
    },
    {
      t: 'metin',
      ust: 'Yöntem',
      baslik: '5 adımda çözüm',
      numarali: true,
      maddeler: ['Diziyi sesli oku', 'Ne değiştiğini bul', 'Tekrar mı, değişim mi, karar ver', 'Kuralı bütün dizide dene', 'Önce cevabı söyle, sonra şıklara bak'],
    },
    {
      t: 'metin',
      ust: 'Dikkat',
      baslik: 'Çeldirici tuzakları',
      maddeler: ['Birimi eksik görmek', 'Farkı bir eksik ya da fazla almak', 'Değişen farkı görmemek', 'İç içe diziyi tek dizi sanmak', 'Ç, Ğ, I, İ harflerini atlamak'],
    },
    {
      t: 'metin',
      ust: 'Evde',
      baslik: '“Sıradaki ne?” oyunları',
      maddeler: ['Boncuk ya da legoyla birim kur', 'Sayı doğrusunda üçer, beşer zıpla', 'Alfabe şeridiyle harf treni', 'Haftada birkaç kez 10-15 dakika'],
    },
    { t: 'kapanis' },
  ],
};

export default konu;
