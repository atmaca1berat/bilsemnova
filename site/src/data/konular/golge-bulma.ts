import type { Konu } from '../konu-tipleri';

// Gölge bulma konu anlatımı. Örneklerin ve alıştırmaların hepsi soru görselinden bağımsız çözüldü (siluetler
// büyütülüp piksel farkıyla karşılaştırıldı) ve cevap anahtarıyla karşılaştırıldı (27 Eylül 2026).
// Aynı soru kimliği 1, 2 ve 3. sınıfta aynı görseli kullanır (1. sınıfta 3, 2 ve 3. sınıfta 4 şık); bu yüzden
// her kimlik yalnız bir sınıftan seçildi. Yanlış şıkkı doğru gölgeden ayırt edilemeyecek kadar az farklı olan
// sorular alınmadı. Açıklamalardaki her fark (eğim, oran, eksik ya da fazla parça) siluetler üst üste konarak ölçüldü.

const konu: Konu = {
  slug: 'golge-bulma',
  ad: 'Gölge Bulma',
  alan: 'Görsel Yetenek ve Algı',
  siniflar: '1-3. sınıf',
  ozet: 'Gölge bulma soruları nasıl çözülür? 6 temel kural, 7 çözümlü örnek ve 8 alıştırmayla BİLSEM hazırlığı için ücretsiz konu anlatımı.',
  giris:
    'Gölge bulma sorularında bir ya da birkaç nesnenin renkli resmi verilir; şıklarda aynı nesnelerin simsiyah gölgeleri yer alır. Çocuktan, resimle birebir aynı dış çizgiye sahip gölgeyi bulması beklenir. Bu anlatımda doğru gölgeyi bulmanın altı temel kuralını, adım adım çözülmüş örnekleri ve alıştırmaları bulacaksınız.',
  okumaDakika: 12,
  uygulamadakiSoru: 945,
  guncelleme: '2026-09-27',
  bolumler: [
    {
      id: 'nedir',
      baslik: 'Gölge bulma soruları nedir?',
      bloklar: [
        {
          t: 'p',
          html: 'Gölge bulma, görsel algıyı ve ayrıntıya dikkati ölçen bir soru tipidir; zekâ testlerinde ve BİLSEM\'e hazırlık materyallerinde sık karşılaşılır. Soruda bir, iki ya da üç nesnenin renkli resmi gösterilir. Şıklarda bu nesnelerin <b>simsiyah gölgeleri</b> vardır: renkler, desenler ve iç çizgiler kaybolmuş, yalnız dış çizgi kalmıştır.',
        },
        { t: 'sorugorsel', soru: '1-golge-medium-014', aciklama: 'Örnek bir gölge bulma sorusunun resmi: bir testere ile bir kamp ateşi. Şıklarda bu iki nesnenin siyah gölgeleri yer alır.' },
        {
          t: 'p',
          html: 'Soru hep aynıdır: <b>“Aşağıdakilerden hangisi bu nesnenin gölgesidir?”</b> Yanlış şıklar da doğru gölgeye çok benzer; biri biraz devrilmiş, biri incelmiş, birinin küçük bir parçası değişmiştir. Çocuk doğru şıkkı ararken şu becerileri birlikte kullanır:',
        },
        {
          t: 'liste',
          maddeler: [
            '<b>Şekil algısı:</b> Renkli resmin dış çizgisini (konturunu) görmek.',
            '<b>Ayrıntıya dikkat:</b> Kuyruk, anten, sap gibi küçük parçaları karşılaştırmak.',
            '<b>Açı ve oran:</b> Bir şeklin ne kadar eğik durduğunu, ne kadar ince ya da geniş olduğunu fark etmek.',
            '<b>Sistemli karşılaştırma:</b> Şıkları tek tek, hep aynı sırayla kontrol edip elemek.',
          ],
        },
        {
          t: 'p',
          html: 'BilsemNova uygulamasında 1, 2 ve 3. sınıf için ayrı ayrı 315\'er, toplam <b>945 gölge bulma sorusu</b> var. Kolay sorularda tek nesne, orta sorularda iki nesne, zor sorularda üç nesne bulunur. 1. sınıf sorularında 3, 2 ve 3. sınıf sorularında 4 şık vardır.',
        },
      ],
    },
    {
      id: 'kurallar',
      baslik: 'Altı temel kural',
      bloklar: [
        {
          t: 'p',
          html: 'Doğru gölge, resimdeki nesnenin <b>birebir aynı dış çizgisine</b> sahiptir: aynı yöne bakar, aynı açıyla durur, aynı oranlardadır ve hiçbir parçası eksik ya da fazla değildir. Aşağıdaki altı kural bu eşleşmeyi adım adım kontrol etmeyi öğretir.',
        },
        {
          t: 'kural',
          no: 1,
          baslik: 'Gölge, dış çizginin aynısıdır',
          html: 'Gölgede renkler, desenler, gözler ve iç çizgiler görünmez; yalnız nesnenin <b>dış çizgisi (konturu)</b> kalır. Bu yüzden resme bakarken iç ayrıntılara değil kenarlara odaklanın: nesnenin dış çizgisini gözünüzle ya da parmağınızla baştan sona dolaşın.',
          diyagram: 'kontur',
        },
        {
          t: 'kural',
          no: 2,
          baslik: 'Ayırt edici parçayı bul',
          html: 'Her nesnenin onu tanıtan bir parçası vardır: kedinin kuyruğu, ıstakozun antenleri, iğnenin ucu. Önce bu parçayı seçin, sonra her şıkta yalnız ona bakın. Parça <b>kalınlaşmışsa, eksikse ya da fazladan bir çıkıntı eklenmişse</b> o şık yanlıştır.',
          diyagram: 'parca',
        },
        {
          t: 'kural',
          no: 3,
          baslik: 'Duruş aynı olmalı: devrik ya da yamuk gölge yanlıştır',
          html: 'Nesne dik duruyorsa gölgesi de dik, eğik duruyorsa gölgesi de <b>aynı açıyla</b> eğik olmalıdır. Yanlış şıklarda nesne bütünüyle bir yana <b>devrilmiş</b> olabilir; o zaman altındaki zemin çizgisi de eğilir. Ya da nesne <b>yamulmuştur</b>: tabanı yerinde durur ama üst kısmı bir yana kaymıştır.',
          diyagram: 'egim',
        },
        {
          t: 'kural',
          no: 4,
          baslik: 'Oranlar aynı olmalı: incelmiş ya da basıklaşmış gölge yanlıştır',
          html: 'Doğru gölge nesneyle aynı ene ve boya sahiptir. Yanlış şıklardan biri çoğu zaman <b>daha ince ve uzun</b>, bir diğeri <b>daha geniş ve basık</b> çizilir. Yuvarlak parçalar bu farkı en iyi gösterir: tekerlek yuvarlak mı kalmış, yoksa yayvan bir ovale mi dönmüş?',
          diyagram: 'oran',
        },
        {
          t: 'kural',
          no: 5,
          baslik: 'Yön aynı olmalı: ayna tuzağına dikkat',
          html: 'Nesne sağa bakıyorsa gölgesi de sağa bakar. Bazı gölge sorularında şıklardan biri nesnenin <b>aynadaki görüntüsüdür</b>: şekil aynı görünür ama ters yöne bakar. Başın, gaganın ya da sapın hangi tarafta olduğuna bakarak bu şıkkı hemen eleyin.',
          diyagram: 'ayna',
        },
        {
          t: 'kural',
          no: 6,
          baslik: 'Birden çok nesnede tek tek, soldan sağa karşılaştır',
          html: 'İki ya da üç nesne varsa gölgeler resimdeki <b>sırayla</b> dizilir: soldaki nesnenin gölgesi soldadır. Nesneleri sırayla eşleştirin; her birinin duruşuna, oranına ve aradaki <b>boşluklara</b> bakın. Yanlış şıklarda çoğu zaman tek bir nesnenin bir parçası değişmiştir ya da bütün sıra birlikte dönmüş, genişlemiş ya da basıklaşmıştır.',
          diyagram: 'ikiNesne',
        },
        {
          t: 'kutu',
          tur: 'dikkat',
          baslik: 'Farklar küçük olabilir',
          html: 'Yanlış şıklar doğru gölgeye çok benzer; fark bazen yalnız birkaç derecelik bir eğim ya da tek bir ince parçadır. Hızlı karar vermek yerine her şıkta <b>aynı parçaya</b> bakın. Şıklar ekranda küçük görünüyorsa görseli yakınlaştırmak işi kolaylaştırır.',
        },
      ],
    },
    {
      id: 'tek-nesne',
      baslik: 'Tek nesnenin gölgesi',
      bloklar: [
        {
          t: 'p',
          html: 'Kolay sorularda tek bir nesne vardır. Yanlış şıklarda aynı gölge ya bir yana devrilmiş, ya üst kısmı kaymış (yamulmuş), ya da incelip uzamış veya basıklaşmıştır. Doğru gölgeyi bulmak için nesnenin duruşunu ve oranlarını resimle karşılaştırın.',
        },
        {
          t: 'ornek',
          soru: '1-golge-easy-084',
          baslik: 'Bisiklet: tekerleklere bak',
          adimlar: [
            'Resimde bisiklet dümdüz duruyor: iki tekerleği de yere basıyor ve ikisi de yuvarlak.',
            'Ayırt edici parçalar tekerlekler, sele ve gidon. Her şıkta önce tekerleklere bakalım.',
            'A\'da ön tekerlek yerden kalkmış, bisiklet arkaya doğru <b>devrilmiş</b>. C\'de tekerlekler yuvarlak değil, yana doğru yayvan birer oval olmuş: bisiklet <b>basıklaşmış</b>.',
            'B\'de iki tekerlek de yuvarlak ve yerde; sele ile gidon da resimdeki yerde.',
          ],
          eleme: 'A devrilmiş, C basıklaşmış. Doğru cevap <b>B</b>.',
        },
        {
          t: 'ornek',
          soru: '2-golge-easy-075',
          baslik: 'Oturan köpek: dört şıkta üç tuzak',
          adimlar: [
            'Köpek dik oturuyor: başı yukarıda ve sağa bakıyor, kuyruğu solda, önünde küçük açık bir kitap var.',
            'Önce oranlara bakalım: B\'deki köpek <b>daha ince ve daha uzun</b>; resimdeki tombul köpek bu değil.',
            'Sonra duruşa bakalım: C\'de köpek sağa doğru <b>devrilmiş</b>, altındaki zemin de eğilmiş. D\'de oturduğu yer aynı ama başı ve gövdesi sola kaymış: köpek <b>yamulmuş</b>, geriye yaslanmış gibi.',
            'A\'da hem oranlar hem duruş resimdekiyle aynı: kuyruk solda, baş yukarıda, zemin düz.',
          ],
          eleme: 'B incelmiş, C devrilmiş, D yamulmuş. Doğru cevap <b>A</b>.',
        },
        {
          t: 'ornek',
          soru: '3-golge-easy-005',
          baslik: 'Yürüyen çocuk: devrik mi, yamuk mu?',
          adimlar: [
            'Çocuk sağa doğru yürüyor; gövdesi dik, iki ayağı da yere basıyor.',
            'A\'da çocuk bütünüyle öne <b>devrilmiş</b>: ayaklarının altındaki gölge çizgileri de eğilmiş.',
            'C\'de ayakları yerinde ama başı ve gövdesi öne, sağa kaymış: çocuk <b>yamulmuş</b>. D\'de çocuk <b>daha ince ve daha uzun</b>.',
            'B\'de gövde dik; baş, kollar ve ayaklar resimdeki yerde.',
          ],
          eleme: 'A devrilmiş, C yamulmuş, D incelmiş. Doğru cevap <b>B</b>.',
        },
      ],
    },
    {
      id: 'iki-nesne',
      baslik: 'İki nesnenin gölgesi',
      bloklar: [
        {
          t: 'p',
          html: 'Orta sorularda iki nesne yan yana durur. Gölgeler de aynı sırayla dizilir: soldaki nesnenin gölgesi solda, sağdakinin gölgesi sağdadır. Yanlış şıklarda ya iki gölge birlikte biraz dönmüş ya da yana doğru genişlemiştir; bazen de yalnız tek bir nesnenin küçük bir parçası değişmiştir.',
        },
        {
          t: 'ornek',
          soru: '1-golge-medium-014',
          baslik: 'Testere ve kamp ateşi',
          adimlar: [
            'Soldaki testerenin gölgesi solda, kamp ateşininki sağda olmalı. Testere çapraz duruyor: sapı sağ üstte, ucu sol altta.',
            'A\'da iki gölge birlikte biraz dönmüş: testere resimdekinden <b>daha yatık</b>.',
            'C\'de iki gölge de yana doğru <b>genişlemiş</b>: testere daha uzun, kamp ateşi daha yayvan.',
            'B\'de testerenin eğimi, uzunluğu ve kamp ateşinin biçimi resimdekiyle aynı.',
          ],
          eleme: 'A dönmüş, C genişlemiş. Doğru cevap <b>B</b>.',
        },
        {
          t: 'ornek',
          soru: '1-golge-medium-043',
          baslik: 'Istakoz ve ördek: ince parçalara bak',
          adimlar: [
            'Istakozun ayırt edici parçaları kıskaçları ve başındaki iki ince, kıvrık anteni. Ördek sola bakıyor.',
            'B\'de soldaki anten ince bir çizgi değil, <b>kalın bir kıvrım</b> olmuş; ördeğin gölgesi ise değişmemiş. Bu şıkta yalnız tek bir parça farklı.',
            'C\'de iki gölge de yana doğru <b>genişlemiş</b>: ıstakoz daha geniş, ördek daha tombul.',
            'A\'da antenler ince; ıstakoz da ördek de resimdeki boyda ve duruşta.',
          ],
          eleme: 'B\'de bir parça kalınlaşmış, C genişlemiş. Doğru cevap <b>A</b>.',
        },
        {
          t: 'kutu',
          tur: 'ipucu',
          baslik: 'Önce bir nesneye bak',
          html: 'İki gölgeye aynı anda bakmak kafa karıştırır. Önce soldaki nesneyi bütün şıklarda karşılaştırın ve yanlışları eleyin; sonra kalan şıklarda sağdaki nesneye geçin. Bir şıkta tek bir nesne bile farklıysa o şık yanlıştır.',
        },
      ],
    },
    {
      id: 'uc-nesne',
      baslik: 'Üç nesnenin gölgesi',
      bloklar: [
        {
          t: 'p',
          html: 'Zor sorularda üç nesne yan yana durur ve şıklardaki farklar daha incedir. Bu sorularda en iyi yöntem, nesneleri soldan sağa tek tek eşleştirmek ve her birinde ayırt edici parçayı kontrol etmektir.',
        },
        {
          t: 'ornek',
          soru: '1-golge-hard-013',
          baslik: 'İğne, ayna ve kapı',
          adimlar: [
            'Üç nesne var: soldan sağa ipliği takılı bir iğne, oval bir ayna ve çiçekli bir kapı. Gölgeler de bu sırayla dizilmeli.',
            'En ince parça iğne; önce ona bakalım. A\'da iğnenin gölgesi <b>kalınlaşmış</b>, iplikle birleşip kancaya benzemiş. Ayna ile kapı aynı kaldığı için bu fark ancak iğneye bakınca görülür.',
            'B\'de iğne <b>daha yatık ve daha kısa</b>; üç gölge de biraz basıklaşmış, iğne ile ayna arasındaki boşluk da büyümüş.',
            'C\'de iğne ince ve resimdeki açıda, iplik ince bir çizgi; ayna ve kapı da resimdekiyle aynı.',
          ],
          eleme: 'A\'da iğne kalınlaşmış, B\'de iğne yatmış ve gölgeler basıklaşmış. Doğru cevap <b>C</b>.',
        },
        {
          t: 'ornek',
          soru: '1-golge-hard-029',
          baslik: 'Mezura, çocuk ve mercan',
          adimlar: [
            'Soldan sağa: sarılmış bir mezura, başını kaldırmış bir çocuk ve dallı bir mercan.',
            'C\'de mezura ve çocuk aynı ama mercanın <b>en üstteki dalları eksik</b>: mercan daha kısa görünüyor.',
            'B\'de üç gölge de biraz <b>basıklaşmış</b>: daha kısa ve daha geniş; en kolay mezurada görülür, mezura daha yayvan.',
            'A\'da üç gölgenin de biçimi ve boyu resimdekiyle aynı.',
          ],
          eleme: 'B basıklaşmış, C\'de mercanın tepesi eksik. Doğru cevap <b>A</b>.',
        },
        {
          t: 'kutu',
          tur: 'dikkat',
          baslik: 'Ayrıntıya yakından bakın',
          html: 'Üç nesneli sorularda gölgeler küçük çizilir. Telefonda çözerken görseli yakınlaştırmak ya da ders notunun basılı hâliyle çalışmak farkları görmeyi kolaylaştırır. Her nesne için aynı soruyu sorun: <b>“Bu gölgenin duruşu, boyu ve parçaları resimdekiyle aynı mı?”</b>',
        },
      ],
    },
    {
      id: 'yontem',
      baslik: '5 adımda çözüm yöntemi',
      bloklar: [
        { t: 'p', html: 'Her gölge sorusunda aynı sırayı izlemek hem hızı hem doğruluğu artırır:' },
        {
          t: 'liste',
          numarali: true,
          maddeler: [
            '<b>Resmi incele.</b> Kaç nesne var? Her biri hangi yöne bakıyor, dik mi duruyor, eğik mi?',
            '<b>Ayırt edici parçayı seç.</b> Kuyruk, anten, sap, tekerlek gibi en belirgin parçayı belirle.',
            '<b>Duruşu karşılaştır.</b> Devrilmiş ya da üst kısmı kaymış (yamulmuş) gölgeleri ele.',
            '<b>Oranları karşılaştır.</b> İncelip uzamış ya da basıklaşmış gölgeleri ele.',
            '<b>Kalan şıkta son kontrol yap.</b> Parçalar eksiksiz mi, fazladan çıkıntı var mı? Birden çok nesne varsa her birini soldan sağa sırayla kontrol et.',
          ],
        },
        {
          t: 'kutu',
          tur: 'ipucu',
          baslik: 'Önce en kolay farkı ara',
          html: 'Devrilmiş ya da basıklaşmış gölgeler ilk bakışta fark edilir. Bunları önce elemek çoğu soruda şık sayısını hemen azaltır; ince parça farkına kalan şıklarda bakılır.',
        },
      ],
    },
    {
      id: 'tuzaklar',
      baslik: 'Çeldirici tuzakları ve sık yapılan hatalar',
      bloklar: [
        { t: 'p', html: 'Yanlış şıklar rastgele değildir; her biri belirli bir dikkatsizliği yakalamak için hazırlanır. En sık karşılaşılanlar:' },
        {
          t: 'liste',
          maddeler: [
            '<b>Devrik gölge:</b> Nesne bütünüyle bir yana dönmüştür; altındaki zemin çizgisi de eğiktir.',
            '<b>Yamuk gölge:</b> Taban yerindedir ama üst kısım bir yana kaymıştır.',
            '<b>İncelmiş ya da basıklaşmış gölge:</b> Nesne daha ince ve uzun ya da daha geniş ve kısa çizilmiştir.',
            '<b>Parça farkı:</b> Bir parça kalınlaşmış, fazladan bir çıkıntı eklenmiş ya da bir parça eksilmiştir.',
            '<b>Ayna görüntüsü:</b> Gölge aynı şekildedir ama ters yöne bakar.',
            '<b>İç ayrıntıya takılmak:</b> Gölgede renk ve desen görünmez; karşılaştırma iç çizgilerle değil dış çizgiyle yapılır.',
            '<b>Tek nesneye bakıp karar vermek:</b> Çok nesneli sorularda bir gölge doğru görünse de yanındaki başka bir gölge değişmiş olabilir.',
          ],
        },
        {
          t: 'kutu',
          tur: 'veli',
          baslik: 'Velilere öneri',
          html: 'Çocuğunuz yanlış bir şık seçtiğinde doğrusunu hemen söylemek yerine <b>“Bu gölgede ne değişmiş?”</b> diye sorun. Farkı kendi kelimeleriyle söyleyebilen çocuk (“bu devrilmiş”, “bunun kuyruğu kalın”), bir sonraki soruda aynı tuzağı kendiliğinden fark eder.',
        },
      ],
    },
    {
      id: 'evde',
      baslik: 'Evde nasıl çalışılır?',
      bloklar: [
        {
          t: 'p',
          html: 'Gölge, evde en kolay denenebilen konulardandır. Gerçek gölgelerle oynamak, gölgenin yalnız dış çizgiden oluştuğunu çocuğa somut olarak gösterir.',
        },
        {
          t: 'liste',
          maddeler: [
            '<b>El feneri oyunu:</b> Karanlık bir odada bir oyuncağı el feneriyle duvara yansıtın. Oyuncağı yatırın, çevirin; gölgenin nasıl değiştiğini birlikte konuşun.',
            '<b>Kenar çizme:</b> Bir makası, kupayı ya da oyuncağı kâğıda yatırıp kenarından kurşun kalemle çizin, içini karalayın. Sonra <b>“Bu hangi nesnenin gölgesi?”</b> diye sorun.',
            '<b>Sahte gölge oyunu:</b> Aynı nesnenin gölgesini bir kez doğru, bir kez de biraz yatık, bir kez de daha ince çizin. Çocuk hangisinin doğru olduğunu ve öbürlerinde neyin değiştiğini söylesin.',
            '<b>Süre:</b> Haftada birkaç kez 10-15 dakika yeterlidir. Kısa ve düzenli çalışma, uzun ve seyrek çalışmadan daha etkilidir.',
          ],
        },
        {
          t: 'kutu',
          tur: 'veli',
          baslik: 'Soru sorarak yönlendirin',
          html: '<b>“Bu nesnenin en belirgin parçası hangisi?”</b>, <b>“Gölgede o parça nerede?”</b>, <b>“Bu gölge dik mi, eğik mi?”</b> gibi sorular çocuğun sistemli bakmasını sağlar. Doğru cevabı söylemek yerine farkı birlikte bulun.',
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
            { soru: '2-golge-easy-007', aciklama: 'A daha ince ve uzun; B\'de devenin başı ve hörgücü sağa kaymış (yamulmuş); C\'de deve sağa doğru devrilmiş, zemini de eğik. D\'nin duruşu ve oranları resimdekiyle aynı.' },
            { soru: '3-golge-easy-085', aciklama: 'B daha ince ve uzun; C\'de kartal sola doğru yatmış, zemini de eğik; D\'de başı ve gövdesi sağa kaymış. A\'nın duruşu ve oranları resimdekiyle aynı.' },
            { soru: '1-golge-easy-061', aciklama: 'A\'da çita basıklaşmış: daha geniş ve daha alçak. B\'de çita dönmüş, başı yukarı kalkmış. C\'nin koşuşu ve oranları resimdekiyle aynı.' },
            { soru: '3-golge-easy-043', aciklama: 'Kıvrık kuyruklu hayvan dik oturuyor. A\'da kuyruğun ve başın üst kısmı sağa kaymış; B\'de hayvan sağa doğru devrilmiş, zemini eğik; C daha ince ve uzun. D resimdekiyle aynı.' },
            { soru: '1-golge-medium-027', aciklama: 'Solda fıstık, sağda tavuk. A\'da iki gölge de yana doğru genişlemiş; C\'de ikisi birlikte dönmüş: fıstık daha dik duruyor. B\'de iki gölge de resimdeki gibi.' },
            { soru: '3-golge-medium-096', aciklama: 'A\'da iki gölge de incelip uzamış; C\'de ikisinin de üst kısmı sağa kaymış; D\'de ikisi birlikte dönmüş, fırça daha yatık. B\'de fırça ile dal resimdeki gibi.' },
            { soru: '1-golge-medium-004', aciklama: 'A\'da iki gölge birlikte dönmüş: ördeğin gagası aşağı eğilmiş. B\'de ikisi de yana doğru genişlemiş: ördeğin başı daha tombul. C\'de kurdele ve ördek resimdeki gibi.' },
            { soru: '1-golge-medium-035', aciklama: 'A\'da iki gölge birlikte dönmüş: fiş ve pasta dilimi daha eğik. C\'de ikisi de yana doğru genişlemiş: pasta dilimi daha uzun. B\'de fiş ile pasta resimdeki gibi.' },
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
      baslik: 'Renkli resim, siyah gölgeler: “Hangisi bu nesnenin gölgesi?”',
      soru: '1-golge-easy-084',
      maddeler: ['Üstte nesnenin renkli resmi', 'Şıklarda aynı nesnenin siyah gölgeleri', 'Yalnız biri birebir aynı dış çizgiye sahip'],
    },
    { t: 'metin', ust: 'Kural 1', baslik: 'Gölge, dış çizginin aynısıdır', diyagram: 'kontur', maddeler: ['Renk ve desen gölgede görünmez.', 'Yalnız dış çizgiyi karşılaştır.'] },
    { t: 'metin', ust: 'Kural 2', baslik: 'Ayırt edici parçayı bul', diyagram: 'parca', maddeler: ['Kuyruk, anten ya da sap gibi bir parça seç.', 'Kalın, eksik ya da fazla parça yanlıştır.'] },
    { t: 'metin', ust: 'Kural 3', baslik: 'Duruş aynı olmalı', diyagram: 'egim', maddeler: ['Devrilmiş gölgede zemin de eğilir.', 'Yamuk gölgede üst kısım kaymıştır.'] },
    { t: 'metin', ust: 'Kural 4', baslik: 'Oranlar aynı olmalı', diyagram: 'oran', maddeler: ['İncelip uzamış gölge yanlıştır.', 'Basıklaşmış, yayvan gölge yanlıştır.'] },
    { t: 'metin', ust: 'Kural 5', baslik: 'Yön aynı olmalı: ayna tuzağı', diyagram: 'ayna', maddeler: ['Nesne sağa bakıyorsa gölge de sağa bakar.', 'Ters yöne bakan gölge ayna tuzağıdır.'] },
    { t: 'metin', ust: 'Kural 6', baslik: 'Birden çok nesnede tek tek karşılaştır', diyagram: 'ikiNesne', maddeler: ['Nesneleri soldan sağa eşleştir.', 'Sıra, boşluk ve duruş aynı olmalı.'] },
    { t: 'soru', ust: 'Örnek 1 · Tek nesne', baslik: 'Hangisi bu nesnenin gölgesi?', soru: '1-golge-easy-084' },
    {
      t: 'cevap',
      ust: 'Örnek 1 · Çözüm',
      baslik: 'Tekerlekler yuvarlak, bisiklet dik',
      soru: '1-golge-easy-084',
      adimlar: ['Resimde bisiklet dik, tekerlekler yuvarlak.', 'A\'da ön tekerlek havada; C basıklaşmış.', 'B\'de duruş ve tekerlekler aynı.'],
    },
    { t: 'soru', ust: 'Örnek 2 · Tek nesne', baslik: 'Hangisi bu nesnenin gölgesi?', soru: '2-golge-easy-075' },
    {
      t: 'cevap',
      ust: 'Örnek 2 · Çözüm',
      baslik: 'Üç tuzak: incelmiş, devrilmiş, yamulmuş',
      soru: '2-golge-easy-075',
      adimlar: ['B daha ince ve uzun.', 'C devrilmiş; D\'nin üst kısmı sola kaymış.', 'A\'da duruş ve oranlar resimdekiyle aynı.'],
    },
    { t: 'soru', ust: 'Örnek 3 · İki nesne', baslik: 'Hangisi bu nesnelerin gölgesi?', soru: '1-golge-medium-043' },
    {
      t: 'cevap',
      ust: 'Örnek 3 · Çözüm',
      baslik: 'Tek bir anten bile şıkkı değiştirir',
      soru: '1-golge-medium-043',
      adimlar: ['B\'de ıstakozun anteni kalınlaşmış.', 'C\'de iki gölge de genişlemiş.', 'A\'da iki nesne de resimdeki gibi.'],
    },
    { t: 'soru', ust: 'Örnek 4 · Üç nesne', baslik: 'Hangisi bu nesnelerin gölgesi?', soru: '1-golge-hard-013' },
    {
      t: 'cevap',
      ust: 'Örnek 4 · Çözüm',
      baslik: 'Önce en ince parçaya bak: iğne',
      soru: '1-golge-hard-013',
      adimlar: ['A\'da iğne kalınlaşmış.', 'B\'de iğne yatmış, gölgeler basıklaşmış.', 'C\'de üç gölge de resimdekiyle aynı.'],
    },
    {
      t: 'metin',
      ust: 'Yöntem',
      baslik: '5 adımda çözüm',
      numarali: true,
      maddeler: ['Resmi incele: kaç nesne, hangi yöne?', 'Ayırt edici parçayı seç', 'Duruşu karşılaştır: devrik, yamuk?', 'Oranları karşılaştır: ince, basık?', 'Parçaları ve sırayı son kez kontrol et'],
    },
    {
      t: 'metin',
      ust: 'Dikkat',
      baslik: 'Çeldirici tuzakları',
      maddeler: ['Devrilmiş ya da yamulmuş gölge', 'İncelmiş ya da basıklaşmış gölge', 'Kalınlaşmış, eksik ya da fazla parça', 'Ters yöne bakan ayna gölgesi', 'Tek nesneye bakıp karar vermek'],
    },
    {
      t: 'metin',
      ust: 'Evde',
      baslik: 'El feneriyle gölge oyunu',
      maddeler: ['Karanlık oda, el feneri, birkaç oyuncak', 'Oyuncağı yatır, çevir; gölgeyi izle', 'Kenarını çiz: “Bu kimin gölgesi?”', 'Haftada birkaç kez 10-15 dakika'],
    },
    { t: 'kapanis' },
  ],
};

export default konu;
