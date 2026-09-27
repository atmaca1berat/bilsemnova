import type { Konu } from '../konu-tipleri';

// Labirent konu anlatımı. Örneklerin ve alıştırmaların hepsi görselden bağımsız çözüldü: yol gözle izlendi ve
// ayrıca SVG'deki duvarlardan kurulan ızgarada yol aranarak doğrulandı; sonra cevap anahtarıyla karşılaştırıldı
// (27 Eylül 2026). Labirent soruları yalnız 1. sınıf bankasında var; 2 ve 3. sınıf öğrencileri de aynı soruları çözer.
// Girişler görselde A, B, C diye etiketli ve şıklar da aynı harflerle aynı sırada; metinde "A girişi" = A şıkkı.

const konu: Konu = {
  slug: 'labirent',
  ad: 'Labirent',
  alan: 'Görsel Yetenek ve Algı',
  siniflar: '1-3. sınıf',
  ozet: 'Labirent soruları nasıl çözülür? 5 temel kural, 7 çözümlü örnek ve 8 alıştırmayla BİLSEM hazırlığı için ücretsiz konu anlatımı.',
  giris:
    'Labirent sorularında üstte harflerle gösterilmiş üç giriş, altta ise bir hedef vardır. Çocuktan, duvarların arasından ilerleyerek hedefe ulaşan tek girişi bulması beklenir. Bu anlatımda labirenti hızlı ve hatasız çözmenin beş temel kuralını, adım adım çözülmüş örnekleri ve alıştırmaları bulacaksınız.',
  okumaDakika: 11,
  uygulamadakiSoru: 90,
  guncelleme: '2026-09-27',
  bolumler: [
    {
      id: 'nedir',
      baslik: 'Labirent soruları nedir?',
      bloklar: [
        {
          t: 'p',
          html: 'Labirent; görsel tarama, planlama ve dikkat becerilerini çalıştıran bir soru tipidir; zekâ testlerinde ve BİLSEM\'e hazırlık materyallerinde sık karşılaşılır. Soruda üstte <b>A, B ve C</b> diye işaretlenmiş üç giriş vardır. Labirentin alt duvarındaki tek açıklığın önünde de bir hedef durur: peynir, havuç, kek, yıldız, çiçek ya da balık.',
        },
        { t: 'sorugorsel', soru: '1-lab-easy-002', aciklama: 'Örnek bir labirent sorusu: üstte A, B ve C girişleri, altta bir havuç. Hangi girişten girilirse havuca ulaşılır?' },
        {
          t: 'p',
          html: 'Soru hep aynıdır: <b>“Hangi girişten girersek havuca (ya da peynire, keke…) ulaşırız?”</b> Yalnız bir girişin yolu hedefe varır; öbür girişlerin yolları çıkmazlarda biter. Çocuk doğru yolu ararken şu becerileri birlikte kullanır:',
        },
        {
          t: 'liste',
          maddeler: [
            '<b>Görsel tarama:</b> Duvarların arasındaki koridorları gözüyle izlemek.',
            '<b>Planlama:</b> Nereden başlayacağına karar vermek: girişten mi, hedeften mi?',
            '<b>Dikkat ve sabır:</b> Dönemeçlerde yolu kaybetmeden ilerlemek.',
            '<b>Eleme:</b> Çıkmaza giren yolları hatırlayıp bir daha denememek.',
          ],
        },
        {
          t: 'p',
          html: 'BilsemNova uygulamasında kolay, orta ve zor olmak üzere üç seviyede toplam <b>90 labirent sorusu</b> var. Kolay labirentler 8 sütun ve 6 sıradan, orta labirentler 10×7, zor labirentler 12×8 kareden oluşur. Sorular 1. sınıf soru bankasında yer alır; 2 ve 3. sınıf öğrencileri de aynı labirentleri çözer.',
        },
      ],
    },
    {
      id: 'kurallar',
      baslik: 'Beş temel kural',
      bloklar: [
        {
          t: 'p',
          html: 'Labirentte şansa yer yoktur: doğru yol, duvarların arasından kesintisiz giden tek yoldur. Aşağıdaki beş kural bu yolu hızlı ve hatasız bulmayı sağlar.',
        },
        {
          t: 'kural',
          no: 1,
          baslik: 'Hedeften geriye doğru çalış',
          html: 'Üç girişi tek tek denemek yerine <b>hedeften başlayın</b>: hedefin önündeki açıklıktan labirente girin ve yolu geriye doğru izleyin. Hedefe giden yol tektir; geriye doğru izlediğinizde hangi girişe çıktığını görürsünüz. Böylece öbür girişlerin çıkmazlarında hiç dolaşmazsınız.',
          diyagram: 'geriye',
        },
        {
          t: 'kural',
          no: 2,
          baslik: 'Çıkmaz sokakları ele',
          html: 'Üç yanı duvarla kapalı koridor bir <b>çıkmazdır</b>. Yolu izlerken çıkmaza girerseniz son yol ayrımına dönüp öbür kolu deneyin. Denediğiniz çıkmazı parmağınızla kapatmak ya da kurşun kalemle çarpı koymak, aynı yere tekrar girmenizi önler.',
          diyagram: 'cikmaz',
        },
        {
          t: 'kural',
          no: 3,
          baslik: 'Duvarın üstünden atlama, ucundan dolan',
          html: 'Yol yalnız duvarların arasındaki boşluklardan geçer. Bir duvar çizgisinin üstünden geçilemez; ama duvarın bittiği yerden, yani <b>ucundan dolanılabilir</b>. Parmağınızla ya da kalemle ilerlerken çizgilere değmemeye dikkat edin.',
          diyagram: 'izle',
        },
        {
          t: 'kural',
          no: 4,
          baslik: 'Önce girişlerin hemen altına bak',
          html: 'Bazı girişler birkaç adım sonra kapanır. Her girişin ilk birkaç karesine hızlıca bakın ve <b>hemen kapanan girişi baştan eleyin</b>. Kalan girişlerin yolunu izlemek daha kısa sürer.',
          diyagram: 'girisAlti',
        },
        {
          t: 'kural',
          no: 5,
          baslik: 'Başka bir girişe çıkan yol yanlıştır',
          html: 'Bazen iki giriş labirentin içinde birbirine bağlanır: birinden girip öbüründen dışarı çıkarsınız. Bu yol ne kadar uzun olursa olsun <b>hedefe varmaz</b>; birbirine bağlı iki giriş de yanlıştır.',
          diyagram: 'bagli',
        },
        {
          t: 'kutu',
          tur: 'dikkat',
          baslik: 'Çıkış, hedefin hemen üstündeki açıklıktır',
          html: 'Hedefin resmi labirentin dışında, alt duvardaki açıklığın önünde durur. Alt duvarda başka açıklık yoktur. Yolu izlerken hedefin kendisine değil, <b>hemen üstündeki açıklığa</b> varmayı amaçlayın.',
        },
      ],
    },
    {
      id: 'kolay',
      baslik: 'Kolay labirentler (8×6)',
      bloklar: [
        {
          t: 'p',
          html: 'Kolay labirentler 8 sütun ve 6 sıradan oluşur; doğru yol çoğunlukla 20 kare kadardır. Bu seviyede girişlerden başlamak da işe yarar; yine de hedeften geriye çalışmayı şimdiden alışkanlık hâline getirmek, büyük labirentlerde çok zaman kazandırır.',
        },
        {
          t: 'ornek',
          soru: '1-lab-easy-002',
          baslik: 'Havuca giden yol: çıkmazları ele',
          adimlar: [
            'Havuç, alt duvarın ortasına yakın bir açıklığın önünde. Önce girişlerin hemen altına bakalım.',
            'C girişinden girince yalnız bir kare sağa gidilebiliyor; altı ve yanı duvar. C hemen elenir.',
            'A girişinin yolu sol kenardaki kapalı bir bölmeye iner ve orada biter; bu bölmeden havuca açılan bir kapı yok.',
            'Havuçtan geriye doğru izleyelim: yol kısa zikzaklarla yukarı çıkar ve <b>B girişine</b> varır.',
          ],
          eleme: 'C hemen kapanıyor, A sol bölmede çıkmaza varıyor. Doğru cevap <b>B</b>.',
        },
        {
          t: 'ornek',
          soru: '1-lab-easy-010',
          baslik: 'Yıldıza giden yol: hedeften geriye',
          adimlar: [
            'Yıldız, alt duvarın ortasına yakın bir açıklığın önünde. Yıldızdan labirente girip geriye doğru gidelim.',
            'Yol bir kare sağa geçip yukarı çıkar, ters bir U çizerek aşağı iner, sonra sola döner.',
            'Sol kenardaki uzun koridora varınca dümdüz yukarı çıkar: bu koridorun ucu <b>A girişidir</b>.',
            'B ile C girişleri içeride birbirine bağlıdır: B\'den giren, dolaşıp C\'den dışarı çıkar; yıldıza inen bir yolları yoktur.',
          ],
          eleme: 'B ve C birbirine bağlı ama yıldıza varmıyor. Doğru cevap <b>A</b>.',
        },
      ],
    },
    {
      id: 'orta',
      baslik: 'Orta labirentler (10×7)',
      bloklar: [
        {
          t: 'p',
          html: 'Orta labirentler 10 sütun ve 7 sıradan oluşur; doğru yol çoğunlukla 30 kare kadardır ve daha çok dönemeç içerir. Bu seviyede hedeften geriye çalışmak ve çıkmazları işaretlemek belirgin şekilde zaman kazandırır.',
        },
        {
          t: 'ornek',
          soru: '1-lab-medium-016',
          baslik: 'Yıldıza giden kısa yol',
          adimlar: [
            'Önce girişlerin altına bakalım: C\'nin hemen altı ve yanları kapalı, bu giriş ilk karede biter.',
            'B girişinden girince sağdaki büyük bölüme varılır. Bu bölümde çok sayıda koridor ve çıkmaz var ama hiçbiri yıldızın önündeki açıklığa inmiyor.',
            'Yıldızdan geriye doğru gidelim: yol sola döner, sol kenar boyunca kısa zikzaklarla yukarı çıkar ve <b>A girişine</b> varır.',
            'Hedeften başlamak burada büyük zaman kazandırır: B\'nin büyük bölümünü dolaşmaya gerek kalmaz.',
          ],
          eleme: 'C hemen kapanıyor, B sağdaki bölümde çıkmazlara varıyor. Doğru cevap <b>A</b>.',
        },
        {
          t: 'ornek',
          soru: '1-lab-medium-009',
          baslik: 'Keke giden uzun yol',
          adimlar: [
            'Kek, alt duvarın sol tarafındaki açıklığın önünde. Kekten geriye doğru gidelim.',
            'Yol yukarı çıkıp ters bir U çizer, sonra en alttaki uzun koridordan sağa gider.',
            'Sağ kenarda zikzaklar çizerek yukarı tırmanır; en üstte sola döner ve <b>C girişine</b> varır.',
            'A ve B girişlerinin yolları üst kısımdaki küçük bölmelerde dolaşır ve çıkmazlarda biter.',
          ],
          eleme: 'A ve B üstteki bölmelerde kalıyor. Doğru cevap <b>C</b>.',
        },
      ],
    },
    {
      id: 'zor',
      baslik: 'Zor labirentler (12×8)',
      bloklar: [
        {
          t: 'p',
          html: 'Zor labirentler 12 sütun ve 8 sıradan oluşur; doğru yol 40 kareyi geçebilir ve pek çok dönemeç içerir. Bu seviyede kuralları birlikte kullanmak gerekir: önce hemen kapanan girişleri eleyin, sonra hedeften geriye doğru izleyin.',
        },
        {
          t: 'ornek',
          soru: '1-lab-hard-029',
          baslik: 'Çiçeğe giden yol: önce kapanan girişler',
          adimlar: [
            'A girişinden girince üst sırada yalnız iki kare sağa gidilebiliyor, sonra yol kapanıyor. A hemen elenir.',
            'C girişinin yolu da kısa bir kıvrımdan sonra sağ üstteki küçük bölmede çıkmaza varır.',
            'Geriye yalnız B kaldı. Yine de kontrol edelim: çiçekten geriye doğru gidince yol sola kıvrılır, sol kenardan yukarı çıkar, üst sıralarda sağa doğru dolanır ve <b>B girişine</b> varır.',
          ],
          eleme: 'A ve C birkaç adımda kapanıyor. Doğru cevap <b>B</b>.',
        },
        {
          t: 'ornek',
          soru: '1-lab-hard-019',
          baslik: 'Peynire giden yol: hedeften geriye',
          adimlar: [
            'Peynir, alt duvarın sağ tarafındaki açıklığın önünde. Peynirden geriye doğru gidelim.',
            'Yol önce yukarı çıkıp ortadaki bir koridordan sola uzanır, sonra sol alttaki dolambaçlı bölümde birkaç kez aşağı yukarı kıvrılır.',
            'Sol kenara varınca oradaki koridordan yukarı çıkar ve <b>A girişine</b> ulaşır.',
            'B girişinin yolu üst ortadaki, C girişinin yolu sağ kenardaki bölmede dolaşır; ikisi de çıkmazla biter.',
          ],
          eleme: 'B ve C kendi bölmelerinde çıkmaza varıyor. Doğru cevap <b>A</b>.',
        },
        {
          t: 'ornek',
          soru: '1-lab-hard-024',
          baslik: 'Balığa giden yol',
          adimlar: [
            'Balık, alt duvarın sol tarafındaki açıklığın önünde. A girişinin yolu sol kenardaki dar koridorlarda kalır; B girişinin yolu üst taraftaki bölmede çıkmaza varır.',
            'Balıktan geriye doğru gidelim: yol yukarı çıkar, sonra alt sıralarda aşağı yukarı dalgalanarak sağa doğru uzanır.',
            'Sağ tarafa varınca yukarı tırmanır, üstte sola döner ve birkaç dolambaçtan sonra <b>C girişine</b> ulaşır.',
          ],
          eleme: 'A ve B kendi bölmelerinde kalıyor. Doğru cevap <b>C</b>.',
        },
        {
          t: 'kutu',
          tur: 'ipucu',
          baslik: 'Kalemle işaretleyin',
          html: 'Büyük labirentlerde kurşun kalemle çalışmak işi kolaylaştırır: denediğiniz çıkmazın girişine küçük bir çarpı koyun, doğru yolu hafifçe çizin. Ekranda çözerken parmakla izleyin ve çıkmazları sesli söyleyin: <b>“Burası kapalı, geri dönüyorum.”</b>',
        },
      ],
    },
    {
      id: 'yontem',
      baslik: '5 adımda çözüm yöntemi',
      bloklar: [
        { t: 'p', html: 'Her labirent sorusunda aynı sırayı izlemek hem hızı hem doğruluğu artırır:' },
        {
          t: 'liste',
          numarali: true,
          maddeler: [
            '<b>Hedefi ve çıkışı bul.</b> Hedefin hemen üstündeki açıklık, labirentin tek çıkışıdır.',
            '<b>Girişlerin altına bak.</b> İlk birkaç karede kapanan girişleri hemen ele.',
            '<b>Hedeften geriye doğru izle.</b> Çıkıştan labirente gir ve yolu adım adım geriye takip et.',
            '<b>Yol ayrımlarında dikkatli ol.</b> Bir kol çıkmaza varırsa son ayrıma dön, öbür kolu dene ve çıkmazı işaretle.',
            '<b>Vardığın girişi kontrol et.</b> Yol bir girişe ulaşınca aynı yolu bu kez girişten hedefe doğru bir kez daha izle.',
          ],
        },
        {
          t: 'kutu',
          tur: 'ipucu',
          baslik: 'Geriye çalışmak neden hızlı?',
          html: 'Girişten başlayan çocuk üç yolu da denemek zorunda kalabilir. Hedeften başlayan ise yalnız hedefe bağlı koridorlarda dolaşır; yanlış girişlerin bölmelerine hiç girmez.',
        },
      ],
    },
    {
      id: 'tuzaklar',
      baslik: 'Çeldirici tuzakları ve sık yapılan hatalar',
      bloklar: [
        { t: 'p', html: 'Labirentte yanlış girişler de doğru girişe çok benzer: hepsi içeriye açılır, bazıları uzun süre ilerler. En sık yapılan hatalar:' },
        {
          t: 'liste',
          maddeler: [
            '<b>En yakın giriş tuzağı:</b> Hedefin üstüne en yakın giriş doğru sanılır. Oysa uygulamadaki labirentlerin çoğunda doğru yol uzaktaki bir girişten dolanarak gelir.',
            '<b>Duvardan geçmek:</b> Gözle izlerken ince bir duvar çizgisinin üstünden atlanır.',
            '<b>Yolu kaybetmek:</b> Uzun koridorlarda ya da dönemeçlerde göz yandaki koridora kayar.',
            '<b>Başka girişe çıkan yol:</b> Uzun bir yol bulunca sevinip, bu yolun hedefe değil başka bir girişe çıktığı gözden kaçar.',
            '<b>Acele etmek:</b> İlk denenen girişin yolu biraz ilerleyince doğru sanılır; yol sonuna kadar izlenmez.',
          ],
        },
        {
          t: 'kutu',
          tur: 'veli',
          baslik: 'Velilere öneri',
          html: 'Çocuğunuz yanlış girişi seçtiğinde yolu onunla birlikte parmakla izleyin ve <b>“Bu yol nerede bitti?”</b> diye sorun. Çıkmazı kendi gözüyle gören çocuk, bir sonraki labirentte aynı yere daha dikkatli bakar.',
        },
      ],
    },
    {
      id: 'evde',
      baslik: 'Evde nasıl çalışılır?',
      bloklar: [
        {
          t: 'p',
          html: 'Labirent becerisi kâğıt-kalem oyunlarıyla ve günlük hayattaki yol bulma oyunlarıyla kolayca gelişir.',
        },
        {
          t: 'liste',
          maddeler: [
            '<b>Kalemle labirent:</b> Çocuk dergilerindeki ya da yazdırılmış basit labirentleri önce parmakla, sonra kurşun kalemle çözün. Kolaydan zora doğru ilerleyin.',
            '<b>Kendi labirentini çiz:</b> Kareli kâğıda birlikte küçük bir labirent çizin; bir giriş hedefe gitsin, öbürleri çıkmazda bitsin. Sonra çocuk çizdiği labirenti size çözdürsün.',
            '<b>Evde yol bulma:</b> Yastık ve sandalyelerle salonda bir parkur kurun ya da bir oyuncağı saklayıp <b>“Kapıdan oraya nasıl gideriz?”</b> diye rotayı tarif ettirin.',
            '<b>Süre:</b> Haftada birkaç kez 10-15 dakika yeterlidir. Süre tutmayın; önce doğru, sonra hızlı çözmek önemlidir.',
          ],
        },
        {
          t: 'kutu',
          tur: 'veli',
          baslik: 'Soru sorarak yönlendirin',
          html: '<b>“Nereden başlamak daha kolay olur?”</b>, <b>“Bu koridor nereye çıkıyor?”</b>, <b>“Hangi girişleri eleyebiliriz?”</b> gibi sorular çocuğun plan yapmasını sağlar. Yanlış girişi denemek de öğrenmenin bir parçasıdır.',
        },
      ],
    },
    {
      id: 'alistirma',
      baslik: 'Alıştırmalar',
      bloklar: [
        { t: 'p', html: 'Aşağıdaki 8 labirenti çocuğunuzla birlikte çözün. Her sorunun altındaki düğmeyle cevabı ve kısa açıklamasını görebilirsiniz.' },
        {
          t: 'alistirma',
          sorular: [
            { soru: '1-lab-easy-021', aciklama: 'Kekten geriye doğru gidince yol sağa, sonra kısa kıvrımlarla yukarı çıkarak C girişine varır. A sol üstteki, B üst ortadaki küçük bölmede çıkmaza girer.' },
            { soru: '1-lab-easy-029', aciklama: 'A sol üstteki, C sağ üstteki küçük bölmede kapanır. Çiçekten geriye doğru gidince yol sağa doğru kıvrılır, sonra yukarı çıkıp B girişine varır.' },
            { soru: '1-lab-easy-004', aciklama: 'B girişinin yolu birkaç kare sonra kapanır; C\'ninki sağ taraftaki bölmede dolaşıp çıkmaza varır. Yıldızdan geriye doğru gidince yol sola uzanır, sonra yukarı çıkıp A girişine varır.' },
            { soru: '1-lab-medium-012', aciklama: 'A sol kenardaki, B ortadaki bölmede çıkmaza varır. Balıktan geriye doğru gidince yol alt sıralarda sağa doğru dalgalanır, sağ kenardan yukarı çıkar ve üstte sola dönerek C girişine varır.' },
            { soru: '1-lab-medium-020', aciklama: 'C girişi üst sıradaki üç karelik koridorda kapanır; A\'nın yolu soldaki dar koridorda çıkmaza varır. Havuçtan geriye doğru gidince yol zikzaklarla yukarı çıkıp B girişine varır.' },
            { soru: '1-lab-medium-004', aciklama: 'B ile C girişleri içeride birbirine bağlıdır: B\'den giren, dolaşıp C\'den çıkar ama yıldıza inemez. Yıldızdan geriye doğru gidince yol birkaç kez kıvrılarak sola ve yukarı ilerler, A girişine varır.' },
            { soru: '1-lab-hard-026', aciklama: 'A sol üstteki, C sağ taraftaki bölmede çıkmaza varır. Havuçtan geriye doğru gidince yol sol kenardan yukarı çıkar, sağa doğru dalgalanarak alt sıralara iner, sağ altta yukarı döner ve B girişine varır.' },
            { soru: '1-lab-hard-015', aciklama: 'A ile B girişleri sol üstte birbirine bağlıdır ve çıkmazla biter. Kekten geriye doğru gidince yol sol tarafta kıvrılıp alttaki koridordan sağa gider, sağ kenardan yukarı çıkar ve C girişine varır.' },
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
      baslik: 'Üç giriş, bir hedef: “Hangi girişten girersek ulaşırız?”',
      soru: '1-lab-easy-002',
      maddeler: ['Üstte A, B ve C girişleri', 'Altta, açıklığın önünde hedef', 'Yalnız bir girişin yolu hedefe varır'],
    },
    { t: 'metin', ust: 'Kural 1', baslik: 'Hedeften geriye doğru çalış', diyagram: 'geriye', maddeler: ['Hedefin önündeki açıklıktan gir.', 'Yolu geriye izle, vardığın girişe bak.'] },
    { t: 'metin', ust: 'Kural 2', baslik: 'Çıkmaz sokakları ele', diyagram: 'cikmaz', maddeler: ['Üç yanı kapalı koridor çıkmazdır.', 'Çıkmazı işaretle, son ayrıma dön.'] },
    { t: 'metin', ust: 'Kural 3', baslik: 'Duvarın üstünden atlama, ucundan dolan', diyagram: 'izle', maddeler: ['Duvar çizgisinin üstünden geçilmez.', 'Duvarın bittiği uçtan dolanılır.'] },
    { t: 'metin', ust: 'Kural 4', baslik: 'Önce girişlerin hemen altına bak', diyagram: 'girisAlti', maddeler: ['Her girişin ilk karelerine bak.', 'Hemen kapanan girişi ele.'] },
    { t: 'metin', ust: 'Kural 5', baslik: 'Başka girişe çıkan yol yanlıştır', diyagram: 'bagli', maddeler: ['Birbirine bağlı girişler hedefe varmaz.', 'Bağlı iki giriş de yanlıştır.'] },
    { t: 'soru', ust: 'Örnek 1 · Kolay', baslik: 'Hangi girişten girersek yıldıza ulaşırız?', soru: '1-lab-easy-010' },
    {
      t: 'cevap',
      ust: 'Örnek 1 · Çözüm',
      baslik: 'Yıldızdan geriye: A girişi',
      soru: '1-lab-easy-010',
      adimlar: ['Yıldızdan gir, ters U\'yu izle.', 'Sol kenardan dümdüz yukarı çık: A.', 'B ile C birbirine bağlı, yıldıza inmiyor.'],
    },
    { t: 'soru', ust: 'Örnek 2 · Orta', baslik: 'Hangi girişten girersek keke ulaşırız?', soru: '1-lab-medium-009' },
    {
      t: 'cevap',
      ust: 'Örnek 2 · Çözüm',
      baslik: 'Uzun yol, tek çıkış: C girişi',
      soru: '1-lab-medium-009',
      adimlar: ['Kekten geriye: ters U, sonra alt koridor.', 'Sağ kenardan zikzakla yukarı çık.', 'Üstte sola dön: C girişi.'],
    },
    { t: 'soru', ust: 'Örnek 3 · Zor', baslik: 'Hangi girişten girersek çiçeğe ulaşırız?', soru: '1-lab-hard-029' },
    {
      t: 'cevap',
      ust: 'Örnek 3 · Çözüm',
      baslik: 'Önce kapanan girişleri ele',
      soru: '1-lab-hard-029',
      adimlar: ['A iki kare sonra kapanıyor.', 'C sağ üstteki bölmede çıkmaza varıyor.', 'Çiçekten geriye izle: yol B\'ye çıkıyor.'],
    },
    { t: 'soru', ust: 'Örnek 4 · Zor', baslik: 'Hangi girişten girersek peynire ulaşırız?', soru: '1-lab-hard-019' },
    {
      t: 'cevap',
      ust: 'Örnek 4 · Çözüm',
      baslik: 'Peynirden geriye: A girişi',
      soru: '1-lab-hard-019',
      adimlar: ['Peynirden gir, ortadaki koridordan sola uzan.', 'Sol alttaki dolambaçlardan geç.', 'Sol kenardan yukarı çık: A girişi.'],
    },
    {
      t: 'metin',
      ust: 'Yöntem',
      baslik: '5 adımda çözüm',
      numarali: true,
      maddeler: ['Hedefi ve çıkışı bul', 'Girişlerin altına bak, kapananı ele', 'Hedeften geriye doğru izle', 'Çıkmazı işaretle, ayrıma dön', 'Yolu girişten bir kez daha kontrol et'],
    },
    {
      t: 'metin',
      ust: 'Dikkat',
      baslik: 'Sık yapılan hatalar',
      maddeler: ['En yakın girişi doğru sanmak', 'Duvarın üstünden geçmek', 'Dönemeçte yolu kaybetmek', 'Başka girişe çıkan yolu doğru sanmak', 'Yolu sonuna kadar izlememek'],
    },
    {
      t: 'metin',
      ust: 'Evde',
      baslik: 'Kalemle, parmakla, parkurla',
      maddeler: ['Basit labirentleri önce parmakla çöz', 'Kareli kâğıda birlikte labirent çiz', 'Evde parkur kur, rotayı tarif ettir', 'Haftada birkaç kez 10-15 dakika'],
    },
    { t: 'kapanis' },
  ],
};

export default konu;
