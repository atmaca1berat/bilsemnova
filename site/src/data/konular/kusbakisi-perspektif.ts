import type { Konu } from '../konu-tipleri';

// Kuş bakışı konu anlatımı. Örneklerin ve alıştırmaların hepsi soru görselinden bağımsız çözüldü ve cevap anahtarıyla
// karşılaştırıldı (27 Eylül 2026). Bloğun üstten kare olduğu varsayımına dayanan "karışık şekiller" soruları ve
// şıkları yalnız disk oranlarıyla ayrılan "üstten görünüşe uyan kule" soruları kullanılmadı.

const konu: Konu = {
  slug: 'kusbakisi-perspektif',
  ad: 'Kuş Bakışı',
  alan: 'Görsel Yetenek ve Algı',
  siniflar: '1-3. sınıf',
  ozet: 'Kuş bakışı soruları nasıl çözülür? Üstten, önden ve karşıdan bakış için 5 kural, 7 çözümlü örnek ve 8 alıştırmayla ücretsiz BİLSEM hazırlık anlatımı.',
  giris:
    'Kuş bakışı sorularında çocuk, bir cisme ya da cisim grubuna üstten, önden ya da karşı taraftan bakınca ne göreceğini zihninde canlandırır. Bu anlatımda soruların arkasındaki beş kuralı, adım adım çözülmüş örnekleri ve alıştırmaları bulacaksınız.',
  okumaDakika: 12,
  uygulamadakiSoru: 945,
  guncelleme: '2026-09-27',
  bolumler: [
    {
      id: 'nedir',
      baslik: 'Kuş bakışı soruları nedir?',
      bloklar: [
        {
          t: 'p',
          html: 'Kuş bakışı soruları, cisimlere <b>üstten</b>, <b>önden</b> ya da <b>karşı taraftan</b> bakınca ne görüleceğini sorar. Adını, gökyüzünden aşağı bakan bir kuşun gördüğü görüntüden alır. Görsel-uzamsal düşünmeyi ölçen bu soru tipi, zekâ testlerinde ve BİLSEM\'e hazırlık materyallerinde sık karşılaşılır.',
        },
        { t: 'sorugorsel', soru: '2-kus-bakisi-easy-test01-q02', aciklama: 'Örnek bir kuş bakışı sorusu: bir çubuğa geçirilmiş, yukarı doğru küçülen beş diskin üstten görünüşü soruluyor.' },
        { t: 'p', html: 'Çocuk bu sorularda şu becerileri birlikte kullanır:' },
        {
          t: 'liste',
          maddeler: [
            '<b>Bakış açısı değiştirme:</b> Cisme kendi yerinden değil, başka bir yerden bakmayı zihinde canlandırmak.',
            '<b>Biçim tanıma:</b> Silindirin üstten daire, koninin önden üçgen göründüğünü bilmek.',
            '<b>Örtme ilişkisi:</b> Hangi parçanın hangisini gizlediğini bulmak.',
            '<b>Konum ve sıra:</b> Ön-arka, sağ-sol ve dıştan içe sırayı doğru korumak.',
          ],
        },
        {
          t: 'p',
          html: 'BilsemNova uygulamasında 1, 2 ve 3. sınıf için ayrı ayrı 315\'er, toplam <b>945 kuş bakışı sorusu</b> var. Sorular kolay, orta ve zor olmak üzere üç seviyededir; tek cisimler, disk kuleleri, masa üstündeki cisimler, kumdaki izler, önden ve karşı taraftan bakış gibi türleri kapsar.',
        },
      ],
    },
    {
      id: 'kurallar',
      baslik: 'Beş temel kural',
      bloklar: [
        { t: 'p', html: 'Kuş bakışı sorularının çoğu aşağıdaki beş kurala dayanır. Bu kuralları bilen çocuk, ilk kez gördüğü bir cismi de doğru canlandırabilir.' },
        {
          t: 'kural',
          no: 1,
          baslik: 'Üç yönden üç farklı görüntü',
          html: 'Aynı cisim, bakılan yöne göre farklı görünür. <b>Üstten</b> bakınca cismin tepesi ve en geniş dış çizgisi, <b>önden</b> ve <b>yandan</b> bakınca dış çizgisi (silueti) görünür. Dik duran silindir üstten daire, önden dikdörtgendir; koni üstten ortası noktalı bir daire, önden üçgendir; yatık üçgen prizma önden üçgen, yandan dikdörtgendir.',
          diyagram: 'ucGorunus',
        },
        {
          t: 'kural',
          no: 2,
          baslik: 'Geniş olan, altındaki dar olanı örter',
          html: 'Kuleye üstten bakan kişi önce en üstteki parçayı görür. Aşağıdaki bir disk ancak <b>üstündeki bütün disklerden genişse</b> kenarı dışarı taşar ve görünür; değilse örtülür. Görünen diskler üstten <b>iç içe halkalar</b> gibi görünür: en geniş disk en dışta, en üstteki disk en içte. Bir disk ortadan sağa ya da sola kaymışsa, üstten de aynı yana kaymış görünür.',
          diyagram: 'ortme',
        },
        {
          t: 'kural',
          no: 3,
          baslik: 'Masada ön kenar haritanın altına gelir',
          html: 'Masanın üstten görünüşü bir harita gibidir. Bize yakın olan <b>ön kenar haritanın altına</b>, uzaktaki arka kenar üstüne gelir. Soldaki cisim solda, sağdaki sağda kalır: üstten bakınca <b>sağ ile sol değişmez</b>. Uygulamadaki haritalarda masanın ön kenarı, alttaki kahverengi şeritle gösterilir.',
          diyagram: 'masa',
        },
        {
          t: 'kural',
          no: 4,
          baslik: 'Karşı taraftan bakınca sağ ile sol yer değiştirir',
          html: 'Masanın öbür yanına geçen kişi, bizim solumuzda gördüğümüz cismi kendi sağında görür. Sıra <b>tersine döner</b>: baştaki sona, sondaki başa geçer; üç cisim varsa ortadaki yerinde kalır. Bu sorulardaki cisimler her yandan aynı göründüğü için biçimleri değişmez; koni yine üçgen, küp yine kare görünür.',
          diyagram: 'karsidan',
        },
        {
          t: 'kural',
          no: 5,
          baslik: 'Kumdaki iz, cismin tabanıdır',
          html: 'Bir cisim kuma bastırılınca yalnız <b>alttaki yüzü</b> iz bırakır. Koninin sivri ucu havada kalır, izi tam bir dairedir. Ağzı açık bir bardağın tabanı kapalıdır, izi yine dairedir. Simit ise ortası boş bir <b>halka</b> bırakır; küpün izi karedir.',
          diyagram: 'iz',
        },
      ],
    },
    {
      id: 'ustten',
      baslik: 'Üstten görünüş: tek cisim ve kuleler',
      bloklar: [
        {
          t: 'p',
          html: 'En sık görülen sorularda tek bir cismin ya da bir çubuğa geçirilmiş disklerden oluşan bir kulenin üstten görünüşü sorulur. Kulelerde yukarıdan aşağı inip her diski üstündekilerle karşılaştırmak yeter.',
        },
        {
          t: 'ornek',
          soru: '1-kus-bakisi-easy-test01-q01',
          baslik: 'Dik duran silindir',
          adimlar: [
            'Cisim dik duran turkuaz bir silindir: tepesi ve tabanı daire.',
            'Üstten bakınca yalnız tepesini görürüz: turkuaz bir <b>daire</b>.',
            'Silindirin yan yüzü dimdik olduğu için üstten görünmez; tepede sivri bir uç da yoktur.',
          ],
          eleme: 'A\'daki ortası noktalı daire, sivri tepeli bir koninin üstten görünüşüdür. C\'deki elips, silindire eğik bakınca görülür; tam üstten bakınca tepe daire olur. Doğru cevap <b>B</b>.',
        },
        {
          t: 'ornek',
          soru: '2-kus-bakisi-medium-test01-q01',
          baslik: 'Kum saati biçimli kule',
          adimlar: [
            'Kule alttan üste: sarı (en geniş), kırmızı (dar), turuncu, mavi (en küçük).',
            'Yukarıdan başla: en üstteki <b>mavi</b> disk görünür. Turuncu, üstündeki maviden geniş: kenarı taşar, <b>görünür</b>.',
            'Kırmızı, üstündeki turuncudan dar: turuncunun altında kalır, <b>görünmez</b>.',
            'Sarı hepsinden geniş: en dışta görünür. Üstten dıştan içe: <b>sarı, turuncu, mavi</b>.',
          ],
          eleme: 'C gizli kalan kırmızı halkayı da gösteriyor; D ortadaki maviyi unutmuş; A renkleri ters sıralamış (en küçük disk en dışta olamaz). Doğru cevap <b>B</b>.',
        },
        {
          t: 'ornek',
          soru: '2-kus-bakisi-hard-test01-q04',
          baslik: 'Döndürülmüş kare blok',
          adimlar: [
            'Yeşil blok, bir köşesi bize bakacak biçimde döndürülmüş bir kare blok: önden iki yan yüzü eşit genişlikte görünüyor.',
            'Kare, köşesi öne bakacak kadar döndürülünce üstten <b>baklava</b> (eşkenar dörtgen) gibi görünür.',
            'Üstündeki mavi disk bloktan dar: üstten baklavanın ortasında <b>mavi bir daire</b> görünür.',
          ],
          eleme: 'A mavi diski unutmuş; B\'de renkler yer değiştirmiş; D\'de daire pembe. Doğru cevap <b>C</b>.',
        },
        {
          t: 'ornek',
          soru: '3-kus-bakisi-hard-test01-q01',
          baslik: 'Genişlikleri karışık beş disk',
          adimlar: [
            'Kule alttan üste: turuncu, pembe (en geniş), mor, turkuaz (en küçük), sarı.',
            'Yukarıdan başla: en üstteki <b>sarı</b> görünür. Turkuaz, üstündeki sarıdan dar: görünmez.',
            'Mor, üstündeki sarıdan ve turkuazdan geniş: <b>görünür</b>. Pembe, üstündekilerin hepsinden geniş: en dışta <b>görünür</b>.',
            'En alttaki turuncu, üstündeki pembeden dar: görünmez. Üstten dıştan içe: <b>pembe, mor, sarı</b>.',
          ],
          eleme: 'A\'da ortada sarı yerine mavi bir daire var; B ortadaki sarıyı unutmuş; D\'de dış parça kare çizilmiş, oysa pembe disk yuvarlaktır. Doğru cevap <b>C</b>.',
        },
        {
          t: 'kutu',
          tur: 'ipucu',
          baslik: 'Parmakla aşağı in',
          html: 'Disk kulesi sorularında parmağınızı en üstteki diske koyup aşağı doğru inin. Her diskte <b>“Bu disk, üstündekilerin hepsinden geniş mi?”</b> diye sorun. Cevap evetse o disk bir halka olarak görünür; hayırsa gizli kalır.',
        },
      ],
    },
    {
      id: 'masa',
      baslik: 'Masadaki cisimler',
      bloklar: [
        {
          t: 'p',
          html: 'Bu sorularda bir masanın üstüne dizilmiş iki, üç ya da dört cisim vardır ve masanın üstten haritası sorulur. Önce her cismin yerini (ön-arka, sağ-sol), sonra üstten biçimini belirlemek gerekir.',
        },
        {
          t: 'ornek',
          soru: '3-kus-bakisi-medium-test01-q14',
          baslik: 'Üç cisimli masa',
          adimlar: [
            'Yerleri belirle: yeşil küp <b>arkada solda</b>, mor yumurta <b>arkada sağda</b>, turkuaz altıgen prizma <b>önde sağda</b>.',
            'Haritada ön kenar alttadır: arkadaki küp ile yumurta üst sıraya, öndeki prizma alt sıraya gelir.',
            'Sağ-sol değişmez: küp solda; yumurta ile prizma sağda.',
            'Biçimler: küp üstten kare, yumurta oval, altıgen prizma altıgen görünür.',
          ],
          eleme: 'A ve D\'de cisimlerin yerleri karışmış (D\'de ön ile arka yer değiştirmiş). C\'de prizmanın yerinde ortası noktalı bir daire var; bu, bir koninin üstten görünüşüdür. Doğru cevap <b>B</b>.',
        },
      ],
    },
    {
      id: 'onden',
      baslik: 'Önden ve karşı taraftan bakış',
      bloklar: [
        {
          t: 'p',
          html: 'Önden bakış sorularında cisimlerin dış çizgileri, soldan sağa aynı sırayla görünür. Karşı taraftan bakış sorularında ise biçimler aynı kalır ama sıra tersine döner.',
        },
        {
          t: 'ornek',
          soru: '2-kus-bakisi-easy-test01-q08',
          baslik: 'Simit ve koni önden',
          adimlar: [
            'Önden bakınca her cismin dış çizgisi (silueti) görünür.',
            'Masada yatan simit önden <b>basık, uçları yuvarlak bir şerit</b> gibi görünür; koni önden <b>üçgendir</b>.',
            'Sıra değişmez: simit solda, koni sağda.',
          ],
          eleme: 'A\'da sıra ters; B\'de koni dikdörtgen çizilmiş (dikdörtgen, silindirin önden görünüşüdür); D ise iki cismin üstten görünüşü: halka ve ortası noktalı daire. Doğru cevap <b>C</b>.',
        },
        {
          t: 'ornek',
          soru: '1-kus-bakisi-hard-test01-q02',
          baslik: 'Karşı taraftan bakan kişi',
          adimlar: [
            'Biz soldan sağa turuncu piramit, sarı küp, mor silindir görüyoruz. Göz simgesi, masanın öbür yanındaki kişiyi gösteriyor.',
            'Karşı taraftaki kişi için sağ ile sol yer değiştirir: sıra <b>tersine döner</b>.',
            'Onun gördüğü: mor silindir, sarı küp, turuncu piramit. Önden görünüşleri: <b>dikdörtgen, kare, üçgen</b>.',
          ],
          eleme: 'A bizim gördüğümüz sıradır; B\'de ortadaki küp yerinden oynamış, oysa üç cisimde ortadaki yerinde kalır. Doğru cevap <b>C</b>.',
        },
      ],
    },
    {
      id: 'yontem',
      baslik: '5 adımda çözüm yöntemi',
      bloklar: [
        { t: 'p', html: 'Her kuş bakışı sorusunda aynı sırayı izlemek hem hızı hem doğruluğu artırır:' },
        {
          t: 'liste',
          numarali: true,
          maddeler: [
            '<b>Bakış yönünü belirle.</b> Soru üstten mi, önden mi, karşı taraftan mı soruyor? Kumdaki iz sorusu cismin tabanını sorar.',
            '<b>Her cismin o yöndeki biçimini düşün.</b> Silindir üstten daire, önden dikdörtgen; koni üstten ortası noktalı daire, önden üçgen.',
            '<b>Örtülen parçaları ele.</b> Kulelerde yukarıdan aşağı in: üstündekilerin hepsinden geniş olmayan disk görünmez.',
            '<b>Yerleri koru.</b> Üstten bakınca ön taraf alta gelir, sağ-sol değişmez; karşıdan bakınca sağ ile sol yer değiştirir.',
            '<b>Şıkları ele.</b> Önce biçime, sonra renklere, en son sıraya ve konuma bak.',
          ],
        },
        {
          t: 'kutu',
          tur: 'ipucu',
          baslik: 'Yanlış şık, başka bir bakış olabilir',
          html: 'Şıklardaki elips, dikdörtgen ya da ortası noktalı daire gibi biçimler çoğu zaman aynı cismin <b>başka bir yönden</b> görünüşü ya da başka bir cismin (ör. koninin) üstten görünüşüdür. Hangi şıkkın hangi bakıştan geldiğini söyleyebilmek, doğru şıkkı bulmayı kolaylaştırır.',
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
            '<b>Başka bir bakışı seçmek:</b> Üstten sorulduğu hâlde yandan ya da eğik bakıştaki görüntüyü (elips, dikdörtgen) seçmek.',
            '<b>Gizli diski göstermek:</b> Üstündeki daha geniş bir diskin altında kalan diski de halka olarak saymak.',
            '<b>Halka sırasını ters çevirmek:</b> En küçük diski dışa, en geniş diski içe koymak.',
            '<b>Olmayan çubuğu görmek:</b> Çubuk en üstteki diskin üstüne çıkmıyorsa, üstten ortada gri bir nokta görünmez.',
            '<b>Ön ile arkayı karıştırmak:</b> Masada öndeki cismi haritanın üst tarafına koymak.',
            '<b>Sırayı çevirmeyi unutmak:</b> Karşı taraftaki kişinin gördüğü sırayı bizim sıramızla aynı sanmak.',
            '<b>Biçim karıştırmak:</b> Koninin görünüşünü silindirinkiyle, küpünkünü döndürülmüş kareyle karıştırmak.',
          ],
        },
        {
          t: 'kutu',
          tur: 'veli',
          baslik: 'Velilere öneri',
          html: 'Çocuğunuz yanlış bir şık seçtiğinde <b>“Bu şıktaki resim, cisme nereden bakınca görülür?”</b> diye sorun. Yanlış şıkların bir kısmı başka bir yönden bakışın doğru resmidir; bunu fark etmek, bakış yönü kavramını pekiştirir.',
        },
      ],
    },
    {
      id: 'evde',
      baslik: 'Evde nasıl çalışılır?',
      bloklar: [
        {
          t: 'p',
          html: 'Kuş bakışı, evdeki eşyalarla en kolay çalışılan konulardan biridir; tek gereken, aynı eşyalara farklı yerlerden bakmaktır.',
        },
        {
          t: 'liste',
          maddeler: [
            '<b>Malzeme:</b> Bardak, konserve kutusu, küçük bir kutu, top, huni ya da koni biçimli bir oyuncak. Halka kule oyuncağı varsa disk sorularına çok benzer.',
            '<b>“Tepeden bak” oyunu:</b> 2-3 eşyayı masaya dizin. Çocuk önce üstten nasıl görüneceğini tahmin edip kâğıda çizsin, sonra bir yetişkin yanındayken sandalyeye çıkıp yukarıdan bakarak kontrol etsin.',
            '<b>Masa haritası:</b> Eşyaların yerini değiştirin; çocuk her seferinde masanın üstten haritasını çizsin. Masanın ön kenarını kâğıdın altına çizmeyi hatırlatın.',
            '<b>Karşıdan bakış:</b> Çocuk masanın öbür yanına geçip eşyaları soldan sağa yeniden saysın; sıranın nasıl tersine döndüğünü kendisi görsün.',
            '<b>Süre:</b> Haftada birkaç kez 10-15 dakika yeterli. Kısa ve düzenli çalışma, uzun ve seyrek çalışmadan daha etkilidir.',
          ],
        },
        {
          t: 'kutu',
          tur: 'veli',
          baslik: 'Soru sorarak yönlendirin',
          html: '<b>“Bir kuş tepeden baksa ne görür?”</b>, <b>“Bu diskin kenarı, üstündekinin dışına taşıyor mu?”</b>, <b>“Karşıdaki kişinin solunda hangisi var?”</b> gibi sorular, çocuğun kuralı kendisinin bulmasını sağlar. Tahmin edip sonra gerçekten bakmak, kalıcı bir öğrenme yoludur.',
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
            { soru: '2-kus-bakisi-easy-test05-q06', aciklama: 'Üstten yalnız silindirin üst yüzü görünür: düz, yeşil bir daire. A\'daki mavi daire yan yüzün rengidir; B\'deki ortası noktalı daire koninin, C\'deki halka ise içi boş bir borunun üstten görünüşüdür.' },
            { soru: '1-kus-bakisi-easy-test01-q09', aciklama: 'En üstteki mavi disk en geniş olduğu için altındaki iki diski tamamen örter: üstten tek bir mavi daire görünür. Çubuk mavi diskin üstüne çıkmadığı için ortada gri nokta da görünmez.' },
            { soru: '3-kus-bakisi-easy-test01-q03', aciklama: 'Kumda iz bırakan, silindirin tabanıdır: tam bir daire. Elips eğik bakınca, dikdörtgen önden bakınca görülür; halka ise ortası boş bir cismin izidir.' },
            { soru: '3-kus-bakisi-medium-test01-q05', aciklama: 'Kırmızı disk hepsinden geniş ve mor ile turuncu disklerin üstünde durduğu için onları örter. Üstten kırmızı bir halkanın ortasında en üstteki turkuaz disk görünür.' },
            { soru: '2-kus-bakisi-medium-test01-q10', aciklama: 'Turuncu disk üstündeki pembeden, en alttaki sarı disk de üstündeki turkuazdan dar: bu ikisi görünmez. Üstten yalnız pembe ile turkuaz görünür; 2 disk gizli kalır.' },
            { soru: '3-kus-bakisi-medium-test01-q07', aciklama: 'Önden kare piramit üçgen, yukarı doğru genişleyen bardak üstü geniş bir yamuk, küp kare görünür. Sıra soldan sağa korunur: üçgen, yamuk, kare.' },
            { soru: '1-kus-bakisi-hard-test01-q06', aciklama: 'Arkadaki simit (solda) ve yumurta (sağda) haritanın üst sırasına, öndeki kalp (solda) ve beşgen prizma (sağda) alt sırasına gelir. B\'de ön ile arka yer değiştirmiş; C\'de yumurtanın yerinde altıgen var.' },
            { soru: '3-kus-bakisi-hard-test01-q12', aciklama: 'Her kule ayrı düşünülür ve sıra korunur: solda sarı daire, ortada turuncu daire, sağda kırmızı diskin çevresinde yeşil bir halka (alttaki yeşil disk kırmızıdan geniş).' },
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
      baslik: 'Yukarıdan bak: “Üstten görünüşü hangisidir?”',
      soru: '1-kus-bakisi-easy-test01-q01',
      maddeler: ['Cisme üstten, önden ya da karşıdan bakılır', 'Şıklarda farklı bakışların görüntüleri var', 'Doğru bakışı zihinde canlandır'],
    },
    { t: 'metin', ust: 'Kural 1', baslik: 'Üç yönden üç farklı görüntü', diyagram: 'ucGorunus', maddeler: ['Üstten: tepe ve en geniş çizgi', 'Önden ve yandan: dış çizgi (siluet)'] },
    { t: 'metin', ust: 'Kural 2', baslik: 'Geniş olan, dar olanı örter', diyagram: 'ortme', maddeler: ['Dar disk, geniş diskin altında kalır', 'Üstten: dıştan içe halkalar'] },
    { t: 'metin', ust: 'Kural 3', baslik: 'Ön kenar haritanın altına gelir', diyagram: 'masa', maddeler: ['Arkadakiler üstte, öndekiler altta', 'Sağ ile sol değişmez'] },
    { t: 'metin', ust: 'Kural 4', baslik: 'Karşıdan bakınca sıra tersine döner', diyagram: 'karsidan', maddeler: ['Baştaki sona, sondaki başa geçer', 'Ortadaki yerinde kalır'] },
    { t: 'metin', ust: 'Kural 5', baslik: 'Kumdaki iz, cismin tabanıdır', diyagram: 'iz', maddeler: ['Koni ve bardak: daire', 'Simit: halka, küp: kare'] },
    { t: 'soru', ust: 'Örnek 1 · Disk kulesi', baslik: 'Üstten nasıl görünür?', soru: '2-kus-bakisi-medium-test01-q01' },
    {
      t: 'cevap',
      ust: 'Örnek 1 · Çözüm',
      baslik: 'Dar disk, geniş diskin altında kalır',
      soru: '2-kus-bakisi-medium-test01-q01',
      adimlar: ['Mavi en üstte: görünür.', 'Kırmızı, turuncudan dar: görünmez.', 'Dıştan içe: sarı, turuncu, mavi.'],
    },
    { t: 'soru', ust: 'Örnek 2 · Masa', baslik: 'Masanın üstten görünüşü hangisi?', soru: '3-kus-bakisi-medium-test01-q14' },
    {
      t: 'cevap',
      ust: 'Örnek 2 · Çözüm',
      baslik: 'Ön kenar haritanın altında',
      soru: '3-kus-bakisi-medium-test01-q14',
      adimlar: ['Küp ve yumurta arkada: üst sıra.', 'Altıgen prizma önde sağda: alt sıra.', 'Biçimler: kare, oval, altıgen.'],
    },
    { t: 'soru', ust: 'Örnek 3 · Önden bakış', baslik: 'Önden nasıl görünür?', soru: '2-kus-bakisi-easy-test01-q08' },
    {
      t: 'cevap',
      ust: 'Örnek 3 · Çözüm',
      baslik: 'Önden dış çizgi görünür',
      soru: '2-kus-bakisi-easy-test01-q08',
      adimlar: ['Yatan simit: basık bir şerit.', 'Koni: üçgen.', 'Sıra aynı: simit solda, koni sağda.'],
    },
    { t: 'soru', ust: 'Örnek 4 · Karşıdan bakış', baslik: 'Karşıdaki kişi hangi sırayla görür?', soru: '1-kus-bakisi-hard-test01-q02' },
    {
      t: 'cevap',
      ust: 'Örnek 4 · Çözüm',
      baslik: 'Sağ ile sol yer değiştirir',
      soru: '1-kus-bakisi-hard-test01-q02',
      adimlar: ['Biz: piramit, küp, silindir.', 'Karşıdaki: silindir, küp, piramit.', 'Önden: dikdörtgen, kare, üçgen.'],
    },
    {
      t: 'metin',
      ust: 'Yöntem',
      baslik: '5 adımda çözüm',
      numarali: true,
      maddeler: ['Bakış yönünü belirle', 'Cismin o yöndeki biçimini düşün', 'Örtülen parçaları ele', 'Yerleri koru: ön alta, sağ sağda', 'Şıkları ele: biçim → renk → sıra'],
    },
    {
      t: 'metin',
      ust: 'Dikkat',
      baslik: 'Çeldirici tuzakları',
      maddeler: ['Yandan görünüşü üstten sanmak', 'Gizli diski de göstermek', 'Halka sırasını ters çevirmek', 'Masada ön ile arkayı karıştırmak', 'Karşıdan bakışta sırayı çevirmemek'],
    },
    {
      t: 'metin',
      ust: 'Evde',
      baslik: '“Tepeden bak” oyunu',
      maddeler: ['Bardak, kutu, top, huni: masaya diz', 'Önce tahmin et, sonra yukarıdan bak', 'Masanın üstten haritasını çiz', 'Karşı tarafa geç, sırayı yeniden söyle'],
    },
    { t: 'kapanis' },
  ],
};

export default konu;
