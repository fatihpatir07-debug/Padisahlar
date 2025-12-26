const PADISAHLAR_DATA = [
    {
        id: 1,
        name: "Osman Gazi",
        reign: "1299 - 1326",
        period: "Kuruluş",
        facts: [
            "Osmanlı Devleti'nin kurucusu ve ilk padişahıdır.",
            "Bizans'a karşı Koyunhisar Savaşı'nı kazanmıştır.",
            "Bursa kuşatmasını başlatmış ancak fethi göremeden vefat etmiştir."
        ]
    },
    {
        id: 2,
        name: "Orhan Gazi",
        reign: "1326 - 1359",
        period: "Kuruluş",
        facts: [
            "Bursa'yı fethederek devletin başkenti yapmıştır.",
            "İlk Osmanlı akçesini bastırmış ve ilk düzenli orduyu (Yaya ve Müsellem) kurmuştur.",
            "Rumeli'deki ilk toprak parçası olan Çimpe Kalesi'ni almıştır."
        ]
    },
    {
        id: 3,
        name: "I. Murad (Hüdavendigâr)",
        reign: "1359 - 1389",
        period: "Kuruluş",
        facts: [
            "Edirne'yi fethederek başkent yapmıştır.",
            "I. Kosova Savaşı'nda şehit düşmüştür (Savaş meydanında şehit olan tek padişah).",
            "Devşirme sistemini ve Yeniçeri Ocağı'nı kurmuştur."
        ]
    },
    {
        id: 4,
        name: "I. Bayezid (Yıldırım)",
        reign: "1389 - 1402",
        period: "Kuruluş",
        facts: [
            "Niğbolu Savaşı'nda büyük bir Haçlı ordusunu bozguna uğratmıştır.",
            "Anadolu Türk siyasi birliğini büyük ölçüde sağlayan ilk padişahtır.",
            "1402 Ankara Savaşı'nda Timur'a yenilerek esir düşmüştür."
        ]
    },
    {
        id: 5,
        name: "I. Mehmed (Çelebi)",
        reign: "1413 - 1421",
        period: "Kuruluş",
        facts: [
            "Fetret Devri'ne son vererek devleti dağılmaktan kurtarmıştır.",
            "Devletin 'ikinci kurucusu' olarak kabul edilir.",
            "İlk deniz savaşı olan Venedik Deniz Savaşı onun döneminde yapılmıştır."
        ]
    },
    {
        id: 6,
        name: "II. Murad",
        reign: "1421 - 1444 / 1446 - 1451",
        period: "Kuruluş",
        facts: [
            "Varna ve II. Kosova Savaşları ile Balkanlar'daki Türk hakimiyetini kesinleştirmiştir.",
            "Tahtı kendi rızasıyla oğlu II. Mehmed'e (Fatih) devretmiştir (daha sonra tekrar dönmüştür).",
            "İstanbul'u kuşatmış ancak alamamıştır."
        ]
    },
    {
        id: 7,
        name: "II. Mehmed (Fatih)",
        reign: "1444 - 1446 / 1451 - 1481",
        period: "Yükselme",
        facts: [
            "1453'te İstanbul'u fethederek Orta Çağ'ı kapatıp Yeni Çağ'ı açmıştır.",
            "Karadeniz'i bir 'Türk Gölü' haline getirmiştir.",
            "Topkapı Sarayı'nı inşa ettirmiş ve Fatih Kanunnamesi'ni hazırlamıştır."
        ]
    },
    {
        id: 8,
        name: "II. Bayezid",
        reign: "1481 - 1512",
        period: "Yükselme",
        facts: [
            "İspanya'dan kovulan Musevileri Osmanlı topraklarına kabul etmiştir.",
            "Cem Sultan olayı nedeniyle batıda fazla fetih yapamamıştır.",
            "'Veli' ve 'Adli' mahlaslarıyla tanınan, dindar bir padişahtır."
        ]
    },
    {
        id: 9,
        name: "I. Selim (Yavuz)",
        reign: "1512 - 1520",
        period: "Yükselme",
        facts: [
            "Mısır seferi ile Halifeliği Osmanlı'ya getirmiştir.",
            "Kutsal Emanetleri İstanbul'a taşıtmıştır.",
            "Hazineyi ağzına kadar doldurarak vasiyetini mühürletmiştir."
        ]
    },
    {
        id: 10,
        name: "I. Süleyman (Kanuni)",
        reign: "1520 - 1566",
        period: "Yükselme",
        facts: [
            "46 yıl ile Osmanlı tahtında en uzun süre kalan padişahdır.",
            "Yaptırdığı kanunlarla 'Kanuni', batıda ise 'Muhteşem' olarak anılır.",
            "Mohaç Meydan Muharebesi ile Macaristan'ı fethetmiştir."
        ]
    },
    {
        id: 11,
        name: "II. Selim (Sarı)",
        reign: "1566 - 1574",
        period: "Yükselme",
        facts: [
            "Kıbrıs onun döneminde fethedilmiştir.",
            "Barbaros lakaplı büyük denizci Kaptan-ı Derya döneminde vefat etmiştir.",
            "Sefere çıkmayan ilk Osmanlı padişahıdır."
        ]
    },
    {
        id: 12,
        name: "III. Murad",
        reign: "1574 - 1595",
        period: "Yükselme",
        facts: [
            "Osmanlı sınırlarını doğuda en geniş noktasına ulaştırmıştır.",
            "Takiyüddin'e ilk Osmanlı rasathanesini kurdurmuştur.",
            "Safevilerle Ferhat Paşa Antlaşması'nı imzalamıştır."
        ]
    },
    {
        id: 13,
        name: "III. Mehmed",
        reign: "1595 - 1603",
        period: "Duraklama",
        facts: [
            "Eğri fatihi unvanını almıştır.",
            "Haçova Meydan Muharebesi'ni kazanmıştır.",
            "Sancağa çıkıp gelen son padişahtır."
        ]
    },
    {
        id: 14,
        name: "I. Ahmed",
        reign: "1603 - 1617",
        period: "Duraklama",
        facts: [
            "Ekber ve Erşad sistemini (En yaşlı ve olgunun tahta çıkması) getirmiştir.",
            "İstanbul'un simgelerinden olan Sultanahmet Camii'ni yaptırmıştır.",
            "Kafes sistemini başlatarak şahzadelerin sarayda kalmasını sağlamıştır."
        ]
    },
    {
        id: 15,
        name: "I. Mustafa",
        reign: "1617 - 1618 / 1622 - 1623",
        period: "Duraklama",
        facts: [
            "İki kez tahta çıkmış ve iki kez tahttan indirilmiştir.",
            "Akli dengesi yerinde olmadığı için ulema tarafından indirilmiştir.",
            "Şehzadelerin öldürülmemesi kuralının ilk uygulamalarından biridir."
        ]
    },
    {
        id: 16,
        name: "II. Osman (Genç Osman)",
        reign: "1618 - 1622",
        period: "Duraklama",
        facts: [
            "Osmanlı tarihinde bir isyan sonucu öldürülen ilk padişahtır.",
            "Yeniçeri Ocağı'nı kaldırmayı planlayan ilk yenilikçi padişahtır.",
            "Harem dışından evlenerek saray geleneklerini kırmıştır."
        ]
    },
    {
        id: 17,
        name: "IV. Murad",
        reign: "1623 - 1640",
        period: "Duraklama",
        facts: [
            "İçki ve tütün yasağı gibi sert disiplin kuralları uygulamıştır.",
            "Bağdat'ı fethederek 'Bağdat Fatihi' unvanını almıştır.",
            "Osmanlı'nın merkezi otoritesini yeniden güçlendirmiş güçlü bir liderdir."
        ]
    },
    {
        id: 18,
        name: "İbrahim (Deli)",
        reign: "1640 - 1648",
        period: "Duraklama",
        facts: [
            "Sekiz yıl süren saltanatında saray masrafları artmıştır.",
            "Girit kuşatması onun döneminde başlamıştır.",
            "Gümüş akçenin değerini düşürme çabaları isyana yol açmıştır."
        ]
    },
    {
        id: 19,
        name: "IV. Mehmed (Avcı)",
        reign: "1648 - 1687",
        period: "Duraklama",
        facts: [
            "Osmanlı'nın batıda en geniş sınırlarına ulaştığı dönemin padişahıdır.",
            "II. Viyana Kuşatması onun döneminde gerçekleşmiştir.",
            "Tahta 7 yaşında çıkarak en genç yaşta tahta oturan padişah olmuştur."
        ]
    },
    {
        id: 20,
        name: "II. Süleyman",
        reign: "1687 - 1691",
        period: "Duraklama",
        facts: [
            "Saltanatı boyunca Kutsal İttifak Savaşları ile uğraşmıştır.",
            "Belgrad'ın fethi onun döneminde gerçekleşmiştir.",
            "Çok dindar ve sakin bir kişiliğe sahip olduğu söylenir."
        ]
    },
    {
        id: 21,
        name: "II. Ahmed",
        reign: "1691 - 1695",
        period: "Duraklama",
        facts: [
            "Şair ve hattat bir padişahtır.",
            "Salankamen Bozgunu gibi acı askeri yenilgiler yaşanmıştır.",
            "Kısa süren saltanatı boyunca devletin bekası için mücadele etmiştir."
        ]
    },
    {
        id: 22,
        name: "II. Mustafa",
        reign: "1695 - 1703",
        period: "Duraklama",
        facts: [
            "Karlofça Antlaşması (Büyük toprak kaybı) onun döneminde imzalanmıştır.",
            "Sefere bizzat çıkan son Osmanlı padişahıdır.",
            "Edirne Vakası ile tahttan indirilmiştir."
        ]
    },
    {
        id: 23,
        name: "III. Ahmed",
        reign: "1703 - 1730",
        period: "Gerileme",
        facts: [
            "Lale Devri'nin padişahıdır.",
            "İlk Türk matbaası İbrahim Müteferrika tarafından onun döneminde açılmıştır.",
            "Patrona Halil İsyanı ile tahttan indirilmiştir."
        ]
    },
    {
        id: 24,
        name: "I. Mahmud",
        reign: "1730 - 1754",
        period: "Gerileme",
        facts: [
            "Batı tarzında ilk askeri ıslahatları (Humbaracı Ahmed Paşa) başlatmıştır.",
            "Belgrad'ı tekrar geri almıştır.",
            "Birçok kütüphane ve sanat eseri inşa ettirmiştir."
        ]
    },
    {
        id: 25,
        name: "III. Osman",
        reign: "1754 - 1757",
        period: "Gerileme",
        facts: [
            "Hükümdarlığı boyunca İstanbul'da büyük yangınlar çıkmıştır.",
            "51 yıl kafes hayatı yaşadıktan sonra tahta çıkmıştır.",
            "Nuruosmaniye Camii'ni tamamlatmıştır."
        ]
    },
    {
        id: 26,
        name: "III. Mustafa",
        reign: "1757 - 1774",
        period: "Gerileme",
        facts: [
            "Mühendis hane-i Bahr-i Hümayun'un temelini atmıştır.",
            "Laleli Camii'ni yaptırmıştır.",
            "Sürat Topçuları Ocağı'nı kurdurmuştur."
        ]
    },
    {
        id: 27,
        name: "I. Abdülhamid",
        reign: "1774 - 1789",
        period: "Gerileme",
        facts: [
            "Küçük Kaynarca Antlaşması gibi ağır bir antlaşma imzalamıştır.",
            "Cülus bahşişini kaldırmış ve Kapıkulu ordusunu denetime almıştır.",
            "Kırım'ın elden çıkmasına çok üzülüp felç geçirerek vefat ettiği söylenir."
        ]
    },
    {
        id: 28,
        name: "III. Selim",
        reign: "1789 - 1807",
        period: "Gerileme",
        facts: [
            "Nizam-ı Cedid adıyla Batılı tarzda yeni bir ordu kurmuştur.",
            "Kabakçı Mustafa İsyanı ile tahttan indirilmiştir.",
            "Türk sanat müziğinde birçok makam ve eser bırakmış bestekardır."
        ]
    },
    {
        id: 29,
        name: "IV. Mustafa",
        reign: "1807 - 1808",
        period: "Gerileme",
        facts: [
            "Oldukça kısa (yaklaşık 1 yıl) süre tahtta kalmıştır.",
            "Alemdar Mustafa Paşa baskını sırasında öldürülmüştür.",
            "Nizam-ı Cedid yeniliklerine karşı olanlar tarafından tahta çıkarılmıştır."
        ]
    },
    {
        id: 30,
        name: "II. Mahmud",
        reign: "1808 - 1839",
        period: "Gerileme",
        facts: [
            "Vaka-i Hayriye ile Yeniçeri Ocağı'nı kaldırmıştır.",
            "Avrupa tarzı kıyafet (fes, pantolon) ve bürokrasi reformları yapmıştır.",
            "İlk resmi gazete olan Takvim-i Vekayi'yi çıkartmıştır."
        ]
    },
    {
        id: 31,
        name: "Abdülmecid",
        reign: "1839 - 1861",
        period: "Dağılma",
        facts: [
            "Tanzimat Fermanı ve Islahat Fermanı'nı ilan etmiştir.",
            "Dolmabahçe Sarayı'nı inşa ettirmiştir.",
            "Kırım Savaşı sırasında ilk kez dış borç alınmıştır."
        ]
    },
    {
        id: 32,
        name: "Abdülaziz",
        reign: "1861 - 1876",
        period: "Dağılma",
        facts: [
            "Avrupa seyahatine çıkan ilk ve tek Osmanlı padişahıdır.",
            "Dünyanın en büyük 3. deniz donanmasını kurmuştur.",
            "Şura-yı Devlet (Danıştay) onun döneminde kurulmuştur."
        ]
    },
    {
        id: 33,
        name: "V. Murad",
        reign: "1876",
        period: "Dağılma",
        facts: [
            "Sadece 93 gün tahtta kalarak en kısa süre hüküm süren padişah olmuştur.",
            "Psikolojik sorunları nedeniyle tahttan indirilmiştir.",
            "Mason cemiyetine üye tek padişah olduğu iddia edilir."
        ]
    },
    {
        id: 34,
        name: "II. Abdülhamid",
        reign: "1876 - 1909",
        period: "Dağılma",
        facts: [
            "I. ve II. Meşrutiyet'i ilan etmiştir.",
            "Eğitim, ulaşım (Hicaz Demiryolu) ve sağlık alanında büyük yatırımlar yapmıştır.",
            "33 yıl boyunca denge siyasetiyle devleti ayakta tutmaya çalışmıştır."
        ]
    },
    {
        id: 35,
        name: "V. Mehmed (Reşad)",
        reign: "1909 - 1918",
        period: "Dağılma",
        facts: [
            "Trablusgarp ve Balkan Savaşları onun döneminde yaşanmıştır.",
            "I. Dünya Savaşı'nın büyük bölümünde tahtta kalmıştır.",
            "Çanakkale Zaferi sırasında Osmanlı padişahıdır."
        ]
    },
    {
        id: 36,
        name: "VI. Mehmed (Vahdeddin)",
        reign: "1918 - 1922",
        period: "Dağılma",
        facts: [
            "Osmanlı İmparatorluğu'nun son padişahıdır.",
            "I. Dünya Savaşı'nın bitimi ve Milli Mücadele döneminde tahtta bulunmuştur.",
            "Saltanatın kaldırılmasıyla yurt dışına çıkmıştır."
        ]
    }
];
