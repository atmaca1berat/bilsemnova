import type { Konu } from '../konu-tipleri';

// Fark bulma konu anlatımı. Her sorudaki farklar iki resim hem piksel piksel hem nesne nesne karşılaştırılarak
// kesin sayıldı ve cevap anahtarıyla karşılaştırıldı (27 Eylül 2026). Açıklamalardaki farklar görselle tek tek denetlendi.

const konu: Konu = {
  slug: 'fark-bulma',
  ad: 'Fark Bulma',
  alan: 'Dikkat ve Hafıza',
  siniflar: '1-3. sınıf',
  ozet: 'Fark bulma soruları nasıl çözülür? 4 temel kural, 7 çözümlü örnek ve 8 alıştırmayla BİLSEM hazırlığı için ücretsiz konu anlatımı.',
  giris:
    'Fark bulma sorularında aynı sahnenin birbirine çok benzeyen iki resmi üst üste verilir ve iki resim arasında kaç fark olduğu sorulur. Çocuğun iki resmi parça parça karşılaştırıp farkları eksiksiz sayması beklenir. Bu anlatımda farkları kaçırmadan saymanın dört kuralını, adım adım çözülmüş örnekleri ve alıştırmaları bulacaksınız.',
  okumaDakika: 11,
  uygulamadakiSoru: 540,
  guncelleme: '2026-09-27',
  bolumler: [
    {
      id: 'nedir',
      baslik: 'Fark bulma soruları nedir?',
      bloklar: [
        {
          t: 'p',
          html: 'Fark bulma, görsel dikkati çalıştıran ve çocukların çok sevdiği bir soru tipidir; BİLSEM\'e hazırlık materyallerinde de sık görülür. Uygulamadaki sorularda aynı sahnenin iki resmi <b>üst üste</b> durur: çiçek bahçesi, çiftlik, kumsal, deniz altı, parti, karlı bir gün gibi. Alttaki resimde bazı nesneler değiştirilmiştir. Soru hep aynıdır: <b>“İki resim arasında kaç fark var?”</b>',
        },
        { t: 'sorugorsel', soru: '1-fark-easy-001', aciklama: 'Örnek bir fark bulma sorusu: aynı çiçek bahçesinin iki resmi üst üste duruyor. Bu soruyu Örnek 1\'de birlikte çözeceğiz.' },
        { t: 'p', html: 'Çocuk iki resmi karşılaştırırken şu becerileri birlikte kullanır:' },
        {
          t: 'liste',
          maddeler: [
            '<b>Seçici dikkat:</b> Kalabalık bir resimde nesnelere tek tek odaklanmak.',
            '<b>Görsel karşılaştırma:</b> Renk, büyüklük, şekil ve yön farklarını ayırt etmek.',
            '<b>Sistemli tarama:</b> Resmi parça parça, hiçbir yeri atlamadan gözden geçirmek.',
            '<b>Sayma ve çalışma belleği:</b> Bulunan farkları aklında tutup doğru saymak.',
          ],
        },
        {
          t: 'p',
          html: 'BilsemNova uygulamasında 1, 2 ve 3. sınıf için 180\'er, toplam <b>540 fark bulma sorusu</b> var. Kolay sorularda 2-3, orta sorularda 3-4, zor sorularda 4-5 fark bulunur. 1. sınıfta 3, 2 ve 3. sınıfta 4 şık vardır.',
        },
      ],
    },
    {
      id: 'kurallar',
      baslik: 'Dört temel kural',
      bloklar: [
        { t: 'p', html: 'Farkları bulmak şansa bağlı değildir. Aşağıdaki dört kuralı uygulayan çocuk, farkları kaçırmadan ve iki kez saymadan bulur.' },
        {
          t: 'kural',
          no: 1,
          baslik: 'Aynı yere bak',
          html: 'İki resim birebir aynı düzende çizilmiştir: üstteki resimdeki bir nesne, alttaki resimde de <b>aynı yerde</b> olmalıdır. Üstteki resimden bir nesne seçin, sonra gözünüzü alttaki resimde tam aynı yere götürün. Göz iki resim arasında gidip gelir; bu, bütün resme rastgele bakmaktan çok daha hızlıdır.',
          diyagram: 'ayniYer',
        },
        {
          t: 'kural',
          no: 2,
          baslik: 'Resmi bölgelere ayır, sırayla tara',
          html: 'Resmi zihninizde dört parçaya bölün: sol üst, sağ üst, sol alt, sağ alt. Kitap okur gibi <b>soldan sağa, yukarıdan aşağıya</b> ilerleyin; her bölgeyi önce üstteki, sonra alttaki resimde karşılaştırın ve bir bölgeyi bitirmeden ötekine geçmeyin. Böylece hiçbir köşe atlanmaz, aynı yere iki kez bakılmaz.',
          diyagram: 'bolgeler',
        },
        {
          t: 'kural',
          no: 3,
          baslik: 'Kontrol listesi: renk, boyut, şekil, sayı, yön',
          html: 'Her nesne için kısa sorular sorun: <b>Renk</b> aynı mı? <b>Boyut</b> aynı mı? <b>Şekil</b> aynı mı, yoksa başka bir şeye mi dönüşmüş (kuşun yerinde kelebek)? <b>Sayı</b> aynı mı, bir nesne eksik mi? <b>Konum ve yön</b> aynı mı, kuş öbür yöne mi bakıyor? Uygulamadaki farkların hepsi bu türlerden biridir; en sık görülenler eksik nesne, renk ve boyut farklarıdır.',
          diyagram: 'kontrolListesi',
        },
        {
          t: 'kural',
          no: 4,
          baslik: 'İşaretle ve say',
          html: 'Bulduğunuz her farkı parmağınızla gösterip <b>numara verin</b>: “bir, iki, üç…”. Kâğıt üzerinde çalışıyorsanız farkı alttaki resimde yuvarlak içine alın. İşaretlenen fark bir daha sayılmaz. Saydığınız sayı şıklarda yoksa bir farkı kaçırdınız ya da bir farkı iki kez saydınız demektir; bir tur daha tarayın.',
          diyagram: 'isaretle',
        },
        {
          t: 'kutu',
          tur: 'dikkat',
          baslik: 'Bir nesne, bir fark',
          html: 'Her değişen nesne <b>bir fark</b> sayılır: kuşun yerinde kelebek varsa bu “bir kuş gitti, bir kelebek geldi” diye iki fark değil, tek bir farktır. Kaybolan bir çiçeğin sapı yerinde kalabilir; sapı değil, kaybolan çiçeği sayın.',
        },
      ],
    },
    {
      id: 'kolay',
      baslik: 'Kolay sorular: eksik nesne ve renk',
      bloklar: [
        {
          t: 'p',
          html: 'Kolay sorularda 2 ya da 3 fark vardır. Bu farklar ya bir nesnenin <b>kaybolması</b> ya da bir nesnenin <b>renginin değişmesidir</b>; kontrol listesinin sayı ve renk soruları yeterlidir.',
        },
        {
          t: 'ornek',
          soru: '1-fark-easy-001',
          baslik: 'İki fark: kaybolan ve renk değiştiren kelebek',
          adimlar: [
            'Resim bir çiçek bahçesi. Önce bölgelere ayırın: gökyüzü ve kelebekler üstte, çiçekler ve çimen altta.',
            'Resmin sol yarısında uçan kelebeklere bakın. Üstteki resimde, en üstteki mavi kelebeğin sağında pembe bir kelebek var; alttaki resimde bu kelebek <b>yok</b> (1. fark).',
            'Pembe kelebeğin sol altındaki mavi kelebek, alttaki resimde <b>turuncu</b> (2. fark).',
            'Kalan yerlerde (arılar, çiçekler, soldaki pembe kelebek, uğur böcekleri, kurbağa, salyangoz) değişiklik yok. Toplam <b>2 fark</b>.',
          ],
          eleme: 'Bu soruda yalnız iki kelebek değişmiş; 3 ve 4 şıkları, fark olmayan bir yeri fark sanınca ya da aynı farkı iki kez sayınca seçilir. Doğru cevap <b>A</b>.',
        },
        {
          t: 'ornek',
          soru: '2-fark-easy-021',
          baslik: 'Üç fark: kelebek, kurbağa, çiçek',
          adimlar: [
            'Resmi dört bölgeye ayırın ve sol üstten başlayın.',
            'Sol üst: üstteki resimde büyük mor çiçeğin sağ üstünde uçan <b>mavi kelebek</b>, alttaki resimde yok (1. fark).',
            'Sol alt: yılanın sağındaki yeşil kurbağa alttaki resimde <b>turuncu</b> (2. fark). Kurbağanın sağında duran küçük <b>mor çiçek</b> de alttaki resimde yok (3. fark).',
            'Sağ yarıdaki büyük kırmızı çiçekler, pembe kelebekler, sağdaki kurbağa ve tırtıl iki resimde de aynı. Toplam <b>3 fark</b>.',
          ],
          eleme: '2 diyen çocuk bir farkı kaçırmıştır; 5 ve 7 ise fark olmayan yerleri de saymaktır. Doğru cevap <b>B</b>.',
        },
      ],
    },
    {
      id: 'orta',
      baslik: 'Orta sorular: boyut farkı da işin içinde',
      bloklar: [
        {
          t: 'p',
          html: 'Orta sorularda 3 ya da 4 fark vardır. Kaybolan ve renk değiştiren nesnelere bir de <b>büyüyen</b> nesneler eklenir. Büyüme kolay gözden kaçar: nesne yerindedir, rengi de aynıdır; yalnız daha büyüktür.',
        },
        {
          t: 'ornek',
          soru: '1-fark-medium-030',
          baslik: 'Parti sahnesi: üç farklı fark türü',
          adimlar: [
            'Sol üst: üstteki resimde iki mavi balon var; soldaki mavi balon alttaki resimde <b>yok</b> (1. fark).',
            'Orta: üstteki resimdeki <b>kırmızı</b> balon alttaki resimde <b>mavi</b> (2. fark). Sağdaki kırmızı balon ise iki resimde de kırmızı.',
            'Sol alt: mor parti şapkası alttaki resimde <b>daha büyük</b> (3. fark).',
            'Hediye paketleri, kekler ve sağdaki parti şapkası aynı. Toplam <b>3 fark</b>: bir kaybolma, bir renk, bir boyut farkı.',
          ],
          eleme: 'Şapkanın büyümesini kaçıran çocuk 2 der; 1 ise yalnız kaybolan balonu bulmaktır. Doğru cevap <b>C</b>.',
        },
        {
          t: 'ornek',
          soru: '2-fark-medium-008',
          baslik: 'Çiftlik: iki tavuk büyümüş',
          adimlar: [
            'Üst bölge: güneşin önündeki pembe kelebek aynı; ortadaki <b>pembe</b> kelebek alttaki resimde <b>turuncu</b> (1. fark). Mavi kuş aynı.',
            'Sol alt: ahırın altındaki tavuk alttaki resimde <b>daha büyük</b> (2. fark). En alttaki tavuk da <b>daha büyük</b> (3. fark).',
            'Sağ alt: üstteki resimde çitin altında iki koyun var; alttaki resimde yalnız biri var, alttaki koyun <b>yok</b> (4. fark).',
            'Civcivler, ahır ve çit aynı. Toplam <b>4 fark</b>.',
          ],
          eleme: 'Büyüyen iki tavuktan birini kaçıran çocuk 3 der; 6 ve 8 fark olmayan yerleri de saymaktır. Doğru cevap <b>D</b>.',
        },
      ],
    },
    {
      id: 'zor',
      baslik: 'Zor sorular: yön değiştiren ve dönüşen nesneler',
      bloklar: [
        {
          t: 'p',
          html: 'Zor sorularda 4 ya da 5 fark vardır. Kaybolma, renk ve boyut farklarına iki tür daha eklenir: bir nesnenin <b>başka bir nesneye dönüşmesi</b> (kuşun yerinde kelebek) ve bir nesnenin <b>öbür yöne bakması</b>. Bu sorularda kontrol listesinin bütün soruları sorulmalıdır.',
        },
        {
          t: 'ornek',
          soru: '3-fark-hard-049',
          baslik: 'Kumsal: kuş kelebeğe dönüşmüş',
          adimlar: [
            'Gökyüzü: üstteki resimde bulutun önünde iki mavi kuş var. Alttaki resimde soldaki kuş <b>yok</b> (1. fark); sağdaki kuşun yerinde mavi bir <b>kelebek</b> var (2. fark).',
            'Kumsalın sol yarısı: şemsiye, iki top ve deniz yıldızları iki resimde de aynı.',
            'Kumsalın sağ yarısı: üstteki yengeç alttaki resimde <b>daha büyük</b> (3. fark); sağdaki iki kovadan üstteki de <b>daha büyük</b> (4. fark). Alttaki yengeç ve alttaki kova aynı.',
            'Toplam <b>4 fark</b>. Kuşun kelebeğe dönüşmesi tek bir farktır.',
          ],
          eleme: 'Kuşun kelebeğe dönüşmesini iki fark sayan çocuk 5 der; büyüyen yengeci ya da kovayı kaçıran 3 der. Doğru cevap <b>A</b>.',
        },
        {
          t: 'ornek',
          soru: '3-fark-hard-027',
          baslik: 'Karlı gün: kuş öbür yöne bakıyor',
          adimlar: [
            'Sol üst: güneşin altındaki mavi kuş üstteki resimde <b>sola</b>, alttaki resimde <b>sağa</b> bakıyor (1. fark). Aşağıdaki ikinci kuş aynı.',
            'Sağ: sağdaki penguen alttaki resimde <b>daha büyük</b> (2. fark).',
            'Alt orta: üstteki resimde iki kardan adamın arasında bir tavşan ve küçük bir penguen var. Alttaki resimde sağdaki <b>kardan adam</b> (3. fark), aradaki <b>tavşan</b> (4. fark) ve küçük <b>penguen</b> (5. fark) yok.',
            'Soldaki tavşan, ağaçlar ve soldaki kardan adam aynı. Toplam <b>5 fark</b>.',
          ],
          eleme: 'Kuşun yön değiştirmesini kaçıran çocuk 4 bulur; 4 şıklarda yoktur, bu da bir tur daha taramanın işaretidir. 6, 7 ve 8 ise fark olmayan yerleri de saymaktır. Doğru cevap <b>A</b>.',
        },
        {
          t: 'ornek',
          soru: '2-fark-hard-048',
          baslik: 'Çiftlik: iki dönüşüm, beş fark',
          adimlar: [
            'Sol üst: ahırın üstündeki mavi <b>kuşun</b> yerinde alttaki resimde mavi bir <b>kelebek</b> var (1. fark). İki pembe kelebek aynı.',
            'Orta: ahırın sağındaki <b>koyun</b> (2. fark) ve onun sağındaki <b>civciv</b> (3. fark) alttaki resimde yok.',
            'Sağ: sağdaki civciv alttaki resimde <b>daha büyük</b> (4. fark). Sağ alttaki koyunun yerinde ise bir <b>tavuk</b> var (5. fark).',
            'Tavuklar, ahır ve çit aynı. Toplam <b>5 fark</b>.',
          ],
          eleme: 'Dönüşen iki nesneyi ikişer fark sayan çocuk 7 bulur; bir farkı kaçıran 4 der. Doğru cevap <b>A</b>.',
        },
        {
          t: 'kutu',
          tur: 'ipucu',
          baslik: 'Şıklar da ipucu verir',
          html: 'Bulduğunuz sayı şıklarda yoksa bir farkı kaçırdınız ya da bir farkı iki kez saydınız demektir. Böyle durumlarda kontrol listesiyle bir tur daha tarayın. Büyüme ve yön farkları kolay gözden kaçar.',
        },
      ],
    },
    {
      id: 'yontem',
      baslik: '5 adımda çözüm yöntemi',
      bloklar: [
        { t: 'p', html: 'Her fark bulma sorusunda aynı sırayı izlemek, hem farkları kaçırmayı hem de iki kez saymayı önler:' },
        {
          t: 'liste',
          numarali: true,
          maddeler: [
            '<b>Resmi tanı.</b> Sahne nerede geçiyor, hangi nesneler var? Birkaç saniye iki resme de genel olarak bakın.',
            '<b>Bölgelere ayır.</b> Resmi dört parçaya bölün; sol üstten başlayıp kitap okur gibi ilerleyin.',
            '<b>Nesne nesne karşılaştır.</b> Her bölgede üstteki resimden bir nesne seçin, alttaki resimde aynı yere bakın; renk, boyut, şekil, sayı ve yön sorularını sorun.',
            '<b>İşaretle ve say.</b> Her farkı gösterip numara verin; işaretlenen fark bir daha sayılmaz.',
            '<b>Şıklarla kontrol et.</b> Sayınız şıklarda yoksa ya da emin değilseniz bir tur daha tarayın.',
          ],
        },
        {
          t: 'kutu',
          tur: 'ipucu',
          baslik: 'Farkın yerini ve türünü söyleyin',
          html: 'Çocuğunuz bir fark bulduğunda yalnız “burada” demesin; <b>“sol üstteki kelebek turuncu olmuş”</b> gibi yerini ve türünü söylesin. Bu, aynı farkı iki kez saymayı önler ve kontrol listesini alışkanlığa çevirir.',
        },
      ],
    },
    {
      id: 'tuzaklar',
      baslik: 'Çeldirici tuzakları ve sık yapılan hatalar',
      bloklar: [
        { t: 'p', html: 'Şıklardaki sayılar doğru cevaba çok yakındır; tek bir farkı kaçırmak ya da bir farkı iki kez saymak yanlış şıkka götürür. En sık yapılan hatalar:' },
        {
          t: 'liste',
          maddeler: [
            '<b>Büyümeyi kaçırmak:</b> Nesne yerinde ve rengi aynı olduğu için büyüdüğünü fark etmemek.',
            '<b>Yön değişikliğini kaçırmak:</b> Öbür yöne bakan kuşu “aynı kuş” sanmak.',
            '<b>Dönüşümü iki kez saymak:</b> Kuşun kelebeğe dönüşmesini “bir kuş gitti, bir kelebek geldi” diye iki fark saymak.',
            '<b>Kalan parçayı ayrı saymak:</b> Kaybolan çiçeğin yerinde kalan sapı ya da kurbağanın oturduğu nilüfer yaprağını ayrı bir fark sanmak.',
            '<b>Rastgele bakmak:</b> Resmin bir yerinden ötekine atlarken bir köşeyi hiç taramamak.',
            '<b>Erken durmak:</b> Birkaç fark bulunca aramayı bırakmak; kolay sorularda bile 3 fark olabilir.',
          ],
        },
        {
          t: 'kutu',
          tur: 'veli',
          baslik: 'Velilere öneri',
          html: 'Çocuğunuz yanlış sayı bulduğunda doğru cevabı söylemek yerine <b>“Hangi bölgelere baktın?”</b> diye sorun ve kontrol listesini birlikte uygulayın. Kaçırılan farkın türü (renk mi, boyut mu, yön mü) çocuğun neye daha dikkatli bakması gerektiğini gösterir.',
        },
      ],
    },
    {
      id: 'evde',
      baslik: 'Evde nasıl çalışılır?',
      bloklar: [
        { t: 'p', html: 'Fark bulma, gündelik hayatta oynanabilecek en kolay dikkat oyunlarından biridir. Birkaç oyuncak ya da bir kâğıt kalem yeterlidir.' },
        {
          t: 'liste',
          maddeler: [
            '<b>“Ne değişti?” oyunu:</b> Masaya 6-8 nesne dizin. Çocuk 20 saniye baksın, sonra gözlerini kapatsın. Bir nesneyi kaldırın, yerini ya da yönünü değiştirin; çocuk neyin değiştiğini bulsun.',
            '<b>Kendi fark bulmacanız:</b> Basit bir resmi iki kez çizin (ev, ağaç, güneş). İkinci resimde 2-3 şeyi değiştirin: bir pencereyi silin, güneşin rengini değiştirin, ağacı büyütün. Sonra çocuk size bulmaca hazırlasın.',
            '<b>Fotoğrafla oyun:</b> Oyuncaklardan bir düzen kurup telefonla fotoğraf çekin; bir şeyi değiştirip ikinci fotoğrafı çekin. İki fotoğrafı yan yana karşılaştırın.',
            '<b>Zorluk sırası:</b> Önce kaybolan nesneler ve renk farkları, sonra boyut, en son yön ve dönüşüm farkları.',
            '<b>Süre:</b> Haftada birkaç kez 10-15 dakika yeterli. Süre tutmayın; amaç hız değil, sistemli bakmaktır.',
          ],
        },
        {
          t: 'kutu',
          tur: 'veli',
          baslik: 'Soru sorarak yönlendirin',
          html: '<b>“Önce hangi bölgeye bakalım?”</b>, <b>“Bu kuş aynı yöne mi bakıyor?”</b>, <b>“Bunu saydık mı?”</b> gibi sorular, çocuğun kendi tarama düzenini kurmasına yardım eder. Bulamadığı farkı hemen göstermek yerine bölgesini söyleyin: “Sağ altta bir fark daha var.”',
        },
      ],
    },
    {
      id: 'alistirma',
      baslik: 'Alıştırmalar',
      bloklar: [
        { t: 'p', html: 'Aşağıdaki 8 soruyu çocuğunuzla birlikte çözün. Her soruda farkları bölge bölge bulup sayın, sonra şıklara bakın. Telefonda resimler küçük görünürse iki parmakla yakınlaştırın. Cevabı ve farkların listesini düğmeyle görebilirsiniz.' },
        {
          t: 'alistirma',
          sorular: [
            { soru: '1-fark-easy-038', aciklama: '3 fark, üçü de alttaki resimde eksik: 1) sağdaki pembe kelebek, 2) sağ kenardaki tavuk, 3) soldaki iki koyundan alttaki.' },
            { soru: '2-fark-easy-013', aciklama: '3 fark: 1) sol üstteki kırmızı balon alttaki resimde yok, 2) ortadaki sarı balon altta kırmızı, 3) sağdaki pembe kelebek altta mavi.' },
            { soru: '3-fark-easy-033', aciklama: '3 fark: 1) güneşin sağındaki kırmızı uçurtma alttaki resimde yok, 2) aşağıdaki mor uçurtma altta kırmızı, 3) iki pembe kelebekten aşağıdaki, alttaki resimde sarı.' },
            { soru: '2-fark-medium-041', aciklama: '3 fark, üçü de alttaki resimde eksik: 1) en soldaki kırmızı çiçek (yalnız sapı kalmış), 2) soldaki mavi kelebek, 3) sarı yılan.' },
            { soru: '3-fark-medium-051', aciklama: '4 fark: 1) sol üstteki pembe kelebek altta daha büyük, 2) mavi kelebeğin üstündeki pembe kelebek altta yok, 3) sağdaki mor çiçek altta sarı, 4) sol alttaki kurbağa altta yok.' },
            { soru: '1-fark-hard-011', aciklama: '5 fark: 1) soldaki büyük kırmızı çiçek ve 2) onun sağ üstündeki ikinci kırmızı çiçek altta yok (ikisinin de sapı kalmış), 3) sağ kenardaki mor çiçek altta turuncu, 4) sol üstteki küçük sarı çiçek altta daha büyük, 5) sağdaki sarı çiçek altta daha büyük.' },
            { soru: '2-fark-hard-041', aciklama: '5 fark: 1) sol kenardaki kırmızı çiçek altta mor, 2) sağdaki iki mor çiçekten üstteki ve 3) alttaki altta yok, 4) iki arıdan üstteki (sarı çiçeğin sağındaki) altta yok, 5) soldaki yeşil kurbağa altta turuncu.' },
            { soru: '3-fark-hard-052', aciklama: '4 fark: 1) sağdaki mavi kuş altta sarı, 2) sağdaki yusufçuk altta yok, 3) soldaki kurbağa altta yok (nilüfer yaprağı yerinde duruyor), 4) sağdaki ördek altta yok.' },
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
      baslik: 'İki resim arasında kaç fark var?',
      soru: '2-fark-easy-021',
      maddeler: ['Aynı sahnenin iki resmi üst üste', 'Alttaki resimde bazı nesneler değişmiş', 'Farkları say, sayıyı şıklarda bul'],
    },
    { t: 'metin', ust: 'Kural 1', baslik: 'Aynı yere bak', diyagram: 'ayniYer', maddeler: ['Üstteki resimde bir nesne seç.', 'Alttaki resimde tam aynı yere bak.'] },
    { t: 'metin', ust: 'Kural 2', baslik: 'Bölgelere ayır, sırayla tara', diyagram: 'bolgeler', maddeler: ['Resmi dört parçaya böl.', 'Kitap okur gibi: soldan sağa, yukarıdan aşağıya.'] },
    { t: 'metin', ust: 'Kural 3', baslik: 'Kontrol listesi', diyagram: 'kontrolListesi', maddeler: ['Renk ve boyut aynı mı?', 'Şekil aynı mı, nesne eksik mi?', 'Aynı yöne mi bakıyor?'] },
    { t: 'metin', ust: 'Kural 4', baslik: 'İşaretle ve say', diyagram: 'isaretle', maddeler: ['Her farka numara ver.', 'Aynı farkı iki kez sayma.'] },
    { t: 'soru', ust: 'Örnek 1 · Kolay', baslik: 'İki resim arasında kaç fark var?', soru: '1-fark-easy-001' },
    {
      t: 'cevap',
      ust: 'Örnek 1 · Çözüm',
      baslik: 'Kelebeklere dikkat: 2 fark',
      soru: '1-fark-easy-001',
      adimlar: ['Pembe kelebek alttaki resimde yok', 'Mavi kelebek alttaki resimde turuncu', 'Gerisi aynı: 2 fark'],
    },
    { t: 'soru', ust: 'Örnek 2 · Orta', baslik: 'İki resim arasında kaç fark var?', soru: '1-fark-medium-030' },
    {
      t: 'cevap',
      ust: 'Örnek 2 · Çözüm',
      baslik: 'Kaybolma, renk, boyut: 3 fark',
      soru: '1-fark-medium-030',
      adimlar: ['Sol üstteki mavi balon yok', 'Ortadaki kırmızı balon mavi olmuş', 'Mor parti şapkası büyümüş'],
    },
    { t: 'soru', ust: 'Örnek 3 · Zor', baslik: 'İki resim arasında kaç fark var?', soru: '3-fark-hard-049' },
    {
      t: 'cevap',
      ust: 'Örnek 3 · Çözüm',
      baslik: 'Dönüşüm tek fark sayılır: 4 fark',
      soru: '3-fark-hard-049',
      adimlar: ['Soldaki kuş yok, sağdaki kuş kelebek olmuş', 'Üstteki yengeç büyümüş', 'Sağdaki üstteki kova büyümüş'],
    },
    { t: 'soru', ust: 'Örnek 4 · Zor', baslik: 'İki resim arasında kaç fark var?', soru: '3-fark-hard-027' },
    {
      t: 'cevap',
      ust: 'Örnek 4 · Çözüm',
      baslik: 'Yöne de bak: 5 fark',
      soru: '3-fark-hard-027',
      adimlar: ['Kuş öbür yöne bakıyor', 'Sağdaki penguen büyümüş', 'Kardan adam, tavşan ve küçük penguen yok'],
    },
    {
      t: 'metin',
      ust: 'Yöntem',
      baslik: '5 adımda çözüm',
      numarali: true,
      maddeler: ['Resmi tanı', 'Dört bölgeye ayır', 'Nesne nesne karşılaştır', 'İşaretle ve say', 'Şıklarla kontrol et'],
    },
    {
      t: 'metin',
      ust: 'Dikkat',
      baslik: 'Çeldirici tuzakları',
      maddeler: ['Büyümeyi kaçırmak', 'Yön değişikliğini kaçırmak', 'Dönüşümü iki fark saymak', 'Kalan sapı ayrı fark sanmak', 'Birkaç fark bulunca durmak'],
    },
    {
      t: 'metin',
      ust: 'Evde',
      baslik: '“Ne değişti?” oyunu',
      maddeler: ['Masaya 6-8 nesne diz, 20 saniye baksın', 'Gözler kapalıyken bir şeyi değiştir', '“Ne değişti?” diye sor', 'Sonra çocuk sana bulmaca hazırlasın'],
    },
    { t: 'kapanis' },
  ],
};

export default konu;
