import type { Konu } from '../konu-tipleri';

// Kısa süreli hafıza konu anlatımı. Örneklerin ve alıştırmaların hepsi soru görselinden bağımsız çözüldü
// ve cevap anahtarıyla karşılaştırıldı (27 Eylül 2026). Açıklamalar sorunun kendi görseline göre yazıldı.
// Hafıza sorularında görsel uygulamada birkaç saniye gösterilip kapanır; soru kartı bu süreyi kendisi yazar.

const konu: Konu = {
  slug: 'kisa-sureli-hafiza',
  ad: 'Kısa Süreli Hafıza',
  alan: 'Dikkat ve Hafıza',
  siniflar: '1-3. sınıf',
  ozet: 'Kısa süreli hafıza soruları nasıl çözülür? 5 hatırlama kuralı, 7 çözümlü örnek ve 8 alıştırmayla BİLSEM hazırlığı için ücretsiz konu anlatımı.',
  giris:
    'Kısa süreli hafıza sorularında bir görsel birkaç saniye gösterilip kapanır; ardından o görselle ilgili bir soru gelir. Çocuğun gördüklerini kısa bir süre aklında tutup soruyu cevaplaması beklenir. Bu anlatımda görsele bakarken kullanılacak beş hatırlama kuralını, adım adım çözülmüş örnekleri ve evde oynanabilecek oyunları bulacaksınız.',
  okumaDakika: 12,
  uygulamadakiSoru: 1485,
  guncelleme: '2026-09-27',
  bolumler: [
    {
      id: 'nedir',
      baslik: 'Kısa süreli hafıza soruları nedir?',
      bloklar: [
        {
          t: 'p',
          html: 'Kısa süreli hafıza, gördüğümüz ya da duyduğumuz bir bilgiyi birkaç saniye aklımızda tutmamızı sağlar. Bu soru tipi, BİLSEM\'e hazırlık materyallerinde sık görülen dikkat ve hafıza sorularındandır. Uygulamada görsel <b>5-7 saniye</b> gösterilir ve kapanır; soru ve şıklar ancak görsel kapandıktan sonra gelir. Yani çocuk, neyin sorulacağını bilmeden bakar.',
        },
        { t: 'sorugorsel', soru: '2-hafiza-medium-test02-q06', aciklama: 'Örnek bir hafıza görseli: ızgarada sekiz resim. Uygulamada 5 saniye gösterilir; kapanınca “Aşağıdakilerden hangisi önceki görselde vardı?” sorusu ve şıklar gelir.' },
        {
          t: 'p',
          html: 'Sorular görselde <b>ne</b> olduğunu, <b>kaç tane</b> olduğunu, <b>nerede</b> durduğunu ya da <b>hangi renkte</b> olduğunu sorar. Çocuk bu sırada şu becerileri birlikte kullanır:',
        },
        {
          t: 'liste',
          maddeler: [
            '<b>Görsel dikkat:</b> Kısa sürede görselin tamamını gözden geçirmek.',
            '<b>Kısa süreli bellek:</b> Birkaç resmi, bir sayıyı ya da bir sırayı birkaç saniye akılda tutmak.',
            '<b>Sınıflama:</b> Resimleri hayvan, meyve, taşıt gibi gruplara ayırmak.',
            '<b>Konum ve sıra:</b> Sağ-sol, üst-alt ve “hemen sonra” ilişkilerini hatırlamak.',
          ],
        },
        {
          t: 'p',
          html: 'BilsemNova uygulamasında 1, 2 ve 3. sınıf için 495\'er, toplam <b>1.485 kısa süreli hafıza sorusu</b> var. 1. sınıfta 3, 2 ve 3. sınıfta 4 şık bulunur. Görseller iki türlüdür: resimlerin tek sıra ya da ızgara hâlinde dizildiği sorular ve çiçek bahçesi, kumsal, çiftlik gibi sahneler. Sorular kolay, orta ve zor olmak üzere üç seviyededir; zorluk arttıkça resim sayısı artar, sahnelerin gösterilme süresi 7 saniyeden 5 saniyeye iner.',
        },
        {
          t: 'kutu',
          tur: 'dikkat',
          baslik: 'Bu sayfadaki soruları nasıl kullanmalı?',
          html: 'Sayfadaki soru kartlarında soru metni görselin üstünde yazar. Çocuğunuzla çalışırken soruyu <b>önceden okumayın</b>: görseli kartta yazan süre kadar gösterin, sonra elinizle ya da bir kâğıtla örtün ve soruyu ondan sonra okuyun. Soruyu bilerek bakan çocuk yalnız o ayrıntıya odaklanır; bu da soruyu olduğundan çok daha kolay yapar.',
        },
      ],
    },
    {
      id: 'kurallar',
      baslik: 'Hatırlamanın beş kuralı',
      bloklar: [
        { t: 'p', html: 'Beş saniye çok kısa görünür; ama nereye ve nasıl bakacağını bilen çocuk bu sürede şaşırtıcı ölçüde çok şey aklında tutar. Aşağıdaki beş kural, bütün soru türlerinde işe yarar.' },
        {
          t: 'kural',
          no: 1,
          baslik: 'Gördüğünün adını söyle',
          html: 'Resimlere yalnızca bakmak yetmez; her birinin <b>adını içinden söylemek</b> onu akılda tutmayı kolaylaştırır. Süre yetiyorsa listeyi bir kez adlandırıp bir kez daha hızlıca tekrar edin: “elma, balık, top, araba… elma, balık, top, araba”. Bu tekrar, “hangisi vardı, hangisi yoktu?” sorularında en güçlü yardımcıdır. Evde çalışırken tekrarı sesli yapın.',
          diyagram: 'adlandir',
        },
        {
          t: 'kural',
          no: 2,
          baslik: 'Grupla: dokuz resim yerine üç grup',
          html: 'Resimleri türlerine göre gruplayın: hayvanlar, meyveler, taşıtlar, eşyalar. Dokuz ayrı resmi hatırlamak zordur; <b>“3 hayvan, 3 meyve, 3 taşıt”</b> demek çok daha kolaydır. Gruplar hem “kaç tane hayvan vardı?” sorularını hem de “hangi gruptan hiç resim yoktu?” sorularını çözer.',
          diyagram: 'grupla',
        },
        {
          t: 'kural',
          no: 3,
          baslik: 'Sayarak bak',
          html: 'Sayı soruları sık gelir: toplam kaç resim, kaç hayvan, sahnede kaç kuş… Bakarken sayın. Izgarada resimleri tek tek saymak yerine <b>sıraları sayın</b>: 4 resimlik iki tam sıra ve 3 resimlik bir sıra 4 + 4 + 3 = 11 eder. Sahnelerde her türü ayrı sayın: “3 kuş, 2 balon, 1 kelebek”.',
          diyagram: 'sayarak',
        },
        {
          t: 'kural',
          no: 4,
          baslik: 'Sırayı hikâyeye çevir',
          html: 'Resimler yan yana dizildiyse soldan sağa kısa bir <b>hikâye</b> kurun: “Kedi topa vurdu, top arabaya çarptı, arabadan elma düştü, elmayı kuş kaptı.” Hikâye sırayı korur; “toptan hemen sonra ne vardı?”, “soldan 4. resim hangisiydi?” gibi soruların cevabı hikâyede saklıdır. Izgarada ise <b>ortayı ve köşeleri</b> ayrıca adlandırın: “ortada erik, sol altta cetvel”.',
          diyagram: 'hikaye',
        },
        {
          t: 'kural',
          no: 5,
          baslik: 'Tek olanlara renk etiketi yapıştır',
          html: 'Sahnelerde bazı nesnelerden yalnız bir tane vardır: tek bir balon, tek bir kelebek. Soru çoğu zaman onların rengini sorar. Böyle nesneleri <b>rengiyle birlikte adlandırın</b>: “mor balon”, “pembe kelebek”. Rengi ve nesneyi ayrı ayrı hatırlamaya çalışmak yerine ikisini tek bir etikette birleştirmek işi kolaylaştırır.',
          diyagram: 'renk',
        },
        {
          t: 'kutu',
          tur: 'ipucu',
          baslik: 'Önce bütüne, sonra ayrıntıya',
          html: 'Görsel açılınca ilk anda genel resme bakın: kaç resim var, nasıl dizilmiş (tek sıra mı, ızgara mı), sahne nerede geçiyor? Kalan sürede kuralları uygulayın. Her şeyi birden ezberlemeye çalışmak yerine <b>grupla, say ve adlandır</b>.',
        },
      ],
    },
    {
      id: 'ne-vardi',
      baslik: 'Ne vardı, ne yoktu?',
      bloklar: [
        {
          t: 'p',
          html: 'En sık gelen sorular, şıklardaki resimlerden hangisinin görselde olduğunu ya da olmadığını sorar. “Yoktu” sorularında şıkların çoğu görselde gerçekten olan resimlerdir; dikkatli olmak gerekir. Bu sorularda adlandırma ve gruplama en çok işe yarar. Örnekleri çözerken de önce görseli kartta yazan süre kadar gösterip kapatın, soruyu sonra okuyun.',
        },
        {
          t: 'ornek',
          soru: '1-hafiza-easy-test02-q10',
          baslik: 'Hangisi vardı? Adlandırarak bak',
          adimlar: [
            'Görseli 5 saniye gösterip kapatın, soruyu sonra okuyun. Görselde 5 resim var: üst sırada tavuk, bağlama ve su şişesi; alt sırada erik ve inek.',
            'Bakarken adlarını içinden söyleyin: “tavuk, bağlama, şişe, erik, inek”. Süre kalırsa listeyi bir kez daha tekrar edin.',
            'Soru gelince şıkları tek tek listeyle karşılaştırın: timsah listede yok, kedi listede yok, <b>su şişesi</b> listede var.',
          ],
          eleme: 'Timsah ve kedi görselde hiç yoktu. İkisi de hayvan olduğu için, görseldeki tavuk ve ineği hatırlayıp “hayvan vardı” diye düşünen çocuğu yanıltır. Doğru cevap <b>C</b>.',
        },
        {
          t: 'ornek',
          soru: '2-hafiza-medium-test03-q07',
          baslik: 'Hangisi yoktu? Grupla ve ele',
          adimlar: [
            'Görseli 5 saniye gösterip kapatın. Görselde 8 resim var.',
            'Resimleri gruplayın: hayvanlar (zebra, papağan), oyuncaklar (uçurtma, oyuncak bebek), mutfaktan şeyler (şişe, kaşık, bir bardak içecek) ve bir kamyonet.',
            '“Yoktu” sorusunda her şıkkı gruplarda arayın: papağan hayvanlarda, uçurtma ve bebek oyuncaklarda var. <b>Donut</b> hiçbir grupta yok; görselde hiç tatlı yoktu.',
          ],
          eleme: 'Papağan, uçurtma ve oyuncak bebek görselde vardı; “yoktu” sorusunda görselde gördüğünüz resimler çeldiricidir. Doğru cevap <b>C</b>.',
        },
      ],
    },
    {
      id: 'kac-tane',
      baslik: 'Kaç tane vardı?',
      bloklar: [
        {
          t: 'p',
          html: 'Sayı soruları üç biçimde gelir: görseldeki bütün resimlerin sayısı, bir gruptaki resimlerin sayısı (ör. kaç hayvan) ve sahnedeki bir nesnenin sayısı (ör. kaç kuş). Şıklardaki sayılar birbirine çok yakındır; tahmin değil, sayma gerekir.',
        },
        {
          t: 'ornek',
          soru: '3-hafiza-hard-test02-q04',
          baslik: 'Toplam kaç resim? Sıraları say',
          adimlar: [
            'Görseli 5 saniye gösterip kapatın. 11 resmi tek tek saymaya 5 saniye yetmeyebilir.',
            'Sıralara bakın: üst ve orta sıra doludur, her birinde 4 resim var. Alt sırada 3 resim var, <b>sağ alt köşe boş</b>.',
            '4 + 4 + 3 = <b>11</b>. Boş köşeyi fark etmek, 12 demekten kurtarır.',
          ],
          eleme: '12, boş köşeyi unutup üç sırayı da dolu sayınca çıkar; 10 ve 13 aceleyle yapılan sayma hatalarıdır. Doğru cevap <b>B</b>.',
        },
        {
          t: 'ornek',
          soru: '2-hafiza-medium-test01-q09',
          baslik: 'Kaç hayvan vardı? Grupla ve say',
          adimlar: [
            'Görseli 5 saniye gösterip kapatın. Görselde 3 sıra, 3 sütun, yani 9 resim var.',
            'Bakarken hayvanları bir grup olarak sayın: kuş, balina, balık, timsah, ıstakoz. <b>5 hayvan</b>.',
            'Geri kalan 4 resim hayvan değil: elma, nar, top ve motosiklet. 5 + 4 = 9 ederek sayımı kontrol edin.',
          ],
          eleme: '4, bir hayvanı (ör. sağ alt köşedeki ıstakozu) gözden kaçırınca; 6 ve 7, hayvan olmayan resimleri de sayınca çıkar. Doğru cevap <b>A</b>.',
        },
      ],
    },
    {
      id: 'nerede',
      baslik: 'Nerede ve hangi sırada?',
      bloklar: [
        {
          t: 'p',
          html: 'Bu sorular resmin kendisini değil, yerini sorar: “soldan 6. resim”, “şeftaliden hemen sonra”, “otobüsün solunda”, “alt ortada”, “orta sırada”, “iki resim arasında kaç resim var?”. Resimler ya tek bir sıra hâlinde ya da ızgarada dizilir.',
        },
        {
          t: 'ornek',
          soru: '3-hafiza-medium-test04-q10',
          baslik: '“Hemen sonra” sorusu: hikâye kur',
          adimlar: [
            'Görseli 5 saniye gösterip kapatın. Tek sırada 6 resim var: keçi, kupa, kurt, sandalye, şeftali, fil.',
            'Soldan sağa kısa bir hikâye kurun: “Keçi kupadan süt içti, kurt sandalyeye çıktı, şeftaliyi fil yedi.”',
            '“Hemen sonra”, sağdaki ilk komşu demektir. Hikâyede şeftaliden sonra <b>fil</b> geliyor.',
          ],
          eleme: 'Kupa, keçi ve kurt da görseldeydi ama şeftalinin solunda, yani ondan önce geliyordu. Doğru cevap <b>C</b>.',
        },
        {
          t: 'ornek',
          soru: '1-hafiza-hard-test06-q08',
          baslik: 'Izgarada yer: alt orta',
          adimlar: [
            'Görseli 5 saniye gösterip kapatın. 3 sıra, 3 sütun: 9 resim.',
            'Dokuz resmin hepsini yerleriyle ezberlemek zordur; önce <b>ortayı ve köşeleri</b> adlandırın: ortada erik; köşelerde ördek, kano, cetvel ve akrep.',
            '“Alt orta”, alt sıranın ortasıdır: cetvel ile akrebin arasında <b>tükenmez kalem</b> var.',
          ],
          eleme: 'Cetvel alt sıradaydı ama sol köşede; ördek sol üst köşedeydi. Doğru cevap <b>A</b>.',
        },
        {
          t: 'kutu',
          tur: 'ipucu',
          baslik: '“Solunda” ve “sağında” sözcükleri',
          html: 'Uygulamadaki “… resminin solunda / sağında hangi ikon vardı?” sorularında kastedilen, o resmin <b>hemen yanındaki</b> resimdir. Aynı taraftaki daha uzak resimler de bazen şıklarda bulunur; çocuğunuza bunu önceden anlatın.',
        },
      ],
    },
    {
      id: 'sahne',
      baslik: 'Sahne soruları: renk ve ayrıntı',
      bloklar: [
        {
          t: 'p',
          html: 'Sahne sorularında resimler ızgara yerine bir manzaranın içine serpiştirilir: çiçek bahçesi, deniz altı, kumsal, çiftlik, karlı bir gün, gökyüzü. Görsel 5-7 saniye açık kalır. Sorular sahnede ne olduğunu, bir nesneden kaç tane olduğunu ya da bir nesnenin rengini sorar.',
        },
        {
          t: 'ornek',
          soru: '3-hafsahne-hard-047',
          baslik: 'Kelebek ne renkti? Renk etiketi',
          adimlar: [
            'Görseli 5 saniye gösterip kapatın. Sahne bir çiçek bahçesi: kırmızı ve sarı çiçekler, iki arı, iki kurbağa, salyangozlar, uğur böcekleri ve <b>tek bir kelebek</b>.',
            'Sahnede tek olan nesneyi rengiyle birlikte adlandırın: “<b>pembe kelebek</b>”.',
            'Soru gelince etiketi hatırlayın: kelebek pembeydi.',
          ],
          eleme: 'Sarı ve yeşil şıklar, sahnedeki sarı çiçekler ve yeşil kurbağalar yüzünden tanıdık gelebilir; mavi sahnede hiç yoktu. Doğru cevap <b>B</b>.',
        },
      ],
    },
    {
      id: 'yontem',
      baslik: '5 adımda çözüm yöntemi',
      bloklar: [
        { t: 'p', html: 'Her kısa süreli hafıza sorusunda aynı sırayı izlemek, birkaç saniyeyi en iyi şekilde kullanmayı sağlar:' },
        {
          t: 'liste',
          numarali: true,
          maddeler: [
            '<b>Genel resme bak.</b> Kaç resim var, nasıl dizilmiş: tek sıra mı, ızgara mı, sahne mi?',
            '<b>Grupla ve say.</b> Kaç hayvan, kaç taşıt, kaç meyve var? Izgarada sıraları say.',
            '<b>Adlandır ve tekrar et.</b> Resimlerin adlarını içinden söyle; süre kalırsa bir kez daha tekrar et.',
            '<b>Yeri ve rengi etiketle.</b> Tek sırada hikâye kur; ızgarada ortayı ve köşeleri, sahnede tek olan nesnelerin rengini adlandır.',
            '<b>Şıkları tek tek kontrol et.</b> Her şık için “Bunu gördüm mü, nerede gördüm?” diye sor. “Yoktu” sorusunda gördüğün resimleri ele.',
          ],
        },
        {
          t: 'kutu',
          tur: 'ipucu',
          baslik: 'Soruyu dikkatle oku',
          html: 'Görsel kapandıktan sonra gelen soruyu acele etmeden okuyun: “vardı” mı, “yoktu” mu? “Hemen sonra” mı, “solunda” mı? Doğru hatırlanan bir görsel, yanlış okunan bir soru yüzünden boşa gidebilir.',
        },
      ],
    },
    {
      id: 'tuzaklar',
      baslik: 'Çeldirici tuzakları ve sık yapılan hatalar',
      bloklar: [
        { t: 'p', html: 'Yanlış şıklar çoğu zaman görselde gerçekten olan ya da görseldekine benzeyen bir şeyi kullanır. En sık karşılaşılan tuzaklar:' },
        {
          t: 'liste',
          maddeler: [
            '<b>“Vardı” ile “yoktu”yu karıştırmak:</b> “Yoktu” sorusunda görselde gördüğü resmi seçmek.',
            '<b>Aynı gruptan çeldirici:</b> Görselde tavuk ve inek varken şıktaki kediyi ya da timsahı “hayvan vardı” diye seçmek.',
            '<b>Boş köşeyi unutmak:</b> Son sırası eksik ızgarayı dolu sanıp fazla saymak.',
            '<b>Yanlış komşu:</b> “Hemen sonra” sorusunda iki resim sonrasını ya da önceki resmi seçmek.',
            '<b>Başka bir rengin karışması:</b> Kelebeğin rengi sorulunca sahnedeki çiçeklerin rengini seçmek.',
          ],
        },
        {
          t: 'kutu',
          tur: 'veli',
          baslik: 'Velilere öneri',
          html: 'Çocuğunuz yanlış cevap verdiğinde görseli yeniden açıp <b>“Neyi hatırladın, neyi kaçırdın?”</b> diye birlikte bakın. Kaçırılan şeyin türü (sayı mı, sıra mı, renk mi) bir sonraki bakışta neye dikkat edeceğini gösterir.',
        },
      ],
    },
    {
      id: 'evde',
      baslik: 'Evde nasıl çalışılır?',
      bloklar: [
        {
          t: 'p',
          html: 'Kısa süreli hafıza, oyunla en kolay çalışılan becerilerden biridir. Evdeki nesnelerle birkaç dakikada hazırlanan oyunlar yeterlidir.',
        },
        {
          t: 'liste',
          maddeler: [
            '<b>Tepsi oyunu:</b> Bir tepsiye 5-6 nesne koyun (kaşık, top, elma, kalem…). Çocuk 10 saniye baksın, sonra tepsiyi bir örtüyle kapatın ve “Neler vardı?” diye sorun. Kolaylaştıkça nesne sayısını artırın, süreyi kısaltın.',
            '<b>Ne eksildi?:</b> Aynı tepsiden, çocuk görmeden bir nesneyi alın; örtüyü açınca eksik olanı bulsun. Bu oyun, “yoktu” sorularının tam karşılığıdır.',
            '<b>Sıra oyunu:</b> 4-5 oyuncağı yan yana dizin. Çocuk baktıktan sonra örtün ve “Ayıcıktan hemen sonra ne vardı?”, “Soldan 3. oyuncak hangisiydi?” diye sorun.',
            '<b>Kitapla renk ve sayı:</b> Resimli bir kitabın sayfasını 5 saniye gösterip kapatın; “Kaç kuş vardı?”, “Balon ne renkti?” diye sorun.',
            '<b>Süre:</b> Günde 5-10 dakika, haftada birkaç gün yeterli. Kısa ve düzenli çalışma, uzun ve seyrek çalışmadan daha etkilidir.',
          ],
        },
        {
          t: 'kutu',
          tur: 'veli',
          baslik: 'Stratejileri sesli uygulayın',
          html: 'Oyun sırasında siz de kuralları sesli uygulayın: <b>“Üç hayvan, iki meyve var”</b>, <b>“Kedi topa vurdu, top arabaya çarptı”</b>. Çocuk bu konuşmayı zamanla içinden yapmaya başlar. Hatırlayamadığında suçlamayın; örtüyü kaldırıp birlikte bakmak en iyi öğretmendir.',
        },
      ],
    },
    {
      id: 'alistirma',
      baslik: 'Alıştırmalar',
      bloklar: [
        { t: 'p', html: 'Aşağıdaki 8 soruyu çocuğunuzla birlikte çözün. Her soruda <b>önce görseli kartta yazan süre kadar gösterin, sonra kapatın</b> (elinizle ya da bir kâğıtla örtün) ve soruyu ondan sonra okuyun. Cevabı ve kısa açıklamasını düğmeyle görebilirsiniz.' },
        {
          t: 'alistirma',
          sorular: [
            { soru: '1-hafsahne-easy-029', aciklama: 'Kumsalda yengeçler, deniz yıldızları, kovalar, bir top ve bir şemsiye vardı. Gökyüzünde güneş ve bulut dışında hiçbir şey yoktu: sahnede hiç kuş yoktu.' },
            { soru: '1-hafsahne-medium-060', aciklama: 'Karlı sahnede üç kardan adam, iki tavşan ve çam ağaçları vardı. Penguen ve kuş sahnede hiç yoktu.' },
            { soru: '2-hafsahne-hard-040', aciklama: 'Her türü ayrı sayın: 3 kuş, 3 arı, 3 kelebek, 2 balon, 2 uçurtma. Soru kuşları soruyor: 3.' },
            { soru: '3-hafiza-medium-test05-q04', aciklama: 'Sıra: top, araba, kedi, hindi, pilav kâsesi, yatak. Soldan 6. resim en sondaki yatak.' },
            { soru: '3-hafiza-easy-test05-q10', aciklama: 'Sıra: akrep, helikopter, ahtapot, kurt, yarasa. Akrep ile kurt arasında helikopter ve ahtapot var: 2 resim.' },
            { soru: '1-hafiza-hard-test07-q15', aciklama: 'Orta sırada yunus, süt bardağı, tekne ve zar vardı. Kanepe üst sırada, tavuk alt sıradaydı; orta sıradaki tek şık tekne.' },
            { soru: '2-hafiza-medium-test04-q05', aciklama: 'Görselde yalnız meyveler (elma, muz, çilek, karpuz) ve yiyecek-içecekler (hamburger, çörek, limonata, çikolata) vardı. Hiç taşıt yoktu; bu yüzden gemi doğru.' },
            { soru: '2-hafiza-easy-test07-q05', aciklama: 'Sıra: kaşık, kuğu, otobüs, pastel boya, ilaç şişesi. Otobüsün hemen solunda kuğu var.' },
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
      baslik: 'Önce bak, sonra hatırla',
      soru: '2-hafiza-medium-test02-q06',
      maddeler: ['Görsel 5-7 saniye gösterilir, sonra kapanır', 'Soru ve şıklar görsel kapanınca gelir', 'Ne vardı, kaç tane, nerede, ne renk?'],
    },
    { t: 'metin', ust: 'Kural 1', baslik: 'Gördüğünün adını söyle', diyagram: 'adlandir', maddeler: ['Her resmin adını içinden söyle.', 'Süre kalırsa listeyi bir kez tekrar et.'] },
    { t: 'metin', ust: 'Kural 2', baslik: 'Grupla: dokuz resim yerine üç grup', diyagram: 'grupla', maddeler: ['Hayvanlar, meyveler, taşıtlar, eşyalar', '“3 hayvan, 3 meyve, 3 taşıt”'] },
    { t: 'metin', ust: 'Kural 3', baslik: 'Sayarak bak', diyagram: 'sayarak', maddeler: ['Izgarada sıraları say: 4 + 4 + 3 = 11', 'Sahnede her türü ayrı say.'] },
    { t: 'metin', ust: 'Kural 4', baslik: 'Sırayı hikâyeye çevir', diyagram: 'hikaye', maddeler: ['Soldan sağa kısa bir hikâye kur.', 'Izgarada ortayı ve köşeleri adlandır.'] },
    { t: 'metin', ust: 'Kural 5', baslik: 'Tek olanlara renk etiketi yapıştır', diyagram: 'renk', maddeler: ['“Mor balon”, “pembe kelebek”', 'Rengi ve nesneyi birlikte hatırla.'] },
    { t: 'soru', ust: 'Örnek 1 · Ne vardı?', baslik: 'Hangisi önceki görselde vardı?', soru: '1-hafiza-easy-test02-q10' },
    {
      t: 'cevap',
      ust: 'Örnek 1 · Çözüm',
      baslik: 'Adlandır, sonra karşılaştır',
      soru: '1-hafiza-easy-test02-q10',
      adimlar: ['5 resim: tavuk, bağlama, şişe, erik, inek', 'Adlarını içinden söyle, bir kez tekrar et', 'Şıklardan yalnız su şişesi listede var'],
    },
    { t: 'soru', ust: 'Örnek 2 · Kaç tane?', baslik: 'Görselde toplam kaç resim vardı?', soru: '3-hafiza-hard-test02-q04' },
    {
      t: 'cevap',
      ust: 'Örnek 2 · Çözüm',
      baslik: 'Sıraları say: 4 + 4 + 3',
      soru: '3-hafiza-hard-test02-q04',
      adimlar: ['Üst ve orta sıra dolu: 4 + 4', 'Alt sırada 3 resim, sağ alt köşe boş', 'Toplam 11 resim'],
    },
    { t: 'soru', ust: 'Örnek 3 · Sıra', baslik: 'Şeftaliden hemen sonra hangi resim vardı?', soru: '3-hafiza-medium-test04-q10' },
    {
      t: 'cevap',
      ust: 'Örnek 3 · Çözüm',
      baslik: 'Hikâye kur, sırayı koru',
      soru: '3-hafiza-medium-test04-q10',
      adimlar: ['Keçi, kupa, kurt, sandalye, şeftali, fil', '“… şeftaliyi fil yedi.”', 'Şeftaliden hemen sonra fil gelir'],
    },
    { t: 'soru', ust: 'Örnek 4 · Sahne', baslik: 'Sahnedeki kelebek ne renkti?', soru: '3-hafsahne-hard-047' },
    {
      t: 'cevap',
      ust: 'Örnek 4 · Çözüm',
      baslik: 'Tek kelebek: “pembe kelebek”',
      soru: '3-hafsahne-hard-047',
      adimlar: ['Sahnede tek bir kelebek var', 'Rengiyle adlandır: “pembe kelebek”', 'Sarı çiçeklere, yeşil kurbağalara aldanma'],
    },
    {
      t: 'metin',
      ust: 'Yöntem',
      baslik: '5 adımda çözüm',
      numarali: true,
      maddeler: ['Genel resme bak: sıra mı, ızgara mı, sahne mi?', 'Grupla ve say', 'Adlandır ve tekrar et', 'Yeri ve rengi etiketle', 'Şıkları tek tek kontrol et'],
    },
    {
      t: 'metin',
      ust: 'Dikkat',
      baslik: 'Çeldirici tuzakları',
      maddeler: ['“Vardı” ile “yoktu”yu karıştırmak', 'Aynı gruptan benzer resim', 'Boş köşeyi unutup fazla saymak', 'Yanlış komşuyu seçmek', 'Sahnedeki başka bir renge aldanmak'],
    },
    {
      t: 'metin',
      ust: 'Evde',
      baslik: 'Tepsi oyunu',
      maddeler: ['Tepsiye 5-6 nesne koy, 10 saniye baksın', 'Örtüyle kapat: “Neler vardı?”', 'Gizlice bir nesne al: “Ne eksildi?”', 'Günde 5-10 dakika yeterli'],
    },
    { t: 'kapanis' },
  ],
};

export default konu;
