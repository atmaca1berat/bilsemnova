import type { Konu } from '../konu-tipleri';

// Kâğıt katlama konu anlatımı. Örneklerin ve alıştırmaların hepsi soru görselinden bağımsız çözüldü
// ve cevap anahtarıyla karşılaştırıldı (27 Eylül 2026). Açıklamalar sorunun kendi görseline göre yazıldı.

const konu: Konu = {
  slug: 'kagit-katlama',
  ad: 'Kâğıt Katlama',
  alan: 'Görsel Yetenek ve Algı',
  siniflar: '1-3. sınıf',
  ozet: 'Kâğıt katlama soruları nasıl çözülür? 5 temel kural, 7 çözümlü örnek ve 8 alıştırmayla BİLSEM hazırlığı için ücretsiz konu anlatımı.',
  giris:
    'Kâğıt katlama sorularında kâğıt bir ya da iki kez katlanır, sonra delinir ya da bir parçası kesilir. Çocuktan, kâğıt açıldığında nasıl görüneceğini zihninde canlandırması beklenir. Bu anlatımda soruların arkasındaki beş kuralı, adım adım çözülmüş örnekleri ve alıştırmaları bulacaksınız.',
  okumaDakika: 12,
  uygulamadakiSoru: 945,
  guncelleme: '2026-09-27',
  bolumler: [
    {
      id: 'nedir',
      baslik: 'Kâğıt katlama soruları nedir?',
      bloklar: [
        {
          t: 'p',
          html: 'Kâğıt katlama, görsel-uzamsal düşünmeyi ölçen klasik bir soru tipidir; zekâ testlerinde ve BİLSEM\'e hazırlık materyallerinde sık karşılaşılır. Sorunun başında kâğıdın nasıl katlandığı oklarla gösterilir: <b>kırmızı kesikli çizgi</b> katlama yerini, <b>makas</b> ise kesilen ya da delinen yeri gösterir.',
        },
        { t: 'sorugorsel', soru: '2-kagit-katlama-easy-test04-q09', aciklama: 'Örnek bir kâğıt katlama sorusu: kâğıdın alt yarısı yukarı katlanıyor, sağ üst köşeye yakın bir kare delik açılıyor.' },
        {
          t: 'p',
          html: 'Soru hep aynıdır: <b>“Kâğıt açıldığında nasıl görünür?”</b> Çocuk kâğıdı zihninde katlamayı, kesmeyi ve açmayı adım adım canlandırır. Bu sırada şu becerileri birlikte kullanır:',
        },
        {
          t: 'liste',
          maddeler: [
            '<b>Simetri:</b> Açılan kâğıttaki şekillerin ayna görüntüsünü bulmak.',
            '<b>Sayma:</b> Kâğıdın kaç kat olduğunu ve kaç delik açılacağını hesaplamak.',
            '<b>Konum:</b> Sağ-sol, üst-alt ve köşe ilişkilerini doğru yerleştirmek.',
            '<b>Zihinde canlandırma:</b> Katlama ve açma adımlarını sırayla takip etmek.',
          ],
        },
        {
          t: 'p',
          html: 'BilsemNova uygulamasında 1, 2 ve 3. sınıf için ayrı ayrı 315\'er, toplam <b>945 kâğıt katlama sorusu</b> var. Sorular kolay, orta ve zor olmak üzere üç seviyededir; köşegen katlama gibi en zorlayıcı tipler zor seviyede yer alır.',
        },
      ],
    },
    {
      id: 'kurallar',
      baslik: 'Beş temel kural',
      bloklar: [
        { t: 'p', html: 'Bütün kâğıt katlama soruları aynı beş kurala dayanır. Bu kuralları bilen çocuk, ilk kez gördüğü bir soruyu da çözebilir.' },
        {
          t: 'kural',
          no: 1,
          baslik: 'Katlama çizgisi bir aynadır',
          html: 'Kâğıt açıldığında her delik ya da kesik, katlama çizgisinin öbür yanında <b>ayna görüntüsüyle</b> tekrar eder. İkizi, çizgiye <b>aynı uzaklıkta</b> durur: çizgiye yakın bir delik yakın bir ikiz, uzak bir delik uzak bir ikiz oluşturur.',
          diyagram: 'ayna',
        },
        {
          t: 'kural',
          no: 2,
          baslik: 'Her katlama kat sayısını ikiye katlar',
          html: 'Katlanmamış kâğıt 1 kattır. Bir katlama 2 kat, iki katlama 4 kat yapar. Makas bütün katlardan birden geçtiği için <b>tek delik, kat sayısı kadar delik</b> açar.',
          diyagram: 'katSayisi',
        },
        {
          t: 'kural',
          no: 3,
          baslik: 'Çizginin üstündeki kesik yarım bir şekildir',
          html: 'Kesik tam katlama çizgisinin üstündeyse, kesilen şey aslında şeklin yarısıdır. Açınca iki yarım birleşir: <b>yarım daire tam daireye</b>, <b>üçgen baklava dilimine</b>, küçük kare çentik iki kare genişliğinde bir dikdörtgene dönüşür. Şeklin ortasından da katlama izi geçer.',
          diyagram: 'yarimSekil',
        },
        {
          t: 'kural',
          no: 4,
          baslik: 'Ters sırayla aç',
          html: 'Birden fazla katlama varsa kâğıdı <b>katladığın sıranın tersiyle</b> aç: en son yapılan katlama ilk açılır. Her açışta delik sayısı ikiye katlanır: 1 → 2 → 4.',
          diyagram: 'tersSira',
        },
        {
          t: 'kural',
          no: 5,
          baslik: 'Köşegen de bir aynadır',
          html: 'Kâğıt köşeden köşeye katlanınca ayna çizgisi çapraz olur. Bir köşedeki kesik, köşegene göre <b>karşı köşeye</b> yansır. Sol üstten sağ alta giden köşegende sol alt köşe sağ üst köşeye; sol alttan sağ üste giden köşegende sağ alt köşe sol üst köşeye gider.',
          diyagram: 'kosegen',
        },
        {
          t: 'kutu',
          tur: 'dikkat',
          baslik: 'Dış kenardaki kesikler',
          html: 'Kesik katlama çizgisinde değil de kâğıdın dış kenarında ya da köşesindeyse de her kat kesilir; açınca kesik, katlama çizgisine göre ayna görüntüsünde tekrar eder. İki kez katlanmış kâğıtta küçük karenin dış köşesi, kâğıdın <b>dört köşesinin üst üste geldiği</b> yerdir.',
        },
      ],
    },
    {
      id: 'tek-katlama',
      baslik: 'Tek katlamalı sorular',
      bloklar: [
        { t: 'p', html: 'Tek katlamada kâğıt 2 kat olur. Kesiğin nerede yapıldığına göre üç durum vardır: katlama çizgisinin üstünde, kâğıdın içinde ya da dış kenarda.' },
        {
          t: 'ornek',
          soru: '1-kagit-katlama-easy-test06-q07',
          baslik: 'Çizginin üstünde yarım daire',
          adimlar: [
            'Kesikli çizgi yatay: kâğıdın alt yarısı yukarı katlanıyor. Kâğıt artık 2 kat.',
            'Makas, katlanmış kâğıdın alt kenarından, yani katlama çizgisinin üstünden, ortanın biraz sağında yarım daire kesiyor.',
            'Kesik katlama çizgisinde olduğu için yarım daire ayna görüntüsüyle birleşir: açınca <b>tam daire</b> olur.',
            'Daire, kâğıdın ortasındaki yatay çizginin üstünde ve ortanın sağında durur. İçinden geçen katlama izi de yataydır.',
          ],
          eleme: 'A\'da daire solda; C\'de daire aşağıda ve içindeki çizgi dikey. Doğru cevap <b>B</b>.',
        },
        {
          t: 'ornek',
          soru: '2-kagit-katlama-easy-test01-q11',
          baslik: 'Çizginin üstünde üçgen',
          adimlar: [
            'Kesikli çizgi dikey: sağ yarı sola kapanıyor. Kâğıt 2 kat.',
            'Makas, katlama çizgisinin üstünden, üst tarafa yakın bir üçgen kesiyor.',
            'Çizginin üstündeki üçgen ikiziyle birleşir: açınca <b>baklava dilimi</b> olur. Katlama çizgisi dikey olduğu için baklavanın ortasındaki iz de dikeydir.',
            'Baklava kâğıdın tam ortasında ve üst tarafa yakın durur.',
          ],
          eleme: 'B tek bir üçgen, yani kâğıdın açılmamış hâli; C\'de iz yatay ve yer yanlış; D\'de iki baklava var. Doğru cevap <b>A</b>.',
        },
        {
          t: 'ornek',
          soru: '1-kagit-katlama-easy-test07-q13',
          baslik: 'Kâğıdın içinde delik',
          adimlar: [
            'Sağ yarı sola kapanıyor. Kâğıt 2 kat.',
            'Delik katlama çizgisine yakın ama çizginin üstünde değil; kâğıdın içinde ve yükseklik olarak ortada.',
            'Açınca ikinci delik, katlama çizgisinin öbür yanında <b>aynı uzaklıkta</b> çıkar.',
            'Sonuç: kâğıdın ortasının iki yanında, aynı hizada iki delik.',
          ],
          eleme: 'B\'de tek delik var, kat sayısı unutulmuş. C\'de delikler üst üste; ayna yanlış yönde düşünülmüş. Doğru cevap <b>A</b>.',
        },
        {
          t: 'ornek',
          soru: '2-kagit-katlama-medium-test01-q13',
          baslik: 'Dış kenarda iki kesik',
          adimlar: [
            'Alt yarı yukarı kapanıyor (yatay katlama). Kâğıt 2 kat.',
            'İki kesik var: sol üst köşede bir üçgen, sağ kenarda bir yarım daire. İkisi de dış kenarda, katlama çizgisinde değil.',
            'Her kesik alttaki katı da keser. Açınca katlama çizgisine göre aşağıya yansır: sol üst köşe <b>sol alt köşeye</b>, sağ kenardaki yarım daire <b>sağ kenarın aşağısına</b>.',
            'Sonuç: sol üst ve sol alt köşeler kesik; sağ kenarda, biri üstte biri altta iki yarım daire.',
          ],
          eleme: 'A\'da kesiklerin yarısı eksik; C\'de her şey soldan sağa ters çevrilmiş; D\'de kesikler üst kenara ve alt kenara dağılmış. Doğru cevap <b>B</b>.',
        },
      ],
    },
    {
      id: 'cift-katlama',
      baslik: 'İki katlamalı sorular',
      bloklar: [
        {
          t: 'p',
          html: 'İki katlamada kâğıt 4 kat olur ve elde dörtte birlik küçük bir kare kalır. Tek bir delik açınca 4 delik oluşur. Bu sorularda en önemli ayrıntı, deliğin <b>iki katlama çizgisine olan uzaklıklarıdır</b>: hangi çizgiye daha uzaksa, ikizler o yönde daha aralıklı dizilir.',
        },
        {
          t: 'ornek',
          soru: '2-kagit-katlama-medium-test05-q11',
          baslik: 'İki katlama, tek delik',
          adimlar: [
            'Sağ yarı sola, alt yarı yukarı kapanıyor. Kâğıt 4 kat; elimizde sol üstteki küçük kare kaldı.',
            'Delik bu küçük karenin içinde. Dikey katlama çizgisine, yatay çizgiden daha uzak.',
            'Tek delik 4 katı birden deler: açınca <b>4 delik</b> olur.',
            'Kâğıdı adım adım açalım: alt yarıyı açınca delik aşağıya yansır (2 delik), sağ yarıyı açınca ikisi de sağa yansır (4 delik). Katlamalar kâğıdın ortasından yapıldığı için açma sırası sonucu değiştirmez.',
            'Delik dikey çizgiye daha uzak olduğu için delikler <b>yan yana daha aralıklı</b>, üst üste daha sıkı dizilir.',
          ],
          eleme: 'A\'da aralıklar yer değiştirmiş (üst üste daha aralıklı); B\'de yalnız 2 delik var; D\'de delikler aşağı kaymış. Doğru cevap <b>C</b>.',
        },
        {
          t: 'ornek',
          soru: '3-kagit-katlama-hard-test07-q10',
          baslik: 'Köşe kesiği ve delik birlikte',
          adimlar: [
            'İki katlama: kâğıt 4 kat; elimizde sol üstteki küçük kare kaldı.',
            'Küçük karenin sol üst köşesinden bir üçgen kesiliyor. Bu köşe, kâğıdın <b>dört dış köşesinin üst üste geldiği</b> yer. Açınca dört köşenin hepsi kesik olur.',
            'Küçük karedeki yuvarlak delik de 4 kattan geçer: açınca 4 delik.',
            'Delik dikey çizgiye, yatay çizgiden daha uzak: delikler yan yana daha aralıklı, üst üste daha sıkı dizilir.',
          ],
          eleme: 'B ve C\'de köşelerin ve deliklerin yarısı eksik; D\'de dört köşe doğru ama deliklerin aralıkları yer değiştirmiş. Doğru cevap <b>A</b>.',
        },
        {
          t: 'kutu',
          tur: 'ipucu',
          baslik: 'Çapraz tuzağa dikkat',
          html: 'İki katlamalı sorularda şıklardan biri genellikle doğru cevabın "yatay ve dikey aralıkları yer değiştirmiş" hâlidir. Delik sayısı ve yerleşim benzer göründüğü için kolayca seçilir. Deliğin hangi çizgiye daha uzak olduğuna bakarak bu şıkkı eleyin.',
        },
      ],
    },
    {
      id: 'kosegen',
      baslik: 'Köşegen (çapraz) katlama',
      bloklar: [
        {
          t: 'p',
          html: 'Köşegen katlamada kâğıt köşeden köşeye katlanır ve üçgen olur. Ayna çizgisi çapraz olduğu için kesikler yatay ya da dikey değil, <b>köşegene göre</b> yansır. Bu tip, uygulamadaki en zorlayıcı kâğıt katlama sorularındandır.',
        },
        {
          t: 'ornek',
          soru: '2-kagit-katlama-hard-test02-q11',
          baslik: 'Köşegen katlama, köşe kesiği',
          adimlar: [
            'Kesikli çizgi, sol alt köşeden sağ üst köşeye giden köşegen. Sol üst yarı, sağ alt yarının üstüne kapanıyor; kâğıt 2 kat ve üçgen oldu.',
            'Makas, üçgenin dik köşesinden, yani sağ alt köşeden küçük bir üçgen kesiyor.',
            'Köşegen de bir aynadır: sağ alt köşe, köşegene göre <b>sol üst köşeye</b> yansır.',
            'Sonuç: sağ alt ve sol üst köşeler kesik.',
          ],
          eleme: 'A ve D\'de tek köşe kesik, kat sayısı unutulmuş; B\'de öbür köşegen kullanılmış (sağ üst ve sol alt). Doğru cevap <b>C</b>.',
        },
      ],
    },
    {
      id: 'yontem',
      baslik: '5 adımda çözüm yöntemi',
      bloklar: [
        { t: 'p', html: 'Her kâğıt katlama sorusunda aynı sırayı izlemek hem hızı hem doğruluğu artırır:' },
        {
          t: 'liste',
          numarali: true,
          maddeler: [
            '<b>Katlama çizgilerini bul.</b> Kaç katlama var? Yatay mı, dikey mi, köşegen mi?',
            '<b>Kat sayısını hesapla.</b> 1 katlama → 2 kat, 2 katlama → 4 kat. Bu, açınca kaç şekil olacağını söyler.',
            '<b>Kesikleri incele.</b> Her kesik katlama çizgisinin üstünde mi (yarım şekil), kâğıdın içinde mi (delik), dış kenarda ya da köşede mi?',
            '<b>İkizleri yerleştir.</b> Her kesiği katlama çizgisine göre ayna gibi yansıt; çizgiye olan uzaklığı koru.',
            '<b>Şıkları ele.</b> Önce sayıya bak, sonra konuma, en son ayrıntıya: şeklin içindeki katlama izi dikey mi, yatay mı?',
          ],
        },
        {
          t: 'kutu',
          tur: 'ipucu',
          baslik: 'Sayıyla başlamak zaman kazandırır',
          html: 'Delik ya da şekil sayısı yanlış olan şıklar en kolay elenenlerdir. Önce sayıyı kontrol etmek, çoğu soruda şık sayısını hemen ikiye indirir.',
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
            '<b>Kat sayısını unutmak:</b> Tek katlamada tek delik, iki katlamada iki delik seçmek.',
            '<b>Açılmamış hâli seçmek:</b> Katlı kâğıttaki kesiği aynen gösteren şık (örneğin tek bir üçgen).',
            '<b>Aynayı yanlış yöne tutmak:</b> Dikey katlamada delikleri üst üste, yatay katlamada yan yana koymak.',
            '<b>Çizgideki kesiği iki ayrı şekil sanmak:</b> Yarım daire açınca iki yarım daire değil, tek bir tam daire olur.',
            '<b>Uzaklığı korumamak:</b> İkiz deliği çizgiye olduğundan daha yakın ya da daha uzak koymak.',
            '<b>Çapraz tuzak:</b> İki katlamada yatay ve dikey aralıkların yer değiştirdiği şıkkı seçmek.',
            '<b>Yanlış köşegen:</b> Köşegen katlamada kesiği öbür köşegene göre yansıtmak.',
          ],
        },
        {
          t: 'kutu',
          tur: 'veli',
          baslik: 'Velilere öneri',
          html: 'Çocuğunuz yanlış bir şık seçtiğinde doğrusunu hemen söylemek yerine <b>“Bu şık hangi hatayı yapmış?”</b> diye birlikte düşünün. Yanlış şıkları açıklayabilen çocuk, kuralı gerçekten öğrenmiş demektir.',
        },
      ],
    },
    {
      id: 'evde',
      baslik: 'Evde nasıl çalışılır?',
      bloklar: [
        {
          t: 'p',
          html: 'Kâğıt katlama, gerçek kâğıtla denemenin en kolay olduğu soru tipidir. Zihinde canlandırma becerisi, önce elle yapılan deneylerle güçlenir.',
        },
        {
          t: 'liste',
          maddeler: [
            '<b>Malzeme:</b> Kare kâğıt (origami ya da yapışkanlı not kâğıdı), delgeç ya da kurşun kalem ucu, çocuk makası.',
            '<b>“Önce tahmin et, sonra aç” oyunu:</b> Kâğıdı birlikte katlayın ve delin. Çocuk açmadan önce sonucu boş bir kâğıda çizsin; sonra açıp karşılaştırın.',
            '<b>Zorluk sırası:</b> Tek katlama ve delik → katlama çizgisinde yarım şekil → iki katlama → köşegen katlama.',
            '<b>Süre:</b> Haftada birkaç kez 10-15 dakika yeterli. Kısa ve düzenli çalışma, uzun ve seyrek çalışmadan daha etkilidir.',
          ],
        },
        {
          t: 'kutu',
          tur: 'veli',
          baslik: 'Soru sorarak yönlendirin',
          html: '<b>“Kaç kat oldu?”</b>, <b>“Bu delik katlama çizgisine ne kadar uzak?”</b>, <b>“Açınca ikizi nereye gelir?”</b> gibi sorular, çocuğun kuralı kendi bulmasını sağlar. Yanlış tahmin bir öğrenme fırsatıdır; açıp birlikte bakmak en iyi açıklamadır.',
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
            { soru: '2-kagit-katlama-easy-test06-q15', aciklama: 'Dikdörtgen çentik katlama çizgisinin üstünde: açınca kâğıdın ortasında, üst tarafta, iki kat genişlikte ve ortasında dikey katlama izi olan bir dikdörtgen olur.' },
            { soru: '2-kagit-katlama-easy-test04-q09', aciklama: 'Yatay katlama: sağ üstteki kare deliğin ikizi, katlama çizgisinin öbür yanında, sağ altta aynı uzaklıkta çıkar.' },
            { soru: '1-kagit-katlama-medium-test04-q02', aciklama: 'Dikey katlama: sol üst köşedeki kesik sağ üst köşeye yansır; alt kenardaki yarım daire, alt kenarda simetrik ikinci bir yarım daire oluşturur.' },
            { soru: '2-kagit-katlama-medium-test01-q05', aciklama: 'Üçgen katlama çizgisinin üstünde kesildi: açınca kâğıdın ortasında, üst tarafa yakın, ortasında dikey iz olan bir baklava dilimi olur.' },
            { soru: '3-kagit-katlama-medium-test05-q09', aciklama: 'İki katlama, 4 delik. Delik dikey çizgiye çok yakın, yatay çizgiye uzak: üstte ve altta, yan yana birbirine yakın ikişer delik.' },
            { soru: '2-kagit-katlama-hard-test01-q13', aciklama: 'İki katlama: köşeye yakın daire, dört köşeye yakın 4 daireye; ortaya yakın kare, ortada 4 kareye dönüşür. D\'de yatay ve dikey aralıklar yer değiştirmiş.' },
            { soru: '2-kagit-katlama-hard-test01-q07', aciklama: 'Köşegen sol üstten sağ alta gidiyor: sol alt köşedeki kesik sağ üst köşeye yansır. Sol alt ve sağ üst köşeler kesik.' },
            { soru: '3-kagit-katlama-hard-test02-q01', aciklama: 'Köşegen sol alttan sağ üste gidiyor: sağ alt köşedeki kesik sol üst köşeye yansır. Sağ alt ve sol üst köşeler kesik.' },
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
      baslik: 'Katla, kes, aç: “Açıldığında nasıl görünür?”',
      soru: '1-kagit-katlama-easy-test06-q07',
      maddeler: ['Kırmızı kesikli çizgi: katlama yeri', 'Ok: katlamanın yönü', 'Makas: kesilen ya da delinen yer'],
    },
    { t: 'metin', ust: 'Kural 1', baslik: 'Katlama çizgisi bir aynadır', diyagram: 'ayna', maddeler: ['Her delik çizginin öbür yanında tekrar eder.', 'İkizi, çizgiye aynı uzaklıkta durur.'] },
    { t: 'metin', ust: 'Kural 2', baslik: 'Her katlama kat sayısını ikiye katlar', diyagram: 'katSayisi', maddeler: ['1 katlama → 2 kat → 2 delik', '2 katlama → 4 kat → 4 delik'] },
    { t: 'metin', ust: 'Kural 3', baslik: 'Çizginin üstündeki kesik yarım bir şekildir', diyagram: 'yarimSekil', maddeler: ['Yarım daire → tam daire', 'Üçgen → baklava dilimi'] },
    { t: 'metin', ust: 'Kural 4', baslik: 'Ters sırayla aç', diyagram: 'tersSira', maddeler: ['En son yapılan katlama ilk açılır.', 'Her açışta delikler ikiye katlanır: 1 → 2 → 4'] },
    { t: 'metin', ust: 'Kural 5', baslik: 'Köşegen de bir aynadır', diyagram: 'kosegen', maddeler: ['Köşedeki kesik karşı köşeye yansır.'] },
    { t: 'soru', ust: 'Örnek 1 · Tek katlama', baslik: 'Açıldığında nasıl görünür?', soru: '2-kagit-katlama-easy-test01-q11' },
    {
      t: 'cevap',
      ust: 'Örnek 1 · Çözüm',
      baslik: 'Üçgen, açınca baklava dilimi olur',
      soru: '2-kagit-katlama-easy-test01-q11',
      adimlar: ['Sağ yarı sola kapanıyor: 2 kat.', 'Üçgen katlama çizgisinin üstünde, üst tarafa yakın.', 'Açınca ikiziyle birleşir: ortada, üstte, dikey izli bir baklava.'],
    },
    { t: 'soru', ust: 'Örnek 2 · Tek katlama', baslik: 'Açıldığında nasıl görünür?', soru: '1-kagit-katlama-easy-test07-q13' },
    {
      t: 'cevap',
      ust: 'Örnek 2 · Çözüm',
      baslik: 'İçerideki delik, ikizini aynı uzaklıkta yapar',
      soru: '1-kagit-katlama-easy-test07-q13',
      adimlar: ['Dikey katlama: 2 kat.', 'Delik çizgiye yakın, kâğıdın içinde.', 'Açınca ortanın iki yanında, aynı hizada iki delik.'],
    },
    { t: 'soru', ust: 'Örnek 3 · İki katlama', baslik: 'Açıldığında nasıl görünür?', soru: '2-kagit-katlama-medium-test05-q11' },
    {
      t: 'cevap',
      ust: 'Örnek 3 · Çözüm',
      baslik: 'Tek delik, 4 kat: 4 delik',
      soru: '2-kagit-katlama-medium-test05-q11',
      adimlar: ['İki katlama: 4 kat.', 'Delik dikey çizgiye daha uzak.', 'Açınca 4 delik; yan yana daha aralıklı dizilir.'],
    },
    { t: 'soru', ust: 'Örnek 4 · Köşegen', baslik: 'Açıldığında nasıl görünür?', soru: '2-kagit-katlama-hard-test02-q11' },
    {
      t: 'cevap',
      ust: 'Örnek 4 · Çözüm',
      baslik: 'Sağ alt köşe, sol üst köşeye yansır',
      soru: '2-kagit-katlama-hard-test02-q11',
      adimlar: ['Köşegen sol alttan sağ üste: 2 kat, üçgen.', 'Kesik sağ alt köşede.', 'Açınca sağ alt ve sol üst köşeler kesik.'],
    },
    {
      t: 'metin',
      ust: 'Yöntem',
      baslik: '5 adımda çözüm',
      numarali: true,
      maddeler: ['Katlama çizgilerini bul', 'Kat sayısını hesapla', 'Kesikleri incele: çizgide mi, içeride mi, kenarda mı?', 'İkizleri ayna gibi yerleştir, uzaklığı koru', 'Şıkları ele: sayı → konum → ayrıntı'],
    },
    {
      t: 'metin',
      ust: 'Dikkat',
      baslik: 'Çeldirici tuzakları',
      maddeler: ['Kat sayısını unutmak', 'Açılmamış hâli seçmek', 'Aynayı yanlış yöne tutmak', 'Yatay ve dikey aralıkları karıştırmak', 'Yanlış köşegeni kullanmak'],
    },
    {
      t: 'metin',
      ust: 'Evde',
      baslik: '“Önce tahmin et, sonra aç” oyunu',
      maddeler: ['Kare kâğıt, delgeç ya da kalem, çocuk makası', 'Katla ve del; açmadan önce sonucu çiz', 'Açıp karşılaştır; yanlış tahmin öğrenme fırsatıdır', 'Haftada birkaç kez 10-15 dakika'],
    },
    { t: 'kapanis' },
  ],
};

export default konu;
