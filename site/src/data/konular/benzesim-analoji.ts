import type { Konu } from '../konu-tipleri';

// Benzeşim (analoji) konu anlatımı. Örneklerin ve alıştırmaların hepsi soru görselinden bağımsız çözüldü
// ve cevap anahtarıyla karşılaştırıldı (27 Eylül 2026). Yalnız tek ve açık bir bağın savunulabildiği sorular seçildi;
// açıklamalar sorunun kendi görseline göre yazıldı.

const konu: Konu = {
  slug: 'benzesim-analoji',
  ad: 'Benzeşim (Analoji)',
  alan: 'Mantık ve Muhakeme',
  siniflar: '1-3. sınıf',
  ozet: 'Benzeşim (analoji) soruları nasıl çözülür? İlişkiyi cümleyle söyleme yöntemi, 5 kural, 7 çözümlü örnek ve 8 alıştırmayla ücretsiz konu anlatımı.',
  giris:
    'Benzeşim sorularında iki resim arasındaki bağ bulunur ve aynı bağ başka bir resme uygulanır: “Kuş yuvada yaşar; arı nerede yaşar?” gibi. Bu anlatımda bağı bir cümleyle söyleyip alt satıra taşımayı, sık görülen ilişki türlerini, adım adım çözülmüş örnekleri ve alıştırmaları bulacaksınız.',
  okumaDakika: 11,
  uygulamadakiSoru: 945,
  guncelleme: '2026-09-27',
  bolumler: [
    {
      id: 'nedir',
      baslik: 'Benzeşim soruları nedir?',
      bloklar: [
        {
          t: 'p',
          html: 'Benzeşim (analoji), iki şey arasındaki bağı fark edip aynı bağı başka bir ikiliye taşımaktır. Zekâ testlerinde ve BİLSEM\'e hazırlık materyallerinde sık görülen bir soru tipidir. Uygulamadaki sorular dört kutulu bir tabloyla gelir: <b>üst satırda</b> aralarında bir bağ olan iki resim, <b>alt satırda</b> bir resim ve bir soru işareti vardır.',
        },
        { t: 'sorugorsel', soru: '2-benzesim-easy-test04-q02', aciklama: 'Örnek bir benzeşim sorusu: üst satırda maymun ve muz, alt satırda arı ve soru işareti var.' },
        {
          t: 'p',
          html: 'Soru hep aynıdır: <b>“Kurala göre soru işareti yerine ne gelmelidir?”</b> Kural, üst satırdaki iki resim arasındaki bağdır. Çocuk bu bağı bulur ve alt satırda aynısını kurar. Bu sırada şu becerileri birlikte kullanır:',
        },
        {
          t: 'liste',
          maddeler: [
            '<b>Kavram bilgisi:</b> Resimlerin ne olduğunu ve neye yaradığını bilmek (iribaş, kovan, stetoskop gibi).',
            '<b>İlişki kurma:</b> İki şey arasındaki bağı bulmak: yavrusu mu, parçası mı, yaşadığı yer mi?',
            '<b>Soyutlama:</b> Bağı resimlerden ayırıp başka bir ikiliye taşımak.',
            '<b>Dikkat:</b> Alt satırdaki resimle ilgili ama başka bir bağa dayanan şıkları elemek.',
          ],
        },
        {
          t: 'p',
          html: 'BilsemNova uygulamasında 1, 2 ve 3. sınıf için ayrı ayrı 315\'er, toplam <b>945 benzeşim sorusu</b> var. 1. sınıfta 3, 2 ve 3. sınıfta 4 şık bulunur. Sorular kolay, orta ve zor olmak üzere üç seviyededir; dönüşüm ve ürün-kaynak gibi yönü önemli ilişkiler zor seviyede yer alır.',
        },
      ],
    },
    {
      id: 'kurallar',
      baslik: 'Beş temel kural',
      bloklar: [
        { t: 'p', html: 'Bütün benzeşim soruları aynı mantığa dayanır: üst satırdaki bağı bul, alt satırda aynısını kur. Aşağıdaki beş kural bu işi adım adım kolaylaştırır.' },
        {
          t: 'kural',
          no: 1,
          baslik: 'İlişkiyi bir cümleyle söyle',
          html: 'Üst satırdaki iki resim arasındaki bağı <b>kısa bir cümleyle</b> söyleyin: “Kuş yuvada yaşar.” Cümle kurmak, belirsiz bir çağrışımı açık bir kurala çevirir. Cümlede iki resim de geçmelidir.',
          diyagram: 'cumle',
        },
        {
          t: 'kural',
          no: 2,
          baslik: 'Aynı cümleyi alt satıra uygula',
          html: 'Cümlede üst satırın ilk resminin yerine alt satırdaki resmi koyun, ikinci resmin yerini boş bırakın: “Arı … yaşar.” Sonra her şıkkı bu boşlukta deneyin. <b>Cümleyi doğru yapan tek şık</b> cevaptır.',
          diyagram: 'uygula',
        },
        {
          t: 'kural',
          no: 3,
          baslik: 'Sırayı ve yönü koru',
          html: 'Bağın yönü alt satırda da aynı kalmalıdır. “Ekmek buğdaydan yapılır” diyorsak alt satırda da “Peynir … yapılır” deriz ve cevap <b>süt</b> olur. Pizza peynirle ilgilidir ama yön terstir: pizza peynirle yapılır, peynir pizzadan yapılmaz.',
          diyagram: 'yon',
        },
        {
          t: 'kural',
          no: 4,
          baslik: 'Şık, alt satırdaki resme ait olmalı',
          html: 'Yanlış şıklardan biri çoğu zaman aranan şeyle <b>aynı türdendir</b> ama başka birine aittir. “Göze gözlük takılır” sorusunda eldiven de takılan bir şeydir, ama başa değil ele takılır. Başa takılan <b>şapka</b>dır.',
          diyagram: 'ait',
        },
        {
          t: 'kural',
          no: 5,
          baslik: 'Başka bir bağa kanma',
          html: 'Alt satırdaki resimle ilgili olan her şık doğru değildir. Aşçı hem restoranla hem tavayla ilgilidir; ama “Doktor hastanede çalışır” cümlesi bir <b>yer</b> ister. Tava aşçının çalıştığı yer değil, kullandığı araçtır.',
          diyagram: 'bag',
        },
        {
          t: 'kutu',
          tur: 'ipucu',
          baslik: 'Cümle iki şıkka uyuyorsa',
          html: 'Kurduğunuz cümle iki şıkkı da doğru yapıyorsa cümleyi <b>daha özel</b> hâle getirin. “Doktor stetoskop kullanır” yerine “Doktor, hastanın kalbini stetoskopla dinler” demek, yanlış şıkları daha kolay eler.',
        },
      ],
    },
    {
      id: 'canlilar',
      baslik: 'Canlılarla kurulan ilişkiler',
      bloklar: [
        {
          t: 'p',
          html: 'Kolay seviyedeki soruların çoğu hayvanlarla ilgilidir. En sık görülen bağlar: <b>yavrusu</b> (kedi → yavru kedi), <b>yaşadığı yer</b> (ayı → mağara), <b>vücut parçası</b> (ördek → gaga) ve <b>yiyeceği</b> (sincap → meşe palamudu).',
        },
        {
          t: 'ornek',
          soru: '1-benzesim-easy-test01-q03',
          baslik: 'Yavrusu: kedi ve tavuk',
          adimlar: [
            'Üst satırda bir kedi ve yün yumağıyla oynayan küçük bir kedi yavrusu var.',
            'Bağı cümleyle söyleyelim: <b>“Kedinin yavrusu yavru kedidir.”</b>',
            'Cümlede kedinin yerine alt satırdaki tavuğu koyalım: “Tavuğun yavrusu …” Tavuğun yavrusu <b>civciv</b>dir.',
          ],
          eleme: 'B\'deki köpek yavrusu da bir yavru ama tavuğun değil, köpeğin yavrusu. C\'deki pilotun tavukla bir bağı yok. Doğru cevap <b>A</b>.',
        },
        {
          t: 'ornek',
          soru: '1-benzesim-easy-test02-q06',
          baslik: 'Yaşadığı yer: ayı ve deve',
          adimlar: [
            'Üst satırda bir ayı ve bir mağara var. Cümlemiz: <b>“Ayı mağarada yaşar.”</b>',
            'Aynı cümleyi alt satırdaki deveye uygulayalım: “Deve … yaşar.”',
            'Deve, kumlu ve sıcak <b>çölde</b> yaşar.',
          ],
          eleme: 'A\'daki kovan da bir hayvan evi ama arının evi; deve kovanda yaşamaz. C\'deki tavşan bir yer değil, bir hayvandır. Doğru cevap <b>B</b>.',
        },
        {
          t: 'ornek',
          soru: '3-benzesim-easy-test01-q13',
          baslik: 'Vücut parçası: kuş ve köpek',
          adimlar: [
            'Üst satırda bir kuş ve kanadını açmış beyaz bir kuş var; ikinci resimde öne çıkan, kuşun büyük, renkli <b>kanadı</b>. Cümle: <b>“Kanat, kuşun bir vücut parçasıdır.”</b>',
            'Cümleyi alt satırdaki köpeğe uygulayalım: “… köpeğin bir vücut parçasıdır.”',
            'Şıklarda köpeğe ait tek vücut parçası <b>pati</b>dir.',
          ],
          eleme: 'A\'daki kuş tüyü de bir vücut parçası ama kuşa ait; üst satırdaki kanada benzediği için seçilebilir. B\'deki tornavida ve D\'deki itfaiye aracı vücut parçası değildir. Doğru cevap <b>C</b>.',
        },
      ],
    },
    {
      id: 'meslekler',
      baslik: 'Meslekler, eşyalar ve yerler',
      bloklar: [
        {
          t: 'p',
          html: 'Bu gruptaki sorularda bir meslek, bir eşya ya da bir taşıt vardır. Bağ çoğu zaman şunlardan biridir: <b>kullandığı araç</b> (berber → makas), <b>çalıştığı yer</b> (aşçı → restoran), <b>birlikte kullanıldığı şey</b> (çekiç → çivi), <b>ona takılan eşya</b> (göz → gözlük) ya da <b>gittiği yer</b> (araba → yol).',
        },
        {
          t: 'ornek',
          soru: '2-benzesim-easy-test05-q11',
          baslik: 'Kullandığı araç: terzi ve berber',
          adimlar: [
            'Üst satırda bir terzi ve ipliği takılmış bir dikiş iğnesi var. Cümle: <b>“Terzi işini yaparken iğne kullanır.”</b>',
            'Cümleyi alt satırdaki berbere uygulayalım: “Berber işini yaparken … kullanır.”',
            'Berber saç keser; kullandığı araç <b>makas</b>tır.',
          ],
          eleme: 'A\'daki stetoskop da bir iş aracı ama doktorun aracı. C\'deki kapı ve D\'deki kumbara bir meslek aracı değildir. Doğru cevap <b>B</b>.',
        },
        {
          t: 'ornek',
          soru: '3-benzesim-hard-test02-q01',
          baslik: 'Çalıştığı yer: doktor ve aşçı',
          adimlar: [
            'Üst satırda bir doktor ve kırmızı artılı bir hastane var. Cümle: <b>“Doktor hastanede çalışır.”</b> Bağ, çalışılan <b>yer</b>dir.',
            'Cümleyi alt satırdaki aşçıya uygulayalım: “Aşçı … çalışır.” Aradığımız şey bir yer.',
            'Aşçının çalıştığı yer <b>restoran</b>dır.',
          ],
          eleme: 'C\'deki tava aşçıyla ilgilidir ama çalıştığı yer değil, kullandığı araçtır: başka bir bağ. A\'daki okul öğretmenin çalıştığı yerdir. D\'deki tren rayı trenin gittiği yoldur. Doğru cevap <b>B</b>.',
        },
        {
          t: 'kutu',
          tur: 'ipucu',
          baslik: 'Araç mı, yer mi?',
          html: 'Meslek sorularında şıklarda hem mesleğin aracı hem çalıştığı yer bulunabilir. Üst satırdaki cümlenin bir <b>araç</b> mı, bir <b>yer</b> mi istediğine bakın; soruyu çoğu zaman bu ayrım çözer.',
        },
      ],
    },
    {
      id: 'parca-urun',
      baslik: 'Parça, ürün ve dönüşüm',
      bloklar: [
        {
          t: 'p',
          html: 'Zor seviyedeki sorularda bağın yönü önemlidir. <b>Bütün-parça</b> (ev → kapı), <b>ürün-kaynak</b> (yün → koyun) ve <b>dönüşüm</b> (tırtıl → kelebek, ateş → kül) bağlarında hangi resmin önce geldiğine dikkat edin; cümle kurarken bu sırayı koruyun.',
        },
        {
          t: 'ornek',
          soru: '2-benzesim-hard-test07-q10',
          baslik: 'Bütün ve parça: ev ve araba',
          adimlar: [
            'Üst satırda bir ev ve tahta bir kapı var. Cümle: <b>“Kapı, evin bir parçasıdır.”</b>',
            'Cümleyi alt satırdaki arabaya uygulayalım: “… arabanın bir parçasıdır.”',
            'Şıklarda arabanın parçası olan tek şey <b>tekerlek</b>tir.',
          ],
          eleme: 'C\'deki yol arabayla ilgilidir ama arabanın parçası değil, gittiği yerdir: başka bir bağ. B\'deki dikenli dal bir bitkinin parçasıdır. D\'deki ekmeğin arabayla bağı yok. Doğru cevap <b>A</b>.',
        },
        {
          t: 'ornek',
          soru: '2-benzesim-hard-test01-q02',
          baslik: 'Ürün ve kaynak: yün ve süt',
          adimlar: [
            'Üst satırda bir yün yumağı ve bir koyun var. Cümle: <b>“Yün koyundan elde edilir.”</b> Önce ürün, sonra kaynağı geliyor.',
            'Cümleyi alt satırdaki süte uygulayalım: “Süt … elde edilir.”',
            'Sıra korunmalı: önce ürün (süt), sonra kaynağı. Süt <b>inek</b>ten elde edilir.',
          ],
          eleme: 'B\'deki peynir sütle ilgilidir ama yön terstir: peynir sütten elde edilir, süt peynirden değil. A\'daki ipek böceği ipeğin kaynağıdır, sütün değil. C\'deki evin sütle bağı yok. Doğru cevap <b>D</b>.',
        },
      ],
    },
    {
      id: 'yontem',
      baslik: '5 adımda çözüm yöntemi',
      bloklar: [
        { t: 'p', html: 'Her benzeşim sorusunda aynı sırayı izlemek hem hızı hem doğruluğu artırır:' },
        {
          t: 'liste',
          numarali: true,
          maddeler: [
            '<b>Resimlere ad ver.</b> Üst satırdaki iki resmi ve alt satırdaki resmi yüksek sesle söyle: “yün, koyun, süt”.',
            '<b>Bağı cümleyle söyle.</b> Üst satırdaki iki resmi aynı cümlede kullan: “Yün koyundan elde edilir.”',
            '<b>Cümleyi alt satıra taşı.</b> İlk resmin yerine alt satırdaki resmi koy, ikinci resmin yerini boş bırak.',
            '<b>Şıkları boşlukta dene.</b> Her şıkkı cümleye yerleştir; cümleyi doğru yapan tek şıkkı bul.',
            '<b>Son kontrolü yap.</b> Yön aynı mı? Seçtiğin şık alt satırdaki resme mi ait, yoksa başka bir bağla mı ilgili?',
          ],
        },
        {
          t: 'kutu',
          tur: 'ipucu',
          baslik: 'Önce ilgisiz şıkları ele',
          html: 'Alt satırdaki resimle hiçbir bağı olmayan şıklar (örneğin tavuk sorusunda pilot) en kolay elenenlerdir. Geriye kalan şıklar arasında cümleyi dikkatle deneyin.',
        },
      ],
    },
    {
      id: 'tuzaklar',
      baslik: 'Çeldirici tuzakları ve sık yapılan hatalar',
      bloklar: [
        { t: 'p', html: 'Yanlış şıkların bir kısmı alt satırdaki resimle hiç ilgisizdir ve kolayca elenir; ama çoğu soruda en az bir şık, belirli bir düşünme hatasını yakalamak için konur. En sık karşılaşılanlar:' },
        {
          t: 'liste',
          maddeler: [
            '<b>Benzeyen ama başkasına ait şık:</b> Terzi-iğne sorusunda berber için stetoskobu seçmek; stetoskop bir araçtır ama doktorun aracıdır.',
            '<b>Başka bir bağ:</b> Doktor-hastane sorusunda aşçı için tavayı seçmek; tava bir yer değil, araçtır.',
            '<b>Ters yön:</b> Yün-koyun sorusunda süt için peyniri seçmek; peynir sütten yapılır, süt peynirden değil.',
            '<b>Görünüşe kapılmak:</b> Tornavida sorusunda vidaya benzeyen çiviyi seçmek; çivi çekiçle çakılır.',
            '<b>Yalnız çağrışım:</b> Arıyla ilgili her şeyi (çiçek, bal, kovan) doğru sanmak; üst satırdaki bağ hangisini istiyorsa yalnız o doğrudur.',
            '<b>Resmi yanlış tanımak:</b> İribaşı, kuru üzümü ya da stetoskobu tanımadan tahmin etmek.',
          ],
        },
        {
          t: 'kutu',
          tur: 'veli',
          baslik: 'Velilere öneri',
          html: 'Çocuğunuz yanlış bir şık seçtiğinde <b>“Bu şıkla nasıl bir cümle kurdun?”</b> diye sorun. Çoğu zaman çocuk başka bir bağ kurmuştur; o cümleyi üst satırdaki cümleyle karşılaştırmak, hatayı kendisinin bulmasını sağlar. Tanımadığı bir resim varsa adını birlikte söyleyin.',
        },
      ],
    },
    {
      id: 'evde',
      baslik: 'Evde nasıl çalışılır?',
      bloklar: [
        {
          t: 'p',
          html: 'Benzeşim, günlük konuşmanın içinde kolayca çalışılabilen bir beceridir. Özel bir malzeme gerekmez; evdeki eşyalar ve birkaç resimli kart yeterlidir.',
        },
        {
          t: 'liste',
          maddeler: [
            '<b>“Kuş yuvada, arı nerede?” oyunu:</b> Yemekte ya da yolda bir ikili söyleyin, çocuk aynı bağla ikinci ikiliyi tamamlasın. Sonra sıra ona geçsin ve size sorsun.',
            '<b>Eşleştirme kartları:</b> Dergilerden hayvan, yuva, meslek ve araç resimleri kesip kartlar yapın. Çocuk kartları ikişer eşleştirsin ve her ikilinin bağını bir cümleyle söylesin.',
            '<b>Evdeki eşyalar:</b> Eldiven, çorap, şapka, anahtar gibi gerçek eşyaları masaya koyun; “Bu nereye takılır, bu neyi açar?” diye sorun.',
            '<b>Süre:</b> Haftada birkaç kez 10 dakika yeterli. Kısa ve oyun gibi çalışmalar, uzun oturumlardan daha etkilidir.',
          ],
        },
        {
          t: 'kutu',
          tur: 'veli',
          baslik: 'Soru sorarak yönlendirin',
          html: '<b>“Bu ikisi neden yan yana?”</b>, <b>“Bunu bir cümleyle söyler misin?”</b>, <b>“Aynı cümle aşağıda da doğru mu?”</b> gibi sorular çocuğun kuralı kendi bulmasını sağlar. Farklı ama mantıklı bir bağ kurduğunda bunu takdir edin, sonra soruda istenen bağa birlikte dönün.',
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
            { soru: '1-benzesim-easy-test05-q05', aciklama: 'Kurbağanın yavrusu iribaştır; kelebeğin yavrusu da tırtıldır. Köpek yavrusu bir yavru ama kelebeğin değil.' },
            { soru: '1-benzesim-easy-test07-q15', aciklama: 'Atkı boyuna takılır; ele takılan şey eldivendir. Gözlük de takılır ama göze.' },
            { soru: '2-benzesim-easy-test04-q02', aciklama: 'Maymun muzla, arı da çiçeklerin özüyle beslenir. Peynir de bir yiyecek ama arının yiyeceği değil.' },
            { soru: '2-benzesim-medium-test05-q02', aciklama: 'Anahtar kilitle, tornavida da vidayla birlikte kullanılır. Çivi vidaya benzer ama çekiçle çakılır.' },
            { soru: '3-benzesim-hard-test03-q06', aciklama: 'Tekne denizde gider, uçak gökyüzünde uçar. Nehir bir su yoludur, uçağın yolu değil; pilot da uçağın gittiği yer değil, onu kullanan kişidir.' },
            { soru: '3-benzesim-medium-test06-q12', aciklama: 'Tekerlek arabanın bir parçasıdır; şıklarda bisikletin parçası olan tek şey pedaldır.' },
            { soru: '3-benzesim-hard-test06-q06', aciklama: 'Ateş yanıp bitince geriye kül kalır; kardan adam eriyince geriye su kalır.' },
            { soru: '3-benzesim-hard-test03-q03', aciklama: 'Buğdaydan ekmek yapılır, arıdan da bal elde edilir. Kovan arıyla ilgilidir ama arının ürünü değil, yaşadığı yerdir.' },
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
      baslik: 'Üstteki bağı bul, alt satıra uygula',
      soru: '1-benzesim-easy-test01-q03',
      maddeler: ['Üst satır: aralarında bağ olan iki resim', 'Alt satır: bir resim ve soru işareti', 'Soru: “Soru işareti yerine ne gelmeli?”'],
    },
    { t: 'metin', ust: 'Kural 1', baslik: 'İlişkiyi bir cümleyle söyle', diyagram: 'cumle', maddeler: ['Üst satırdaki iki resmi aynı cümlede kullan.', '“Kuş yuvada yaşar.”'] },
    { t: 'metin', ust: 'Kural 2', baslik: 'Aynı cümleyi alt satıra uygula', diyagram: 'uygula', maddeler: ['“Arı … yaşar.”', 'Şıkları boşlukta dene: tek doğru kalır.'] },
    { t: 'metin', ust: 'Kural 3', baslik: 'Sırayı ve yönü koru', diyagram: 'yon', maddeler: ['Ekmek buğdaydan yapılır.', 'Peynir sütten yapılır, pizzadan değil.'] },
    { t: 'metin', ust: 'Kural 4', baslik: 'Şık, alt satırdaki resme ait olmalı', diyagram: 'ait', maddeler: ['Eldiven de takılır ama ele.', 'Başa takılan: şapka'] },
    { t: 'metin', ust: 'Kural 5', baslik: 'Başka bir bağa kanma', diyagram: 'bag', maddeler: ['Doktor hastanede çalışır: bir yer.', 'Tava aşçının aracıdır, yeri değil.'] },
    { t: 'soru', ust: 'Örnek 1 · Yavrusu', baslik: 'Soru işareti yerine ne gelmeli?', soru: '1-benzesim-easy-test01-q03' },
    {
      t: 'cevap',
      ust: 'Örnek 1 · Çözüm',
      baslik: 'Tavuğun yavrusu civcivdir',
      soru: '1-benzesim-easy-test01-q03',
      adimlar: ['Kedinin yavrusu yavru kedidir.', 'Tavuğun yavrusu …?', 'Köpek yavrusu tavuğun değil: cevap civciv.'],
    },
    { t: 'soru', ust: 'Örnek 2 · Vücut parçası', baslik: 'Soru işareti yerine ne gelmeli?', soru: '3-benzesim-easy-test01-q13' },
    {
      t: 'cevap',
      ust: 'Örnek 2 · Çözüm',
      baslik: 'Köpeğin vücut parçası patidir',
      soru: '3-benzesim-easy-test01-q13',
      adimlar: ['Kanat, kuşun bir vücut parçasıdır.', '… köpeğin bir vücut parçasıdır.', 'Tüy kuşa ait: cevap pati.'],
    },
    { t: 'soru', ust: 'Örnek 3 · Çalıştığı yer', baslik: 'Soru işareti yerine ne gelmeli?', soru: '3-benzesim-hard-test02-q01' },
    {
      t: 'cevap',
      ust: 'Örnek 3 · Çözüm',
      baslik: 'Aşçı restoranda çalışır',
      soru: '3-benzesim-hard-test02-q01',
      adimlar: ['Doktor hastanede çalışır.', 'Aşçı … çalışır: bir yer lazım.', 'Tava araçtır, yer değil: cevap restoran.'],
    },
    { t: 'soru', ust: 'Örnek 4 · Yön', baslik: 'Soru işareti yerine ne gelmeli?', soru: '2-benzesim-hard-test01-q02' },
    {
      t: 'cevap',
      ust: 'Örnek 4 · Çözüm',
      baslik: 'Süt inekten elde edilir',
      soru: '2-benzesim-hard-test01-q02',
      adimlar: ['Yün koyundan elde edilir.', 'Süt … elde edilir.', 'Peynir ters yön: cevap inek.'],
    },
    {
      t: 'metin',
      ust: 'Yöntem',
      baslik: '5 adımda çözüm',
      numarali: true,
      maddeler: ['Resimlere ad ver', 'Bağı cümleyle söyle', 'Cümleyi alt satıra taşı', 'Şıkları boşlukta dene', 'Yönü ve başka bağları kontrol et'],
    },
    {
      t: 'metin',
      ust: 'Dikkat',
      baslik: 'Çeldirici tuzakları',
      maddeler: ['Benzeyen ama başkasına ait şık', 'Aynı resimle başka bir bağ', 'Ters yön', 'Görünüşe kapılmak', 'Resmi yanlış tanımak'],
    },
    {
      t: 'metin',
      ust: 'Evde',
      baslik: '“Kuş yuvada, arı nerede?” oyunu',
      maddeler: ['Bir ikili söyle, çocuk ikinciyi tamamlasın', 'Resimli kartları ikişer eşleştirin', 'Her ikilinin bağını cümleyle söyleyin', 'Haftada birkaç kez 10 dakika'],
    },
    { t: 'kapanis' },
  ],
};

export default konu;
