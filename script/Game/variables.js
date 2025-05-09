const realSciences = [
   'Pedagogika', 'Pedagogika2'
]

const ALL_QUESTIONS = {
   Pedagogika: {
      "questions": [
         "Didaktik o'yin manbasiga ko'ra qanday ta'lim metodi sanaladi?",
         "Davlat ta'lim standarti o'zida o'quv rejaning qaysi turini aks ettiradi ?",
         "Bevosita o'qituvchi rahbarligida aniq belgilangan vaqt davomida muayyan o'quvchilar guruhi bilan olib boriladigan ta'lim jarayonining asosiy shakli nima deb ataladi?",
         "Dars loyihasini boshqa qanday nom bilan atash mumkin?",
         "O'qituvchi axloqiy – ma’naviy qiyofasini namoyon etuvchi me'yor tuyg'usi yoki xulq va odob qoidalariga rioya qilishi nima deyiladi ?",
         "Muloqotning umumiy jarayoni ko'rsating .",
         "O'qituvchi tomonidan tashkil etiladigan pedagogik mehnat,faoliyat jarayonida bajarilishi shart bo'lgan vazifalar nima deyiladi ?",
         "Mahorat so'zining ma'nosi nima ?",
         "Pedagogning o’z ustida ishlashi necha bosqichda amalga oshadi ?",
         "Muloqot tarkibida so'zli,g'oyaviy ma'lumotlarni so'zsiz vositalar bilan birgalikda uzatilish tizimi nima deyiladi ?",
         "V.A.Krutetskiy pedagogga xos qobiliyatlarni umumlashtirib,ularni nechta turda ekanligini ko'rsatib bergan ?",
         "Pedagogik qobiliyat turlari umumiy olganda nechtaga bo’linadi ?",
         "Pedagogik jarayonning qanchalik samarali va muvaffaqiyatli bo'lishi quyidagilarning qaysi biriga bog'liq ?",
         "Pedagogik muloqotning nechta turi farqlanadi ?",
         "Dars necha bosqichdan iborat ?",
         "Qaysi ta'lim tizimi garchi 350 yil avval asoslangan bo'lsada, bugungi kunda ham keng ko'lamda qo'llanilmoqda ?",
         "Kerakli so'zni topib qo'ying. Tarbiya metodlari – bu tarbiya …amalga oshirish....",
         "Quyidagi metodlardan qaysilari ongni shakllantirish metodlariga kiradi:",
         "Mashq, o'rgatish, tarbiyaviy vaziyat tarbiyaning qaysi metodlariga kiradi ?",
         "Quyidagilardan qaysi biri yuqori darajada uyushgan jamoa hisoblanadi ?",
         "Bolalar jamoasi shakllanishining qaysi bosqichida jamoa faoli butun jamoafa nisbatan talab qo'yadi ?",
         "Vatanparvarlik tarbiyasida… o'rganish bo'yicha ishlarni tashkil etish muhim rol o'ynaydi.",
         "Tarbiyachi o'zi xohlagan sifatlarni tarbiyalanuvchilar ongiga singdirish uchun ularning ruhiyatiga ma‟lum maqsadga ko'ra tizimli ta‟sir ko'rsatishiga nima deb aytiladi ?",
         "Estetik tarbiyaning asosiy vositalarini aniqlang.",
         "Kooperativ ta'lim bu - ....."
      ],
      "answers": [
         ["- og’zaki", "- sayohat", "- ko’rgazmali", "- amaliy"],
         ["- Namunaviy o’quv rejani", "- Ishchi o’quv rejani", "- O’quv dasturini", "- Tayanch o’quv rejani"],
         ["- Uy-vazifasi", "- To’garak", "- Ekskursiya", "- Dars"],
         ["- Boshqaruv apparati", "- Boshqaruv tamoyili", "- Boshqaruv dasturi", "- Boshqaruv obekti"],
         ["- Pedagogic madaniyat", "- Pedagogic odob", "- Pedagogic mahorat", "- Pedagogic nazokat"],
         ["- Ta’sir etish va ma’qullash usuli", "- O’quvchilarni do’stona munosabati", "- Muloqotni ijtimoiy hayot qonuniyatlari", "- Ishonchni qozonish usuli"],
         ["- Pedagogic madaniyatga qo’yiladigan talablar", "- Pedagogic muloqotga qo’yiladigan talablar", "- Pedagogic odobga qo’yiladigan talablar", "- Pedagogic mahoratga qo’yiladigan talablar"],
         ["- Mohirlik", "- epchillik", "- ustalik", "- Barcha javoblar to’g’ri"],
         ["- 3", "- 2", "- 4", "- 5"],
         ["- Nutq", "- Ko’z qarashlar bilan tashkil etiladigan aloqa", "- Paralingvistik", "- Ekstralingvistik"],
         ["- 5", "- 3", "- 7", "- 9"],
         ["- 4", "- 3", "- 2", "- 6"],
         ["- Jamoa bilan ishlashga", "- Nutq texnikasiga", "- Pedagogic madaniyatga", "- Pedagogic qobiliyatga"],
         ["- 3", "- 2", "- 4", "- 5"],
         ["- 9", "- 3", "- 5", "- 7"],
         ["- Maruza-seminar", "- Individual", "- Sinf dars", "- Jomoaviy"],
         ["- Aniqlik, qism", "- Usuli, qismi", "- Yig’indisi, usuli", "- Maqsadi,yo’li"],
         ["- 1,3,5", "- 2,4,5", "- 1,2,5", "- 3,4,5"],
         ["- Faoliyatni tashkil etish", "- Rag’batlantirish", "- Ongni shakllantirish", "- Nazorat"],
         ["- O’quvchilar jamoasi", "- Mahalla jamoasi", "- Zavod jamoasi", "- O’qituvchilar jamoasi"],
         ["- 3", "- 2", "- 1", "- 4"],
         ["- Davlat hujjatlarini", "- Qonun va qarorlarni", "- Davlat ramzlarini", "- Badiiy adabiyotlarni"],
         ["- Tarbiya", "- Rivojlanish", "- Ta’lim", "- Ma’lumot"],
         ["- Kitob,rasm,maket", "- Tabiat,mehnat,badiiy adabiyot", "- Konkurslar,viktorinalar,seminarlar", "- To’garaklar,ijodiy birlashmalar,maktab bayramlari"],
         ["- Barcha javoblar to’g’ri", "- Raqobatga qaratilgan ta’lim", "- Jamoalarda ishlash", "- Individual ishlash"]
      ],
      "correctAnswers": [
         4, 4, 4, 3, 4, 4, 3, 4, 4, 3, 3, 4, 4, 4, 4, 3, 4, 1, 1, 1, 2, 3, 1, 2, 3
      ]
   },
   Pedagogika2: {
      "questions": [
        "Qaysi pedagogik muloqot uslubida pedagog pedagogik faoliyatni tashkil etishda jamoaning fikriga tayanib ish ko'radi?",
        "Barcha turdagi faoliyatni tashkil etilishi,mazmuni,shakli,metod va vositalarining barchasi faqat pedagog tomonidan belgilanadigan pedogogik muloqot uslubini ko'rsating?",
        "Quyidagilar orasidan pedagogik muloqot uslubini ko'rsating?",
        "Pedagogik muloqotning nechta turi farqlanadi?",
        "Ekstralingvistik tizm haqida to'g'ri ma'lumotlarni aniqlang.",
        "Paralingvistik tizim haqida to'g'ri fikrni aniqlang.",
        "Belgilarning optik kinetik tizmiga nimalar kiradi?",
        "Muloqot jarayonida axborot almashish vazifasining hal qilinishini nechta vositasi mavjud?",
        "Pedagogik muloqot jarayonining asosiy vazifalarini ko'rsating?",
        "Pedagogik muloqotning nechta asosiy yo'nalishi mavjud?",
        "O‘qitish faoliyati tarkibini to‘g‘ri aniqlang:",
        "Metodologiya- qanday ta’limot?",
        "O‘rganilayotgan kishi berayotgan ma’lumotlar diagnostikaning maqsadiga mos kelishi nima deyiladi?",
        "Korreksion pedagogika fanining qanday tarmoqlarini bilasiz?",
        "Pеdаgоgik qоbiliyatning sifаtlаri keltirilmagan qatorni toping ?",
        "Pеdаgоgik mаhorat tizimigа qaysilаr kirаdi?",
        "Didaktik jarayon kechadigan barcha sharoitlarni oydinlashtirish, uning natijalarini belgilash bu-....",
        "Ta’lim jarayonida qo‘llaniladigan ko‘zgazmali qurollar va texnika vositalariga ko‘p darajada bog‘liq bo‘lgan o‘quv materialini o‘zlashtirish metodi qaysi bandda ko‘rsatilgan?",
        "Bola tarbiyasida eng muhim ijtimoiy nazorat instituti nima?",
        "Tarbiya metodlari ta`rifi qaysi qatorda keltirilgan?",
        "Darslarning majburiy elementini ko'rsating?",
        "Qaysi dars turida o'zlashtirilgan bilimlarni tekshirish,ko'nikma va malakalarni shakllanganlik darajasini belgilab olish mumkin?",
        "Qaysi dars turida o'quvchilar tamonidan o'zlashtirilgan bilimlarning mavjud kamchiliklari to'ldiriladi va o'rganilayotgan yangi mavzuni muhim g'oyalari ochib beriladi?",
        "Qaysi dars turida o'qituvchi rahbarligida o'quvchilar mustaqil ish olib boradilar,o'qituvchi darsning tuzilishini va olib borilishini ta'minlaydi?",
        "Kombinatsiyalashgan yoki murakkab tuzilishga ega bo'lgan dars turini aniqlang?",
        "Ta'lim jarayonida darsning nechta turi qo'llaniladi?",
        "O'qituvchining individual nutq madaniyati xususiyatlarini ko'rsating?",
        "Kommunikativ refleksiya shaxsiy refleksiyaning mazmunini,tizimini va aynan bir xilligini belgilaydi degan fikr muallifini aniqlang .",
        "O’qituvchining o’z potensial imkoniyatlarini baholash diagnostika davomida har qanday holatda ham e’tiborga olinishi lozimligini ta’kidlagan olimni aniqlang ?",
        "Refleksiyani insonning “ijobiy faoliyatlari majmuasi” nuqtai nazaridan o’rganishni taklif etgan olimni ko’rsating ?",
        "Pedagogik vazifalarga faol munosabatning zarur sharti bo’lgan qanday vazifa ijobiy rol o’ynaydi ?",
        "O’qituvchi yangi mavzuga oid faktlar va mulohazalarni keltirdi hamda ularga doir savollar bilan murojaat qildi.Bunda o’quvchida qanday ko’nikma turi shakllantiriladi ?",
        "Maktabda ta’lim sifatini aniqlash uchun monitoring o’tkazish rejalashtirildi.Uning vazifalari to’g’ri ko’rsatilgan variantlarni belgilang. 1.Ta’lim sifati,uni tahlil qilish va baholash haqida kerakli va yetarli ma’lumotlarni to’plash 2.Sifatli ta’lim uchun ijtimoiy buyurtmaning bajarilishini nazorat qilish. 3.Ta’lim jarayoni ishtirokchilariga rag’batlantiruvchi va motivatsion ta’sirni tashkil etish. 4.Ta’lim jarayoni ishtirokchilarining ijtimoiy hatirjamligi to’g’risidagi ma’lumotlarni yig’ish . 5.Ta’limni yanada rivojlantirish prognozi va zarur tuzatishlar kiritish bo’yicha tavsiyalar ishlab chiqish",
        "Yosh mutaxassis yangi mavzuni tushuntirib bo’lgach,o’quvchilarning quyidagi savoliga duch keldi : “Bularning bizga nima keragi bor?Biz bu narsani o’rganishni xohlamaymiz”. Bu holatda o’qituvchi o’quv jarayonining qaysi tarkibiy qismlarini to’liq amalga oshirmagan ? 1.maqsad 2.mazmun 3.nazorat qilish 4.baholash",
        "O’quvchiga amaliy topshiriqni bajarish uchun muayyan vazifa va uni amlga oshirish shartlari belgilab berildi.O’quvchi o’z faoliyatini shunga muvofiq rejalashtirdi.Shunda o’qituvchi o’quvchining ijodkorligini rivojlantirish uchun qanday ta’lim turidan foydalandi ?",
        "O’qituvchi muayyan mavzu bo’yicha o’quvchilarga tayyor bilimlarni taqdim etib,so’ng mustahkamlash,umumlashtirish,tizimlashtirish va nazorat qilish jarayonini tashkil etdi.Bu jarayon qanday ta’lim turiga taalluqli ?",
        "O’quvchiga amaliy topshiriqni bajarish uchun muayyan vazifa va uni amlga oshirish shartlari belgilab berildi.O’quvchi o’z faoliyatini shunga muvofiq rejalashtirdi.Bu qaysi faoliyat turiga kiradi ?",
        "O'qituvchi individual nutq madaniyatining nechta asosiy xususiyatlari bor?",
        "M.Rokich inson qadriyatlariga necha xil ta'rif beradi?",
        "Tarbiya tamoyillari nechta?",
        "Bu bir tomondan, ijtirnoiy hodisa sifatida tarbiyaning xususiyatlari, ikkinchi tomondan, shaxsning rivojlanishi bilan bog`liq bo`lgan barqaror aloqalar yig`indisi” ushbu ta`rif qaysi tushunchaga nisbatan qo`llanilgan?",
        "Tarbiya maqsadi qaysi qatorda keltirilgan?",
        "Fanlar bo`yicha taqvim-mavzu rejalarini tasdiqlashga tavsiya etish ushbu vazifa qaysi birlashmaga tegishli?",
        "Qaysi qatorda pedagogik kengashning vazifalari keltirilgan?",
        "Pedagogik kengash huquqlari qaysi qatorda keltirilgan?",
        "Qobiliyatni ilk va boshlang‘ich tarkibiy qismini toping?",
        "…- ta`lim muasasasasining boshqaruv organi. Nuqtalar o`rnidagi so`zni toping?",
        "Boshqaruv metodlari nechta?",
        "Boshqaruvning nechta funksiyasi mavjud?",
        "Kadrlar tayyorlash tizimining bosh subyekti va obyekti qaysi qatorda keltirilgan?",
        "Kadrlar tayyorlash milliy dasturining 5 ta tarkibiy qismi qaysi qatorda keltirilgan?",
        "Ushbu metod respondentlar tomonidan muayyan fan sohasi yoki faoliyat (shu jumladan, kasbiy faoliyat) bo`yicha o`zlashtirilgan nazariy bilim va amaliy ko`nikma, malakalar darajasini aniqlashga xizmat qiladi. Ta`rif etilgan metod qaysi qatorda berilgan?",
        "Pedagogikaning boshqa fanlar bilan aloqadorligi mavjud bo`lmagan fan qaysi qatorda keltirilgan?",
        "\"Ta`lim-tarbiya natijasida o`zlashtirilgan va tizimlashtirilgan bilim, hosil qilingan ko`nikma va malakalar hamda tarkib topgan dunyoqarash majmui.” ushbu ta`rif quydagi keltirilgan tushunchalardan qaysi biriga tegishli?",
        "\"Muayyan harakat yoki faoliyatni bajarishning avtomatlashtirilgan shakli” ushbu ta`rif quydagi keltirilgan tushunchalardan qaysi biriga tegishli?",
        "Pedagogikanig asosiy kategoriyalaridan biri bo`lgan tarbiyaga qaysi qatorda to`g`ri ta`rif berilgan?",
        "Pedagogika fanining predmeti …..",
        "Pedagogika fanining obyekti qaysi qatorda keltirilgan?",
        "Ta`lim va tarbiya jarayonini yaxlitlikda o`rganadigan fan sohasi” ushbu ta`rif qaysi fanga nisbatan qo`llanilgan?",
        "Pedagogik faoliyatning umumiy didaktik tamoyillari nechta?",
        "Oshkoro yoki yashirin,individga yoki guruhga xos bo'lgan orzu istak haqidagi tasavvur bo'lib,ular tomonidan kasbiy faoliyat yuzasidan bajarilayotgan mehnat turlarini,vositalarini va maqsadlarini tanlashga tas'ir ko'rsatadi.Bu - .....",
        "O'qituvchi mehnatida pedagogik faoliyat tizmini bezaydigan qadriyatlarni aniqlang?",
        "O'qituvchi mehnatini bezaydigan qadriyatlarni ko'rsating?",
        "O'qituvchi mehnatini bezaydigan qadriyatlar tizimi nechta?",
        "\"Ilmning foydasi ochko'zlik bilan oltin,kumush to'plash uchun bo'lmay,balki u orqali inson uchun zarur narsalarga ega bo'lishdir\"degan allomani ko'rsating?",
        "Ko'p yillik ilmiy tadqiqotlar natijasi o'qituvchining o'rtacha yoshiga nisbatan mehnat layoqatini oshirishda nechta holatga jiddiy e'tibor berish kerakligi aniqlangan?",
        "Pedagogika fanlar tizimiga kirmaydigan fan qaysi qatorda keltirilgan?",
        "Pеdagogik tеxnologiyaning eng asosiy xususiyati nimadan iborat?",
        "Ayniqsa, so‘nggi vaqtlarda ta’limga doir muammolarni tahlil etishda qaysi atamalardan keng foydanilmoqda.",
        "Pedagogik qobiliyatlarni rivojlantirish shakllarini aniqlang?",
        "Pedagogik qobiliyatni rivojlantirish metodlarini aniqlang?",
        "Pedagogik qobiliyatni rivojlantirish metodlarini aniqlang?",
        "Pedagogik qobilyatni rivojlantirish shakllarini aniqlang?",
        "Pedagogik qobiliyatni rivojlantirishning nechta metodi bor?",
        "“Ilm insonlarning madori, hayoti, porloq kelajagi, rahbari, najotiga aylangan. Ilm inson uchun g’oyat oily va muqaddas fazilat.” Ilmga berilgan ushbu ta’rif muallifi kim?",
        "Pedagogik tasir ko’rsatishning asosiy usullarini ko’rsating .",
        "O’qituvchinng o’quvchilar bilan muloqot jarayonida paydo bo’ladigan turli ziddiyatli vaziyatlarni bartaraf etish uchun…..?",
        "Muloqotning interaktiv jihati-....",
        "\"Tarbiyachi o`zini shunday tutish kerakki, uning har bir harakati tarbiyalasin va har doim o`zining nimani xoxlaganligini va nimani xoxlamasligini bilishi zarur. Agar tarbiyachi buni bilmasa, u kimni tarbiyalay oladi”, degan fikr muallifi.",
        "O’quv faoliyatini boshqarish haqidagi sohalar quyidagi javoblarning qaysi birida to’g’ri ko’rsatilgan?",
        "....-shaxsga xos individual xususiyatlarni shunday turi bo'lib,u juda kam sonli shaxslardagina kuzatiladi va ko'pincha uchraydigan psixologik hodisa sanalmaydi.",
        "Quyidagilarning qaysi birida didaktik qobiliyat namoyon bo'ladi?",
        "Konstruktiv qobiliyat quyidagilarni qaysi birida namoyon bo'ladi?",
        "O'qituvchini anglash qobiliyatiga ega ekanligi quyidagilardan qaysi birida namoyon bo'ladi?",
        "Bilish qobiliyati ega o'qituvchilarda namoyon bo'ladigan jihatni ko'rsating?",
        "O'qituvchining talabalar,ota onalar,hamkasblar va ta'lim muassasasining rahbarlari bilan oson muloqotga kirishish individual xususiyati?",
        "“Ta'lim jarayonining umumiy asosiy maqsadini belgilab olish “ ta'lim jarayonini texnologik loyihalashning nechanchi bosqichi hisoblanadi?",
        "Ta'lim jarayonini real muayyan bosqichlarga bo'lish,har bir bosqich uchun xususiy maqsadlarni belgilab,asosiy maqsadni amalga oshirish yo'lida juziy maqsadlarni ham hal etish texnologik loyihalashning nechanchi bosqichi hisoblanadi?",
        "O'quvchilar bilim darajasini oldindan tashxis ta'lim jarayonining texnologik loyihalashning nechanchi bosqichida amalga oshiriladi?",
        "Ta'lim jarayonining texnologik loyihakash nechta bosqichdan iborat?",
        "\"Ta'lim texnologiyasi\"nechta bosqichda shakllangan?",
        "O'qituvchining qaysi ijodkorligida ijtimoiy ahamiyatga ega bo'lgan yangi nazariyalar yaratish mujassamlashgan bo'ladi?",
        "O'quv mashg'ulotlari yoki tarbiyaviy tadbirlarni metodik jihatdan to'g'ri tashkillashtirish kabi individual psixologik xususiyatni ko'rsating?",
        "Ta'lim tarbiya jarayonining mohiyati va qonuniyatlari,kutiladigan natijalarni anglashga",
        "Pedagogik texnologiyaning didaktik maqsadlari bu - ...",
        "O’qitishning jarayonini tashkil etishda bir muncha keng tarqalgan yondashuvlarni belgilang.",
        "O’quvchining o’quv-bilim faoliyati tuzilmasi.",
        "Mutahassis sifatida o'qituvchilarda nomoyon bo'lib,ta'lim va tarbiya jarayonlarini pedagogik talablarga muvofiq tashkil eta olish,o'quvchilar jamoasini samarali boshqarishni ta'minlovchi individual psixologik xususiyatini aniqlang?",
        "Intuatsiya ma'lum belgilarga qarab oddiy mulohazalardan farq qiladi.Ushbu farqlarni aniqlang?",
        "Talabalarning ichki holatini,o'y - fikrlarini va his - tuyg'ularini tushuna olish perseptiv qobiliyatning qaysi asosiy turiga kiradi?",
        "Didaktik jarayon strukturasi ...",
        "«Shaxsga yo’naltirilgan ta’lim» texnologiyasi muallifi?",
        "Ijodiy faoliyatni rivojlantirish metodlari kimlar tomonidan ishlab chiqilgan?",
        "Seminar mashg’ulotining eng muhim bosqichi nima?",
        "O’quv faoliyatini boshqarish haqidagi sohalar quyidagi javoblarning qaysi birida to’g’ri ko’rsatilgan?",
        "Texnologik sub’ekt nima?",
        "Texnologiyalashtirish nima?",
        "Mantiqiy bog'lanmagan yoki mantiqiy xulosaga kelish uchun dalillar yetarli bo'lmaganda chuqur mulohaza yuritish asosida masalani yechishning tarkibini bo'lgan unumli ijodiy fikrlash nima deyiladi?",
        "Perseptiv qobiliyatning o'zida mujassam qilgan sezgirlik turlarini aniqlang?",
        "Jamoani jipslashtira olish,pedagogik faoliyatni to'g'ri tashkillashtirishga yordam beradigan qobiliyat turi?",
        "Abdullajon Abdullayev 57-maktabning 9-A -sinf sinf rahbari. 9-A_sinf o'quvchilari tadbirlarda ajoyib chiqishlar qiladi,birgalikda sinf rahbari bilan sayohatlarga va ekskursiyalarga chiqishadi.Sinf rahbarida qaysi qobiliyat yaxshi shakllangan deb o'ylaysiz",
        "Yangilik kiritishning muhim sharti nima?",
        "Yangilik kiritishning ijtimoiy-psixologik aspekti qaysi olim tomonidan ishlab chiqilgan?",
        "Talabalarga hissiy irodaviy ta'sir etish orqali ular o'rtasida obro' orttirish imkoniyatini yaratuvchi qobilyatni aniqlang?",
        "O'quvchilarni vaqtinchalik psixik holatlari bilan bog'liq nozik jihatlarni tushuna olish qobilayatini belgilang?",
        "O'quv materiallarini aniq, ravshan,oson tushuntirish,talabalarda fanlarga qiziqish uyg'otish,mustaqil fikrlash ko'nikmalarini shakllantiruvchi qobiliyat turi?",
        "Fanlar asosini puxta o'zlashtirishga yordam beradigan qobiliyat turini aniqlang?",
        "Innovatsiya jarayoni qaysi bosqichlarni qamrab oladi?",
        "Oliy maktab pedagogikasining bosh muammosi nima?",
        "Talabalar bilan birgalikda maqsadga muvofiq o'zoro pedagogik aloqa bog'lovchi pedagogik takning mavjudligini ifodalovchi qobilyatni ko'rsating?",
        "Pedagogning talabalar shaxsini tarbiyaviy jihatdan loyihalashtirishda o'z hatti harakatlari natijalarini oldindan ko'ra olishini ta'minlovchi qobiliyat?",
        "Rivojlangan aqlning eng oliy shakli nima?",
        "Talabaning aqliy faoliyati xususiyatlari qanday belgilanadi?",
        "O’spirinlik davri xususiyatlari tahlilida qaysi sifat alohida ahamiyat kasb etadi?",
        "Shaxs rivojlanishiga yaxlit holda qaraydigan personologik yo’nalish vakillarini ko’rsating?",
        "Bilish faoliyatining faol qo’zg’atuvchilari ko’rsatilgan to’g’ri qatorni ko’rsating?",
        "Bilish faoliyati masalalari qaysi psixolog va pedagog olimning ijodida yoritib berilgan?",
        "X.X.Platev qaysi sharq allomasining ilmiy g’oyalarini umumlashtirib bilish to’g’risidagi nazariyani asoslab bergan?",
        "“Bizning Pedagogik ishda hamma narsani oxir-oqibat mahorat hal etadi” degan fikr muallifi kim ?",
        "Bilish jarayoniga alohida ahamiyat berib, insonlarning bilishga bo’lgan intilishlarini keng yoritgan alloma asari bilan ko’rsating?",
        "Didaktikaga oid adabiyotlarda o’qitish metodlarining qaysi bog’liqliklari qayd qilinadi?",
        "O’quv-bilish faoliyatini tashkil etish va amalga oshirish metodlarini ko’rsating?",
        "Pedagogikaga oid adabiyotlarda mustaqil ishlarning qaysi turlari qayd qilingan?",
        "Oliy ta’lim necha bosiqchdan iborat ?",
        "Pedagog uchun eng zarur nutq madaniyatini belgilang?",
        "Talabalarga hissiy - irodaviy ta'sir etish orqali ular o'rtasida obro' qozonish imkoniyatini yaratuvchi qobiliyatni ko'rsating?",
        "O'quv materiallarni aniq,ravshan,oson tushuntirish qaysi pedagogik qobiliyatga kiradi?",
        "Zamonaviy sharoitda har bir o'qituvchi o'zida nechta pedagogik qobiliyatlarni shakllantirishi kerak?",
        "Pedagogik qobiliyatning asosiy turlari nechta ? (V.A.Kuretskiy bo'yicha)",
        "Pedagogning umumiy madaniyati nimalardan iborat?",
        "Masofadan o’qitishning tashkiliy-iqtisodiy afzalligi nimadan iborat?",
        "Masofadan o’qitishning afzallik tomonlari?",
        "Masofadan o’qitish uslubiy materiallari?",
        "Internet, yoki biror bir kommunikativ moslama (masalan lakal) tarmoq orqali sizga qulay bo’lgan vaqtda o’qitishga nima deb ataladi?",
        "«LEKTOR» qanday tizim?",
        "Maxsus qobiliyat turini ko'rsating?",
        "Pedagogning talabalar,ularning ota - onalari,pedagogik jamoa,shuningdek,jamiyat tomonidan e'tirof etilgan axloqiy maqomi pedagogik odobning qaysi asosiy shaklini belgilaydi?",
        "Qaysi amerikalik olim oliy o’quv yurtlari uchun pedagogik texnologiya usulining individuallashtirilgan tizimini ishlab chiqqan?",
        "Pedagogik odobning qaysi shakli pedgogik jarayonga obyektiv,haqqoniy yondasha olish,uning talabalar xulq atvorini jamoa oldidagi xizmatlariga muvofiq baholay olisdagi axloqiy tarbiyalanganlik darajasini ifodalaydi?",
        "Aqliy mehnat vazifalarini amalga oshirish va hamkasblar bilan to'g'ri munosabatni tashkil etish pedagogik odobning qaysi shakliga kiradi?",
        "Isbotlamoq, o’lchamoq, asoslash, mahqullash, baho berish, tekshirmoq, nazorat etmoq, solishtirmoq, taqqoslash qaysi tushunchaga kiradi?",
        "Ixtiro qilmoq, umumlashtirish, birlashtirish, rejalashtirish, ishlab chiqmoq, tizimlashtirmok, birlashtirmoq, tuzmoq, yaratmoq, loyihalashtirmoq qaysi tushunchaga kiradi?",
        "Joriy etmoq, hisoblab chiqmoq, namoyish etmoq, foydalanmoq, o’rgatmoq, belgilash, joriy etish, aniqlamoq, ruyobga chiqarish, yechmoq qaysi tushunchaga kiradi?",
        "Chiqarmoq, ajratish, tabaqalashtirish, tasniflash, oldindan aytish, bo’lib chiqmoq, taqsimlash tekshirmoq bu -....",
        "Pedagogik odobning nechta asosiy shkllari qayd etilgan?",
        "Pedagog oldiga uning o'ziga,kasbiga,jamiyatga,talabalarga va o'quv tarbiya jarayoninig boshqa ishtirokchilariga munosabatda bo'lishiga qo'yiladigan axloqiy talablar tizmi nima deyiladi?",
        "Bilimdon pedagogga xos hislatlarni aniqlang?",
        "Refleksiya so'zining ma'nosi nima?",
        "Fikrlash jarayonini yuqorida darajada talab etuvchi vaziyat turi.",
        "Ta’lim jarayoni nimalardan iborat?",
        "Qaysi tushuncha ehtiyoj, intilish, qiziqish kabi ma’nolarni anglatadi?",
        "Pedagogik mahoratning asosini nima tashkil etadi?",
        "Pedagogning kasbiy faoliyatni mavjud ijtimoiy talab,huquqiy meyor va standartlarga muvofiq tashkil etishiga bo'lgan qobilligi,kasbiy tayyorgarlik darajasi nima deyiladi?",
        "Pedagogik mahoratning muhim nechta tarkibiy qismi mavjud?",
        "Mezonlarga asoslangan baholash tizimi qaysi muommolarni hal qiladi ? To’g’ri javoblarni belgilang . 1.Ob’ektiv va shaffof baholash tizimi orqali ta’lim sifatini oshirishga hissa qo’shadi 2.Xalqaro standartlarga javob beradigan yuqori sifatli baholash mexanizmini shakllantiradi. 3.O’quvchining o’qishdagi yutuqlari haqidagi dalillarni to’plash uchun yordam beradi. 4.Asosiy natijalarni umumlashtirish va ta’limiy natijalarni tahlil qilishga yordam beradi .",
        "Pedagogik Mahorat tushunchasi nechanchi yillarda ilmiy asoslab berildi va OTMlarda o'qitila boshlagan?",
        "Pedagogik tizim nimalardan iborat?",
        "«Tizim» so’zining ma’nosi ko’rsatilgan qatorni belgilang?",
        "An’anaviy yondashuvning asosiy xususiyati nimada?",
        "Pedagogik texnologiyada axborot texnologiyalarni o’rni qanday?",
        "Pedagogik texnologiyaning asosiy vazifalari nimalardan iborat?",
        "Pedagogik texnologiyaning asosiy maqsadi nimalardan iborat?",
        "Innovasiya so’zining lug’aviy ma’nosi ayting?",
        "Pedagogik tizim komponentlari.",
        "O’qituvchining innovatsion faoliyati qaysi masalalarni yechishga qaratilgan?",
        "Ta'lim tehnologiyasi nazariyasining shakllanish bosqichlari nechta?",
        "Interaktiv metodning lug‘aviy ma'nosi?",
        "Muloqot texnologiyasi necha bosqichda olib boriladi?",
        "Zig-zak metodiga to’gri ta’rif berilgan qatorni ko’rsating",
        "Pedagogik muloqot uslublari to’g’ri keltirilgan qatorni toping .",
        "Noverbal nutq turlari to’g’ri keltirilgan qatorni toping?",
        "Muomalada verbal ta’sir?",
        "O`qituvchining tashkilotchilik qobilyati-",
        "O`qituvchi nutq qobilyati –....",
        "Axborotli texnologiyalari bu...?",
        "Kеys-stadi ilk marta qayеrda va qachon qo’llanilgan edi?",
        "Hamkorlikdagi o’qishni tashkil etish usullariga qaysi biri kirmaydi?",
        "Prinsip so‘zi qanday ma’noni anglatadi?",
        "Bilim olishning asosiy manbai bo‘yicha o‘qitish (ta’lim.) metodlariga qaysilar kiradi?",
        "To‘garaklar, klublar, olimpiadalar, viktorinalar, ko‘rgazmalar, ekspeditsiyalar va hokazolar ta’limni tashkil etishning qaysi shakliga misol bo‘la oladi?",
        "Leksiya, praktikumlar, laboratoriya mashg‘ulotlari, seminarlar, konsultatsiyalar, uy vazifalari ta’limni tashkil etishning qaysi shakliga misol bo‘la oladi?",
        "Kompetensiya so‘zining ma’nosi nima?",
        "Oligofreniya necha darajada namoyon bo‘ladi?",
        "Profilaktika so‘zining ma’nosi nima?",
        "Pedagogik diagnostikaga kim asos solgan?",
        "....... lotincha so‘zdan olingan bo‘lib, asos, boshlang‘ich holat, asosiy rahbar g‘oya, xulq va faoliyatning asosiy qoidasi kabi ma’nolarni anglatadi.",
        "Darsga qo‘yiladigan didaktik talablar – bu:",
        "Bilish faoliyati boyicha tasnif qilinuvchi ta’lim metodlaridan qaysi biri kam vaqt sarflab, katta hajmdagi bilimni berishni ta’minlay oladi?",
        "Xulosa chiqarish turlari bo‘yicha ta’lim metodlariga qaysilar kiradi?",
        "Pedagogning kommunikativ madaniyati nima?",
        "Ko’nikma deb nimaga aytiladi?",
        "«Kreativlik o‘zida yangicha yo‘sinda amalga oshirilgan o‘zlashtirish to‘lqinini , yangicha aloqadorliklarni aniqlash, yangicha munosabatga kirishish , yangiliklar , ongning yangicha e’tirozlariga sabab bo‘luvchi faoliyatidir». Fikrni kim aytgan?",
        "Quyidagi javoblardan qaysi biri ta‘lim jarayonini ifodalaydi?",
        "Pedagogik diagnostikaning eng muhim kreteriyalari qaysilar?",
        "Pedagogik diagnostika fanining asosiy tamoyillari nechta?",
        "Dastlab arifmetikadan test orqali o‘quvchi bilimini sinash tizimini kim tadbiq etgan?",
        "Gnoseologiyaning lug`aviy ma’nosi nima ?",
        "O‘qituvchi faoliyati va o‘quvchilar bilish faoliyatining xususiyatini belgilaydigan asosiy qoidalar nima deb yuritiladi?",
        "Ta‘limning ikki yoqlama xarakteri nimani anglatadi?",
        "....... ta’lim oluvchining bilim, ko‘nikma va malakalarini aniqlash, o‘lchash va baholashni anglatadi?",
        "Qaysi ta'lim tamoyili pedagogik jarayonda shaxs qadr-qimmatini yuqoriga qo'yish,uning xohish-istak,qiziqish va ehtiyojlarini inobatga olish zarurligini ifodalaydi?",
        "O'zbekiston Respublikasi ta'lim sohasidagi siyosatning asosiy nechta tamoyillari mavjud?",
        "Mutahassi sifatida pedagogning individual ravishda o'zida u yoki bu kasbiy pedagogik sifat,BKM,kasbiy kompetebtlik sifatlarini rivojlantirish ehtiyojlariga tayangan holda ishlab chiqilgan shaxsiy amali harakterdagi dasturni ko'rsating?",
        "Har bir shaxs yoki mutahassisning o'zida ma'lum sifat,BKM,ksabiy kompetentlikni shakllantirish va rivojlantirish ehtiyojlari asosida ishlab chiqilgan shaxsiy amaliy harakterdagi dasturni belgilang?",
        "Shaxsning o'zida kasbiy tajriba,malaka va mahoratni takomillashtirish yo'lida aniq maqsad va puxta o'ylangan vazifalar asosida mustaqil ravishda harakatlarni yig'indisi nima deyiladi?",
        "O'zini o'zi nazorat qilish tushunchasiga mos javobni aniqlang?",
        "Shaxs sifatida o'z qadr qimmatini anglashga mos keladigan javobni aniqlang?",
        "O'z - o'zini tushunish nima degani?",
        "Shaxsning o'z - o'zini tahlil qilish orqali o'ziga baho berishi nima deyiladi?",
        "Pedagog tomonidan kasbiy faoliyatida tashkil etayotgan o'z amaliy harakatlari mohiyatining o'rganilishi nima deyiladi?",
        "Pedagogning o'z ustida ishlashi nechta bosqichdan iborat?",
        "Ekstremal kompetentlikni aniqlang?",
        "Autokompetentlik nima?",
        "Shaxsiy kompetentlikni ko'rsating?",
        "Indivudial kompetentlikni ko'rsating?",
        "Ijtimoiy kompetentlikni ko'rsating?",
        "Maxsus yoki kasbiy kompetentlikni ko'rsating.",
        "Pedagogika jarayonida sog'lom psixologik muhitni yarata olish,talabalar va ta'lim jarayonini boshqa ishtirokchilari bilan ijobiy muloqotni tashkil etish,turli salbiy psixologik zidiyatlarni o'z vaqtida anglash va bartaraf qilish kompetentligi qaysi?",
        "Pedagogik jarayonni metodik jihatdan oqilona tashkil etish,ta'lim yoki tarbiyaviy faoliyat shakllarini to'g'ri belgilash,metod va vositalarni maqsadga muvofiq tanlay olish,metodlarni samarali qo'llay olish kompetentligini aniqlang?",
        "Ta'lim jarayonining barcha ishtirokchilari,jumladan,talabalar bilan samimiy muloqotda bo'lish,ularni tinglay bilish,ularga ijobiy ta'sir ko'rsata olish kompetentligini aniqlang?",
        "Izchil ravishda kasbiy o'sishga erishish,malaka darajasini oshirib borish,kasbiy faoliyatda o'z ichki imkoniyatlarini namoyon qilish kompetentligi?",
        "Kasbiy pedagogik BKMni boyitadigan ilg'or tehnologiyalarni o'zlashtirish,zamonaviy vosita,tehnika va tehnologiyalardan foydalana olish kompetentligini ko'rsating?",
        "Pedagogik faoliyatga nisbatan tanqidiy va ijodiy yondashish ,o'zining ijodkorlik malakalariga egaligini namoyon eta olish qaysi kompetentlikka xos?",
        "Axborot muhitida zarur,muhim,kerakli,foydali ma'lumotlarni izlash,yig'ish,saralash,qayta ishlash va larni maqsadli,o'rinli va samarali foydalanish kompetentligi?",
        "Pedagogik jarayonni takomillashtirish,ta'lim sifatini yaxshilash,tarbiya jarayonining samaradorligini oshirishga doir yangi g'oyalarni ilgari surish,ularni amaliyotga muvafaqqiyatli ko'rsata olish kompotentligi qaysi?",
        "Favqulotda vaziyatlarda,pedagogik nizolar yuzaga kelganda oqilona qaror qabul qilish,to'g'ri harakatlanish malakasiga egalik qaysi kompetentlik asosini tashkil etadi?",
        "Kasbiy pedagogik faoliyatni tashkil etishga tayyorlanish,kasbiy-pedagogik vazifalarni oqilona hal qilish,faoliyat natijalarini real baholash,BKM ni izchil rivojlantirib borish qaysi kompetentlik asosini tashkil etadi?",
        "Ijtimoiy munosabatlarda faollik ko'rsatish ko'nikma,malakalarga egalik,kasbiy faoliyatda subektlar bilan muloqotga kirisha olishi qaysi kompetentlikka kiradi?",
        "Refleksiya jarayoni qaysi olim tamonidan ta'riflangan?",
        "Refleksiya nima?",
        "Kimning fikricha nafaqat o'qituvchilik kasbida uzoq o'tmish tajribalaridan foydalanish darkor,balki o'qituvchi kasbiy rivojlanishing eng yaqin va olis istiqbollarini ham o'tmish tajribalaridan foydalanish asosida belgilash lozim?",
        "\"Autogen trenirovka\" nima?",
        "Pedagogik faoliyatdagi qiyinchiliklarni qaysi olim o'rgangan?",
        "Quyidagilardan qaysi birining vazifasi pedagogik mahoratning shakllanish jarayonini tormozlovchi obyektiv omilni ajratadi, biroq o'z - о ‘zini baholash tarzida subyektiv namoyon bo 'lishi, shaxs uchun faoliyatning tobora qiyin jihatini aniqlab beradi?",
        "Didaktik qiyinchilik nima?",
        "\"Kimki o'z darslarida,tarbiyalanuvchilar bilan o'zoro munosabatda yaxshi va yamonni farqlashga,yutuq va kamchiliklarini o'z vaqtidabilishga urinsa,pedagogik faoliyatning yarm muvaffaqiyatiga erishgan bo'ladi\". Ush bu fikr muallifini ko'rsating?",
        "Pedagogik mahorat tizimidan uchta asosiy : estetik,ijtimoiy-psixologik va tehnologik tarkibiy qismlarni ajratib olgan olimlarni aniqlang?",
        "Kasbiy kompetentlik sifatlarini ko'rsating?",
        "Kasbiy kompetentlikka ega mutahassisga xos sifatni ko'rsating?",
        "Kasbiy kompetentlik quyidagi qaysi holatlarda yaqqol namoyon bo'ladi?",
        "Mutahassis tamonidan kasbiy faoliyatni amalga oshirish uchun zarur bo'lgan bilim,ko'nikma va malakalarning egallanishi va ularni amalda yuqori darajada qo'llay olinishi bu -.......",
        "Faoliyatda nazariy bilimlardan samarali foydalanish,yuqori darajadagi kasbiy malaka,mahorat va iqtidorni namoyon eta olish nima deyiladi?",
        "Muloqotning nechta yo'nalishi olimlar tamonidan o'rganilgan?",
        "O'qituvchining kommunikativ muloqoti qaysi funksiyalar yig'indisidan iborat?",
        "O'qituvchi bilishi lozim bo'lgan muhim kommunikativ vazifalarni aniqlang?",
        "O'qituvchining kommunikativ vazifalarini bajarishi nimalardan kelib chiqadi?",
        "Yosh o'qituvchilar amal qilishi lozim bo'lgan xushmomilalik mezonlarini aniqlang?",
        "Yosh o'qituvchilar amal qilishi lozim bo'lgan xushmomilalik mezonlarini aniqlang?",
        "Quyidagi qaysi metod orqali o'qituvchi mavzuga oid dalil,hodisa va voqealarning yaxlit va qismlarga bo'lib,tasviriy vositalar yordamida obrzali tasvirlash yo'li bilan ixcham,qisqa va izchil bayon qiladi ?",
        "....muayyan jarayon yoki qurilmani sihlash va faoliyat yuritishini ko‘rsatish ya’ni namoyish qilishdir.",
        "...muayyan mavzu, vaziyat yoki holatni muhokama qilish.",
        "....muayyan tajriba yoki sinovdan so‘ng o‘z hissiy kechinmalari va intelektual zaxiralari bilan almashinishdan iborat bo‘ladi.",
        "....-muayyan vaziyat yoki holatga nisbatan yangilik yoki o‘z nuqtai nazarni ilgari surishni taqazo etadi.",
        "Quyidagilardan qaysi biri yuklatilgan vazifa va muammolarni bir guruh bo‘lib hal etishga o‘rgatadi.",
        "Shavkat ustoz bugun sinf soatida o'z sinfiga nafaqadagi zobitlardan bir nechtasini taklif qildi,ular esa vatan va xizmat qilgan paytlarini o'quvchilarga so'zlab berishdi .Shavkat ustoz qaysi o'qitish metodidan foydalangan ?",
        "Quyidagilarni qaysi biri ijodiy fikrlarni to‘plash uchun o‘tkaziladi,bunda ishtirokchilar tanqid va kesatiqlarsiz muayyan muammo yuzasidan o‘z fikrlarini ochiq oydin bayon etadilar va ushbu muammoning yYechimini izlaydilar.",
        "Biologiya darsiga Farux kecha dadasining mast holatda uyga kelganligi sababli uyga vazifani bajarmay keldi,darsda u juda homush va sust o'tirdi.Bu holatda o'qituvchi uni tushunishi uchun,qanday qobiliyat turiga ega bo'lishi kerak ?",
        "Abdullajon Abdullayev 57-maktabning 9-A -sinf sinf rahbari. 9-A_sinf o'quvchilari tadbirlarda ajoyib chiqishlar qiladi,birgalikda sinf rahbari bilan sayohatlarga va ekskursiyalarga chiqishadi.Sinf rahbarida qaysi qobiliyat yaxshi shakllangan deb o'ylaysiz ?",
        "Feruza kecha rus tili darsida sinfdoshlari bilan diologlarni yodlab oldi. Bugun ustoziga hech adashmay yana aytib bera oldi va 5 baho oldi. Ushbu vaziyatda Feruzada o'qituvchi tomonidan qaysi malaka turi shakllantirilgan ?",
        "Mantiqiy bog'lanmagan yoki mantiqiy xulosaga kelish uchun dalillar yetarli bo'lmaganda chuqur mulohaza yuritish asosida masalani yechishning tarkibini bo'lgan unumli ijodiy fikrlash nima deyiladi?",
        "11-maktabda 8-sinf o'quvchilarida o'quv yili yakuni yaqinlashgani uchunmi,darslardan zerikishdimi yoki jismoniy va ruhiy jihatdan toliqishdimi darslarda qatnashish sustlashib qoldi.Dilmira ustoz esa ularni ruhlantirdi.Bunda qaysi usul qo'llandi ?",
        "Muloqotning interaktiv jihati-....",
        "Pedagogik qobiliyatni rivojlantirish metodlarini aniqlang?",
        "Pеdagogik tеxnologiyaning eng asosiy xususiyati nimadan iborat?",
        "\"Dars berayotgan vaqtimda o'tirmayman.O'quvchilar bilan kam,juda aniq va keskin gaplashaman.....sinf tez va ta'sirlanuvchan,tezda \"qirg'oqdan chiqib ketadi va yana qaytib oqimga tushishi qiyin\" Ushbu so'zlar kimga tegishli?",
        "\"So'zlarning ma'nolarinini,qudratini odamlarga aniq ifodalab tushuntirib bering,shunda siz insoniyat olamini barcha anglashilmovchiliklarini yarmidan xolos qilgan bo'lasiz\" Ushbu so'zlar kimga tegishli?",
        "...tarbiyaviy ta’sir ko‘rsatishning eng muhim usuli bo‘lib, o'quvchilarning ijtimoiy foydali faoliyatini bajarilish natijalariga qarab muntazam rag‘batlantirib borishda namoyon bo'ladi.",
        "Quyidagilardan qaysi biri tarbiyaviy ta'siming eng an’anaviy usuli bo'lib, o‘quvchilar xulq-atvoriga ijobiy ta’sir etishdan iborat.",
        "Quyidagilardan qaysi biri ta’sirchan pedagogik usul bo‘lib, o‘quvchilarda mustaqil fikr yuritishni, ma’lum bir maqsadga, orzuga erkin intilish hissini takomillashtiradi.",
        "Quyidagilardan qaysi biri ta’lim va tarbiya jarayonida o‘qituvchining tarbiyalanuvchiga nisbatan shaxsiy munosabatlarida namoyon bo‘ladi.",
        "....shaxsning psixologik xususiyati bo'lib, o 'zi sevgan biror inson harakatiga, namunasiga, ibratiga amal qilishidir.",
        "...tarbiyalanuvchining ongiga qaratilgan bo'lib, o'qituvchi fikr-mulohazalarini t a ’sirchan nutq orqali o'quvchining bilimlar tizimiga, dunyoqarashiga, xulq-atvoriga, xatti- harakatiga tasir etadi va uni qisman о 'zgartiradi.",
        "Qobiliyatlar tizimi nechta xususiyat bilan farq qilinadi?",
        "Qobiliyatning qaysi xususiyati ijodiy tasavvur qilish bilan bog'liq?",
        "Bu - individual narsaning o'ziga xos tomonini, ijodiy faoliyat uchun boshlang'ich materialni ko'ra bilish demakdir.Ushbu ta'rif xos xususiyatni aniqlang?",
        "O'qituvchining ziyrakligi va uddaburonligi, voqea va hodisalami chuqur idrok etib, ularga adolatli munosabatda bo'lishi undagi qaysi qobiliyatni borligini bildiradi?",
        "O‘qituvchining o‘z fanini va boshqa fanlami chuqur bilishida, o'zlashtirishi va amaliyotda namoyon etishi orqali ifodalanadigan qobiliyati?",
        "O'qituvchining o'quv-tarbiyaviy faoliyatni puxta rejalashtirishi asosida yuzaga keladigan kasbiy pedagogik vaziyat bosqichlarini oldindan ko'ra olish qobiliyatini belgilang?",
        "Sinf o‘quvchilarining o'qituvchi tomonidan turli jamoat ishlariga,to'garaklarga jalb qila olishida, sinf jamoasining har bir o ‘quvchiga faol vaziyatni ta’minlab berishida namoyon bo'ladigan qobiliyatni aniqlang?",
        "Qaysi qobiliyat o'quvchilar bilan muloqot qilishda, pedagogikaning ta’lim va tarbiyaviy qonuniyatlarini hamda metodlarini chuqur o'zlashtirgan holda samarali dars berish qobiliyatidir?",
        "Qaysi qobiliyat o'qituvchi o'z bilimini o'quvchi ongi va tafakkuriga kam kuch sarflash evaziga yetkaza olishi, ta’lim va tarbiyada belgilangan muddatda maqsadga erishish qobiliyatidir.",
        "Qaysi qobiliyat bolalarga bo'lgan nmhabbatdan kelib chiqadigan o'quvchilarning histuyg'usini, psixologik holatlarini qalbdan his etish,tushunish, idrok etish, ularga achinish xususiyatlaridir ?",
        "Qaysi qobiliyat bilan o‘qituvchi o'quvchining psixologiyasini, psixik holatini o'ziga singdirib idrok etadi, sinf jamoasining holatiga pedagogik vaziyatiga odilona baho beradi?",
        "Qaysi qobiliyat o ‘qituvchining pedagogik jamoa va ota onalar, mahalla ahli bilan bo'ladigan o‘zaro muloqotida, ularning ruhiy holatlarini tushunish va ularga hamdard bo'lish,muioqotga kirishishida pok ko'ngillilik bo'lishini nazarda tutadi?",
        "Umumiy qobiliyatlarni ajrating.",
        "Biror faoliyatning muvaffaqiyatli mustaqil va mukammal bajarilishini ta'minlaydigan noyob qobiliyatlar birikmasi nima deyiladi?",
        "Pedagogik qobiliyatlar o'z funksiyasiga ko'ra nechaga bo`linadi?",
        "Insonning bilish va layoqat nishonalari jarayonlarining yigʻindisi, iste'dodining yuksak cho'qqisi uning qaysi xususiyatini belgilaydi?",
        "Keyinchalik qobiliyatga aylanadigan layoqat nishonalarining majmui insonning nimasi deyiladi?",
        "Qaysi ijodkorlikda o'qituvchi ijtimoiy ahamiyatga ega boʻlgan yangi nazariyalarning yaratadi,fikrlari va takliflari bilan chiqadi?",
        "Qaysi ijodkorlikda jamiyatda ro'y berayotgan kasbiy faoliyatga oid yangiliklarni dadil oʻzlashtirish va targ'ib qilish, fikrlash jarayoni asosida tafakkurni rivojlantirish kuzatiladi?",
        "Qaysi ijodkorlikda belgilangan har qanday muammo muvaffaqiyatli hal qilinadi gan ijod qilishga layoqati bo'lgan o'qituvchilarning asosiy qismida jihatlar namoyon bo'ladi?",
        "Sifat jihatdan yangi,original va takrorlanmas biror yangilikni paydo qiluvchi faoliyat nima deb yuritiladi?",
        "Ko'nikmalar yig'indisi nima deb ataladi ?",
        "O'qituvchining ongli faoliyatni bajarishi jarayonida hosil qilingan kasbiy intellektual faoliyatning avtomatlashgan komponentlari yig'indisi nima deyiladi?",
        "O'qituvchining kasbiy faoliyati jarayonida hosil qilingan tajriba va bilimlar asosida bajariladigan ishning mukammal usuli nima deyiladi?",
        "Insonning psixologik va fiziologik tuzilishiga xos bo'lgan xususiyat?",
        "Ilmiy mutolaa natijasida hosil qilinadigan fazilat?",
        "Pedagogning o'z-o'zini mukammal bilishi,tushunashi, his qilishi, irodasi mustahkam, qat'iyatli har qanday vaziyatda o'z fikr mulohazasini erkin bayon eta oladigan qobiliyati qaysi javobda ko'rsatilgan?",
        "O'qituvchining o'z hatti harakatlarini muvofiqlashtirishqobilyati,harakat ohangini his qilgan holda yo'naltiradi,vaqtni harakat surati bilan his qiladi,o'zi uchun maishiy qulayliklar yarata oladi.Ushbu qobiliyat turini aniqlang?",
        "Qaysi qobiliyat egalari falsafiy mulohazalar yuritishni, matematikani, murakkab masalalarni hal qilishni sevadi va oqibat natijalarini tushunish malakasiga ega, voqelikda asosiylikni ikkinchi darajalanishdan ajrata oladi ?",
        "Qaysi qobiliyatga ega bo'lgan insonlar musiqani sevishadi ohangni yaxshi his qilishadi,deklamatsiya asosida proza va poeziyani yaxshi o'qishadi,eshitgan narsasini xotirada saqlaydi,ayniqsa,she'r va qo'shiqlarni sevib tinglaydi?",
        "Ushbu qobiliyat turi har bir o'qituvchini sergaklikda ,o`quvchilarni ruhiyatini ,ichki dunyosini ko'ra olishida namoyon bo'ladi ,o'qituvchi kim nimaga qodir ekanligini oldindan bashorat qila oladi. Bu qaysi qobiliyati turga mansub?",
        "O.Matveeva ta'limoti bo'yicha o'qituvchi qobilyatlari necha qismdan iborat?",
        "O'qituvchi o'quvchilar bilan dars va darsdan tashqari jarayonlarda, sinfda ijobiy ruhiy iqlim yarata oladi.Bu qaysi qobilyat turiga kiradi?",
        "Qaysi olim qobiliyatlarni intellektlar to'plami deb atadi va uning yettita jihatini ajratib ko'rsatdi.",
        "...-shaxsning individual-psixologik xususiyati bo'iib, muayyan faoliyat yuzasidan layoqati va ishni muvaffaqiyatli amalga oshirish subyektiv shart-sharoitini ifodalovchi individual psixik sifatlar yig'indisidir.",
        "O'rni bo'lmagan vaziyatlarda rasmiy so'zlardan foydalanish nima deyiladi?",
        "Muommulada haqorat qilish,so'kishda qo'llaniladigan so'zlar nima deyiladi?",
        "Muayyan millat tilida bayon etilayotgan nutqda o'zga millatlarga xos so'zlarni noo'rin qo'llanilishi nima deyiladi?",
        "Ta’lim muassasalarida tarbiyaviy ishlarning turli yo’nalishlari…",
        "Ijtimoiy ongni shakllantirishda eng ko’p ishlatiladigan metodni ko’rsating ?",
        "Qaysi metod qo’llanilganda o’quvchilar odatda hayot va turli adabiyotlardan olingan aniq misollar bilan boyitilgan hikoyalarni katta qiziqish bilan tinglaydilar ?",
        "O'rta Osiyoda ilk ta'lim va tarbiya qachon paydo bo'lgan?",
        "Kimning fikricha \"jamoada 40 ta qobilyatsiz o'qituvchi o'rniga 4 ta qobiliyatli tarbiyachi o'qituvchining bo'lgani ma'qul\".",
        "Barkamol inson sifatida xarakterlanuvchi ijtimoiy ahamiyatga molik fazilatlarning barqaror tizimi nima deyiladi?",
        "Muallimning yuksak sifati uning aqli ilmi fikri soʻzi axloqi odobidadir\" ushbu soʻzlar qaysi maktabshunos olimning so'zlaridir ?",
        "\"Muallim bilimli, aqlli, adolatli,butun yuksak fazilatlarni mujassamlashtirgan bo'lishi kerak,o'zini nomunosib tutgan odam hech qachon bolalarga bilim va odob bera olmaydi\" ushbu so'zlar qaysi buyuk allomaga tegishli?",
        "\"Murabbiy bolaga nasihat va ta'lim berishda nutq va odob-qoidalariga rioya qilishi darkor\" ushbu so'zlar kimga tegishli?",
        "\"Yilning eng yaxshi fan o'qituvchisi\" koʻrik tanlovi nechanchi yildan boshlab o'tkazib kelinmoqda?",
        "O'qituvchilarning kasbiy pedagogik tayyorgarligi shartli ravishda qaysi yoʻnalishlarda olib boriladi?",
        "Pedagogik mahoratning tashkil etuvchi komponentlarini ko'rsating?",
        "\"Pedagogik mahorat deganda o'qituvchining pedagogik psixologik bilimlarni kasbiy malaka va koʻnikmalarni egallashi.... o'z fikr mulohazasiga ishonchi va qat'iy irodasi tushuniladi\" ushbu ta'rif kimga tegishli?",
        "O'qituvchining pedagogik faoliyatda ijobiy natijaga erishishi nima bilan belgilanadi?",
        "Pedagogik jarayonni subyektlarini ko'rsating?",
        "O'rganilayotgan muammoni ifodalash hamda uning maqsadga muvofiq yechimi, variantlarini izlashga yo`naltiradigan aniq real yoki sun`iy ravishda yaratilgan vaziyatning muammoli-vaziyatli tahlil etilishiga asoslanadigan ta`lim metodini aniqlang.",
        "Ta'lim oluvchi o'zlashtirilgan bilimlarni o'z faoliyatiga tatbiq etganda necha foiz ma'lumotlarni xotirasida saqlab qoladi ?",
        "\"Case study\" amaliy vaziyatlarni tahlil etish va hal qilish asosida o'qitish metodi sifatida xorijiy ta'limda dastlab qaysi sohada qo'llanilgan?",
        "Quyidagi qaysi metod ayni vaqtda \"amaliy holatlarni o'qitish metodi\" deb ham nomlanmoqda ?",
        "Biror muammo bo'yicha o'quvchilar tomonidan bildirilgan erkin fikr va mulohazalarni to'plab, ular orqali ma'lum bir yechimga kelinadigan metodni aniqlang ?",
        "Qaysi metodning afzalligi tanqidiy fikrlash ko'nikmalarini rivojlantiradi,predmetlar,hodisalar va shu kabilarning ham farqi,ham o'xshash jihatlarini anglashga yordam beradi",
        "Pedagogik jarayonning obyektini ko'rsating?",
        "Pedagogik jarayonning harakat vositasini ko'rsating?",
        "O'quvchilar faqatgina shaxsiy axborot tashuvchi emas, u yoki bu faktlarga shaxsiy tarzda izoh beruvchilargina emas, balki normalar va qadriyatlarga ham izoh beruvchi hisoblanadigan muomala darajasini ko'rsating?",
        "Qaysi muomala darajasida o`quvchilarning o'zaro muomalasi turli nuqtai nazarlar to'qnash keladi?",
        "Qaysi muomala darajasida o`quvchilarning aqliy qiziqishlari doirasiga juda xilma-xil axborotlar jalb qilinadiki ularni o'quvchilar ta'lim-tarbiya jarayonida o'qituvchilardan va boshqa turli manbalardan oladilar?",
        "Muomalaning qaysi darajasida suhbatni qo'llab-quvvatlash uchun nutq ayirboshlash, buning natijasida suhbatdosh bilan aloqa o'rnatishi mumkin bo'ladi?",
        "Muomalaning nechta darajasini ajratish mumkin?",
        "Oʻsmirlar o'qiydigan guruhlarda o'qituvchining holati qanday so'z bilan ifodalanishi mumkin?",
        "Pedagogning kichik yoshdagi o'quvchilar hayotiga ta'sir koʻrsatishining asosiy mazmuni nima bilan belgilanadi ?",
        "Dilkashlik koʻproq qaysi tipdagi odamlarga xosdir?",
        "O'qtuvchining muhim ijtimoiy yo'l-yo'riqlaridan biri?",
        "O'quvchilarning psixik holatini tushunishga va ularga achinishga tayyorgarlikni nima deb ataymiz?",
        "Tabiatda qaysi artislik qobiliyatlariga ega bo'lish o'quvchilar bilan muomala muvaffaqiyatiga erishishda muayyan rol o'ynaydi?",
        "Pertseptiv ya'ni idrok qilish sohasiga taalluqli bo'lgan xususiyatlarning eng muhimrogʻi qaysi javobda ko'rsatilgan?",
        "Psixologiyada pedagogik qobiliyatlar deganda insonining muayyan qaysi xususiyatlarini tushunish qabul qilingan?",
        "Pedagog muomala vositasi orqali olgan axborotlarning eng muhimi qaysi?",
        "Muomala - axborot jarayonidir, shunga ko'ra axborot necha yo'nalishda amalga oshiriladi?",
        "Pedagogik texnikani bir maromda egallash uchun nimalarga rioya qilish kerak bo'ladi?",
        "O'qituvchi o'zlashtirilishi lozim bo'lgan pedagogik texnikaning muhim tarkibiy qismlaridan biri bu -.....",
        "\"Tarbiyachi tashkil etishni, yurishni, hazillashishni ,quvnoq yoki jahldor bo'lishni bilishi lozim ,u oʻzini shunday tutishi kerakki uning har bir harakati ,yurishi ,turishi kiyinishi bolalarni tarbiyalasin\" ushbu fikr kimga tegishli?",
        "O'qituvchi mashg'ulot o'tish jarayonida faqat qaysi tomonga yurishi tavsiya qilinadi?",
        "O'qituvchining o'quvchilar oldida turgan holatida oyoqlar kengligi necha santimetr bo'lishli kerak?",
        "O'qituvchining gavdasi , qoʻl, oyoq harakatini tartibga soluvchi uslublar nima deyiladi?",
        "O'z fikrlarini kayfiyatini holatini hissiyotini qosh , koʻz va chehra muskullarning harakati bilan bayon qilish sanʼati nima deyiladi ?",
        "Pedagogik texnikaning gnostik malakalari sirasiga kiradigan javobni aniqlang?",
        "Pedagogik texnikani tashkilotchilik malakalari sirasiga kiradigan javobni ko'rsating?",
        "Pedagogik takt, nutq madaniyati, oʻzini qoʻlga ola bilishi pedagogik texnikaning qaysi malakasiga taalluqli ?",
        "O'quvchilar jamoasini boshqara olish pedagogik texnikani qaysi malakasiga tegishli boʻladi?",
        "Pedagogning shaxsiy pedagogik uddaburonligiga nimalar kiradi?",
        "Pedagogning kasbiga xos bilimlari ko'rsatilgan javobni aniqlang.",
        "Pedagogik texnikada oʻqituvchining shaxsiy xislatlariga nimalar kiradi?",
        "Pedagogik texnikani guruh bo'lib o'rgatishda , guruhda pedagoglar soni nechta bo'lishi to'g'ri bo'ladi?",
        "Pedagogik texnika malakalarini shakllantirishda qaysi ko'rinishda ish olib borish alohida ahamiyatga ega?",
        "Avtomatlashtirishga doir bo'lgan oddiy harakatlar keltirilgan javobni ko'rsating?",
        "Pedagogik texnika hozirgi vaqtda nechta guruh komponentlarni o'rganish orqali amalga oshiriladi ?",
        "Pedagogik texnikaning ikkinchi guruh komponentlari jarayonini qaysi tomonini qamrab oladi",
        "Refleksiya nima?",
        "O'qituvchining nafaqat ta'lim tarbiya jarayonida balki butun kasbiy faoliyatida zarur boʻlgan umumiy pedagogik bilim va malakalar majmui nima deyiladi?",
        "Pantomimika nima?",
        "Qosh, ko'z, yuz muskullarining harakati nimani anglatadi?",
        "\"O'qituvchi muntazam ravishda pedagogik nazariyalarga tayanchagina oʻqituvchilik mahoratini egallaydi\" ushbu fikr kimga tegishli?",
        "Insonning harakati va intilishi orqali erishilgan natijasi nima deyiladi?",
        "Insonni harakatga va intilishga undovchi holat nima deyiladi?",
        "Iste'dod nima?",
        "\"Ta'lim-tarbiyada ro'y beradigan ko'pgina kamchiliklar o'qituvchi - tarbiyachining pedagogik qobiliyatining amaliy yo'nalishini yaxshi bilmaslik, iste'dodning o'qituvchida yoʻqligidir \" ushbu soʻzlar muallifini aniqlang ?",
        "\" O'qituvchi muntazam ravishda fan bilan shugʻullanmog'i lozim aks holda u qurigan daraxt yoki toshga o'xshab qoladi,qurigan daraxt meva bera olmaganidek kelajakda bu o'qituvchidan hech natija kutib bo'lmaydi\" ushbu soʻzlar muallifini aniqlang?",
        "“O'qituvchi haqida hissa” risolasining muallifi kim ?",
        "Muayyan ish, xatti harakat yoki kasbiy faoliyatning ustalik,moxirlik bilan san'at- korona tashkil etilishiga imkon beradigan bilim, ko'nikma va malakalar majmui nima deb ataladi?",
        "Pedagogning kasbiy jarayonini samarali tashkil etishga yo'naltirilgan yaratuvchanlik faoliyati nima deb yuritiladi?",
        "Kasbiy faoliyatni tashkil etish jarayonida pedagog tomonidan o'zlashtirilgan orttirilgan bilim ko'nikma va malakalar majmui nima deb ataladi?",
        "Pedagogik faoliyatda ilgʻor tamoyil yoki g'oyani asoslash, yangi yo'l , usul yoki vositalarni tavsiya qilish , ularni amaliyotga tadbiq etishga qaratilgan ijodiy yondashuv nima deyiladi?",
        "Pedagogik mahoratning qaysi tarkibiy qismida pedagog tomonidan mutaxassislik bilimlarining puxta egallaganligi ko'rsatiladi?",
        "Pedagogik mahoratning bu tarkibiy qismi pedagogik faoliyatda orttirilgan ko'nikma va malakalar yig'indisi bo'lib u pedagogik jarayon samaradorligini ta'minlaydi?",
        "Pedagog tomonidan kasbiy maqsadga muvofiq tashkil etiladigan tizimli harakatlarning muayyan shaklini aniqlang.",
        "Pedagog tomonidan kasbiy faoliyatning ustalik mohirlik bilan san'atkorona tashkil etilishini ta'minlovchi bilim, koʻnikma va malakalar majmui.",
        "Pedagogik mahoratning qaysi tarkibiy qismi o'qituvchi kasbiy faolligini bir koʻrinishi bo'lib ta'lim-tarbiyada shu jarayon ishtirokchilarining o'zaro taʼsir va hamkorligini aks ettiradi?",
        "Pedagogik mahorat nechta tarkibiy qismlardan iborat?",
        "Pedagogik mahoratning qaysi tarkibiy qismi o'qitish ,taʼsir ko'rsatish ,ta'lim-tarbiya oluvchilarga o'z his-tuygʻulari ,bilimlari, axloqiy fazilatlarini uzatish texnologiyasini ifodalaydi ?",
        "Quyidagilardan qaysi biri o'qituvchining mahorat pilla poyalaridan ko'tarilishida yaratuvchanlikni, tashabbuskorlikni, pedagogik uddaburonlikni va tadbirkorlikka eltuvchi yo'lni bu yoʻldagi qiyinchiliklardan qoʻrqmaslikni anglatadi?",
        "O'qituvchi tarbiyachilik burchi, mas'uliyati, qadr-qimmati ,vijdoni, axloqiy eʼtiqodini nazarda tutib o'qituvchining talabchanligi ,adolati ,komilligi ,rostgo'yligi to'g'riligini anglatadigan pedagogik jarayon tarkibiy qismi?",
        "Pedagogik nazokat nima bilan xarakterlanadi?",
        "Pedagogik taktning tarifi to'g'ri koʻrsatilgan javob aniqlang?",
        "Pedagogik taktni belgilang?",
        "O'qituvchi va tarbiyachining shaxsiy va kasbiy sifatlar yig'indisi nima deb ataladi?",
        "Pedagogik mahorat nimalar yig'indisidan iborat?",
        "Baxolashning zamonaviy nazariyalari, baxolash usullari va ularning o’quvchiga ta’siri o’zlashtirishni baholash va qayta aloqani taqdim etish bo’limining qaysi qismiga ta’luqli?",
        "Kasbiy faoliyat sohasidagi amaliy tajriba bu ....",
        "Ikkinchi toifali o’qituvchi - kamida uch yillik ish tajribasi bu.....",
        "Birinchi toifali o’qituvchi - kamida besh yillik ish tajribasi bu.....",
        "Oliy toifali o’qituvchi - kamida sakkiz yillik ish tajribasi bu.....",
        "Dars jrayoniga zamonaviy axborot texnologiyalar integratsiyasini rejalashtirish quyidagilarning qaysi biriga taaluqli?",
        "Pedagogik faoliyat bilan shug’ullanishga yo’l qo’yilmaydigan shaxslarni aniqlang. 1. Belgilangan ro’yxat bo‘yicha kasalliklarga chalinganlar 2. Sud hukmiga muvofiq pedagogik faoliyat bilan shug’ullanish taqiqlangan shaxslar. 3. Sud hukmi bilan Muomalaga layoqatsiz deb topilganlar 4. Tarkibi va turlari O’zbekiston Respublikasi qonun hujjatlarida belgilangan jinoyatlar uchun avval yoki hozir Jinoiy javobgarlikka tortilganlar 5. Oliy ma’lumotga ega bo’lmagan shaxslar",
        "Fanlararo kompetensiyalarni fanga singdirish, o’z fanini boshqa fanlar bilan o’zaro bog’lash quyidagilarning qaysi biriga taaluqli?",
        "O’quvchilarning loyixaviy va jamoaviy ishlarini tashkil etish, dars mavzusini amaliyot bilan bog’lash kabilar qaysi bo’limga taaluqli ?",
        "Boshlang’ich sinf o’qituvchilari ishga qabul qilinayotganida o’rta maxsus kasb hunar ta’limi (texnikum, kasb-hunar kolleji) ga yo’l qo’yilishi bu......",
        "Pedagogning kasbiy imkoniyatlar tuzilmasi nechta asosiy qismdan iborat ?",
        "Pedagogning kasbiy imkoniyatlari tuzilmasini ishlab chiqqan olamni ko'rsating?",
        "Kuzmina pedagogik faoliyat tuzilmasini 3 asosiy sohadan iborat ekanligini aytadi bular qaysi sohalar ?",
        "Muloqot jarayonida axloqiy normalarga rioya qilish qaysi pedagogik faoliyat qirrasiga mansub?",
        "Guruhdan va darsdan tashqari ishlarni o'z faniga oid ommaviy tadbirlarni tashkil qila olish va ularni mohirona o'tkazish qaysi pedagogik faoliyat qirrasiga kiradi ?",
        "Pedagogik faoliyatning vositachilik qirrasiga tegishli bo'lgan javoblarni aniqlang ?",
        "O'z fanini metodikasini bilish pedagogik faoliyatning quyidagi qaysi qirrasiga mansub ekanligini aniqlang .",
        "Bilimlarni gumanitarlashtira olish pedagogik faoliyatning qaysi qirrasiga kiradi?",
        "Qaysi pedagogik faoliyat qirrasida mehnatni ilmiy asosda tashkil qila olishiga va unga qo'yiladigan estetik va gigiyenik talablarga rioya qila olishi ko'rsatilgan?",
        "Qaysi pedagogik faoliyat qirrasida hazil mutoyibani uddalay olish nazarda tutiladi?",
        "Notiqlik sanʼatiga ya'ni o'quv materiallarini tushunarli va ravon tilda bayon qila olish malakasiga ega bo'lish qaysi pedagogik faoliyat qirrasiga kiradi?",
        "O'quvchilarning yosh xususiyatlari, ularning o'quv imkoniyatlarini bilish, o'quvchilarda o'z faniga qiziqish uygʻota olish pedagogik faoliyatning qaysi qirrasiga taalluqli ?",
        "Ta'limning bayoniy tasviriy, reproduktiv, muammoli ta'lim qisman izlanuvchan yoki evrovistik usul, tadqiqot usullarini egallaganligi pedagogik faoliyatning qaysi qirrasi turiga kiradi ?"
      ],
      "answers": [
        [
          "- Demokratik",
          "- Liberal",
          "- Avtoritar",
          "- Barcha uslublarda"
        ],
        [
          "- Barcha javoblar to’g’ri",
          "- Demokratik",
          "- Avtoritar",
          "- Liberal"
        ],
        [
          "- Liberal",
          "- Qo’rqitish",
          "- Qiziqtirish",
          "- Hazil-mutoyiba"
        ],
        [
          "- 2",
          "- 4",
          "- 5",
          "- 3"
        ],
        [
          "- Nutqning bevosita ijtimoiy vazifalar bilan bog’liq holda",
          "- So’zli vositalarni so’zsiz vositalar bilan uzatilishi",
          "- Belgilarning optic – kinetic tuzilishi",
          "- Muloqotning tashkiliy ko’lami va vaqti"
        ],
        [
          "- Ko’z qarashlar orqali tashkil etiladigan aloqa",
          "- etish",
          "- Gapirayotgan shaxs tomonidan nutqning bevosita ijtimoiy vazifalar bilan bog’liq holda tashkil",
          "- Muloqot tarkibida so’zli,g’oyaviy ma’lumotlarni so’zsiz vositalar bilan uzatilishi"
        ],
        [
          "- Mimika",
          "- Pantomimika",
          "- Barcha javoblar to’g’ri",
          "- Jestlar – qo’l va oyoqning harakatlari"
        ],
        [
          "- 6",
          "- 8",
          "- 9",
          "- 7"
        ],
        [
          "- Faoliyatni tashkil qilish va hamdard bo’lish",
          "- Axborot almashish",
          "- Barcha javoblar to’g’ri",
          "- Shaxsni o’rganish"
        ],
        [
          "- 2",
          "- 5",
          "- 4",
          "- 3"
        ],
        [
          "- Ta’lim maqsadi,tarbiya maqsadi,bilish jarayoni,ish uslubi",
          "- O’quv rejasi,o’quv dasturi,o’qitish metodlari,manbalar",
          "- Barcha javoblar to’g’ri",
          "- Didaktik vazifalar,o’quv topshiriqlari,o’quv materiali,o’qitish metodlari"
        ],
        [
          "- Borliq va uning mohiyati,shakllari,asosiy tamoyillari va eng umumiy kategoriyalari haqidagi",
          "- Inson mohiyati to’g’risidagi ta’limot",
          "- ta’limot",
          "- Mahsuldorlik tomoniga yo’naltirish yo’llarini o’rgatadigan falsafaning sohasi"
        ],
        [
          "- Maqsadlilik",
          "- Relevantlik",
          "- Konfidensiallik",
          "- Ishonchlilik"
        ],
        [
          "- Anatomiya,psixopatologiya,pedagogika tarixi,surdopedagogika",
          "- Tiflopedagogika,pedagogika,anatomiya,maxsus pedagogika",
          "- Oligofrenopedagogika,pedagogika tarixi,nevropatalogiya",
          "- Tiflopedagogika,,surdopedagogika,oligofrenopedagogika,logopediya"
        ],
        [
          "- Pedagogik takt va pedagogik nazokatga ega bo’lish,pedagogik texnikani qo’llay olishi",
          "- bo’lishi",
          "- Pedagogik faoliyat o’quvchilarning yosh xususiyatlariga va qiziqishlariga to’g’ri kelmasligi",
          "- O’z kasbiga muhabbat,o’quvchilarni seva olish,mutaxassisligi bo’yicha puxta bilimga ega"
        ],
        [
          "- Tadbirni tanlash,uni tayyorlash va o’tkazish,tahlil qilish",
          "- Nafas olish,ovoz o’zgarishi,ravon nutq madaniyati",
          "- His hayajonni anglatuvchi so’zlar ishlatish,o’zgalarni tushunish,yalg’on xushomad qilish",
          "- Kasbga oid bilimlar , insonparvarlik,pedagogic qobiliyat,pedagogic texnika"
        ],
        [
          "- tashxis",
          "- Korreksiya",
          "- Profilaktika",
          "- Nazorat"
        ],
        [
          "- Reproduktiv",
          "- Ko’rgazmali",
          "- Og’zaki,amaliy",
          "- Induktiv,deduktiv"
        ],
        [
          "- Maktab",
          "- Bolalar uyi",
          "- Oila",
          "- mahalla"
        ],
        [
          "- Tarbiyalanuvchining ongi,irodasi,tuyg’ulari va xulqiga ta’sir etish usullari yig’indisi",
          "- Metodni tanlayotganda,tarbiyachida muvaffaqiyatga erishishga nisbatan ishonch bo’lishi kerak",
          "- Bu usul ham emas,metod ham emas,usullar yig’indisidir",
          "- Umumiy metodning bir qismi,alohida harakati"
        ],
        [
          "- Tashkiliy va asosiy bosqich",
          "- Tashkiliy va yakuniy bosqichi",
          "- Barchasi",
          "- Asosiy va yakuniy bosqich"
        ],
        [
          "- Bilimlarni mustahkamlash va takrorlash darsida",
          "- Bilimlarni nazorat darsida",
          "- Aralash darsda",
          "- Ko’nikma va malakalarni ishlab chiqish darsida"
        ],
        [
          "- O’rganilganlarni umumlashtirish va tizimlashtirish",
          "- Bilimlarni tekshirish darsi",
          "- Bilimlarni mustahkamlash darsi",
          "- Ko’nikma va malakalarni ishlab chiqish"
        ],
        [
          "- Ko’nikma va malakalarni ishlab chiqish",
          "- Aralash dars",
          "- Takrorlash darsi",
          "- Yangi materiallar bilan tanishish"
        ],
        [
          "- Ko’nikma va malakalarni ishlab chiqish",
          "- Bilimlarni mustahkamlash darsi",
          "- Aralash dars",
          "- Yangi materiallar bilan tanishish"
        ],
        [
          "- 7",
          "- 9",
          "- 6",
          "- 8"
        ],
        [
          "- Nutqning ifodali bayon qilinishi,nutqning sofligi",
          "- Barcha javoblar to’g’ri",
          "- Nutqning ravonligi,nutqning boyligi",
          "- Nutqning to’g’riligi,nutqning aniqligi"
        ],
        [
          "- Xristeva",
          "- Krivoshev",
          "- Tatur",
          "- Stesenko"
        ],
        [
          "- Turbovskiy",
          "- Kuzmina",
          "- Markova",
          "- Polyakova"
        ],
        [
          "- Golitsin",
          "- Rubishteyn",
          "- Shedroviskiy",
          "- Kodjaspirova"
        ],
        [
          "- Rag’batlantiruvchi",
          "- Yakka tartibdagi",
          "- Ijodiy",
          "- Jamoaviy"
        ],
        [
          "- Mulohaza",
          "- Bilish",
          "- Tahlil",
          "- Qo’llash"
        ],
        [
          "- 1,2,5",
          "- 2,4,5",
          "- 1,2,3,5",
          "- 2,3,4,5"
        ],
        [
          "- 1,4",
          "- 1,2",
          "- 2,4",
          "- 2,3"
        ],
        [
          "- Darsdan tashqari ta’lim turi",
          "- Shaxsga yo’naltirilgan ta’lim",
          "- Muommoli ta’lim turi",
          "- Ijtimoiy ta’lim turi"
        ],
        [
          "- Shaxsga yo’naltirilgan ta’lim",
          "- Reproduktiv ta’lim",
          "- Muommoli ta’lim",
          "- Tabaqalashtirilgan ta’lim turi"
        ],
        [
          "- Regulyativ (maqsadni belgilash,rejalashtirish …o’z-o’zini tartibga solish…to’sqilarni yengish)",
          "- )",
          "- Konstruktiv (modellarni yaratish,grafik ma’lumotlarni sharhlash va ishlatish)",
          "- Kommunikativ (shaxslararo ko’nikmalar…boshqalar bilan ishlash va o’zoro hamkorlikda bo’lish"
        ],
        [
          "- 6",
          "- 5",
          "- 7",
          "- 4"
        ],
        [
          "- 4",
          "- 2",
          "- 5",
          "- 3"
        ],
        [
          "- 5",
          "- 7",
          "- 6",
          "- 8"
        ],
        [
          "- Tarbiya qonuniyatlari",
          "- Tarbiya metodlari",
          "- Tarbiya tamoyillari",
          "- Tarbiya turlari"
        ],
        [
          "- Jamiyat rivoji uchun zarur bo’lgan madaniyatga mos yetarlicha hajmdagi “inson kapitali”ni",
          "- Shaxsga jamiyatning ta’sir etishi ijtimoiy hodisa deb qaraladi",
          "- tayyorlash",
          "- Har tomonlama barkamol avlodni shakllantirish"
        ],
        [
          "- Pedagogik kengash",
          "- Metodik birlashma",
          "- Metodik kengash",
          "- Barcha javoblar to’g’ri"
        ],
        [
          "- Ta’lim muassasasi pedagogic jamoasi uchun o’z vakolati doirasida me’yoriy talablarni ishlab",
          "- chiqadi",
          "- O’quv jarayonini tashkil qilishning turli shakl va metodlari muhokamasi,amalyotga tadbiq etish",
          "- Ta’lim muassasasi jamoasi oldiga qo’yilgan maqsad va vazifalarni bajarilishini amalga oshirish"
        ],
        [
          "- Ta’lim muassasasini rivojlantirish yo’nalishlarini istiqbol rejasini belgilash",
          "- Ta’lim muassasasi pedagogic jamoasi uchun o’z vakolati doirasida me’yoriy talablarni ishlab",
          "- chiqadi",
          "- Pedagogic jamoaning ma’lum yo’nalishlardagi faoliyatini tahlil qilish va yakuniy xulosa"
        ],
        [
          "- Iste’dod",
          "- Qiziqish",
          "- Faoliyat",
          "- Ziyraklik"
        ],
        [
          "- Maktab",
          "- Vazirlik",
          "- Pedagogik kengash",
          "- Maktab va maktabgacha ta’lim bo’limi"
        ],
        [
          "- 7",
          "- 9",
          "- 5",
          "- 3"
        ],
        [
          "- 7",
          "- 4",
          "- 5",
          "- 6"
        ],
        [
          "- Individ",
          "- Shaxs",
          "- Inson",
          "- Odam"
        ],
        [
          "- Shaxs,davlat va jamiyat,uzluksiz ta’lim,san’at,ishlab chiqarish",
          "- Shaxs,davlat va jamiyat,uzluksiz ta’lim,fan,ishlab chiqarish",
          "- Inson,davlat va jamiyat,uzluksiz ta’lim,fan,ishlab chiqarish",
          "- Shaxs,davlat va jamiyat,oliy ta’lim,fan,ishlab chiqarish"
        ],
        [
          "- Test metodi",
          "- Pedagogic tahlil qilish",
          "- Pedagogic kuzatish",
          "- Bolalar ijodini o’rganish"
        ],
        [
          "- Mantiq",
          "- Ta’lim menejmenti",
          "- Etika",
          "- Estetika"
        ],
        [
          "- Ko’nikma",
          "- Bilim",
          "- Malaka",
          "- Ma’lumot"
        ],
        [
          "- Malaka",
          "- Ma’lumot",
          "- Bilim",
          "- Ko’nikma"
        ],
        [
          "- Yaxlit pedagogic jarayon",
          "- O’quvchilarni nazariy bilim,amaliy ko’nikma va malakalar bilan qurollantirish",
          "- Aniq maqsad hamda ijtimoiy tarixiy tajriba asosida yosh avoldni har tomonlama o’stirish",
          "- Ta’lim tarbiya jarayoni,mazmuni,qonuniyatlari,tamoyillari,shakl,metod va vositalari"
        ],
        [
          "- Yaxlit pedagogic jarayon",
          "- ta’lim tarbiya jarayoni,mazmuni,qonuniyatlari,tamoyillari,shakl,metod va vositalari",
          "- Aniq maqsad hamda ijtimoiy tarixiy tajriba asosida yosh avoldni har tomonlama o’stirish",
          "- O’quvchilarni nazariy bilim,amaliy ko’nikma va malakalar bilan qurollantirish"
        ],
        [
          "- O’quvchilarni nazariy bilim,amaliy ko’nikma va malakalar bilan qurollantirish",
          "- Yosh avlodni har tomonlama o’stirish,xulq-atvori va dunyoqarashini tarkib toptirish jarayoni",
          "- Ta’lim tarbiya jarayoni,mazmuni,qonuniyatlari,tamoyillari,shakl,metod va vositalari",
          "- Yaxlit pedagogic jarayon"
        ],
        [
          "- Pedagogika",
          "- Tarbiya",
          "- Mantiq",
          "- Falsafa"
        ],
        [
          "- 7",
          "- 9",
          "- 3",
          "- 5"
        ],
        [
          "- Qadriyat",
          "- Umid",
          "- Ishonch",
          "- Istak"
        ],
        [
          "- Ekologik qadriyatlar",
          "- Mehnat bilan bog’liq qadriyatlar",
          "- Aqliy bilish faoliyati bilan bog’liq qadriyatlar",
          "- Barcha javoblar to’gri"
        ],
        [
          "- Ijtimoiy-iqtisodiy qadriyatlar",
          "- Ma’naviy-axloqiy qadriyatlar",
          "- Badiiy estetik qadriyatlar",
          "- Barcha javoblar to’g’ri"
        ],
        [
          "- 10",
          "- 8",
          "- 4",
          "- 6"
        ],
        [
          "- Farobiy",
          "- Navoiy",
          "- Beruniy",
          "- Ibn Sino"
        ],
        [
          "- 8",
          "- 5",
          "- 15",
          "- 10"
        ],
        [
          "- Pedagogika tarixi",
          "- Pedagogic texnologiya",
          "- Maktabgacha pedagogika",
          "- Falsafa"
        ],
        [
          "- Ta’lim samaradorligini oshiradi",
          "- O’quv maqsadlarini belgilaydi",
          "- Interfaol usullardan foydalanishni nazarda tutadi",
          "- O’quv maqsadlariga erishishni kafolatlaydigan o’quv jarayonini loyihalashni ko’zda tutadi"
        ],
        [
          "- Kompetensiya",
          "- Barcha javoblar to’g’ri",
          "- Tayanch kompetensiyalar",
          "- Kompetentlik"
        ],
        [
          "- Amaliy faoliyat,trening",
          "- Treninglar tashkil qilish,mashqlar yordamida amaliy tayyorgarlik",
          "- Anatomo-fiziologik tayyorgarlik,amaliy faoliyat",
          "- O’z-o’zini to’g’ri baholash,doimiy ravishda o’rganib borish"
        ],
        [
          "- Ishchanlik o’yinlari,trening",
          "- O’z-o’zini anglash va to’g’ri baholash",
          "- Barcha javoblar to’g’ri",
          "- Maxsus mashqlar,amaliy faoliyat"
        ],
        [
          "- Qobiliyatlarning muayyan darajasiga erishish,trening",
          "- Mavjud qobiliyatlarni qayta tiklab boorish,amaliy faoliyat",
          "- Maxsus mashqlar va treninglar tashkil etish",
          "- O’z-o’zini anglash va to’g’ri baholash"
        ],
        [
          "- Mashqlar yordamida amaliy tayyorgarlik",
          "- Maxsus mashqlar",
          "- Amaliy faoliyat",
          "- Ishchanlik o’yinlari"
        ],
        [
          "- 9",
          "- 8",
          "- 7",
          "- 6"
        ],
        [
          "- Yusuf Xos Xojib",
          "- M.Qoshg’ariy",
          "- A.Navoiy",
          "- A.Avloniy"
        ],
        [
          "- Talab,istiqbol,rag’batlantirish va jazolash,jamoatchilik fikri",
          "- Rag’batlantirish,jazolash",
          "- O’rgatish va talab qilish",
          "- Ishontirish va maqullash"
        ],
        [
          "- Avvolo iqtidoriga,pedagogic va psixologik mahoratiga tayanish kerak",
          "- Ota – onasini o’quv muassasasiga chaqirtirishi va suhbat o’tkazib ogohlantirishi kerak",
          "- Darhol tartibsiz o’quvchini topib unga nisbatan tarbiyaviy jazo metodini qo’llashi shart",
          "- O’zi ishlayotgan o’quv muassasi rahbariyatiga yordam so’rab murojaat qilishi kerak"
        ],
        [
          "- Shaxslararo munosabatlarning mexanizmlari",
          "- Muloqotga kirishuvchilarning o’zoro bir birlarini idrok qilish jarayoni",
          "- Muloqotga kirishuvchilarning hatti harakatlari orqali ta’sir otkazish jarayoni",
          "- Muloqotga kirishuvchilarning axborot ayirboshlash jarayoni"
        ],
        [
          "- Ushinskiy",
          "- Makarenko",
          "- Amanashveli",
          "- Avloniy"
        ],
        [
          "- O’qitish nazariyasi",
          "- O’qitish texnikasi",
          "- Barcha javoblar to’g’ri",
          "- O’qitish texnologiyalari"
        ],
        [
          "- Noyob qobiliyat",
          "- Anglash qobiliyati",
          "- Bilish qobiliyati",
          "- Konstruktiv qobiliyat"
        ],
        [
          "- Pedagogic jarayonda yuzaga keladigan pedagogic nizolarni bartaraf etish",
          "- O’quvchilarda fanlarga qiziqishni uyg’ota olish",
          "- Nazorat ishlarni tashkil etishga ijodiy yondashish",
          "- Rag’batlantirish va jazolashning o’quvchilarga ta’sirini munosib baholash"
        ],
        [
          "- Barcha javoblar to’g’ri",
          "- Mustaqil ravishda yangi metodlarni asoslash",
          "- Dars konspektini tayyorlash",
          "- O’ziga xos original o’quv materiallarni tayyorlash"
        ],
        [
          "- Nazorat ishlarini tashkil etishga ijodiy yondashish",
          "- O’quvchilar bilan ta’limiy hamkorlikka erishish",
          "- Topshiriqlar yuzasidan o’quvchilarning shaxsiy fikrlarini tinglay olish",
          "- Ta’lim va tarbiya jarayonini mohiyatini tushunish"
        ],
        [
          "- Ijobiy nizolarni rivojlantira bilish",
          "- Har bir o’quvchini shaxs sifatida tushuna olish",
          "- Barcha javoblar to’g’ri",
          "- O’quv tarbiya jarayonini didaktik,psixologik va metodik jihatdan rejalashtirish tahlil qilish"
        ],
        [
          "- Anglash qobiliyati",
          "- Kommunikativ qobiliyat",
          "- Bilish qobiliyati",
          "- Konstruktiv qobilayat"
        ],
        [
          "- 2",
          "- 3",
          "- 4",
          "- 1"
        ],
        [
          "- 1",
          "- 3",
          "- 2",
          "- 5"
        ],
        [
          "- 3",
          "- 1",
          "- 4",
          "- 2"
        ],
        [
          "- 4",
          "- 1",
          "- 3",
          "- 2"
        ],
        [
          "- 3",
          "- 4",
          "- 1",
          "- 2"
        ],
        [
          "- Mahsuldor ijodkorlikda",
          "- Kreativ ijodkorlikda",
          "- Barcha javoblar to’g’ri",
          "- Evristik ijodkorlikda"
        ],
        [
          "- Konstruktiv qobiliyat",
          "- Didaktik qobiliyat",
          "- Kommunikativ qobiliyat",
          "- Anglash qobiliyati"
        ],
        [
          "- Anglash qobiliyati",
          "- imkon beradgigan o'qituvchilarga xos individual psixologik xususiyat?",
          "- Konstruktiv qobiliyat",
          "- Didaktik qobiliyat"
        ],
        [
          "- Rivojlantiruvchi maqsad",
          "- Talaba,ta’lim-tarbiya maqsadi,ta’lim va tarbiya mazmuni",
          "- Kommunikativ vositalar",
          "- Talaba,o’qituvchi,o’quv materiallari"
        ],
        [
          "- Izohli-tasvirli,texnologik,ijodiy",
          "- Individual,guruhli,frontal",
          "- Nazariy va amaliy",
          "- Stapioner,erkin-eksternet"
        ],
        [
          "- Muloqotmandlik va tashkilotchilik",
          "- Boshqarishning obekt va subektlaridan tashkil topgan",
          "- To’g’ri va teskari aloqadan iborat",
          "- Mo’ljalli,boshqaruvchi,tekshiruvchi,kuzatuvchi harakatlar bosqichidan iborat"
        ],
        [
          "- Kommunikativ qobiliyat",
          "- Tashkilotchilik qobiliyati",
          "- Pedagogic intuatsiya",
          "- Didaktik qobiliyat"
        ],
        [
          "- Tezkorlik,ba’zan lahzada shakllanadigan faraz va masalaning yechimi",
          "- Barcha javoblar to’g’ri",
          "- Faraz va masala yechimining yetarli darajada mantiqiy asoslanmaganligi",
          "- Ijobiy intuatsiya qaror qabul qilishda nomoyon bo’ladi"
        ],
        [
          "- Barcha javoblar to’g’ri",
          "- Pedagogic ziyraklik",
          "- Pedagogik empatiya",
          "- Pedagogic intuatsiya"
        ],
        [
          "- Motiv bosqich,o’quv bilim faoliyati va boshqaruvdan iborat",
          "- Ta’lim va tarbiya berish",
          "- O’quvchi va o’qituvchining birgalikda faoliyatidan iborat",
          "- O’quvchining xususiy o’rganuvchanligidan iborat"
        ],
        [
          "- Lerner",
          "- Saidahmedov",
          "- Bespalko",
          "- Nazarova"
        ],
        [
          "- S.Stepanov,I.Semyanov",
          "- C.Davidov.I.S.Ladenko",
          "- S.Alg’tshuller,O.D.Bogdanov",
          "- M.V.Klarin,C.A.Petrovskiy"
        ],
        [
          "- Uning o’zagi muommoli savolga javob qidirishni tashkil etish",
          "- Muommoni yechis usullarini izlash",
          "- Muommolarning yechimi usulini izlashni tashkil qilish",
          "- Savollarga javob berish"
        ],
        [
          "- O’qitish texnologiyasi",
          "- Barcha javoblar to’g’ri",
          "- O’qitish nazariyasi",
          "- O’qitish texnikasi"
        ],
        [
          "- Obektiv va sub’ektiv munosabatlarni o’rnatish darajasida ishlaydi",
          "- Sub’ektiv munosabatlarni o’rnatish darajasida ishlaydi",
          "- Obektiv munosabatlarni o’rnatish darajasida ishlaydi",
          "- Nazariya va amaliyot o’rtasida oraliq holatni egallaydi"
        ],
        [
          "- Ta’lim evolutsiyasining vazifalar davri",
          "- Ob’ektiv jarayon bo’lib,ta’lim evolutsiyasini yangi vazifalarini hal qilish uchun tayyorgarlik",
          "- Ta’lim evolutsiyasini amalga oshirish",
          "- davri"
        ],
        [
          "- Empatiya",
          "- Barcha javoblar to’g’ri",
          "- Ziyraklik",
          "- Intuatsiya"
        ],
        [
          "- Obyektni his qilish",
          "- Barcha javoblar to’g’ri",
          "- Me’yor va yondashuvni his qilish",
          "- Dahldorlikni his qilish"
        ],
        [
          "- Tashkilotchilik qobiliyati",
          "- Kommunikativ qobiliyat",
          "- Akademik qobiliyat",
          "- Perseptiv qobiliyat"
        ],
        [
          "- Akademik qobiliyat",
          "- Perseptiv qobiliyat",
          "- Tashkilotchilik qobiliyati",
          "- Kommunikativ qobiliyat"
        ],
        [
          "- O’z bilimlarini kengaytirish va chuqurlashtirish",
          "- O’qituvchining madaniyati va muloqotini shakllantirish",
          "- O’qituvchining o’z bilim va ilmiy faoliyatini namoyon qilish",
          "- Muloqotning yangi vaziyatini to’g’irlash"
        ],
        [
          "- Karlson",
          "- Mayrs",
          "- Xeyvlox",
          "- Rodjers"
        ],
        [
          "- Avtoritar qobiliyat",
          "- Kommunikativ qobiliyat",
          "- Nutq qobiliyati",
          "- Tashkilotchilik qobiliyati"
        ],
        [
          "- Kommunikativ qobiliyat",
          "- Perseptiv qobiliyat",
          "- Tashkilotchilik qobiliyati",
          "- Avtoritar qobiliyat"
        ],
        [
          "- Pedagogic hayol",
          "- Didaktik qobiliyat",
          "- Perseptiv qobiliyat",
          "- Avtoritar qobiliyat"
        ],
        [
          "- Perseptiv qobiliyat",
          "- Kommunikativ qobiliyat",
          "- Akademik qobiliyat",
          "- Didaktik qobiliyat"
        ],
        [
          "- Yaratilgan yangilikni amalda qo’llay bilish bosqichi",
          "- Yangilikni yoyish,uni keng tadbiq etish bosqichi",
          "- Barcha javoblar to’g’ri",
          "- Ixtiro qilish,yangi yangilik yaratish jarayoni"
        ],
        [
          "- Yangilikka bo’lgan munosabat",
          "- Idrok qilish qobiliyati",
          "- Oliy maktab o’qituvchisining innovatsion faoliyati",
          "- Muloqot madaniyati"
        ],
        [
          "- Tashkilotchilik qobiliyati",
          "- Pedagogic hayol",
          "- Kommunikativ qobiliyat",
          "- Nutq qobiliyati"
        ],
        [
          "- Avtoritar qobiliyat",
          "- Perseptiv qobiliyat",
          "- Akademik qobiliyat",
          "- Pedagogik hayol"
        ],
        [
          "- Ijodiy tafakkur",
          "- Mustaqil fikr",
          "- Ijodiy yondashuv",
          "- Intizomiylik"
        ],
        [
          "- Bililmlar bilan qurollanish maqsadida",
          "- Intelektual faoliyatga qiziqish uyg’otish sifatida",
          "- Muloqot doirasining kengayishida",
          "- Shaxsni hayotga va mehnatga tayyorlashning muhim jihati sifatida"
        ],
        [
          "- Yoshi",
          "- Harakat",
          "- Tashqi qiyofa",
          "- Faoliyat"
        ],
        [
          "- N.Leontov,A.Petrovskiy",
          "- D.Felg’dshteyn,D.Uznadze",
          "- D.Anang’ev,K.K.Platonov",
          "- E.Shpanger,Maslou"
        ],
        [
          "- Bilish faoliyatiga ehtiyoj,axloqiy-estetik va siyosiy qoniqish",
          "- Bilishga tayyorlik,bilish faoliyatining malaka va ko’nikmalari",
          "- Konkret faoliyatga bevosita faol qiziqish,axloqiy-estetik va ruhiy qoniqish",
          "- Konkret faoliyatga bevosita va bilvosita qiziqish"
        ],
        [
          "- Blonskiy",
          "- Skatkin",
          "- Aristova",
          "- Esipov"
        ],
        [
          "- Forobiy",
          "- Aristova",
          "- Skatkin",
          "- Esipov"
        ],
        [
          "- Ibn-Sino",
          "- Azarov",
          "- Beruniy",
          "- Al-Kindiy"
        ],
        [
          "- Farobiyning “Baxtga saodatga erishuv” to’g’risida",
          "- A.Jomiy “Musiqa “ risolasi",
          "- Beruniy “Mashud qonuniy”",
          "- A.Navoiyning “Maxbub ul- qullub”"
        ],
        [
          "- O’quv jarayonida o’rganilayotgan fan asoslarining muayyan davrdagi metodlariga bog’liq",
          "- Bayon qilinadigan materiallarning xarakteriga bog’liq",
          "- Ta’lim oluvchilarning bilimi va rivojlanish darajasiga bog’liq",
          "- O’quv mashg’ulotlarining didaktik maqsadlariga va vazifalariga bog’liq"
        ],
        [
          "- O’qituvchi rahbarligidagi mustaqil ish metodlari hammasi",
          "- Reproduktiv va muommoli-ijodiy",
          "- Induktiv va deduktiv",
          "- Ifodali,ko’rgazmali,amaliy"
        ],
        [
          "- Shaxsiy va kasbiy",
          "- Namunalar bo’yicha mustaqil ishlar : rekonstruktiv-variantiv,evristik,ijodiy tadqiqot",
          "- G’oyaviy,nazariy saviyasini oshirish,kasbiy mahorati va madaniyatini shakllantirish",
          "- Ilmiylik va ijodiy tadqiqot"
        ],
        [
          "- 5",
          "- 2",
          "- 3",
          "- 4"
        ],
        [
          "- Nutqning grammatik to’g’riligi,uning leksik boyligi,aniq va ravshan ifodalanganligi",
          "- Tinglay olish,qo’llab quvvatlash",
          "- Tanqidiy nuqtai nazar,o’z fikrini himoya qilish",
          "- Keng fikrlilik,tinglovchini zeriktirmaydigan muloqot o’rnatish"
        ],
        [
          "- Nutq qobiliyati",
          "- Avtoritar qobiliyat",
          "- Pedagogic hayol",
          "- Kommunikativ qobiliyat"
        ],
        [
          "- Didaktik qobiliyat",
          "- Perseptiv qobiliyat",
          "- Tashkilotchilik qobiliyati",
          "- Avtoritar qobiliyat"
        ],
        [
          "- 7",
          "- 9",
          "- 6",
          "- 5"
        ],
        [
          "- 10",
          "- 8",
          "- 7",
          "- 9"
        ],
        [
          "- Bilimi,ishonchi,qobiliyati va xulqi",
          "- Ijtimoiy madaniyat",
          "- Kasbiy faoliyatda yetuklik",
          "- Kasbiy ahamiyatli madaniyat"
        ],
        [
          "- Talabalar uchun auditoriyalar,yotoqxonalar zarur emas",
          "- Moliyaviy harajatlar asosan o’quv uslubiy materillar tayyorlash uchun,auditoriyalar uchun",
          "- Innovatsion o’qitish,lector o’qitish,testlar",
          "- Electron kutubxona,testlar,multimediya,o’qitish"
        ],
        [
          "- Testlar,electron kutubxona,lector o’qitish",
          "- O’qish muddatini o’quvchi o’zi belgilaydi,qisqa muddat ichida ko’p hajmdagi axborotni uzatish",
          "- Masofadan o’qitish,multimediya o’qitish",
          "- Electron kutubxona,innovatsion o’qitish"
        ],
        [
          "- Innovatsion o’qitish,lector o’qitish,electron kutubxona",
          "- Multemediya o’qitish,innovatsion o’qitish,testlar",
          "- Darslik,audio va video darsliklar,onlayn darslar (internet sahifa)",
          "- Masofadan o’qitish,lector o’qitish,innovatsion o’qitish"
        ],
        [
          "- Masofali o’qitish",
          "- Innovatsion o’qitish",
          "- Internet tarmoqlararo o’qitish",
          "- Lector o’qitish"
        ],
        [
          "- qoidasi",
          "- Baho shkalasi o’quvchiga qo’yib borilgan bahoni predmet bo’yicha umumiy bahoga birlashtirish",
          "- Bu dasturlar yi’g’indisi,u auditoriyali o’qitishda kompyuter texnologiyasidan foydalanish",
          "- imkoni"
        ],
        [
          "- Musiqa,tasviriy san’at",
          "- Matematik,texnik",
          "- Adabiyot,poeziya",
          "- Barcha javoblar to’g’ri"
        ],
        [
          "- Pedagogik obro’",
          "- Pedagogic majburiyat",
          "- Kasbiy pedagogic majburiyat",
          "- Pedagogic burch"
        ],
        [
          "- A.Romishevskiy",
          "- F.S.Keller",
          "- R.Gang’e",
          "- C.Guzeev"
        ],
        [
          "- Pedagogic burch",
          "- Pedagogik adolat",
          "- Pedagogic majburiyat",
          "- Kasbiy pedagogic majburiyat"
        ],
        [
          "- Kasbiy pedagogic majburiyat",
          "- Pedagogik majburiyat",
          "- Pedagogic burch",
          "- Pedagogik adolat"
        ],
        [
          "- Bilish",
          "- Analiz",
          "- Baholash",
          "- sintez"
        ],
        [
          "- Analiz",
          "- Tushunish",
          "- Sintez",
          "- Baholash"
        ],
        [
          "- Qo’llash",
          "- Tushunish",
          "- Bilish",
          "- Baholash"
        ],
        [
          "- Nazorat",
          "- Bilish",
          "- Analiz",
          "- Sintez"
        ],
        [
          "- 5",
          "- 2",
          "- 4",
          "- 3"
        ],
        [
          "- Pedagogik takt",
          "- Pedagagogik refleksiya",
          "- Pedagogik ijodkorlik",
          "- Pedagogik odob"
        ],
        [
          "- Ijtimoiy subektlar bilan o’zoro aloqada,madaniy muloqotda bo’lish",
          "- Mutaxassislik yo’nalishi bo’yicha axborotlar izlash va ularni qayta ishlash",
          "- O’quv adabiyotlarini talabalarga yetkazib berish",
          "- Barcha javoblar to’g’ri"
        ],
        [
          "- Inglizcha – ortga qaytish",
          "- Yunoncha – fahmlash",
          "- Lotincha – aks etish",
          "- Fransuzcha -aks etish"
        ],
        [
          "- Ta’sirlovchi vaziyat",
          "- Muommoli vaziyat",
          "- Baholash vaziyati",
          "- Nazorat vaziyati"
        ],
        [
          "- Harakatlarni tekshirish",
          "- Xatoni tuzatish,baholash",
          "- Maqsad,xatoni tuzatish",
          "- Maqsad,nazorat,baholash,natija,ta’lim metodlari"
        ],
        [
          "- Motiv",
          "- Mazmun",
          "- Maqsad",
          "- Nazorat"
        ],
        [
          "- Pedagogik bilimdonlik",
          "- Pedagogik tajriba",
          "- Pedagogik texnika",
          "- Pedagogic takt"
        ],
        [
          "- Pedagogik bilimdonlik",
          "- Pedagogik odob",
          "- Pedagogik relaksatsiya",
          "- Pedagogik qobiliyat"
        ],
        [
          "- 10",
          "- 11",
          "- 9",
          "- 12"
        ],
        [
          "- 1,2,4",
          "- 1,2,3",
          "- 1,3,4",
          "- 2,3,4"
        ],
        [
          "- O’tgan asrning 60-70-yillarida",
          "- O’tgan asrning 80-90-yillarida",
          "- O’tgan asrning 50-60-yillarida",
          "- O’tgan asrning 70-80-yillarida"
        ],
        [
          "- Tanqidiy ijodiy yondashuv,o’zoro ta’sir",
          "- O’quvchilarni bilish faoliyatini rivojlantirish",
          "- Pedagogik jarayonning ob’ektlari va sub’ektlari,shakl – usullari,ular o’rtasidagi boshqarishdan",
          "- Gaplarni yozib,saqlab olish,ijodiy yondashuv,bilim berishdan"
        ],
        [
          "- Qismlaedan tuzilgan,birikkan yaxlit narsa yoki hodisa",
          "- Ijodiy yondashuv",
          "- Gaplarni yozib,saqlab olish",
          "- O’quvchilarni bilish faoliyatini rivojlantirish"
        ],
        [
          "- Gapirib berib,tushuntirish,talaba esa bu axborotni xotirada saqlaydi",
          "- Ijodiy yondashuvda",
          "- O’zoro ta’sirlarda",
          "- Nazorat turlari (joriy,oraliq,yakuniy )"
        ],
        [
          "- Pedagogikada monitoringda",
          "- Boshqarish imkoniyati tug’iladi va u o’qituvchining yaqin ko’makdoshiga aylanadi",
          "- O’zoro ta’sirlarda",
          "- Ijodiy yondashuvda"
        ],
        [
          "- O’quv jarayonini to’g’ri tashkil etish",
          "- O’quv jarayonini mazmunli rivojlantirish",
          "- O’quv jarayonini mazmunli amalga oshirish",
          "- O’quv jarayonini vaqt doirasida olib boorish"
        ],
        [
          "- O’quvchiga qo’yib borilgan baholarni predmet bo’yicha umumiy bahoga birlashtirish",
          "- O’quv jarayonini uzluksiz,uzoq vaqt muttassil kuzatish va uni boshqarishdan",
          "- qoidalaridan",
          "- Takomillashtirish yoki o’quvchilarning bilish faoliyatini rivojlantirishdan"
        ],
        [
          "- Lotincha innotion – yangilik yaratish",
          "- Yunoncha innovation – zamonaviy yangilik",
          "- Arabcha nova – yangilik kiritish",
          "- Inglizcha innovation – yangilik kiritish,yangilikdir"
        ],
        [
          "- Ta’lim mazmuni,shakllari va metodlari",
          "- O’qitish metodlari va o’qitish texnologiyalari",
          "- Nazariya va amaliyot",
          "- O’quvchi,maqsad,mazmun,didaktik jarayon,tashkiliy shakllar,pedagog,ma’ruza va dastur"
        ],
        [
          "- Shaxsiy ijodiy – motivatsion yo’nalganligini aniqlashga qaratilgan",
          "- Innovatsion faoliyatga bo’lgan zaruriyatni anglashga qaratilgan",
          "- Voqealikni o’zgartirishga,uning muommolari va usullarini yechishni aniqlashga qaratilgan",
          "- Kasbiy faoliyatni baholashga qaratilgan"
        ],
        [
          "- 5",
          "- 4",
          "- 2",
          "- 3"
        ],
        [
          "- Inter -metod,act-harakat",
          "- Inter-hamkor , act-harakat",
          "- Inter-hamkor,act-texnologiya",
          "- Inter-nofaol,faol – harakat"
        ],
        [
          "- 8",
          "- 6",
          "- 5",
          "- 7"
        ],
        [
          "- Siniq chiziq,ilonizi,egri – bugri",
          "- Tushuncha,tikish,chiziq",
          "- Solishtirish,taqqoslash,mustahkamlash",
          "- Ilonizi,uzun chiziq,solishtirish"
        ],
        [
          "- Guruhli,liberal,avtoritar",
          "- Liberal,demokrati,trening",
          "- Avtoritar,liberal,demokratik",
          "- Demokratik,avtoritar,yakka"
        ],
        [
          "- So’z mimikasi,aks sado,axborot",
          "- Mimika,pantomimika,og’zaki nutq",
          "- Mimika,pantomimika nutq,signifikatsiya,daktiologik nutq,Morze alifbosi",
          "- Og’zaki va yozma nutq"
        ],
        [
          "- Nutqsiz ta’sir etish",
          "- Hatti-harakatlar orqali ta’sir",
          "- Ko’z qarashlar va hissiy ifoda",
          "- So’z orqali ta’sir"
        ],
        [
          "- O’quvchilar jamoasini jipslashtirish,uyushtirish,muhim vazifalarni hal etishga ruhlantirish",
          "- Bolalarga yaqinlasha olish qobiliyati",
          "- qobiliyati",
          "- Guruhiy faoliyatni shakllantirish qobiliyati"
        ],
        [
          "- Nutq yordamida o’z fikr va tuyg’ularini aniq ifodalash qobiliyati",
          "- Verbal qobiliyat",
          "- Paralingvistik ta’sir o’tkazish qobiliyati",
          "- To’g’ri muloqot maromlarini egallash qobiliyati"
        ],
        [
          "- O’zoro ta’sirlar",
          "- Pedagogic monitoring",
          "- Nazorat turlari (joriy,oraliq,yakuniy)",
          "- Pedagogik texnologiyaning tarkibiy qismi"
        ],
        [
          "- Garvard universitetining huquq maktabida 1870-yilda",
          "- Garvard universitetining huquq maktabida 1830-yilda",
          "- Oksford universitetining huquq maktabida 1870-yilda",
          "- Oksford universitetining huquq maktabida 1880-yilda"
        ],
        [
          "- Birgalikda o’qiymiz",
          "- Arra",
          "- Aqliy hujum",
          "- O’ylang – juftlikda ishlang – fikr almashing"
        ],
        [
          "- Prinsip lotincha asos,boshlanish",
          "- Prinsip lotincha tahlil",
          "- Prinsip lotincha yo’l,usul",
          "- Prinsip lotincha harakat"
        ],
        [
          "- Induktiv metodlar",
          "- Ta’lim metodlari",
          "- Og’zaki,ko’rgazmali va amaliy",
          "- Reproduktiv,izohli va ko’rgazmali"
        ],
        [
          "- Yordamchi",
          "- Frontal",
          "- Guruhiy",
          "- Asosiy"
        ],
        [
          "- Frontal",
          "- Guruhiy",
          "- Yordamchi",
          "- Asosiy"
        ],
        [
          "- Kompetensiya – lotincha so’z bo’lib tegishli,layoqatli degan ma’noni anglatadi",
          "- Kompetensiya – fransuzcha so’z bo’lib ma’naviyat degan ma’noni anglatadi",
          "- Kompetensiya – grekcha so’z bo’lib muloqot madaniyati degan ma’noni anglatadi",
          "- Kompetensiya – inglizcha so’z bo’lib madaniyat degan ma’noni bildiradi"
        ],
        [
          "- Debil,imbetsil,idiot",
          "- Klinik,psixiologik,pedagogic",
          "- Rezus omilning to’g’ri kelmasligi,xromosoma kasalliklari",
          "- Aqli zaif oligofren,demensiya"
        ],
        [
          "- Oldini olish",
          "- Nazorat",
          "- Kuzatish",
          "- Tarbiyalash"
        ],
        [
          "- Komenskiy",
          "- Stoun,Disterverg",
          "- Pestoletsi",
          "- Fisher,Ress"
        ],
        [
          "- Konsepsiya",
          "- Prinsip",
          "- Paradigma",
          "- Etika"
        ],
        [
          "- Har bir dars aniq maqsadni ko’zlab,puxta rejalashtirilgan bo’lishi lozim",
          "- Dars uchun ajratilgan soat va daqiqalarni tejash va unumli foydalanish",
          "- Har bir dars aniq g’oyaviy,mafkuraviy izlanishga ega bo’lishi lozim",
          "- Har bir dars ko’rsatmali vositalar bilan jihozlanmog’i lozim"
        ],
        [
          "- Reproduktiv",
          "- Qisman izlanish",
          "- Tadqiqot",
          "- Muommoli"
        ],
        [
          "- Reproduktiv,izohli-ko’rgazmali,muommoli-izlanishli,tadqiqot",
          "- Induktiv va deduktiv metodlar",
          "- Og’zaki metodlar",
          "- Ko’rgazmali va amaliy"
        ],
        [
          "- Pedagogning kishilar bilan qisqa muddatda muloqot o’rnata olishi,muloqot o’rnatishga intilishi",
          "- O’qituvchining obektivlik mezoni,uning ma’naviy tayyorgarlik darajasi",
          "- Pedagogning dunyoga,pedagogic voqealik va pedagogic jarayonga bo’lgan intelektual va hissiy",
          "- munosabati"
        ],
        [
          "- O’quvchilarni ta’lim jarayonida o’zlashtirgan bilimlariga aytiladi",
          "- O’quvchilarning o’quv sharoitlariga ko’nikib ketishiga aytiladi",
          "- O’quvchilarning o’zlashtirgan bilimlarini amalda qo’llash usullarini egallashlariga aytiladi",
          "- O’quvchilarni ta’lim ishining muayyan tartiblariga odatlanishlariga aytiladi"
        ],
        [
          "- Makkelif",
          "- Kyubi",
          "- Xameni",
          "- Rodjers"
        ],
        [
          "- Shaxs shakllanadigan jarayon",
          "- Muayyan dunyoqarash qaror topa boradi",
          "- Bilmaslikdan bilishlikka tomon harakatning o’z ichiga oladigan jarayon",
          "- Tarbiyalash jarayoni"
        ],
        [
          "- Barcha javoblar to’g’ri",
          "- Umumiylik,oydinlik",
          "- Haqqoniylik,puxtalik,ishonchlilik",
          "- Tartiblilik,bosqichma-bosqichlilik"
        ],
        [
          "- 5",
          "- 8",
          "- 7",
          "- 9"
        ],
        [
          "- Smenyov",
          "- Fisher",
          "- Pavlov",
          "- Stoun"
        ],
        [
          "- Gnozis-faoliyat,logos-ta’limot",
          "- Gnozis-bilish,logos – ta’limot",
          "- Gnozis-qadriyat,logos-ta’limot",
          "- Gnozis-mohiyat,logos-ta’limot"
        ],
        [
          "- O’qitish jarayoni",
          "- Ta’lim metodlari",
          "- O’qitish qoidalari",
          "- O’qitish tamoyillari"
        ],
        [
          "- O’qituvchi va o’quvchi faoliyatining birligi",
          "- Ta’lim va tarbiya birligi",
          "- O’qishni tashkil qilish,o’quvchilarni individual psixik rivojlantirish sur’atini tezlashtirish",
          "- O’quvchilarda muayyan dunyoqarashni shakllantirish"
        ],
        [
          "- Tekshirish",
          "- Yakuniy tekshirish",
          "- Aniqlash",
          "- Nazorat"
        ],
        [
          "- Ta’lim-tarbiyaning insonparvar harakterga ega ekanligi",
          "- Umumiy va o’rta ta’limning majburiyligi",
          "- Bilimli bo’lish va iste’dodni rag’batlantirish",
          "- Ta’lim tizimining dunyoviy harakterga ega ekanligi"
        ],
        [
          "- 9",
          "- 5",
          "- 11",
          "- 8"
        ],
        [
          "- Shaxsning individual rivojlanish dasturi",
          "- Pedagogning o’z-o’zini baholash dasturi",
          "- Pedagogning o’z-o’zini tahlil qilish dasturi",
          "- Pedagogning individual rivojlanish dasturi"
        ],
        [
          "- O’z-o’zini baholash dasturi",
          "- O’z-o’zini rivojlantirish dasturi",
          "- Individual rivojlanish dasturi",
          "- O’z-o’zini tahlil qilish dasturi"
        ],
        [
          "- O’z-o’zini tahlil qilish",
          "- O’z-o’zini baholash",
          "- O’z-o’zini nazorat qilish",
          "- O’z-o’zini rivojlantirish"
        ],
        [
          "- O’zi haqidagi aniq ma’lumotlarga ega bo’lish",
          "- O’zi to’g’risidagi fikrning atrofdagilar tomonidan unga berilayotgan bahoga mos kelishi",
          "- Barcha javoblar to’g’ri",
          "- O’zi haqidagi ijobiy ma’lumotlarni to’plash"
        ],
        [
          "- O’zi to’g’risidagi fikrning atrofdagilar tomonidan unga berilayotgan bahoga mos kelishi",
          "- O’zi haqidagi aniq ma’lumotlarga ega bo’lish",
          "- O’zi to’g’risidagi ijobiy ma’lumotlarni to’plash",
          "- Barcha javoblar to’g’ri"
        ],
        [
          "- O’zi to’g’risidagi fikrning atrofdagilar tomonidan unga berilayotgan bahoga mos kelishi",
          "- O’zi to’g’risidagi ijobiy ma’lumotlarni to’plash",
          "- Barcha javoblar to’g’ri",
          "- O’zi haqidagi aniq ma’lumotlarga ega bo’lish"
        ],
        [
          "- O’z-o’zini rivojlantirish",
          "- O’z-o’zini baholash",
          "- O’z-o’zini nazorat qilish",
          "- O’z-o’zini tahlil qilish"
        ],
        [
          "- O’z-o’zini baholash",
          "- O’z-o’zini rivojlantirish",
          "- O’z-o’zini tahlil qilish",
          "- O’z-o’zini nazorat qilish"
        ],
        [
          "- 4",
          "- 5",
          "- 6",
          "- 3"
        ],
        [
          "- O’zini ijtimoiy kasbiy rivojlantira olish",
          "- O’z-o’zini rivojlantirish",
          "- Kasbiy rivojlanish va yangilik yaratish",
          "- Kutilmagan vaziyatlarda ishlay olish"
        ],
        [
          "- O’zini ijtimoiy – kasbiy rivojlantira olish",
          "- Kasbiy faoliyatni hamkorlikda tashkil etish",
          "- Kasbiy faoliyatni yuqori darajada tashkil etish",
          "- Kutilmagan vaziyatlarda ishlay olish"
        ],
        [
          "- Kasbiy faoliyatni yuqorida darajada tashkil etish",
          "- O’z-o’zini boshqarish",
          "- Qo’shimcha faoliyatni hamkorlikda tashkil etish",
          "- O’z-o’zini rivojlantirish,o’z-o’zini nomoyon etish"
        ],
        [
          "- Kasbiy faoliyatni yuqorida darajada tashkil etish",
          "- Qo’shimcha faoliyatni hamkorlikda bajarish",
          "- O’z-o’zini rivojlantirish va o’z-o’zini namoyon qilish",
          "- O’z-o’zini boshqarish,kasbiy rivojlanish va yangiliklar yaratish"
        ],
        [
          "- Kasbiy faoliyatni yuqori darajada tashkil etish",
          "- Qo’shimcha faoliyatni hamkorlikda tashkil etish",
          "- O’z-o’zini rivojlantirish,o’z-o’zini nomoyon etish",
          "- O’z-o’zini boshqarish,kasbiy rivojlanish"
        ],
        [
          "- O’z-o’zini boshqarish,kasbiy rivojlanish",
          "- Qo’shimcha faoliyatni hamkorlikda tashkil etish",
          "- Kasbiy faoliyatni yuqori darajada tashkil etish",
          "- O’z-o’zini rivojlantirish,o’z-o’zini nomoyon etish"
        ],
        [
          "- Kommunikativ",
          "- Psixologik",
          "- Kreativ",
          "- Metodik"
        ],
        [
          "- Psixologik",
          "- Kreativ",
          "- Metodik",
          "- Kommunikativ"
        ],
        [
          "- Innovatsion",
          "- Kommunikativ",
          "- Shaxsiy",
          "- Kreativ"
        ],
        [
          "- Psixologik",
          "- Kommunikativ",
          "- Shaxsiy",
          "- Kreativ"
        ],
        [
          "- Kommunikativ",
          "- Ektremal",
          "- Shaxsiy",
          "- Texnologik"
        ],
        [
          "- Information",
          "- Kreativ",
          "- Kommunikativ",
          "- Shaxsiy"
        ],
        [
          "- Informatsion",
          "- Shaxsiy",
          "- Kreativ",
          "- Innovatsion"
        ],
        [
          "- Information",
          "- Metodik",
          "- Kreativ",
          "- Innovatsion"
        ],
        [
          "- Ektremal",
          "- Kommunikativ",
          "- Texnologik",
          "- Shaxsiy"
        ],
        [
          "- Maxsus",
          "- Ijtimoiy",
          "- Shaxsiy",
          "- Tehnologik"
        ],
        [
          "- Psixologik",
          "- Ijtimoiy",
          "- Metodik",
          "- Maxsus"
        ],
        [
          "- Turbovskiy",
          "- Kuzmina",
          "- Markova",
          "- Pleskachi"
        ],
        [
          "- Kasbiy jihatdan takomillashishga nisbatan rag’batlantirish",
          "- O’z-o’zicha belgilangan maqsadga erishish emas,balkim bilim olish,tajriba orttirish usuli",
          "- O’z-o’zini tahlil qilish",
          "- Barcha javoblar to’g’ri"
        ],
        [
          "- Polyakova",
          "- Turbovskiy",
          "- Markova",
          "- Kuzmina"
        ],
        [
          "- O’qituvchilarning o’quvchilar yordamida qiyinchiliklarni bartaraf etishi",
          "- O’qituvchiga boshqa shaxs ta’sir etib turgan holda,qiyinchiliklarni yengish",
          "- O’qituvchilarning bir jamoada ishlab,kamchiliklarini bartaraf etish",
          "- O’qituvchi o’z-o’ziga ta’sir o’tkazib kasbiy faoliyatida duch keladigan qiyinchiliklarni yengishi"
        ],
        [
          "- Kuzmina",
          "- Turbovskiy",
          "- Suxomlinskiy",
          "- Polyokova"
        ],
        [
          "- Emotsional ko’tarinkilik",
          "- Tetiklik",
          "- Rag’batlantiruvchi",
          "- Indikatorlik"
        ],
        [
          "- Malaka va ko’nikmalarning rivojlantirishni ta’minlaydigan tetiklik holatini yo’qligi",
          "- Barcha javoblar to’g’ri",
          "- O’z ishidan qoniqmaganlikning psixologik holati",
          "- O’qituvchining ta’lim jarayonidagi qiyinchiligi bo’lib,uni hal qilish uchun shart-sharoit yo’qligi"
        ],
        [
          "- Kuzmina",
          "- Zagnoyanskiy",
          "- Polyakova",
          "- Suxomlinskiy"
        ],
        [
          "- Sosnovskiy",
          "- Barchasi",
          "- Kuliyev",
          "- Evert"
        ],
        [
          "- Barcha javoblar to’g’ri",
          "- Psixologik,metodik,ektremak kompetentlik",
          "- Ijtimoiy,shaxsiy komoetentlik",
          "- Maxsus,texnologik kompetentlik"
        ],
        [
          "- Yangi axborotlarni o’zlashtiradi",
          "- O’z amaliy faoliyatida an’anaviy",
          "- Eski bilimlarga tayanadi",
          "- Davr talablariga e’tibor qaratmaydi"
        ],
        [
          "- Kutilmagan vaziyatlarda harakat rejasiga ega bo’la olishda",
          "- Barcha holatlarda",
          "- Bir-biriga zid ma’lumotlardan foydalanishda",
          "- Murakkab jarayonlarda,noaniq vazifalarni bajarishda"
        ],
        [
          "- Kasbiy kompetentlik",
          "- Kasbiy faoliyat",
          "- Pedagogic mahurat",
          "- Pedagogic texnika"
        ],
        [
          "- Pedagogic mahurat",
          "- Iqtidor",
          "- Pedagogic tehnika",
          "- Kompetentlik"
        ],
        [
          "- 5",
          "- 3",
          "- 2",
          "- 4"
        ],
        [
          "- Regulyatsion – kommunikativ",
          "- Axborot-kommunikativ",
          "- Affektiv – kommunikativ",
          "- Barcha javoblar to’g’ri"
        ],
        [
          "- Kasbiy pedagogic malakani uzluksiz o’zlashtirib boorish",
          "- Ksabiy pedagogic ko’nikmani uzluksiz o’zlashtirib boorish",
          "- Barcha javoblar to’g’ri",
          "- Kommunikativ qobiliyatlarni rivojlantirish"
        ],
        [
          "- Ta’sirning rejalashtirilayotgan metodlaridan",
          "- Vaziyat qatnashchilari bo’lgan o’quvchilarning individual yosh xususiyatlaridan",
          "- Barcha javoblar to’g’ri",
          "- Sinf jamoasining shakllanib ulgurgan darajasidan"
        ],
        [
          "- O’zoro fikr almashishga doir sifatlar,malaka va ko’nikmalarga ega bo’lish",
          "- O’quvchilarning ta’lim va bilim olishga bo’lgan ishtiyoqini kuchaytirish",
          "- Mustaqil fikr yuritish ,o’z fikrini erkin bayon etish,insoniy qadr-qimmat tuyg’usini shakllantirish",
          "- Barcha javoblar to’g’ri"
        ],
        [
          "- O’quvchilarga og’zaki ta’sir qilishda shirinsuxanlik va insoniylik tuyg’ularini namoyish etish",
          "- So’z bilan og’zaki ta’sir etishning barcha bosqichlarida hissiy osoyishtalikning namoyon bo’lishi",
          "- Barcha javoblar to’g’ri",
          "- O’zoro fikr almashishga doir sifatlar,ko’nikmalar va malakalarning mavjudligi"
        ],
        [
          "- Ma’ruza",
          "- Suhbat",
          "- Tushuntirish",
          "- Hikoya"
        ],
        [
          "- Debrifing",
          "- Debat",
          "- Diskussiya",
          "- Demostratsiya"
        ],
        [
          "- Diskussiya",
          "- Debrifing",
          "- Demostratsiya",
          "- Debat"
        ],
        [
          "- Debat",
          "- Demostratsiya",
          "- Diskussiya",
          "- Debrifing"
        ],
        [
          "- Kashfiyot va tadqiqotchilik",
          "- Demostratsiya",
          "- Hamkorlikda o’qitish",
          "- Qiziqishlar markazi"
        ],
        [
          "- Demostratsiya",
          "- Diskussiya",
          "- Hamkorlikda o’qitish",
          "- Qiziqishlar markazi"
        ],
        [
          "- Debrifing",
          "- Debat",
          "- Colliqua",
          "- Brainstorming"
        ],
        [
          "- Ta’limiy o’yinlar va raqobatchilik",
          "- Case study",
          "- Qiziqishlar markazi",
          "- Brainstorming"
        ],
        [
          "- Perseptiv qobiliyat",
          "- Avtoritar qobiliyat",
          "- Tashkilotchilik qobiliyati",
          "- Kommunikativ qobiliyat"
        ],
        [
          "- Akademik qobiliyat",
          "- Tashkilotchilik qobiliyati",
          "- Kommunikativ qobiliyat",
          "- Perseptiv qobiliyat"
        ],
        [
          "- Bilim",
          "- Malaka",
          "- Ko’nikma",
          "- Kompetensiya"
        ],
        [
          "- Emoatsiya",
          "- Intuatsiya",
          "- Induksiya",
          "- Ziyraklik"
        ],
        [
          "- Pedagogic muloqot",
          "- Pedagogic nazokat",
          "- Pedagogic qobiliyat",
          "- Pedagogik releksatsiya"
        ],
        [
          "- Muloqotga kirishuvchilarning o’zoro bir birlarini idrok qilish jarayoni",
          "- Muloqotga kirishuvchilarning axborot ayirboshlov jarayoni",
          "- Shaxslararo munosabatlarning mexanizmlari",
          "- Muloqotga kirishuvchilarning hatti-harakatlari orqali ta’sir o’tkazish jarayoni"
        ],
        [
          "- O’z-o’zini anglash va to’g’ri baholash",
          "- Mavjud qobiliyatlarning qayta tiklab boorish,amaliy faoliyat",
          "- Maxsus mashqlar va treninglar tashkil qilish",
          "- Qobiliyatlarning muayyan darajasiga erishish,trening"
        ],
        [
          "- Interfaol usullardan foydalanishni nazarda tutadi",
          "- O’quv maqsadlariga erishishni kafolatlaydigan o’quv jarayonini loyihalashni ko’zda tutadi",
          "- O’quv maqsadlarini belgilaydi",
          "- Ta’lim samaradorligini belgilaydi"
        ],
        [
          "- Dekart",
          "- Komenskiy",
          "- Sumeylenkov",
          "- Makarenko"
        ],
        [
          "- Dekart",
          "- Makarenko",
          "- Ushinskiy",
          "- Komenskiy"
        ],
        [
          "- Jamoatchilik fikri",
          "- Talab",
          "- Istiqbol",
          "- Rag’batlantirish va jazolash"
        ],
        [
          "- Rag’batlantirish va jazolash",
          "- Jamoatchilik fikri",
          "- Talab",
          "- Istiqbol"
        ],
        [
          "- Rag’batlantirish va jazolash",
          "- Talab",
          "- Jamoatchilik fikri",
          "- Istiqbol"
        ],
        [
          "- Rag’batlantirish va jazolash",
          "- Istiqbol",
          "- Talab",
          "- Jamoatchilik fikri"
        ],
        [
          "- Taqlid qilish",
          "- Barcha javoblar to’g’ri",
          "- O’quvchilarni ishontirish",
          "- O’quvchilar ongiga ta’sir o’tkazish"
        ],
        [
          "- Taqlid qilish",
          "- O’quvchilarni ishontirish",
          "- Barcha javoblar to’g’ri",
          "- O’quvchilarga ongiga ta’sir o’tkazish"
        ],
        [
          "- 5",
          "- 3",
          "- 2",
          "- 4"
        ],
        [
          "- Tayanch",
          "- Yetakchi",
          "- Yordamchi",
          "- Asosiy"
        ],
        [
          "- Tayanch xususiyat",
          "- Yordamchi xususiyat",
          "- Asosiy xususiyat",
          "- Yetakchi xususiyat"
        ],
        [
          "- Kommunikativ",
          "- Bilish",
          "- Anglash",
          "- Konstruktiv"
        ],
        [
          "- Bilish",
          "- Konstruktiv",
          "- Tashkilotchilik",
          "- Anglash"
        ],
        [
          "- Tashkilotchilik",
          "- Bilish",
          "- Anglash",
          "- Konstruktiv"
        ],
        [
          "- Didaktik",
          "- Tashkilotchilik",
          "- Empatik",
          "- Konstruktiv"
        ],
        [
          "- Didaktik",
          "- Anglash",
          "- Tashkilotchilik",
          "- Kommunikativ"
        ],
        [
          "- bilish",
          "- Empatik",
          "- Tashkilotchilik",
          "- Muqobillashtirish"
        ],
        [
          "- Empatik",
          "- Didaktik",
          "- Anglash",
          "- Bilish"
        ],
        [
          "- Didaktik",
          "- Empatik",
          "- Kommunikativ",
          "- Perseptiv"
        ],
        [
          "- Perseptiv",
          "- Kommunikativ",
          "- Empatik",
          "- Muqobillashtirish"
        ],
        [
          "- Ijodiy,badiiy,musiqaviy qobiliyat",
          "- E’tiborliylik,matematik,tashkilotchilik",
          "- Diqqatni jamlash,musiqaviy,matematik qobiliyat",
          "- Aqliy faollik,tahlil qilish,reaksiya tezligi"
        ],
        [
          "- Aqliy faollik",
          "- Iqtidor",
          "- Talant",
          "- Mohirlik"
        ],
        [
          "- 4",
          "- 3",
          "- 2",
          "- 5"
        ],
        [
          "- Ijodkorligini",
          "- Iqtidorini",
          "- Mohirligi",
          "- Intellektini"
        ],
        [
          "- Iste’dod",
          "- Iqtidori",
          "- Mohirligi",
          "- Intellekti"
        ],
        [
          "- Kreativ ijodkorlikda",
          "- Mahsuldor ijodkorlikda",
          "- Evristik ijodkorlikda",
          "- Barcha javoblar to’g’ri"
        ],
        [
          "- Mahsuldor ijodkorlikda",
          "- Kreativ ijodkorlikda",
          "- Evristik ijodkorlikda",
          "- Barcha javoblar to’g’ri"
        ],
        [
          "- Mahsuldor ijodkorlikda",
          "- Evristik ijodkorlikda",
          "- Barcha javoblar to’g’ri",
          "- Kreativ ijodkorlikda"
        ],
        [
          "- Iqtidor",
          "- Ijodkorlik",
          "- Iste’dod",
          "- Mohirlik"
        ],
        [
          "- Iqtidor",
          "- Qobiliyat",
          "- Mohirlik",
          "- Istedod"
        ],
        [
          "- Qobiliyat",
          "- Ko’nikma",
          "- Malaka",
          "- Mohirlik"
        ],
        [
          "- Malaka",
          "- Ko’nikma",
          "- Mohirlik",
          "- Qobiliyat"
        ],
        [
          "- Malaka",
          "- Mohirlik",
          "- Qobiliyat",
          "- Ko’nikma"
        ],
        [
          "- Malaka",
          "- Bilim",
          "- Ko’nikma",
          "- Qobiliyat"
        ],
        [
          "- Kinestetik qobiliyat",
          "- Eshitish va his etish qobiliyati",
          "- Shaxsning ichki qobiliyati",
          "- Mantiqiy qobiliyat"
        ],
        [
          "- Shaxsning ichki qobiliyati",
          "- Kinestetik qobiliyat",
          "- Voqealikni oldindan ko’rish qobiliyati",
          "- Mantiqiy qobiliyat"
        ],
        [
          "- Shaxsning ichki qobiliyati",
          "- Mantiqiy qobiliyat",
          "- Kinestetik qobiliyat",
          "- Voqealikni oldindan ko’rish qobiliyati"
        ],
        [
          "- Kommunikativ qobiliyat",
          "- Shaxsning ichki qobiliyati",
          "- Eshitish va his qilish qobiliyati",
          "- Mantiqiy qobiliyat"
        ],
        [
          "- Muloqot qilish qobiliyati",
          "- Kinestetik qobiliyat",
          "- Voqealarni oldindan ko’ra olish qobiliyati",
          "- Eshitish va his qilish qobiliyati"
        ],
        [
          "- 6",
          "- 5",
          "- 7",
          "- 3"
        ],
        [
          "- Kinestetik",
          "- Kommunikativ",
          "- Voqealarni oldindan ko’ra olish qobiliyati",
          "- Eshitish va his qilish"
        ],
        [
          "- Govard Gardner",
          "- Suxomlinskiy",
          "- Makarenko",
          "- Matmeeva"
        ],
        [
          "- Muommula",
          "- Mahurat",
          "- Xotira",
          "- Qobiliyat"
        ],
        [
          "- Vulgarizm",
          "- Varvarizm",
          "- Jargon",
          "- Konselyarizm"
        ],
        [
          "- Varvarizm",
          "- Jargon",
          "- Konselyarizm",
          "- Vulgarizm"
        ],
        [
          "- Vulgarizm",
          "- Konselyarizm",
          "- Varvarizm",
          "- Jargon"
        ],
        [
          "- Bog’liklikda,fuqarolik,siyosiy,baynalminal",
          "- Barcha javoblar to’g’ri",
          "- Axloqiy,estetik,mehnat",
          "- Jismoniy,huquqiy,ekologik"
        ],
        [
          "- Hikoya",
          "- Suhbat",
          "- Axloqiy",
          "- Tushuntirish"
        ],
        [
          "- Namuna",
          "- Tushuntirish",
          "- Hikoya",
          "- Suhbat"
        ],
        [
          "- 6 -asrda",
          "- 8 -asrda",
          "- 14 -asrda",
          "- 7 -asrda"
        ],
        [
          "- Komenskiy",
          "- Makarenko",
          "- A.Jomiy",
          "- A.Avloniy"
        ],
        [
          "- Pedagogic texnika",
          "- Pedagogik faoliyat",
          "- Pedagogik kasb",
          "- Pedagogik mahorat"
        ],
        [
          "- Komenskiy",
          "- Zaripov",
          "- Makarenko",
          "- H.Abdullayev"
        ],
        [
          "- Jomiy",
          "- Koshifiy",
          "- Farobiy",
          "- Navoiy"
        ],
        [
          "- Koshifiy",
          "- Jomiy",
          "- Farobiy",
          "- Navoiy"
        ],
        [
          "- 2007",
          "- 1990",
          "- 2005",
          "- 2006"
        ],
        [
          "- O’qituvchining shaxsiy fazilatlar bo’yicha tayyorgarligi",
          "- O’qituvchining ruhiy-psixologik tayyorgarligi",
          "- O’qituvchining maxsus va ixtisoslikka oid uslubiy bilimlarni egallab borishi",
          "- Barcha javoblar"
        ],
        [
          "- Barcha javoblar",
          "- Pedagogic qobiliyatlarni namoyon eta olishi",
          "- O’qituvchilik kasbiga sadoqat,texnikani o’z o’rnida qo’llay olishi",
          "- O’z fanini o’qitish metodikasini mukammal bilishi"
        ],
        [
          "- Komenskiy",
          "- Zaripov",
          "- Ushinskiy",
          "- Rachenko"
        ],
        [
          "- Pedagogic jamoada tutgan o’rni bilan",
          "- Mehnat malakasini amalyotda qo’llay bilish",
          "- O’z bilimining ko’lami bilan",
          "- O’quvchilar bilan yaxshi munosabatda bo’lishi bilan"
        ],
        [
          "- O’quvchi",
          "- O’quvchilar guruhi",
          "- Pedagogik jamoa",
          "- Tarbiyalanuvchi inson"
        ],
        [
          "- Ijodiy ish",
          "- Loyiha",
          "- Aqliy hujum",
          "- Case study"
        ],
        [
          "- 30",
          "- 80",
          "- 10",
          "- 90"
        ],
        [
          "- Aniq fanlar",
          "- Tabiiy fanlar",
          "- Iqtisodiy",
          "- Huquq"
        ],
        [
          "- Loyiha",
          "- Case study",
          "- Amaliy ish",
          "- Modellashtirish"
        ],
        [
          "- Aqliy hujum",
          "- Suhbat",
          "- Arra metodi",
          "- Yumoloqlangan qor"
        ],
        [
          "- Amaliy o’yin metodi",
          "- BBB metodi",
          "- FSMU",
          "- Ven diagrammasi"
        ],
        [
          "- Sinf jamoasi",
          "- O’qituvchilar jamoasi",
          "- O’quvchilar guruhi",
          "- Ota- onalar"
        ],
        [
          "- Pedagogik nazokat",
          "- O’qituvchilar faoliyati",
          "- DTS",
          "- O’quvchilar faoliyati"
        ],
        [
          "- Faktik daraja",
          "- Munozaraviy daraja",
          "- Axborot darajasi",
          "- Oshkoraviy daraja"
        ],
        [
          "- Oshkoraviy daraja",
          "- Axborot darajasi",
          "- Faktik daraja",
          "- Munozaraviy daraja"
        ],
        [
          "- Axborot darajasi",
          "- Oshkoraviy daraja",
          "- Faktik daraja",
          "- Munozaraviy daraja"
        ],
        [
          "- Faktik daraja",
          "- Munozaraviy daraja",
          "- Oshkoraviy daraja",
          "- Axborot darajasi"
        ],
        [
          "- 5",
          "- 2",
          "- 4",
          "- 6"
        ],
        [
          "- Rahbar",
          "- Xodim",
          "- Murabbiy",
          "- Pedagog"
        ],
        [
          "- Tashkil etish zarurati",
          "- Pedagogic faoliyat",
          "- Pedagogic mahurat",
          "- Muloqot jarayoni"
        ],
        [
          "- Barcha tiplarga xos",
          "- Introvert",
          "- O’rta tipdagi kishilarga",
          "- Ekstravert"
        ],
        [
          "- Jamoa bilan faol ishlash",
          "- Dilkashlik",
          "- O’quvchilarni sevish",
          "- Kasbdoshlarga muhabbat"
        ],
        [
          "- Kuzatuvchanlik",
          "- Pedagogic nazokat",
          "- Empatiya",
          "- Tanqid ko’zi bilan qarash"
        ],
        [
          "- Tanqid ko’zi bilan qarash",
          "- Hozirjavoblik",
          "- Empatiya",
          "- Fantaziyani ishlata olish"
        ],
        [
          "- Uddaburonlik",
          "- Tashkilotchilik",
          "- Kuzatuvchanlik",
          "- Xushmuomilalik"
        ],
        [
          "- Psixologik",
          "- Iqtisodiy",
          "- Ijtimoiy",
          "- Ma’naviy"
        ],
        [
          "- O’quvchilarning shaxsi haqidagi axborotlar",
          "- O’z fani yuzasidan olgan axborotlar",
          "- Maktab jamoasi haqidagi axborotlar",
          "- Metodika yuzasidan axborotlar"
        ],
        [
          "- 5",
          "- 3",
          "- 4",
          "- 2"
        ],
        [
          "- Jamoa bilan birga ishlashi kerak bo’ladi",
          "- Barcha javoblar to’g’ri",
          "- O’quvchilar bilan ishlash jarayonini yaxshilash kerak bo’ladi",
          "- Individual dasturni ishlab chiqish kerak bo’ladi"
        ],
        [
          "- Pedagogik takt",
          "- Nutq texnikasi",
          "- Pedagogic nazokat",
          "- Pedagogik qobiliyat"
        ],
        [
          "- Farobiy",
          "- Makarenko",
          "- Ushinskiy",
          "- Avloniy"
        ],
        [
          "- O’ng tomonga",
          "- Orqaga",
          "- Oldinga",
          "- Chap tomonga"
        ],
        [
          "- 11-18 sm",
          "- 10-13 sm",
          "- 15-20 sm",
          "- 12-15 sm"
        ],
        [
          "- Pedagogic mahorat",
          "- Mimika",
          "- Pantomimika",
          "- Pedagogic takt"
        ],
        [
          "- Mimika",
          "- Pedagogic qobiliyat",
          "- Pantomimika",
          "- Pedagogic mahorat"
        ],
        [
          "- O’z pedagogic faoliyati natijalarini tanqidiy tahlil qila olishi",
          "- O’quvchilar va ota onalar bilan pedagogic muloqotni tashkil eta olishi",
          "- O’quvchilarni jamoada o’zoro munosabatlarida bir xil muvozanatni tartibga solish",
          "- Amaliy muommolarni hal etishda uddaburonligini namoyon eta olishi"
        ],
        [
          "- O’quvchilarni asab psixik holatini aniqlay olishi",
          "- O’quvchilarni o’ziga jalb eta olishi",
          "- Pedagogic adabiyotlardan to’g’ri foydalana olishi",
          "- Turli ziddiyatli vaziyatlarda ham o’quvchilar jamoasini boshqarishi"
        ],
        [
          "- Kasbiga xos xislatlar",
          "- O’qituvchining shaxsiy xislatlari",
          "- Shaxsiy uddaburonlik",
          "- Kasbiga xos bilimlar"
        ],
        [
          "- Shaxsiy pedagogic uddaburonlik",
          "- O’qituvchining shaxsiy xislatlari",
          "- Kasbiga xos xislatlar",
          "- Kasbiga xos bilimlar"
        ],
        [
          "- Ota onalar va jamoatchilik bilan olib boriladigan faoliyat mazmunini puxta bilishi",
          "- Ta’lim tarbiya jarayonini istiqbolli rejalashtirishi",
          "- O’quvchilarning yosh xususiyatlariga asosan psixologik imkoniyatlarini anglashi",
          "- Kuzatuvchanligi,pedagogic qobiliyatga egaligi"
        ],
        [
          "- Milliy an’ana va urf odatlarning asl mohiyatini tushunishi",
          "- Tarbiyaviy ta’sir etishning samarali usullaridan oqilona foydalana olishi",
          "- O’quvchilarni bilish faoliyatini boshqarishi",
          "- Bolalarni sevishi,kamtarligi,dilkashligi"
        ],
        [
          "- Dars mashg’ulotlarida zarur materiallarni tanlay olishi",
          "- Kamtarligi,dilkashligi",
          "- Umuminsoniy qadriyatlar",
          "- O’zini anglay olishi,pedagogic takt"
        ],
        [
          "- 15-20",
          "- 8-9",
          "- 5-6",
          "- 10-14"
        ],
        [
          "- Barcha javoblar to’g’ri",
          "- Individual",
          "- Guruh",
          "- Guruh va individual"
        ],
        [
          "- Relaksatsiya usullari",
          "- Zarur bilimlarni ma’ruzalarda o’rganish",
          "- Tegishli adabiyotlarni mustaqil o’qish",
          "- O’qituvchi nazoratida ishlash"
        ],
        [
          "- 3",
          "- 5",
          "- 2",
          "- 4"
        ],
        [
          "- Ijtimoiy",
          "- Kommunikativ",
          "- Iqtisodiy",
          "- Texnologik"
        ],
        [
          "- Pedagogning pedagogic jamoada tutgan o’rni",
          "- Ta’lim-tarbiya jarayonida o’zini o’zi boshqarish malakalari",
          "- O’qituvchining butun kasbiy faoliyatida zarur bo’lgan umumiy pedagogic malakalari",
          "- O’qituvchining butun kasbiy faoliyatida zarur bo’lgan umumiy pedagogic bilimi"
        ],
        [
          "- Pedagogic mahurat",
          "- Pedagogik texnika",
          "- Pedagogic nazokat",
          "- Pedagogic savodxonlik"
        ],
        [
          "- O’qituvchining nazokati",
          "- Gavda,qo’l va oyoq harakatidir",
          "- Pedagogic mahoratning tarkibiy qismi",
          "- O’qituvchining chiroyli nutqi"
        ],
        [
          "- Mimik ifodaning asosiy detalini",
          "- Pantomimic ifoda",
          "- O’qituvchining pedagogic texnikasini",
          "- Nutq ifodasini"
        ],
        [
          "- Golobin",
          "- Komenskiy",
          "- Kuzmina",
          "- Slastyonin"
        ],
        [
          "- Iste’dod",
          "- Maqsad",
          "- Mahorat",
          "- Motiv"
        ],
        [
          "- Iste’dod",
          "- Mahorat",
          "- Motiv",
          "- Maqsad"
        ],
        [
          "- Insonning muayyan bir faoliyat turi bilan shug’ullanib muvaffaqiyatga erishishi",
          "- Insonning tug’ma qobiliyatlari yig’indisi",
          "- Insonning muayyan bir nechta faoliyat turi bilan shug’ullanib muvaffaqiyatga erishishi",
          "- Insonni hech qanday faoliyat turi bilan shug’ullanmasdan muvaffaqiyatga erishishi"
        ],
        [
          "- Gonobolin",
          "- Beruniy",
          "- Kuzmina",
          "- Farobiy"
        ],
        [
          "- Disterverg",
          "- Beruniy",
          "- Gonobolin",
          "- Kuzmina"
        ],
        [
          "- Disterverg",
          "- Farobiy",
          "- Kuzmina",
          "- Gonobolin"
        ],
        [
          "- Mahorat",
          "- Pedagogic mahorat",
          "- Pedagogic faoliyat",
          "- Pedagogic ijod"
        ],
        [
          "- Pedagogik ijod",
          "- Pedagogic faoliyat",
          "- Pedagogik mahorat",
          "- Pedagogik navotorlik"
        ],
        [
          "- Pedagogic ijod",
          "- Pedagogik tajriba",
          "- Pedagogik mahorat",
          "- Pedagogik texnika"
        ],
        [
          "- Pedagogic ijod",
          "- Pedagogic bilimdonlik",
          "- Pedagogik navotorlik",
          "- Pedagogic texnika"
        ],
        [
          "- Pedagogik bilimdonlikda",
          "- Pedagogic texnikada",
          "- Pedagogic tajribada",
          "- Pedagogic faoliyatda"
        ],
        [
          "- Pedagogic faoliyat",
          "- Pedagogik texnika",
          "- Pedagogic bilimdonlik",
          "- Pedagogik tajriba"
        ],
        [
          "- Pedagogic texnika",
          "- Pedagogik faoliyat",
          "- Pedagogic tajriba",
          "- Pedagogic mahorat"
        ],
        [
          "- Pedagogic texnika",
          "- Pedagogic tajriba",
          "- Pedagogic mahorat",
          "- Pedagogik faoliyat"
        ],
        [
          "- Pedagogic texnika",
          "- Pedagogik muommula",
          "- Pedagogic nazorat",
          "- Pedagogic madaniyat"
        ],
        [
          "- 8",
          "- 5",
          "- 7",
          "- 6"
        ],
        [
          "- Pedagogik texnika",
          "- Pedagogik madaniyat",
          "- Pedagogik ijod",
          "- Pedagogic muommula"
        ],
        [
          "- Pedagogik ijod",
          "- Pedagogik nazokat",
          "- Pedagogik texnika",
          "- Pedagogik mahorat"
        ],
        [
          "- Pedagogik mahorat",
          "- Pedagogic qobiliyat",
          "- Pedagogik madaniyat",
          "- Pedagogic ijod"
        ],
        [
          "- O’z kasbini sevish o’quvchilarni sevish,ziyrakligi,hozirjavobligi bilan",
          "- xarakterlanadi",
          "- Pedagogic o’ylash,pedagogic fikrlash bilan xarakterlanadi",
          "- Pedagogning maqsadga muvofiq harakatlarining o’lchovi,chegarasi,vositalari sifatida"
        ],
        [
          "- O’qituvchi kasbiy malakalarining mazmuni",
          "- O’qituvchi kasbiy faolligining bir ko’rinishi",
          "- Qimmatli harakatlarning o’lchovi,me’yori va ta’sir vositasining chegarasi",
          "- Axloqiy fazilatlarni uzatish texnologiyasi"
        ],
        [
          "- Pedagogik qobiliyat",
          "- Pedagogik texnika",
          "- Pedagogik nazokat",
          "- Pedagogik qobiliyat"
        ],
        [
          "- Pedagogik texnika",
          "- Pedagogik mahorat",
          "- Pedagogik nazokat",
          "- Pedagogik qobiliyat"
        ],
        [
          "- Ijtimoiy-siyosiy,metodik bilimlar majmuasidan",
          "- Ijtimoiy-iqtisodiy,metodik bilimlar majmuasidan",
          "- Pedagogik-psixologik,metodik bilimlar majmuasidan",
          "- Iqtisodiy-siyosiy,metodi bilimlar yig’indisidan"
        ],
        [
          "- Zarur ko’nikmalar",
          "- Boshqa tavsiflar",
          "- Zarur bilimlar",
          "- Mehnat harakatlari"
        ],
        [
          "- Faoliyatni amalga oshirishga ruxat berish uchun maxsus talab",
          "- A va B",
          "- Amaliy ish tajribasiga qo’yiladigan talab",
          "- Ta’lim va o’qitishga qo’yiladigan talab"
        ],
        [
          "- A va B",
          "- Ta’lim va o’qitishga qo’yiladigan talab",
          "- Faoliyatni amalga oshirishga ruxat berish uchun maxsus talab",
          "- Amaliy ish tajribasiga qo’yiladigan talab"
        ],
        [
          "- Ta’lim va o’qitishga qo’yiladigan talab",
          "- A va B",
          "- Amaliy ish tajribasiga qo’yiladigan talab",
          "- Faoliyatni amalga oshirishga ruxat berish uchun maxsus talab"
        ],
        [
          "- Faoliyatni amalga oshirishga ruxat berish uchun maxsus talab",
          "- Amaliy ish tajribasiga qo’yiladigan talab",
          "- Ta’lim va o’qitishga qo’yiladigan talab",
          "- A va B"
        ],
        [
          "- Zarur Bilimlar",
          "- Mehnat harakatlari",
          "- Zarur ko’nikmalar",
          "- Boshqa tavsiflar"
        ],
        [
          "- 1,3,4,5",
          "- 1,2,3,4",
          "- Barchasi",
          "- 2,3,4,5"
        ],
        [
          "- Mehnat harakatlari",
          "- Zarur Bilimlar",
          "- Boshqa tavsiflar",
          "- Zarur ko’nikmalar"
        ],
        [
          "- O’zlashtirishni baholash va qayta aloqani taqdim etish",
          "- O’quv jarayonini rejalashtirish",
          "- Ta’lim va tarbiya jarayonini boshqarish",
          "- Ta’lim samaradorligini ta’minlash"
        ],
        [
          "- Faoliyatni amalga oshirishga ruxat berish uchun maxsus talab",
          "- Mehnat harakatlari",
          "- Ta’lim va o’qitishga qo’yiladigan talab",
          "- Amaliy ish tajribasiga qo’yiladigan talab"
        ],
        [
          "- 7",
          "- 5",
          "- 4",
          "- 6"
        ],
        [
          "- Podlasiy",
          "- Ushinskiy",
          "- Kuzmina",
          "- Komenskiy"
        ],
        [
          "- Tashkilotchilik,konstruktiv,perseptiv",
          "- Konstruktiv,bilimdonlik,vositachilik",
          "- Barcha javoblar to’g’ri",
          "- Perseptiv,vositachilik,bilimdonlik"
        ],
        [
          "- Tadqiqotchilik",
          "- Bilimdonlik",
          "- Tashkilotchilik",
          "- Vositachilik"
        ],
        [
          "- Tadqiqotchilik",
          "- Tashkilotchilik",
          "- Vositachilik",
          "- Loyihachilik"
        ],
        [
          "- O’z fanining metodikasi bilish",
          "- O’qitadigan fanini puxta bilish",
          "- Guruh jamoasini boshqara olish",
          "- Egallagan bilimlarni tizimlashtirish va umumlashtirish"
        ],
        [
          "- Loyihachilik",
          "- Tashkilotchilik",
          "- Shaxsiy kamolot",
          "- Safarbarlik"
        ],
        [
          "- Tadqiqotchilik",
          "- Bilimdonlik",
          "- Loyihachilik",
          "- Vositachilik"
        ],
        [
          "- Loyihachilik",
          "- Bilimdonlik",
          "- Safarbarlik",
          "- Shaxsiy kamolot"
        ],
        [
          "- Safarbarlik",
          "- Shaxsiy kamolot",
          "- Loyihachilik",
          "- Bilimdonlik"
        ],
        [
          "- Bilimdonlik",
          "- Loyihachilik",
          "- Shaxsiy kamolot",
          "- Safarbarlik"
        ],
        [
          "- Safarbarlik",
          "- Rivojlantiruvchi",
          "- Tashkilotchilik",
          "- Tadqiqotchilik"
        ],
        [
          "- Safarbarlik",
          "- Tadqiqotchilik",
          "- Tashkilotchilik",
          "- Rivojlantiruvchi"
        ]
      ],
      "correctAnswers": [
        1,
        3,
        1,
        3,
        1,
        4,
        3,
        1,
        3,
        3,
        2,
        1,
        3,
        4,
        3,
        4,
        1,
        2,
        3,
        1,
        2,
        2,
        1,
        4,
        3,
        3,
        2,
        2,
        3,
        3,
        1,
        2,
        3,
        2,
        2,
        2,
        1,
        1,
        2,
        2,
        1,
        4,
        2,
        1,
        1,
        1,
        3,
        4,
        4,
        2,
        2,
        1,
        1,
        4,
        1,
        2,
        2,
        4,
        1,
        1,
        1,
        4,
        4,
        4,
        3,
        1,
        4,
        4,
        2,
        2,
        3,
        4,
        1,
        4,
        4,
        1,
        1,
        3,
        2,
        3,
        1,
        2,
        1,
        4,
        4,
        2,
        4,
        3,
        1,
        3,
        1,
        2,
        1,
        2,
        1,
        2,
        4,
        2,
        2,
        3,
        1,
        1,
        3,
        1,
        2,
        2,
        2,
        4,
        2,
        1,
        3,
        4,
        4,
        1,
        2,
        2,
        3,
        3,
        3,
        3,
        4,
        1,
        4,
        4,
        4,
        3,
        1,
        1,
        2,
        1,
        3,
        4,
        2,
        2,
        1,
        2,
        1,
        3,
        4,
        1,
        1,
        2,
        3,
        1,
        3,
        4,
        1,
        2,
        2,
        2,
        3,
        3,
        1,
        3,
        3,
        4,
        4,
        3,
        2,
        4,
        1,
        1,
        1,
        4,
        1,
        2,
        3,
        1,
        1,
        2,
        3,
        4,
        4,
        4,
        3,
        4,
        2,
        2,
        1,
        3,
        3,
        4,
        1,
        1,
        4,
        1,
        3,
        1,
        3,
        1,
        4,
        1,
        1,
        1,
        4,
        2,
        3,
        1,
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
        1,
        4,
        1,
        1,
        4,
        3,
        4,
        2,
        3,
        4,
        2,
        3,
        2,
        4,
        1,
        4,
        4,
        2,
        3,
        2,
        3,
        2,
        3,
        4,
        2,
        1,
        4,
        1,
        1,
        2,
        4,
        4,
        3,
        4,
        4,
        4,
        2,
        4,
        2,
        1,
        1,
        2,
        1,
        4,
        4,
        4,
        3,
        3,
        4,
        3,
        4,
        4,
        1,
        4,
        1,
        3,
        3,
        4,
        1,
        2,
        1,
        2,
        4,
        4,
        1,
        2,
        3,
        1,
        1,
        1,
        4,
        3,
        1,
        2,
        4,
        2,
        1,
        3,
        1,
        4,
        2,
        1,
        4,
        1,
        4,
        2,
        4,
        3,
        3,
        4,
        1,
        1,
        3,
        1,
        2,
        3,
        3,
        2,
        3,
        2,
        3,
        2,
        2,
        3,
        3,
        1,
        2,
        1,
        4,
        4,
        4,
        3,
        2,
        4,
        3,
        4,
        2,
        3,
        4,
        1,
        1,
        4,
        4,
        1,
        4,
        2,
        3,
        4,
        4,
        4,
        2,
        1,
        4,
        3,
        2,
        2,
        4,
        1,
        1,
        3,
        1,
        1,
        4,
        2,
        3,
        4,
        3,
        1,
        1,
        4,
        4,
        2,
        2,
        3,
        4,
        3,
        1,
        1,
        4,
        1,
        1,
        2,
        2,
        2,
        4,
        3,
        1,
        3,
        4,
        2,
        2,
        2,
        1,
        4,
        2,
        3,
        1,
        3,
        1,
        4,
        1,
        1,
        2,
        3,
        1,
        2,
        2,
        3,
        2,
        4,
        1,
        1,
        3,
        4,
        3,
        3,
        2,
        3,
        3,
        4,
        4,
        3,
        2,
        2,
        2,
        4,
        4,
        1,
        3,
        1,
        1,
        1,
        2,
        3,
        1,
        2,
        3,
        1,
        1,
        2,
        4
      ]
    }
}
