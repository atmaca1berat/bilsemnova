import type { Konu } from '../konu-tipleri';

// Küp konu anlatımı. Örneklerin ve alıştırmaların hepsi soru görselinden bağımsız çözüldü ve cevap anahtarıyla
// karşılaştırıldı (27 Eylül 2026). Görünmeyen küp varsayımına dayanan sorular (gizli küp türleri, kesikli/saydam
// küp çizimleri) kullanılmadı; bütün sayma sorularında her küpün en az bir yüzü görünür.

const konu: Konu = {
  slug: 'kup-sayma',
  ad: 'Küp',
  alan: 'Görsel Yetenek ve Algı',
  siniflar: '1-3. sınıf',
  ozet: 'Küp soruları nasıl çözülür? Küp sayma, önden görünüş ve açınım için 5 kural, 7 çözümlü örnek ve 8 alıştırmayla ücretsiz BİLSEM hazırlık anlatımı.',
  giris:
    'Küp sorularında çocuk, küplerden yapılmış bir yığındaki küpleri sayar, yığına önden bakınca ne göreceğini bulur ya da düz bir açınımın katlanınca hangi küpe dönüşeceğini zihninde canlandırır. Bu anlatımda soruların arkasındaki beş kuralı, adım adım çözülmüş örnekleri ve alıştırmaları bulacaksınız.',
  okumaDakika: 13,
  uygulamadakiSoru: 1026,
  guncelleme: '2026-09-27',
  bolumler: [
    {
      id: 'nedir',
      baslik: 'Küp soruları nedir?',
      bloklar: [
        {
          t: 'p',
          html: 'Küp soruları, küplerden kurulmuş yığınları ve küp açınımlarını konu alan görsel-uzamsal düşünme sorularıdır; zekâ testlerinde ve BİLSEM\'e hazırlık materyallerinde sık karşılaşılır. Resim iki boyutludur ama çocuktan, yığını üç boyutlu bir nesne gibi düşünmesi beklenir: <b>kaç küp var?</b>, <b>önden nasıl görünür?</b>, <b>açınım katlanınca hangi küp olur?</b>',
        },
        { t: 'sorugorsel', soru: '3-kup-medium-016', aciklama: 'Örnek bir küp sayma sorusu: merdiven biçiminde dizilmiş sarı küplerin sayısı soruluyor.' },
        { t: 'p', html: 'Bu sorularda çocuk şu becerileri birlikte kullanır:' },
        {
          t: 'liste',
          maddeler: [
            '<b>Düzenli sayma:</b> Küpleri kat kat ya da sütun sütun, hiçbirini atlamadan ve iki kez saymadan saymak.',
            '<b>Zihinde canlandırma:</b> Resimdeki yığını üç boyutlu düşünmek, başka bir yönden bakınca ne görüleceğini bulmak.',
            '<b>Parça-bütün ilişkisi:</b> Bir yığını tam bir bloğa tamamlamak için eksik küpleri hesaplamak.',
            '<b>Katlama ve açma:</b> Düz bir açınımı zihinde katlayıp hangi yüzlerin karşı karşıya geleceğini bulmak.',
          ],
        },
        {
          t: 'p',
          html: 'BilsemNova uygulamasında 1, 2 ve 3. sınıf için ayrı ayrı 342\'şer, toplam <b>1026 küp sorusu</b> var. Sorular kolay, orta ve zor olmak üzere üç seviyededir; küp sayma, renkli küp sayma, eksik küp, önden görünüş ve açınım gibi türleri kapsar.',
        },
      ],
    },
    {
      id: 'kurallar',
      baslik: 'Beş temel kural',
      bloklar: [
        { t: 'p', html: 'Küp sorularının çoğu aşağıdaki beş kurala dayanır. İlk üçü küp yığınları, son ikisi açınımlar içindir.' },
        {
          t: 'kural',
          no: 1,
          baslik: 'Kat kat ya da sütun sütun say',
          html: 'Küpleri rastgele saymak, bazılarını atlamaya ya da iki kez saymaya yol açar. Önce <b>en alttaki katı</b>, sonra üstündeki katları say. Ya da her sütunun kaç küp yüksekliğinde olduğunu bulup <b>sütunları topla</b>. İki yol da aynı sonucu verir; biriyle sayıp öbürüyle kontrol edebilirsin.',
          diyagram: 'katman',
        },
        {
          t: 'kural',
          no: 2,
          baslik: 'Eksik küp = gereken − var olan',
          html: 'Bir yığını tam bir bloğa tamamlamak için önce blokta <b>kaç küp olması gerektiğini</b> bul: 3×3 kare 9, 2×2×2 küp 8 küptür. Sonra yığındaki küpleri say ve <b>gerekenden çıkar</b>. Eksik küpler, bloğun boş kalan yerleridir.',
          diyagram: 'eksik',
        },
        {
          t: 'kural',
          no: 3,
          baslik: 'Önden bakınca her sütun, yüksekliği kadar kare olur',
          html: 'Önden bakan kişi küplerin ön yüzlerini düz bir resim gibi görür: her sütun, <b>yüksekliği kadar kare</b> olur. Sütunları soldan sağa aynı sırayla çiz. Altında boşluk olan bir küp varsa (köprü gibi), onun ön yüzünü kendi katına çiz ve altındaki boşluğu resimde de boş bırak. Resimdeki tek sıralı yığınlarda ön taraf, sütunların yan yana göründüğü, küplerin <b>sol yüzlerinin</b> baktığı taraftır. Şıklarda sık görülen tuzak, doğru şeklin <b>ayna görüntüsü</b>, baş aşağı ya da yan yatırılmış hâlidir.',
          diyagram: 'onden',
        },
        {
          t: 'kural',
          no: 4,
          baslik: 'Açınımda karşılıklı yüzleri bul',
          html: 'Bir sırada yan yana duran üç karenin <b>baştaki ile sondaki</b> karşılıklıdır; aralarında bir kare vardır. Yan yana dört karede 1. ile 3., 2. ile 4. kare karşılıklıdır; dörtlünün üstünde ve altında kalan iki kare de birbirinin karşısına gelir. Küpe bir köşeden bakınca üç yüz görünür ve bu üç yüzün <b>hiçbiri birbirinin karşısında değildir</b>: her çiftten yalnız biri görünür.',
          diyagram: 'karsilikli',
        },
        {
          t: 'kural',
          no: 5,
          baslik: 'Her altı kare küp olmaz',
          html: 'Bir açınımın küp olması için tam <b>6 kare</b> gerekir. Açınımda <b>2×2\'lik kare bloğu</b> olamaz: bir köşede ancak üç yüz buluşur. Yan yana dört karenin <b>aynı yanında iki kare</b> varsa, katlayınca iki kare aynı yüzün yerine biner ve bir yüz açık kalır; bu iki kare dörtlünün iki ayrı yanında olmalıdır. Bu kontroller her yanlış açınımı yakalamaz: emin olamazsan bir kareyi taban say, öbürlerini zihninde tek tek katla; iki kare aynı yüze geliyorsa küp olmaz.',
          diyagram: 'acinim',
        },
        {
          t: 'kutu',
          tur: 'dikkat',
          baslik: 'Yüz değil, küp say',
          html: 'Bir köşedeki küpün iki, hatta üç yüzü birden görünebilir; ama o <b>tek bir küptür</b>. Renkli küp sorularında da aynı dikkat gerekir: bir küpün iki yüzü aynı renkte görünüyorsa onu bir kez sayın. Saydığınız küpleri parmakla ya da kalemle işaretlemek bu hatayı önler.',
        },
      ],
    },
    {
      id: 'sayma',
      baslik: 'Küp sayma soruları',
      bloklar: [
        {
          t: 'p',
          html: 'Sayma sorularında bazen bütün küpler, bazen yalnız bir renkteki küpler, bazen de bir yığını tamamlamak için gereken küpler sorulur. Üçünde de yöntem aynıdır: yığını katlara ya da sütunlara ayır, her küpü bir kez say.',
        },
        {
          t: 'ornek',
          soru: '1-kup-easy-144',
          baslik: 'Kat kat sayma',
          adimlar: [
            'Önce en alttaki kata bak: sol üstten sağ alta doğru yan yana dizilmiş <b>3 küp</b> var.',
            'Sonra üst kata bak: ortadaki küpün üstünde <b>1 küp</b> duruyor.',
            'Başka kat yok. Üstteki küp ortadaki küpün üstünde duruyor, havada duran küp yok; bu yüzden saklı bir küp düşünmeye gerek yok.',
            'Kat kat topla: 3 + 1 = <b>4 küp</b>.',
          ],
          eleme: 'B (3) yalnız alttaki sırayı sayar, üstteki küpü unutur. A (5) fazladır; bir küpün iki yüzünü ayrı küp saymak bu hataya yol açar. Doğru cevap <b>C</b>.',
        },
        {
          t: 'ornek',
          soru: '2-kup-hard-112',
          baslik: 'Renkli küp sayma',
          adimlar: [
            'Yığın, 3 sütun ve 3 kattan oluşan tek sıralı bir duvar: 9 küpün hepsinin ön yüzü görünüyor.',
            'En üst kattaki 3 küp kırmızı. Mor küpleri sütun sütun say: solda alttaki <b>2</b> küp, ortada alttaki <b>2</b> küp, sağda yalnız en alttaki <b>1</b> küp mor.',
            'Sağ alttaki mor küpün hem önü hem yanı görünüyor, ama o tek bir küp.',
            'Toplam: 2 + 2 + 1 = <b>5 mor küp</b>.',
          ],
          eleme: 'A (4) kırmızı küplerin sayısıdır, soru mor küpleri soruyor. D (6) mor yüzleri saymaktan gelir: sağ alttaki küpün iki yüzü görünüyor. B (3) eksik saymadır. Doğru cevap <b>C</b>.',
        },
        {
          t: 'ornek',
          soru: '3-kup-hard-075',
          baslik: 'Eksik küpü bulma',
          adimlar: [
            'Hedef 2×2×2 büyük küp: her katta 2 × 2 = 4, iki katta <b>8 küp</b> olmalı.',
            'Yığının alt katı dolu: 4 küp. Arkadaki küpün üst yüzünün yalnız bir parçası görünüyor, ama o küp oradadır.',
            'Üst katta yalnız sol köşede <b>1 küp</b> var. Yığında toplam 4 + 1 = 5 küp.',
            'Eksik küp: 8 − 5 = <b>3</b>. Üçü de üst kattaki boş yerlere gelir.',
          ],
          eleme: 'B (5) yığındaki küp sayısıdır, sorulan eksik sayı değil. A (4) üst kattaki küpü görmeyip bütün üst katı eksik saymaktır; C (2) boş yerlerden birini atlamaktır. Doğru cevap <b>D</b>.',
        },
      ],
    },
    {
      id: 'onden',
      baslik: 'Önden görünüş soruları',
      bloklar: [
        {
          t: 'p',
          html: 'Bu sorularda yığına önden bakınca görülen şekil sorulur. Yığın tek sıra küpten oluşuyorsa, küplerin ön yüzlerini soldan sağa düz bir kareler resmine çevirmek yeter. Şıklardaki yanlış şekiller genellikle doğru şeklin döndürülmüş, baş aşağı çevrilmiş ya da ayna görüntüsü hâlleridir.',
        },
        {
          t: 'ornek',
          soru: '2-kup-medium-109',
          baslik: 'Sütunları kareye çevirme',
          adimlar: [
            'Yığın tek sıra küpten oluşuyor. Sütunların yan yana göründüğü taraf, küplerin sol yüzlerinin baktığı taraftır: ön burası.',
            'Sütunları soldan sağa say: solda <b>1</b>, ortada <b>3</b>, sağda <b>1</b> küp.',
            'Önden bakınca her sütun yüksekliği kadar kare olur: altta yan yana 3 kare, ortadan yukarı doğru toplam 3 kare.',
            'Ortaya çıkan şekil, baş aşağı çevrilmiş bir T harfine benzer.',
          ],
          eleme: 'C baş aşağı çevrilmiş hâl: sütun yukarı değil aşağı uzanıyor. D hem baş aşağı çevrilmiş hem de sütunu kısalmış. B ise şeklin yan yatırılmış hâli. Doğru cevap <b>A</b>.',
        },
      ],
    },
    {
      id: 'acinim',
      baslik: 'Açınım soruları',
      bloklar: [
        {
          t: 'p',
          html: 'Açınım, bir küpün kenarlarından kesilip düz bir kâğıda açılmış hâlidir. Uygulamada dört tür açınım sorusu var: açınım kapatılınca <b>hangi yüzlerin karşılıklı geldiği</b>, açınımın <b>hangi küpe dönüştüğü</b>, <b>hangi açınımın küp olabileceği</b> ve verilen sayı çiftlerinin <b>hangi açınımda karşılıklı yüzlere geldiği</b>.',
        },
        {
          t: 'ornek',
          soru: '2-kup-medium-009',
          baslik: 'Karşılıklı yüzleri eşleştirme',
          adimlar: [
            'Ortadaki yan yana dört kareye bak: soldan sağa üçgen, kare, kalp, baklava.',
            'Bir kare atlayarak eşleştir: <b>üçgen ile kalp</b>, <b>kare ile baklava</b> karşılıklıdır.',
            'Dörtlünün üstündeki daire ile altındaki yıldız da karşılıklıdır: <b>daire ile yıldız</b>.',
            'Bu üç eşleşmenin hepsini birden gösteren şıkkı ara.',
          ],
          eleme: 'A\'da üçgen ile baklava, kare ile kalp eşleşmiş; bunlar katlanınca yan yana gelir. B ve C\'de yıldız üçgenle eşleşmiş, oysa yıldızın karşısında daire vardır. Doğru cevap <b>D</b>.',
        },
        {
          t: 'ornek',
          soru: '1-kup-hard-029',
          baslik: 'Açınımdan küpe',
          adimlar: [
            'Önce karşılıklı çiftleri bul: dörtlüde kare ile baklava, kalp ile yıldız; kalbin üstündeki daire ile altındaki üçgen.',
            'Karşılıklı iki yüz küpte <b>aynı anda görünmez</b>. A\'da kare ile baklava, C\'de kalp ile yıldız birlikte görünüyor: ikisi de olamaz.',
            'B\'de daire, kalp ve baklava görünüyor. Açınımda daire kalbin üstünde, baklava kalbin sağında; küpte de daire üstte, kalp sol yüzde, baklava sağ yüzde duruyor.',
          ],
          eleme: 'A ve C karşılıklı yüzleri birlikte gösteriyor. Doğru cevap <b>B</b>.',
        },
        {
          t: 'ornek',
          soru: '3-kup-medium-125',
          baslik: 'Hangi açınım küp olur?',
          adimlar: [
            'Önce kareleri say: C\'de yalnız <b>5 kare</b> var, küp için 6 kare gerekir.',
            'B\'de <b>2×2\'lik kare bloğu</b> var: bir köşede dört kare buluşamaz.',
            'A\'da iki kare, dört karelik sıranın <b>aynı yanında</b> üst üste duruyor: katlayınca üstteki kare bir yan yüzün üstüne biner, alt yüz açık kalır.',
            'D\'de dört karelik sıranın bir yanında bir kare, öbür yanında bir kare var: biri üst, biri alt yüz olur ve küp kapanır.',
          ],
          eleme: 'A, B ve C katlanınca kapanmaz. Doğru cevap <b>D</b>.',
        },
        {
          t: 'kutu',
          tur: 'ipucu',
          baslik: 'Karşılıklı yüzler hızlı eleme sağlar',
          html: 'Açınımdan küpe sorularında şıklardaki küplerin üç yüzüne bakın: iki karşılıklı yüz birlikte görünüyorsa o şık hemen elenir. 1. sınıf sorularında bu elemeden sonra genellikle tek şık kalır; 2 ve 3. sınıfta ise çoğunlukla iki şık kalır. O ikisini ayırmak için açınımı zihninde katlayıp üç yüzün birbirine göre yerini (hangisi üstte, hangisi solda, hangisi sağda) kontrol edin. Küp çizimlerinde yan yüzler biraz koyu boyanır; turuncu bir yüz kahverengimsi, sarı bir yüz zeytin rengi görünebilir.',
        },
      ],
    },
    {
      id: 'yontem',
      baslik: '5 adımda çözüm yöntemi',
      bloklar: [
        { t: 'p', html: 'Her küp sorusunda aynı sırayı izlemek hem hızı hem doğruluğu artırır:' },
        {
          t: 'liste',
          numarali: true,
          maddeler: [
            '<b>Ne sorulduğunu bul.</b> Bütün küpler mi, bir renkteki küpler mi, eksik küpler mi, bir görünüş mü, yoksa bir açınım mı?',
            '<b>Yığını katlara ya da sütunlara ayır.</b> Her küpü bir kez say; saydığını işaretle.',
            '<b>Eksik küp sorusunda hedefi hesapla.</b> Gereken küp sayısından yığındakini çıkar.',
            '<b>Görünüş sorusunda her küpün ön yüzünü yerine çiz.</b> Soldan sağa sırayı koru; altı boş küpün altını boş bırak.',
            '<b>Açınımda önce karşılıklı çiftleri bul.</b> Kare sayısını, 2×2 bloğu ve aynı yandaki kareleri kontrol et.',
          ],
        },
        {
          t: 'kutu',
          tur: 'ipucu',
          baslik: 'İki yolla say',
          html: 'Sayma sorularında bulduğunuz sayıyı ikinci bir yolla kontrol edin: kat kat saydıysanız bir de sütun sütun sayın. İki sonuç aynıysa saymanız büyük olasılıkla doğrudur; farklıysa bir küp atlanmış ya da iki kez sayılmıştır.',
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
            '<b>Yüzleri küp sanmak:</b> Köşedeki bir küpün iki ya da üç yüzünü ayrı küpler gibi saymak.',
            '<b>Bir katı unutmak:</b> Yalnız en alttaki sırayı ya da yalnız en üstteki küpleri saymak.',
            '<b>Var olanı eksik sanmak:</b> Eksik küp sorusunda yığındaki küp sayısını cevap olarak seçmek.',
            '<b>Rengi karıştırmak:</b> Sorulan rengin yerine başka bir rengin küplerini saymak.',
            '<b>Ters çevrilmiş görünüş:</b> Önden görünüşün baş aşağı, yan yatmış ya da ayna görüntüsü hâlini seçmek.',
            '<b>Bitişik kareleri karşılıklı sanmak:</b> Açınımda yan yana duran iki kareyi karşılıklı saymak.',
            '<b>Kare sayısını kontrol etmemek:</b> 5 kareli ya da 2×2 bloklu bir açınımı küp sanmak.',
          ],
        },
        {
          t: 'kutu',
          tur: 'veli',
          baslik: 'Velilere öneri',
          html: 'Çocuğunuz yanlış bir şık seçtiğinde doğrusunu hemen söylemek yerine <b>“Bu sayı nereden çıkmış olabilir?”</b> diye birlikte düşünün. Örneğin 6 mor yüz sayan çocuk, bir küpün iki yüzünü ayrı saydığını kendisi fark eder. Yanlış şıkları açıklayabilen çocuk, kuralı gerçekten öğrenmiş demektir.',
        },
      ],
    },
    {
      id: 'evde',
      baslik: 'Evde nasıl çalışılır?',
      bloklar: [
        {
          t: 'p',
          html: 'Küp soruları, gerçek küplerle çalışmaya çok uygundur. Elle kurulan ve bozulan yığınlar, zihinde canlandırma becerisini hızla güçlendirir.',
        },
        {
          t: 'liste',
          maddeler: [
            '<b>Malzeme:</b> Birbirine takılan oyuncak küpler, şeker küpleri ya da aynı boyda tahta bloklar; açınım için kareli kâğıt, makas ve bant.',
            '<b>“Kaç küp?” oyunu:</b> Masaya 5-10 küplük bir yığın kurun. Çocuk önce tek bir yerden bakarak saysın, sonra yığını katlara ayırıp kontrol etsin.',
            '<b>Önden bak, çiz:</b> Tek sıralı bir yığını masanın kenarına koyun. Çocuk göz hizasından önden bakıp gördüğü kareleri kâğıda çizsin, sonra karşı taraftan bakıp şeklin nasıl ters döndüğünü görsün.',
            '<b>Açınım kes, katla:</b> Kareli kâğıda 6 karelik açınımlar çizip kesin. Karşılıklı gelecek yüzleri önceden tahmin edip aynı renge boyayın, sonra katlayıp kontrol edin. Küp olmayan bir açınımı da deneyip neden kapanmadığını konuşun.',
            '<b>Süre:</b> Haftada birkaç kez 10-15 dakika yeterli. Kısa ve düzenli çalışma, uzun ve seyrek çalışmadan daha etkilidir.',
          ],
        },
        {
          t: 'kutu',
          tur: 'veli',
          baslik: 'Soru sorarak yönlendirin',
          html: '<b>“En alt katta kaç küp var?”</b>, <b>“Bu küpün kaç yüzünü görüyorsun?”</b>, <b>“Bu iki kare katlanınca yan yana mı gelir, karşı karşıya mı?”</b> gibi sorular, çocuğun kuralı kendisinin bulmasını sağlar. Yanlış tahmin bir öğrenme fırsatıdır; yığını birlikte bozup yeniden kurmak en iyi açıklamadır.',
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
            { soru: '3-kup-medium-016', aciklama: 'Sütun sütun say: solda 3, ortada 2, sağda 1 küp var. 3 + 2 + 1 = 6 küp.' },
            { soru: '1-kup-easy-120', aciklama: 'Kırmızı küpler alt katta: soldaki ve ortadaki sütunların alt küpleri. Üstteki mavi ve sarı küp ile sağdaki mavi küp sayılmaz: 2 kırmızı küp.' },
            { soru: '3-kup-medium-026', aciklama: 'Yığın, 2 sıra × 3 küplük düz bir kat: 6 küp. 3×3 kare için 9 küp gerekir; 9 − 6 = 3 küp daha.' },
            { soru: '2-kup-medium-005', aciklama: 'Sol yüzlerin baktığı yerden bakınca sütunlar soldan sağa 3, 1 ve 1 küp: solda yükselen 3 kare ve altta uzanan 3 kare, yani L harfi. C bu şeklin ayna görüntüsüdür.' },
            { soru: '2-kup-easy-087', aciklama: 'Yan yana dörtlüde bir kare atla: kare ile üçgen, yıldız ile daire karşılıklı. Yıldızın üstündeki kalp ile altındaki çarpı da karşılıklıdır.' },
            { soru: '1-kup-easy-068', aciklama: 'Karşılıklı renkler: yeşil ile turuncu, kırmızı ile sarı, mor ile mavi. A\'da yeşil ile turuncu, C\'de kırmızı ile sarı birlikte görünüyor; B\'de mor üstte, kırmızı sol yüzde, turuncu sağ yüzde.' },
            { soru: '3-kup-hard-055', aciklama: 'B\'de dört karelik sıranın bir yanında bir, öbür yanında bir kare var: küp olur. A, C ve D katlanınca iki kare aynı yüzün yerine biner.' },
            { soru: '3-kup-hard-074', aciklama: 'Kat kat say: alt katta yan yana 5 küp, ikinci katta 3 küp (solda, ortada, sağda), üçüncü ve dördüncü katta ortadaki kulede birer küp. 5 + 3 + 1 + 1 = 10 küp.' },
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
      baslik: 'Say, bak, katla: küp soruları',
      soru: '1-kup-easy-144',
      maddeler: ['Yığındaki küpleri say', 'Yığına önden bakınca görüneni bul', 'Açınımı zihinde katlayıp küp yap'],
    },
    { t: 'metin', ust: 'Kural 1', baslik: 'Kat kat ya da sütun sütun say', diyagram: 'katman', maddeler: ['Önce alt kat, sonra üst katlar', 'Ya da sütun yüksekliklerini topla'] },
    { t: 'metin', ust: 'Kural 2', baslik: 'Eksik küp = gereken − var olan', diyagram: 'eksik', maddeler: ['2×2×2 büyük küp: 8 küp', '8 − 5 = 3 küp eksik'] },
    { t: 'metin', ust: 'Kural 3', baslik: 'Önden bakınca sütunlar kare olur', diyagram: 'onden', maddeler: ['Her küpün ön yüzü bir kare', 'Soldan sağa sırayı koru', 'Altı boş küpün altı boş kalır'] },
    { t: 'metin', ust: 'Kural 4', baslik: 'Açınımda karşılıklı yüzleri bul', diyagram: 'karsilikli', maddeler: ['Bir kare atla: 1–3, 2–4', 'Karşılıklı iki yüz birlikte görünmez'] },
    { t: 'metin', ust: 'Kural 5', baslik: 'Her altı kare küp olmaz', diyagram: 'acinim', maddeler: ['Tam 6 kare gerekir', '2×2 blok ve aynı yanda iki kare olmaz'] },
    { t: 'soru', ust: 'Örnek 1 · Eksik küp', baslik: 'Kaç küp daha gerekir?', soru: '3-kup-hard-075' },
    {
      t: 'cevap',
      ust: 'Örnek 1 · Çözüm',
      baslik: 'Önce hedefi hesapla',
      soru: '3-kup-hard-075',
      adimlar: ['2×2×2 büyük küp: 8 küp gerekir.', 'Yığında 5 küp var: alt kat 4, üstte 1.', '8 − 5 = 3 küp eksik.'],
    },
    { t: 'soru', ust: 'Örnek 2 · Önden görünüş', baslik: 'Önden bakınca ne görülür?', soru: '2-kup-medium-109' },
    {
      t: 'cevap',
      ust: 'Örnek 2 · Çözüm',
      baslik: 'Sütunlar: 1, 3, 1',
      soru: '2-kup-medium-109',
      adimlar: ['Ön: sol yüzlerin baktığı taraf.', 'Soldan sağa sütunlar: 1, 3, 1 küp.', 'Altta 3 kare; ortadaki sütun 3 kare boyunda.'],
    },
    { t: 'soru', ust: 'Örnek 3 · Karşılıklı yüzler', baslik: 'Hangi yüzler karşılıklı gelir?', soru: '2-kup-medium-009' },
    {
      t: 'cevap',
      ust: 'Örnek 3 · Çözüm',
      baslik: 'Bir kare atlayarak eşleştir',
      soru: '2-kup-medium-009',
      adimlar: ['Dörtlüde: üçgen–kalp, kare–baklava.', 'Üstteki daire, alttaki yıldızın karşısında.', 'Üç eşleşmeyi birden gösteren şık doğru.'],
    },
    { t: 'soru', ust: 'Örnek 4 · Açınım', baslik: 'Hangisi katlanınca küp olur?', soru: '3-kup-medium-125' },
    {
      t: 'cevap',
      ust: 'Örnek 4 · Çözüm',
      baslik: 'Altı kare, doğru dizilim',
      soru: '3-kup-medium-125',
      adimlar: ['C: 5 kare; B: 2×2 blok. Olmaz.', 'A: iki kare aynı yanda. Olmaz.', 'D: iki yanda birer kare. Küp olur.'],
    },
    {
      t: 'metin',
      ust: 'Yöntem',
      baslik: '5 adımda çözüm',
      numarali: true,
      maddeler: ['Ne soruluyor: sayı, görünüş, açınım?', 'Kat kat ya da sütun sütun say', 'Eksik küp: gereken − var olan', 'Görünüş: sütun yüksekliklerini çiz', 'Açınım: önce karşılıklı çiftler'],
    },
    {
      t: 'metin',
      ust: 'Dikkat',
      baslik: 'Çeldirici tuzakları',
      maddeler: ['Bir küpün yüzlerini ayrı küp saymak', 'Var olanı eksik sanmak', 'Ters çevrilmiş görünüşü seçmek', 'Bitişik kareleri karşılıklı sanmak', '5 kareli açınımı küp sanmak'],
    },
    {
      t: 'metin',
      ust: 'Evde',
      baslik: '“Kaç küp?” oyunu',
      maddeler: ['Oyuncak küplerle 5-10 küplük yığın kur', 'Tek yerden bakıp say, katlara ayırıp kontrol et', 'Kâğıttan açınım kes, katla, dene', 'Haftada birkaç kez 10-15 dakika'],
    },
    { t: 'kapanis' },
  ],
};

export default konu;
