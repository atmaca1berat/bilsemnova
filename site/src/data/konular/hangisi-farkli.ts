import type { Konu } from '../konu-tipleri';

// Hangisi farklı konu anlatımı. Örneklerin ve alıştırmaların hepsi soru görselinden bağımsız çözüldü
// ve cevap anahtarıyla karşılaştırıldı (27 Eylül 2026). Açıklamalar sorunun kendi görseline göre yazıldı.
// Bu türde yalnız 1. sınıf bankası var; birden fazla kuralla farklı cevaplara götürebilen sorular seçilmedi.

const konu: Konu = {
  slug: 'hangisi-farkli',
  ad: 'Hangisi Farklı',
  alan: 'Dikkat ve Hafıza',
  siniflar: '1-3. sınıf',
  ozet: 'Hangisi farklı soruları nasıl çözülür? Ortak özelliği bulma yöntemi, 6 temel kural, 7 çözümlü örnek ve 8 alıştırmayla ücretsiz BİLSEM hazırlığı.',
  giris:
    'Hangisi farklı sorularında birkaç resim ya da resim grubu yan yana durur; biri hariç hepsi ortak bir kurala uyar. Çocuktan önce bu ortak kuralı bulması, sonra kurala uymayanı seçmesi beklenir. Bu anlatımda altı temel kuralı, adım adım çözülmüş örnekleri ve alıştırmaları bulacaksınız.',
  okumaDakika: 11,
  uygulamadakiSoru: 540,
  guncelleme: '2026-09-27',
  bolumler: [
    {
      id: 'nedir',
      baslik: 'Hangisi farklı soruları nedir?',
      bloklar: [
        {
          t: 'p',
          html: '“Farklı olanı bul” soruları dikkati ve sınıflandırma becerisini birlikte ölçer; BİLSEM\'e hazırlık materyallerinde sık görülen bir soru tipidir. Şıklar tek tek resimler ya da A, B, C adlı kutulardaki resim grupları olabilir. Hepsinde aynı düşünce işler: <b>ortak olanı bul, ona uymayanı seç</b>.',
        },
        {
          t: 'sorugorsel',
          soru: '1-hangisi-medium-test01-q14',
          aciklama: 'Örnek bir soru: A ve B gruplarında yalnız hayvanlar var. C grubunda salyangoz ve tavus kuşunun yanında bir polis arabası duruyor.',
        },
        {
          t: 'p',
          html: 'Soru çoğunlukla <b>“Hangi grup diğerlerinden farklıdır?”</b>, <b>“Hangisi kurala uymaz?”</b> ya da <b>“Hangi iki resim tıpatıp aynıdır?”</b> biçimindedir. Çocuk bu sırada şu becerileri kullanır:',
        },
        {
          t: 'liste',
          maddeler: [
            '<b>Sınıflandırma:</b> Nesneleri hayvan, meyve, taşıt, eşya gibi gruplara ayırmak.',
            '<b>Karşılaştırma:</b> Renk, şekil, sayı, yön ve desen gibi özellikleri tek tek karşılaştırmak.',
            '<b>Kural bulma:</b> Şıkların çoğunda ortak olan kuralı keşfetmek.',
            '<b>Ayrıntıya dikkat:</b> Tıpatıp aynı görünen resimlerdeki küçük farkı görmek.',
          ],
        },
        {
          t: 'p',
          html: 'BilsemNova uygulamasında toplam <b>540 hangisi farklı sorusu</b> var. Sorular 1. sınıf düzeyinde hazırlanmıştır ve üç şıklıdır; 2 ve 3. sınıftaki çocuklar da aynı soruları çözer. Sorular kolay, orta ve zor olmak üzere üç seviyededir.',
        },
      ],
    },
    {
      id: 'kurallar',
      baslik: 'Altı temel kural',
      bloklar: [
        {
          t: 'p',
          html: 'Hangisi farklı sorularının hepsi aynı düşünceye dayanır: <b>önce ortak özelliği bul, sonra ona uymayanı seç</b>. Aşağıdaki kurallar, ortak özelliğin en sık saklandığı yerleri gösterir.',
        },
        {
          t: 'kural',
          no: 1,
          baslik: 'Önce ortak özelliği bul',
          html: 'Farkı hemen aramak yerine şıkların <b>çoğunda ortak olan</b> özelliği bul. Bakılacak yerler bellidir: <b>renk, şekil, sayı, yön ve tür</b>. Ortak özellik bulununca ona uymayan şık kendiliğinden ortaya çıkar.',
          diyagram: 'ozellik',
        },
        {
          t: 'kural',
          no: 2,
          baslik: 'Tür ve grup: hepsi aynı aileden mi?',
          html: 'Resimler hayvan, meyve, taşıt ya da eşya gibi gruplara ayrılır. Hepsi hayvansa aradaki masa ya da araba farklıdır. Bazen fark daha incedir: iki grupta deniz canlıları, birinde kuşlar olabilir. Önce <b>büyük gruba</b>, gerekirse <b>alt gruba</b> bak.',
          diyagram: 'kategori',
        },
        {
          t: 'kural',
          no: 3,
          baslik: 'Sayı ve tekrar: say, sonra karşılaştır',
          html: 'Gruplardaki resimleri say: ikisinde 3, birinde 4 resim varsa farklı olan budur. Tekrara da bak: iki grupta <b>aynı resim tekrar ediyorsa</b>, resimleri hep farklı olan grup kurala uymaz. Eşli dizilişlerde her resmin bir eşi var mı, onu da kontrol et.',
          diyagram: 'sayi',
        },
        {
          t: 'kural',
          no: 4,
          baslik: 'Düzen: sıra, iç içe, ayna',
          html: 'Bazı sorularda fark resimlerin kendisinde değil, <b>diziliş kuralındadır</b>: şekiller soldan sağa büyür, her şeklin içinde kendisinin küçüğü durur, kelebeğin iki kanadı aynadaki gibi eştir, bir grubun resimleri belli bir sırayla tekrar eder. Kuralı bir şıkta söyle, sonra her şıkta dene.',
          diyagram: 'duzen',
        },
        {
          t: 'kural',
          no: 5,
          baslik: 'Tıpatıp aynı mı? Parça parça karşılaştır',
          html: 'Resimler birbirine çok benziyorsa bütün resme değil <b>parçalarına</b> bak: önce renk, sonra desen, en son küçük ayrıntılar (kapı, pencere, süs). Tek bir parça bile farklıysa iki resim tıpatıp aynı değildir.',
          diyagram: 'parca',
        },
        {
          t: 'kural',
          no: 6,
          baslik: 'Kuralı bütün şıklarda dene',
          html: 'Bulduğun kural <b>yalnız bir şıkkı</b> dışarıda bırakmalı. Kural iki şıkkı birden ayırıyorsa ya da hiçbirini ayırmıyorsa doğru kural o değildir; başka bir özelliğe bak. Seçmeden önce her şıkkı bir kez daha kontrol et.',
          diyagram: 'kontrol',
        },
        {
          t: 'kutu',
          tur: 'dikkat',
          baslik: 'Renk her zaman kural değildir',
          html: 'Renk, en kolay fark edilen özelliktir ama her zaman kural değildir. İç içe şekil sorularında olduğu gibi renkler hepsinde farklı olabilir; o zaman kural başka yerdedir: şekilde, sayıda ya da dizilişte.',
        },
      ],
    },
    {
      id: 'gruplar',
      baslik: 'Grup soruları: tür, sayı ve düzen',
      bloklar: [
        {
          t: 'p',
          html: 'Bu sorularda A, B ve C adlı üç kutu vardır; her kutuda iki ile altı resim bulunur. Çocuk kutulardan ikisinde ortak olan kuralı bulur ve kurala uymayan üçüncüyü seçer.',
        },
        {
          t: 'ornek',
          soru: '1-hangisi-medium-test01-q07',
          baslik: 'Hayvanların arasında bir eşya',
          adimlar: [
            'A grubunda köpek, penguen ve kedi; B grubunda kaplan, penguen ve balina var. İki grup da <b>yalnız hayvanlardan</b> oluşuyor.',
            'C grubunda kurbağa ve karga hayvandır, ama ortadaki <b>masa</b> bir eşyadır.',
            'Ortak kural “hepsi hayvan” olunca bu kurala uymayan grup C olur.',
          ],
          eleme: 'A ve B gruplarının üçer resmi de hayvandır; iki grup da kurala uyar. Doğru cevap <b>C</b>.',
        },
        {
          t: 'ornek',
          soru: '1-hangisi-medium-test04-q11',
          baslik: 'Alt grup: kuş mu, deniz canlısı mı?',
          adimlar: [
            'Üç grubun hepsinde hayvanlar var; “hayvan mı?” sorusu farkı göstermiyor. Bir alt gruba inelim.',
            'B grubunda balina, ıstakoz ve köpek balığı; C grubunda ahtapot, köpek balığı ve yunus var: hepsi <b>deniz canlısı</b>.',
            'A grubunda pelikan, baykuş ve karga var: hepsi <b>kuş</b>. Deniz canlıları kuralına uymayan grup A.',
          ],
          eleme: 'B ve C gruplarındaki bütün hayvanlar denizde yaşar. Doğru cevap <b>A</b>.',
        },
        {
          t: 'ornek',
          soru: '1-hangisi-easy-test03-q02',
          baslik: 'Say: kaç resim var?',
          adimlar: [
            'Üç grupta da yalnız hayvanlar var; tür farkı yok. Resimleri sayalım.',
            'A grubunda deve ve penguen: 2 resim. B grubunda kaplumbağa ve hindi: 2 resim.',
            'C grubunda deniz yıldızı, aslan, kirpi ve balık: <b>4 resim</b>. Sayı kuralına uymayan grup C.',
          ],
          eleme: 'A ve B gruplarında ikişer resim var. Doğru cevap <b>C</b>.',
        },
        {
          t: 'ornek',
          soru: '1-hangisi-hard-test06-q14',
          baslik: 'Düzen: dizilişe bak',
          adimlar: [
            'Her grupta iki çeşit resim ikişer kez var; tür ve sayı aynı. Fark <b>dizilişte</b> olmalı.',
            'A grubunda üst sıra çorba-ekmek, alt sıra da çorba-ekmek. C grubunda üst sıra donut-içecek, alt sıra da donut-içecek: alt sıra üst sıranın <b>aynısı</b>.',
            'B grubunda üst sıra bal-pasta, alt sıra ise pasta-bal: resimlerin <b>yeri değişmiş</b>. Düzeni bozan grup B.',
          ],
          eleme: 'A ve C gruplarında alt sıra, üst sıranın aynen tekrarıdır. Doğru cevap <b>B</b>.',
        },
      ],
    },
    {
      id: 'kural-sorulari',
      baslik: 'Kural soruları: iç içe şekiller ve sıralama',
      bloklar: [
        {
          t: 'p',
          html: 'Bu sorularda şıklar tek tek şekillerdir ya da küçük şekil dizileridir. Soru <b>“Hangisi kurala uymaz?”</b> diye sorar ama kuralı söylemez; çocuk kuralı şıklardan kendisi çıkarır.',
        },
        {
          t: 'ornek',
          soru: '1-hfarkli-medium-010',
          baslik: 'İçindeki şekil kendisi mi?',
          adimlar: [
            'Renkler hepsinde farklı: mavi, kırmızı, yeşil. Renk ortak bir kural vermiyor.',
            'Şekillere bakalım: A\'da yıldızın içinde küçük bir <b>yıldız</b>, C\'de üçgenin içinde küçük bir <b>üçgen</b> var.',
            'Kural: her şeklin içinde <b>kendisinin küçüğü</b> var. B\'de kalbin içinde daire var; kurala uymuyor.',
          ],
          eleme: 'A ve C\'de içteki şekil dıştakiyle aynıdır. Doğru cevap <b>B</b>.',
        },
        {
          t: 'ornek',
          soru: '1-hfarkli-medium-040',
          baslik: 'Küçükten büyüğe',
          adimlar: [
            'Her grupta üç kırmızı daire var; renk ve şekil aynı. Fark büyüklükte olmalı.',
            'B ve C gruplarında daireler soldan sağa <b>küçük, orta, büyük</b> diye büyüyor.',
            'A grubunda sıra küçük, büyük, orta: en büyük daire ortaya geçmiş. Büyüme kuralı bozulmuş.',
          ],
          eleme: 'B ve C\'de daireler düzgün biçimde büyüyor. Doğru cevap <b>A</b>.',
        },
        {
          t: 'kutu',
          tur: 'ipucu',
          baslik: 'Kuralı sesli söyleyin',
          html: 'Çocuğunuzdan kuralı bir cümleyle söylemesini isteyin: <b>“Her şeklin içinde kendisi var.”</b>, <b>“Soldan sağa büyüyor.”</b> Söylenen kural her şıkta tek tek denenince farklı olan kendiliğinden ortaya çıkar.',
        },
      ],
    },
    {
      id: 'tipatip',
      baslik: 'Tıpatıp aynı mı? Ayrıntı soruları',
      bloklar: [
        {
          t: 'p',
          html: 'Bu sorularda resimler neredeyse aynıdır: evler, kekler, kelebekler, kar taneleri, çoraplar… Ya biri hariç hepsi tıpatıp aynıdır ya da kalabalığın içinden <b>tıpatıp aynı iki resim</b> bulunur. Burada parça parça karşılaştırma işe yarar.',
        },
        {
          t: 'ornek',
          soru: '1-esbul-hard-001',
          baslik: 'Hangi iki ev tıpatıp aynı?',
          adimlar: [
            'Sekiz evin çatısı ve rengi aynı. Farklar <b>kapının renginde</b> ve <b>pencere sayısında</b>.',
            'Önce kapılara bakalım: yeşil kapılı evler A ve C, mor kapılı evler B, D ve H, kırmızı kapılı evler E ve F. G\'nin mavi kapısının eşi yok.',
            'Şimdi pencereleri sayalım: A\'da 1, C\'de 2 pencere var. E\'de 2, F\'de 1 pencere var. B ve D\'de 2, H\'de 1 pencere var.',
            'Hem kapısı hem pencereleri aynı olan tek çift <b>B ve D</b>.',
          ],
          eleme: 'A ile C\'nin ve E ile F\'nin kapıları aynı renk, ama pencere sayıları farklı. Doğru cevap <b>A</b>.',
        },
        {
          t: 'kutu',
          tur: 'ipucu',
          baslik: 'Eleyerek ilerleyin',
          html: 'Tıpatıp aynı çifti ararken önce en göze çarpan özelliğe (renge) göre resimleri gruplayın, sonra her grubun içinde küçük ayrıntılara bakın. Eşi olmayan resimleri hemen eleyin.',
        },
      ],
    },
    {
      id: 'yontem',
      baslik: '5 adımda çözüm yöntemi',
      bloklar: [
        { t: 'p', html: 'Her hangisi farklı sorusunda aynı sırayı izlemek, tahmin yerine gerekçeyle seçim yapmayı sağlar:' },
        {
          t: 'liste',
          numarali: true,
          maddeler: [
            '<b>Bütün şıklara bak.</b> İlk göze çarpan farka hemen atlama.',
            '<b>Ortak özelliği ara.</b> Sırayla renk, şekil, sayı, yön ve türü kontrol et.',
            '<b>Kuralı bir cümleyle söyle.</b> “Hepsi hayvan.”, “Hepsinde üç resim var.”, “Soldan sağa büyüyor.”',
            '<b>Kuralı her şıkta dene.</b> Kural yalnız bir şıkkı dışarıda bırakmalı.',
            '<b>Tek farklıyı seç.</b> İki şık dışarıda kalıyorsa başka bir kural ara.',
          ],
        },
        {
          t: 'kutu',
          tur: 'ipucu',
          baslik: 'Görülen ve sayılan kurallar',
          html: 'Renk, şekil, sayı ve tür gibi herkesin aynı gördüğü özellikleri kullanın. “Daha güzel”, “daha komik” gibi yoruma açık özellikler kural olmaz; iyi bir kural, herkesi aynı cevaba götürür.',
        },
      ],
    },
    {
      id: 'tuzaklar',
      baslik: 'Çeldirici tuzakları ve sık yapılan hatalar',
      bloklar: [
        { t: 'p', html: 'Yanlış şıklar çoğunlukla dikkati dağıtan ama kuralla ilgisi olmayan farklarla hazırlanır. En sık karşılaşılanlar:' },
        {
          t: 'liste',
          maddeler: [
            '<b>İlk farka atlamak:</b> Bir şıkkın rengi farklı diye kuralı kontrol etmeden onu seçmek.',
            '<b>Renklere aldanmak:</b> İç içe şekil sorularında renkler hepsinde farklıdır; kural şekildedir.',
            '<b>Tek bir resme takılmak:</b> İki grupta aynı resim var diye bunu kural sanmak. Kural, grupların bütün resimlerini açıklamalıdır.',
            '<b>Saymadan karar vermek:</b> Gruplar kalabalık görününce resimleri saymadan seçim yapmak.',
            '<b>Dizilişi gözden kaçırmak:</b> Resimler aynı olduğu için grupları aynı sanmak; resimlerin yeri değişmiş olabilir.',
            '<b>Bütüne bakmak:</b> Tıpatıp aynı görünen resimlerde kapı, pencere, desen gibi küçük parçaları tek tek karşılaştırmamak.',
          ],
        },
        {
          t: 'kutu',
          tur: 'veli',
          baslik: 'Velilere öneri',
          html: 'Çocuğunuz bir şık seçtiğinde <b>“Neden bu farklı? Ötekilerde ortak olan ne?”</b> diye sorun. Kuralı söyleyebilen çocuk doğru düşünmüştür; söyleyemiyorsa şansla seçmiş olabilir.',
        },
      ],
    },
    {
      id: 'evde',
      baslik: 'Evde nasıl çalışılır?',
      bloklar: [
        {
          t: 'p',
          html: 'Hangisi farklı, evdeki nesnelerle oynanabilecek en kolay oyunlardan biridir. Sınıflandırma becerisi somut nesnelerle daha hızlı gelişir.',
        },
        {
          t: 'liste',
          maddeler: [
            '<b>“Hangisi bu gruba ait değil?” oyunu:</b> Masaya üç meyve ve bir kaşık koyun; çocuk farklı olanı bulup nedenini söylesin. Sonra aynı türden ama farklı renkte nesnelerle zorlaştırın.',
            '<b>Rolleri değiştirin:</b> Bu kez grubu çocuk kursun, siz bulun. Grup kurmak, kuralı düşünmeyi gerektirir.',
            '<b>Düğme ve boncuk dizileri:</b> Küçükten büyüğe ya da iki renkli sıralar dizin; birinde sırayı bozun, çocuk bulsun.',
            '<b>Çorap eşleştirme:</b> Çamaşır katlarken çorapları eşleştirmek, tıpatıp aynı çifti bulma alıştırmasıdır: renk, desen ve boy birlikte karşılaştırılır.',
            '<b>Süre:</b> Haftada birkaç kez 10 dakika yeterli. Her doğru cevaptan sonra “Nasıl buldun?” diye sorun.',
          ],
        },
        {
          t: 'kutu',
          tur: 'veli',
          baslik: 'Tek fark, tek gerekçe',
          html: 'Evde kurduğunuz gruplarda <b>yalnız bir</b> nesne farklı olsun ve fark bir cümleyle söylenebilsin. Aynı anda hem rengi hem türü farklı nesneler koymak, çocuğun hangi kurala bakacağını karıştırır.',
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
            {
              soru: '1-hfarkli-easy-009',
              aciklama: 'Dairenin içinde daire, karenin içinde kare var. C\'de üçgenin içinde kalp var: içteki şekil dıştakiyle aynı değil.',
            },
            {
              soru: '1-hangisi-easy-test04-q12',
              aciklama: 'A grubunda ıstakoz ve deniz yıldızı, C grubunda yunus ve ahtapot var: hepsi deniz canlısı. B grubundaki tilki ve çita karada yaşar.',
            },
            {
              soru: '1-hangisi-medium-test03-q07',
              aciklama: 'B grubunda üç itfaiye aracı, C grubunda üç kamyonet var: aynı resim üç kez tekrar ediyor. A grubundaki araba, helikopter ve motosiklet birbirinden farklı.',
            },
            {
              soru: '1-hangisi-easy-test06-q02',
              aciklama: 'A grubunda iki pizza ve iki çorba, B grubunda iki reçel ve iki çorba var: her resmin bir eşi var. C grubunda yalnız ekmeğin eşi var; çikolata ve yoğurt tek.',
            },
            {
              soru: '1-hangisi-medium-test07-q12',
              aciklama: 'A grubunda buzlu çay, çörek, buzlu çay; C grubunda simit, peynir, simit dizilmiş: aynı resim iki uçta. B grubundaki çorba, çorba, süt dizilişi bu düzene uymuyor.',
            },
            { soru: '1-hfarkli-medium-031', aciklama: 'Üç ev de aynı biçimde ve aynı renkte. B ile C\'nin kapısı mavi, A\'nın kapısı kırmızı.' },
            {
              soru: '1-esbul-medium-013',
              aciklama: 'D ve E\'deki kekler tıpatıp aynı: mor kap, mavi krema, renkli şeker süsü. B\'nin üstünde çilek var; C\'nin kabı turuncu, F\'nin kabı kırmızı.',
            },
            {
              soru: '1-hfarkli-hard-007',
              aciklama: 'Kelebeğin iki kanadı aynadaki gibi eş olmalı. A\'daki mavi kelebeğin sol kanadında yuvarlak bir leke, sağ kanadında çizgiler var.',
            },
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
      baslik: 'Biri hariç hepsi aynı kurala uyar',
      soru: '1-hangisi-medium-test01-q14',
      maddeler: ['Tek tek resimler ya da resim grupları', 'Soru: Hangisi diğerlerinden farklı?', 'Önce ortak özelliği bul'],
    },
    {
      t: 'metin',
      ust: 'Kural 1',
      baslik: 'Önce ortak özelliği bul',
      diyagram: 'ozellik',
      maddeler: ['Renk, şekil, sayı, yön, tür', 'Ortak kurala uymayan farklıdır'],
    },
    {
      t: 'metin',
      ust: 'Kural 2',
      baslik: 'Tür ve grup: hepsi aynı aileden mi?',
      diyagram: 'kategori',
      maddeler: ['Önce büyük grup: hayvan, meyve, taşıt', 'Sonra alt grup: kuş mu, deniz canlısı mı?'],
    },
    { t: 'metin', ust: 'Kural 3', baslik: 'Sayı ve tekrar', diyagram: 'sayi', maddeler: ['Resimleri say: 3, 3, 4', 'Aynı resim tekrar ediyor mu?'] },
    {
      t: 'metin',
      ust: 'Kural 4',
      baslik: 'Düzen: sıra, iç içe, ayna',
      diyagram: 'duzen',
      maddeler: ['Soldan sağa büyüyor mu?', 'İçindeki şekil kendisi mi?', 'Kanatlar aynadaki gibi eş mi?'],
    },
    {
      t: 'metin',
      ust: 'Kural 5',
      baslik: 'Parça parça karşılaştır',
      diyagram: 'parca',
      maddeler: ['Renk → desen → küçük ayrıntı', 'Tek parça farklıysa tıpatıp aynı değil'],
    },
    {
      t: 'metin',
      ust: 'Kural 6',
      baslik: 'Kuralı bütün şıklarda dene',
      diyagram: 'kontrol',
      maddeler: ['Kural yalnız bir şıkkı ayırmalı', 'İki şık dışarıda kalıyorsa başka kural ara'],
    },
    { t: 'soru', ust: 'Örnek 1 · Tür', baslik: 'Hangi grup diğerlerinden farklıdır?', soru: '1-hangisi-medium-test01-q07' },
    {
      t: 'cevap',
      ust: 'Örnek 1 · Çözüm',
      baslik: 'Hayvanların arasında bir masa',
      soru: '1-hangisi-medium-test01-q07',
      adimlar: ['A ve B: yalnız hayvanlar.', 'C: kurbağa, masa, karga.', 'Masa bir eşya: farklı grup C.'],
    },
    { t: 'soru', ust: 'Örnek 2 · Sayı', baslik: 'Hangi grup diğerlerinden farklıdır?', soru: '1-hangisi-easy-test03-q02' },
    {
      t: 'cevap',
      ust: 'Örnek 2 · Çözüm',
      baslik: 'Say: 2, 2, 4',
      soru: '1-hangisi-easy-test03-q02',
      adimlar: ['Hepsi hayvan: tür farkı yok.', 'A ve B gruplarında 2 resim var.', 'C grubunda 4 resim: farklı grup C.'],
    },
    { t: 'soru', ust: 'Örnek 3 · Kural', baslik: 'Hangisi kurala uymaz?', soru: '1-hfarkli-medium-010' },
    {
      t: 'cevap',
      ust: 'Örnek 3 · Çözüm',
      baslik: 'İçindeki şekil kendisi olmalı',
      soru: '1-hfarkli-medium-010',
      adimlar: ['Renkler farklı: kural renkte değil.', 'Yıldızda yıldız, üçgende üçgen var.', 'Kalbin içinde daire: B uymuyor.'],
    },
    { t: 'soru', ust: 'Örnek 4 · Tıpatıp aynı', baslik: 'Hangi iki ev tıpatıp aynıdır?', soru: '1-esbul-hard-001' },
    {
      t: 'cevap',
      ust: 'Örnek 4 · Çözüm',
      baslik: 'Kapı rengi ve pencere sayısı',
      soru: '1-esbul-hard-001',
      adimlar: ['Önce kapı rengine göre eşleştir.', 'Sonra pencereleri say.', 'İkisi de aynı olan tek çift: B ve D.'],
    },
    {
      t: 'metin',
      ust: 'Yöntem',
      baslik: '5 adımda çözüm',
      numarali: true,
      maddeler: ['Bütün şıklara bak', 'Ortak özelliği ara', 'Kuralı bir cümleyle söyle', 'Kuralı her şıkta dene', 'Tek farklıyı seç'],
    },
    {
      t: 'metin',
      ust: 'Dikkat',
      baslik: 'Çeldirici tuzakları',
      maddeler: ['İlk göze çarpan farka atlamak', 'Renklere aldanmak', 'Saymadan karar vermek', 'Dizilişi gözden kaçırmak', 'Küçük ayrıntıları atlamak'],
    },
    {
      t: 'metin',
      ust: 'Evde',
      baslik: '“Hangisi bu gruba ait değil?” oyunu',
      maddeler: ['Üç meyve ve bir kaşık: hangisi farklı?', 'Neden farklı? Kuralı söyle', 'Sonra grubu çocuk kursun', 'Haftada birkaç kez 10 dakika'],
    },
    { t: 'kapanis' },
  ],
};

export default konu;
