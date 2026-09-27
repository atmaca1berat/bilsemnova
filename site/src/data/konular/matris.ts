import type { Konu } from '../konu-tipleri';

// Matris konu anlatımı. Örneklerin ve alıştırmaların hepsi soru görselinden bağımsız çözüldü
// ve cevap anahtarıyla karşılaştırıldı (27 Eylül 2026). Açıklamalar sorunun kendi görseline göre yazıldı.

const konu: Konu = {
  slug: 'matris',
  ad: 'Matris',
  alan: 'Mantık ve Muhakeme',
  siniflar: '1-3. sınıf',
  ozet: 'Matris soruları nasıl çözülür? 6 temel kural, 7 çözümlü örnek ve 8 alıştırmayla BİLSEM hazırlığı için ücretsiz matris konu anlatımı.',
  giris:
    'Matris sorularında şekiller bir tabloya, çoğunlukla 3×3\'lük bir ızgaraya dizilir ve hücrelerden biri soru işaretiyle boş bırakılır. Çocuktan satırlarda ve sütunlarda saklı kuralı bulup eksik hücreyi tamamlaması beklenir. Bu anlatımda matrislerin arkasındaki altı kuralı, adım adım çözülmüş örnekleri ve alıştırmaları bulacaksınız.',
  okumaDakika: 12,
  uygulamadakiSoru: 1620,
  guncelleme: '2026-09-27',
  bolumler: [
    {
      id: 'nedir',
      baslik: 'Matris soruları nedir?',
      bloklar: [
        {
          t: 'p',
          html: 'Matris, şekillerin satırlar ve sütunlar hâlinde dizildiği bir tablodur. Her satırda (çoğu zaman her sütunda da) aynı kural işler; tablonun bir hücresi <b>soru işaretiyle</b> boş bırakılır. Akıl yürütmeyi ölçen testlerin en bilinen soru tiplerinden biridir ve BİLSEM\'e hazırlık materyallerinde sık görülür.',
        },
        { t: 'sorugorsel', soru: '2-matris-hard-022', aciklama: 'Örnek bir matris sorusu: her satırda renk aynı kalıyor, şekiller satırdan satıra yer değiştiriyor. Sağ alttaki hücre soru işaretiyle boş bırakılmış.' },
        {
          t: 'p',
          html: 'Soruların çoğu aynıdır: <b>“Soru işareti yerine ne gelmelidir?”</b> (Her sınıfta 21 soruda ise hangi hücrenin ya da şeklin diğerlerinden farklı olduğu sorulur.) Çocuk hücrelere tek tek bakmak yerine aralarındaki ilişkiyi arar. Bu sırada şu becerileri birlikte kullanır:',
        },
        {
          t: 'liste',
          maddeler: [
            '<b>Kural bulma:</b> Birkaç hücreden ortak değişimi çıkarmak.',
            '<b>Ayrıntıya dikkat:</b> Şekil, renk, sayı, boyut ve yönü ayrı ayrı görmek.',
            '<b>Sınama:</b> Bulduğu kuralı öbür satır ve sütunlarda doğrulamak.',
            '<b>Eleme:</b> Kurala uymayan şıkları gerekçesiyle ayıklamak.',
          ],
        },
        {
          t: 'p',
          html: 'BilsemNova uygulamasında 1, 2 ve 3. sınıf için ayrı ayrı 540\'ar, toplam <b>1620 matris sorusu</b> var. Sorular kolay, orta ve zor olmak üzere üç seviyededir; 1. sınıfta üç, 2 ve 3. sınıfta dört şık bulunur.',
        },
      ],
    },
    {
      id: 'kurallar',
      baslik: 'Altı temel kural',
      bloklar: [
        { t: 'p', html: 'Matris sorularının büyük çoğunluğu aşağıdaki altı kuraldan birine ya da ikisinin birleşimine dayanır. Kuralları tanıyan çocuk, ilk kez gördüğü bir matriste de nereye bakacağını bilir.' },
        {
          t: 'kural',
          no: 1,
          baslik: 'Önce satırlara, sonra sütunlara bak',
          html: 'Kuralı önce tam olan satırlarda ara: birinci ve ikinci satırda soldan sağa ne değişiyor? Bulduğun kuralı soru işaretinin satırına uygula, sonra <b>sütunla kontrol et</b>. İki yön aynı cevabı veriyorsa kural doğrudur. Üst üste koyma matrislerinde ise kural çoğu zaman yalnız satırlarda işler.',
          diyagram: 'satirSutun',
        },
        {
          t: 'kural',
          no: 2,
          baslik: 'Her satırda her şekil bir kez',
          html: 'Birçok matriste üç şekil her satırda ve her sütunda <b>birer kez</b> kullanılır. Soru işaretinin satırında ve sütununda hangi şekillerin olduğuna bak: ikisinde de <b>eksik kalan</b> şekil cevaptır. Şekiller satırdan satıra bir hücre kayarak da dizilebilir; kural yine aynıdır.',
          diyagram: 'latinKare',
        },
        {
          t: 'kural',
          no: 3,
          baslik: 'Sayı ve boyut adım adım değişir',
          html: 'Hücredeki nokta sayısı ya da şeklin büyüklüğü her adımda <b>aynı miktarda</b> artabilir ya da azalabilir. Önce iki komşu hücre arasındaki farkı bul (örneğin “bir nokta fazla”), sonra aynı farkı bir kez daha uygula.',
          diyagram: 'sayiBoyut',
        },
        {
          t: 'kural',
          no: 4,
          baslik: 'Yönü değişen şekil döner',
          html: 'Ok ya da şekil hücreden hücreye <b>aynı yönde ve aynı miktarda</b> döner. Dönüşün yönünü (saat yönü mü, tersi mi) ve miktarını (çeyrek tur mu, yarım tur mu) bul, bir adım daha çevir. 2×2\'lik matrislerde üstteki değişim aynen alttaki şekle uygulanır.',
          diyagram: 'yonDonme',
        },
        {
          t: 'kural',
          no: 5,
          baslik: 'Üst üste koy: birleşim, ortak parça, fark',
          html: 'Bazı matrislerde her satırın üçüncü hücresi, ilk iki hücrenin <b>üst üste konmasıyla</b> oluşur. <b>Birleşimde</b> iki hücredeki her şey kalır; <b>ortak parçada</b> yalnız ikisinde de olanlar kalır; <b>farkta</b> ikisinde de olanlar silinir, tek olanlar kalır. Hangisinin kullanıldığını tam satırlardan anla.',
          diyagram: 'bindirme',
        },
        {
          t: 'kural',
          no: 6,
          baslik: 'Her özelliği ayrı izle',
          html: 'Bazı zor matrislerde iki kural aynı anda işler: örneğin renk satırda aynı kalırken şekiller kayar ya da dıştaki şekil bir kurala, içteki başka bir kurala uyar. Rengi, şekli, sayıyı ve yönü <b>tek tek</b> takip et; doğru şık hepsine birden uymalıdır.',
          diyagram: 'ozellikAyir',
        },
        {
          t: 'kutu',
          tur: 'dikkat',
          baslik: 'Kural satırda yoksa sütuna bak',
          html: 'Bazı matrislerde satırlar birbirine hiç benzemez ama <b>her sütun kendi içinde aynıdır</b> ya da değişim yukarıdan aşağı doğru işler. Satırda kural bulamıyorsan sütunları dene; bazen de aynı şekil çapraz (köşegen) boyunca tekrar eder.',
        },
      ],
    },
    {
      id: 'dizilim',
      baslik: 'Her satırda bir kez: dizilim matrisleri',
      bloklar: [
        { t: 'p', html: 'En sık karşılaşılan matris türlerinden biridir. Her satırda aynı şekil takımı kullanılır, yalnız sıraları değişir. Cevap, soru işaretinin satırında ve sütununda eksik kalan şekildir.' },
        {
          t: 'ornek',
          soru: '1-matris-easy-160',
          baslik: 'Eksik şekli bul',
          adimlar: [
            'Her satırda aynı üç sarı şekil var: yıldız, baklava ve kalp. Satırdan satıra yalnız sıraları değişiyor.',
            'Üçüncü satırda kalp ve yıldız var; eksik olan <b>baklava</b>.',
            'Sütunla kontrol edelim: üçüncü sütunda da kalp ve yıldız var, eksik olan yine baklava.',
          ],
          eleme: 'A\'daki kalp ve B\'deki yıldız üçüncü satırda zaten var; aynı satırda ikinci kez yer alamaz. Doğru cevap <b>C</b>.',
        },
        {
          t: 'ornek',
          soru: '2-matris-medium-177',
          baslik: 'Kayan oklar',
          adimlar: [
            'Her satırda aynı üç ok var: kahverengi yukarı ok, pembe sağa ok ve kırmızı aşağı ok.',
            'Satırdan satıra oklar <b>bir hücre sağa kayıyor</b>; sağdan taşan ok satırın başına geçiyor.',
            'Kahverengi yukarı ok sol üstten başlayıp her satırda bir sağa geçiyor, üçüncü satırda en sağa, yani soru işaretine geliyor.',
            'Kontrol: üçüncü satırda pembe sağa ok ve kırmızı aşağı ok var; eksik olan <b>kahverengi yukarı ok</b>.',
          ],
          eleme: 'B, C ve D de kahverengi ama yönleri yanlış: sağa, aşağı ve sola bakıyorlar. Doğru cevap <b>A</b>.',
        },
      ],
    },
    {
      id: 'degisim',
      baslik: 'Adım adım değişen matrisler',
      bloklar: [
        { t: 'p', html: 'Bu türde bir özellik hücreden hücreye düzenli değişir: nokta sayısı artar, şekil büyür ya da ok döner. Değişimin miktarını bulup bir adım daha uygulamak yeterlidir.' },
        {
          t: 'ornek',
          soru: '2-matris-medium-173',
          baslik: 'Satırda ikişer, sütunda birer artan noktalar',
          adimlar: [
            'Noktaları sayalım. Birinci satır 3, 5, 7; ikinci satır 4, 6, 8. Her satırda soldan sağa <b>ikişer</b> artıyor.',
            'Üçüncü satır 5, 7 diye gidiyor; sıradaki 7 + 2 = <b>9</b>.',
            'Sütunla kontrol: üçüncü sütun 7, 8 diye yukarıdan aşağı birer artıyor; 8 + 1 = 9.',
            'Bütün noktalar mor; cevaptaki noktalar da mor olmalı.',
          ],
          eleme: 'A ve D\'de 8 nokta var, bir eksik. C\'deki noktalar hem pembe hem de 6 tane. Doğru cevap <b>B</b>.',
        },
        {
          t: 'ornek',
          soru: '3-matris-medium-019',
          baslik: 'Her adımda çeyrek tur',
          adimlar: [
            'Birinci satırda ok aşağı, sola, yukarı bakıyor: her adımda <b>saat yönünde çeyrek tur</b> dönüyor.',
            'İkinci satır da aynı kurala uyuyor: sola, yukarı, sağa.',
            'Üçüncü satır yukarı, sağa diye gidiyor; bir çeyrek tur daha dönünce ok <b>aşağı</b> bakar.',
          ],
          eleme: 'A sola, C yukarı bakıyor; B\'de iki ok üst üste çizilmiş. Doğru cevap <b>D</b>.',
        },
      ],
    },
    {
      id: 'bindirme',
      baslik: 'Üst üste koyma ve iki kurallı matrisler',
      bloklar: [
        { t: 'p', html: 'Bu matrislerde tek bir özelliğe bakmak yetmez. Ya her satırın üçüncü hücresi ilk iki hücrenin <b>üst üste konmasıyla</b> oluşur (birleşim, ortak parça ya da fark) ya da <b>iki kural aynı anda</b> işler. Önce tam satırlarda ne yapıldığını anlayın, sonra aynısını soru işaretinin satırına uygulayın.' },
        {
          t: 'ornek',
          soru: '1-matris-medium-031',
          baslik: 'Birleşim: iki hücre bir arada',
          adimlar: [
            'Birinci satıra bakalım: üçüncü hücrede, ilk iki hücredeki dört noktanın <b>hepsi</b> var. İkinci satırda da öyle. Kural: birleşim.',
            'Üçüncü satırda ilk hücrede sol üst ve sağ alt, ikinci hücrede sağ üst ve sol alt köşede nokta var.',
            'Hepsini bir araya koyunca <b>dört köşede birer nokta</b> olur.',
          ],
          eleme: 'A\'da sağ üst köşedeki nokta eksik; C\'de ortada fazladan bir nokta var. Doğru cevap <b>B</b>.',
        },
        {
          t: 'ornek',
          soru: '2-matris-medium-056',
          baslik: 'Fark: ikisinde de olan silinir',
          adimlar: [
            'Birinci satırda ilk iki hücrede de bulunan noktalar (sol üst ve orta) üçüncü hücrede <b>yok</b>; yalnız birinde olanlar kalmış. İkinci satır da aynı. Kural: fark.',
            'Üçüncü satırda ilk hücrede dört köşe, ikinci hücrede sol üstten sağ alta çapraz üç nokta var.',
            'Sol üst ve sağ alt ikisinde de var: silinir. Sağ üst ve sol alt yalnız ilk hücrede, orta yalnız ikinci hücrede var: kalır.',
            'Sonuç: sağ üst, orta ve sol altta üç nokta, yani öbür çapraz.',
          ],
          eleme: 'B ve C\'de silinmesi gereken köşe noktaları duruyor; D\'de ortadaki nokta unutulmuş. Doğru cevap <b>A</b>.',
        },
        {
          t: 'p',
          html: 'İki kurallı matrislerde bir hücrenin birden çok özelliği aynı anda kurala uyar. Bu sorularda yanlış şıklar çoğunlukla “yarı doğrudur”: rengi tutar ama şekli tutmaz ya da tersi. Her özelliği ayrı ayrı kontrol etmek bu tuzağı önler.',
        },
        {
          t: 'ornek',
          soru: '3-matris-hard-043',
          baslik: 'Renk satırda sabit, şekiller kayıyor',
          adimlar: [
            '<b>Renk kuralı:</b> birinci satırdaki şekillerin hepsi kırmızı, ikincidekiler mavi, üçüncüdekiler yeşil. Cevap <b>yeşil</b> olmalı.',
            '<b>Şekil kuralı:</b> her satırda kare, kalp ve yıldız birer kez var; satırdan satıra bir hücre sağa kayıyorlar.',
            'Üçüncü satırda kalp ve yıldız var; eksik olan <b>kare</b>. Üçüncü sütunda da yıldız ve kalp var, eksik yine kare.',
            'İki kural birlikte: <b>yeşil kare</b>.',
          ],
          eleme: 'B\'nin şekli doğru ama rengi kırmızı; D\'nin rengi doğru ama şekli kalp; C\'de iki kalp var. Doğru cevap <b>A</b>.',
        },
        {
          t: 'kutu',
          tur: 'ipucu',
          baslik: 'Yarı doğru şıkları özellik özellik ele',
          html: 'Şıkları tek tek “Rengi uyuyor mu? Şekli uyuyor mu? Sayısı uyuyor mu?” diye sorgulayın. Tek bir özellikte bile yanılan şık elenir; geriye kurala her yönden uyan tek şık kalır.',
        },
      ],
    },
    {
      id: 'yontem',
      baslik: '5 adımda çözüm yöntemi',
      bloklar: [
        { t: 'p', html: 'Her matris sorusunda aynı sırayı izlemek hem hızı hem doğruluğu artırır:' },
        {
          t: 'liste',
          numarali: true,
          maddeler: [
            '<b>Tam satırlara bak.</b> Birinci ve ikinci satırda soldan sağa ne değişiyor: şekil, renk, sayı, boyut, yön?',
            '<b>Kuralı tek cümleyle söyle.</b> “Her satırda üç şekil birer kez”, “her adımda bir nokta fazla”, “üçüncü hücre ilk ikisinin birleşimi” gibi.',
            '<b>Sütunla kontrol et.</b> Aynı kural yukarıdan aşağı da işliyor mu? Satırda kural yoksa sütunlarda ara.',
            '<b>Cevabı önce zihninde çiz.</b> Şıklara bakmadan soru işaretinin yerine ne gelmesi gerektiğini söyle.',
            '<b>Şıkları özellik özellik ele.</b> Şekle, renge, sayıya ve yöne ayrı ayrı bak; birine bile uymayan şık elenir.',
          ],
        },
        {
          t: 'kutu',
          tur: 'ipucu',
          baslik: 'Şıklara en son bak',
          html: 'Şıklara erken bakan çocuk, doğruya benzeyen bir çeldiriciye kolayca kapılır. Cevabı önce zihinde bulup sonra şıklarda aramak, yanlış şıkların etkisini azaltır.',
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
            '<b>Yarı doğru şık:</b> Şekli doğru ama rengi yanlış (ya da tersi) olan şıkkı seçmek.',
            '<b>Satırda zaten olanı seçmek:</b> Dizilim matrislerinde satırda bulunan bir şekli ikinci kez koymak.',
            '<b>Bir eksik, bir fazla:</b> Sayı matrislerinde noktaları aceleyle sayıp yakın bir sayıyı seçmek.',
            '<b>Yanlış yöne döndürmek:</b> Saat yönü yerine ters yönde çevirmek ya da bir adım eksik döndürmek.',
            '<b>İşlemi karıştırmak:</b> Fark istenen soruda birleşimi seçmek, yani ortak parçaları silmeyi unutmak.',
            '<b>Yalnız satıra bakmak:</b> Sütunla kontrol etmeyince ilk akla gelen yanlış kurala takılmak.',
          ],
        },
        {
          t: 'kutu',
          tur: 'veli',
          baslik: 'Velilere öneri',
          html: 'Çocuğunuz yanlış bir şık seçtiğinde doğrusunu hemen söylemek yerine <b>“Bu şık hangi kurala uyuyor, hangisine uymuyor?”</b> diye birlikte bakın. Çeldiricinin neden yanlış olduğunu anlatabilen çocuk, kuralı gerçekten öğrenmiş demektir.',
        },
      ],
    },
    {
      id: 'evde',
      baslik: 'Evde nasıl çalışılır?',
      bloklar: [
        {
          t: 'p',
          html: 'Matris mantığı, somut nesnelerle kurulan küçük tablolarla kolayca çalışılır. Kuralı önce elle kurmak, kâğıttaki soruyu anlamayı hızlandırır.',
        },
        {
          t: 'liste',
          maddeler: [
            '<b>Malzeme:</b> Renkli düğmeler, legolar ya da kartondan kesilmiş üç renk ve üç şekil; bir kâğıda çizilmiş 3×3\'lük ızgara.',
            '<b>“Hangisi eksik?” oyunu:</b> Her satırda üç farklı nesne olacak şekilde tabloyu doldurun, bir hücreyi boş bırakın. Çocuk eksik nesneyi bulsun, sonra rolleri değiştirin.',
            '<b>Kuralı çocuk kursun:</b> “Her satırda bir düğme fazla olsun” ya da “renk satırda aynı kalsın” gibi bir kural seçip tabloyu çocuğunuzun kurmasını isteyin.',
            '<b>Zorluk sırası:</b> Her satırda bir kez → sayı artışı → dönme → üst üste koyma → iki kural birlikte.',
            '<b>Süre:</b> Haftada birkaç kez 10-15 dakika yeterli. Kısa ve düzenli çalışma, uzun ve seyrek çalışmadan daha etkilidir.',
          ],
        },
        {
          t: 'kutu',
          tur: 'veli',
          baslik: 'Soru sorarak yönlendirin',
          html: '<b>“Bu satırda ne değişiyor?”</b>, <b>“Aşağıya doğru da aynı şey oluyor mu?”</b>, <b>“Bu şık hangi özellikte yanılıyor?”</b> gibi sorular, çocuğun kuralı kendisinin bulmasını sağlar. Cevabı söylemek yerine küçük bir ipucu vermek, bir sonraki soruda daha çok işe yarar.',
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
            { soru: '1-matris-easy-052', aciklama: 'Her satırda kalp, üçgen ve daire birer kez var. Üçüncü satırda daire ve kalp olduğu için eksik olan üçgen.' },
            { soru: '1-matris-medium-126', aciklama: 'Üçüncü hücre, ilk iki hücredeki noktaların toplamı: 1 + 3 = 4, 2 + 3 = 5. Son satırda 1 + 4 = 5 nokta.' },
            { soru: '2-matris-easy-049', aciklama: 'Nokta sayısı satırda soldan sağa, sütunda yukarıdan aşağı birer artıyor. Son satır 4, 5 diye gidiyor; sıradaki 6 nokta.' },
            { soru: '3-matris-easy-015', aciklama: 'Üçüncü hücre, ilk iki şeklin iç içe konmuş hâli. Son satırda kırmızı üçgen ile sarı kare birleşir: sarı karenin içinde kırmızı üçgen.' },
            { soru: '3-matris-medium-023', aciklama: 'Üstte sarı ok yukarıdan sola dönmüş: saat yönünün tersine çeyrek tur. Aynı dönüş alttaki yeşil oka uygulanınca sola bakan yeşil ok çıkar.' },
            { soru: '2-matris-hard-062', aciklama: 'Artı, çarpı ve ortası noktalı daire her satırda ve her sütunda birer kez var. Üçüncü satırda noktalı daire ile artı olduğuna göre eksik olan çarpı.' },
            { soru: '3-matris-hard-178', aciklama: 'Ortak parça: üçüncü hücrede yalnız ilk iki hücrenin ikisinde de bulunan noktalar kalır. Son satırda beş noktalı çarpı ile çapraz üç noktanın ortağı, sol üstten sağ alta üç nokta.' },
            { soru: '3-matris-medium-054', aciklama: 'Hücreler dama tahtası gibi iki türlü sırayla diziliyor. Köşedeki hücrelerin hepsi kırmızı üçgen içinde yeşil daire; soru işareti de köşede olduğu için aynısı gelir. B\'de renkler yer değiştirmiş.' },
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
      baslik: '“Soru işareti yerine ne gelmelidir?”',
      soru: '2-matris-hard-022',
      maddeler: ['Şekiller satır ve sütunlara dizilir', 'Her satırda aynı kural işler', 'Bir hücre soru işaretiyle boş bırakılır'],
    },
    { t: 'metin', ust: 'Kural 1', baslik: 'Önce satırlara, sonra sütunlara bak', diyagram: 'satirSutun', maddeler: ['Kuralı tam satırlarda ara.', 'Sütunda da kural varsa onunla kontrol et.'] },
    { t: 'metin', ust: 'Kural 2', baslik: 'Her satırda her şekil bir kez', diyagram: 'latinKare', maddeler: ['Satırda ve sütunda eksik kalan şekil cevaptır.'] },
    { t: 'metin', ust: 'Kural 3', baslik: 'Sayı ve boyut adım adım değişir', diyagram: 'sayiBoyut', maddeler: ['Farkı bul: bir nokta fazla, biraz daha büyük.', 'Aynı farkı bir kez daha uygula.'] },
    { t: 'metin', ust: 'Kural 4', baslik: 'Yönü değişen şekil döner', diyagram: 'yonDonme', maddeler: ['Dönüşün yönünü ve miktarını bul.', 'Bir adım daha çevir.'] },
    { t: 'metin', ust: 'Kural 5', baslik: 'Üst üste koy: birleşim, ortak, fark', diyagram: 'bindirme', maddeler: ['Birleşim: hepsi kalır', 'Ortak: ikisinde de olan kalır', 'Fark: ikisinde de olan silinir'] },
    { t: 'metin', ust: 'Kural 6', baslik: 'Her özelliği ayrı izle', diyagram: 'ozellikAyir', maddeler: ['Rengi, şekli, sayıyı ayrı ayrı kontrol et.', 'Doğru şık hepsine birden uyar.'] },
    { t: 'soru', ust: 'Örnek 1 · Her satırda bir kez', baslik: 'Soru işareti yerine ne gelmelidir?', soru: '1-matris-easy-160' },
    {
      t: 'cevap',
      ust: 'Örnek 1 · Çözüm',
      baslik: 'Satırda eksik olan: baklava',
      soru: '1-matris-easy-160',
      adimlar: ['Her satırda yıldız, baklava, kalp birer kez.', 'Üçüncü satırda kalp ve yıldız var.', 'Eksik olan baklava; sütun da doğruluyor.'],
    },
    { t: 'soru', ust: 'Örnek 2 · Sayı', baslik: 'Soru işareti yerine ne gelmelidir?', soru: '2-matris-medium-173' },
    {
      t: 'cevap',
      ust: 'Örnek 2 · Çözüm',
      baslik: 'Satırda ikişer, sütunda birer artış',
      soru: '2-matris-medium-173',
      adimlar: ['Satırlar: 3-5-7, 4-6-8, 5-7-?', 'Her adımda iki nokta fazla: 9 mor nokta.', 'Sütun da doğruluyor: 7, 8, 9.'],
    },
    { t: 'soru', ust: 'Örnek 3 · Fark', baslik: 'Soru işareti yerine ne gelmelidir?', soru: '2-matris-medium-056' },
    {
      t: 'cevap',
      ust: 'Örnek 3 · Çözüm',
      baslik: 'İkisinde de olan noktalar silinir',
      soru: '2-matris-medium-056',
      adimlar: ['Kural: yalnız bir hücrede olanlar kalır.', 'Sol üst ve sağ alt ikisinde de var: silinir.', 'Kalan: sağ üst, orta, sol alt.'],
    },
    { t: 'soru', ust: 'Örnek 4 · İki kural', baslik: 'Soru işareti yerine ne gelmelidir?', soru: '3-matris-hard-043' },
    {
      t: 'cevap',
      ust: 'Örnek 4 · Çözüm',
      baslik: 'Renk yeşil, şekil kare',
      soru: '3-matris-hard-043',
      adimlar: ['Renk satırda aynı: yeşil.', 'Şekil satırda bir kez: eksik olan kare.', 'İki kural birlikte: yeşil kare.'],
    },
    {
      t: 'metin',
      ust: 'Yöntem',
      baslik: '5 adımda çözüm',
      numarali: true,
      maddeler: ['Tam satırlarda değişimi bul', 'Kuralı tek cümleyle söyle', 'Sütunla kontrol et', 'Cevabı önce zihninde çiz', 'Şıkları özellik özellik ele'],
    },
    {
      t: 'metin',
      ust: 'Dikkat',
      baslik: 'Çeldirici tuzakları',
      maddeler: ['Şekli doğru, rengi yanlış şık', 'Satırda zaten olan şekli seçmek', 'Noktaları bir eksik ya da fazla saymak', 'Yanlış yöne döndürmek', 'Birleşim ile farkı karıştırmak'],
    },
    {
      t: 'metin',
      ust: 'Evde',
      baslik: '“Hangisi eksik?” oyunu',
      maddeler: ['Düğme, lego ya da karton şekiller', '3×3 ızgara kur, bir hücreyi boş bırak', 'Bazen kuralı çocuk kursun', 'Haftada birkaç kez 10-15 dakika'],
    },
    { t: 'kapanis' },
  ],
};

export default konu;
