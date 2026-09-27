import type { Konu } from '../konu-tipleri';

// Yansıma ve simetri konu anlatımı. Örneklerin ve alıştırmaların hepsi soru görselinden bağımsız çözüldü,
// simgeli şıklar büyütülerek incelendi ve cevap anahtarıyla karşılaştırıldı (27 Eylül 2026).
// Simgeli sıra sorularından yalnız 3 şıklı (1. sınıf) ve yönü küçük boyutta da seçilen simgeler kullanıldı.

const konu: Konu = {
  slug: 'yansima-simetri',
  ad: 'Yansıma ve Simetri',
  alan: 'Görsel Yetenek ve Algı',
  siniflar: '1-3. sınıf',
  ozet: 'Yansıma ve simetri soruları nasıl çözülür? Ayna kuralları, 7 çözümlü örnek ve 8 alıştırmayla BİLSEM hazırlığı için ücretsiz konu anlatımı.',
  giris:
    'Yansıma sorularında bir nesnenin, bir desenin ya da yan yana dizilmiş nesnelerin aynadaki görüntüsü sorulur. Çocuk, aynanın nerede durduğuna bakarak hangi yönün değişeceğini bulur ve ayna görüntüsünü döndürülmüş resimlerden ayırır. Bu anlatımda altı kuralı, adım adım çözülmüş örnekleri ve alıştırmaları bulacaksınız.',
  okumaDakika: 12,
  uygulamadakiSoru: 945,
  guncelleme: '2026-09-27',
  bolumler: [
    {
      id: 'nedir',
      baslik: 'Yansıma ve simetri soruları nedir?',
      bloklar: [
        {
          t: 'p',
          html: 'Yansıma, görsel-uzamsal düşünmeyi ölçen klasik bir soru tipidir; zekâ testlerinde ve BİLSEM\'e hazırlık materyallerinde sık karşılaşılır. Ayna sorularında görselde bir nesne, bir desen ya da yan yana dizilmiş nesneler ve onların <b>yanında ya da altında mavi bir ayna</b> görülür. Aynanın üstündeki soru işareti, bulunacak görüntünün yeridir.',
        },
        { t: 'sorugorsel', soru: '2-yansima-easy-051', aciklama: 'Örnek bir yansıma sorusu: kirpinin sağında bir ayna var. Kirpinin aynadaki görüntüsü şıklar arasından bulunacak.' },
        {
          t: 'p',
          html: 'Soruların çoğu <b>“Aynadaki yansıması hangisidir?”</b> diye sorar; her sınıfta 50 soruda ise şeklin yarısı gösterilir ve <b>“Yarım gösterilen şeklin tamamı hangisidir?”</b> diye sorulur. Ayna sorularında çocuk, aynanın resmi nasıl çevireceğini zihninde canlandırır ve doğru görüntüyü döndürülmüş ya da yanlış yöne çevrilmiş resimlerden ayırır. Bu sırada şu becerileri birlikte kullanır:',
        },
        {
          t: 'liste',
          maddeler: [
            '<b>Yön algısı:</b> Sağ-sol ve üst-alt ilişkilerini karıştırmadan izlemek.',
            '<b>Simetri:</b> Bir şeklin ayna görüntüsünü ve simetri eksenini tanımak.',
            '<b>Ayrıntıya dikkat:</b> Ağız, kuyruk, yazı gibi küçük ipuçlarının hangi yöne baktığını fark etmek.',
            '<b>Zihinde canlandırma:</b> Aynada çevirmeyi, resmi döndürmekten ayırt etmek.',
          ],
        },
        {
          t: 'p',
          html: 'BilsemNova uygulamasında 1, 2 ve 3. sınıf için ayrı ayrı 315\'er, toplam <b>945 yansıma ve simetri sorusu</b> var. 1. sınıfta üç, 2 ve 3. sınıfta dört şık bulunur. Kolay sorular çoğunlukla yandaki aynada tek bir nesne gösterir; orta seviyede alttaki ayna, noktalı ızgaralar ve yarım şekiller, zor seviyede nesne sıraları ve renkli üçgen desenler öne çıkar.',
        },
      ],
    },
    {
      id: 'kurallar',
      baslik: 'Altı temel kural',
      bloklar: [
        { t: 'p', html: 'Bütün yansıma soruları aynı birkaç kurala dayanır. İlk ikisi aynanın yerine göre neyin değiştiğini, diğerleri çeldiricileri ayırt etmeyi öğretir. Bu kuralları bilen çocuk, ilk kez gördüğü bir ayna sorusunu da çözebilir.' },
        {
          t: 'kural',
          no: 1,
          baslik: 'Yandaki ayna sağı ve solu değiştirir',
          html: 'Ayna nesnenin <b>yanında</b> duruyorsa görüntüde sağ ile sol yer değiştirir: sağa bakan balık sola bakar, soldaki kuyruk sağa geçer. <b>Üst ile alt değişmez</b>; balığın yüzgeci yine üsttedir. Aynaya yakın olan kısım (burada balığın ağzı) görüntüde de aynaya aynı uzaklıktadır.',
          diyagram: 'yanAyna',
        },
        {
          t: 'kural',
          no: 2,
          baslik: 'Alttaki ayna üstü ve altı değiştirir',
          html: 'Ayna nesnenin <b>altında</b> duruyorsa görüntü, gölün yüzeyindeki yansıma gibi baş aşağıdır: üstteki yüzgeç alta, balığın karnı üste geçer. <b>Sağ ile sol değişmez</b>; balığın ağzı yine sağa bakar.',
          diyagram: 'altAyna',
        },
        {
          t: 'kural',
          no: 3,
          baslik: 'Aynaya uzaklık korunur',
          html: 'Her parça, aynanın öbür yanında <b>aynaya aynı uzaklıkta</b> görünür: aynaya yakın olan yakın, uzak olan uzak durur. Noktalı ızgarada bu şu demektir: yandaki aynada <b>satırlar aynı kalır, sütunlar ters sıralanır</b>. En soldaki sütun en sağa, en sağdaki en sola geçer; ortadaki sütun yerinde kalır.',
          diyagram: 'uzaklik',
        },
        {
          t: 'kural',
          no: 4,
          baslik: 'Ayna döndürmez',
          html: 'Ayna bir resmi <b>yan yatırmaz</b> ve yandaki aynada <b>baş aşağı çevirmez</b>. Şıklardaki en güçlü tuzak, resmin döndürülmüş hâlidir: baş aşağı döndürülmüş balık da sola bakar, ama yüzgeci alta düşmüştür. Doğru cevapta yalnız bir yön değişir: yandaki aynada sağ-sol, alttaki aynada üst-alt.',
          diyagram: 'dondurme',
        },
        {
          t: 'kural',
          no: 5,
          baslik: 'Sırada hem sıra hem nesneler ters döner',
          html: 'Yan yana dizilmiş nesnelerin yandaki aynadaki görüntüsünde iki şey birden olur: <b>sıra tersine döner</b> (aynaya en yakın nesne görüntüde de aynaya en yakındır) ve <b>her nesne kendi içinde çevrilir</b>. Yalnız sırayı ya da yalnız nesneleri çeviren şıklar yanlıştır.',
          diyagram: 'sira',
        },
        {
          t: 'kural',
          no: 6,
          baslik: 'Sağı ile solu eş şekil yandaki aynada değişmez',
          html: 'Bazı şekillerin ortasından geçen bir çizgi onları iki eş yarıya ayırır; bir yarı öbürünün ayna görüntüsüdür. Bu çizgiye <b>simetri ekseni</b> denir. Kelebek ve kalp gibi sağı ile solu eş olan şekiller yandaki aynada aynı görünür. Bu yüzden yansıma sorularında ipucunu <b>simetrik olmayan ayrıntılarda</b> arayın: ağız, kuyruk, yazılar, yapraklar.',
          diyagram: 'simetri',
        },
        {
          t: 'kutu',
          tur: 'dikkat',
          baslik: 'Harfler en güçlü ipucudur',
          html: 'Resimde harf varsa yandaki aynada B, C gibi harfler <b>ters yazılmış gibi</b> görünür: B\'nin yuvarlak yanları ve C\'nin açık yanı sola döner. Yandaki aynada harfleri ters olan şık, çoğu zaman doğru cevabı hemen gösterir. Alttaki aynada ise B ve C düz kalır, A baş aşağı olur; orada B\'si ya da C\'si ters olan şık yanlıştır.',
        },
      ],
    },
    {
      id: 'yan-ayna',
      baslik: 'Yandaki ayna: sağ ile sol yer değiştirir',
      bloklar: [
        { t: 'p', html: 'Uygulamadaki yansıma sorularının çoğunda ayna, resmin sağındadır. Bu sorularda çözümün anahtarı tek bir sorudur: <b>“Hangi ayrıntı sağdaydı, aynada nereye geçti?”</b>' },
        {
          t: 'ornek',
          soru: '1-yansima-easy-004',
          baslik: 'Tilkinin kuyruğu yer değiştirir',
          adimlar: [
            'Ayna tilkinin sağında: yandaki ayna. Sağ ile sol yer değiştirecek, üst ile alt aynı kalacak.',
            'Asıl resimde tilkinin kuyruğu sağda, sarı yıldız sol üst köşede.',
            'Aynada kuyruk sola, sarı yıldız sağ üste geçer. Tilki yine dik oturur; başı yukarıda kalır.',
            'B\'de kuyruk solda, yıldız sağ üstte ve tilki dik oturuyor.',
          ],
          eleme: 'A ve C\'de tilki yan yatmış; bunlar resmin döndürülmüş hâlidir, ayna bir resmi yan yatırmaz. Doğru cevap <b>B</b>.',
        },
        {
          t: 'ornek',
          soru: '2-yansima-easy-013',
          baslik: 'Harfler ters yazılmış gibi görünür',
          adimlar: [
            'Ayna baykuşun sağında: sağ ile sol yer değiştirir, üst ile alt aynı kalır.',
            'Asıl resimde A, B, C harfleri baykuşun sağında, yukarıdan aşağı dizili.',
            'Aynada harfler sola geçer ve ters yazılmış gibi görünür: B\'nin yuvarlak yanları ve C\'nin açık yanı sola bakar.',
            'A\'da baykuş dik duruyor; harfler solda ve ters.',
          ],
          eleme: 'B ve D\'de baykuş baş aşağı: B\'de harfler hâlâ sağda (üst ile alt değişmiş), D resmin döndürülmüş hâli. C\'de baykuş yan yatmış. Doğru cevap <b>A</b>.',
        },
      ],
    },
    {
      id: 'alt-ayna',
      baslik: 'Alttaki ayna: üst ile alt yer değiştirir',
      bloklar: [
        {
          t: 'p',
          html: 'Ayna resmin altındaysa görüntü, suya düşen yansıma gibi baş aşağıdır. Bu sorulardaki en güçlü çeldirici, baş aşağı <b>döndürülmüş</b> resimdir: o da baş aşağıdır, ama sağ ile solu da değişmiştir.',
        },
        {
          t: 'ornek',
          soru: '1-yansima-medium-046',
          baslik: 'Ayı baş aşağı, burnu yine sağda',
          adimlar: [
            'Ayna ayının altında: alttaki ayna. Üst ile alt yer değiştirecek, sağ ile sol aynı kalacak.',
            'Aynada ayının başı aşağıya, oturduğu çimen yukarıya gelir.',
            'Sağ ile sol değişmediği için ayının burnu yine sağa bakar, sarı çiçek yine sağda kalır.',
            'B\'de ayı baş aşağı; burnu ve sarı çiçek sağda.',
          ],
          eleme: 'A resmin aynısı, C\'de ayı yan yatmış. Doğru cevap <b>B</b>.',
        },
        {
          t: 'ornek',
          soru: '2-yansima-medium-030',
          baslik: 'Döndürülmüş kirpiyi ele',
          adimlar: [
            'Ayna kirpinin altında: üst ile alt yer değiştirecek, sağ ile sol aynı kalacak.',
            'Asıl resimde kirpinin burnu sağa bakıyor; ayakları ve çiçekler altta.',
            'Aynada ayaklar ve çiçekler yukarı, dikenli sırt aşağı gelir. Burun yine sağa bakar.',
            'A\'da kirpi baş aşağı ve burnu sağda.',
          ],
          eleme: 'B\'de kirpi baş aşağı ama burnu sola dönmüş: bu, resmin döndürülmüş hâli. C\'de kirpi yan yatmış; D\'de sağ ile sol değişmiş, bu yandaki aynanın görüntüsü olurdu. Doğru cevap <b>A</b>.',
        },
      ],
    },
    {
      id: 'desen-sira',
      baslik: 'Desenler ve nesne sıraları',
      bloklar: [
        {
          t: 'p',
          html: 'Orta ve zor sorularda tek bir nesnenin yerine noktalı ızgaralar, renkli üçgen desenler ya da yan yana dizilmiş nesneler gelir. Aynanın kuralları aynıdır; yalnız takip edilecek parça sayısı artar. Bu sorularda parçaları <b>tek tek</b> aynalamak en güvenli yoldur.',
        },
        {
          t: 'ornek',
          soru: '3-yansima-medium-099',
          baslik: 'Izgarada sütunlar yer değiştirir',
          adimlar: [
            'Ayna ızgaranın sağında: satırlar aynı kalır, sütunlar ters sıralanır.',
            'İki dolu daire sol sütunda: biri üst, biri orta satırda. Aynada ikisi de sağ sütuna geçer; satırları değişmez.',
            'Boş halka orta sütunun orta satırında. Orta sütun yerinde kaldığı için halka da yerinde kalır.',
            'C\'de dolu daireler sağ sütunda (üst ve orta satır), boş halka tam ortada.',
          ],
          eleme: 'A\'da daireler sol sütunda kalmış ve aşağı kaymış (üst ile alt değişmiş). B resmin aynısı. D\'de daireler sağa geçmiş ama orta ve alt satıra inmiş; bu, resmin döndürülmüş hâli. Doğru cevap <b>C</b>.',
        },
        {
          t: 'ornek',
          soru: '3-yansima-hard-020',
          baslik: 'Ayna mı, döndürme mi?',
          adimlar: [
            'Ayna yanda: sağ ile sol yer değiştirir, üst ile alt aynı kalır. Büyük üçgenin sivri ucu yine yukarıda olmalı.',
            'Tepedeki turkuaz ve ortadaki turuncu parça ortadadır; aynada yerlerinde kalırlar.',
            'Alt köşeler yer değiştirir: soldaki sarı sağa, sağdaki kırmızı sola geçer.',
            'Sol üstteki mor nokta sağ üste, sağdaki yeşil ok sola geçer ve sola bakar.',
          ],
          eleme: 'A resmin aynısı. B ve D\'de üçgen baş aşağı: B resmin döndürülmüş hâli, D ise alttaki aynanın görüntüsü. Doğru cevap <b>C</b>.',
        },
        {
          t: 'ornek',
          soru: '1-yansima-hard-072',
          baslik: 'Sıra da ters döner, her nesne de',
          adimlar: [
            'Ayna sıranın sağında. Sıra ters döner: ördek-panda-gitar, aynada gitar-panda-ördek olur.',
            'Her nesne de kendi içinde çevrilir: ördeğin gagası sola bakıyordu, sağa bakar; gitarın sapı sağa yatıktı, sola yatar.',
            'B\'de sıra gitar-panda-ördek; gitarın sapı sola, ördeğin gagası sağa bakıyor.',
          ],
          eleme: 'A resmin aynısı. C\'de sıra ters çevrilmiş ama nesneler çevrilmemiş: ördek hâlâ sola bakıyor, gitarın sapı sağa yatık. Doğru cevap <b>B</b>.',
        },
        {
          t: 'kutu',
          tur: 'ipucu',
          baslik: 'Nesne sıralarında iki kontrol',
          html: 'Önce sırayı kontrol edin: aynadaki ilk nesne, asıl sıranın son nesnesidir. Sonra tek bir nesneye bakın (gaga, sap, kuyruk): o nesne öbür yana dönmüş mü? <b>İki kontrolü de geçen şık</b> doğrudur.',
        },
      ],
    },
    {
      id: 'yontem',
      baslik: '5 adımda çözüm yöntemi',
      bloklar: [
        { t: 'p', html: 'Her yansıma sorusunda aynı sırayı izlemek hem hızı hem doğruluğu artırır:' },
        {
          t: 'liste',
          numarali: true,
          maddeler: [
            '<b>Aynanın yerini bul.</b> Ayna resmin yanında mı, altında mı?',
            '<b>Neyin değişeceğini söyle.</b> Yandaki ayna sağ ile solu, alttaki ayna üst ile altı değiştirir; öbür yön aynı kalır.',
            '<b>Bir ipucu seç.</b> Ağız, kuyruk, yazı, renkli bir köşe ya da nokta: asıl resimde nerede, hangi yöne bakıyor?',
            '<b>İpucunu aynala.</b> Aynaya uzaklığını koru; sırada nesneler varsa sırayı da ters çevir.',
            '<b>Şıkları ele.</b> Önce yan yatmış ve resmin aynısı olan şıkları, sonra yanlış yöne çevrilmiş ya da döndürülmüş olanı çıkar.',
          ],
        },
        {
          t: 'kutu',
          tur: 'ipucu',
          baslik: 'Yan yatmış şıklar ilk elenenlerdir',
          html: 'Ayna hiçbir resmi yan yatırmaz. Yan yatmış (çeyrek tur döndürülmüş) şıkları ve resmin hiç değişmemiş hâlini önce elemek, seçenekleri hızla azaltır: üç şıklı sorularda çoğunlukla iki, dört şıklı sorularda çoğunlukla üç şık kalır.',
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
            '<b>Resmin aynısını seçmek:</b> Hiç çevrilmemiş şık, en sık görülen tuzaktır.',
            '<b>Döndürülmüş resmi seçmek:</b> Baş aşağı döndürülmüş resim de “ters” görünür, ama ayna görüntüsü değildir.',
            '<b>Yanlış yönde çevirmek:</b> Yandaki aynada üst ile altı, alttaki aynada sağ ile solu değiştirmek.',
            '<b>Yan yatmış resmi seçmek:</b> Yan yatmış bir resim (hayvan, eşya) hiçbir aynada oluşmaz.',
            '<b>Yalnız sırayı çevirmek:</b> Nesne sıralarında sırayı ters çevirip nesneleri çevirmeyi unutmak.',
            '<b>Yalnız nesneleri çevirmek:</b> Her nesneyi çevirip sırayı olduğu gibi bırakmak.',
            '<b>Rengi değişmiş şık:</b> Ayna yalnız yönü değiştirir; renk ve boyut aynı kalır.',
          ],
        },
        {
          t: 'kutu',
          tur: 'veli',
          baslik: 'Velilere öneri',
          html: 'Çocuğunuz yanlış bir şık seçtiğinde doğrusunu hemen söylemek yerine <b>“Bu şıkta resim aynada mı çevrilmiş, yoksa döndürülmüş mü?”</b> diye birlikte düşünün. Yanlış şıkları açıklayabilen çocuk, kuralı gerçekten öğrenmiş demektir.',
        },
      ],
    },
    {
      id: 'evde',
      baslik: 'Evde nasıl çalışılır?',
      bloklar: [
        {
          t: 'p',
          html: 'Yansıma, evde bir aynayla en kolay denenen konulardan biridir. Aynayla yapılan kısa deneyler, zihinde çevirme becerisini hızla güçlendirir.',
        },
        {
          t: 'liste',
          maddeler: [
            '<b>Malzeme:</b> Kırılmaz (plastik) bir el aynası, kâğıt, kalem ve birkaç küçük oyuncak.',
            '<b>“Önce tahmin et, sonra bak” oyunu:</b> Kâğıda sağa bakan bir balık ya da bir ok çizin. Aynayı kâğıdın sağ kenarına dik tutun. Çocuk aynaya bakmadan önce görüntüyü tahmin edip çizsin, sonra aynaya bakıp karşılaştırsın.',
            '<b>Aynayı alta koy:</b> Aynı çizimde aynayı kâğıdın alt kenarına dik tutun; bu kez üst ile altın yer değiştirdiğini birlikte görün.',
            '<b>Oyuncak sırası:</b> Üç oyuncağı yan yana dizin, aynayı sıranın yanına koyun. Aynada sıranın ters döndüğünü ve her oyuncağın öbür yana baktığını gözlemleyin.',
            '<b>Döndür mü, aynala mı?:</b> Çizdiğiniz balığı bir kez kâğıdı baş aşağı çevirerek, bir kez de alttaki aynada gösterin. İki sonucu karşılaştırmak, en güçlü tuzağı tanımayı sağlar.',
            '<b>Süre:</b> Haftada birkaç kez 10-15 dakika yeterli. Kısa ve düzenli çalışma, uzun ve seyrek çalışmadan daha etkilidir.',
          ],
        },
        {
          t: 'kutu',
          tur: 'veli',
          baslik: 'Soru sorarak yönlendirin',
          html: '<b>“Ayna nerede?”</b>, <b>“Hangi taraf değişecek?”</b>, <b>“Balığın ağzı şimdi nereye bakıyor?”</b> gibi sorular, çocuğun kuralı kendi bulmasını sağlar. Tahmin yanlış çıkarsa aynaya birlikte bakmak en iyi açıklamadır.',
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
            { soru: '1-yansima-easy-055', aciklama: 'Ayna yanda: köpek sola bakar; sağdaki B ve C harfleri sola geçip ters yazılmış gibi görünür, soldaki A harfi sağa geçer. A şıkkı resmin aynısı, C şıkkında köpek yan yatmış.' },
            { soru: '3-yansima-easy-016', aciklama: 'Ayna yanda: sola açılan başparmak sağa geçer, parmaklar yine yukarı bakar ve renk sırası ters döner. B\'de el baş aşağı, C ve D\'de yan yatmış.' },
            { soru: '2-yansima-medium-078', aciklama: 'Ayna altta: aslan baş aşağı olur ama yıldız ve kuyruk yine solda kalır. B\'de sağ ile sol değişmiş; A ve C\'de aslan yan yatmış.' },
            { soru: '3-yansima-medium-096', aciklama: 'Ayna altta: köpek baş aşağı olur ama burnu yine sağa bakar, kitap yine sağda kalır. B\'de burun sola dönmüş; bu, resmin döndürülmüş hâli.' },
            { soru: '1-yansima-medium-050', aciklama: 'Ayna yanda: orta sütundaki dolu daire ve boş halka yerinde kalır, sağ alttaki dolu daire sol alta geçer. C\'de üst ile alt yer değiştirmiş.' },
            { soru: '2-yansima-easy-048', aciklama: 'Ayna yanda: sol üstteki daire sağ üste, sağ ortadaki daire sol ortaya geçer; satırlar değişmez. C resmin aynısı; B ve D\'de üst satırda hiç daire kalmamış.' },
            { soru: '2-yansima-hard-027', aciklama: 'Ayna yanda: üçgenin sivri ucu yine yukarıda; alttaki kırmızı ve mor parça yer değiştirir, turkuaz nokta sağ üste, yeşil ok sola geçer. C ve D\'de üçgen baş aşağı.' },
            { soru: '1-yansima-hard-063', aciklama: 'Sıra ters döner (gitar, trompet, uçak) ve her nesne çevrilir: gitarın sapı ve trompetin geniş ağzı sola, uçağın burnu sağa bakar. C\'de sıra ters ama nesneler çevrilmemiş.' },
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
      baslik: '“Aynadaki yansıması hangisidir?”',
      soru: '2-yansima-easy-051',
      maddeler: ['Asıl resim: nesne, desen ya da nesne sırası', 'Mavi ayna: resmin yanında ya da altında', 'Şıklardan aynadaki görüntüyü seç'],
    },
    { t: 'metin', ust: 'Kural 1', baslik: 'Yandaki ayna sağı ve solu değiştirir', diyagram: 'yanAyna', maddeler: ['Sağ ile sol yer değiştirir.', 'Üst ile alt aynı kalır.'] },
    { t: 'metin', ust: 'Kural 2', baslik: 'Alttaki ayna üstü ve altı değiştirir', diyagram: 'altAyna', maddeler: ['Üst ile alt yer değiştirir.', 'Sağ ile sol aynı kalır.'] },
    { t: 'metin', ust: 'Kural 3', baslik: 'Aynaya uzaklık korunur', diyagram: 'uzaklik', maddeler: ['Yakın olan yakın, uzak olan uzak durur.', 'Sütunlar ters sıralanır: 1 2 3 → 3 2 1'] },
    { t: 'metin', ust: 'Kural 4', baslik: 'Ayna döndürmez', diyagram: 'dondurme', maddeler: ['Ayna resmi yan yatırmaz.', 'Baş aşağı döndürülmüş resim tuzaktır.'] },
    { t: 'metin', ust: 'Kural 5', baslik: 'Sıra da ters döner, nesneler de', diyagram: 'sira', maddeler: ['Sıra ters döner: 1 2 3 → 3 2 1', 'Her nesne öbür yana bakar.'] },
    { t: 'metin', ust: 'Kural 6', baslik: 'Sağı ile solu eş şekil yandaki aynada değişmez', diyagram: 'simetri', maddeler: ['Simetri ekseni şekli iki eş yarıya böler.', 'İpucu: ağız, kuyruk, yazı gibi ayrıntılar'] },
    { t: 'soru', ust: 'Örnek 1 · Yandaki ayna', baslik: 'Aynadaki yansıması hangisidir?', soru: '1-yansima-easy-004' },
    {
      t: 'cevap',
      ust: 'Örnek 1 · Çözüm',
      baslik: 'Kuyruk sola, yıldız sağa geçer',
      soru: '1-yansima-easy-004',
      adimlar: ['Ayna yanda: sağ ile sol değişir.', 'Kuyruk sola, sarı yıldız sağ üste geçer.', 'Tilki yine dik oturur; A ve C yan yatmış.'],
    },
    { t: 'soru', ust: 'Örnek 2 · Alttaki ayna', baslik: 'Aynadaki yansıması hangisidir?', soru: '2-yansima-medium-030' },
    {
      t: 'cevap',
      ust: 'Örnek 2 · Çözüm',
      baslik: 'Baş aşağı, ama burnu yine sağda',
      soru: '2-yansima-medium-030',
      adimlar: ['Ayna altta: üst ile alt değişir.', 'Ayaklar yukarı, dikenli sırt aşağı gelir.', 'Burun yine sağda; B döndürülmüş hâl.'],
    },
    { t: 'soru', ust: 'Örnek 3 · Renkli üçgen', baslik: 'Aynadaki yansıması hangisidir?', soru: '3-yansima-hard-020' },
    {
      t: 'cevap',
      ust: 'Örnek 3 · Çözüm',
      baslik: 'Ayna döndürmez',
      soru: '3-yansima-hard-020',
      adimlar: ['Sivri uç yine yukarıda kalır.', 'Sarı ile kırmızı yer değiştirir.', 'Mor nokta sağa, yeşil ok sola geçer.'],
    },
    { t: 'soru', ust: 'Örnek 4 · Nesne sırası', baslik: 'Aynadaki yansıması hangisidir?', soru: '1-yansima-hard-072' },
    {
      t: 'cevap',
      ust: 'Örnek 4 · Çözüm',
      baslik: 'Sıra da ters döner, nesneler de',
      soru: '1-yansima-hard-072',
      adimlar: ['Sıra: gitar, panda, ördek.', 'Ördeğin gagası sağa bakar.', 'Gitarın sapı sola yatar.'],
    },
    {
      t: 'metin',
      ust: 'Yöntem',
      baslik: '5 adımda çözüm',
      numarali: true,
      maddeler: ['Aynanın yerini bul: yanda mı, altta mı?', 'Hangi yönün değişeceğini söyle', 'Bir ipucu seç: ağız, kuyruk, yazı', 'İpucunu aynala, uzaklığı koru', 'Şıkları ele: yan yatmış → aynısı → döndürülmüş'],
    },
    {
      t: 'metin',
      ust: 'Dikkat',
      baslik: 'Çeldirici tuzakları',
      maddeler: ['Resmin aynısını seçmek', 'Döndürülmüş resmi seçmek', 'Yanlış yönde çevirmek', 'Yalnız sırayı ya da yalnız nesneleri çevirmek', 'Rengi değişmiş şıkkı seçmek'],
    },
    {
      t: 'metin',
      ust: 'Evde',
      baslik: '“Önce tahmin et, sonra aynaya bak” oyunu',
      maddeler: ['Kırılmaz el aynası, kâğıt ve kalem', 'Balık çiz, aynayı yanına ya da altına koy', 'Önce tahmin edip çiz, sonra karşılaştır', 'Haftada birkaç kez 10-15 dakika'],
    },
    { t: 'kapanis' },
  ],
};

export default konu;
