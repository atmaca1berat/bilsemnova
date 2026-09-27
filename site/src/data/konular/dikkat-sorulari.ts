import type { Konu } from '../konu-tipleri';

// Dikkat soruları konu anlatımı. Örneklerin ve alıştırmaların hepsi soru görselinden bağımsız çözüldü
// ve cevap anahtarıyla karşılaştırıldı (27 Eylül 2026). Açıklamalar sorunun kendi görseline göre yazıldı.
// Sahne soruları bilerek 1. sınıf sürümlerinden seçildi.

const konu: Konu = {
  slug: 'dikkat-sorulari',
  ad: 'Dikkat Soruları',
  alan: 'Dikkat ve Hafıza',
  siniflar: '1-3. sınıf',
  ozet: 'Dikkat soruları nasıl çözülür? Sistemli tarama, doğru sayma ve karşılaştırma için 6 kural, 7 çözümlü örnek ve 8 alıştırmayla ücretsiz BİLSEM hazırlığı.',
  giris:
    'Dikkat sorularında çocuk kalabalık bir resmi tarar: istenen nesneleri sayar, en çok ya da en az olanı bulur, iki kez görüneni ya da sırayı bozanı yakalar. Bazı sorularda resim yalnız birkaç saniye görünür. Bu anlatımda soruların arkasındaki altı kuralı, adım adım çözülmüş örnekleri ve alıştırmaları bulacaksınız.',
  okumaDakika: 12,
  soruEtiketi: 'dikkat sorusu',
  uygulamadakiSoru: 2160,
  guncelleme: '2026-09-27',
  bolumler: [
    {
      id: 'nedir',
      baslik: 'Dikkat soruları nedir?',
      bloklar: [
        {
          t: 'p',
          html: 'Dikkat soruları, çocuğun kalabalık bir görüntüde <b>istenen şeyi seçip ötekileri görmezden gelme</b> becerisini ölçer. Zekâ testlerinde ve BİLSEM\'e hazırlık materyallerinde sık görülen bir soru tipidir. Görüntü bazen bir resim dizisi, bazen de hayvanlarla, çiçeklerle, taşıtlarla dolu bir sahnedir.',
        },
        {
          t: 'sorugorsel',
          soru: '1-sahne-medium-020',
          aciklama: 'Örnek bir sahne sorusu: çiçekli bir bahçede kelebekler, yusufçuklar, arılar, kurbağalar ve salyangozlar var. Yalnız uçan hayvanlar sayılacak.',
        },
        {
          t: 'p',
          html: 'Sorular kısa ve nettir: <b>“Kaç tane…?”</b>, <b>“Hangisinden en az var?”</b>, <b>“Hangisi iki kez var?”</b>, <b>“Bu sıraya uymayan hangisi?”</b> Çocuk bu sırada şu becerileri birlikte kullanır:',
        },
        {
          t: 'liste',
          maddeler: [
            '<b>Seçici dikkat:</b> Sorunun istediği türü ve rengi ayırmak, süs öğelerini saymamak.',
            '<b>Sistemli tarama:</b> Resmi belli bir sırayla gezip hiçbir şeyi atlamamak.',
            '<b>Sayma ve karşılaştırma:</b> Grupları saymak; toplamı, farkı ve katı bulmak.',
            '<b>Görsel bellek:</b> Birkaç saniye gösterilen resimleri ve sıralarını akılda tutmak.',
          ],
        },
        {
          t: 'p',
          html: 'BilsemNova uygulamasında 1, 2 ve 3. sınıf için ayrı ayrı 720\'şer, toplam <b>2160 dikkat sorusu</b> var. Sorular kolay, orta ve zor olmak üzere üç seviyededir. 1. sınıfta 3, 2 ve 3. sınıfta çoğunlukla 4 şık bulunur; doğru-yanlış sorularında iki şık vardır. Resim dizisi sorularının bir bölümünde görsel 3 saniye gösterilip kapanır.',
        },
      ],
    },
    {
      id: 'kurallar',
      baslik: 'Altı temel kural',
      bloklar: [
        {
          t: 'p',
          html: 'Dikkat sorularında hız değil <b>düzen</b> kazandırır. Aşağıdaki altı kural, uygulamadaki dikkat sorusu türlerinin hepsinde işe yarar.',
        },
        {
          t: 'kural',
          no: 1,
          baslik: 'Önce soruyu oku: neyi arıyorsun?',
          html: 'Soruda arananın <b>türünü</b> (çiçek mi, hayvan mı?), <b>rengini</b> (kırmızı mı?) ve <b>yerini</b> (suda mı, havada mı?) belirle. Sayılacak şey bu özelliklerin hepsine uymalı: kırmızı uğur böceği kırmızıdır ama çiçek değildir. Güneş, bulut, ot ve ağaç gibi süsler de soru onları sormuyorsa sayılmaz.',
          diyagram: 'olcut',
        },
        {
          t: 'kural',
          no: 2,
          baslik: 'Sistemli tara, saydığını işaretle',
          html: 'Resmi gelişigüzel değil, <b>soldan sağa ve satır satır</b> tara. Saydığın her nesneyi parmağınla göster ya da zihninde işaretle; böylece aynı nesneyi iki kez saymaz, bir nesneyi de atlamazsın. Bitince <b>ikinci kez say</b>: iki sayım aynı çıkmalı.',
          diyagram: 'tarama',
        },
        {
          t: 'kural',
          no: 3,
          baslik: 'Karşılaştırmadan önce her türü ayrı say',
          html: '“En çok”, “en az”, “eşit sayıda” ve “hiç yok” sorularında önce sahnedeki her türü <b>ayrı ayrı say</b>, küçük bir çetele tut. Sonra soruya dön: en çok mu soruluyor, en az mı? “Hiç yok” sorusunda şıkları tek tek sahnede ara.',
          diyagram: 'cetele',
        },
        {
          t: 'kural',
          no: 4,
          baslik: 'Hangi işlem soruluyor: toplam, fark, kat?',
          html: '“Toplam kaç?” sorusunda iki grubu <b>topla</b>. “Kaç fazla?” ve “Kaç boş kalır?” sorularında grupları <b>birebir eşleştir</b>, artanları say: bu, farktır. “Kaç katı?” sorusunda büyük grubu küçük grup kadarlık parçalara ayır; <b>kaç parça çıkarsa</b> o kadar katıdır.',
          diyagram: 'islem',
        },
        {
          t: 'kural',
          no: 5,
          baslik: 'Tekrarı ve düzeni bul',
          html: '“Hangisi iki kez var?” sorusunda şıklardaki resimleri tek tek alıp resimde ara; <b>tam iki kez</b> görüneni seç. “Sıraya uymayan hangisi?” sorusunda önce tekrar eden düzeni söyle (daire, üçgen, daire, üçgen…), sonra düzenin bozulduğu yeri göster.',
          diyagram: 'duzen',
        },
        {
          t: 'kural',
          no: 6,
          baslik: 'Kısa süre gösterilen resmi sesli etiketle',
          html: 'Bazı sorularda resim <b>3 saniye</b> görünür, sonra kapanır. Bu kısa sürede resimleri sırayla içinden söylemek (yıldız, kalp, daire…) hem hangi resimlerin olduğunu hem de sıralarını akılda tutmayı kolaylaştırır. Soru sırayla ilgiliyse <b>kaçıncı</b> olduğunu da say.',
          diyagram: 'hafiza',
        },
        {
          t: 'kutu',
          tur: 'dikkat',
          baslik: 'Süs öğelerine dikkat',
          html: 'Sahnelerdeki güneş, ay, bulut, ağaç, ot ve kayalar çoğunlukla süstür. Sorunun istediği türü ve rengi aklınızda tutun; sorulmayan her şeyi görmezden gelin. Gece sahnelerinde gökyüzündeki küçük noktalar da süstür; yıldız sorulduğunda yalnız yıldız biçiminde çizilmiş olanlar sayılır.',
        },
      ],
    },
    {
      id: 'resim-dizisi',
      baslik: 'Resim dizisi soruları',
      bloklar: [
        {
          t: 'p',
          html: 'Bu sorularda resimler bir ızgarada ya da tek sırada dizilir. Çocuk bir gruba ait olanları sayar, iki kez görüneni bulur ya da sırayı bozanı yakalar.',
        },
        {
          t: 'ornek',
          soru: '2-dikkat-medium-test01-q07',
          baslik: 'Yalnız meyveleri say',
          adimlar: [
            'Soru yalnız <b>meyveleri</b> soruyor. Izgarada dokuz resim var; hepsi meyve değil.',
            'Soldan sağa, satır satır tarayalım. Üst sırada muz ve portakal meyvedir; buğday başağı meyve değildir.',
            'Orta sırada nar ve erik meyvedir; kökleriyle çizilmiş fidan meyve değildir. Alt sırada şeftali, çilek ve muz meyvedir.',
            'Toplam: 2 + 2 + 3 = <b>7 meyve</b>. Muz iki kez çizilmiş; iki ayrı resim olduğu için iki kez sayılır.',
          ],
          eleme: '9 bütün resimleri, 8 buğday ya da fidanla birlikte saymaktır; 6 ikinci muzu atlamaktır. Doğru cevap <b>C</b>.',
        },
        {
          t: 'ornek',
          soru: '1-dikkat-medium-test04-q10',
          baslik: 'Sıraya uymayan resim',
          adimlar: [
            'Dizide altı resim var: tren yolu, arı, tren yolu, köpek balığı, tren yolu, arı.',
            'Düzeni bulalım: tren yolu ve arı sırayla tekrar ediyor (tren yolu, arı, tren yolu, arı…).',
            'Dördüncü sırada arı olmalıydı; orada <b>köpek balığı</b> var. Düzeni bozan resim bu.',
          ],
          eleme: 'Tren yolu (A) ve arı (C) düzenin parçasıdır, ikisi de yerinde tekrar ediyor. Doğru cevap <b>B</b>.',
        },
        {
          t: 'ornek',
          soru: '3-dikkat-hard-test02-q04',
          baslik: 'Kalabalıkta iki kez görünen',
          adimlar: [
            'Izgarada 20 resim var; hepsini birbiriyle karşılaştırmak uzun sürer. Bunun yerine <b>şıklardan başlayalım</b>.',
            'Göz resmini arayalım: yalnız bir kez var. Denizaltı ve ağaç da birer kez var.',
            'Beyaz güvercini arayalım: üst sırada soldan 3. ve ikinci sırada soldan 4. resim. Güvercin <b>iki kez</b> var.',
          ],
          eleme: 'Göz (A), denizaltı (B) ve ağaç (C) resimde yalnız bir kez görünüyor. Doğru cevap <b>D</b>.',
        },
      ],
    },
    {
      id: 'sahne',
      baslik: 'Sahne soruları: say ve karşılaştır',
      bloklar: [
        {
          t: 'p',
          html: 'Sahne sorularında bir bahçe, deniz, gökyüzü ya da kar manzarası çizilir. Sorular yalnız saymayı değil; renk ile türü birlikte aramayı, grupları karşılaştırmayı ve toplam, fark, kat hesaplarını da içerir.',
        },
        {
          t: 'ornek',
          soru: '1-sahne-medium-027',
          baslik: 'Hem kırmızı hem çiçek',
          adimlar: [
            'Soru iki şey istiyor: hem <b>kırmızı</b> hem <b>çiçek</b> olanlar.',
            'Sahnede kırmızı çiçeklerin yanında sarı ve mor çiçekler, pembe kelebekler ve iki kırmızı uğur böceği var.',
            'Kırmızı çiçekleri soldan sağa sayalım: 1, 2, 3, 4, 5. Uğur böcekleri kırmızıdır ama çiçek değildir; sarı ve mor çiçekler de sayılmaz.',
            'İkinci sayım da 5 çıkıyor: cevap <b>5</b>.',
          ],
          eleme: '6 bir uğur böceğini, 7 iki uğur böceğini de saymaktır. Doğru cevap <b>C</b>.',
        },
        {
          t: 'ornek',
          soru: '1-sahne-medium-017',
          baslik: 'En az hangisinden var?',
          adimlar: [
            'Gökyüzünde arılar, kelebekler ve uçurtmalar var. Önce her türü ayrı sayalım.',
            'Arılar: 6. Kelebekler: 6. Uçurtmalar: 2.',
            'Soru <b>en az</b> olanı soruyor: uçurtmalar yalnız 2 tane.',
          ],
          eleme: 'Arı (A) ve kelebek (B) 6\'şar tane; ikisi de en çok olanlardır. Doğru cevap <b>C</b>.',
        },
        {
          t: 'ornek',
          soru: '1-sahne-medium-028',
          baslik: 'Birebir eşleştir, artanı say',
          adimlar: [
            'Soru arıları ve <b>büyük</b> çiçekleri soruyor. Büyük çiçekler mor çiçeklerdir; küçük sarı çiçekler ve kelebekler bu soruya girmez.',
            'Arıları sayalım: 4. Büyük mor çiçekleri sayalım: 5.',
            'Her arıyı bir çiçeğe eşleştirelim: 4 çiçek dolar, <b>1 çiçek boş</b> kalır. Bu, 5 − 4 işlemidir.',
          ],
          eleme: '5 yalnız çiçeklerin sayısıdır; 9 arılarla çiçekleri toplamaktır. Doğru cevap <b>A</b>.',
        },
        {
          t: 'kutu',
          tur: 'ipucu',
          baslik: 'Sorudaki küçük kelimeler',
          html: '<b>En çok / en az</b>, <b>toplam / fark</b>, <b>kaç fazla / kaç katı</b> gibi kelimeler cevabı tamamen değiştirir. Yanlış şıklar da çoğunlukla bu kelimeleri karıştıranı yakalamak için konur: fark sorulan soruda toplam, toplam sorulan soruda fark şıklarda bulunur.',
        },
      ],
    },
    {
      id: 'kisa-sure',
      baslik: 'Kısa süre gösterilen sorular',
      bloklar: [
        {
          t: 'p',
          html: 'Resim dizisi sorularının bir bölümünde görsel <b>3 saniye</b> gösterilir, sonra kapanır ve soru gelir: “Soldan 3. resim hangisiydi?”, “Hangisi resimde yoktu?”, “Yan yana iki kez geçen hangisiydi?” gibi. Bu sorular dikkatle birlikte kısa süreli görsel belleği de çalıştırır.',
        },
        {
          t: 'ornek',
          soru: '2-dikkat-medium-test03-q13',
          baslik: 'Soldan 3. resim',
          adimlar: [
            'Resim kapanmadan önce sıra içinden söylenir: sandık, inek, eldiven, tef, traktör, yoğurt.',
            'Soru <b>soldan 3.</b> resmi soruyor. En soldan saymaya başlayalım: 1 sandık, 2 inek, 3 eldiven.',
            'Cevap <b>eldiven</b>.',
          ],
          eleme: 'Tef (A) 4., yoğurt kasesi (B) 6., sandık (D) 1. sırada. Doğru cevap <b>C</b>.',
        },
        {
          t: 'kutu',
          tur: 'ipucu',
          baslik: 'İsim zinciri kurun',
          html: 'Üç saniyede altı resmi tek tek ezberlemek zordur; ama hızlıca söylenen bir isim zinciri (“sandık, inek, eldiven…”) akılda kalır. Evde süreyi aynı tutup resim sayısını 3\'ten 6\'ya doğru yavaş yavaş artırın.',
        },
      ],
    },
    {
      id: 'yontem',
      baslik: '5 adımda çözüm yöntemi',
      bloklar: [
        { t: 'p', html: 'Her dikkat sorusunda aynı sırayı izlemek hem hızı hem doğruluğu artırır:' },
        {
          t: 'liste',
          numarali: true,
          maddeler: [
            '<b>Soruyu iki kez oku.</b> Ne aranıyor: tür mü, renk mi, yer mi? En çok mu, en az mı? Toplam mı, fark mı?',
            '<b>Aranacak şeyi belirle.</b> Ölçüte uyanları seç; süsleri ve benzeyen ama farklı olanları ele.',
            '<b>Sistemli tara.</b> Soldan sağa, satır satır ilerle; saydığını işaretle.',
            '<b>Gerekirse işlem yap.</b> Topla, eşleştirip farkı bul ya da gruplara ayırıp katını bul.',
            '<b>İkinci kez kontrol et.</b> Sayımı tekrarla, sonra şıklara bak.',
          ],
        },
        {
          t: 'kutu',
          tur: 'ipucu',
          baslik: 'Sayma sorularında şıklara en son bakın',
          html: 'Şıklara önce bakmak, çocuğu saymadan tahmin etmeye iter. Önce sayın, sonra kendi sonucunuzu şıklarda arayın; sonuç şıklarda yoksa sayım yeniden yapılmalıdır. “Hangisi iki kez var?” gibi sorularda ise şıklardan başlamak zaman kazandırır.',
        },
      ],
    },
    {
      id: 'tuzaklar',
      baslik: 'Çeldirici tuzakları ve sık yapılan hatalar',
      bloklar: [
        { t: 'p', html: 'Yanlış şıklar rastgele değildir; çoğu belirli bir dikkat hatasını yakalamak için konur. En sık karşılaşılanlar:' },
        {
          t: 'liste',
          maddeler: [
            '<b>Hepsini saymak:</b> “Kaç meyve?” sorusunda bütün resimleri, “Kaç turuncu balık?” sorusunda bütün balıkları saymak.',
            '<b>Rengi tutup türü kaçırmak:</b> Kırmızı çiçekleri sayarken kırmızı uğur böceklerini de saymak.',
            '<b>Süsü saymak:</b> Güneşi, bulutları, otları ya da ağaçları aranan nesne sanmak.',
            '<b>Tekrarı atlamak:</b> Aynı resim iki kez çizildiğinde birini saymamak.',
            '<b>İşlemi karıştırmak:</b> Fark sorulan yerde toplamı, kat sorulan yerde farkı seçmek.',
            '<b>En çok ile en azı karıştırmak:</b> Soruyu sonuna kadar okumadan en göze batan türü seçmek.',
            '<b>Yanlış yönden saymak:</b> “Soldan 3.” sorusunda sağdan saymaya başlamak.',
          ],
        },
        {
          t: 'kutu',
          tur: 'veli',
          baslik: 'Velilere öneri',
          html: 'Çocuğunuz yanlış bir sayı seçtiğinde doğrusunu hemen söylemek yerine <b>“Birlikte parmağımızla sayalım mı?”</b> deyin. Parmakla gösterilerek yapılan ikinci sayım, hatanın nerede olduğunu çocuğun kendisinin görmesini sağlar.',
        },
      ],
    },
    {
      id: 'evde',
      baslik: 'Evde nasıl çalışılır?',
      bloklar: [
        { t: 'p', html: 'Dikkat, günlük hayattaki küçük oyunlarla kolayca çalışılır. Kısa ve düzenli oturumlar en iyi sonucu verir.' },
        {
          t: 'liste',
          maddeler: [
            '<b>Masa üstü sayma:</b> Masaya 10-15 karışık oyuncak, meyve ya da düğme koyun. “Kaç tane kırmızı var?”, “Kaç tane hayvan var?” diye sorun; çocuk parmağıyla göstererek saysın.',
            '<b>Kitap sayfası avı:</b> Resimli bir kitap sayfasında “Kaç kuş var? Hangisinden en çok var?” diye sorun. Önce tahmin, sonra sayım.',
            '<b>3 saniye oyunu:</b> 4-5 nesneyi bir sıraya dizin, 3 saniye gösterip bir bezle örtün. “Soldan 2. neydi?”, “Hangisi yoktu?” diye sorun. Başarılı olunca nesne sayısını artırın.',
            '<b>Dizi bozma:</b> Kaşık, çatal, kaşık, çatal… diye bir dizi kurun, bir yerini değiştirin; çocuk bozulan yeri bulsun. Sonra rolleri değiştirin.',
            '<b>Süre:</b> Günde 5-10 dakika yeterli. Çocuk yorulduğunda bırakın; dikkat çalışması kısa tutulunca daha verimli olur.',
          ],
        },
        {
          t: 'kutu',
          tur: 'veli',
          baslik: 'Soru sorarak yönlendirin',
          html: '<b>“Tam olarak ne arıyoruz?”</b>, <b>“Saymaya nereden başladın?”</b>, <b>“Bir daha sayınca aynı sonuç çıktı mı?”</b> gibi sorular, çocuğun kendi sayma ve tarama düzenini kurmasına yardım eder.',
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
            {
              soru: '3-dikkat-easy-test06-q06',
              aciklama: 'Resimlerde 4 hayvan, 6 meyve ve 2 taşıt var. En az olan grup taşıtlardır: uçak ve polis arabası, yani 2 tane.',
            },
            {
              soru: '1-sahne-easy-026',
              aciklama: 'Sahnede 4 mavi ve 3 turuncu balık var; yalnız turuncular sayılır: 3. Denizanaları ve yengeçler balık değildir.',
            },
            { soru: '1-sahne-easy-018', aciklama: 'Sahnede yusufçuklar ve kurbağalar var, ama suda hiç balık yok. Cevap balık.' },
            {
              soru: '1-sahne-easy-034',
              aciklama: 'Karda 4 penguen ve 2 tavşan var: 4 − 2 = 2. Gökyüzündeki kuşlar bu soruya girmez; 6 ise toplamdır.',
            },
            {
              soru: '2-dikkat-medium-test02-q03',
              aciklama: 'Sandalye hem üst sırada hem orta sırada, ikisinde de ortada duruyor: iki kez var. Fidan, kızgın domates ve güvercin birer kez var.',
            },
            {
              soru: '1-sahne-medium-024',
              aciklama: 'Sahnede 2 kırmızı ve 6 mor çiçek var. Mor çiçekleri ikişerli ayırınca 3 grup çıkar: 3 katı. Küçük sarı çiçekler sayılmaz.',
            },
            {
              soru: '2-dikkat-medium-test05-q10',
              aciklama: 'Resimde iki balık, tavşan, timsah, ıstakoz ve inek vardı. Ayı yoktu; şıklardaki balık, ıstakoz ve inek resimdeydi.',
            },
            {
              soru: '3-dikkat-hard-test07-q08',
              aciklama: 'Sıra: kurbağa, örümcek, balık, timsah, kurt, kurt, buzlu çay. Yan yana iki kez geçen tek resim kurt.',
            },
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
      baslik: 'Say, karşılaştır, bul: “Kaç tane var?”',
      soru: '1-sahne-medium-020',
      maddeler: ['Resim dizisi ya da kalabalık bir sahne', 'Kaç tane, en çok hangisi, hangisi yok?', 'Bazı resimler 3 saniye görünüp kapanır'],
    },
    {
      t: 'metin',
      ust: 'Kural 1',
      baslik: 'Önce soruyu oku: neyi arıyorsun?',
      diyagram: 'olcut',
      maddeler: ['Tür, renk ve yer birlikte uymalı', 'Kırmızı uğur böceği çiçek değildir', 'Güneş, bulut, ot: süstür, sayılmaz'],
    },
    {
      t: 'metin',
      ust: 'Kural 2',
      baslik: 'Sistemli tara, saydığını işaretle',
      diyagram: 'tarama',
      maddeler: ['Soldan sağa, satır satır tara', 'Parmakla göster, hiçbirini atlama', 'Bitince bir kez daha say'],
    },
    {
      t: 'metin',
      ust: 'Kural 3',
      baslik: 'Karşılaştırmadan önce her türü ayrı say',
      diyagram: 'cetele',
      maddeler: ['Küçük bir çetele tut', 'Sonra en çok, en az ya da eşit olanı bul'],
    },
    {
      t: 'metin',
      ust: 'Kural 4',
      baslik: 'Toplam mı, fark mı, kat mı?',
      diyagram: 'islem',
      maddeler: ['Toplam: iki grubu birleştir', 'Fark: birebir eşleştir, artanı say', 'Kat: küçük grup kadar ayır, parçaları say'],
    },
    {
      t: 'metin',
      ust: 'Kural 5',
      baslik: 'Tekrarı ve düzeni bul',
      diyagram: 'duzen',
      maddeler: ['İki kez var mı? Şıklardan başla', 'Sıra bozuk mu? Önce düzeni söyle'],
    },
    {
      t: 'metin',
      ust: 'Kural 6',
      baslik: 'Kısa süre gösterilen resmi sesli etiketle',
      diyagram: 'hafiza',
      maddeler: ['3 saniyede resimleri sırayla isimlendir', 'Sıra sorulursa kaçıncı olduğunu da say'],
    },
    { t: 'soru', ust: 'Örnek 1 · Resim dizisi', baslik: 'Kaç tane meyve var?', soru: '2-dikkat-medium-test01-q07' },
    {
      t: 'cevap',
      ust: 'Örnek 1 · Çözüm',
      baslik: 'Yalnız meyveler sayılır: 7',
      soru: '2-dikkat-medium-test01-q07',
      adimlar: ['Buğday başağı ve fidan meyve değil.', 'Muz, portakal, nar, erik, şeftali, çilek, muz.', 'İki muz iki ayrı resim: toplam 7.'],
    },
    { t: 'soru', ust: 'Örnek 2 · Sahne', baslik: 'Kaç tane kırmızı çiçek var?', soru: '1-sahne-medium-027' },
    {
      t: 'cevap',
      ust: 'Örnek 2 · Çözüm',
      baslik: 'Hem kırmızı hem çiçek: 5',
      soru: '1-sahne-medium-027',
      adimlar: ['Kırmızı çiçekleri soldan sağa say: 5.', 'Uğur böcekleri kırmızı ama çiçek değil.', 'İkinci sayım da 5.'],
    },
    { t: 'soru', ust: 'Örnek 3 · Sahne', baslik: 'Kaç büyük çiçek boş kalır?', soru: '1-sahne-medium-028' },
    {
      t: 'cevap',
      ust: 'Örnek 3 · Çözüm',
      baslik: 'Eşleştir, artanı say: 1',
      soru: '1-sahne-medium-028',
      adimlar: ['4 arı, 5 büyük mor çiçek var.', 'Her arı bir çiçeğe: 4 çiçek dolar.', '5 − 4 = 1 çiçek boş kalır.'],
    },
    { t: 'soru', ust: 'Örnek 4 · Kısa süre', baslik: 'Soldan 3. resim hangisiydi?', soru: '2-dikkat-medium-test03-q13' },
    {
      t: 'cevap',
      ust: 'Örnek 4 · Çözüm',
      baslik: 'Soldan say: 1, 2, 3',
      soru: '2-dikkat-medium-test03-q13',
      adimlar: ['Sırayı içinden söyle: sandık, inek, eldiven…', 'Soldan 3. resim eldiven.', 'Tef 4., sandık 1. sırada.'],
    },
    {
      t: 'metin',
      ust: 'Yöntem',
      baslik: '5 adımda çözüm',
      numarali: true,
      maddeler: [
        'Soruyu iki kez oku',
        'Aranacak şeyi belirle',
        'Soldan sağa, satır satır tara',
        'Gerekirse topla, eşleştir ya da grupla',
        'Sayımı tekrarla, sonra şıklara bak',
      ],
    },
    {
      t: 'metin',
      ust: 'Dikkat',
      baslik: 'Çeldirici tuzakları',
      maddeler: ['Hepsini saymak', 'Kırmızı uğur böceğini çiçek sanmak', 'Süs öğelerini saymak', 'Tekrar eden resmi atlamak', 'Toplam ile farkı karıştırmak'],
    },
    {
      t: 'metin',
      ust: 'Evde',
      baslik: '“3 saniye” oyunu',
      maddeler: ['4-5 nesneyi bir sıraya diz', '3 saniye göster, bir bezle ört', '“Soldan 2. neydi? Hangisi yoktu?”', 'Günde 5-10 dakika yeterli'],
    },
    { t: 'kapanis' },
  ],
};

export default konu;
