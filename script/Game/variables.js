const realSciences = [
   'Falsafa',
]

const ALL_QUESTIONS = {
   Falsafa: {
      "questions": [
         "Fuqarolarning dinga etiqod qilish yoki etiqod qilmaslikni mustaqil hal qilishlari qanday ataladi?",
         "Dinning qanday ildizlari mavjud?",
         "Jahon dinlari qaysilar?",
         "Milliy  dinlarga qaysilar kiradi?",
         "Xristianlikdagi asosiy yo‘nalishlar.",
         "Barcha musulmonlar uchun amal qilish lozim bo‘lgan axloqiy va huquqiy amallar tizimi.",
         "O‘zbekistonda masjid va madrasalar faoliyatini kim boshqaradi?",
         "“Vijdon erkinligi va diniy tashkilotlar to‘g‘risida”gi (Yangi tahrirda) Qonuni qachon qabul qilingan?",
         "O‘zbekiston fuqarolarining vijdon erkinligi huquqi Konstitutsiyaning qaysi moddasida aks ettirilgan.",
         "Muhammad payg‘ambarning hayoti, faoliyati, diniy va axloqiy ko‘rsatmalarini o‘zida mujassam etgan manba.",
         "Hozirda shialikning markazlashgan joyi qaysi mamlakatda?.",
         "Islomning asosiy ruknlari qaysilar?",
         "Xristian dinining payg‘ambari kim?",
         "Zardushtiylikning muqaddas kitobi.",
         "Qur’oni Karimda nechta sura va oyat bor?",
         "Politeistik dinlarning asosiy xususiyati nima?",
         "“Imom – al – Buxoriy” xalqaro jamg‘armasi qachon ta’sis etildi.",
         "Yaxve qaysi dinning xudosi?",
         "Qur’oni karim necha yil mobaynida nozil etilgan?",
         "Fetish so‘zi nima ma’noni bildiradi?",
         "Yahudiy dinining payg‘ambari.",
         "Indulgensiya so‘zining ma’nosi?",
         "Braxmanizm dinining vatani.",
         "Tasavvufda inson ruhiy kamolotining asosiy yo‘llari.",
         "Shariat qonun-qoidalarini o‘rganuvchi fan.",
         "Hayvonlar, qushlar va o‘simliklarni ilohiylashtiruvchi qadimiy urug‘ qabila dini.",
         "Buddizm ta’limoti asosi qanday qismlaran iborat?",
         "«Al adab al mufrad» kimning asari?",
         "Buddizm dini manbasi qanday nomlanadi?",
         "Ilohiyot haqidagi ta’limotning nomi.",
         "Zardushtiylik dinida yovuzlik xudosi.",
         "Qur’oni Karim qaysi xalifa davrida va qaysi yili ilk bor to‘plam shakliga keltirilgan?",
         "Muhammad payg‘ambarning birinchi va eng sadoqatli xotini.",
         "Shia musulmonlari e’zozlaydigan va e’tirof etadigan xalifa.",
         "Zardushtiylik dinidagi ezgulik va yaxshilik xudosi.",
         "Qur’oni Karim sura va oyatlarining Muhammad payg‘ambarga nozil bo‘lishi.",
         "Islomni zamonaga moslashtirish lozimligini e’tirof etuvchi oqim.",
         "“Avesto”ni ilk tarjima qilgan Yevropalik olim kim?",
         "«Panislomizm» oqimining asoschisi.",
         "Missionerlikka qarshi kurashda qaysi uslublar qo‘llanadi",
         " “Injil” so‘zi qanday ma’noni anglatadi?",
         "Islomda ro‘za munosabati bilan beriladigan sadaqa.",
         "Dinni davlatdan ajratilganligi qaysi hujjatlarda qayd etilgan?",
         "Missionerlik faoliyati  uchun qanday javobgarlik mavjud",
         "Xristianlikda insonni cherkovga qabul qilish paytida bajariladigan marosim.",
         "Urug‘ qabila dinlaridan biri.",
         "Diniy tashkilotlar faoliyat yuritish uchun qayerdan ro‘yxatdan o‘tadilar?",
         "Mutakallim al Samarqandiy kim bo‘lgan?",
         "Ko‘pxudolik dinlari fanda qanday nomlanadi.",
         "«Monoteizm» ning manosi nima?",
         "Muhammad payg‘ambarlik faoliyatini necha yoshda boshlagan?",
         "Yahudiylar masjidi qanday nomlanadi?",
         "Buxoro shahridagi eng ko‘hna zardushtiylik ibodatxonasi.",
         "Xo‘ja Orif Ar-Revgariy maqbarasi Buxoro viloyatining qaysi tumanida joylashgan?",
         "Islom diniga tayanadigan qaysi talimotga  «Inson ruhiy komilligi falsafasi» deb tarif beriladi?",
         "Muqaddas «Ka’ba» ibodatxonasining bunyod etilishi qaysi payg‘ambar nomi bilan bog‘liq?",
         "Islom dinini birinchilar qatori qabul qilgan Muhammad payg‘ambar yaqinlari.",
         "Imom al Buxoriy ziyoratgohi qaysi joyda?",
         "Yahudiylar dini iudaizm qaysi mintaqada va qachon  vujudga kelgan?",
         " Musulmonlar e’tiqodicha, xudo tomonidan Dovud  payg‘ambarga yuborilgan muqaddas kitob.",
         "Ateizm nima?",
         "Butparastlarning sanam, ikona va fetishlari quyiladigan joyning nomi.",
         "Musulmonlar diniy boshqarmasi, maschit va madrasalar tasarrufidagi barcha mol mulkning nomi?",
         "Islom dinida g‘ayri dinlarga qarshi \"Muqaddas\" urush (gazovot) ning nomi.",
         "Islomda qiyomat kunining nomlanishi.",
         "Islom dinida Muhammad payg‘ambarning osmonga Olloh huzuriga chiqqan kunining nomlanishi.",
         "Musulmonlarning oliy diniy o‘quv yurtlarida muallimlik qiluvchi kishi.",
         "Sharqda ya’ni islom dunyosida fanatizmning nomlanishi.",
         "Qur’oni Karim suralarining tashkil etuvchi qism. “Jumlalar”.",
         "XII-XIII asrlarda yashab ijod etgan Naqshbandiya tariqatining Shofirkonlik namoyondasi.",
         "XIII-XIV asrlarda yashab ijod etgan Romitanlik  buyuk mutasavvuf.",
         "Odamning paydo bo‘lishini o‘rganadigan fanning nomi.",
         "Hozirgi milodiy kalendar yil hisobi qaysi  payg‘ambar tavalludi bilan aloqador?",
         "VI asr davomida Hijoz vohasida paydo bo‘lgan din.",
         "Qaysi bir dinning muqaddas kitobi  \"uch savat\" manosini anglatadi?",
         "Bilimdonlar qishlog‘i Qasri Orifonda qaysi buyuk mutasavvuf tavallud topgan?",
         "Dahriy ya’ni xudoga ishonmaydigan kishi jahon  miqyosida qanday nom bilan ataladi?",
         "“Tolerant” atamasining lug‘aviy ma’nosi nima?",
         "Milodiy 810-870 yillarda yashab ijod etgan buyuk muhaddis?",
         "Shariatda hamma musulmonlar bajarishi shart bo‘lgan qat’iy talablar.",
         "Qaysi qadimiy diniy tushunchada “O‘ta hayajonlangan, jazavali  kishi” ma’nosini bildiradi?",
         "Kastachilikka asoslangan din?",
         "Buddizmning dunyoda tez tarqalishidagi eng asosiy omil nima edi?",
         "Quyidagilardan qaysi biri milliy dinlar toifasiga kirmaydi?",
         "Ruhlar olami bilan aloqa qiluvchi kishi nima deb ataladi?",
         "Islom qanday dinlar sirasiga kiradi?",
         "Nozil bo‘lish tartibiga ko‘ra ilohiy kitoblar qaysi bandda to‘g‘ri ko‘rsatilgan?",
         "Qaysi bandda mashhur to‘rt farishta to‘g‘ri ko‘rsatilgan?",
         "Islom asoslari tartib bilan keltirilgan bandni ko‘rsating?",
         "Arab tilida “xabarchi, xabar yetkazuvchi” ma’nosini bildiruvchi payg‘ambarlar nima deb ataladi?",
         "Qur’on suralari nozil bo‘lish shakliga ko‘ra nechaga bo‘linadi?",
         "Sunnat va hadis orasida qanday farq bor?",
         "Ikona nima?",
         "Hozirgi kunda Buddizm qaysi mamlakatning davlat dini hisoblanadi?",
         "Tangrichilik dinidagi bosh Xudo kim?",
         "Zardushtiylikdagi “Atarxurra” qanday ma’noni bildiradi?",
         "Markaziy Osiyoda Yahudiylarning birinchi sinagogasi qachon va qayerda qurilgan?",
         "“Sura” so‘zi qanday ma’noni bildiradi?",
         "Qaysi tashkilot ISHID ning tashkil topishida muhim o`rin tutgan?",
         "Paygambarimiz davrlarida kimlar Muhojirlar deb atalgan?",
         "Abu Bakr davrida jamlangan Qur’oni Karim qanday nomlangan?",
         "“Navro‘z” Zardushtiylikda nimaga bag‘ishlab nishonlangan?",
         "“Konfessiya” so‘zining ma’nosi nima?",
         "2017-2021 yillarda O‘zbekiston Respublikasini rivojlantirishning beshta ustuvor yo‘nalishlari bo‘yicha harakatlar strategiyasining nechanchi yo‘nalishida “Diniy bag‘rikenglik va millatlararo totuvlik” asoslab berilgan?",
         "\"Etika\" atamasini birinchi bo‘lib muomalaga kiritgan faylasuf.",
         "Axloq haqidagi ta’limotni fan darajasiga ko‘targanlar...",
         "\"Axloq\" so‘zining lug‘aviy ma’nosi.",
         "Inson haqida yoqimli taassurot uyg‘otadigan, lekin jamoa, jamiyat va insoniyat hayotida u qadar muhim ahamiyatga ega bo‘lmaydigan, milliy urf odatlarga asoslangan chiroyli hatti harakatlar qanday ataladi.",
         "Oila, jamoa, mahalla kuy miqyosida ahamiyatli bo‘lgan, ammo, jamiyat va insoniyat hayotiga sezilarli ta’sir ko‘rsatmaydigan yoqimli hatti harakatlar majmui nima?",
         "Jamiyat, zamon insoniyat tarixi uchun namuna bo‘la oladigan ijobiy hatti-harakatlar yig‘indisi qanday ataladi.",
         "Monogamiya nima?",
         "Tarbiya funksiyasi qanday vazifani bajaradi?",
         "Fuqarolik jamiyati, davlatning eng muhim hujayrasi nima?",
         "Nikoh, oilaviy mulk, bolalar tarbiyasini o‘z ichiga oluvchi uyushma bu ...",
         "Oilalar yig‘indisi nimani tashkil etadi?",
         "O‘rtoqlik deganda nimani tushunasiz?",
         "Axloqiy tamoyillar qaysi javobda to‘g‘ri ko‘rsatilgan?",
         "Axloqiy me’yorlar qaysi qatorda ko‘rsatilgan?",
         "Axloqshunoslikning asosiy tushunchalari qaysi javobda to‘g‘ri ko‘rsatilgan?",
         "Vatanparvarlik nima?",
         "O‘zbekiston Respublikasi Konstitutsiyasining 12-moddasida nima haqida fikr yuritiladi?",
         "Qadimgi Yunon axloqshunosligida to‘rt buyuk faylasuf qaysi qatorda to‘g‘ri ko‘rsatilgan?",
         "Axloqiy ishonch nima?",
         "Xulq nima?",
         "Hatti harakat nima?",
         "Odob madaniyati deganda nimani tushunasiz?",
         "Vijdon qanday funksiyalarni bajaradi?",
         "Odat tusiga aylantirilgan, qat’iylashtirilgan, takallufning mayda-chuyda jihatlarigacha ishlab chiqilgan odob qoidalari sifatida qoidalashtirilgan muomala hodisasi bu ....",
         "Axloq qanday funksiyalarni bajaradi?",
         "Vijdon erkinligi nima?",
         "Muallimlik axloqining asosiy professional xususiyatlari nimalardan iborat?",
         "Rahbar xodimning professional axloqi qanday bo‘lmog‘i lozim?",
         "Etosfera qanday ma’noni bildiradi.",
         "Bobilliklarning badiiy yuksak va mukammal axloqiy asari?",
         "Axloq tuzilmasini ko‘rsating.",
         "Axloqiy madaniyat bu …",
         "Nima uchun biz axloqshunoslikni «ezgulik falsafasi» deb ataymiz?",
         "Aflotunning ta’limoti buyicha odamning joni nimalardan iborat?",
         "Xulq nima?",
         "Insoniyat hayotida yoqimli taasurot uyg‘otadigan, lekinjamiyat va insoniyat hayotida u qadar muhim ahamiyatga ega bo‘lmaydigan, milliy urf-odatlarga asoslangan chiroyli hatti-harakatlarni o`z ichiga olgan tushuncha nima?",
         "Buyuk yunon faylasufi Arastu fanlarni necha tizimga bo‘lgan va ular qaysilar, aniqlang:",
         "Gumanizm so‘zining mohiyati nimadan iborat?",
         "Axloqiy ong nima?",
         "Pandnomalarning yuksak badiiyati va tarbiyaviy ahamiyati nimada?",
         "Axloqshunoslik huquqshunoslikdan farq qiladimi?",
         "Lafz deganda nimani tushunasiz?",
         "Assalomu alaykum so‘zining ma’nosini bilasizmi?",
         "Qur’onda axloq–odobqoidalarining talablari?",
         "Qaysi xislat odamga baxt saodat keltiradi?",
         "Estetika atamasini birinchi marta kim kiritgan. ",
         "San’at nima. ",
         "San’atni paydo bo‘lishi va taraqqiyoti uchun inson hayotining qaysi sohasi hammadan ko‘proq muhim rol o‘ynaydi. ",
         "Go‘zallik nima. ",
         " “Estetika” atamasi qanday ma’noni anglatadi?",
         "Go‘zallik didi deb nimaga aytiladi. ",
         " “Ommaviy madaniyat” nima. ",
         "\"Katarsis\" tushunchasi qanday ma’noni anglatadi. ",
         "Estetik ong turlarini aniqlang. ",
         "Estetik did deganda nimani tushunasiz?",
         "Estetika fanida aynan qanday go‘zallik haqida gap ketadi? ",
         "Estetik mushohada bu...? ",
         "Fojiaviylik hayotda qanday hodisalarni ifodalaydi?",
         "Qaysi turlar sa’natning makon turlariga kiradi?",
         "Elitar san`at – bu…",
         "Drama so‘zining ma`nosi nima?",
         "“Landshaft” deganda nima tushuniladi?",
         "Qaysi xalqlar sportga inson tanasi go‘zalligining namoyishi sifatida qaraganlar?",
         "Estetik tarbiya bu … ",
         "“Globallashuv” atamasini dastlab kim ishlatgan?",
         "Hozirgi kunda axloqiy tarbiyaning eng kuchli zamonaviy vositasi bu …",
         "Birinchi bo‘lib yozuvni qaysi xalqlar kashf etganlar?",
         "Estetika faniga oid yuzlab, ehtimol minglab atamalarni o‘z ichiga olgan eng yirik istiloh bu…",
         "Estetik ehtiyoning dastlabki bosqichi bu …",
         "Estetikaning asosiy kategoriyalari to‘g`ri berilgan qatorni toping",
         "“Dizayn” so‘zi qaysi tildan olingan?",
         "Tushunchaning mazmuni nima?",
         "Tushunchaning hajmi nima?",
         "Tushunchani chegaralash amali qanday bajariladi?",
         "Tushunchani chegaralash usulining mohiyati nimadan iborat?",
         "Tushunchani umumlashtirish usulining mohiyati nimadan iborat?",
         "Tushunchani bo’lish qanday mantiqiy amal?",
         "Tushunchani tasniflash qanday amal?",
         "Bir va undan ortiq chin mulohazalardan ma’lum qoidalar yordamida yangi bilimlarni keltirib chiqarishdan iborat bo’lgan tafakkur shakli nima?",
         "Xulosa chiqarish qanday yo’nalishlar bo’yicha turlarga bo’linadi?",
         "Xulosa chiqarish chinlik darajasiga ko’ra qanday turlarga bo‘linadi?",
         "Asoslarning soniga ko’ra xulosa chiqarish qanday turlarga bo’linadi?",
         "Fikrlarning harakat yo’nalishiga ko’ra xulosa chiqarish qanday turlarga bo’linadi?",
         "Quyida ko’rsatilgan xulosa chiqarishning qaysi turi mukammal bo’lib, boshqalari haqida ham ma’lumot beradi?",
         "Deduktiv xulosa chiqarish bu:",
         "Bevosita xulosa chiqarish bu:",
         "Mulohazalarning shaklini o’zgartirish orqali yangi bilim hosil qilishga qanday xulosa chiqarish deb ataladi?",
         "Bevosita xulosa chiqarishning qanday turlari bor?",
         "Berilgan mulohazaning miqdorini saqlagan holda sifatini o’zgartirish orqali yangi mulohaza hosil qilish usuli qanday ataladi.?",
         "Qanday xulosa chiqarish sillogizm shaklida bo’ladi?",
         "Buyum va hodisalarning sinfi to’g’risida tasdiqlab yoki inkor etib bayon qilingan fikr shu sinf ichiga kiruvchi barcha buyum va hodisalarga taalluqli bo’lgan tasdiq yoki inkor fikr qanday ataladi?",
         "Mantiq fani qaysi mamlakatlar mantiqiy ta’limoti asosida rivojlandi.",
         "Hind mantig’ini asosida qaysi mamlakatlarda mantiq fani rivojlangan.",
         "Mantiq nima?",
         "Mantiq fanining asoschisi kim?",
         "Mantiq ilmida tushuncha narsa va hodisalarning qanday tomonlarini ifodalaydi?",
         "Bilishda tafakkur qanday tushunchalar bilan ish tutadi?",
         "Narsalarning mohiyatini bilish nima? ",
         "Dialektik mantiqda tushunchaning qanday xususiyati aks etadi?",
         "Formal mantiq o’z vazifasini bajarishda umumlashtirishni qanday yo’l bilan amalga oshiradi?",
         "Tushuncha hosil qilishda qanday ish tutiladi?",
         "Formal mantiq voqealarni o’rganishda nimalarni e’tibordan soqit qilmaydi?",
         "Tushuncha qachon xatolar manbaiga aylanib qolishi mumkin?",
         "Tushunchaning mazmuni va hajmi orasidagi teskari munosabat qonuni nimani ifodalaydi?",
         " “Sillogizm” qanday ma’noni anglatadi?",
         "Isbotsiz chin deb qabul qilingan nazariy mulohazalar nima?",
         "Isbotlashda chin asoslardan chin xulosa chiqadi; xulosa xato bo’lganda, asoslar chin bo’lishi....",
         "Analogiyada fikr qanday harakatlanadi?",
         "Mantiqning nazariy ahamiyati qanday?",
         "Tafakkur qonunlari nima?",
         "Tushuncha mazmuniga ko’ra qanday turlarga bo’linadi?",
         "Hajm jihatidan chegaralangan umumiy tushunchalarni ko’rsating.",
         "Quyidagi qaysi tushunchalar qisman mos kelishi munosabatida bo’la oladi?",
         " Hukmning predikati nima?",
         "Hukmlarning sifat va miqdoriga qarab 4 turini aniqlang?",
         "Mavjudlik hukmlari nima?",
         "Murakkab hukmlar deb nimaga aytiladi?",
         "Bevosita xulosa chiqarish nima?",
         "Analogiya nima?",
         "Isbotlash nima?",
         "Javobi bevosita mavjud bilimda bo’lmagan va yechish usuli noma’lum bo’lgan savol? ",
         "“Nazariya” termini tor ma’noda nimani anglatadi?",
         "Dialektik logika nimani o’rganadi?",
         "“Har bir buyum va hodisaning real asosi bo’lgani kabi ularning in’ikosi bo’lgan fikr – mulohazalar ham asoslangan bo’ladi” bu qaysi formal mantiq qonunining ta’rifi hisoblanadi?",
         "Umumiy tasdiq hukmning formulasi qanday?",
         "Almashtirish orqali xulosa chiqarish deb nimaga aytiladi?",
         "Logika so’zining lug’aviy ma’nosi qanday?",
         "Baland va past tushunchalari qaysi munosabatlarga misol bo’la oladi?",
         "Bo’linuvchi tushunchani o’zaro zid bo’lgan ikkita tur tushunchaga ajratish bo’lishning qaysi turi hisoblanadi?",
         "Ayiruvchi hukmlarning 2 turini aniqlang",
         "Umumiy tasdiq va umumiy inkor hukmlar o’rtasidagi munosabatni toping.",
         "Hukmlarni boshqa shaklga kirishi qay tarzda amalga oshadi?",
         "Predikat mazmuniga ko’ra oddiy hukm turlari.",
         "Oddiy qat’iy hukmlar deb nimaga aytiladi?",
         "Almashtirish nima?",
         "Tezis nima?",
         "Argument nima? ",
         "Idrok nima?",
         "Umumiy inkor hukm qanday harf  bilan belgilanadi? ",
         "Mantiq so’zi qaysi ma’nolarda qo’llaniladi?",
         "Hissiy bilish ilk bosqichi?",
         "Tushunchaning mantiqiy tarkibi qanday bo’ladi?",
         "Tushunchani hajmiga ko’ra qanday turlari bor?",
         "Tushuncha shakllanishining qaysi usulida predmet fikran uni tashkil qiluvchi qismlar, tomonlarga ajratilib, har qaysi alohida o’rganiladi?",
         "Quyidagilarni qaysi biri yakka tushuncha hisoblanadi?",
         "Hukmning sub’ekti nima?",
         "Sifat jihatidan oddiy qat’iy hukmning 2 turini toping?",
         "Hukmlar voqelikga mos kelish darajasiga ko’ra qanday turlarga bo’linadi.",
         "Xulosa chiqarish nima?",
         "Gipoteza deb nimaga aytiladi?",
         "Mantiq fanining o’rganish ob’ekti nima?",
         "Ziddiyat qonuni nima? ",
         "Tushunchalarni ta’riflash nima?",
         "Tushunchalar orasidagi sig‘ishmaydigan munosabat turlarini ko‘rsating? ",
         "Quyidagi tushunchalardan qaysi biri abstrakt tushuncha hisoblanadi? ",
         "Jamlovchi tushunchani ko‘rsating? ",
         "Tushunchaning mazmuni deganda nimani tushunasiz? ",
         "Tushunchaning hajmi deganda nimani tushunasiz? ",
         "Formal mantiq asosiy qonunlarini ko‘rsating? ",
         "Mantiq fani nimani o‘rganadi? ",
         "Umumiy tasdiq hukmlarida hukm terminlari qanday hajmda bo‘linadi? ",
         "Hukmlarni son va sifat jixatdan birlashgan klassifikatsiya bo‘yicha qanday turlarga bo‘linadi? ",
         "Tushunchalar orasidagi sig`ishmaydigan munosabat turlarini ko‘rsating? ",
         "Juz’iy inkor hukmlari quyidagi qaysi formulada to‘g`ri ko‘rsatilgan",
         "Abstrakt tushunchani ko‘rsating? ",
         "Predikat mazmuniga ko‘ra hukm turlarini ko‘rsating? ",
         " Murakkab hukmni ko‘rsating? ",
         "Quyidagi tushunchalardan qaysi biri umumiy tushuncha hisoblanadi? ",
         "Xulosa chiqarish nima? ",
         "... qonuni tafakkurga, uning barcha elementlari, shakllariga xos bo‘lgan umumiy mantiqiy qonundir. Bu qonunning talablari tafakkurning har bir shakliga xos bo‘lgan konkret qoidalarda aniq ifodalanadi. Tafakkurning tushuncha, mulohaza, xulosa chiqarish shakllari, ular o‘rtasidagi munosabatlar shu qonunga asoslangan holda amalga oshadi. Fikr qaysi tafakkur qonuni haqida?",
         "Dunyoqаrаshning tuzilishi qаndаy?",
         "Tаriхаn dunyoqаrаshning shаkllаri bu?",
         "Mif аtаmаsi qаndаy mа’nоlаrni аnglаtаdi?",
         "Quyidаgilаrning qаysi biri dinning funksiyasi emаs?",
         "Fetishizm bu?",
         "Mаgiya bu?",
         "Mоnоteizm bu?",
         "Dunyoqаrаshning qаysi shаkllаri e’tiqоd vа tuyg‘ulаrgа tаyangаn?",
         "Fаlsаfiy dunyoqаrаsh dunyoni nimаlаrgа tаyangаn hоldа tushuntirаdi?",
         "Kоsmоsentrizmniing аsоsiy хususiyati nimаdаn ibоrаt?",
         "Quyidаgilаrdаn qаysi biri diаlektik bilimlаr sоhаsigа tegishli?",
         "Mаteriаlistlаr deb qаysi tоifаdаgi kishilаrni аytish mu mkin?",
         "Аntik fаlsаfаning аsоsiy sаvоli?",
         "Аgnоstisizm nаmоyondаlаrining аsоsiy g‘оyasi qаysi jаvоbdа to‘g‘ri ko‘rsаtilgаn?",
         "Fаlsаfаning qаysi funksiyasidа “Hаqiqаt nimа? Uning me’zоnlаri qаndаy?” degаn sаvоllаr berilаdi?.",
         "Fаlsаfаning qаysi funksiyasi etаkchi o‘rinni egаllаydi?",
         "Хаlqаrо Bоstоn kоngressidа frаnsuz mutаfаkkiri Per Оbenk qаndаy sаvоlni o‘rtаgа tаshlаgаn edi?",
         "“Umumiy nisbiylik nаzаriyasi” tа’limоtining аsоschisi kim?",
         "Sientizm quyidаgi fikrlаrdаn qаysi birini ilgаri surgаn?",
         "Dinning аsоsiy funksiyalаri qаysi jаvоbdа to‘g‘ri vа to‘liq ko‘rsаtilgаn?",
         " Fаn yutuqlаrini tаn оlаdigаn vа ijоbiy bаhоlаydigаn tа’limоtning nоmi qаysi qаtоrdа to‘g‘ri ko‘rsаtilgаn?",
         "Fаlsаfiy tаfаkkur Qаdimgi Shаrq vа G‘аrbdа ijtimоiy оngning dаstlаbki shаkli sifаtidа qаndаy ko‘rinishdа vujudgа kelgаn? ",
         "Mifоlоgiyadа dаstlаb qаndаy mаsаlаlаr qo‘yilgаn? ",
         "Mаrkаziy Оsiyodа mа’nаviy-fаlsаfiy merоsning eng qаdimgisi qаysi jаvоbdа to‘g‘ri ko‘rsаtilgаn? ",
         "“Ezgu fikr, ezgu so‘z, ezgu аmаl” g‘оyasi kim tоmоnidаn ilgаri surilgаn?",
         "Zаrdushtiylikdа bоrliqning substаnsiоnаl аsоsi nimа? ",
         "O‘rtа аsrlаr fаlsаfаsigа хоs хususiyatni belgilаng?",
         "Dunyo bo‘linmаs bo‘lаkchаlаr (аtоmlаr)dаn tаshkil tоpgаn, degаn tа’limоtni ilgаri surgаn Yunon,fаylаsufi kim?",
         "Qаysi аllоmа “Shаrq Аrаstusi” – “Muаllim us-sоniy” degаn yuksаk nоmgа sаzоvоr bo‘lgаn? ",
         "Nоklаssik dаvrdа G‘аrb fаlsаfаsidа qаndаy yangi оqim vа yo‘nаlishlаr vujudgа keldi?",
         "«Оntоlоgiya» аtаmаsi qаysi so‘zdаn оlingаn?",
         "«Substаnsiya» - bu nimа?",
         "Bоrliqning аsоsiy kаtegоriyasi nimа?",
         "Fаlsаfаdа bоrliq vа yo‘qlik o‘rtаsidаgi o‘zаrо аlоqа qаndаy?",
         "«... – fаlsаfiy kаtegоriya sifаtidа dunyoni, uning butun rаng – bаrаngligi vа turli – tumаn nаmоyon bo‘lish shаkllаri bilаn yaхlit аks ettirish imkоnini berаdi», bu nimа?",
         "Bоrliqning shаkllаri nechtаgа bo‘linаdi?",
         "«... – insоn vа uning fаоliyatidаn qаt’i nаzаr mаvjud bo‘lgаn nаrsаlаr vа jаrаyonlаr bоrlig‘i», bu nimа?",
         "Individuаllаshgаn mа’nаviy bоrliq - bu nimа?",
         "«... – insоn yarаtgаn nаrsаlаr bоrlig‘i ko‘p jihаtdаn insоnning o‘z bоrlig‘i bilаn bоg‘lаnаdi, zerо, u bunyod etgаn «...», аvvаlо, uning turli – tumаn ehtiyojlаrini qоndirishgа хizmаt qilаdi», bu nimа? ",
         "Fаlsаfаning qаysi sоhаsidа bоrliq vа yo‘qlik, mаvjudlik vа nоmаvjudlik muаmmоlаrigа dоir mаsаlаlаr o‘rgаnilаdi?",
         "Qаdimgi Shаrqdа ilk mаrоtаbа qаysi mаnbаdа bоrliq mаsаlаlаri tаhlil qilingаn? ",
         "Qаdimgi Hindistоn mutаfаkkirlаri bоrliq sirining tаgigа etishgа hаrаkаt qilаr ekаnlаr, quyosh tundа qаergа ketаdi, yulduzlаr kunduzi qаyoqqа yo‘qоlаdi kаbi sаvоllаrgа jаvоb tоpishgа uringаnlаr vа bu tаsаvvurlаrni insоniyatgа mа’lum bo‘lgаn eng qаdimgi qаysi kitоbdа аks ettirgаnlаr? ",
         "Mаrkаziy Оsiyoning eng qаdimiy qаysi kitоbidа, bоrliq hаrаkаtdаgi dunyo, butun jоnli vа jоnsiz nаrsаlаrning uyg‘unligidаgi mаvjudlik deb ifоdаlаnаdi?",
         "Birinchi аsоs sifаtidа ikkitа substаnsiya оlingаn fаlsаfiy yondаshuv nimа deb аtаlаdi?",
         "Mаteriyaning tаrkibiy dаrаjаlаri to‘g‘ri ko‘rsаtilgаn qаtоrni tоping?",
         "Relyativistik mоdel аsоschisi kim?",
         "Substаnsiya nimа?",
         "Substаnsiyaning ikki turgа fаrqlаnishi qаndаy tа’limоtning kelib chiqishigа аsоs bo‘ldi? ",
         "“Аvestо”dа birlаmchi substаnsiya nimа deb аtаlgаn?",
         "Duаlizmning lug‘аviy mа’nоsi qаysi qаtоrdа to‘g‘ri ko‘rsаtilgаn? ",
         "Lоtinchаdа “nisbiy” degаn mа’nоni bildiruvchi yo‘nаlish nоmini ko‘rsаting?",
         "Mаkоn vа vаqt kоnsepsiyalаrining tаriхdа shаkllаngаn ikki muhim vа bir –biridаn fаrq qilаdigаn yo‘nаlishlаri qаysilаr?",
         "Fаlsаfаdа turli jismlаrning mаkоndа meхаnik siljishi, tаbiiy jаrаyonlаr vа hоdisаlаr hоlаtlаrining hаr qаndаy o‘zgаrishi nimа deyilаdi?",
         "Hаrаkаtning аsоsiy tiplаri qаndаy?",
         "Оrqаgа qаytmаslik vа muаyyan yo‘nаlishgа egаlik хоs bo‘lgаn hаrаkаt tipi nimа deb аtаlаdi?",
         "Bаrkаmоlrоq vа rivоjlаngаnrоq shаkllаrdаn unchа rivоjlаnmаgаn shаkllаrgа, murаkkаbdаn оddiygа qаrаb yuz berаyotgаn bo‘lsа, bu nimа?",
         "«Хаоs» nimа?",
         "Quyidаgi qаysi qаtоrdа hаrаkаt shаkllаri to‘g‘ri ko‘rsаtilgаn?",
         "Аntrоpоsоsiоgenez nimа?",
         "Ibtidоiy оdаmning mehnаt shаkllаri qаysi jаvоbdа to‘g‘ri ko‘rsаtilgаn? ",
         "«Ekоlоgiya» аtаmаsi etimоlоgik jihаtdаn Yunonchа oikos vа logos so‘zlаridаn kelib chiqqаn bo‘lib, oikos-bu.... ",
         "Jаmiyat vа tаbiаtning o‘zаrо аlоqаsidа insоnning оqilоnа fаоliyati eng muhim оmilgа аylаnаdigаn hоlаtgа erishishi qаndаy аtаlаdi?",
         "Ibtidоiy оdаmlаr mehnаt qurоllаrini yasаsh uchun nimаdаn fоydаlаngаnlаr? ",
         "“Tаbiаtgа sаlbiy аntrоpоgen tа’sir dаrаjаsi оrtidа tаbiiy muhit tаnаzzuli оrqаgа qаytаrib bo‘lmаydigаn хususiyat kаsb etаdigаn hоlаt... deyilаdi.” ",
         "«Nооsferа» bu—?",
         "Tаbiаt vа jаmiyat kоevоlyusiyasi deb nimаgа deyilаdi? ",
         "Mikrоdunyo bu –?",
         "Yer tаbiаtining insоn fаоliyati dоirаsigа jаlb qilingаn vа jаmiyat mаvjudligi vа rivоjlаnishining zаruriy оmili hisоblаnаdigаn qismi qаndаy muhit hisоblаnаdi?",
         "Gerаklit qаndаy birinchi аsоslаrni оqil vа оliyjаnоb vа tub аsоs deb hisоblаgаn?",
         "Insоn uni qurshаgаn bоshqа оdаmlаr tоmоnidаn qаndаy idrоk etilishi, tаvsiflаnishi vа bаhоlаnishini аks ettiruvchi ijtimоiy hоdisа bu- …?",
         "Оngsizlik bu-…",
         "Оng vа оng оsti hоdisаlаrni ilk bоr mufаssаl o‘rgаngаn fаylаsuf kim?",
         "In’ikоs-…",
         "Irrаsiоnаlizm so‘zining mа’nоsini tоpin- ",
         "«O‘zingni bilsаng, оlаmni bilаsаn» degаn ibоrа qаysi muаllif qаlаmigа mаnsub?",
         "«Аtribut» degаndа nimаni tushunаsiz?",
         "“Diаlektikа” so‘zining mа’nоsini tоpin-",
         "Sub’ektiv diаlektikа bu - … ",
         "Аlоqа degаndа nimа tushunilаdi?",
         "Qаrаmа-qаrshilik bu - …?",
         "Nаrsа yoki hоdisа qаrаmа-qаrshi tоmоnlаrining bir-birini istisnо etish vа bir-birigа o‘tish munоsаbаtlаri deb e’tirоf etilаdigаn kаtegоriya bu - …?",
         "Tаfоvut bu - …?",
         "Quyidаgi jаvоblаrdаn хоssа kаtegоriyasi tа’rifini аniqlаng?",
         "Miqdоr bu - …?",
         "Predmetning bir-birini istisnо etuvchi vа bir-birini nаzаrdа tutuvchi tоmоnlаr nimа deb аtаlаdi?",
         "«Metаfizikа» so‘zining lug‘аviy mа’nоsi?",
         "Nаrsаning ichki хususiyati, predmetni mаzkur jihаtdаn fаrqlаsh uchun zаrur vа etаrli bo‘lgаn хоssаlаr mаjmui bu–...?",
         "Diаlektikаning tаriхiy shаkllаri qаysi qаtоrdа to‘g‘ri ko‘rsаtilgаn?",
         "Diаlektikа kаtegоriyalаrini tizimgа sоlish vа fоrmаl mаntiqiy fikrlаshning umumiy qоnunlаrini ishlаb chiqishgа urinish kimning ijоdi bilаn bоg‘liq?",
         "Fаn vа fаlsаfа kаtegоriyalаrining fаrqi nimаdа?",
         "Quyidаgilаrdаn qаysi biri nаrsаning bоshqа bo‘linmаydigаn zаrrаsini аnglаtаdi?",
         "Qаysi mulоhаzа to‘g‘ri? ",
         "Tаsоdif  hаqidа qаysi fikr nоto‘g‘ri?",
         "Аmаlgа оshgаn bоrliqni tаvsiflоvchi fаlsаfiy kаtegоriya qаysi?",
         "Strukturа nimа?",
         "Bоrliq hоdisаlаri vа undа hukm suruvchi munоsаbаtlаrning muhim, tipik mаzmunini o‘zidа аks ettirаdigаn keng tushunchа bu - ...",
         "Bоrliqning umumiy, muhim tоmоnlаri, хоssаlаri, аlоqаlаri vа munоsаbаtlаri hаqidа fikrlаsh uchun qo‘llаnilаdigаn o‘tа keng tushunchаlаr mаjmui, bu - ...",
         "Fаlsаfiy kаtegоriyalаr vа fоrmаl mаntiq kаtegоriyalаri o‘rtаsidа fаrqning yuzаgа kelishigа qаysi fаylаsufning ijоdi tаsir qilgаn?",
         "Bilish hаqidаgi tа’limоt bu - ...?",
         "Ilmiy bilish qаysi tushunchа bilаn nоmlаnаdi?",
         "O‘zini qurshаgаn dunyodаgi nаrsаlаr vа хоdisаlаrni sezgilаr оrqаli idrоk etishgа nimа deb аtаlаdi?",
         "Bоrliqni аnglаshning g‘оyalаrdа ifоdаlаsh nimа deyilаdi?",
         "Оptimizm nimа?",
         "Dunyoni bilish mumkinligini rаd etuvchilаr kimlаr?",
         "Bilim bu - ...?",
         "Bilim shаkllаrini аniqlаng?",
         "Sub’ektning bilish fаоliyati qаrаtilgаn nаrsа yoki хоdisа bu ...?",
         "Bilish fаоlligining mаnbаi bu - ...?",
         "O‘z tаfаkkurini bir оb’ektgа qаrаtish insоn e’tibоrini chаlg‘ituvchi bаrchа оmillаrni chetgа chiqаrish yo‘li bilаn idrоk etish bu - ...?",
         "“Ehtiyojlаr bo‘lmаsа buyuk аrtistlаr хаm, buyuk sаrkаrdаlаr хаm, buyuk ministrlаr хаm, buyuk fаylаsuflаr hаm bo‘lmаs edi” degаn fikr kimgа tegishli?",
         "Fаlsаfаdа gnоseоlоgiya nimаni o‘rgаnаdi?",
         "«Men buning nimаligini bilmаymаn, birоq bilishgа umid qilаmаn», deydigаn insоnning psiхоlоgik хususiyati qаndаy bo‘lаdi?",
         "Gnоseоlоgiya bu...?",
         "Ilmiy bilish to‘g‘risidаgi sоhа nimа?",
         "Epistemоlоgiya bu...?",
         "Gnоstisizm bu...?",
         "Аgnоstisizm bu...?",
         "Fаlsаfаdа оlаmni bilib bo‘lmаydi deb tаlqin qiluvchi tа’limоt?",
         "Fаlsаfаdа оlаmni bilish mumkin deb tаlqin qiluvchi tа’limоt?",
         "Rаsiоnаlizm bu...",
         "Persepsiya so‘zining lug‘аviy mа’nоsi nimа?",
         "Хаr хil fаоliyat shаkllаri – jumlаdаn ishlаb chiqаrish fаоliyati, estetik fаоliyat, siyosiy fаоliyat vа hоkаzоlаrning tа’siridа shаkllаnаdigаn turmush bilаn bоg‘liq tushunchаlаr mаjmui аvlоdlаr to‘plаgаn jаmоа kоllektiv tаjribаsi mаhsuli bu…?",
         "Fоrоbiy bilishning qаndаy shаkllаrini ko‘rsаtib o‘tаdi? ",
         "“Sezmаydigаn оdаm hech nаrsаni bilmаydi vа tushunmаydi” degаn fikr qаysi fаylаsufgа tegishli? ",
         "Bilishning qаysi shаkli tаmоyil sifаtlаrini birlаmchi vа ikkilаmchigа meхаnik tаrzdа аjrаtishgа qаrshi yo‘nаlgаn? ",
         "“Uning kuchi tаjribаdа mаvjud оbrаzlаrni nаfаqаt qаytа chаqirаdi, bаlki ulаrni bir-biri bilаn bоg‘lаydi vа shu tаriqа ulаrni umumiy tаsаvvurlаr dаrаjаsigа ko‘tаrаdi.” Bu fikr bilishning qаysi shаkligа tegishli?",
         "Empirik bilish shаkllаrini sаnаb o‘ting?",
         "Empirik bilishning qаysi shаkli tаbiаtning o‘zidа mаvjud nаrsаlаr vа hоdisаlаrni qаyd tаdi? ",
         "Eksperimentgа – to‘g‘ri tа’rif berilgаn jаvоbni ko‘rsаting? ",
         "Ilmiy dаlilning ikki muhim хоssаsi qаysi jаvоbdа to‘g‘ri ko‘rsаtilgаn? ",
         "Ilmiy dаlillаr nаzаriyagа nisbаtаn qаndаy vаzifаlаrni bаjаrаdi? ",
         "Gipоtezаgа to‘g‘ri tа’rif berilgаn qаtоrni belgilаng? ",
         "Mаntiqiy tаfаkkur nimа? ",
         "Tushunchа bu ...?",
         "Bilish jаrаyonini, insоn оngini o‘tmish vа kelаjаk bilаn bоg‘lоvchi, egаllаngаn bilimlаrni sаqlоvchi hоdisа nimа deyilаdi?",
         "Sezgi а’zоlаri оrqаli оlingаn bilim qаndаy bilim hisоblаnаdi?",
         "Sezgi а’zоlаri оrqаli оlingаn bilim bu…? ",
         "«Sezmаydigаn оdаm hech nаrsаni bilmаydi vа tushunmаydi» degаn fikr muаllif kim?",
         "Bilish оb’ektining muhim хоssаlаri vа munоsаbаtlаrini аniqlаsh mаqsаdidа аtаylаb аmаlgа оshirilаdigаn izchil idrоk etish bu…?",
         "Оb’ekt хоssаlаrining rivоjlаnish dаrаjаsini tаvsiflоvchi kаttаlikni аniqlаsh jаrаyoni bu…?",
         "Bilimining tаsdiqlаngаn bоyligigа аylаngаn mоddiy yoki mа’nаviy dunyo hоdisаsi, birоn-bir hоdisа, хоssа yoki munоsаbаtni qаyd etish bu…?",
         "Bоrliqning eng muhim tоmоnlаri, хоssаlаri vа munоsаbаtlаrini аks ettiruvchi umumiy tushunchаlаr bu…?",
         "Qаndаy hаqiqаt to‘g‘ri, birоq nоto‘liq, tахminiy, vаqt vа jоyning mа’lum tаriхiy shаrt-shаrоitlаri bilаn cheklаnаdi? ",
         "Qаndаy hаqiqаt bilish tаrаqqiyoti jаrаyonidа rivоjlаnib, o‘z chegаrаsi bo‘lgаn mutlоq hаqiqаtgа yaqinlаshаdi? ",
         "Hаqiqаtning qаndаy kоnsepsiyasi nаzаriyaning tаjribаdа оlingаn mа’lumоtlаrgа muvоfiq bo‘lishini tаlаb qilаdi? ",
         "Ilmiy tаfаkkurning muhim vоsitаsi nimа? ",
         "Hаqiqаtligi yoki sохtаligi isbоtlаsh yo‘li bilаn аniqlаnаyotgаn qоidа qаndаy bo‘lаdi? ",
         "Nоmа’lumni mа’lumgа, murаkkаbni sоddаgа bоg‘lаsh nimа deb аtаlаdi? ",
         "Hоdisаlаr vа hоlаtlаr аhаmiyatini bevоsitа his etish qаndаy nоmlаnаdi?",
         "Kаnt vа Fiхtening fikrichа, аhlоqiy tаmоyillаrni ro‘yobgа chiqаrish mаnbаi vа insоn аmаliy fаоliyatining negizi nimа? ",
         "O‘z predmeti bilаn mushtаrаk bo‘lmаgаn, ungа mоs kelmаydigаn bilim bu –?",
         "G‘оyaning fоydаliligi, аmаliy sаmаrаdоrligi vа ishgа yarоqliligi, uning u yoki bu mаqsаdgа erishish uchun fоydаliligi mezоni qаndаy nоmlаnаdi? ",
         "Оdаtdа nоto‘g‘riligi аyon bo‘lgаn tаsаvvurlаrni bilа turib hаqiqаt dаrаjаsigа ko‘tаrish sifаtidа tushunish? ",
         "Hаqiqаtning qаndаy shаkligа shundаy tа’rif berilаdi: ...-bilimlаrimizning insоn insоniyatgа bоg‘liq bo‘lmаgаn mаzmuni.?",
         "Predmetni kelаjаkdа to‘ldirilishi yoki ungа аniqlik kiritilishi mumkin bo‘lmаgаn tаrzdа to‘lа, mukаmmаl bilishi bu - ...",
         "Bоrliqni аsоsаn to‘g‘ri аks ettirsа-dа, оbrаz оb’ektgа unchа mоs emаsligi bilаn аjrаlib turаdigаn bilim, bu - ...",
         "Ijоbiy emоtsiyalаrgа nimаlаr kirаdi?",
         "Sаlbiy emоsiyalаr nimаlаr kirаdi?",
         "O`z predmeti bilаn mushtаrаk bo‘lmаgаn, ungа mоs kelmаydigаn bilim bu…?",
         "Yunonchа “prоktikоs” so‘zining mаzmuni qаysi jаvоbdа to‘g‘ri ko‘rsаtilgаn?",
         "ХХ аsrdа аmаliyot nаtijаsidа qаysi fаnlаr pаydо bo‘ldi?",
         "Gusserl fikrichа, аmаliyot o‘zining hаqiqiy mаqsаdlаrigа qаchоn erishаdi?",
         "Аmаliyot mаzmuni vа shаkllаrigа ko‘rа qаndаy turlаrgа bo‘linаdi?",
         "Metоd so‘zining mа’nоsi?",
         "Metоdоlоgiya ikki mаzmungа egа: bo‘lаr qаysilаr?",
         "Metоdning аsоsiy vаzifаsi?",
         "Hаr qаndаy metоd nimа аsоsidа yarаtilаdi?",
         "Metоdikа nimа? ",
         "Fаlsаfа metоdlаri qаysilаr? ",
         "Diаletikа so‘zini fаngа kim kiritgаn? ",
         "Gegel diаletikаni qаndаy shаkllаrini аjrаtgаn?",
         "“Metаfizikа” so‘zining mа’nоsi?",
         "Metаfizikа qаndаy metоd?",
         "Fаlsаfаdа hech qаndаy bilim fаоliyati bilаn bоg‘lаnmаgаn bir-birigа zid dаlillаrgа аsоslаnаdi? ",
         "«Sinergetikа» so‘zining mа’nоsi? ",
         "Ikkilаnish nuqtаlаrining mаjudligini hаmdа rivоjlаnish dаvоmining hаr хilligini nаzаrdа tutаdi-bu nimа? ",
         "Tа’sirlаntirish mа’nоsini аnglаtuvchi tushunch- ..?",
         "Bоshqаruv qаrоrlаrini ishlаb chiqаrishdа qo‘llаnilаdigаn metоd bu..?",
         "Suzаyotgаn оb’ektni аnglаtаdi vа оb’ektlаrning tizimli hususiyatini аks ettiruvchi tushunchа?",
         "Fikr yuritish оrqаli empirik fаktlаrdаn ulаrni tushuntiruvchi gipоtezаgа yuksаlishni nаzаrdа tutuvchi tushunchа bu ...?",
         "“Kаshf etаmаn, tоpаmаn” mа’nоsini аnglаtuvchi so‘z...",
         "Оb’ektiv reаllikning muhim qismini ifоdаlоvchi tushunchа bu…",
         "Ахbоrоtning muhim хususiyatlаrini ko‘rsаting?",
         "Eksteriоrizаsiya bu…",
         "Оlimning fаоliyati jаrаyonidа bilish qаndаy shаkllаrdа fаоllаshаdi?",
         "Оlim fаоliyatining kоmmunikаtiv jihаtini nimа аks ettirаdi?",
         "Ijtimоiy ахbоrоt nimаlаr yordаmidа ro‘yobgа chiqаdi?",
         "Оlimning ilmiy bilish fаоliyati nimаgа qаrаtilgаn?",
         "Diltey tushunishni qаndаy tаvsiflаgаn?",
         "Tushunish bu …….?",
         "Mа’nо bu …….?",
         "Mа’nо nimаdа ifоdаlаnаdi?",
         "Semiоtikа nimаni o‘rgаtаdi?",
         "“Simvоl” so‘zining mа’nоsi qаysi jаvоbdа to‘g‘ri ko‘rsаtilgаn?",
         "Jаmiyatni muhim kichik tizimlаrini ko‘rsаting?",
         "Хo‘jаlik jаbhаsi iqtisоdiy jаbhаdа vujudgа kelаdigаn institut bu...",
         "Jаmiyatni mа’nаviy kichik tizimini vujudgа kelishi nimаlаr bilаn belgilаnаdi?",
         "Kоmmunikаsiya nimа?",
         "Individuаl оng bu...",
         "Ijtimоiy оngning dаrаjаlаrini аniqlаng?",
         "Etnik birliklаrning ilk shаklini аniqlаng?",
         "Dаvlаt bоshqаruv shаkligа ko‘ra- ..",
         "Dаvlаt qurilish shаkligа k̍̒o‘ra- ....",
         "“Hokimiyatga pul bilan erishgan odam undan daromad olishga intiladi” ushbu fikrlar muallifi kim?",
         "Tarixiy ma’lumotlarga ko‘ra,  korrupsiyaga qarshi kurash ilk  bor miloddan avvalgi  XXIV asrda Mesopotamiyaning qaysi shahrida boshlangan? ",
         "Insoniyat tarixida korrupsiyani tugatish yo‘llari va huquqiy asoslari Hindistonda yaratildi. Bundan 2,5 ming yil avval yozilgan qaysi kitobi davlatni boshqarish va xo‘jalik yuritish mavzuiga bag‘ishlangan bo‘lib, o‘sha davrning siyosiy va iqtisodiy qomusi sifatida dunyoga keldi.",
         "“Axloqi muhsiniy” kimni asari?",
         "Yirik korrupsiya deganda nima tushuniladi?",
         "O‘zbekiston korrupsiyaga qarshi kurashda uzoq muddatli ijobiy dinamikani namoyish etuvchi nechta davlat qatoriga kiradi?",
         "BMT ma’lumotlariga ko‘ra, hozir dunyoda haryili 1 trillion AQSh dollari hajmida pora beriladi. Jahon iqtisodiyoti har yili korrupsiya tufayli 2,6 trillion dollar mablag‘dan ayriladi, bujahon yalpi ichki mahsulotining necha foizidir?",
         "O‘zbekiston BMTning Korrupsiyaga qarshi konvensiyasiga qachon qo‘shildi ?",
         "O’zbekiston 2010 yilda Iqtisodiy hamkorlik va rivojlanish tashkilotining Korrupsiyaga qarshi kurashish tarmog‘i qanday harakat dasturiga qo‘shildi?",
         "Mamlakatimizda korrupsiyaga qarshi ayovsiz kurash qachondan boshlandi?",
         "“Korrupsiyaga qarshi kurashish to‘g‘risida”gi qonun loyihasi Oliy Majlis tomonidan qabul qilindi, qonun qachondan boshlab kuchga kirdi.",
         "“Korrupsiyaga qarshi kurashish to‘g‘risida”gi qonun loyihasi necha bob va moddadan iborat?",
         "\"Pora beruvchiga ham, pora oluvchiga ham Allohning la’nati bo‘lsin!\". \"Pora beruvchini ham, pora oluvchini ham, ikkovi orasida yurib porada vositalik qiluvchini ham Alloh la’natlasin!\".Bu qaysi manbadan?",
         "XX asrga kelib qaysi mamlakatlarda korrupsiyani qattiq jilovlashga muvaffaq bo‘lindi?",
         "Korrupsiya “yomon” hodisa, u yaxshi ta’lim-tarbiya ko‘rmaslik va kam maosh oladigan amaldorlarning nokasligi oqibatida paydo bo‘ladi. Bu qanday sabab?",
         "Bunda boshqaruvning kuchsizligi asosiy omil sanaladi. Masalan, kadrlar tayyorlash, hisobga olish va nazorat qilishning samarasizligi, mansabdorlarni yollashning osonligi va ularni osonishdan haydash, ularda uzoq vaqt mansabda turishga ishonchsizlik paydo bo‘lishi kabilar korrupsiyani rag‘batlantiruvchi omillardir. Bu qanaysabab?"
      ],
      "answers": [
         [
            "-fikr erkinligi",
            "-qadriyat erkinligi",
            "-vijdon erkinligi",
            "-burch erkinligi"
         ],
         [
            "-gnoseologik, ijtimoiy, psixologik",
            "-tarixiy, sotsial, ruhiy",
            "-biologik, psixologik, antropologik",
            "-emotsional, garmonal, biologik"
         ],
         [
            "-Islom, buddizm, iudaizm",
            "-xristianlik, zardushtiylik, islom",
            "-Buddizm, xristianlik, islom",
            "-buddizm, xinduizm, sintoizm"
         ],
         [
            "-iudaizm, xinduizm, konfutsiylik, sintoizm",
            "-buddizm, islom, vishnuizm, shivaizm",
            "-xristianlik, daosizm, braxmanizm, islom",
            "-totemizm, fetishizm, lamaizm, jaynizm"
         ],
         [
            "-pravoslavie, baptizm, kalvinizm",
            "-katolitsizm, anglikanlik, lyuteranlik",
            "-protestantizm, metodizm, anabaptizm",
            "-pravoslav, katolitsizm, protestantizm"
         ],
         [
            "-Muboh",
            "-Mandub",
            "-Shariat",
            "-Vojib"
         ],
         [
            "-Movarounnahr musulmonlari diniy boshqarmasi",
            "-Oliy Majlis",
            "-O'zbekiston Vazirlar Mahkamasi",
            "-Mir-Arab madrasasi"
         ],
         [
            "-1998 yil may",
            "-1991 yil may",
            "-2000 yil dekabr",
            "-1994 yil iyun"
         ],
         [
            "-31-moddasida",
            "-51-moddasida",
            "-21-moddasida",
            "-41-moddasida"
         ],
         [
            "-Hadisi Sharif",
            "-Ijmo",
            "-Quroni Karim",
            "-Qiyos"
         ],
         [
            "-Eron",
            "-Saudiya Arabistoni",
            "-Iroq",
            "-Afg‘oniston"
         ],
         [
            "-Qurbonlik, ro‘za, haj, zakot, mavlud",
            "-Imon, namoz, ro`za, zakot va haj",
            "-Mavlud, xatna, ro‘za, zakot va haj",
            "-Kalimai shahodat, xatna, ro‘za, zakot va mavlud"
         ],
         [
            "-Dovud",
            "-Iso",
            "-Muso",
            "-Sulaymon"
         ],
         [
            "-Upanishada",
            "-Tripitaka",
            "-Injil",
            "-Avesto"
         ],
         [
            "-110 sura 6232 oyat",
            "-114 sura 6236 oyat",
            "-113 sura 6336 oyat",
            "-112 sura 6600 oyat"
         ],
         [
            "-ko'pxudolik",
            "-yakkaxudolik",
            "-shamanizm",
            "-butparastlik"
         ],
         [
            "-1996 yil",
            "-1995 yil",
            "-2001 yil",
            "-1998 yil"
         ],
         [
            "-Jaynizm",
            "-Iuddaizm",
            "-Xinduizm",
            "-Sintoizm"
         ],
         [
            "-20 yil",
            "-15yil",
            "-23 yil",
            "-18 yil"
         ],
         [
            "-tumor but, sanam",
            "-ruh, jon",
            "-sehrgarlik, afsun",
            "-urug‘, qarindosh,"
         ],
         [
            "-Axuramazda",
            "-Muso",
            "-Dovud",
            "-Vishnu"
         ],
         [
            "-pravoslavlar o‘tkazadigan marosim",
            "-katolik cherkovi tomonidan gunohlarni avf etish haqidagi guvohnoma",
            "-protestantlar ta’limoti",
            "-katolik cherkov tomonidan chiqarilgan farmon"
         ],
         [
            "-Hindiston",
            "-Xitoy",
            "-Yaponiya",
            "-Eron"
         ],
         [
            "-marifat, haqiqat, tariqat, shariat",
            "-shariat, tariqat, marifat, haqiqat",
            "-haqiqat, tariqat, marifat, shariat",
            "-shariat, haqiqat, marifat, tariqat"
         ],
         [
            "-fiqh",
            "-kosmogoniya",
            "-astrologiya",
            "-dinshunoslik"
         ],
         [
            "-Animizm",
            "- Totemizm",
            "- Fetishizm",
            "-Shomonizm"
         ],
         [
            "-Diniy, falsafiy, mifologik",
            "-Axloq, meditatsiya, donolik",
            "-Donishmandlik, ezgulik",
            "-Ilohiyot, nirvana holatiga erishish"
         ],
         [
            "- Imom al Buxoriy",
            "- Muso at Termiziy",
            "-Sulaymon Sujistoniy",
            "-Al Xajjoj"
         ],
         [
            "-Yajurveda",
            "- Tripitaka",
            "- Veda",
            "-Samoveda"
         ],
         [
            "-Mifologiya va esxatologiya",
            "- Teologiya",
            "-Esxatologiya",
            "- Mifologiya"
         ],
         [
            "-Mitra",
            "-Axriman",
            "-Axuramazda",
            "-Appolon"
         ],
         [
            "-Xalifa Usmon davrida,651 yil",
            "-Xalifa Abu Bakr davrida, 634 yil",
            "-Xalifa Ali davrida, 661 yil",
            "-Xalifa Umar davrida,644 yil"
         ],
         [
            "-Xadicha",
            "-Habiba",
            "-Oysha",
            "-Hafiza"
         ],
         [
            "-Usmon",
            "-Umar",
            "-Ali",
            "-Abu Bakr"
         ],
         [
            "- Axuramazda",
            "-Axrimon",
            "- Osiris",
            "-Axiles"
         ],
         [
            "-Vahdoniyat",
            "-Vahiy",
            "-Vaqf",
            "-Valoyat"
         ],
         [
            "-Islom traditsionalizmi",
            "-Islom fundamentalizmi",
            "-Islom modernizmi",
            "-Islom fanatizmi"
         ],
         [
            "-Nemis faylasufi Nitshe",
            "-Ingliz olimi Byuger",
            "-Fransuz olimi Anketil  Dyuperon",
            "-Boys"
         ],
         [
            "-Jurjoniy",
            "-Najmiddin Kavkabiy",
            "-Jamoliddin al-Afgoniy",
            "-Tabriziy"
         ],
         [
            "-Ma’muriy huquqiy",
            "-Barchasi noto‘g‘ri",
            "-Ijtimoiy ma’rifiy",
            "-Jinoiy, ma’muriy, ijtimoiy huquqiy"
         ],
         [
            "-Arab “sahifalangan” ma’nosini",
            "-Arab “bayon qilish” ma’nosini",
            "-Yunon tilidan “kitob-uram” ma’nosini",
            "-Yunon tilidan “Xushxabar” degan ma’noni"
         ],
         [
            "-Qurbonlik",
            "-Nazr",
            "-Zakot",
            "-Fitr"
         ],
         [
            "-Konstitutsiya va vijdon  erkinligi va diniy tashkilotlar haqidagi qonunda",
            "-Barchasi noto‘g‘ri",
            "-Konstitutsiyada",
            "-Jinoyat huquqi, Jamoat Tashkilotlari haqidagi qonunda va Konsitutsiyada"
         ],
         [
            "-Ma’muriy, Jinoiy",
            "-Jinoiy",
            "-Fuqaroviy, ma’muriy, jinoiy",
            "-Ma’muriy"
         ],
         [
            "-Miro surtish marosimi",
            "-Cho‘qintirish marosimi",
            "-Ruxoniylik unvonini qabul qilish marosimi",
            "-Tavba qilish marosimi"
         ],
         [
            "-Mazdeizm",
            "- Lamaizm",
            "-Animizm",
            "- Jaynizm"
         ],
         [
            "- O‘zbekiston Musulmonlar idorasidan",
            "-IIV va MXXdan",
            "-Adliya vazirligidan",
            "-Diniy Qo‘mitadan"
         ],
         [
            "- Buyuk muxaddis",
            "- Kalom falsafasining buyuk namoyondasi",
            "-Islom iloxietchisi",
            "-Buyuk mutasavvuf"
         ],
         [
            "- Politeizm",
            "-Fideizm",
            "-Teologiya",
            "- Monoteizm"
         ],
         [
            "-Diniy mutaasoiblik",
            "-Yakkaxudolik",
            "-Diniy talimot",
            "-Ko‘pxudolik"
         ],
         [
            "-25 yoshda",
            "-40 yoshda",
            "-15 yoshda",
            "-30 yoshda"
         ],
         [
            "-Cherkov",
            "-Butxona",
            "-Ibodatxona",
            "-Sinagoga"
         ],
         [
            "-Chor Bakr",
            "-Chor Minor",
            "-Magokki Attori",
            "-Chashman Ayub"
         ],
         [
            "-G‘ijduvon",
            "- Shofirkon",
            "-Romitan",
            "-Kogon"
         ],
         [
            "- Panteizm talimotiga",
            "- Deizm talimotiga",
            "- Kalom talimotiga",
            "- Tasavvuf talimotiga"
         ],
         [
            "- Dovud",
            "- Yusuf",
            "- Ibroxim",
            "- Nux"
         ],
         [
            "- Abu Bakr, Abu Laxab, Abu Jazl",
            "- Ali, Oysha, Xabiba",
            "- Xadicha, Ali, Xoris",
            "- Umar, Usmon, Xamza"
         ],
         [
            "- Utrorda",
            "- Xavosda",
            "- Xartangda",
            "- Nuratoda"
         ],
         [
            "-Qadimgi Rimda, er avvalgi 5 asrda",
            "-Qadimgi Bobilda, er avvalgi 1 minginchi yilda",
            "- Qadimgi Falastinda, er avvalgi 1 minginchi yilda",
            "- Qadimgi Yunonistonda, er avvalgi 7 asrda"
         ],
         [
            "-Tavrot",
            "-Talmud",
            "-Zabur",
            "-Psaltir"
         ],
         [
            "-Xudoga va dinga ishonishni inkor etuvchi ilmiy qarashlar sistemasi",
            "-xudoni inkor etish",
            "-xudoga ishonmaslik",
            "-dinni ta`qib va tazyiq qilish"
         ],
         [
            "- Butxona",
            "- Ibodatxona",
            "- Sinagona",
            "- Cherkov"
         ],
         [
            "- Vahdoniyat",
            "- Baytul mol",
            "- Mulki muslim",
            "- Vaqf"
         ],
         [
            "- Jihod",
            "- Mustalik",
            "- Gatafon",
            "- Uhud"
         ],
         [
            "- Do‘zax",
            "-Oxirat",
            "-Mahshar",
            "-Jannat"
         ],
         [
            "-Mahshar",
            "-Arti Alo",
            "-Meroj",
            "-Lomakon"
         ],
         [
            "- Muazzin",
            "- Mudarris",
            "- Mujtahid",
            "- Murid"
         ],
         [
            "-Mutaassiblik",
            "-Mushrikiylik",
            "-Mutazilliylik",
            "-Mutakallimlik"
         ],
         [
            "-Oyat",
            "-Band",
            "-Pora",
            "-Rukn"
         ],
         [
            "- Xo'ja Ahror Valiy",
            "- Xo'ja Anjir Fag`naviy",
            "- Xo'ja Ali Rometaniy",
            "- Xo'ja Orif Revgariy"
         ],
         [
            "-Jaloliddin Rumiy",
            "-Sayyid Mir Kulol",
            "-Yusuf Hamadoniy",
            "-Boboyi Samosiy"
         ],
         [
            "- ontologiya",
            "- etnografiya",
            "- antropologiya",
            "- astrologiya"
         ],
         [
            "- Iso Masih",
            "- Ibrohim",
            "- Muso",
            "- Ismoil"
         ],
         [
            "- Yahudiylik dini",
            "- Islom dini",
            "- Zardushtiylik dini",
            "-Braxmanizm dini"
         ],
         [
            "-Braxmanizm",
            "- Buddizm",
            "-Sintoizm",
            "- Baptizm"
         ],
         [
            "- Xo‘ja Bahouddin Naqshband",
            "- Ahmad Yassaviy",
            "- Abduxoliq G‘ijduvoniy",
            "- Xo‘ja Ahror Valiy"
         ],
         [
            "- Deist",
            "- Realist",
            "- Panteist",
            "- Ateist"
         ],
         [
            "- Tayanmoq",
            "- Faollashmoq",
            "- Beparvo bo‘lmoq",
            "- Chidamoq"
         ],
         [
            "- Sulaymon Sijistoniy",
            "- Imom Buxoriy",
            "- Muslim ibn al-Xajjoj",
            "- Iso at-Termiziy"
         ],
         [
            "-Farz",
            "-Ijmo",
            "-Muboh",
            "-Ixlos"
         ],
         [
            "-Yahudiylik",
            "- Magiya",
            "-Konfutsiylik",
            "-Shomoniylik"
         ],
         [
            "- Lamaizm",
            "- Braxmanizm",
            "-Sintoizm",
            "-Daosizm"
         ],
         [
            "- Buddaning xushmuomalaligi, yumshoqligi",
            "- Buddaning mohir so‘z ustasi bo‘lganligi",
            "- Tangri tomonidan Buddaga yordam berilganligi",
            "- Budda shogirdlarining ko‘p bo‘lishligi"
         ],
         [
            "-Konfutsizm",
            "-Sintoizm",
            "-Buddizm",
            "-Hinduizm"
         ],
         [
            "-Kohin",
            "-Shomon",
            "-Payg‘ambar",
            "-Sehrgar"
         ],
         [
            "-Mistik",
            "-Monist",
            "-Politeistik",
            "-Monoteistik"
         ],
         [
            "-Tavrot, injil, zabur, qur’on",
            "-Zabur, tavrot, injil, qur’on",
            "-Tavrot, zabur, injil, qur’on",
            "-Tavrot, zabur, qur’on, injil"
         ],
         [
            "-Jabroil, azroil, isrofil, munkar-nakir",
            "-Jabroil, isrofil, munkar-nakir, mikoil",
            "-Jabroil, isroil, azroil, mikoil",
            "-Jabroil, mikoil, isrofil, azroil."
         ],
         [
            "-Iymon, namoz, ro‘za, zakot, haj",
            "-Iymon, islom, namoz, ro‘za, zakot, haj",
            "-Iymon, namoz, zakot, ro‘za, haj",
            "-Iymon, ro‘za, zakot, namoz, haj"
         ],
         [
            "-Mahdiy",
            "-Rasul",
            "-Nabiy",
            "-Payg‘ambar"
         ],
         [
            "-Makkiy va madiniy",
            "-Aqliy va naqliy",
            "-Bayoniy va tafsiliy",
            "-Hijriy va naqliy"
         ],
         [
            "- Sunnat - Payg‘ambarimiz (s.a.) aytgan so‘zlari, hadis esa qilgan amallari",
            "- Hadis - aytgan so‘zlari, sunnat esa amallarga nisbatan munosabatlari",
            "- Hadis aytgan so‘zlari, sunnat esa tutgan yo‘llari",
            "- Yuqoridagilarning barchasi to‘g‘ri"
         ],
         [
            "Xristian cherkovidagi muqaddas buyumlardan biri",
            "Xristianlikdagi diniy marosimlardan biri",
            "Xristianlikdagi muqaddas manba’lardan biri",
            "Xristianlikdagi avliyolar  portreti tushirilgan rasmlar"
         ],
         [
            "Koreya",
            "Indoneziya",
            "Yaponiya",
            "Xitoy"
         ],
         [
            "-Tangrixon",
            "- Shoman",
            "- Totem",
            "- Imay"
         ],
         [
            "-muqaddas xudo",
            "-muqaddas osmon",
            "-muqaddas olov",
            "-muqaddas yer"
         ],
         [
            "- VII asrda Samarqandda",
            "- VIII asrda Buxoroda",
            "-X asrda Marvda",
            "- IX asrda Toshkentda"
         ],
         [
            "- “yuqorilik”, “balandlik”",
            "- “belgi”, “hujjat”",
            "- “surta”, “mo‘jiza”",
            "- “jumlalar”, “alomat”"
         ],
         [
            "- «al-Qoida»",
            "- «Jihod ittihodi»",
            "- «Tolibon»",
            "- «Lashkari toiba»"
         ],
         [
            "- Makkadan Madinaga hijrat qilgan musulmonlar",
            "- Madina musulmonlari",
            "- Sahobalar",
            "-Makka musulmonlari"
         ],
         [
            "-Mushaf",
            "- Mo‘jiza",
            "- Sunnat",
            "- Suhuf"
         ],
         [
            "- ezgulikning yovuzlik ustidan g‘alabasi",
            "- hosil bayrami",
            "- bahorning kirib kelishi",
            "- kun va tunning tengligi"
         ],
         [
            "- birlashtiruvchilik",
            "- diniy jamoa",
            "- bag‘rikenglik",
            "- bahamjihatlik"
         ],
         [
            "- birinchi",
            "- to‘rtinchi",
            "- beshinchi",
            "- uchinchi"
         ],
         [
            "Suqrot.",
            "Demokrit.",
            "Arastu.",
            "Aflotun."
         ],
         [
            "Arablar.",
            "Hindlar.",
            "Yunonlar.",
            "Forslar."
         ],
         [
            "\"Axloq\" so‘zi hind tilidan olingan bo‘lib, xulq demakdir.",
            "\"Axloq\" so‘zi yunoncha odob demakdir.",
            "\"Axloq\" so‘zi arabchadan olingan bo‘lib \"xulq\" so‘zining ko‘plik shaklidir.",
            "\"Axloq\" so‘zi hatti-harakat demakdir."
         ],
         [
            "Axloq",
            "Xulq",
            "Etika",
            "Odob"
         ],
         [
            "Odob",
            "Etika",
            "Axloq",
            "Xulq"
         ],
         [
            "Etika.",
            "Axloq,",
            "Xulq.",
            "Odob"
         ],
         [
            "Nikoh va axloq asosida turmush qurish",
            "Ibtidoiy davrdagi guruhlar orasidagi jinsiy munosabatlar",
            "Bir er va bir xotin asosidagi ibtidoiy oila",
            "Bir er va bir xotin asosidagi oila"
         ],
         [
            "Intizom ruhida tarbiyalaydi",
            "Vatanparvarlik ruhida tarbiyalaydi",
            "Yosh avlodni shu jamiyatga zarur bo‘lgan ruhda tarbiyalaydi",
            "Yoshlarni ma’naviy barkamol birlashish ruhida tarbiyalaydi"
         ],
         [
            "Mahalla",
            "Oila",
            "Partiyalar",
            "Xalq"
         ],
         [
            "Jamiyat",
            "Maktab",
            "Oila",
            "Davlat"
         ],
         [
            "Millatni",
            "Jamiyatni",
            "Xalqni",
            "Davlatni"
         ],
         [
            "Yaqin tanish, turmush tarzini mushtarakligi",
            "Kishilar o‘rtasidagi hissiy-ruhiy munosabat",
            "Birga o‘qigan, ishlagan moddiy manfaatlarning birligi",
            "Maqsad umumiyligi, g‘oyaviy jihatdan yaqin, hamfikr, hamg‘oya"
         ],
         [
            "halollik, rostgo‘ylik, insoflilik, shirinsuxanlik",
            "burch, vijdon, nomus",
            "insonparvarlik, erkparvarlik, vatanparvarlik, millatparvarlik, fidoyilik, ziyolilik, mehnatsevarlik, tinchlikparvarlik, halollik, rostgo‘ylik, insoflilik, shirinsuxanlik, burch, vijdon, nomus",
            "insonparvarlik, erkparvarlik, vatanparvarlik, millatparvarlik, fidoyilik, ziyolilik, mehnatsevarlik, tinchlikparvarlik"
         ],
         [
            "burch, vijdon, nomus insonparvarlik, erkparvarlik, vatanparvarlik, millatparvarlik",
            "insonparvarlik, erkparvarlik, vatanparvarlik, millatparvarlik",
            "halollik, rostgo‘ylik, insodlilik, xushfe’llilik, shirinsuxanlik, kamtarinlik, bosiqlik",
            "burch, vijdon, nomus"
         ],
         [
            "insonparvarlik, tinchlikparvarlik, mehnatsevarlik",
            "muhabbat, nafrat, rashk, ezgulik va yovuzlik, yomonlik va adolat, burch, vijdon nomus",
            "xushfe’llilik, kamtarinlik, bosiqlik",
            "insonparvarlik, tinchlikparvarlik, mehnatsevarlik, xushfe’llilik, kamtarinlik, bosiqlik"
         ],
         [
            "Vatanparvarlik-intizomli bo‘lish",
            "Vatanparvarlik-fidoiylikdir",
            "Vatanparvarlik-o‘z yurtini sevish",
            "Vatanparvarlik-ona zaminga, o‘z millatiga, iymoniga bo‘lgan sodiqlik"
         ],
         [
            "O‘zbekiston Respublikasida ijtimoiy hayot, siyosiy institutlar, mafkuralar va fikrlarning xilma-xilligi asosida rivojlanadi",
            "Vijdon erkinligi haqida so‘z boradi",
            "hech qaysi mafkura davlat mafkurasi sifatida o‘rnatilishi mumkin emas",
            "Siyosiy partiyalar faoliyati haqida"
         ],
         [
            "Lao-Szi, Pifogor, Epikur, Demokrit",
            "Pifogor, Demokrit, Gippiy, Konfutsiy",
            "Suqrot, Arastu, Aflotun, Epikur",
            "Lutsiy-Aniy Seneka, Epiktet, Konfutsiy, Aflotun"
         ],
         [
            "Ishonch-shaxsning axloqiy kamolot cho`qqisi bo‘lib, inson mohiyatini belgilashda muhim me’yordir",
            "Ishonch-turg`un xarakter kasb etib, shaxsning axloqiy«zanglamasligiga» kafolat beradi",
            "Ishonch xulq-normasining to‘g‘ri va adolatli ekanligiga amin bo‘lish demakdir",
            "Kishida hayot sharoitlari va tarbiya ko‘rganlik natijasida qat’iy bilim va axloqiy tartib qoidalarga asoslangan munosabat"
         ],
         [
            "Xulq hatti-harakat demakdir",
            "Xulq odob axloq formasi",
            "Xulq-inson ongi va irodasi bilan bog‘liq",
            "Xulq rostgo`ylik, vijdonli bo‘lmoq"
         ],
         [
            "Xulqning birligi hatti harakat",
            "Hatti harakat faoliyat birligi",
            "Ongli yunaltirilgan va yakunlangan harakat",
            "Hatti harakat me’yor: o‘lchov belgisi"
         ],
         [
            "Odob axloqni izohlaydigan munosabat, odob madaniyatini tashkil qiladi",
            "Insonning harakati, xulq-atvori, yurish-turishi, nazorat qilishi va insonlar o‘rtasidagi muomala munosabatlari",
            "Inson uz harakatlarini me’yorida anglashdir",
            "Odob kattalarga nisbatan hurmat, izzat qila bilishdir"
         ],
         [
            "O’z-o‘zini anglash va onglilik darajasi kabi funksiyalarni bajaradi",
            "To‘g‘rilik, poklik va burch hissiyoti",
            "Baho, buyruk va emotsionallik",
            "Bilish, tarbiya va onglilik"
         ],
         [
            "etiket",
            "Xulq",
            "Axloq",
            "Mehnat"
         ],
         [
            "Boshqaruv, his-tuyg‘ularni jilovlash, tarbiyalash, ma’rifatchilik",
            "Gnoseologik, ta’lim-tarbiya, jamiyatda amal qiladigan axloq normalarining zarurligini o‘rgatadi",
            "Tartibga solish (boshqaruv), stimul, baholash, bilish, tarbiyalash",
            "O‘z–o‘zini anglashni, o‘rganish, ta’lim va tarbiyani bir-biriga bog‘lash vazifasidir"
         ],
         [
            "Vijdon erkinligi diniy e’tiqodga beparvo bo‘lishdir. Vijdon bu e’tiqod oldiga u hech qanday mas’uliyatni his etmaydi",
            "U kishining jamiyat talablariga muvofiq harakat qilish zarurligini anglab olishidir",
            "Vijdon erkinligi vijdonni azobga qo‘ymaslikdir. Avvalo u erkin bo‘lishi uchun insonning barcha hatti-harakatlari tamoman ixtiyoriy cheklangan bo‘lmog‘i lozim",
            "Vijdon erkinligi vijdonga xilof ish tutmay axloqiy hayot kechirishdir"
         ],
         [
            "Kuzatuvchan, qattiqqo‘l, or-nomusli, adolatli, bilimli, ma’naviyati boy, vijdonli",
            "Adolatli, prinsipial, kamtar kiyinish, yurish turishda oddiy bilimli, yoshlarga maslahat bera oladigan, obro`li",
            "Talabchanlik, bilim bera olish, nasihat qilish, yosh avlodga mehr-muruvvatli bo‘lish, o‘z malakasini doimo oshirib borish, o‘z tuyg‘ularini tizginlay olish",
            "O‘rganish-nasihat qilish istagida bo‘lish, fikrlarni ravon ifodalash, o‘z xulqini doimo qattiq nazorat etish"
         ],
         [
            "Rahbar qattiqqo‘l, talabchan adolatli, xizmat qiladigan, bilim va saviyasi bilan boshqalardan ustun bo‘lmogi lozim",
            "Ishbilarmon, kamtar, kollektiv yutuqlarini o‘ziniki, qilib ko‘rsatmaydigan, tanqidni ko`taradigan va undan ijobiy xulosa chiqara oladigan, qo‘l ostidagilarni aldash, qo‘rqitmasligi kerak",
            "Xushmuolali, o‘z odamlarining shaxsiy sifatlarini, xarakterini, ehtiyojlarini bilishi, kerak, shaxsiyatparast bo‘lmasligi, adolatli bo‘lmog‘i kerak",
            "Shaxsga sig‘inishga moslashgan soxta va yasama obruni rad etish, xushomadlarga berilmaslik manfaatparast bo‘lmasligi kerak"
         ],
         [
            "Axloqiy muhit davrini yaratish",
            "Inson tarbiyasini nazariy asoslash",
            "Axloqiy muhit davrini yaratish axloqqa zamonaviy yondashishni, inson tarbiyasini nazariy asoslash",
            "Axloqqa zamonaviy yondashishni"
         ],
         [
            "Gilgamish eposi",
            "Pratotep o`gitlari",
            "Konfutsiy hikmatlari",
            "Abadiy ezgulik asari"
         ],
         [
            "axloqiy ong, axloqiy his-tuyg‘u",
            "axloqiy ong, axloqiy qarashlar, axloqiy his-tuyg‘u",
            "axloqiy ong, axloqiy his-tuyg‘u, axloqiy munosabatlar",
            "axloqiy burch, axloqiy madaniyat"
         ],
         [
            "Shaxs axloqiy taraqqiyotning belgisi, axloq-odob bilan ish tutish, yurish-turish odobi",
            "Shaxs axloqiy taraqqiyotning belgisi",
            "yurish-turish odobi",
            "axloq-odob bilan ish tutish"
         ],
         [
            "chunki u-axloqiy tafakkur taraqqiyotini tadqiq etadi",
            "chunki u-axloqiy tafakkur taraqqiyotini tadqiq etadi, amaliyotda insonni ezgulik orqali haqiqatni olib borishga xizmat qiladi, insonni yuksak ma’naviyatga yetaklaydi",
            "chunki u-amaliyotda insonni ezgulik orqali haqiqatni olib borishga xizmat qiladi",
            "chunki u-insonni yuksak ma’naviyatga yetaklaydi"
         ],
         [
            "aql, sezgi, iroda",
            "aql, sezgi, ong",
            "iroda, aql, ong",
            "aql, sezgi, bilish"
         ],
         [
            "Oila hamda jamoa mahalla kuy miqyosida ahamiyatli bo‘lgan ammo jamiyat va insoniyat hayotiga sezilarli ta’sir ko‘rsatmaydigan yoqimli, ijobiy hatti-harakatlar majmui",
            "Barcha hatti-harakatlar majmui",
            "Milliy urf-odatlarga asoslangan chiroyli hatti-harakatlar majmui",
            "Jamiyat, zamon, insoniyat tarixi uchun namuna bo‘la oladigan ijobiy hatti harakatlar"
         ],
         [
            "Odob",
            "Etika",
            "Axloq",
            "Xulq"
         ],
         [
            "1 ga: falsafiy",
            "3 ga: nazariy, amaliy va ijodiy",
            "2 ga: ijtimoiy-falsafiy",
            "4 ga: falsafiy, amaliy, nazariy va ijtimoiy"
         ],
         [
            "Gumanizm-insonga xos mehribonlik",
            "Gumanizm insonparvarlik demakdir",
            "Gumanizm lotincha “insoniy” “insonga xos” degan ma’noni anglatib, insonga bo‘lgan mehribonlik, g‘amxo‘rlik, inson ozodligini har tomonlama ravojlanishni aks ettiruvchi oliyjanob tuyg‘u",
            "Gumanizm inson ozodligini aks ettiruvchi tuyg‘u"
         ],
         [
            "axloqiy namunalar, tuyg‘ular, g‘oyalarni shakllantirgan",
            "axloqiy dunyoqarashni, adolatni shakllantirish",
            "axloqiy talablar, nazariyalar, tasavvurlar g‘oyalarni shakllantirgan",
            "axloqiy fikrlar, hissiyotlar, qarashlarni shakllantirgan"
         ],
         [
            "Har tomonlama yuksak axloqli qilib tarbiyalash",
            "Kelajak avlod uchun dasturamal bo‘lib xizmat qiladi",
            "Siyosiy jihatdan, yetuk inson qilib tarbiyalaydi",
            "Komil insonni tarbiyalash va kelajak uchun har tomonlama yetuk shaxsni shakllantirish"
         ],
         [
            "ha uning uz qonun-qoidalari mavjud",
            "yo‘q ular bir-biriga o`xshash",
            "ha u qonunlashtirilgan axloqdir",
            "ha faqat bir-biriga yondashadi"
         ],
         [
            "Lafz-to‘g‘riso‘zlik",
            "Lafz-mexr-muruvvatlilik",
            "Lafz-insoniylik",
            "Lafz-berilgan va’da, ahd"
         ],
         [
            "Salomlashish sizga salomatlik, tinchlik tilashdir",
            "Salomlashish eson, omon bo‘lmoq, bezarar yurmoq ma’nosini anglatadi",
            "Salomlashish insoniy burch",
            "Salomlashish ahvol so‘ramoq"
         ],
         [
            "Yomon yullardan kaytarishga",
            "Kishilarni to‘g‘ri yo‘lga chorlash",
            "Axloq-oxirat ne’matlariga yetkazuvchi omil",
            "Muruvvatli bo‘lishga"
         ],
         [
            "Tavoze, muruvvat",
            "Mehribonlik",
            "Sadoqat, mehnatsevarlik, omonatga vafo",
            "Kamtarlik"
         ],
         [
            "Arastu",
            "Lessing",
            "Baumgarten",
            "Aflotun"
         ],
         [
            "San’at estetikaning shunday turidirki, narsa va hodisalarning zoxiriy tomonlari o‘zgartirib o‘rganadi",
            "San’at estetika (estetika) ning shunday turidirki, maqsadi insonning ijtimoiy siyosiy va aqliy qobiliyatini taraqqiy ettirishdir",
            "San’at voqelikni idrok etishning shunday turidirki, uning maqsadi, go‘zallik qonuniga muvofiq borliqni va insonning o‘zini ijodiy ravishda o‘zgartirish jarayonida, uning qobiliyatini rivojlantirishni shakllantirishdir",
            "San’at voqelikdagi hodisalarni badiiy timsollarda aks ettirishning bir ko‘rinishidir"
         ],
         [
            "insonning badiiy ijodiyoti",
            "insonning musiqiy ijodiyoti",
            "insonning ijtimoiy mehnat ijodiyoti",
            "insonning ma’naviy ijodiyoti"
         ],
         [
            "Go‘zallik-bu tabiat va jamiyat hamda insondagi chiroyli tasvir ifodalaydigan tushunchadir",
            "San’atshunoslik eng muhim va asosiy tushuncha va atamalaridan hisoblanadi",
            "Go‘zallik estetikaning shunday umumiy tushunchasi hisoblanadiki, u har qanday hodisani uning komilligi va oliy darajadagi estetik qiymatini ifodalaydi",
            "Go‘zallik shunday tushunchadirki, u buyum va hodisalarning nafosatini ifodalaydi"
         ],
         [
            "Yunoncha “iroda-idrok”",
            "Yunoncha “go‘zallik”, “san’at”",
            "Yunoncha “iroda-ixtiyor”",
            "Yunoncha “xis qilish”, “sezish”"
         ],
         [
            "go‘zallik didi badiiy asarning g‘oyasi, mazmuni va bayon etish tarzida baho berish, o‘z munosabatini izhor etishdir",
            "go‘zallik didi insonning hissiy qobiliyati hisoblanadiki uning vositasida san’atning turli asarlariga baho beriladi",
            "go‘zallik didi har bir individga ta’luqli bo‘lgan did",
            "go‘zallik didi asarni o‘qiydiganlarni iste’dod va qobiliyatlaridir"
         ],
         [
            "Barcha xalqlar uchun yaratilgan san’at va adabiyot asarlaridir",
            "tub mohiyatiga milliy madaniyatning kushandasi bo‘lib, u madaniy xilma-xillikni xushlamaydi, uning asl maqsadi bu olamni yakrang ko‘rishdir",
            "hamma uchun tushunarli bo‘lgan san’at",
            "ommaviy madaniyat oddiy va etarli darajada madaniy savodli bo‘lmagan odamlarga mo‘ljallangan san’at va adabiyot asarlaridir"
         ],
         [
            "tana ruh",
            "himoya",
            "moslashuv",
            "inson ruhini poklantirish"
         ],
         [
            "estetik baho, estetik his-tuyg‘u",
            "estetik ideal va orzu, estetik his-tuyg‘u, estetik did, estetik nazariyalar, estetik baho",
            "estetik did, estetik nazariyalar, estetik baho",
            "estetik his-tuyg‘u, estetik nazariyalar"
         ],
         [
            "estetik did – bu fikr-mulohaza, xulq-atvor, hatti-harakat, ijodkorlik",
            "estetik did – bu eshitish, ko‘rish, hid bilish, ta’m bilish, sezish",
            "estetik did – bu baho, munosabat, qoniqish, lazzatlanish",
            "estetik did – nafosatni idrok etish qobiliyati"
         ],
         [
            "asosan tabiat va jamiyat go‘zalligi nazarda tutiladi",
            "tashqi go‘zallik haqidagi fikr yuritadilar",
            "inson ichki va tashqi, tabiat va jamiyat go‘zalligi",
            "kishilar o‘rtasidagi munosabatlardagi go‘zalligi tushiniladi"
         ],
         [
            "obektga nisbatan forig‘lanish holati",
            "inson bilish munosabatining tajribaviy asosi",
            "nafosatga tashnalik",
            "qadriyatlarga nisbatan bildiriladigan munosabat"
         ],
         [
            "jiddiy, vazmin, osuda hayot tarzini",
            "ma’naviy, jismoniy, siyosiy holatlarni",
            "kulgili, hajviy, satirik hodisalarni",
            "og‘ir, baxtsiz, ko‘p hollarda o‘lim bilan tugaydigan hodisalar"
         ],
         [
            "me’morchilik va badiy suratkashlik",
            "xoreografiya, sirk",
            "estrada va sirk",
            "teatr va kino"
         ],
         [
            "saralangan toifa vakillari uchun yaratilgan san`at asari",
            "omma uchun mo‘ljallangan san`at",
            "san`atning eng yuqori ko‘rinishi",
            "san`at asarlaridagi maxsus sujetlar"
         ],
         [
            "sahna asari",
            "ijro etishga mo‘ljallangan",
            "Harakat",
            "she`riy sahna asari"
         ],
         [
            "yer yuzi manzarasi",
            "binolar joylashuvi",
            "tabiat ko‘rinishi",
            "inson, tabiiy zahiralar va hayvonlarning uyg`unlikda hayot kechirishi"
         ],
         [
            "Skiflar",
            "Yunonlar",
            "Rimliklar",
            "o‘siyoliklar"
         ],
         [
            "insoning voqea va hodisalarga o‘ziga xos munosabati",
            "olamni estetik anglash, dunyoga inson munosabatining subyektiv tomoni;",
            "voqea-hodisalarning estetik sifatlarini idrok etish va baholash",
            "kishilarda estetik his, estetik ong va munosabatni shakllantirishga qaratilgan tarbiyaning alohida shakli"
         ],
         [
            "1985 yilda B.Lou",
            "1950 yilda M.Gandi",
            "1983 yilda T.Levittin",
            "1983 yilda B.Bandi"
         ],
         [
            "Televideniye",
            "atrof-muhit",
            "pandnoma asarlar",
            "oila tarbiyasi"
         ],
         [
            "yunon xalqlari",
            "somir xalqlari",
            "Rimliklar",
            "mirliklar"
         ],
         [
            "go‘zallik",
            "san`at",
            "ulug`vorlik",
            "Nafosat"
         ],
         [
            "estetik munosabat",
            "estetik did",
            "estetik qiziqish",
            "estetik zavq"
         ],
         [
            "go‘zallik va xunuklik, ulug`vorlik va tubanlik, mo‘jizaviylik va xayoliylik",
            "go‘zallik, tubanlik, xunuklik, san`at",
            "go‘zallik, ulug`vorlik, fojiaviylik, kulgililik, qiziqarlilik, mo‘jizaviylik",
            "zerikarlilik, xayoliylik, go‘zallik, kulgililik"
         ],
         [
            "fransuzcha",
            "inglizcha",
            "yunoncha",
            "ruscha"
         ],
         [
            "tushunchaning bir tomoni.",
            "tushunchadagi narsalar miqdori to’g’risidagi bilish.",
            "tushunchada ifodalangan narsa va hodisalarning muhim belgi va xususiyatlarining yig’indisi.",
            "tushunchada ifodalangan narsa va hodisalarning muhim belgilari yig’indisi."
         ],
         [
            "tushunchada ifodalangan muhim belgilar yig’indisi.",
            "tushuncha vositasida ifodalangan narsalar soni.",
            "tushunchada ifodalangan nomuhim belgilar yig’indisi.",
            "tushunchada ifodalangan narsa va hodisalar miqdorining yig’indisi."
         ],
         [
            "bunda hajmi tor tushunchadan hajmi keng tushunchaga tomon fikran harakat qilinadi.",
            "bunda butundan qismga tomon fikran harakat qilinadi.",
            "bunda hajmi keng tushunchadan hajmi tor tushunchaga tomon fikran harakat qilinadi.",
            "bunda qismdan butunga tomon fikran harakat qilinadi."
         ],
         [
            "tushunchani chegaralash tushunchaning hajmini kengaytirish yo’li bilan uning mazmunini boyitishdir.",
            "tushunchani chegaralash tushunchani mazmuni jihatidan sayozlashtirish.",
            "tushunchani kichik kichik guruhlarga ajratish.",
            "tushunchani chegaralash tushunchani hajm jihatidan kichraytirish yo’li bilan uning mazmunini boyitish."
         ],
         [
            "tushunchaning mohiyatini ochishdan.",
            "tushunchaning hajmini kengaytirish yo’li bilan uni mazmunan butunlashtirishdan, mavhumlashtirishdan.",
            "tushunchani guruhlarga ajratish yo’li bilan uning tarkibini aniqlashdan.",
            "hajmi tor tushunchadan hajmi keng tushunchaga tomon fikran harakat qilishdan."
         ],
         [
            "tushunchaning mohiyatini ochishga qaratilgan amal.",
            "tushunchaning mazmunini ochishga xizmat qiladigan amal.",
            "tur tushunchalar mansub bo’lgan jins tushunchani topadigan amal.",
            "tushunchaning turlarini sanab o’tish yo’li bilan uning hajmini aniqlashga xizmat qiladigan amal."
         ],
         [
            "tasnif narsa va hodisalarni biror bir umumiy belgiga asosan izchil tarzda sinflarga ajratib borishdir.",
            "tushunchaning mazmunini kengaytirish yo’li bilan uning hajmini toraytirishdir.",
            "tushunchaning hajmini kengaytirish yo’li bilan uning mazmunini toraytirishdir.",
            "tushunchaning mohiyatini ochishdir."
         ],
         [
            "hukm.",
            "sillogizm.",
            "tushuncha.",
            "xulosa chiqarish."
         ],
         [
            "asoslarning soniga ko’ra, chinlik darajasi bo’yicha.",
            "fikrlarning kupligi bo’yicha, chinlik darajasi bo’yicha.",
            "chinlik darajasiga ko’ra, asoslarning soniga ko’ra, fikrning harakat yo’nalishiga ko’ra.",
            "chinlik darajasiga ko’ra, sillogizm bo’yicha."
         ],
         [
            "induktiv va zaruriy xulosa chiqarish.",
            "analogiya bilan deduktiv xulosa chiqarish.",
            "zaruriy xulosa chiqarish va ehtimoliy xulosa chiqarish.",
            "induktiv xulosa chiqarish va analogiya."
         ],
         [
            "bevosita va bilvosita xulosa chiqarish.",
            "induktiv va ehtimoliy xulosa chiqarish.",
            "analogiya va deduktiv xulosa chiqarish.",
            "bilvosita va zaruriy xulosa chiqarish."
         ],
         [
            "asoslarning soniga ko’ra, bilvosita xulosa chiqarish.",
            "deduktiv va induktiv, bevosita va bilvosita xulosa chiqarish.",
            "sillogizm va deduktiv xulosa chiqarish.",
            "deduktiv va induktiv, analogiya bo’yicha xulosa chiqarish."
         ],
         [
            "fikrning harakat yo’nalishiga ko’ra.",
            "ehtimoliy va bevosita xulosa chiqarish.",
            "chinlik darajasiga ko’ra.",
            "asoslarning soniga ko’ra."
         ],
         [
            "zaruriy bilimdan ehtimoliy bilimga o’tish.",
            "xususiy bilimdan umumiy bilimga o’tish.",
            "umumiy bilimdan juz’iy bilimga o’tish.",
            "bevosita va bilvosita xulosa chiqarishdir."
         ],
         [
            "ko’p mulohazaga asoslangan holda xulosa chiqarish.",
            "birgina mulohazaga asoslangan holda yangi bilim hosil qilish.",
            "ayrim mulohazalarga asoslanish.",
            "analogiya bo’yicha xulosa chiqarish."
         ],
         [
            "bilvosita xulosa chiqarish.",
            "induktiv.",
            "bevosita xulosa chiqarish.",
            "analogiya."
         ],
         [
            "aylantirish, chegaralash, almashtirish.",
            "aylantirish, almashtirish, predikatga qarama-qarshi qo’yish.",
            "predikatga qarama-qarshi qo’yish, almashtirish.",
            "aylantirish, o’zgartirish, chegaralash."
         ],
         [
            "almashtirish.",
            "umumlashtirish.",
            "aylantirish.",
            "predikatga qarama-qarshi qo‘yish."
         ],
         [
            "induktiv.",
            "umumiy.",
            "analogiya.",
            "deduktiv."
         ],
         [
            "sillogizm.",
            "nazariya.",
            "aksioma.",
            "sillogizm aksiomasi."
         ],
         [
            "Qadimgi Hind va Yunon mantig’i asosida.",
            "Hind va Xitoy mantig’i asosida.",
            "Misr va Xitoy mantig’i asosida.",
            "Hind va Misr mantig’i asosida."
         ],
         [
            "Xitoy va Misr.",
            "O’rta Osiyo va Misr.",
            "Xitoy va Yunon.",
            "Misr."
         ],
         [
            "tushuncha va xulosa chiqarish to’g’risidagi fandir.",
            "inson tafakkuri va tilini o‘rganuvchi fandir.",
            "tafakkur shakllari va qonunlarini o’rganuvchi falsafiy fandir.",
            "inson tafakkurining kelib chiqishi va taraqqiyotini o‘rganuvchi fandir."
         ],
         [
            "Ibn Sino.",
            "Forobiy.",
            "Pifagor.",
            "Arastu."
         ],
         [
            "alohida tomonlarini.",
            "muhim bo’lgan belgilarini.",
            "asosiy bo’lmagan belgilarini.",
            "umumiy va muhim tomonlarini."
         ],
         [
            "mavhum tushunchalar bilan.",
            "faqat aniq mazmunli tushunchalar bilan.",
            "tayyor tushunchalar bilan.",
            "rivojlanib boruvchi tushunchalar bilan."
         ],
         [
            "narsa va hodisalarning qonuniy aloqadorligini va sabablarini bilishdir.",
            "narsalarning sistemaviy tuzilish tartibini bilishdir.",
            "narsalarning mohiyatini bilish bu narsalarning ichki ziddiyatlarini topishdir.",
            "narsalarning shaklini, bir-biridan farqini bilishdir."
         ],
         [
            "ma’lum mazmun va miqdorga ekanligi.",
            "ob’ektivlik voqelikning sub’ektiv ifodasi ekanligi.",
            "salbiy va ijobiy xususiyatga ega ekanligi.",
            "tushuncha qarama-qarshiliklarning birligidan iborat ekanligi."
         ],
         [
            "narsalarning sifatiy jihatlarini taqqoslash yo’li bilan.",
            "narsalarning miqdoriy jihatlarini taqqoslash yo’li bilan.",
            "narsalarning belgilarini taqsimlash yo’li bilan.",
            "narsalarning miqdoriy va sifatiy jihatlarini birgalikda taqqoslash yo’li bilan."
         ],
         [
            "umumiy belgilar hosil qilish uchun faqat yakka narsalarga xos bo’lgan belgilar e’tibordan soqit qilinib, bir sinf narsa va hodisalarning hammasiga xos bo’lgan belgilar topiladi.",
            "tushuncha hosil qilishda muhim bo’lmagan belgilarga tayanib ish tutiladi.",
            "tushuncha hosil qilishda narsalarning sifatiy muayyanligi asos qilib olinadi.",
            "tushuncha hosil qilishda xususiy belgilarni o’rganishning o’zi yetarlidir."
         ],
         [
            "narsalarning umumiy va muhim xususiyatlarini.",
            "umumiylikning qarama-qarshiliklarning birligi ekanligini.",
            "umumiylikning ziddiyatli xarakterini.",
            "tushunchaning belgilar yig’indisidan iborat ekanligini."
         ],
         [
            "tushunchaning o’zgaruvchanligini unutib qo’ysak.",
            "tushunchada mavjud bo’lgan ziddiyatlarni unutib qo’ysak.",
            "tushunchada aks etgan nomuhim belgilarni e’tibordan soqit qilsak.",
            "umumiylik real voqelikda yagonalik va konkretlik shaklida namoyon bo’lishini unutsak."
         ],
         [
            "tushunchaning hajmi qancha keng bo’lsa uning mazmuni shunchalik tor bo’lishini.",
            "tushuncha mazmunining voqelikka muvofiq kelishini.",
            "tushunchalarning doimiy harakatda bo’lish xususiyatini.",
            "tushunchaning mazmuni va hajmi orasi mos kelishni."
         ],
         [
            "qo’shib hisoblash.",
            "ayirib hisoblash.",
            "saralab hisoblash.",
            "maydalab hisoblash."
         ],
         [
            "entimema.",
            "aksiomalar.",
            "mulohazalar yig’indisi.",
            "sillogizm."
         ],
         [
            "mumkin emas.",
            "ba’zan mumkin.",
            "mumkin.",
            "mumkin bo’lish ehtimoli bor."
         ],
         [
            "xususiylikdan umumiylikka qarab harakatlanadi.",
            "xulosa chiqarishda fikr umumiylikdan xususiylikka qarab harakatlanadi.",
            "umumiylikdan umumiylikka qarab harakatlanadi.",
            "xususiylikdan xususiylikka qarab harakatlanadi."
         ],
         [
            "to’g’ri fikr yuritishni qanday amalga oshishi haqida bilim beradi.",
            "tabiiy hodisalarning qonunlarini o’rganadi.",
            "narsa va hodisalar haqida bilim beradi.",
            "jamiyat taraqqiyoti qonunlarini o’rganadi."
         ],
         [
            "inson ongida predmetlarning belgilarini in’ikosidir.",
            "ob’ektiv olamdagi predmet va voqealarning zaruriy umumiy muhim, turg’un takrorlanib turuvchi bog’lanishlarni ifodalaydi.",
            "fikrlar o’rtasidagi zaruriy, muhim, umumiy , turg’un takrorlanib turuvchi bog’lanishlarni o’zida ifodalaydi.",
            "ob’ektiv voqelikdan narsa va hodisalarning tomonlarini aks etadi."
         ],
         [
            "yakka, mavhum, konkret.",
            "konkret, mavhum, to’planma, musbat, manfiy.",
            "konkret, mavhum, nisbatdosh, ijobiy, salbiy, nisbatli.",
            "mavhum, nisbatdosh, ijobiy, salbiy."
         ],
         [
            "okean (suv havzasi).",
            "atom.",
            "o’simlik.",
            "hayvon."
         ],
         [
            "davlat va viloyat.",
            "shahar va qishloq.",
            "o’qituvchi va vrach.",
            "ruchka va qalam."
         ],
         [
            "hukmning mantiqiy kesimi.",
            "muayyan predmet haqidagi fikrdir.",
            "predmetning ma’lum qismini fodalavchi tushuncha.",
            "hukmning mantiqiy bog’lovchisi."
         ],
         [
            "tasdiq, inkor, umumiy, xususiyhukmlar.",
            "umumiy tasdiq, juz’iy tasdiq, umumiy inkor, juz’iy inkor hukmlar.",
            "konkret, mavhum, umumiy hukmlar.",
            "umumiy, juz’iy, inkor va tasdiq hukmlar ."
         ],
         [
            "predmetning belgisini ko’rsatadi.",
            "predikat biror predmet yoki voqelikning mavjudligini ko’rsatadi.",
            "hodisani ehtimolligini bildiradi.",
            "mavjud narsalarni aloqasini bildiradi."
         ],
         [
            "bir necha bog’lovchidan tashkil topgan hukm.",
            "bir necha sodda hukmlardan tashkil topgan hukm.",
            "tushunchalar va mantiqiy bog’lovchilardan tashkil topgan hukmlar.",
            "narsa va hodisalarni tasdiqlab yoki inkor etib aytilgan fikr."
         ],
         [
            "hukmlarning o’rnini almashtirish orqali savol hosil qilishdir.",
            "bir hukmning mazmunidan ikkita yangi hukmni hosil qilishdir.",
            "Sifati bir xil ikkita umumiy hukmlardan yangi hukm hosil qilishdir.",
            "hukm sub’ektini predikatga munosabatidir."
         ],
         [
            "umumiy fikrdan umumiy xulosa chiqarishdir.",
            "umumiy hukmdan yakka hukmning kelib chiqishidir.",
            "predmetni o’xshash belgilaridan xulosalar chiqarishdir.",
            "juz’iy hukmdan juz’iy xulosalar chiqarishdir."
         ],
         [
            "predmet haqida to’g’ri fikr yuritish.",
            "bayon etilgan fikrning to’g’riligini isbotlangan boshqa fikr yordamida isbotlash.",
            "bir hukmni chinligini ko’rsatish.",
            "fikrni mantiqiy yo’l bilan noaniqligini ko’rsatish."
         ],
         [
            "norma.",
            "nazariya.",
            "muammo.",
            "gipoteza."
         ],
         [
            "o’rganilayotgan hodisaning sabablari va xususiyatlarini tushuntiradigan asosli taxmin tarzidagi bilim shakli.",
            "aqliy bilish, tafakkurni amaliyotdan farq qiluvchi faoliyat turi sifatida ekanligini anglatadi.",
            "javobi bevosita mavjud bilimda bo’lmagan va yechish usuli noma’lum bo’lgan savol.",
            "ma’lum bir sohaga oid tasavvurlar, tushunchalar, g’oyalar, gipotezalarni sistemaga soladigan, predmetni ratsional tarzda anglashga imkon beradigan bilim shakli."
         ],
         [
            "xulosa chiqarish va hukmning dialektikasini o’rganadi.",
            "tafakkur qonunlari va shakllarini o’rganadi.",
            "tafakkur shakllarini o’rganadi.",
            "tafakkur orqali amalga oshirilgan bilimlarning shakllanishi va rivojlanishini o’rganadi."
         ],
         [
            "ziddiyat qonuni.",
            "istisno qonuni.",
            "yetarli asos qonuni.",
            "ayniyat qonuni."
         ],
         [
            "hamma S-P dir.",
            "ba’zi S-P emas.",
            "ba’zi S-P dir.",
            "hech bir S-P emas."
         ],
         [
            "hukmlar munosabatlariga, ya’ni qarama-qarshilik, zidlik, buysunish munosabatlari orqali xulosa chiqarish.",
            "xulosa chiqarishda birinchi hukmning sub’ekti ikkinchi hukmning predikatiga, uning predikati esa ikkinchi hukmning sub’ektiga aylantiriladi, ammo hukmning mazmuni birinchiday qolaveradi.",
            "asos hukmning su’ekti va predikati xulosa hukmda o’zgarmay qoladi, bog’lovchi esa qarama qarshi ma’noga aylanadi.",
            "boshlang’ich asos hukmning sub’ekti, xulosa hukmda saqlanib qoladi, lekin predikat qarama-qarshi mazmundagi predikatga, bog’lovchi ham qarama-qarshi mazmundagi bog’lovchiga aylantiriladi."
         ],
         [
            "logika (yunoncha logike) – so’z, fikr, tafakkur degan ma’noni bildiradi.",
            "logika (yunoncha logike) – tafakkur shakllaridir.",
            "logika (yunoncha logike) – hukm, tushuncha degan ma’noni anglatadi.",
            "logika (yunoncha logike) – bu mantiqning buzilib aytilishidi."
         ],
         [
            "qisman mos kelish.",
            "zidlik.",
            "qarama – qarshi.",
            "buysunish."
         ],
         [
            "klassifikatsiya.",
            "sinflash.",
            "dixotomik bo’lish.",
            "asos bo’lgan belgini o’zgarishiga qarab bo’lish."
         ],
         [
            "zaruriy va tasodifiy ayiruvchi.",
            "qisman va to’liq ayiruvchi hukmlar.",
            "ayiruvchi, biriktiruvchivasofayiruvchihukmlar.",
            "ayiruvchi, biriktiruvchi va qisman ayiruvchi."
         ],
         [
            "-zid.",
            "-bo’ysunish.",
            "qarama-qarshi.",
            "-quyi qarama-qarshi."
         ],
         [
            "almashtirish, aylantirish, predikatga qarama-qarshi qo’yish orqali.",
            "bir hukmda ikkinchi hukmni hosil qilish.",
            "sifati har xil hukmlardan.",
            "ikki hukmdan uchinchi hukmni keltirib chiqarish orqali."
         ],
         [
            "konyunktiv, dizyunktiv, implikativ va ekvivalentlik.",
            "atributiv, mavjudlik va munosabat.",
            "ehtimoliy, voqeiy va zaruriy.",
            "yakka, juz’iy va umumiy."
         ],
         [
            "narsa va hodisalarni tasdiqlab yoki inkor etib aytilgan fikrlardir.",
            "fikrimiz predmetni ko’rsatib, predmet haqida yangi bilim beradi.",
            "predmet va hodisalar, ularning aloqadorligi haqida bilim beradi.",
            "bir mantiqiy ega, mantiqiy kesim va mantiqiy bog’lovchidan tashkil topadi."
         ],
         [
            "ikki zid hukmlarning terminlarini o’zgartirish.",
            "hukm terminlarining o’rnini almashtirish.",
            "bir hukmni chinligidan ikkinchi hukmni xatoligini keltirib chiqarish.",
            "buysunuvchi hukmlarning o’rnini almashtirish."
         ],
         [
            "fikrni chinligini mantiqan ko’rsatish.",
            "isbot orqali fikrni chinligini yoki xatoligi aniqlash lozim bo’lgan hukm.",
            "muhokamada tushunchalar orqali qatnashish.",
            "tafakkur qonunlari asosidagi hukm."
         ],
         [
            "isbot etish jarayoni va usuli.",
            "chinligi avval isbotlangan va tezisni isbotlash uchun keltirilgan fikr yoki mulohaza.",
            "chinligi isbot etilishi lozim bo’lgan fikr yoki mulohaza.",
            "isbot talab qilmaydigan chin fikr yoki mulohaza."
         ],
         [
            "tashqi olam haqida inson miyasida hosil bo’ladigan illyuziyalar.",
            "predmetlar obrazini ma’lum bir signallar ta’sirida miyada qayta hosil qilishdan yoki shu va boshqa obrazlar negizida yangi obraz yaratishdan iborat hissini bilish shakli.",
            "predmetning birorta tashqi xususiyatini aks ettiruvchi yaqqol obrazdir.",
            "Predmetning yaxlit, yaqqol obrazi bo’lib, u mazkur predmet haqidagi turli xil sezgilarni sintez qilish natijasida hosil bo’ladi."
         ],
         [
            "«O».",
            "«E».",
            "«I».",
            "«B»."
         ],
         [
            "fikrlar aloqadorligi va rivojidagi qonuniyat haqidagi fan.",
            "yuqoridagilarni barchasi to’g’ri.",
            "tafakkur shakllari, usullari va qonunlarini o’rganuvchi fan.",
            "fikrlar aloqadorligi va rivojidagi o’ziga xos qonuniyatni anglatadi."
         ],
         [
            "idrok.",
            "sezgi.",
            "tasavvur.",
            "tafakkur."
         ],
         [
            "uning hajmidir.",
            "uning mazmunidir.",
            "uning logik usullari majmuidir.",
            "uning tuzilishidir."
         ],
         [
            "mavhum, to’planma, xususiy.",
            "zaruriy, yakka, umumiy.",
            "yakka, umumiy, to’planma ( yoki xususiy).",
            "konkret, umumiy, nisbatdosh."
         ],
         [
            "sintez.",
            "analiz.",
            "umumlashtirish.",
            "taqqoslash."
         ],
         [
            "tinchlik.",
            "do’stlik.",
            "davlat.",
            "Zarafshon daryosi."
         ],
         [
            "ikkinchi darajali gap bo’lagi.",
            "muayyan predmetning belgisi.",
            "hukmning predmeti.",
            "mantiqiy bog’lovchi ."
         ],
         [
            "umumiy, tasdiq.",
            "umumiy, inkor.",
            "konkret, inkor.",
            "tasdiq, inkor."
         ],
         [
            "ehtimoliy, voqeiy, zaruriy.",
            "yakka, umumiy va juz’iy.",
            "tasdiq va inkor.",
            "chin, xato va noaniq."
         ],
         [
            "bir hukmning mazmunidan ikkinchisini keltirib chiqarish.",
            "juz’iyroq hukmdan nisbatan kengroq hukm keltirib chiqarish.",
            "bir yoki bir necha hukmdan yangi hukmni keltirib chiqarish.",
            "ikki oddiy qat’iy hukmdan uchinchi oddiy va qat’iy hukm keltirib chiqarish."
         ],
         [
            "o’rganilayotgan hodisaning sabablari va xususiyatlarini tushuntiradigan asosli taxmin tarzidagi bilim.",
            "amalga oshirilishi zarur bo’lgan yoki istisno qiladigan xatti harakatlar.",
            "muaamoni yechilishi natijasida kelib chiqadigan chin mulohazalar.",
            "javobi bevosita mavjud bilimda bo’lmagan va yechish usuli noma’lum bo’lgan savol."
         ],
         [
            "tafakkur.",
            "tabiat.",
            "shaxs.",
            "jamiyat."
         ],
         [
            "bayon etilgan fikrni isbotlash uchun ilgarigi faktlarga asoslanishi.",
            "biror predmet haqida fikr aytilsa, faqat shu fikr aytiladi.",
            "fikrni aniq ravshan yetarli amallar yordamida isbotlash.",
            "bir predmet haqida bir vaqtda, bir nisbatda aytilgan ikki zid fikr chin bo’lmaydi."
         ],
         [
            "ta’rifni aniqlashtirishdir.",
            "tushunchalarni to’liq mazmunini ochib beruvchi mantiqiy usullar.",
            "tushunchani hajmini aniqlashdir.",
            "hajmi tor tushunchadan hajmi keng tushunchaga o’tishdir."
         ],
         [
            "Taqqoslanadigan va taqqoslanmaydigan munsabat.",
            "Ayniylik, bo‘ysinish, birga bo‘ysinish.",
            "Ayniylik, qisman moslik, bo‘ysunish.",
            "Birga bo‘ysunish, qarama-qarshilik, zidlik."
         ],
         [
            "Botir, a’lochi.",
            "Quyosh, Toshkent shahar.",
            "Maktab, institut.",
            "Student, bilim."
         ],
         [
            "Bug‘doy.",
            "Yulduz.",
            "Mashina.",
            "Majlis."
         ],
         [
            "Bu-narsalarni xarakterlovchi ichki elementlar va o‘zgarishlarni yg‘indisidir.",
            "Bu-narsalarni xarakterlovchi ichki va muhim bog‘lanishlarni yig‘indisidir.",
            "Bu-biror tushuncha tarkibiga kiradigan narsalar yig‘indisidir.",
            "Bu-narsalarning tushunchada aks etgan umumiy, muhim belgilarini yig‘indisidir."
         ],
         [
            "Bu-olamda mavjud bo‘lgan tushunchalarning barchasidir.",
            "Bu-narsalarning tushunchalarda aks etgan umumiy, muhim belgilari yig‘indisidir.",
            "Bu-biron tushuncha tarkibiga kiradigan narsalar yig‘indisidir.",
            "Bu-narsalarning katta-kichiklilik va raqamlarda ifodalovchi muayyanligidir."
         ],
         [
            "Taqqoslash, analiz, sintez, absraksiya, umumlashtirish.",
            "Ayniylik, zidlik, birga bo‘ysunish, qarama-qarshilik.",
            "Birga bo‘ysunish, qarama-qarshilik, zidlik.",
            "Ayniylik, zidlik, uchunchisi mustasno, etarli asos."
         ],
         [
            "Tafakkurning asosiy shakllari va qonun-qoidalarini o‘rganadi.",
            "Tafakkurni paydo bo‘lishini o‘rganadi.",
            "Hissiy va mantiqiy bilishni o‘rganadi.",
            "Sezgi, idrok va tasavvurni o‘rganadi."
         ],
         [
            "Sub’ekt bo‘lingan, predikat ba’zan bo‘lingan, ba’zan esa bo‘linmagan.",
            "Sub’ekt bo‘linmagan, predikat ba’zan bo‘lingan, ba’zan bo‘linmagan.",
            "Sub’ekt bo‘linmagan, predikat ham bo‘linmagan.",
            "Sub’ekt bo‘linmagan, predikat esa bo‘lingan."
         ],
         [
            "Umumiy tasdiq, umumiy inkor, juz’iy tasdiq, juz’iy inkor.",
            "Yakka hukm, umumiy hukm, tasdiq hukm, inkor hukm.",
            "Yakka, juz’iy, umumiy, tasdiq, inkor.",
            "Oddiy, qat’iy hukmlar, murakkab hukmlar."
         ],
         [
            "Taqqoslanadigan va taqqoslanmaydigan munosabat.",
            "Birga bo‘ysunish, qrama-qarshilik, zidlik.",
            "Ayniylik, bo‘ysunish, birga bo‘ysunish.",
            "Ayniylik, qisman moslik, bo‘ysunish."
         ],
         [
            "Ba’zi S-P dir.",
            "Hamma S-P dir.",
            "Hech bir S-P emas.",
            "Ba’zi S-P emas."
         ],
         [
            "Tenglik.",
            "Stadion.",
            "O‘rmon.",
            "Shahar."
         ],
         [
            "Ayiruv, shartli, birlashtiriluvchi.",
            "Mavjudlik, atributiv, munosabat.",
            "Yakka, juz’iy, umumiy.",
            "Sub’ekt, predikat, mantiqiy bog‘lanish."
         ],
         [
            "Student a’lochi bo‘lsa u rag‘batlantiriladi.",
            "Kant nemis klassik faylasufidir.",
            "Angren Toshkentga nisbatan kichik.",
            "Jismlar issiqlikdan kengayadi."
         ],
         [
            "Student, o‘qituvchi, Farg‘ona.",
            "Maktab, institut, talaba Ahmedov.",
            "Ruchka, kitob, do‘stlik.",
            "Quyosh, Toshkent shahri."
         ],
         [
            "Bu – vositasiz xulosa chiqarishdir.",
            "Ikki hukmdan yangi hukm keltirib chiqarish.",
            "Birdan ortiq hukmdan yangi hukm keltirib chiqarish.",
            "Bir va undan ortiq hukmdan yangi hukm keltirib chiqarish."
         ],
         [
            "ayniyat qonuni.",
            "uchinchisi istisno qonuni.",
            "yetarli asos qonuni.",
            "nozidlik qonuni."
         ],
         [
            "- Dunyoni sezish, idrоk etish, tushunish",
            "- Estetik yuksаlish",
            "- Ахlоqni yuksаltirish",
            "- Dunyoni tаsаvvur qilish"
         ],
         [
            "- Mif, fаn, оv",
            "- Mif, din, fаlsаfа, fаn",
            "- Fаn, fаlsаfа, оv",
            "- Din, sаn’аt, mehnаt"
         ],
         [
            "- Rivоyat, аfsоnа",
            "- O‘yin, sаn’аt",
            "- Sаn’аt, vоqeа",
            "- Аfsоnа, urush"
         ],
         [
            "- Fаrоvоnlik funksiyasi",
            "- Kоmmunikаtiv funksiyasi",
            "- Dunyoqаrаshni shаkllаntirish funksiyasi",
            "- Tаrtibgа sоlish funksiyasi"
         ],
         [
            "- U yoki bu mo‘’jizаkоr predmetning оdаmlаr hаyotidа tа’sir ko‘rsаtishigа sig‘inish",
            "- Ruхlаr vа tаbiаt kuchlаrigа sig‘inish",
            "- Bulutlаrgа sig‘inish",
            "- Оdаmlаrgа sig‘inish"
         ],
         [
            "-Оdаmlаrgа sig‘inish",
            "- Hаyvоnlаrgа sig‘inish",
            "- Ilоhiy kuchlаrgа sig‘inish",
            "- YOmg‘irgа sig‘inish"
         ],
         [
            "- YAkkа хudоlik",
            "- Хudоsizlik",
            "- Ruhlаrgа sig‘inish",
            "- Ko‘p хudоlik"
         ],
         [
            "- Kundаlik dunyoqаrаsh",
            "- Mifоlоgik vа diniy dunyoqаrаsh",
            "- Fаlsаfiy dunyoqаrаsh",
            "- Ilmiy dunyoqаrаsh"
         ],
         [
            "- Sezgilаrdа",
            "- Tuyg‘ulаrdа",
            "- E’tiqоddа",
            "- Аql vа bilimlаrdа"
         ],
         [
            "- Erni tаdqiq etishni",
            "- Hаyotni аnglаshni",
            "- Kоsmоs vа tаbiаtni аnglаshni",
            "- Оdаmni tаdqiq etishni"
         ],
         [
            "- Ахlоq hаqidаgi tа’limоt",
            "- Hаyot hаqidаgi tа’limоt",
            "- Qоnunlаr vа usullаrni o‘rgаnuvchi fаn",
            "- Rivоjlаnish vа o‘zgаrishlаr hаqidаgi tа’limоt"
         ],
         [
            "- Оngni birinchi o‘ringа qo‘yuvchilаr",
            "- G‘оyani оng mаrkаzigа qo‘yuvchilаr",
            "- Оlаmni аzаldаn, mоddiy deb, оng bu mаteriyaning mаhsuli deyuvchilаr",
            "- Оlаmning mаrkаzigа mаdаniyatni qo‘yuvchilаr"
         ],
         [
            "- Хudоning bоrligini qаndаy аsоslаsh mumkin?",
            "- Dunyo nimаdаn yarаtilgаn?",
            "- Insоn nimа?",
            "- Hаyot yashаshgа аrziydimi?"
         ],
         [
            "- Dunyoni аqliy bilish mumkin",
            "- Dunyoni to‘liq bilish mumkin",
            "- Dunyoni bilib bo‘lmаydi",
            "- Dunyoni fаqаt sezgilаr оrqаli bilish mumkin"
         ],
         [
            "- Gnоseоlоgik funksiyadа",
            "- Integrаtiv funksiyasi",
            "- Mifоlоgik funksiyasi",
            "- Dunyoqаrаsh funksiyasidа"
         ],
         [
            "- Gnоseоlоgik funksiyasi",
            "- Tаrbiyaviy funksiyasi",
            "- Dunyoqаrаsh funksiyasi",
            "- Оntоlоgik funksiyasi"
         ],
         [
            "- Insоniyatning kelаjаkdаgi muаmmоlаri",
            "- Оlаm vа оdаmning o‘zаrо munоsаbtаlаri",
            "- Insоnning kelib chiqish sаbаblаri",
            "- Insоnning vаhshiyonа tаbiаtidаn mа’rifаtli tаbiаtgа o‘tish imkоniyati qаy dаrаjа mаvjud"
         ],
         [
            "- I.Nyutоn",
            "- N.Bоr",
            "- Eynshteyn",
            "- R.Ernest"
         ],
         [
            "- Fаn yutuqlаrini tаn оlаdi vа ijоbiy bаhоlаydi",
            "- Fаlsаfаni fаn dаrаjаsigа tushirish vа dunyoqаrаsh mаsаlаsini оlib tаshlаsh",
            "- Fаlsаfаni fаn deb bilish",
            "- Fаlsаfаni dunyoqаrаsh deb bilish"
         ],
         [
            "- Dunyoqаrаshni shаkllаntirish, kоmmunikаtiv, tаrtibgа sоlish, kоmpensаtоrlik funksiyalаri",
            "- Kаmоlоtgа etkаzish, kоmpensаtоrlik, kоmmunikаtiv funksiyalаr",
            "- Bоshqаruvchi, tаrtibgа sоluvchi, dunyoqаrаshni kengаytiruvchi, kоmpensаtоrlik funksiyalаri",
            "- Dunyoqаrаshni shаkllаntirish, kоmillikkа ko‘tаrish, sаbrgа o‘rgаtuvchi funksiyalаri"
         ],
         [
            "- Sientizm",
            "- Аntissientizm",
            "- Prаgmаtizm",
            "- Gnоstizm"
         ],
         [
            "- Diаlektik",
            "- Оntоlоgik",
            "- Mifоlоgiya",
            "- Gnоseоlоgik"
         ],
         [
            "- Biz kimmiz negа tug‘ildik",
            "- Undаy nаzаriya bo‘lmаgаn",
            "- Dunyo qаndаy vujudgа kelgаn vа u qаndаy rivоjlаnаdi? Hаyot vа o‘lim nimа?",
            "- Negа tug‘ildik vа nimаgа o‘lаmiz"
         ],
         [
            "- Tаlmut",
            "- Injil",
            "- Аvestо",
            "- Qur’оni Kаrim"
         ],
         [
            "- Nаsаfiy",
            "- Zаrdusht",
            "- G‘аzzоliy",
            "- Nаvоiy"
         ],
         [
            "- Оlоv",
            "- O‘t",
            "- Tuprоq",
            "- Hаvо"
         ],
         [
            "- Kоsmоsentrizm",
            "- Teоsentrizm",
            "- Аntrоpоsentrizm",
            "- Metоdоlоgizm"
         ],
         [
            "- Аnаksimen",
            "- Demоkrit",
            "- Fаles",
            "- Gerаklit"
         ],
         [
            "- Ibn Sinо",
            "- Аbu Nаsr Fоrоbiy",
            "- Аbu Rаyhоn Beruniy",
            "- Аli Qushchi"
         ],
         [
            "- Fenоmenоlоgiya, оkkultizm, mаrksizm, nоminаlizm",
            "- Pоzitivizm, neоpоzitivizm, strukturаlizm, prаgmаtizm, ekzistensiаlizm",
            "- Sхоlаstikа, neоpоzitivizm, strukturаlizm, prаgmаtizm, ekzistensiаlizm",
            "- Fenоmenоlоgiya, sхоlаstikа, neоpоzitivizm."
         ],
         [
            "- Hindchа . «ontos» - bоrliq, «logos» - so‘z, tа’limоt",
            "- Lоtinchа «ontos» - bоrliq, «logos» - so‘z, tа’limоt.",
            "- Аrаbchа «ontos» - bоrliq, «logos» - so‘z, tа’limоt",
            "- Yunonchа «ontos» - bоrliq, «logos» - so‘z, tа’limоt."
         ],
         [
            "- Mutlaq «Men» ning erkin, sоf fаоliyati.",
            "- Оb’ektiv rivоjlаnuvchi g‘оya.",
            "- Dunyoni tushunish zаmiridа yotuvchi, nisbаtаn bаrqаrоr vа mustаqil hоldа mаvjud mоhiyat.",
            "- Оb’ektiv rivоjlаnuvchi sоf fаоliyati."
         ],
         [
            "- «mаkоn» vа «zаmоn»",
            "- «bоrliq» vа «yo‘qlik»",
            "- «hаrаkаt» vа «rivоjlаnish»",
            "- «sifаt» vа «miqdоr»"
         ],
         [
            "- CHаmbаrchаs",
            "- Diаlektik",
            "- Ziddiyatli",
            "- Dinаmik"
         ],
         [
            "- Sezgi.",
            "- Yo‘qlik",
            "- Bilish",
            "- Bоrliq"
         ],
         [
            "- 4 tа",
            "- 5 tа",
            "- 3 tа",
            "- 2 tа"
         ],
         [
            "- Ijtimоiy bоrliq.",
            "- Insоn bоrlig‘i",
            "- Mа’nаviy bоrliq",
            "- Tаbiаt bоrlig‘i"
         ],
         [
            "- Insоnning tаshqi dunyosi.",
            "- Inikоs vа оn-",
            "- Ijtimоiy mаkоn vа vаqt.",
            "- Insоnning ichki dunyosi."
         ],
         [
            "- Tаbiаt",
            "- Ikkilаmchi tаbiаt",
            "- Nаrsа – buyum",
            "- Tаbiаt - buyum."
         ],
         [
            "- Gnоseоlоgiyadа",
            "- Ijtimоiy fаlsаfаdа",
            "- Аksiоlоgiyadа",
            "- Оntоlоgiyadа"
         ],
         [
            "- Islоm fаlsаfаsidа",
            "- Vedа vа Upаnishаdаlаrdа",
            "- Kоnfusiy tа’limоtidа",
            "- Dаоsizmdа"
         ],
         [
            "- Rigvedаlаrdа",
            "- Upаnshаdlаrdа",
            "- Mоnumentlаrdа",
            "- Аvestоdа"
         ],
         [
            "- Аvestоdа",
            "- Qur’оndа",
            "- Vedаlаrdа",
            "- Hаdisdа"
         ],
         [
            "- Deizm",
            "- Duаlizm",
            "- Tоtemizm",
            "- Fetishizm"
         ],
         [
            "- Tirik, nоtirik vа ijtimоiy",
            "- Tirik vа nоtirik",
            "- Ierаrхiya vа jоnsiz mаteriya",
            "- Jоnli vа ijtimоiy mаteriya"
         ],
         [
            "- Nyutоn",
            "- Eynshteyn",
            "- Fregmаn",
            "- Lаmetri"
         ],
         [
            "- Vаqt vа fаzо birligi",
            "- Mоhiyat vа mаvjudining birligi",
            "- Bоrliqning eng аsоsiy vа quyi qаtlаmi",
            "- Birinchi negizining yagоnаligi"
         ],
         [
            "- Mоnizm",
            "- Tоmizm",
            "- Duаlizm",
            "- Deizm"
         ],
         [
            "- Оlоv",
            "- Хаvо",
            "- Suv",
            "- Er"
         ],
         [
            "- To‘rt yoqlаmа",
            "- Uch yoqlаmа",
            "- Bir yoqlаmа",
            "- Ikki yoqlаmа"
         ],
         [
            "- Rаsiоnаl.",
            "- Mаteriаlistik",
            "- Substаnsiоnаl",
            "- Relyasiоn"
         ],
         [
            "- Chiziqli vа nоchiziqli",
            "- Relyasiоn vа irrаsiоnаl",
            "- Chekli vа cheksiz",
            "- Substаnsiоnаl vа relyasiоn"
         ],
         [
            "- Zаmоn",
            "- Rivоjlаnish",
            "- Hаrаkаt",
            "- Regress."
         ],
         [
            "- Prоgress vа regress",
            "- Ichki vа tаshqi",
            "- Dinаmik vа meхаnik",
            "- Sub’ektiv vа оb’ektiv"
         ],
         [
            "- Dinаmik.",
            "- Prоgress (rivоjlаnish)",
            "- Regress",
            "- Turg‘unlik"
         ],
         [
            "- Turg‘unlik",
            "- Regress",
            "- Prоgress (rivоjlаnish)",
            "- Meхаniklik."
         ],
         [
            "- Tаrtiblilik",
            "- Qоbiq",
            "- Tаrtibsizlik",
            "- Bo‘shliq"
         ],
         [
            "- Хimik, аstrоnоmik, geоlоgik, meхаnik",
            "- Ijtimоiy, biоlоgik, geоgrаfik, fizik",
            "- Kimyoviy, meхаnik, fizik, biоlоgik, ijtimоiy",
            "- Kimyoviy, аstrоnоmik, geоgrаfik, fizik"
         ],
         [
            "- Insоn vа хаyvоnlаrning urgаnuvchi tа’limоt",
            "- Hаyvоn vа o‘simliklаr bilаn shug‘ullаnuvchi tа’limоt",
            "- Nаbоdоt оlаmini o‘rgаnuvchi fаn sоhаsi",
            "- Insоn vа kishilik jаmiyatining shаkllаnishi hаqidаgi tа’limоt"
         ],
         [
            "- Zirоаtchilik, chоrvаchilik, оvchilik",
            "- Termаchilik, оvchilik, bаliqchilik",
            "- CHоrvаchilik, оvchilik",
            "- Dehqоnchilik, termаchilik, bаliqchilik"
         ],
         [
            "- O‘simlik",
            "- Tа’limоt",
            "- Uy, bоshpаnа",
            "- Tаbiаt"
         ],
         [
            "- Аtmоsferа",
            "- Gidrоsferа",
            "- Nооsferа",
            "- Litоsferа"
         ],
         [
            "- Jez vа temirdаn",
            "- O‘simlik vа hаyvоndаn",
            "- Yog‘оch vа hаyvоndаn",
            "- Tоsh vа yog‘оchdаn"
         ],
         [
            "- Ekоlоgik o‘sish",
            "- Ekоlоgik tаnglik",
            "- Ekоlоgik rivоjlаnish",
            "- Ekоlоgik sаkrаsh"
         ],
         [
            "- Iqtisоdiy rivоjlаnish sоhаsi",
            "- Ijtimоiy sоhа",
            "- Tаbiiy bilim sоhаsi",
            "- Аql-idrоk sоhаsi"
         ],
         [
            "- Tаbiаt vа jаmiyatning mushtаrаk rivоjlаnishgа |",
            "- Iqtisоdiy sаkrаsh",
            "- Tаbiаtning tizimli rivоjlаnishi",
            "- Jаmiyatning tizimli rivоjlаnishi"
         ],
         [
            "- Bunаqа dunyo mаvjud emаs",
            "- Аtоm miqiyosidаn kаttа bo‘lgаn dunyo",
            "- Аtоm miqiyosidаn kichik bo‘lgаn dunyo",
            "- Аtоm miqiyosigа teng bo‘lgаn dunyo"
         ],
         [
            "- Geоgrаfik muhit",
            "- Ijtimоiy muhit",
            "- Siyosiy muhit",
            "- Mа’nаviy muhit"
         ],
         [
            "- Hаvо vа аpeyrоn",
            "- Suv vа hаvо",
            "- Оlоv vа suv",
            "- Оlоv vа hаvо"
         ],
         [
            "- Оng",
            "- Shахs",
            "- Оngsizlik",
            "- Hаrаkаt"
         ],
         [
            "- Insоn eydigаn оziq-оvqаt mаhsulоtlаrining kimyoviy tаrkibi bilаn bоg‘lаngаn.",
            "- Оngning mаzkur lаhzаdа оng bilаn bоshqаrishgа qоdir bo‘lmаgаn pаrchаsi.",
            "- Insоn uni qurshаgаn bоshqа оdаmlаr tоmоnidаn qаndаy idrоk etilishi, tаvsiflаnishi vа bаhоlаnishini аks ettiruvchi ijtimоiy hоdisа",
            "- Jоnning bir qismi"
         ],
         [
            "- K. Yung",
            "- Z.Freyd",
            "- Frоmm",
            "- D. YUm"
         ],
         [
            "- Insоn miyasining ish jаrаyoni hisоblаnаdi, uning funksiyasi sifаtidа аmаl qilаdi vа undаn аyri hоldа nаmоyon bulmаydi.",
            "- Insоnning uni qurshаgаn bоshqа оdаmlаr tоmоnidаn qаndаy idrоk etilishi, tаvsiflаnishi vа bаhоlаnishini аks ettiruvchi ijtimоiy хоdis-",
            "- Nаrsа vа hоdisаlаrning o‘zаrо tа’sirlаshuvi аsоsidа хоsil bo‘lаdigаn hоdisа, hоlаt, jаrаyon vа o‘zgаrishlаrni ifоdаlаydi.",
            "- Insоn miyasining оb’ektiv bоrlikni ideаl оbrаzlаrdа аks ettirish vа bu оbrаzlаrdаn fikrlаsh jаrаyonidа fоydаlаnish kоbiliyati"
         ],
         [
            "- Irrаsiоnаlis – оqilоnа, оngli",
            "- Irrаsiоnаlis – nооqilоnа, оngsiz",
            "- Irrаsiоnаlis – sezgi, his-tuyg‘u",
            "- Irrаsiоnаlis - mаteriya"
         ],
         [
            "- Аristоtel",
            "- Аflоtun",
            "- Demоkrit",
            "- Suqrоt"
         ],
         [
            "- Muаyyan jismning аynаn shu jism ekаnligini belgilоvchi хususiyat",
            "- O‘zgаruvchаn хususiyatlаr",
            "- Birоn bir jismni аniqlоvchi хususiyat",
            "- Hаr qаndаy jismning аjrаlmаs хususiyati, хоss-"
         ],
         [
            "- yun. Diаlektikа – suhbаt qurish sаn’аti",
            "- yun. Diаlektikа – оng",
            "- yun. Diаlektikа – оngsizlik",
            "- yun. Diаlektikа – sezgi, хis-tuyg‘u"
         ],
         [
            "- Dunyoni quyidаn оliygа qаrаb bоruvchi umumiy rivоjlаnish jаrаyoni sifаtidа tаsvirlаsh.",
            "- Tаbiiy vа ijtimоiy hоdisаlаrning o‘zаrо аlоqаsi vа rivоjlаnishi.",
            "- Sub’ektning fikrlаsh diаlektikаsi vа uning оb’ektiv dunyoni bilishi",
            "- Dunyoni metаfizik tushunish."
         ],
         [
            "- Dunyodа yuz beruvchi bаrchа jаrаyonlаrni, ulаrning mаzmunidаn kаt’iy nаzаr qаmrаb оluvchi jаrаyon",
            "- Fundаmentаl qоidа, birinchi аsоsni, birоn-bir kоnsepsiya yoki nаzаriyaning muhim аsоsi",
            "-  Mаkоn yo vаqtdа bir-biridаn muаyyan mаsоfаdа uzоqlikdа jоylаshgаn ikki yoki bir nechа hоdisа yoki оb’ektning o‘zаrо bоg‘lаnish jаrаyoni",
            "- Bоrliqning universаl аlоqаlаrini bilish shаkli"
         ],
         [
            "G Nаrsаlаr, hоdisаlаrning bir hоlаtdаn bоshqа hоlаtgа o‘tishi.",
            "- Predmetning bir-birini istisnо etuvchi vа bir-birini nаzаrdа tutuvchi tоmоnlаridir.",
            "- Оb’ektiv dunyoning аksаriyat yoki hаttо bаrchа nаrsаlаri, hоdisаlаri vа jаrаyonlаri bo‘ysunаdi.",
            "- Miqdоr vа sifаt o‘zgаrishlаrining bir-birigа o‘tishi"
         ],
         [
            "- Аlоqа",
            "- Qаrаmа-qаrshilik",
            "- Ziddiyat",
            "- O‘zgаrish"
         ],
         [
            "- Nаrsаlаr, hоdisаlаrning bir hоlаtdаn bоshqа hоlаtgа o‘tishi",
            "- Predmetni bir-birini istisnо etuvchi vа bir-birini nаzаrdа tutuvchi tоmоnlаri",
            "- Аvvаlgi hоlаtdаn sаqlаnib qоlgаn хоssаlаr ustunlik qilgаn hоldа аyni bir predmet хоssаlаrining mоs kelmаsligidir",
            "-. Nаrsа yoki hоdisа qаrаmа-qаrshi tоmоnlаrining bir-birini istisnо etish vа bir-birigа o‘tish munоsаbаtlаri"
         ],
         [
            "- Nаrsаlаrning o‘zаrо mаvjudlik usuli, ulаrdа yashirin хоssаlаrning nаmоyon bo‘lish оmili",
            "- Predmetning jihаti bulib, uning bоshqа predmetlаrdаn fаrqi yoki ulаr bilаn o‘хshаshligini belgilаydi vа ulаr bilаn o‘zаrо аlоqаdа nаmоyon bo‘lаdi.",
            "- Аvvаlgi hоlаtdаn sаqlаnib qоlgаn хоssаlаr ustunlik qilgаn hоldа аyni bir predmet хоssаlаrining mоs kelmаsligidir",
            "- Predmetning bir-birini istisnо etuvchi vа bir-birini nаzаrdа tutuvchi tоmоnlаridir."
         ],
         [
            "- Nаrsаning ichki хususiyati, predmetni mаzkur jihаtdаn fаrqlаsh uchun zаrur vа etаrli bo‘lgаn хоssаlаr mаjmui.",
            "- Predmetning bir-birini istisnо etuvchi vа bir-birini nаzаrdа tutuvchi tоmоnlаridir",
            "- Predmetning jihаti bo‘lib, uning bоshqа predmetlаrdаn fаrqi yoki ulаr bilаn o‘хshаshligini belgilаydi vа ulаr bilаn o‘zаrо аlоqаdа nаmоyon bo‘lаdi",
            "-  Predmet muаyyan хоssаsining nаmоyon bo‘lishi, intensivligi dаrаjаsi."
         ],
         [
            "- Isbоtlаr",
            "- Qаrаmа-qаrshiliklаr",
            "- Hаqiqаt",
            "- Dаlillаr"
         ],
         [
            "- Yunoncha - fizikаdаn keyin",
            "- Lоtincha - fizikаdаn keyin",
            "- frаnsuzcha - fizikаdаn keyin",
            "- inglizcha - mаtemаtikаdаn keyin"
         ],
         [
            "- Qаrshilik",
            "- Me’yor",
            "- Ziddiyat",
            "- Sifаt"
         ],
         [
            "- Duаlistik, mistik",
            "- Ideаlistik, duаlistik, mistik",
            "- Stiхiyali, mistik, mаteriаlistik",
            "- Mаteriаlistik, ideаlistik, stiхiyali diаlektikа"
         ],
         [
            "- Plаtоn",
            "- Demоkrit",
            "- Suqrоt",
            "- Аristоtel"
         ],
         [
            "- Fаn kаtegоriyalаri irrаsiоnаllikni tаn оlаdi",
            "- Fаlsаfiy kаtegоriyalаr o‘tа keng tushunchаlаrdir",
            "- Fаn kаtegоriyalаri o‘tа mа’nоli",
            "- Fаlsаfа kаtegоriyalаri judа оz"
         ],
         [
            "- Butun",
            "- Sistemа",
            "- Element",
            "- Strukturа"
         ],
         [
            "- Sаbаb оqibаt tа’siridа vujudgа kelаdi",
            "- Оqibаt sаbаb tа’siridа vujudgа kelаdi",
            "- Butun vа qism fаn kаtegоriyalаridir",
            "- Tаsоdif zаruriyatning nаmоyon bo‘lish shаkli"
         ],
         [
            "- Tаsоdif tаshqi оmillаr bilаn belgilаnаdigаn аlоqа tipi",
            "- Tаsоdif ichki, tаshqi, umumiy vа хususiy bo‘lаdi",
            "- Tаsоdif ichki vа tаshqi bo‘lаdi",
            "- Tаsоdif yuz berishi хаm yuz bermаsligi хаm mumkin"
         ],
         [
            "- Vоqelik",
            "- Butun",
            "- Tаsоdif",
            "- Zаruriyat"
         ],
         [
            "- Nаrsаning eng umumiy хоssаlаri",
            "- Nаrsаning bоshqа bo‘linmаydigаn qismi",
            "- Nаrsаlаr vа hоdisаlаrning tаrkibiy qismlаri o‘rtаsidаgi qоnuniy аlоqа yo‘li",
            "- Nаrsаning, predmetning yaхlit belgilаri"
         ],
         [
            "- Аtаmа",
            "- Tushunchа",
            "- Kаtegоriya",
            "- Хulоsа"
         ],
         [
            "- Fаlsаfiy kаtegоriyalаr",
            "- Аtаmаlаr",
            "- Umumiy kаtegоriyalаr",
            "- Fаn kаtegоriyalаri"
         ],
         [
            "- Spinоzа",
            "- Gegel",
            "- Аristоtel",
            "- Kаnt"
         ],
         [
            "- Ideоlоgiya",
            "- Epistemоlоgiya",
            "- Gnоselоgiya",
            "- Оntоlоgiya"
         ],
         [
            "- Оntоlоgiya",
            "- Epistemоlоgiya",
            "- Gnоselоgiya",
            "- Ideоlоgiya"
         ],
         [
            "- Fоrmаlizm",
            "- Persepsiya",
            "- Аppersepsiya",
            "- Fаtаlizm"
         ],
         [
            "- Fаtаlizm",
            "- Fоrmаlizm",
            "- Аppersepsiya",
            "- Persepsiya"
         ],
         [
            "- Dunyoni bilishni rаd etаdi",
            "- Hаmmа nаrsа o‘tkinchiligi",
            "- Dunyoni bilish mumkinligini tа’kidlаydi",
            "- Хudоni tаn оlmаydi"
         ],
         [
            "- Оptimistlаr",
            "- Skeptiklаr",
            "- Gnоstiklаr",
            "- Аgnоstiklаr"
         ],
         [
            "- Hаqiqаtgа mоs kelаdigаn vа аsоslаngаn ishоnchdir",
            "- Hаqiqаtgа mоs kelmаydigаn fikr",
            "- Hаli аsоslаnmаgаn fikr",
            "- Bilim - yolg‘оn mа’lumоt"
         ],
         [
            "- Tаbiiy bilim, fаlsаfiy bilim, deviаnt bilim",
            "- Prаgmаtik bilim, shахsiy bilim",
            "- Psevdоilmiy bilim, аnоrmаl bilim, deviаnt bilim",
            "- Shахsiy bilim, kundаlik bilim"
         ],
         [
            "- Mаkоn",
            "- Zаmоn",
            "- Оb’ekt",
            "- Tushunchа"
         ],
         [
            "- Hоdisа",
            "- Mаkоn",
            "- Оb’ekt",
            "- Sub’ekt"
         ],
         [
            "- Meditаsiya",
            "- Persepsiya",
            "- Аdаptаsiya",
            "- Аppersepsiya"
         ],
         [
            "- K.Gelvesiy",
            "- -Gyugо",
            "- Russо",
            "- Vоlter"
         ],
         [
            "- Bizning muаyyan nаrsаlаr hаqidаgi bilimlаrimiz vа (yoki) e’tiqоdlаrimizning ishоnchlilik dаrаjаsini o‘rgаnаdi",
            "- Bilim vа e’tiqоdimizning ishоnchlilik dаrаjаsini o‘rgаnаdi",
            "- Bilish jаrаyonining umumiy, fаlsаfiy mоhiyati vа muаmmоlаrini o‘rgаnаdi",
            "- Tаfаkkurning umumiy qоnuniyatlаrini o‘rgаnаdi"
         ],
         [
            "- Pessimist",
            "- Gnоstik",
            "- Оptimist",
            "- Аgnоstik"
         ],
         [
            "- Fаlsаfаning аksiоlоgik mаsаlаlаri vа muаmmоlаri bilаn shug‘ullаnuvchi mахsus sоhа",
            "- Fаlsаfаning bilish mаsаlаlаri vа muаmmоlаri bilаn shug‘ullаnuvchi mахsus sоhа",
            "- Fаlsаfаning prаksiоlоgik mаsаlаlаri vа muаmmоlаri bilаn shug‘ullаnuvchi mахsus sоhа",
            "- Fаlsаfаning bоrliq mаsаlаlаri vа muаmmоlаri bilаn shug‘ullаnuvchi mахsus sоhа"
         ],
         [
            "- Epistemоlоgiya",
            "- Аksiоlоgiya",
            "- Оntоlоgiya",
            "- Gnоseоlоgiya"
         ],
         [
            "- Аqlish bilish",
            "- Emperik bilish",
            "- Ilmiy bilish",
            "- Emоsiоnаl bilish"
         ],
         [
            "- Dunyoni egаllаsh",
            "- Vаtаnsizlik",
            "- Оlаmni bilish mumkin emаs",
            "- Оlаmni bilish mumkin"
         ],
         [
            "- Dunyoni egаllаsh",
            "- Оlаmni bilish mumkin emаs",
            "- Dаlillаr аsоsidа sh ko‘rish",
            "- Оlаmni bilish mumkin"
         ],
         [
            "- Аgnоstisizm",
            "- Gnоstiklаr",
            "- Nоminаlistlаr",
            "- Rаsiоnаlistlаr"
         ],
         [
            "- Gnоstiklаr",
            "- Аgnоstisizm",
            "- Rаsiоnаlistlаr",
            "- Nоminаlistlаr"
         ],
         [
            "- Tаjribаviy bilim",
            "- Emperik bilim",
            "- Хissiy bilim",
            "- Аqliy bilim"
         ],
         [
            "- ingilizchа «perception» - idrоk etish",
            "- Yunonchа «perception» - idrоk etish",
            "- Хis qilish",
            "- lоtinchа «perception» - idrоk etish"
         ],
         [
            "- Ijtimоiy bilim",
            "- Ilmiy bilim",
            "- Kundаlik bilim",
            "- Tаriхiy bilim"
         ],
         [
            "- Хоtirа vа tаsаvvur",
            "- Hissiy vа оqilоnа",
            "- Аqliy vа idrоk",
            "- Аqliy vа irrаsiоnаl"
         ],
         [
            "- Ibn Sinо",
            "- Fаrоbiy",
            "- Аristоtel",
            "- Plаtоn"
         ],
         [
            "- Tаsаvvur",
            "- Sezgi",
            "- Хоtirа",
            "- Хаyol"
         ],
         [
            "- Хаyol",
            "- Хоtirа",
            "- Tаsаvvur",
            "- Idrоk"
         ],
         [
            "- Gipоtezа, pаrаdigmа, nаzаriya",
            "- Kuzаtish, eksperiment, ilmiy dаlillаsh",
            "- Mоdellаshtirish tаriхiy аnаlоgiya, bаshоrаt",
            "- ilmiy muаmmо, muаmmоli vаziyat, tаriхilik"
         ],
         [
            "- Ilmiy dаlillаsh",
            "- Mоdellаshtirish",
            "- Eksperiment",
            "- Kuzаtish"
         ],
         [
            "- SHundаy tаdqiqоt metоdiki, uning yordаmidа оb’ektiv yo sub’ektiv tаrzdа yoritilаdi yo tаdqiqоt mаqsаdlаrigа mоs kelаdigаn mа’lum shаrt- shаrоitlаrdа o‘rgаnilаdi?",
            "- Bilishning rivоjlаnish jаrаyonidа оb’ektiv tаrzdа yuzаgа kelаdigаn, echimning tоpish muhim аmаliy yoki nаzаriy аhаmiyatgа egа bo‘lgаn mоslаmа yoki mаsаlаlаr mаjmuidir.",
            "- bilishning tаsdiqlаngаn bоligigа аylаngаn mоddiy vа mа’nаviy dunyo хоdisаsi, birоn- bir hоdisа, хоssа yoki munоsаbаtni qаyd etishdir?",
            "- Bilish оb’ektning muhim хоssаlаri vа munоsаbаtlаrini аniqlаsh mаqsаdidа аtаylаb аmаlgа оshirilаdigаn izchil idrоk etishdir?"
         ],
         [
            "- Ishоnchlilik vа bir vаriаntlilik",
            "- Ishоnchlilik vа vаriаntlilik",
            "- Tаsdiqlаngаnlik vа vаriаntlilik",
            "- Isbоtlаngаnlik vа betаkrоrlik"
         ],
         [
            "- Isbоtlаsh vа inkоr qilish",
            "- Umumlаshtirish vа tаsdqilаsh",
            "- Verifikаsiya vа fаlsifikаsiya",
            "- Sаqlаsh vа etkаzish"
         ],
         [
            "- YAngi dаlillаrning mоhiyatini tushuntiruvchi qоnun mаvjudligi hаqidаgi аsоsli tахmindir",
            "- Hоdisаlаrning muаyyan turkumi bu turkumdаgi hоdisаlаrning mоhiyati vа ulаrgа nisbаtаn аmаl qilаdigаn bоrliq qоnunlаri hаqidаgi bilimlаrning mаntiqiy аsоslаngаn tizimidir",
            "- Bоrliqning eng muhim tоmоnlаri, хоssаlаri vа munоsаbаtlаrini аks ettiruvchi umumiy tushunchаlаridir",
            "- Fаn tаriхning muаyyan dаvridа uning rivоjlаnishini belgilоvchi bаrqаrоr tаmоyillаr nаzаriyalаr vа metоdlаr mаjmui"
         ],
         [
            "- Tаfаkkur qоidаlаri, qоnunlаri vа tоmоnlаrigа muvоfiq bir hаqiqаtni bоshqа yanаdа terаnrоq hаqiqаtgа intilishdir",
            "- Muhim хоssаlаr vа munsаbаtlаr mаjmui",
            "- Echimini tоpish muhim аmаliy yoki nаzаriy аhаmiyatgа egа bo‘lgаn mаsаlа yoki mаsаlаlаr to‘plаmi",
            "- Bоrliq yoki uning аyrim хоssаlаri hаqidа tаsаvvurning shаkllаnishigа imkоniyat yarаtuvchi ахbоrоt"
         ],
         [
            "- Fikrning shundаy bir shаkli, undа tushunchаlаrni bоg‘lаsh yo‘li bilаn birоr nаrsа hаqidаgi birоn-bir fikr tаsdiqilаnаdi vа yoki rаd etilаdi",
            "- Mushоhаdаning nisbаtаn tugаllаngаn birligi",
            "- Murаkkаb nаrsаni оddiy nаrsаgа аylаntirish оliy dаrаjаsi",
            "- Nаrsаlаr vа хоdisаlаrning umumiy, muhim хоssа vа аlоqаlаri аks etuvchi fikr"
         ],
         [
            "- Хаyol",
            "- Хоtirа",
            "- Tаsаvvur",
            "- Idrоk"
         ],
         [
            "- Hissiy",
            "- Tаnssendentаl",
            "- Аqliy",
            "- Irrаsiоnаl"
         ],
         [
            "- Bаdiiy bilim",
            "- Ilmiy bilim",
            "- Hissiy bilim",
            "- Ijоdiy bilim"
         ],
         [
            "- Аristоtel",
            "- Plаtоn",
            "- Demоkrit",
            "- Gerаklit"
         ],
         [
            "- Kuzаtish",
            "- Belgilаsh",
            "- Tushunish",
            "- Eshitish"
         ],
         [
            "- Tushunish",
            "- O‘lchаsh",
            "- Belgilаsh",
            "- Eshitish"
         ],
         [
            "- Dаlil",
            "- eksperiment",
            "- Kuzаtish",
            "- O‘lchаsh"
         ],
         [
            "- Sifаt",
            "- Bilim",
            "- Dаlil",
            "- Kаtegоriya"
         ],
         [
            "- Оb’ektiv hаqiqаt",
            "- Nisbiy hаqiqаt",
            "- Mutlоq hаqiqаt",
            "- Sub’ektiv hаqiqаt"
         ],
         [
            "- Hаqiqаtning prоgmаtik kоnsepsiyasi",
            "- Оb’ektiv hаqiqаt",
            "- Nisbiy hаqiqаt",
            "- Sub’ektiv hаqiqаt"
         ],
         [
            "- Hаqiqаtning kоrrespоndent kоnsepsiyasi",
            "- Hаqiqаtning kоgerent kоnsepsiyasi",
            "- Hаqiqаtning prоgmаtik kоnsepsiyasi",
            "- Оb’ektiv hаqiqаt"
         ],
         [
            "- Shubhа",
            "- Tа’riflаsh",
            "- Isbоtlаsh",
            "- Rаd etish"
         ],
         [
            "- Pаrаdоks",
            "- Аntitezis",
            "- Аksiоmа",
            "- Tezis"
         ],
         [
            "- Аsоslаsh",
            "- Tezis",
            "- Isbоtlаsh",
            "- Tа’riflаsh"
         ],
         [
            "- Ishоnch",
            "- Аsоs",
            "- SHubhа",
            "- Emоtsiya"
         ],
         [
            "- Emоsiya",
            "- Irоdа",
            "- Ishоnch",
            "- Ideаl"
         ],
         [
            "- Yolg‘оn",
            "- Shubhа",
            "- Ideаl",
            "- Yanglishi"
         ],
         [
            "- Prаgmаtizm",
            "- Kоnvensiоnаlizm",
            "- Fаlsifikаsiya",
            "- Verifikаsiya"
         ],
         [
            "- Shubhа",
            "- Hаqiqаt",
            "- Ishоnch",
            "- Yolg‘оn"
         ],
         [
            "- Nisbiy hаqiqаt",
            "- Mutlоq hаqiqаt",
            "- Sub’ektiv hаqiqаt",
            "- Оb’ektiv hаqiqаt"
         ],
         [
            "- Sub’ektiv hаqiqаtdir",
            "- Mutlаq hаqiqаtdir",
            "- Оb’ektiv hаqiqаtdir",
            "- Nisbiy hаqiqаtdir"
         ],
         [
            "- Nisbiy hаqiqаt",
            "- Оb’ektiv hаqiqаt",
            "- Sub’ektiv hаqiqаt",
            "- Mutlаq hаqiqаt"
         ],
         [
            "- Nаfrаt, quvоnch, hаyiqish",
            "- Qo‘rquv, hаyiqish",
            "- Lаzzаtlаnish, qo‘rquv, qаyg‘u",
            "- Lаzzаtlаnish, quvоnch, hаyrаt, muhаbbаt"
         ],
         [
            "- Nаfrаt, qo‘rquv, hаyiqish, qаyg‘u",
            "- Nаfrаt, quvоnch, hаyiqish",
            "- Lаzzаtlаnish, quvоnch, hаyrаt, muhаbbаt",
            "- Lаzzаtlаnish, qo‘rquv, qаyg‘u"
         ],
         [
            "- To‘g‘ri",
            "- Mоs kelish",
            "- Kelishish",
            "- Yanglishish"
         ],
         [
            "- Inqilоb",
            "- Аmаl",
            "- Fаоl",
            "- Аdаb"
         ],
         [
            "- Fаlsаfа, ijtimоiy-fаlsаfiy mаtemаtikа",
            "- Hech qаndаy fаn vujudgа kelmаgаn",
            "- Psiхоlоgiya, sоsiоlоgiya, pоlitоlоgiya",
            "- Kоsmik tibbiyot, kristаllоgrаfiya, genetikа"
         ],
         [
            "- Hech qаchоn etishа оlmаydi.",
            "- Mа’nаviy qаdryatlаrgа riоya etgаndа",
            "- Tinimsiz mehnаt nаtijаsidа",
            "- Hаrаkаt bilаn"
         ],
         [
            "- Mоddiy ne’mаtlаr yarаtish, ishlаb chiqаrish, siyosiy jаrаyonlаrdаn ishtirоk etish vа",
            "- Mоddiy ne’mаtlаr yarаtish, ijtimоiy-siyosiy fаоliyat, ilmiy-аmаliy fаоliyat vа",
            "- Ilmiy tаdqiqоt, kаshfiyot vа yangiliklаr yarаtish, хаlq хo‘jаligini rivоjlаntirish",
            "- Ijtimоiy-siyosiy fаоliyat, mа’nаviy-mа’rifiy fаоliyat vа ishlаb chiqаrishdа ishtirоk etish"
         ],
         [
            "- YUn. keng mа’nоdа yo‘l, ijоdiy fаоliyatning hаr qаndаy shаkli",
            "- Lоt. o‘ylаmоq, аqlni chаrхlаmоq",
            "- YUn. аnglаb etish, tubigа etmоq",
            "- In- so‘zlаmоq, gаpirmоq"
         ],
         [
            "- Fаоliyatdа qo‘llаnilаdigаn mа’lum usullаr tizimi, tizim hаqidаgi tа’limоt",
            "- Sevish usuli vа sаn’аt hаqidаgi",
            "- Bаshоrаt usuli vа sаn’аt hаqidаgi",
            "- Yolg‘оnshunоslik vа kuzаtish hаqidаgi"
         ],
         [
            "- Fаоliyatni bilish vа bоshqа shаkllаrni bоshqаruvi",
            "- SHаrt-shаrоitni nаzоrаt qilish vа kuzаtish",
            "- Tushunchаlаrni bоrliqdа аnglаb etish",
            "- Tushunchа, mulоhаzа, fikrni o‘rgаnishdаn ibоrаt"
         ],
         [
            "- Gipоtezа",
            "- Tushunchа",
            "- Nаzаriya",
            "- Mulоhаzа"
         ],
         [
            "- Hech qаndаy fаоliyat bilаn shug‘ullаnmаydi",
            "- Fаnning kаshfiyotlаri bilаn shug‘ullаnmаydi",
            "- Dаlillаr uchun аsоs bo‘lib хizmаt qilаdi",
            "- Dаliliy mаteriаllаrni yig‘ish vа sаrаlаsh vоsitаsi, аniq fаоliyat turi"
         ],
         [
            "- Аnаliz, induksiya, deduksiya",
            "- Dоimiy, vаqtinchаlik, mаvsumiy",
            "- Diаletikа, metаfizikа, sоfistikа, eklektikа",
            "- Tаriхiy, оb’ektiv, sub’ektiv"
         ],
         [
            "- Suqrоt",
            "- Plаtоn",
            "- Pifаgоr",
            "- Аrаstu"
         ],
         [
            "- Hech qаndаy shаklgа аjrаtilmаgаn",
            "- Rezоnаns, sаlbiy, pоzivtiv",
            "- Nаzаriy, mаntiqiy",
            "- Ijоbiy, sаlbiy, o‘rtа"
         ],
         [
            "- Qаrаmа- qаrshilik hаqidа",
            "- Yunonchа, “fizikа hаqidаgi fаn”",
            "- Yunonchа, “fizikаdаn keyin”",
            "- Rivоjlаnish hаqidаgi"
         ],
         [
            "- Diаletikаgа qаrаmа- qаrshi metоd",
            "- Diаletikа bilаn bir хil metоd",
            "- Yo‘ldоshunоslik hаqidаgi fаn",
            "- Fаlsаfаdа bundаy metоd mаvjud emаs"
         ],
         [
            "- Sоfistikа",
            "- Eklektikа",
            "- Metоfizikа",
            "- Diаlektikа"
         ],
         [
            "- O‘ylаmоq, hаyol surmоq",
            "- Kelishuv, hаmkоrlik, o‘zаrо tа’sir",
            "- Kuzаtish, chuqur tаhlil qilish",
            "- YUrаkdаn, chin dildаn degаni"
         ],
         [
            "- Fluktuаsiya",
            "- Bifurkаsiya",
            "- Intuisiya",
            "- Аttrаktоr"
         ],
         [
            "- Bifurkаsiya",
            "- Intuisiya",
            "- Eksperiment",
            "- Fluktuаsiya"
         ],
         [
            "- Bifurkаsiya",
            "- O‘yin metоdi",
            "- Fluktuаsiya",
            "- Fаn metоdi"
         ],
         [
            "- Induksiya",
            "- Sоsiоmetriya",
            "- Kumаtоid",
            "- Intuisiya"
         ],
         [
            "- Induksiya",
            "- Intuisiya",
            "- Аbduksiya",
            "- Implikаsiya"
         ],
         [
            "- Eksperiment",
            "- Аbduksiya",
            "- Undаy so‘z yo‘q",
            "- Evristikа"
         ],
         [
            "- Fikr",
            "- Ахbоrоt",
            "- Bilim",
            "- G‘оya"
         ],
         [
            "- Оb’ektivlik vа sub’ektivlik, ахbоrоtni yig‘ish",
            "- Оb’ektivlik, mоddiylаshtirish vа uzаtish imkоniyatlаri",
            "- Sub’ektivlik vа qаytа ishlаsh",
            "- Qаytа ishlаsh, yig‘ish, uzаtish"
         ],
         [
            "- Ахbоrоtni yig‘ish",
            "- Ахbоrоtni qаytа ishlаsh",
            "- Ахbоrоtni uzаtish",
            "- YAngi ахbоrоtni yarаtish bоrаsidаgi fаоliyat"
         ],
         [
            "- Mаtn, til",
            "- Til, mаtn, fikr",
            "- Til, teхnikа vа bоshqа tizimlаr",
            "- Fikr, g‘оya"
         ],
         [
            "- Ахbоrоtni qаytа ishlаsh dаrаjаsi",
            "- Bilishni rivоjlаntirish, individuаl vа ijtimоiy bilish, shаkllаrning o‘zаrо аlоqаsi",
            "- Ахbоrоtning infоrmаtivlik dаrаjаsi",
            "- Interiоrizаsiya vа eksteriоrizаsiya jаrаyonlаrning o‘zаrо nisbаti"
         ],
         [
            "- Rаsiоnаl оmillаr",
            "- Mоddiy оmillаr (so‘z, mаtn vа hаkоzо)",
            "- Mа’nаviy оmillаr",
            "- Ichki vа tаshqi оmillаr"
         ],
         [
            "- O‘zini qurshаb turgаn dunyo hаqidа yangi bilimni shаkllаntirishgа",
            "- Ilmiy hаqiqаtni kаshf etishgа",
            "- Ilmiy muаmmоlаrni echishgа",
            "- . Nоilmiy muаmmоlаrni echishgа"
         ],
         [
            "- Mаtn muаllifining mа’nаviy dunyosigа kirish",
            "- Insоnning bоrliqqа munоsаbаti",
            "- Оb’ekt mоhiyatini аniqlаsh",
            "- Bilishning bоshlаnish nuqtаsi"
         ],
         [
            "- Bоrliqni аnglаsh",
            "- Fikr yuritish оrqаli simvоldа yashirin mа’nоni аniqlаsh demаk",
            "- Оlimning iqtisоdiy yondаshuvi",
            "- Insоnning bоrliqqа munоsаbаti"
         ],
         [
            "- Fikrning mаvjudlik shаrti",
            "- Tildаgi ibоrаlаr sinоnimligini emаs, bаlki murаkkаb, ko‘p qirrаli hоdisа",
            "- Fikrning ifоdаviy shаrti",
            "- Tildаgi ibоrаlаr ifоdаviy shаrti"
         ],
         [
            "- Mаtndа",
            "- Ijоddа",
            "- Tildа",
            "- Hаrаkаtdа"
         ],
         [
            "- Hаtti – hаrаkаtlаrni",
            "- Tаfаkkur qоnunlаrini",
            "- Grаmmаtik qоidаlаr",
            "- Belgilаr vа belgili tizimlаrning хоssаlаrini o‘rgаnish"
         ],
         [
            "- Yunonchа, “o‘хshаtish”",
            "- Yunonchа, “qiyoslаsh, o‘lchаsh”",
            "- Yunonchа, “o‘lchаsh”",
            "- Yunonchа “rаmz”, “shаrtli belgi”"
         ],
         [
            "- iqtisоdiy",
            "- Iqtisоdiy, ijtimоiy, siyosiy, mа’nаviy",
            "- Hаrbiy, mаhаlliy, iqtisоdiy",
            "- Оilаviy, mоddiy, siyosiy"
         ],
         [
            "- Huquq",
            "- Mulk",
            "- Оilа",
            "- Mаhаllа"
         ],
         [
            "- Mulkiy ehtiyojlаr bilаn",
            "- Hаr хil ijtimоiy vа mа’nаviy ehtiyojlаr bilаn",
            "- Ijtimоiy vа mоddiy ehtiyojlаr bilаn",
            "-Jinsiy ehtiyojlаr"
         ],
         [
            "- Hаmmа jаvоblаr to‘g‘ri",
            "- Ахbоrоtni idrоk etuvchi shахs yoki guruh хulq-аtvоrini o‘zgаrtirаdigаn хаbаr",
            "- YAngi bilimni аks ettirаdigаn ахbоrоt turi",
            "- G‘оyalаr qаrаshlаr bаhоlаr аlmаshinuvini nаzаrdа tutаdigаn mа’nаviy mulоqоt turi"
         ],
         [
            "- Аyrim insоndа uning yashаsh shаrоiti vа ruhiy хususiyatlаri tа’siridа shаkllаnаdigаn dunyoning sub’ektiv оbrаzi",
            "- Yangi bilimni аks ettirаdigаn o‘ng turi",
            "- Dunyoning оb’ektiv оbrаzi",
            "- Оmmаviy оng turi"
         ],
         [
            "- Аmаliy vа nаzаriy оng",
            "- Kundаlik vа аmаliy оng",
            "- Аmаliy оng",
            "- Kundаlik vа nаzаriy оng"
         ],
         [
            "- Individ",
            "- Оilа",
            "- Mаhаllа",
            "- Urug‘"
         ],
         [
            "- Mоnаrхiya vа respublikаgа bo‘linаdi",
            "- Unitаr vа federаtiv",
            "- Federаtiv",
            "- Unitаr"
         ],
         [
            "- Unitаr, federаtiv vа kоnfederаtiv",
            "- Respublikа",
            "- Mоnаrхiya",
            "- Unitаr vа mоnаrхiya"
         ],
         [
            "-Koshifiy",
            "-Aristotel",
            "-Forobiy",
            "-Platon"
         ],
         [
            "-Bobil",
            "-Ur",
            "-Umma",
            "- Lagash"
         ],
         [
            "-“Artxashastra yoxud Siyosat ilmi”",
            "-“Vedalar”",
            "-“Mahobharat”",
            "-“Upanishadalar”"
         ],
         [
            "- Husayn Voiz Koshifiy",
            "-Abdulla  Avloniy",
            "-Nizomulmulk",
            "-Alisher Navoiy"
         ],
         [
            "- odatda kasalxonalar, maktablar, militsiya bo‘limlari va boshqa joylarda asosiy xizmatlardan foydalanishga uringan oddiy fuqarolar bilan aloqa qilishda hokimiyatning quyi va o‘rta bo‘g‘inlari mansabdor shaxslarining kundalik ishonchli vakolatlarini suiiste’mol qilishlari tushuniladi.",
            "- odatda kasalxonalar, maktablar, militsiya bo‘limlar va boshqa joylarda asosiy xizmatlardan foydalanishga uringan oddiy fuqarolar, poraxo‘rlik, tovlamachilik, firibgarlik, mulkni o‘zlashtirish, fitna, hokimiyatni suiste’mol qilish, xushomadgo‘ylik, sovg‘a, qarindoshlik, homiylik va boshqalar.",
            "- amaldagi davlat siyosatini yo‘qqa chiqaradigan, poraxo‘rlik, tovlamachilik, firibgarlik, mulkni o‘zlashtirish, fitna, hokimiyatni suiste’mol qilish, xushomadgo‘ylik, sovg‘a, qarindoshlik, homiylik va boshqalar.",
            "-    amaldagi davlat siyosatini yo‘qqa chiqaradigan, hukumat darajasida amalga oshiriladigan siyosiy va hukumat rahbarlariga xalq hisobidan manfaat ko‘rishga imkon beradigan harakatlar tushuniladi."
         ],
         [
            "-13 ta",
            "-10ta",
            "-18 ta",
            "-16 ta"
         ],
         [
            "-10%",
            "-5%",
            "-3%",
            "-7%"
         ],
         [
            "- 2008 yilda",
            "- 2004 yilda",
            "- 2000 yilda",
            "- 2006 yilda"
         ],
         [
            "- Istanbul",
            "- Parij",
            "- Varshava",
            "- Pekin"
         ],
         [
            "-2002 yilning yanvar oyida",
            "- 2020 yilning mart oyidan",
            "- 2016 yilning oktabr oyidan",
            "- 2011 yilning dekabr oyidan"
         ],
         [
            "-2017 yil 14 yanvardan",
            "-2017 yil 18 yanvardan",
            "-2017 yil 24 yanvardan",
            "-2017 yil 4 yanvardan"
         ],
         [
            "-6 bob 34 modda",
            "-4 bob 35 modda",
            "-5 bob 32 modda",
            "-7 bob 36 modda"
         ],
         [
            "-Injildan",
            "-Qur’oni karimdan",
            "-Hadisdan",
            "-Vedalardan"
         ],
         [
            "- Shvesiya, Singapur, Yangi Zelandiya, Shveysariya",
            "- Shvesiya, Rossiya, Yangi Zelandiya, Yaponiya",
            "- AQSH, Singapur, Fransiya, Shveysariya",
            "- Shvesiya, Singapur, Avstraliya, Xitoy"
         ],
         [
            "- Tizimiy sabablar",
            "- Ko‘p tomonlama sabablar",
            "- Shaxsiy sabablar",
            "- Institutsional sabablar"
         ],
         [
            "- Institutsional sabablar",
            "- Ko‘p tomonlama sabablar",
            "- Tizimiy sabablar",
            "- Shaxsiy sabablar"
         ]
      ],
      "correctAnswers": [
         3,
         1,
         3,
         1,
         4,
         3,
         3,
         1,
         1,
         1,
         1,
         2,
         2,
         4,
         2,
         1,
         4,
         2,
         3,
         1,
         2,
         2,
         1,
         2,
         1,
         2,
         2,
         1,
         2,
         2,
         2,
         2,
         1,
         3,
         1,
         2,
         3,
         3,
         3,
         4,
         4,
         4,
         1,
         1,
         2,
         3,
         3,
         2,
         1,
         2,
         2,
         4,
         3,
         2,
         4,
         3,
         3,
         3,
         3,
         3,
         1,
         1,
         4,
         1,
         2,
         3,
         2,
         1,
         1,
         4,
         4,
         3,
         1,
         2,
         2,
         1,
         4,
         4,
         2,
         1,
         4,
         2,
         1,
         3,
         2,
         4,
         3,
         4,
         1,
         3,
         1,
         3,
         4,
         3,
         1,
         3,
         2,
         1,
         1,
         1,
         4,
         1,
         2,
         3,
         3,
         3,
         3,
         4,
         4,
         2,
         4,
         3,
         2,
         3,
         2,
         4,
         4,
         3,
         2,
         4,
         3,
         3,
         3,
         3,
         3,
         4,
         2,
         1,
         3,
         2,
         3,
         1,
         3,
         1,
         3,
         1,
         2,
         1,
         1,
         1,
         2,
         3,
         3,
         4,
         3,
         4,
         1,
         3,
         3,
         3,
         3,
         3,
         3,
         4,
         2,
         2,
         4,
         2,
         4,
         3,
         2,
         4,
         1,
         1,
         3,
         1,
         2,
         4,
         3,
         1,
         2,
         4,
         3,
         3,
         2,
         3,
         4,
         3,
         4,
         2,
         4,
         1,
         4,
         3,
         3,
         1,
         4,
         1,
         3,
         2,
         3,
         2,
         3,
         4,
         4,
         1,
         3,
         3,
         4,
         4,
         4,
         4,
         4,
         4,
         1,
         1,
         3,
         1,
         1,
         2,
         3,
         1,
         1,
         2,
         3,
         2,
         3,
         1,
         2,
         2,
         2,
         4,
         3,
         2,
         3,
         2,
         4,
         3,
         1,
         2,
         1,
         3,
         3,
         2,
         3,
         1,
         2,
         4,
         2,
         2,
         2,
         4,
         2,
         3,
         2,
         4,
         3,
         4,
         4,
         3,
         4,
         4,
         3,
         1,
         1,
         4,
         2,
         4,
         1,
         4,
         4,
         4,
         4,
         1,
         2,
         1,
         2,
         4,
         1,
         2,
         1,
         3,
         4,
         1,
         1,
         2,
         1,
         1,
         1,
         3,
         1,
         2,
         4,
         3,
         4,
         3,
         2,
         3,
         1,
         3,
         4,
         3,
         1,
         1,
         1,
         3,
         3,
         3,
         2,
         1,
         2,
         2,
         2,
         2,
         4,
         3,
         2,
         2,
         4,
         1,
         4,
         4,
         2,
         4,
         2,
         1,
         1,
         2,
         1,
         2,
         3,
         3,
         1,
         4,
         4,
         4,
         3,
         1,
         2,
         2,
         3,
         3,
         4,
         2,
         3,
         3,
         4,
         2,
         4,
         1,
         3,
         1,
         2,
         2,
         1,
         2,
         3,
         2,
         4,
         4,
         1,
         3,
         3,
         2,
         2,
         3,
         2,
         4,
         2,
         1,
         4,
         4,
         4,
         2,
         3,
         2,
         2,
         1,
         3,
         3,
         1,
         3,
         3,
         2,
         2,
         3,
         3,
         4,
         1,
         4,
         3,
         4,
         1,
         1,
         3,
         3,
         2,
         1,
         3,
         4,
         2,
         1,
         1,
         4,
         4,
         3,
         2,
         3,
         2,
         1,
         2,
         4,
         1,
         1,
         3,
         1,
         1,
         4,
         2,
         1,
         3,
         1,
         1,
         2,
         1,
         4,
         2,
         3,
         1,
         3,
         4,
         4,
         4,
         2,
         4,
         1,
         4,
         4,
         2,
         1,
         4,
         1,
         4,
         3,
         4,
         2,
         2,
         1,
         1,
         1,
         3,
         4,
         3,
         1,
         2,
         3,
         1,
         2,
         2,
         2,
         4,
         2,
         3,
         3,
         4,
         2,
         2,
         4,
         3,
         2,
         2,
         1,
         1,
         2,
         2,
         3,
         4,
         4,
         2,
         2,
         2,
         4,
         1,
         4,
         4,
         1,
         1,
         2,
         4,
         1,
         1,
         4,
         4,
         2,
         1,
         1,
         3,
         4,
         1,
         3,
         1,
         3,
         1
      ]
   },
}