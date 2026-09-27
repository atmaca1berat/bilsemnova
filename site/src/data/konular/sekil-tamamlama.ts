import type { Konu } from '../konu-tipleri';

// Şekil tamamlama konu anlatımı. Örneklerin ve alıştırmaların hepsi soru görselinden bağımsız çözüldü
// ve cevap anahtarıyla karşılaştırıldı (27 Eylül 2026). Resim parçası sorularında her şık deliğe konarak
// kenarlar büyütülüp incelendi. Tuğla duvar (M5) türü ve açıları birbirine çok yakın pasta soruları kullanılmadı.

const konu: Konu = {
  slug: 'sekil-tamamlama',
  ad: 'Şekil Tamamlama',
  alan: 'Görsel Yetenek ve Algı',
  siniflar: '1-3. sınıf',
  ozet: 'Şekil tamamlama soruları nasıl çözülür? Eksik parça, desen, simetri ve pasta dilimi için 5 kural, 7 çözümlü örnek ve 8 alıştırma; ücretsiz konu anlatımı.',
  giris:
    'Şekil tamamlama sorularında bir resmin ya da desenli bir şeklin bir parçası eksiktir. Çocuk, boşluğun çevresindeki çizgileri, desenleri ve renkleri takip ederek boşluğa tam oturan parçayı bulur. Bu anlatımda beş kuralı, adım adım çözülmüş örnekleri ve alıştırmaları bulacaksınız.',
  okumaDakika: 12,
  uygulamadakiSoru: 1125,
  guncelleme: '2026-09-27',
  bolumler: [
    {
      id: 'nedir',
      baslik: 'Şekil tamamlama soruları nedir?',
      bloklar: [
        {
          t: 'p',
          html: 'Şekil tamamlama, görsel-uzamsal düşünmeyi ve dikkati ölçen klasik bir soru tipidir; zekâ testlerinde ve BİLSEM\'e hazırlık materyallerinde sık karşılaşılır. Görselde bir resim ya da desenli bir şekil vardır ve bir parçası eksiktir. Boşluk, <b>beyaz bir kareyle</b> ya da <b>kesikli çizgiyle</b> gösterilir.',
        },
        { t: 'sorugorsel', soru: '2-sekil-tamamlama-medium-094', aciklama: 'Örnek bir şekil tamamlama sorusu: kelebeğin sağ üst kanadında kare bir boşluk var. Boşluğa tam oturan parça şıklar arasından bulunacak.' },
        {
          t: 'p',
          html: 'Soru çoğunlukla <b>“Eksik parça hangisidir?”</b> diye sorulur. Bazı sorularda yarım bir şeklin öbür yarısı (<b>“Şeklin diğer yarısı hangisidir?”</b>) ya da iki parçanın birleşince oluşturacağı şekil (<b>“Bu iki parça birleşince hangi şekil oluşur?”</b>) istenir. Çocuk bu sırada şu becerileri birlikte kullanır:',
        },
        {
          t: 'liste',
          maddeler: [
            '<b>Parça-bütün ilişkisi:</b> Bir parçanın bütünün neresine ait olduğunu görmek.',
            '<b>Desen takibi:</b> Şeritlerin, noktaların ve çizgilerin yönünü ve sırasını sürdürmek.',
            '<b>Ayrıntıya dikkat:</b> Kenardaki küçük bir kırılmayı ya da renk farkını fark etmek.',
            '<b>Simetri:</b> Yarım bir şeklin ayna görüntüsünü bulmak.',
          ],
        },
        {
          t: 'p',
          html: 'BilsemNova uygulamasında 1, 2 ve 3. sınıf için ayrı ayrı 375\'er, toplam <b>1.125 şekil tamamlama sorusu</b> var. 1. sınıfta üç, 2 ve 3. sınıfta dört şık bulunur. Sorular resim parçası, desenli şekil, şerit, pasta dilimi, simetri ve parça birleştirme gibi türlere ayrılır; her tür kolay, orta ve zor seviyede yer alır.',
        },
      ],
    },
    {
      id: 'kurallar',
      baslik: 'Beş temel kural',
      bloklar: [
        { t: 'p', html: 'Şekil tamamlama sorularının hepsi aynı birkaç kurala dayanır. Bu kuralları bilen çocuk, ilk kez gördüğü bir soruda da neye bakacağını bilir.' },
        {
          t: 'kural',
          no: 1,
          baslik: 'Kenara değen çizgiler parçada devam eder',
          html: 'Boşluğun kenarına değen her çizgi, renk ve biçim, doğru parçanın içinde <b>kesintisiz sürer</b>. Parçayı zihninde boşluğa koy ve dört kenarı tek tek kontrol et: bir çizgi kenarda kırılıyor ya da bir renk birden değişiyorsa o parça yanlıştır. Resim parçası sorularında şıkların çoğu aynı resmin başka yerlerinden kesildiği için ilk bakışta hepsi uyuyor gibi görünebilir.',
          diyagram: 'kenar',
        },
        {
          t: 'kural',
          no: 2,
          baslik: 'Desenin yönü, sırası ve rengi değişmez',
          html: 'Şeritli, noktalı ya da zikzaklı desenlerde doğru parça deseni <b>aynı yönde, aynı kalınlıkta ve aynı renklerle</b> sürdürür. Ters yöne yatık şeritler, yeri değişmiş renkler ve döndürülmüş parçalar en sık görülen çeldiricilerdir. İki parçayı birleştirme sorularında da birleşme çizgisinde desen kaymamalıdır.',
          diyagram: 'desen',
        },
        {
          t: 'kural',
          no: 3,
          baslik: 'Verilen parça ile eksik parça bütünü oluşturur',
          html: 'Bazı sorularda şeklin bir parçası verilir, bütünü kesikli çizgiyle gösterilir. Eksik parça, bütünden verilen parça çıkarılınca kalan yerdir; <b>biçimi ve boyu</b> bu boşluğa uymalıdır. Verilen parçanın kopyası, daha küçük bir parça ya da yanlış yere oturan parça boşluğu doldurmaz.',
          diyagram: 'parca',
        },
        {
          t: 'kural',
          no: 4,
          baslik: 'Simetri ekseni bir aynadır',
          html: 'Kesikli çizgi simetri ekseniyse eksik yarı, verilen yarının <b>ayna görüntüsüdür</b>: sağ ile sol yer değiştirir, renkler aynı kalır. Eksene yakın olan parçalar aynada da eksene yakın, uzak olanlar uzak durur. Verilen yarının aynalanmamış kopyası en sık görülen tuzaktır.',
          diyagram: 'simetri',
        },
        {
          t: 'kural',
          no: 5,
          baslik: 'Eşit dilimli şekilde eksik dilim de eşittir',
          html: 'Pasta eşit dilimlere bölünmüşse eksik dilim de <b>komşu dilim kadar geniştir</b>. Şıklardaki dilimleri boşluğun yanındaki dilimle karşılaştırın: daha dar ya da daha geniş olanlar yanlıştır. Dilim sayısı arttıkça (10-12 dilim) dilimler birbirine çok yaklaşır ve karşılaştırma zorlaşır.',
          diyagram: 'dilim',
        },
        {
          t: 'kutu',
          tur: 'dikkat',
          baslik: 'Parçayı döndürmeyin',
          html: 'Şıklardaki parçalar <b>durdukları gibi</b> boşluğa konur. Döndürülünce uyacak gibi görünen bir parça da yanlıştır: uygulamadaki çeldiricilerin bir kısmı, doğru parçanın döndürülmüş hâlidir.',
        },
      ],
    },
    {
      id: 'resim-parcasi',
      baslik: 'Resim parçası soruları',
      bloklar: [
        {
          t: 'p',
          html: 'Bu sorularda bir resmin küçük bir bölümü beyaz bir kareyle kapatılmıştır; şıklar aynı resmin farklı yerlerinden kesilmiş parçalardır. Hepsi aynı renklerde olduğu için birbirine benzer. Doğru parçayı bulmanın yolu, <b>boşluğun kenarlarına</b> bakmaktır.',
        },
        {
          t: 'ornek',
          soru: '1-sekil-tamamlama-easy-019',
          baslik: 'Kürek sapı parçada devam etmeli',
          adimlar: [
            'Boşluk kanonun sağ kenarında. Önce kenarlara değenleri bul: üst kenara kürek sapı, sağ kenara küreğin sarı palası değiyor; solda kanonun tahta gövdesi ve altındaki mavi gölge var.',
            'Doğru parçada kürek sapı üst kenardan girip sağdaki palaya bağlanmalı; gövde ve gölge de kesilmeden sürmeli.',
            'A\'da sap, pala, gövde ve gölge boşluğun kenarlarında tam birleşiyor.',
          ],
          eleme: 'B\'de kürek yok: sap boşluğun üst kenarında yarıda kalıyor. C kanonun kırmızı iç kısmından kesilmiş; renkler boşluğun çevresine uymuyor. Doğru cevap <b>A</b>.',
        },
        {
          t: 'ornek',
          soru: '3-sekil-tamamlama-hard-035',
          baslik: 'Gövde ve iniş ayağı birleşmeli',
          adimlar: [
            'Boşluk helikopter gövdesinin sağ alt kısmında. Sol kenarda gövdenin pembe alt kısmı ve turuncu şerit, alt kenarda iniş kızağına inen dikme görünüyor.',
            'Doğru parçada pembe gövde ve şerit soldan devam etmeli; dikme de parçadan çıkıp aşağıdaki kızağa bağlanmalı.',
            'D\'de gövde, şerit ve dikme boşluğun çevresiyle kesintisiz birleşiyor.',
          ],
          eleme: 'A\'da gri bir pervane kanadı ve pencere, B\'de kuyruk pervanesi, C\'de yine pervane kanadı var; bu parçalar resmin başka yerlerinden alınmış ve kenarlarda gövdeyle birleşmiyor. Doğru cevap <b>D</b>.',
        },
        {
          t: 'kutu',
          tur: 'ipucu',
          baslik: 'Kenar kenar kontrol',
          html: 'Parçanın dört kenarını sırayla boşluğun kenarlarıyla karşılaştırın: üstteki çizgi üst kenarda, soldaki renk sol kenarda devam ediyor mu? <b>Tek bir kenar bile uymuyorsa</b> şık elenir.',
        },
      ],
    },
    {
      id: 'desenli',
      baslik: 'Desenli şekiller ve şeritler',
      bloklar: [
        {
          t: 'p',
          html: 'Desenli sorularda boşluk bir dairenin, kalbin ya da gökkuşağının içinde olabilir; bazen de şeklin bir parçası verilir ve eksik parça istenir. Burada üç şeye birlikte bakılır: <b>dış çizgi</b> (şeklin kenarı parçanın neresinden geçiyor), <b>desenin yönü</b> ve <b>renkler</b>.',
        },
        {
          t: 'ornek',
          soru: '2-sekil-tamamlama-easy-060',
          baslik: 'Dış çizgi ve şeritler birlikte',
          adimlar: [
            'Boşluk dairenin sol alt kenarında; doğru parçanın sol altından dairenin kavisli dış çizgisi geçmeli.',
            'Şeritler sarı ve sağa yatık (/). Parçadaki şeritler de aynı yöne yatık olmalı ve çevredeki şeritlerle aynı hizada sürmeli.',
            'Zemin mor, şeritler sarı kalmalı.',
            'B\'de dış çizgi sol altta, şeritler sağa yatık ve renkler doğru.',
          ],
          eleme: 'A döndürülmüş: şeritler öbür yöne yatık, dış çizgi sol üstte. C\'de dış çizgi sağda kalıyor; D\'de renkler ters (sarı zemin, mor şerit). Doğru cevap <b>B</b>.',
        },
        {
          t: 'ornek',
          soru: '3-sekil-tamamlama-easy-007',
          baslik: 'Eksik parça, verilenin kopyası değildir',
          adimlar: [
            'Kesikli çizgi bütün şekli gösteriyor: büyük bir üçgen. Verilen parça onun tepesindeki küçük üçgen.',
            'Eksik kalan yer, üçgenin alttaki geniş kısmıdır (yamuk): tabanı büyük üçgenin tabanı kadar geniştir.',
            'Verilen parçadaki mavi-yeşil şeritler sağa yatık (/); eksik parçada da aynı yöne yatık olmalı.',
            'A\'daki yamuk doğru boyda ve şeritleri sağa yatık.',
          ],
          eleme: 'B verilen üçgenin kopyası, C\'deki yamuk fazla küçük, D\'de şeritler ters yöne yatık. Doğru cevap <b>A</b>.',
        },
      ],
    },
    {
      id: 'diger',
      baslik: 'Pasta, birleştirme ve simetri soruları',
      bloklar: [
        {
          t: 'p',
          html: 'Bu üç türde boşluk yerine bir dilim, iki ayrı parça ya da yarım bir şekil verilir. Kural aynıdır: bütün, <b>kesintisiz ve düzenli</b> olmalıdır.',
        },
        {
          t: 'ornek',
          soru: '1-sekil-tamamlama-easy-021',
          baslik: 'Eksik dilim komşusu kadar',
          adimlar: [
            'Pasta 6 eşit dilime bölünmüş; sağdaki bir dilim eksik.',
            'Eksik dilim de diğerleri kadar geniş olmalı: şıklardaki dilimleri boşluğun yanındaki mor dilimle karşılaştır.',
            'A\'daki dilim, pastadaki bir dilim kadar geniş.',
          ],
          eleme: 'B\'deki dilim daha dar, C\'deki daha geniş (köşesi dik, pastanın dörtte biri kadar). Doğru cevap <b>A</b>.',
        },
        {
          t: 'ornek',
          soru: '2-sekil-tamamlama-medium-937',
          baslik: 'Zikzaklar ortada kırılmaz',
          adimlar: [
            'İki parçada da pembe zemin üzerinde turuncu zikzaklar var; parçalar birleşince tek bir dikdörtgen olur.',
            'Birleşme çizgisinde zikzaklar kesintisiz sürmeli: soldaki parçada biten her zikzak, sağdakinde aynı yükseklikte devam etmeli.',
            'Renkler de aynı kalmalı: zemin pembe, zikzak turuncu.',
            'C tek parça bir dikdörtgen; zikzaklar ortada kırılmadan sürüyor.',
          ],
          eleme: 'A\'da sağ yarının renkleri ters (turuncu zemin). B ve D\'de parçalar hâlâ ayrı duruyor; B\'de ayrıca sağ parçanın renkleri ters. Doğru cevap <b>C</b>.',
        },
        {
          t: 'ornek',
          soru: '3-sekil-tamamlama-hard-952',
          baslik: 'Kopyası değil, aynası',
          adimlar: [
            'Kesikli çizgi simetri ekseni: eksik yarı, verilen yarının ayna görüntüsü olmalı.',
            'Verilen yarıda mor çatı eksene doğru yükseliyor; aynasında çatı eksenden sağa doğru alçalmalı.',
            'Renkler aynı kalır: çatı mor, duvar kırmızı, kapı turuncu. Kapı kolu aynada da eksene yakın tarafa, yani kapının soluna geçer.',
            'D\'de mor çatı solda yüksek, duvar kırmızı ve kapı kolu solda.',
          ],
          eleme: 'A\'da renkler değişmiş (mavi çatı, pembe duvar). B verilen yarının kopyası: çatısı yine sağa doğru yükseliyor. C\'de çatı ile duvarın renkleri yer değiştirmiş. Doğru cevap <b>D</b>.',
        },
      ],
    },
    {
      id: 'yontem',
      baslik: '5 adımda çözüm yöntemi',
      bloklar: [
        { t: 'p', html: 'Her şekil tamamlama sorusunda aynı sırayı izlemek hem hızı hem doğruluğu artırır:' },
        {
          t: 'liste',
          numarali: true,
          maddeler: [
            '<b>Soruyu tanı.</b> Boşluklu bir resim mi, yarım bir şekil mi, birleştirilecek iki parça mı, dilimli bir pasta mı?',
            '<b>Boşluğun çevresini oku.</b> Kenarlara hangi çizgiler, renkler ve desenler değiyor?',
            '<b>Biçimi ve boyu kontrol et.</b> Parça boşluğu tam dolduruyor mu? Dış çizgi doğru köşede mi?',
            '<b>Deseni ve yönü kontrol et.</b> Şeritler aynı yöne yatık mı, renkler aynı mı? Simetride parça aynalanmış mı?',
            '<b>Şıkları ele.</b> Rengi değişmiş, döndürülmüş, kopyalanmış ya da resmin başka yerinden alınmış parçaları çıkar.',
          ],
        },
        {
          t: 'kutu',
          tur: 'ipucu',
          baslik: 'Önce kolay farklara bakın',
          html: 'Rengi ters ya da boyu farklı şıklar ilk bakışta elenir. Kalan şıklarda kenarlara yakından bakmak çoğu zaman yeter.',
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
            '<b>Başka yerden kesilmiş parça:</b> Aynı resimden alındığı için renkleri tutar, ama kenarda çizgiler kırılır.',
            '<b>Döndürülmüş parça:</b> Deseni doğru görünür, ama şeritler ya da dış çizgi başka yöne döner.',
            '<b>Ters yöne yatık şerit:</b> Şeritler öbür yana yatıktır.',
            '<b>Renkleri yer değiştirmiş parça:</b> Zemin ile desenin renkleri takas edilmiştir.',
            '<b>Boyu farklı parça:</b> Biçimi doğru, ama boşluğa göre küçük ya da büyüktür.',
            '<b>Aynalanmamış yarım:</b> Simetri sorularında verilen yarının kopyası.',
            '<b>Ayrı duran parçalar:</b> Birleştirme sorularında parçaları arasında boşluk ya da çizgi kalmış şık.',
          ],
        },
        {
          t: 'kutu',
          tur: 'veli',
          baslik: 'Velilere öneri',
          html: 'Çocuğunuz yanlış bir parça seçtiğinde <b>“Bu parçayı boşluğa koysak hangi kenarda sorun çıkar?”</b> diye sorun. Hatayı kendisi gösterebilen çocuk, bir sonraki soruda kenarlara kendiliğinden bakar.',
        },
      ],
    },
    {
      id: 'evde',
      baslik: 'Evde nasıl çalışılır?',
      bloklar: [
        {
          t: 'p',
          html: 'Şekil tamamlama, evdeki basit malzemelerle kolayca çalışılabilir. Elle yapılan parça denemeleri, zihinde yerleştirme becerisini güçlendirir.',
        },
        {
          t: 'liste',
          maddeler: [
            '<b>Malzeme:</b> Eski dergiler ya da kartpostallar, makas, karton ve renkli kalemler.',
            '<b>“Kendi bulmacanı yap” oyunu:</b> Bir dergi resminden kare bir parça kesin; bu parçayı, resmin başka yerlerinden kestiğiniz 2-3 benzer kareyle karıştırın. Çocuk önce yalnız bakarak doğru kareyi seçsin, sonra boşluğa koyup kontrol etsin.',
            '<b>Şeritli kart:</b> Kartona eğik şeritler çizin ve ortasından bir kare kesin. Kareyi bir kez doğru, bir kez döndürerek yerine koyun; farkı birlikte bulun.',
            '<b>Yarım resim:</b> Kâğıda yarım bir ev ya da kelebek çizin; öbür yarısını çocuk çizsin. Kenarına küçük bir ayna tutarak sonucu birlikte kontrol edin.',
            '<b>Kâğıt pasta:</b> Kâğıttan bir daireyi katlayarak 4 ya da 8 eşit dilime kesin. Bir dilimi saklayın; boşluğa hangi dilimin uyduğunu buldurun.',
            '<b>Süre:</b> Haftada birkaç kez 10-15 dakika yeterli. Kısa ve düzenli çalışma, uzun ve seyrek çalışmadan daha etkilidir.',
          ],
        },
        {
          t: 'kutu',
          tur: 'veli',
          baslik: 'Soru sorarak yönlendirin',
          html: '<b>“Boşluğun kenarında hangi çizgiler var?”</b>, <b>“Bu şerit hangi yöne yatık?”</b>, <b>“Parça boşluğu tam dolduruyor mu?”</b> gibi sorular, çocuğun kontrol alışkanlığı kazanmasını sağlar. Tahmin yanlış çıkarsa parçayı boşluğa birlikte koyup bakmak en iyi açıklamadır.',
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
            { soru: '2-sekil-tamamlama-easy-027', aciklama: 'Gülümsemenin çizgisi boşluğun sol kenarından içeri giriyor: A\'da ağız çizgisi devam ediyor, sağ göz ve pembe yanak yerinde. B\'de ağız ve yanak ikinci kez çıkıyor; C ve D\'de armudun dış çizgisi boşluğun içine düşüyor.' },
            { soru: '2-sekil-tamamlama-hard-046', aciklama: 'Boşluğun çevresinde karıncanın turuncu karnı ve siyah çizgileri var: B\'de çizgiler ve bacak kesintisiz sürüyor. C\'de karıncanın yüzü, D\'de kanadı var; A\'da çizgiler kenarlarda kayıyor.' },
            { soru: '1-sekil-tamamlama-medium-072', aciklama: 'Boşluk gökkuşağının sağ tarafında: parçada dıştan içe sarı, turkuaz, mor ve yeşil yaylar olmalı. A döndürülmüş, C\'de sarı ile turkuazın yeri değişmiş.' },
            { soru: '3-sekil-tamamlama-medium-064', aciklama: 'Boşluk dairenin alt kenarında: parçanın altından dairenin kavisli çizgisi geçmeli, turuncu zemin üzerinde kırmızı noktalar sürmeli. A\'da renkler ters; B ve D\'de kavis yanlış yerde.' },
            { soru: '1-sekil-tamamlama-medium-085', aciklama: 'Eksik parça dairenin alt yarısı: üst yarıyla aynı boyda olmalı ve şeritleri aynı yöne yatık olmalı. A\'da şeritler ters yöne yatık, B\'deki yarım daire küçük.' },
            { soru: '2-sekil-tamamlama-easy-912', aciklama: 'Eksik yarı, verilen yarının aynası: pembe çatı eksenden sağa doğru alçalır, duvar yeşil kalır, kapı kolu eksene yakın tarafa geçer. A kopyası; B ve C\'de çatı ile duvarın renkleri yer değiştirmiş.' },
            { soru: '3-sekil-tamamlama-medium-935', aciklama: 'Parçalar birleşince tek bir daire oluşur ve mor şeritler ortadaki birleşme çizgisinde kaymadan sürer. A ve B\'de parçalar hâlâ ayrı; D\'de sağ yarının şeritleri uymuyor.' },
            { soru: '1-sekil-tamamlama-easy-059', aciklama: 'Pasta 6 eşit dilim: eksik dilim, boşluğun yanındaki dilim kadar geniş olmalı. A daha dar, B daha geniş (köşesi dik).' },
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
      baslik: '“Eksik parça hangisidir?”',
      soru: '2-sekil-tamamlama-medium-094',
      maddeler: ['Resimde ya da desende bir boşluk var', 'Şıklarda aday parçalar', 'Boşluğa tam oturan parçayı bul'],
    },
    { t: 'metin', ust: 'Kural 1', baslik: 'Kenara değen çizgiler parçada devam eder', diyagram: 'kenar', maddeler: ['Parçayı zihninde boşluğa koy.', 'Dört kenarı tek tek kontrol et.'] },
    { t: 'metin', ust: 'Kural 2', baslik: 'Desenin yönü, sırası ve rengi değişmez', diyagram: 'desen', maddeler: ['Şeritler aynı yöne yatık kalır.', 'Renkler yer değiştirmez.'] },
    { t: 'metin', ust: 'Kural 3', baslik: 'Verilen parça + eksik parça = bütün', diyagram: 'parca', maddeler: ['Eksik parça, verilenin kopyası değildir.', 'Biçimi ve boyu boşluğa uymalı.'] },
    { t: 'metin', ust: 'Kural 4', baslik: 'Simetri ekseni bir aynadır', diyagram: 'simetri', maddeler: ['Eksik yarı, verilen yarının aynasıdır.', 'Renkler aynı kalır, yön ters döner.'] },
    { t: 'metin', ust: 'Kural 5', baslik: 'Eksik dilim, komşu dilim kadar geniştir', diyagram: 'dilim', maddeler: ['Pastadaki dilimleri say.', 'Boşluğu yanındaki dilimle karşılaştır.'] },
    { t: 'soru', ust: 'Örnek 1 · Resim parçası', baslik: 'Eksik parça hangisidir?', soru: '1-sekil-tamamlama-easy-019' },
    {
      t: 'cevap',
      ust: 'Örnek 1 · Çözüm',
      baslik: 'Kürek sapı parçada devam etmeli',
      soru: '1-sekil-tamamlama-easy-019',
      adimlar: ['Üst kenarda kürek sapı, sağda pala var.', 'A\'da sap palaya bağlanıyor.', 'B\'de kürek yok, C kanonun içinden.'],
    },
    { t: 'soru', ust: 'Örnek 2 · Desenli şekil', baslik: 'Eksik parça hangisidir?', soru: '2-sekil-tamamlama-easy-060' },
    {
      t: 'cevap',
      ust: 'Örnek 2 · Çözüm',
      baslik: 'Dış çizgi ve şeritler birlikte',
      soru: '2-sekil-tamamlama-easy-060',
      adimlar: ['Dış çizgi sol altta olmalı.', 'Sarı şeritler sağa yatık kalır.', 'A döndürülmüş, D\'de renkler ters.'],
    },
    { t: 'soru', ust: 'Örnek 3 · Parça birleştirme', baslik: 'Bu iki parça birleşince hangi şekil oluşur?', soru: '2-sekil-tamamlama-medium-937' },
    {
      t: 'cevap',
      ust: 'Örnek 3 · Çözüm',
      baslik: 'Zikzaklar ortada kırılmaz',
      soru: '2-sekil-tamamlama-medium-937',
      adimlar: ['Tek parça bir dikdörtgen oluşur.', 'Zemin pembe, zikzak turuncu kalır.', 'B ve D\'de parçalar hâlâ ayrı.'],
    },
    { t: 'soru', ust: 'Örnek 4 · Simetri', baslik: 'Şeklin diğer yarısı hangisidir?', soru: '3-sekil-tamamlama-hard-952' },
    {
      t: 'cevap',
      ust: 'Örnek 4 · Çözüm',
      baslik: 'Kopyası değil, aynası',
      soru: '3-sekil-tamamlama-hard-952',
      adimlar: ['Çatı eksenden sağa doğru alçalır.', 'Renkler aynı: mor, kırmızı, turuncu.', 'Kapı kolu eksene yakın tarafta.'],
    },
    {
      t: 'metin',
      ust: 'Yöntem',
      baslik: '5 adımda çözüm',
      numarali: true,
      maddeler: ['Soruyu tanı: boşluk, yarım şekil, birleştirme, pasta', 'Boşluğun kenarlarını oku', 'Biçimi ve boyu kontrol et', 'Deseni, yönü ve rengi kontrol et', 'Şıkları ele: renk → boy → yön → kenar'],
    },
    {
      t: 'metin',
      ust: 'Dikkat',
      baslik: 'Çeldirici tuzakları',
      maddeler: ['Başka yerden kesilmiş parça', 'Döndürülmüş parça', 'Ters yöne yatık şerit', 'Renkleri yer değiştirmiş parça', 'Aynalanmamış (kopya) yarım'],
    },
    {
      t: 'metin',
      ust: 'Evde',
      baslik: '“Kendi bulmacanı yap” oyunu',
      maddeler: ['Dergi resmi, makas, karton', 'Resimden kare kes, benzer karelerle karıştır', 'Önce bakarak seç, sonra boşluğa koyup dene', 'Haftada birkaç kez 10-15 dakika'],
    },
    { t: 'kapanis' },
  ],
};

export default konu;
