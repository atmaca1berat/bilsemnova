import type { Konu } from '../konu-tipleri';

// Olay sıralama konu anlatımı. Örneklerin ve alıştırmaların hepsi soru görselinden bağımsız çözüldü
// ve cevap anahtarıyla karşılaştırıldı (27 Eylül 2026). Yalnız ters sırası fiziksel olarak olamayan değişimler
// (bitki büyür, civciv çıkar, buz erir, mum yanar, elma yenir, ev yapılır) kullanıldı; döngüsel ya da iki yönlü
// okunabilen diziler (mevsimler, ay evreleri, bardak doldurma gibi) seçilmedi.

const konu: Konu = {
  slug: 'olay-siralama',
  ad: 'Olay Sıralama',
  alan: 'Mantık ve Muhakeme',
  siniflar: '1-3. sınıf',
  ozet: 'Olay sıralama soruları nasıl çözülür? Başı ve sonu bulma, neden-sonuç ve geri dönmeyen değişim kuralları, 7 çözümlü örnek ve 8 alıştırma.',
  giris:
    'Olay sıralama sorularında karışık verilen üç ya da dört resim, olayların oluş sırasına göre dizilir. Çocuktan, resimlerdeki değişimi fark edip hangisinin önce, hangisinin sonra olduğunu bulması beklenir. Bu anlatımda soruların arkasındaki beş kuralı, adım adım çözülmüş örnekleri ve alıştırmaları bulacaksınız.',
  okumaDakika: 12,
  uygulamadakiSoru: 270,
  guncelleme: '2026-09-27',
  bolumler: [
    {
      id: 'nedir',
      baslik: 'Olay sıralama soruları nedir?',
      bloklar: [
        {
          t: 'p',
          html: 'Olay sıralama, zaman içinde olan bir değişimi doğru sıraya koymaktır: bir tohumun çiçeğe dönüşmesi, bir mumun yanarak kısalması ya da bir evin yapılması gibi. Okul öncesi ve ilkokul etkinliklerinde, BİLSEM\'e hazırlık materyallerinde sık görülen bir soru tipidir. Uygulamada resimler karışık verilir ve her birinin köşesinde <b>renkli bir numara</b> bulunur.',
        },
        { t: 'sorugorsel', soru: '1-olay-easy-001', aciklama: 'Örnek bir olay sıralama sorusu: saksıda filiz (1), tohum (2) ve açmış çiçek (3) karışık sırada verilmiş.' },
        {
          t: 'p',
          html: 'Soru hep aynıdır: <b>“Olayların doğru sırası hangisidir?”</b> Şıklarda numaralar oklarla dizilir; örneğin <b>3 → 1 → 2</b>, “önce 3 numaralı resim, sonra 1, en son 2” demektir. Çocuk bu sırada şu becerileri birlikte kullanır:',
        },
        {
          t: 'liste',
          maddeler: [
            '<b>Zaman kavramı:</b> Önce, sonra, en sonunda ilişkisini kurmak.',
            '<b>Neden-sonuç:</b> Bir değişimin hangi olaydan sonra gelebileceğini düşünmek.',
            '<b>Dikkatli gözlem:</b> Mumun boyu, yumurtadaki ince çatlak gibi küçük farkları görmek.',
            '<b>Sıralama:</b> Üç ya da dört adımı bir düzene koyup şıklarla karşılaştırmak.',
          ],
        },
        {
          t: 'p',
          html: 'BilsemNova uygulamasında 1, 2 ve 3. sınıf için 90\'ar, toplam <b>270 olay sıralama sorusu</b> var. Sahneler üç sınıfta ortaktır; 1. sınıfta 3, 2 ve 3. sınıfta 4 şık bulunur. Kolay ve orta seviyedeki sorularda üç, zor seviyedeki sorularda dört resim sıralanır.',
        },
      ],
    },
    {
      id: 'kurallar',
      baslik: 'Beş temel kural',
      bloklar: [
        { t: 'p', html: 'Olay sıralama sorularının hepsi aynı soruya dayanır: “Bu değişim hangi yönde olur?” Aşağıdaki beş kural, bu soruyu adım adım cevaplamayı sağlar.' },
        {
          t: 'kural',
          no: 1,
          baslik: 'Önce başlangıcı ve sonu bul',
          html: 'Başlangıç, <b>henüz hiçbir şeyin değişmediği</b> resimdir: ekilmiş tohum, bütün yumurta, yeni mum. Son, <b>değişimin tamamlandığı</b> resimdir: açmış çiçek, çıkmış civciv, erimiş buz. Baş ve son bulununca ortadaki resim kendiliğinden yerine oturur.',
          diyagram: 'basSon',
        },
        {
          t: 'kural',
          no: 2,
          baslik: 'Neden-sonuç: her adım bir öncekine dayanır',
          html: 'Her resim, bir önceki resimde olanın <b>sonucudur</b>. Çatı duvarların üstüne oturur; bu yüzden duvar olmadan çatı gelemez. <b>“Bu resmin olması için önce ne olmalı?”</b> sorusu ortadaki adımları doğru dizer.',
          diyagram: 'nedenSonuc',
        },
        {
          t: 'kural',
          no: 3,
          baslik: 'Geri dönmeyen değişim tek yönlüdür',
          html: 'Buz erir, mum yanar, elma yenir, tohum büyür, yumurtadan civciv çıkar. Bu değişimler <b>kendiliğinden geri dönmez</b>: masadaki su yeniden buz küpü olmaz, yenmiş elma bütünleşmez. Bu yüzden bu tür değişimlerde ters sıra yanlıştır.',
          diyagram: 'tekYon',
        },
        {
          t: 'kural',
          no: 4,
          baslik: 'Adım adım azalan ya da artan şeye bak',
          html: 'Değişim çoğu zaman bir şeyin <b>her adımda biraz azalması ya da artması</b>dır: mumun boyu kısalır, elma küçülür, bitki uzar, eve yeni parçalar eklenir. Dört resimli sorularda ortadaki iki resmi bu azalmaya ya da artmaya göre dizin.',
          diyagram: 'artanAzalan',
        },
        {
          t: 'kural',
          no: 5,
          baslik: 'Şıkları baştan ve sondan ele',
          html: 'Başlangıç resminin numarasıyla başlamayan şıkları, sonra son resmin numarasıyla bitmeyenleri eleyin. Geriye kalan şıkta <b>ortadaki numaraları</b> kontrol edin. Şıklardaki numaralar resimlerin adıdır; <b>1 → 2 → 3</b> kendiliğinden doğru sıra değildir.',
          diyagram: 'eleme',
        },
      ],
    },
    {
      id: 'buyume',
      baslik: 'Büyüme ve doğum',
      bloklar: [
        {
          t: 'p',
          html: 'Canlıların büyümesi en bilinen değişimlerdir: tohum filizlenir, çiçek açar; yumurta çatlar, civciv çıkar. Bu sorularda başlangıç en küçük, en sade hâldir; filiz yeniden tohuma, civciv yeniden yumurtaya dönmez.',
        },
        {
          t: 'ornek',
          soru: '1-olay-easy-002',
          baslik: 'Tohum, filiz, çiçek',
          adimlar: [
            'Resimlere bakalım: 1\'de saksıda yalnız bir tohum, 2\'de açmış pembe bir çiçek, 3\'te iki yapraklı küçük bir filiz var.',
            'Başlangıç, henüz hiçbir şeyin büyümediği resimdir: <b>1</b> (tohum).',
            'Son, büyümenin tamamlandığı resimdir: <b>2</b> (çiçek). Ortada filiz kalır: <b>3</b>.',
            'Doğru sıra: <b>1 → 3 → 2</b>. Bitki büyür, geri küçülüp tohuma dönmez.',
          ],
          eleme: 'A (2 → 3 → 1) ters sıradır: çiçekten tohuma gider. C (1 → 2 → 3) numaraları sırayla okur ve çiçeği filizden önce koyar. Doğru cevap <b>B</b>.',
        },
        {
          t: 'ornek',
          soru: '2-olay-easy-004',
          baslik: 'Yumurtadan civciv çıkıyor',
          adimlar: [
            '1\'de çatlamış bir yumurta, 2\'de kabuktan çıkan sarı bir civciv, 3\'te hiç çatlağı olmayan bütün bir yumurta var.',
            'Başlangıç bütün yumurtadır: <b>3</b>. Son, civcivin çıktığı andır: <b>2</b>.',
            'Neden-sonuç: yumurta önce çatlar, çatlak büyüyünce civciv çıkar. Çatlak yumurta ortaya gelir: <b>1</b>.',
            'Doğru sıra: <b>3 → 1 → 2</b>.',
          ],
          eleme: 'A (1 → 2 → 3) çatlak yumurtayla başlar ve bütün yumurtayı sona koyar. C (2 → 1 → 3) ters sıradır: civcivden bütün yumurtaya gider. D (1 → 3 → 2) çatlak yumurtayı bütün yumurtadan önce koyar; çatlak kendiliğinden kapanmaz. Doğru cevap <b>B</b>.',
        },
      ],
    },
    {
      id: 'azalma',
      baslik: 'Erime, yanma ve yenme',
      bloklar: [
        {
          t: 'p',
          html: 'Bu sorularda bir şey adım adım azalır: buz erir, mum yanarak kısalır, elma yendikçe küçülür. Başlangıç en bütün ve en büyük hâldir; son, en az şeyin kaldığı hâldir.',
        },
        {
          t: 'ornek',
          soru: '3-olay-medium-015',
          baslik: 'Buz küpü eriyor',
          adimlar: [
            '2\'de bütün bir buz küpü, 1\'de altında su birikmiş, erimeye başlamış bir küp, 3\'te yalnız su birikintisi var.',
            'Başlangıç, henüz hiç erimemiş küptür: <b>2</b>. Son, buzun tamamen eridiği hâldir: <b>3</b>.',
            'Eriyen küp ikisinin arasına gelir: <b>1</b>. Doğru sıra: <b>2 → 1 → 3</b>.',
            'Erime geri dönmez: masadaki su kendiliğinden yeniden küp olmaz.',
          ],
          eleme: 'D (3 → 1 → 2) ters sıradır; B (3 → 2 → 1) de sudan başlar. C (2 → 3 → 1) doğru başlar ama su birikintisini eriyen küpten önce koyar: buz bittikten sonra yeniden küp oluşamaz. Doğru cevap <b>A</b>.',
        },
        {
          t: 'ornek',
          soru: '1-olay-medium-012',
          baslik: 'Elma yeniyor',
          adimlar: [
            '2\'de bütün bir elma, 1\'de bir ısırık alınmış elma, 3\'te yalnız çekirdekli orta kısmı (koçanı) kalmış elma var.',
            'Başlangıç bütün elmadır: <b>2</b>. Elma yendikçe küçülür; en son koçanı kalır: <b>3</b>.',
            'Isırılmış elma ortaya gelir: <b>1</b>. Doğru sıra: <b>2 → 1 → 3</b>.',
          ],
          eleme: 'A (3 → 1 → 2) ters sıradır: yenmiş elma yeniden bütün olamaz. B (2 → 3 → 1) doğru başlar ama koçanı ısırılmış elmadan önce koyar. Doğru cevap <b>C</b>.',
        },
      ],
    },
    {
      id: 'dort-resim',
      baslik: 'Dört resimli sorular',
      bloklar: [
        {
          t: 'p',
          html: 'Zor seviyede dört resim sıralanır. Baş ve son yine kolayca bulunur; asıl dikkat isteyen, <b>ortadaki iki resmin</b> sırasıdır. Burada neden-sonuç ve azalma-artma kuralları birlikte kullanılır.',
        },
        {
          t: 'ornek',
          soru: '2-olay-hard-013',
          baslik: 'Ev yapılıyor',
          adimlar: [
            '1\'de yalnız temel, 2\'de temelin üstünde duvarlar, 4\'te duvarların üstüne çatı konmuş ev, 3\'te kapısı ve penceresi de takılmış bitmiş ev var.',
            'Başlangıç temeldir: <b>1</b>. Son, her şeyi tamamlanmış evdir: <b>3</b>.',
            'Ortadaki iki resim için neden-sonuç düşünelim: çatı duvarların üstüne oturur, yani önce duvarlar (<b>2</b>), sonra çatı (<b>4</b>).',
            'Doğru sıra: <b>1 → 2 → 4 → 3</b>.',
          ],
          eleme: 'A (1 → 2 → 3 → 4) numaraları sırayla okur; bitmiş evden sonra kapı ve pencere sökülmüş gibi olur. B (1 → 4 → 2 → 3) çatıyı duvardan önce koyar. D (2 → 1 → 3 → 4) duvarla başlar; duvar temelden önce örülmez. Doğru cevap <b>C</b>.',
        },
        {
          t: 'ornek',
          soru: '3-olay-hard-007',
          baslik: 'Mum yanarak kısalıyor',
          adimlar: [
            'Dört mum da yanıyor ve boyları farklı. Mum yandıkça erir ve kısalır.',
            'Başlangıç en uzun, yanında hiç erimiş damla olmayan mumdur: <b>2</b>. Son en kısa mumdur: <b>4</b>.',
            'Ortadaki iki mumu boylarına göre dizelim: 3 biraz kısalmış (bir yanında damla var), 1 daha kısa (iki yanında damla var). Önce <b>3</b>, sonra <b>1</b>.',
            'Doğru sıra: <b>2 → 3 → 1 → 4</b>.',
          ],
          eleme: 'B (2 → 1 → 3 → 4) doğru başlayıp doğru bitiyor ama ortadaki iki mumu karıştırıyor; yanan mum uzamaz. A (2 → 4 → 3 → 1) en kısa mumu ikinci sıraya koyar. C (1 → 2 → 3 → 4) numaraları sırayla okur. Doğru cevap <b>D</b>.',
        },
        {
          t: 'ornek',
          soru: '1-olay-hard-025',
          baslik: 'Tohumdan çiçeğe dört adım',
          adimlar: [
            '1\'de açmış çiçek, 2\'de henüz açmamış pembe bir gonca, 3\'te saksıda tohum, 4\'te iki yapraklı filiz var.',
            'Başlangıç tohumdur: <b>3</b>. Son, açmış çiçektir: <b>1</b>.',
            'Önce tohumdan filiz çıkar (<b>4</b>), filiz büyüyüp gonca verir (<b>2</b>), gonca açınca çiçek olur.',
            'Doğru sıra: <b>3 → 4 → 2 → 1</b>.',
          ],
          eleme: 'B (1 → 2 → 3 → 4) numaraları sırayla okur ve açmış çiçekle başlar. C (4 → 3 → 2 → 1) filizi tohumdan önce koyar; oysa filiz tohumdan çıkar. Doğru cevap <b>A</b>.',
        },
        {
          t: 'kutu',
          tur: 'ipucu',
          baslik: 'Ortadaki iki resim için',
          html: 'Ortadaki iki resmi karşılaştırırken yalnız o ikisine bakın ve <b>“Hangisi başlangıca daha yakın?”</b> diye sorun. Daha az değişmiş olan önce gelir: daha uzun mum, daha küçük bitki, daha az parçası olan ev.',
        },
      ],
    },
    {
      id: 'yontem',
      baslik: '5 adımda çözüm yöntemi',
      bloklar: [
        { t: 'p', html: 'Her olay sıralama sorusunda aynı sırayı izlemek hem hızı hem doğruluğu artırır:' },
        {
          t: 'liste',
          numarali: true,
          maddeler: [
            '<b>Resimleri tek tek anlat.</b> Her resimde ne olduğunu kısaca söyle: “Burada mum uzun, burada kısa.”',
            '<b>Neyin değiştiğini bul.</b> Boy mu kısalıyor, bir parça mı ekleniyor, bir şey mi büyüyor?',
            '<b>Başı ve sonu seç.</b> Hiç değişmemiş resim baştır, değişimi tamamlanmış resim sondur.',
            '<b>Ortayı diz.</b> Neden-sonuca ya da azalma-artmaya göre aradaki resimleri yerleştir.',
            '<b>Şıkla karşılaştır.</b> Bulduğun sırayı numara numara oku ve aynısını şıklarda ara.',
          ],
        },
        {
          t: 'kutu',
          tur: 'ipucu',
          baslik: 'Hikâye gibi anlatın',
          html: 'Bulduğunuz sırayı <b>“Önce…, sonra…, en sonunda…”</b> diye bir hikâye gibi anlatın. Hikâye kulağa tuhaf geliyorsa (“Önce çiçek açtı, sonra tohum oldu”) sıra yanlıştır.',
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
            '<b>Numaraları sıra sanmak:</b> Resimlerin köşesindeki numaralara bakıp <b>1 → 2 → 3</b> şıkkını seçmek. Numaralar yalnız resimlerin adıdır.',
            '<b>Ters sıra:</b> Olayı sondan başa anlatan şıkkı seçmek: çiçekten tohuma, sudan buza.',
            '<b>Ortadakileri karıştırmak:</b> Baş ve son doğru olduğu hâlde ortadaki iki resmin yerini değiştiren şıkkı seçmek. Dört resimli sorularda sık yapılan bir hatadır.',
            '<b>Son iki adımı karıştırmak:</b> Çatılı evle kapısı, penceresi takılmış ev gibi birbirine çok benzeyen son iki resmi yanlış sıralamak.',
            '<b>Küçük farkı gözden kaçırmak:</b> Mumun yanındaki damlaları ya da yumurtadaki ince çatlağı görmemek.',
          ],
        },
        {
          t: 'kutu',
          tur: 'veli',
          baslik: 'Velilere öneri',
          html: 'Çocuğunuz yanlış bir şık seçtiğinde o şıkkı <b>hikâye gibi anlatmasını</b> isteyin: “Bu şıkka göre önce ne oldu, sonra ne oldu?” Tuhaf bir hikâye çıktığını kendisi fark eder; bu, doğru sırayı hemen söylemekten daha kalıcı bir öğrenmedir.',
        },
      ],
    },
    {
      id: 'evde',
      baslik: 'Evde nasıl çalışılır?',
      bloklar: [
        {
          t: 'p',
          html: 'Olay sıralama, günlük hayatın her anında çalışılabilir. En iyi malzeme, çocuğun kendi yaşadığı olaylardır.',
        },
        {
          t: 'liste',
          maddeler: [
            '<b>Fotoğraf dizisi:</b> Kek yaparken ya da bir yapboz tamamlarken 3-4 fotoğraf çekin. Fotoğrafları karıştırıp çocuğun sıraya koymasını isteyin.',
            '<b>Buz deneyi:</b> Bir tabağa buz küpü koyun; 10 dakikada bir birlikte bakıp çizin. Sonra çizimleri karıştırıp sıralayın.',
            '<b>Fasulye çimlendirme:</b> Islak pamuğa birkaç fasulye koyun; bir hafta boyunca her gün birlikte bakıp çizin. Tohumdan filize değişimi kendi gözüyle görmek, sıralama sorularını kolaylaştırır.',
            '<b>Resimli hikâye kartları:</b> Çizgi romanlardaki kareleri kesip karıştırın; çocuk sıralasın ve hikâyeyi “önce, sonra, en sonunda” diye anlatsın.',
            '<b>Süre:</b> Haftada birkaç kez 10 dakika yeterli. Kısa ve düzenli çalışma, uzun ve seyrek çalışmadan daha etkilidir.',
          ],
        },
        {
          t: 'kutu',
          tur: 'veli',
          baslik: 'Soru sorarak yönlendirin',
          html: '<b>“Bu resimden önce ne olmuş olabilir?”</b>, <b>“Bu değişim geri dönebilir mi?”</b>, <b>“Hangisinde en az şey değişmiş?”</b> gibi sorular çocuğun kuralı kendi bulmasını sağlar. Buzun eriyişini ya da bir mumun kısalışını birlikte izlemek en iyi açıklamadır; mumu her zaman bir yetişkin yakmalıdır.',
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
            { soru: '1-olay-easy-001', aciklama: 'Saksıdaki tohum 2\'de, filiz 1\'de, açmış çiçek 3\'te. Bitki tohumdan filize, filizden çiçeğe büyür: 2 → 1 → 3.' },
            { soru: '2-olay-medium-006', aciklama: 'Önce temel atılır (2), sonra duvarlar örülür (1), en son çatısı, kapısı ve penceresiyle ev biter (3): 2 → 1 → 3.' },
            { soru: '3-olay-easy-021', aciklama: 'Mum yandıkça kısalır: en uzun mum 3, orta boy mum 1, en kısa mum 2. Doğru sıra 3 → 1 → 2.' },
            { soru: '2-olay-medium-011', aciklama: 'Bütün elma 2, ısırılmış elma 3, yalnız koçanı kalan elma 1. Elma yendikçe azalır: 2 → 3 → 1.' },
            { soru: '3-olay-medium-004', aciklama: 'Bütün yumurta 2, çatlamış yumurta 3, kabuktan çıkan civciv 1. Doğru sıra 2 → 3 → 1.' },
            { soru: '1-olay-easy-016', aciklama: 'Buz küpü 3\'te bütün, 1\'de erimeye başlamış, 2\'de tamamen su olmuş. Doğru sıra 3 → 1 → 2.' },
            { soru: '3-olay-hard-012', aciklama: 'Temel 3, duvarlar 4, çatı konmuş ev 2, kapısı ve penceresiyle bitmiş ev 1. Doğru sıra 3 → 4 → 2 → 1.' },
            { soru: '2-olay-hard-009', aciklama: 'Boylara bakın: en uzun ve damlasız mum 2, biraz kısalmış mum 1, daha kısa mum 4, en kısa mum 3. Doğru sıra 2 → 1 → 4 → 3.' },
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
      baslik: 'Karışık resimleri oluş sırasına diz',
      soru: '1-olay-easy-002',
      maddeler: ['Köşedeki numara: resmin adı', 'Şık: numaraların sırası (2 → 1 → 3 gibi)', 'Soru: “Olayların doğru sırası hangisidir?”'],
    },
    { t: 'metin', ust: 'Kural 1', baslik: 'Önce başlangıcı ve sonu bul', diyagram: 'basSon', maddeler: ['Baş: hiçbir şey değişmemiş', 'Son: değişim tamamlanmış', 'Ortadaki kendiliğinden yerleşir'] },
    { t: 'metin', ust: 'Kural 2', baslik: 'Neden-sonuç: her adım bir öncekine dayanır', diyagram: 'nedenSonuc', maddeler: ['Çatı duvarsız duramaz.', '“Bunun için önce ne olmalı?”'] },
    { t: 'metin', ust: 'Kural 3', baslik: 'Geri dönmeyen değişim tek yönlüdür', diyagram: 'tekYon', maddeler: ['Buz erir, mum yanar, elma yenir.', 'Bu değişimlerde ters sıra yanlıştır.'] },
    { t: 'metin', ust: 'Kural 4', baslik: 'Azalan ya da artan şeye bak', diyagram: 'artanAzalan', maddeler: ['Mumun boyu her adımda kısalır.', 'Bitki her adımda biraz uzar.'] },
    { t: 'metin', ust: 'Kural 5', baslik: 'Şıkları baştan ve sondan ele', diyagram: 'eleme', maddeler: ['Başı yanlış olanı ele', 'Sonu yanlış olanı ele', '1 → 2 → 3 kendiliğinden doğru değil'] },
    { t: 'soru', ust: 'Örnek 1 · Büyüme', baslik: 'Olayların doğru sırası hangisidir?', soru: '1-olay-easy-002' },
    {
      t: 'cevap',
      ust: 'Örnek 1 · Çözüm',
      baslik: 'Tohum, filiz, çiçek',
      soru: '1-olay-easy-002',
      adimlar: ['Baş: saksıdaki tohum (1).', 'Son: açmış çiçek (2).', 'Ortada filiz (3): 1 → 3 → 2.'],
    },
    { t: 'soru', ust: 'Örnek 2 · Erime', baslik: 'Olayların doğru sırası hangisidir?', soru: '3-olay-medium-015' },
    {
      t: 'cevap',
      ust: 'Örnek 2 · Çözüm',
      baslik: 'Buz küpü erir, su kalır',
      soru: '3-olay-medium-015',
      adimlar: ['Baş: bütün buz küpü (2).', 'Son: su birikintisi (3).', 'Ortada eriyen küp (1): 2 → 1 → 3.'],
    },
    { t: 'soru', ust: 'Örnek 3 · Dört resim', baslik: 'Olayların doğru sırası hangisidir?', soru: '2-olay-hard-013' },
    {
      t: 'cevap',
      ust: 'Örnek 3 · Çözüm',
      baslik: 'Temel, duvar, çatı, kapı-pencere',
      soru: '2-olay-hard-013',
      adimlar: ['Baş: temel (1), son: bitmiş ev (3).', 'Çatı duvarın üstüne oturur: önce 2, sonra 4.', 'Sıra: 1 → 2 → 4 → 3.'],
    },
    { t: 'soru', ust: 'Örnek 4 · Dört resim', baslik: 'Olayların doğru sırası hangisidir?', soru: '3-olay-hard-007' },
    {
      t: 'cevap',
      ust: 'Örnek 4 · Çözüm',
      baslik: 'Mum yandıkça kısalır',
      soru: '3-olay-hard-007',
      adimlar: ['Baş: en uzun, damlasız mum (2).', 'Son: en kısa mum (4).', 'Ortada önce 3, sonra 1: 2 → 3 → 1 → 4.'],
    },
    {
      t: 'metin',
      ust: 'Yöntem',
      baslik: '5 adımda çözüm',
      numarali: true,
      maddeler: ['Resimleri tek tek anlat', 'Neyin değiştiğini bul', 'Başı ve sonu seç', 'Ortayı neden-sonuçla diz', 'Şıkla numara numara karşılaştır'],
    },
    {
      t: 'metin',
      ust: 'Dikkat',
      baslik: 'Çeldirici tuzakları',
      maddeler: ['Numaraları sıra sanmak (1 → 2 → 3)', 'Ters sıra', 'Ortadaki iki resmi karıştırmak', 'Küçük farkları gözden kaçırmak'],
    },
    {
      t: 'metin',
      ust: 'Evde',
      baslik: '“Önce, sonra, en sonunda” oyunu',
      maddeler: ['Kek yaparken 3-4 fotoğraf çekin', 'Karıştırın, çocuk sıralasın', 'Buz eritme, fasulye çimlendirme deneyleri', 'Haftada birkaç kez 10 dakika'],
    },
    { t: 'kapanis' },
  ],
};

export default konu;
