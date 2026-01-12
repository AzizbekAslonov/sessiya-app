const realSciences = [
   'Noorganik kimyo'
]

const ALL_QUESTIONS = {
  'Noorganik kimyo': {
    "questions": [
      "Eritmalar necha xil bo`ladi?",
      "Eruvchanlikka bosimning ta`sirini qaysi olim o`rgangan?",
      "Noelektrolit eritmalarga misol keltiring.",
      "Elektrolit moddalarga misol keltiring.",
      "Eritmalar konsentratsiyasi deb,-……….",
      "Eritmaning moddalar konsentratsiyasiga bog`liq bо`lgan xossalari …………. deyiladi.",
      "Osmotik bosimni о`lchash uchun mо`ljallangan idish ……….. deb nomlanadi.",
      "Osmotik bosimni baholash uchun ishlatiladigan bosim turini ko`rsating.",
      "Eritmalarning 3 ta agregat xolatini ko`rsating.",
      "……….. - bu erituvchi molekulalarini eritmaga (yoki kichik konsentratsiyali eritmadan katta konsentratsiyali eritmaga) yarim о`tkazgich memrana orqali bir tomonlama diffuziyasidir.",
      "Rеаkstiya vаqtidа аjrаlаdigаn yoki yutilаdigаn issiqlik miqdоri rеаkstiyaning …………..dеb аtаlаdi.",
      "Harorat va issiqlikni o`zaro farqi keltirilgan qatorni toping.",
      "Issiqlik ajralib chiqishi bilan boradigan kimyoviy reaksiya ………deyiladi.",
      "Issiqlik yutilishi bilan boradigan kimyoviy reaksiya ………deyiladi.",
      "20 gr tuz 70 gr suvda eritildi hisil bo`lgan eritmaning massasini hisoblang?",
      "50 gr eritma tayyorlash uchun 10 gr tuz olingan bo`lsa, shu eritmani tayyorlash uchun qancha suv olingan?",
      "25 gr tuz 55 gr suvda eritildi hisil bo`lgan eritmaning massasini hisoblang?",
      "50 gr eritma tayyorlash uchun 34 gr suv olingan bo`lsa, shu eritmani tayyorlash uchun qancha tuz solingan?",
      "Qanday tenglamalar termokimyoviy tenglamalar deyiladi?",
      "Murakkab moddani hosil bo`lish issiqligi nima?",
      "Reaksiya issiqlik effektini aniqlash uchun qanday asbob ishlatiladi?",
      "Kimyoviy rеаkstiyalаrning issiqlik effektini hisоblаsh qаysi qоnungа аsоslаnilаdi?",
      "Kompleks birikmalarda markaziy atomning valent soni nimaga teng bo`ladi.",
      "Ion zaryadiga ko`ra kompleklar nechiga bo`linadi?",
      "Na3[Co(NO2)6] kompleks birikmani sistematik nomenklatura bo`yicha nomlang.",
      "K2[Pt(Cl4)] kompleks birikmani sistematik nomenklatura bo`yicha nomlang.",
      "Elektrodlarning turlari keltirilgan qatorni toping.",
      "Gazli elektrodga misol keltiring.",
      "Kalomel elektrodga misol keltiring.",
      "Galvanik elementlar elektrodlarini potensiallari oʻrtasidagi farqi uning ishlashiga zarur boʻlgan shart boʻlib uni galvanik sistemani…………deb yuritiladi.",
      "Eritma deb nimaga aytiladi?",
      "Gazli eritma berilgan qatorni toping.",
      "Suyuq eritma berilgan qatorni toping.",
      "Qattiq eritm berilgan qatorni toping.",
      "Eruvchanlikka qanday omil ta`sir ko`rsatadi?",
      "Eritmaning ma`lum massa miqdorida yoki hajmida erigan modda massasi yoki modda miqdori ....... deb ataladi. Nuqtalar o`rnini to`ldiring.",
      "To`yinmagan eritma deb nimaga aytiladi?",
      "Eritma konsentratsiyasini ifodalashning nechta usuli bor",
      "Erigan modda massasini eritmaning umumiy massasiga nisbati erigan moddaning ........ deb ataladi. Nuqtalar o`rnini to`ldiring.",
      "Eritma konsentratsiyasi 1 l eritmada erigan moddaning ekvivalentlar soni bilan ifodalansa, bunday eritmalar........ bo`ladi. Nuqtalar o`rnini to`ldiring.",
      "Tashqi muhitdan amalda yoki fikran ajratib olingan va bir-biriga ta`sir etib turadigan moddalar yoki jismlar guruhi ……. deb ataladi.Nuqtalar o`rnini to`ldiring.",
      "Tashqi muhit bilan modda va energiya alamashadigan sistema qanday sistema?",
      "Tashqi muhit bilan energiya almashadigan sistema qanday sistema?",
      "Tashqi muhit bilan modda ham, energiya ham almashmaydigan sistema qanday sistema?",
      "Reagent kislotalar bo`lsa qanday moddalar aniqlanadi?",
      "Reagent asoslar bo`lsa qanday moddalar aniqlanadi?",
      "Dag`al-dispers sistemalar zarrachalarining o`lchami nechaga teng?",
      "Kolloid – dispers sistemalar zarrachalarining o`lchami nechaga teng?",
      "Molekulyar - ion dispers sistemalar zarrachalarining o`lchami nechaga teng?",
      "Gomogen sistemalar bo`lib, mayda zarrachalar, ya`ni atom, ion yoki uncha katta bo`lmagan molekulalar suyuq erituvchida erishida hosil bo`ladi. Erigan modda zarrachalari cho`kmaydi va filtr yoki yarim o`tkazgich membranalarda ushlanib qolmaydi. Qanday eritma haqida ma`lumot berilgan",
      "Zarrachalar o`lchami сhin eritmadagi zarrachalarga nisbatan tahminan 10-100 barobar yirik bo`ladi. zarrachalari filtrdan o`tadi, lekin yarim o`tkazuvchan membranadan o`tmaydi va ushlanib qoladi.Qanday eritma haqida ma`lumot berilgan?",
      "Osmos holatini to`xtatish uchun eritmaga ta`sir ettirish zarur bo`lgan bosim qiymatiga ……deyiladi. Nuqtalar o`rnini to`ldiring.",
      "Ham kislota ham asos xossasini namoyon qiladigan moddalar ...... deyiladi. Nuqtalar o`rnini to`ldiring.",
      "Birinchi marta kislotalar dissotsiyalanganda vodorod ionlarini hosil qilishini kim va qachon fanga kiritgan?",
      "AnionliKomplekslar berilgan qatorni toping.",
      "Dispers faza suyuqlik dispers muhiti gaz bo`lgan moddalarga misol berilgan qatorni toping.",
      "Dispers faza qattiq dispers muhiti suyuq bo`lgan moddalarga misol berilgan qatorni toping.",
      "Kimyoda moddaning dispers holati va sirt hodisalarini õrganuvchi bo`lim ……deyiladi.Nuqtalar o`rnini to`ldiring",
      "Kompleks birikmalar tarkibida ligand vazifasini kislota qoldig`i ishtirok etsa qanday nomlanadi.",
      "Kompleks birikmalar tarkibida ligand vazifasini suv ishtrok etsa qanday nomlanadi.",
      "«Margansovka» nima ?",
      "Radioaktiv nurlanish uch turini ayting",
      "Alfaning massasi nechiga teng",
      "Gammaning massasi nechiga teng",
      "Pozitron-emissiyasida nima sodir bo`ladi",
      "Transmutatsiya",
      "Eritma nima",
      "gomogen sistema keltirilgan qatorni toping",
      "geterogen sistema keltirilgan qatorni toping",
      "Komplek birikmalar nechi qismdan tashkil topgan",
      "Kompleks birikmalarning ichki sferasi necha qismdan tashkil topgan",
      "Ligandlarning ikkinchi nomi nima?",
      "K3[Fe(CN)6] nomlang",
      "Qizil qon tuzini formulasi keltirilgan qatorni toping",
      "Sariq qon tuzini formulasi keltirilgan qatorni toping",
      "Kompleks birikmalarda uchraydigan izomeriya turini aniqlang",
      "Gidrat izomeriyaga misol keltiring",
      "Termodinamika so`zining ma`nosi",
      "Termodinamika atamasini fanga ilk bor kim ishlatgan",
      "Termodinamika nimani o`rganadi",
      "Sistema nima?",
      "Termodinamikaning tadqiqot odyekti nima",
      "Termodinamikaning 1 qonuni keltirilgan qatorni toping",
      "Termodinamikaning 1 qonunining matematik ifodasi qaysi",
      "Qanday sistemaga ochiq sistema nima deyiladi?",
      "Qanday sistemaga yopiq sistema deyiladi",
      "Izolyatsiyalangan sistema qanday sistema",
      "Agar termodinamik jarayonda sistemaning kimyoviy tarkibi o`zgarsa, u holda bu jarayonga…....",
      "Kinetik va potensial energiyalar farqi",
      "Elektrod necha xil bo`ladi",
      "Katod qanday zaryadlangan",
      "Anod qanday zaryadlangan",
      "Elektrod deb-,……",
      "Amfoter gidroksidlar qatorini ko`rsating.",
      "Kislotali oksidlar qatorini ko`rsating.",
      "ls2 2s2 2p6 3s2 3p5 elektron formula qaysi galogenga to`g`ri keladi?",
      "Qaysi gruppa elementlarning elektromanfiyligi kuchli?",
      "Kimyoviy elementning tartib nomeri nimaga teng?",
      "Molyar kontsetratsiya nima?",
      "Gidroliz reaksiyalari nima?",
      "Sariq qon tuzi - K4[Fe(CN)6] tarkibidagi markaziy atom bilan ligandlar orasidagi bog` qaysi turga mansub?",
      "Quyida berilganlardan qaysilari oksidlanish jarayonini aks ettiradi? 1) Cu→ Cu2+; 2) N5+→ N1+ 3) N-1 → N-3; 4) N+1→N+4",
      "Cl  ning qaysi oksidlanish darajasidagi birikmalari faqat oksidlovchi bo`ladi.A",
      "(37) Cl  izotopida neytronlar yadroning … % ini tashkil etadi?",
      "3s – orbitaldagi elektronlarning maksimal soni qancha?",
      "Quyidagilarning qaysi biri noto`g`ri?",
      "Element atomining tartib nomeri 13 va massalar soni 27 bo`lsa, valent elektronlar soni qancha",
      "Element izotoplari nimalar bilan farq qilinadi?",
      "Hozirgi qoida boyicha 1 m.a.b quyida keltirilganlarning qaysısıga mos keladi?",
      "Fizikaviy kimyoning va kimyoviy reaksiyalarining issiqlik effektini, moddalarning issiqlik sig`imini o`rganadigan bo`limga nima deyiladi?",
      "Absolyut massa bu ...?",
      "Quyidagi qaysi element 1ta elektronni o`zidan oson beradi?",
      "Na ning elektron konfyugratsiyasini yozing",
      "Atomlarning o`lcham birligini ko`rsating",
      "Quyidagi birikmalardan qaysi biri ion bog`lanishli birikma",
      "Kimyoviy reaksiyada ishtirok etayotgan moddalarning konsentratsiyalarini vaqt birligi ichida o`zgarishiga nima deyiladi?",
      "Kimyoviy reaksiya tezligiga tasir etuvchi omillar qaysi javobda to`g`ri ko`rsatilgan?",
      "Kimyoviy reaksiyalarni tezlashtiradigan,ammo o`zi o`zgarmay qoladigan moddalar nima deyiladi?",
      "Azotning nisbiy molekular massasi nechaga teng?",
      "Azotning oksidlanish darajasi HNO3da qanday bo`ladi?",
      "Erkin holda azot havoda qacha og`irlik jihaydan necha % ni tashkil etadi?",
      "Kimyoviy reaksiya tezligini hisoblash formulasi qaysi?",
      "Boshlang`ich modda konsentratsiyasi orttirilsa, muvozanat qaysi tomonga siljiydi?",
      "Katalizator qo`llash muvozanatni qaysi tomonga siljitadi?",
      "Ushbu reaksiyada bosim oshirilsa muvozanat qaysi tomonga siljiydi?2SO2+O2 = 2SO3 + Q",
      "Avogadro qonuni qaysi bandda to`g`ri ta`riflangan.",
      "Asosli oksidlar qatorini aniqlang.",
      "Kislotalarga berilgan to`g`ri ta`rifni ko`rsating.",
      "Oddiy modda qaysi bandda keltirilgan?",
      "Tuzlarga berilgan to`g`ri ta`rifni ko`rsating.",
      "Faqat kislorodii kislotalardan iborat qatorni ko`rsating.",
      "Suvda erimaydigan asoslar qatorini aniqlang.",
      "Vоdоrоd lаbоrаtоriya shаrоitidа quyidаgi qаysi usullаr bo`yichа оlinаdi?1.Sn+HCI→ 2.AI+NaOH→ 3.KCI→ elеktrоliz 4. H2O→ elеktrоliz",
      "Vаlеntlikkа bеrilgаn to`g`ri tа`rifni ko`rsаting",
      "Qutbsiz kovalent bog`lanishli moddani belgilang",
      "Qutbli kovalent bog`lanishli moddani belgilang",
      "Kaliy suv bilan ta`sirlashganda qanday gaz ajralib chiqadi?",
      "Avagadro doimiysini toping",
      "Osh tuzi malekulasidagi kimiyaviy bog`lanishni ko`rsating ?",
      "Tarkibi har xil elementlardan iborat bo`lgan moddalr bu –",
      "Koinotda eng ko`p tarqalgan element ?",
      "Elektronning massasi protonning massasidan necha marta kichik ?",
      "Erigan moddaning massa ulushini topish formulasi qaysi ?",
      "Sanoatda vodorod xlorid qanday usulda olinadi?",
      "Modda miqdorini topish formulasini belgilang.",
      "Kimyoviy elementlar nechaga bo`linadi?",
      "Ishqoriy metallar yozilgan qatorni belgilang",
      "Ishqoriy metallarning valentligi nechaga teng?",
      "H3PO4 – ortofosfat kislotada fosforning oksidlanish darajasi nechaga teng?",
      "Qanday qonun quyidagicha ta`riflanadi . Har qanday kimyoviy sof modda olinish usuli va joyidan qat`i nazar doimiy tar kibga ega bo`ladi",
      "Karrali nisbatlar qonunini belgilang?",
      "Massaning saqlanish qonunining ta`rifi berilgan qatorni ko`rsating?",
      "Yadro atrofida qanday zarrachalar hrakatlanadi?",
      "Yadro zaryadlari turlicha bo`lib, massalari bir xil bo`lgan atomlar turi bu- .",
      "Atom yadrolarida neytronlar soni bir xil, ammo protonlar soni bilan farq lanadigan elementlar bu-",
      "Ammoniy ionida qanday bog`lanish bor?",
      "Atomlarning umumiy elektron juftlari vositasida bog`lanishi nima deyiladi.",
      "Ion bog`lanishli moddani belgilang?",
      "olmos, grafit, kremniy tarkibida qanday kristall panjara mavjud?",
      "NaCl, KNO3, CuSO4 tarkibida qanday kristall panjara mavjud?",
      "Na, Ba, Zn, Al da qanday kristall panjara turi mavjud?",
      "gidroksoniy ionida qanday bog`lanish turi mavjud?",
      "Neytronlar soni 7ta protonlar soni 8ta bo`lgan elementning atom massasini toping?",
      "Gazlar bilan bog`liq hodisalarni qaysi olim o`rgangan",
      "Elektromanfiyliklari bir xil bo`lgan elementlarni belgilang",
      "Elektromanfiyligi bir-biridan keskin farq qiladigan element atomlaridan hosil bo`lgan moddalar bu-",
      "Atomning planetar modelini taklif etgan olim nu-",
      "Kimyoviy elementning tartib raqami shu elementning qanday xossalarini ifodalaydi?",
      "Bariyning nisbiy atom massasi 137 ga teng, uning tartib raqami 56 ekanligini bilgan holda, bariy atomi yadrosidagi neytronlar sonini aniqlang.",
      "Qanday qonun ta`rifi Kimyoviy reaksiya tezligi reaksiyaga kirishayotgan moddalarning kontsentratsiyalari ko`paytmasiga to`g`ri proporsionaldir deb ta`riflangan",
      "Temperatura xar 10°C oshganda reaksiyaning tezligi 2−4 marta ortishini dastlab kim tajriba asosida ta`rifladi",
      "Kataliz deganda nimani tushunasiz ?",
      "Tezlik konstantasi (k) bu-",
      "Fermentat kataliz bu…..",
      "Ingibitorlar nima?",
      "Katalizator zaharlari",
      "Agar reaksiya o`zining stexometrik tenglamasiga muvofiq birgina bosqichda borsa, bunday reaksiya nima deb ataladi",
      "Promotorlar bu-",
      "Qaytar rеaksiyalarning tеzligi qanday aniqlaniladi?",
      "Eritmаdа erigаn mоddа kоnsеntrаsiyasi yuqоri bo`lgаndа qanday eritmа dеb yuritilаdi",
      "Erigan modda kam bo`lsa qanday eritma deyiladi",
      "Qanday eritmalarda har qaysi komponentning ichki energiyasi konsentratsiyaga bog`liq emas va komponentning parsial-molyar hajmi eritilganida o`zgarmaydi",
      "Erituvchining (diffuziya hisobiga) yarim o`tkazgich membrana orqali erigan modda konsentratsiyasi kam bo`lgan eritmadan erigan modda konsentratsiyasi ko`p bo`lgan eritmaga o`z-o`zidan o`tish jarayoniga nima deb ataladi.",
      "Osmos bosimi nima yordamida o`lchanadi",
      "Osmos hodisasi bo`yicha necha xil eritmalar bo`ladi",
      "Standart qilib olingan eritma osmotik bosimiga teng osmotik bosimli eritmalarga nima deyiladi",
      "NaCl ning necha foizli eritmasi izotonik eritma hisoblanadi?",
      "Osmotik bosimi standart eritmanikidan yuqori bo`lganlari qanday eritmalar deyiladi",
      "Osmotik bosimi standart eritmanikidan past bo`lganlari qanday eritmalar deyiladi",
      "Raulning 1-qonuni bu",
      "Qaysi xodisa tufayli tuproqdagi suv o`simliklarning xujayralariga kiradi va daraxt uchlaridagi barglarga borib etguncha o`nlab metr yuqoriga ko`tariladi?",
      "tenglama orqali nima xisoblanadi?",
      "Oksidlovchini aniqlang",
      "Oksidlovchini aniqlang",
      "Qaytaruvchini aniqlang",
      "Oksidlovchilarga misol keltirilgan qatorni belgilang",
      "Oksidlanish-qaytarilish reaksiyalari necha turga bo`linadi?",
      "Al+HNO3(suyul) → Al(NO3)3+N2O+H2O qanday reaksiya turiga misol bo`la oladi?",
      "NH4NO2 = N2 +2H2O qanday reaksiya turiga misol bo`la oladi?",
      "Yengil metallarni belgilang-",
      "Eng og`ir metal bu-",
      "Eng yengil metal bu-",
      "Ishlatilishiga ko`ra metallar necha turga bo`linadi?",
      "Qanday metallar projektor va reflektorlar tayyorlashda ishlatiladi?",
      "Qaysi element elektrmanfiylik qiymati eng yuqori bo`lgan element hisoblanadi",
      "Tipik metallmaslar metallar bilan qanday bog`li birikmalar hosil qiladi",
      "Temir tabiatda qanday uchraydi?",
      "Kumush tabiatda qanday holatda uchraydi?",
      "Au,Pt tabiatda qanday holatda uchraydi?",
      "Fosfor –3 oksidlanish darajasiga ega birikmasini toping",
      "Litiy, natriy, magniy, alyuminiy elementlarida qanday bog`lanish mavjud?",
      "n.sh.da 1mol gazlar qancha hajmni egallaydi?",
      "KMnO4 da marganes +7 oksidlanish darajasidan kislotali muhitda nechaga o`tadi?",
      "KMnO4 da marganes +7 oksidlanish darajasidan kislotali muhitda o`tganda eritma rangi qanday o`zgaradi?",
      "Eng yumshoq metal bu-",
      "Eritmalari yoki suyuqlanmalari elektr tokini o`tkazadigan moddalar …… deyiladi. Nuqtalar o`rnini to`ldiring.",
      "Doimiy bosimda sodir bo`ladigan jarayon-",
      "Doimiy hajmda sodir bo`ladigan jarayon nima deyiladi",
      "Doimiy temperaturada sodir bo`ladigan jarayon qanday jarayon",
      "Kinetik energiya bu-",
      "Potensial energiya bu-",
      "Ekzotermik reaksiya bu-",
      "Endotermik reaksiya bu-",
      "Fenol bilan suv qanday nisbatda aralashadi?",
      "Suv bilan spirt qanday nisbatda aralashadi?",
      "Suv bilan Simob qanday nisbatda aralashadi?",
      "Tuzlanish nima?",
      "Antibakterial xossaga ega elementni toping",
      "fiziologik eritma nima",
      "NO, CO N2O,SiO quyidagi oksidlar qanday oksid turiga mansub-",
      "H2S + SO2 = 2H2O + 3SQuyidagi reaksiya oksidlanish-qaytarilishning qanday turiga mansub",
      "Nofaol molekulani kimyoviy reaksiyaga kirishadigan faol holatga keltirish uchun kerak bo`ladigan qo`shimcha energiya nima deb yuritiladi",
      "Ca3N2+HNO3 → Ca(NO3)2+NO2+H2O reaksiya turi bu-",
      "KMnO4 → K2MnO4+MnO2+O2 reaksiya turi bu-",
      "KClO3 → KCl+ KClO4 reaksiya turi bu-",
      "KClO3 → KCl+O2 reaksiya turi bu-",
      "Cu2S+HNO3 → Cu(NO3)2+H2SO4+NO+H2O O2 reaksiya turi bu-",
      "Hg+HNO3(suyul) → Hg2(NO3)2+NO+H2O",
      "Kimyoviy reaksiyalar vaqtida ajralib chiqadigan (yoki yutiladigan) energiyani tekshiradigan kimyoviy sohasi ............deb ataladi",
      "Izotermik jarayonda jismga yutilgan issiqliklar yig`indisining jism absolyut temperaturasiga nisbati shu jismning ..........miqdorini ko`rsatadi",
      "Standart sharoitda ∆G funksiya qanday quyidagi ko`rinishda ega",
      "Issiqlik miqdori qaysi belgi bilan belgilanadi.",
      "Termodinamikaning birinchi qonuni xulosalaridan birini tanlang",
      "Termodinamikaning ikkinchi qonuni xulosalaridan birini tanlang",
      "Termodinamik Sistema nima?",
      "Termodinamik Sistema necha xil?",
      "Suvda erimaydigan oksidni tanlang",
      "Suvda erimaydigan oksidni tanlang"
    ],
    "answers": [
      [
        "- 2, elektrolit va noelektrolit",
        "- 2, metal va metallmas",
        "- 2, organik va noorganik",
        "- 2, gomogen va geterogen"
      ],
      [
        "- Mendeleyev qonuni",
        "- Sechenov qonuni",
        "- Genri qonuni",
        "- Raul qonuni"
      ],
      [
        "- Distillangan suv",
        "- Shakarning suvdagi eritmasi",
        "- Ho`l yog`och",
        "- NaCl ning suvdagi eritmasi"
      ],
      [
        "- Plasmassa",
        "- Distillangan suv",
        "- Ho`l yog`och",
        "- Quruq yog`och"
      ],
      [
        "- eritmaning ma`lum massa yoki hajmidagi erigan moddaning (g, ml, l, mol) miqdoriga aytiladi.",
        "- Erituvchida erigan moddaning 1 mol miqdoriga aytiladi.",
        "- eritmaning ma`lum massadagi erigan moddaning (g, ml, l, mol) miqdoriga aytiladi.",
        "- eritmaning ma`lum hajmidagi erigan moddaning (g, ml, l, mol) miqdoriga aytiladi."
      ],
      [
        "- Eritma ustidagi bug` bosimi",
        "- Raul qonuni",
        "- Osmotik bosimi",
        "- Kolligativ xossalari"
      ],
      [
        "- Osmolenta",
        "- Osmonografiya",
        "- Osmometr",
        "- Monometr"
      ],
      [
        "- Gidrostatik bosim",
        "- Gazlarning siqilgandagi bosimi",
        "- Eritma bug` bosimi",
        "- Boshlang`ich bosim"
      ],
      [
        "- Gaz, plazma, chang",
        "- Plazma, qurum, gaz",
        "- Gazsimon , suyuq , qattiq",
        "- Aralashgan, gomogen, geterogen"
      ],
      [
        "- Gazlarning erish jarayoni",
        "- Erish jarayoni",
        "- Osmos jarayoni",
        "- Muzlash jarayoni"
      ],
      [
        "- Ekzоtеrmik",
        "- Issiqlik effеkti",
        "- Solishtirma issiqlik",
        "- Endоtеrmik"
      ],
      [
        "- Harorat intensiv kattalik, issiqlik ekstensiv kattalik",
        "- Harorat termometrda o`lchanadi, issiqlik esa amperda",
        "- Harorat ekstensiv kattalik, issiqlik intensiv kattalik",
        "- Harorat ham, issiqlik ham bir xil qiymatda bo`ladi"
      ],
      [
        "- Yonish",
        "- Endоtеrmik",
        "- Ekzоtеrmik",
        "- Issiqlik effеkti"
      ],
      [
        "- Parchalanish reaksiyasi",
        "- Ekzоtеrmik reaksiya",
        "- Issiqlik effеkti",
        "- Endоtеrmik reaksiya"
      ],
      [
        "- 20 gr",
        "- 80 gr",
        "- 90 gr",
        "- 100 gr"
      ],
      [
        "- 60 gr",
        "- 30 gr",
        "- 20 gr",
        "- 40 gr"
      ],
      [
        "- 80 gr",
        "- 50 gr",
        "- 60 gr",
        "- 70 gr"
      ],
      [
        "- 32 gr",
        "- 16 gr",
        "- 26 gr",
        "- 14 gr"
      ],
      [
        "- Issiqlik ajralib chiqishi bilan boradigan kimyoviy reaksiya deyiladi.",
        "- Issiqlik yutilishi bilan boradigan kimyoviy reaksiya deyiladi.",
        "- Issiqlik effekti ko`rsatilgan tenglamalar, termokimyoviy tenglamalar deyiladi.",
        "- Solishtirma issiqlik qiymati ko`rsatilgan tenglamalar, termokimyoviy tenglamalar deyiladi."
      ],
      [
        "- Murakkab moddaning hosil bo`lish issiqligi deb, standart issiqlik effektiga, ∆H 0/b – yani mazkur sharoitda oddiy moddalardan 1 mol murakkab modda hosil bo`lishiga aytiladi (bosim – 101325 Pa, temperatura - 250C.",
        "- Reaksiya issiqlik effekti boshlang`ich moddalarni yonish yig`indisi effektidan mashg`ulotlar yonish effekt yig`indisi ayirmasiga teng (∆H hosil bo`lish) .",
        "- Reaksiya issiqlik effekti moddalar hosil bo`lish issiqlik effektidan (∆H hosil bo`lish) boshlang`ich moddalar summasi ayirmasiga teng.",
        "- Moddaning yonish issiqligi deb, uning kislorodda yonish reaksiyasidan hosil bo`lgan issiqlik samarasi D Nyonish ga aytiladi."
      ],
      [
        "- Termometrda",
        "- Kalorimetrda",
        "- Voltometrda",
        "- Kalonkali likobda"
      ],
      [
        "- Gibbs",
        "- Gеss",
        "- Sеchеnоv",
        "- Rаul"
      ],
      [
        "- Ligantlar soniga",
        "- Ligantlar sonidan tashqi sfera soni ayiriladi",
        "- Tashqi manfiy sfera soniga teng bo`ladi",
        "- Tashqi sfera soniga teng bo`ladi"
      ],
      [
        "- Akvakomplekslar va atsidokokomplekslar",
        "- Manfiy va musbat qism tutgan komplekslar",
        "- Beqaror va barqaror komplekslar",
        "- Kationli, anionli va neytral"
      ],
      [
        "- Kaliy tetraxloro platinium II",
        "- Dixloro diamino platinium IV",
        "- Natriy geksanitro kobaltum III",
        "- Geksaamino kobaltum IV xlorid"
      ],
      [
        "- Geksaamino kobaltum IV xlorid",
        "- Dixloro diamino platinium IV",
        "- Kaliy tetraxloro platinium II",
        "- Natriy geksanitro kobaltum III"
      ],
      [
        "- Metal, shisha, kalomel, selofan",
        "- Gazli, metal, shisha, kalomel, ionselektiv",
        "- Gazli, metal, shisha, membranalar",
        "- Eriydigan va erimaydigan"
      ],
      [
        "- Grafit elektrodi",
        "- Vodorod elektrodi",
        "- Menbranali elektrod",
        "- Hg2Cl2 tuzi"
      ],
      [
        "- Menbranali elektrod",
        "- Vodorod elektrodi",
        "- Hg2Cl2 tuzi",
        "- Grafit elektrodi"
      ],
      [
        "- Potensial",
        "- Elektr kuchi",
        "- EYUK",
        "- Elektrod potensial"
      ],
      [
        "- Ikki va undan ko`p tarkibiy qismlardan iborat, termodinamik barqaror, o`zgaruvchan tarkibli gomogen sistema.",
        "- Ikki va undan ko`p tarkibiy qismlardan iborat, termodinamik barqaror, o`zgaruvchan tarkibli yopiq sistema.",
        "- Ikki va undan ko`p tarkibiy qismlardan iborat, termodinamik barqaror, o`zgaruvchan tarkibli geterogen sistema.",
        "- Ikki va undan ko`p tarkibiy qismlardan iborat, termodinamik barqaror, o`zgaruvchan tarkibli ochiq sistema."
      ],
      [
        "- NaCl eritmasi",
        "- Havo",
        "- Cho`yan",
        "- Po`lat"
      ],
      [
        "- Jez",
        "- Havo",
        "- Aroq",
        "- Cho`yan"
      ],
      [
        "- Havo",
        "- Jez",
        "- Gazlangan suv",
        "- Aroq"
      ],
      [
        "- Eitmaning qattiqligi",
        "- Harorat, moddaning tabiati.",
        "- Erituvchining bug` bosimi .",
        "- Moddaning hajmi ."
      ],
      [
        "- Modda bosimi",
        "- Modda konsentratsiyasi",
        "- Modda hajmi",
        "- Modda temperaturasi"
      ],
      [
        "- Erituvchida ayni eritilgan moddadan yana erisa",
        "- Eritmaning bosimi ortganda berilgan moddadan erimasa",
        "- Erituvchida ayni eritilgan moddadan boshqa erimasa",
        "- Eitmaning harorati ortganda berilgan moddan erimasa"
      ],
      [
        "- 5",
        "- 3",
        "- 6",
        "- 1"
      ],
      [
        "- Titr",
        "- Massa ulush",
        "- Normal",
        "- Molyal ulush"
      ],
      [
        "- Molyal konsentratsiyali",
        "- Normal konsentratsiyali",
        "- Molyar konsentratsiyali",
        "- Titr konsentratsiyali"
      ],
      [
        "- Sistema",
        "- İzolatsiyalangan sistema",
        "- Ochiq sistema",
        "- Yopiq sistema"
      ],
      [
        "- Yopiq",
        "- Gomogen",
        "- Izolatsiyalangan",
        "- Ochiq"
      ],
      [
        "- Ochiq",
        "- Yopiq",
        "- Geterogen",
        "- Gomogen"
      ],
      [
        "- Izolatsiyalangan",
        "- Yopiq",
        "- Ochiq",
        "- Geterogen"
      ],
      [
        "- Asoslar",
        "- Qaytaruvchilar",
        "- Oksidlovchilar",
        "- Metallar"
      ],
      [
        "- Kislotalar",
        "- Galogenidlar",
        "- Metallar",
        "- Qaytaruvchilar"
      ],
      [
        "- 1-100nm",
        "- 50 nm",
        "- 100 nm dan yuqori",
        "- 100 nm dan kichik"
      ],
      [
        "- 100 nm dan 50 nm gacha",
        "- 30 nm",
        "- 40 nm",
        "- 1nm dan 100 nm gacha"
      ],
      [
        "- 1 mmk dan yuqori",
        "- 20 mmk dan kichik",
        "- 100 mmk dan kichik",
        "- 1 mmk dan kichik"
      ],
      [
        "- Gomogen sistemalar",
        "- Chin eritma",
        "- Dag`al-dispers sistemalar",
        "- Kalloid eritmalar"
      ],
      [
        "- Chin eritma",
        "- Kalloid eritma",
        "- Dag`al- dispers sistema",
        "- Geterogen sistema"
      ],
      [
        "- Osmotik bosim",
        "- Emulsiya",
        "- Entropiya",
        "- Diffuziya"
      ],
      [
        "- Amfoter",
        "- Oksidlar",
        "- Tuzlar",
        "- Asoslar"
      ],
      [
        "- 1867-yilda Beketov",
        "- 1897-yilda Svante Arrenius",
        "- 1987 –yilda Sheele",
        "- 1887- yilda Svante Arrenius"
      ],
      [
        "- K3[Fe(CN)6]",
        "- [Fe(CO)5]",
        "- Pt(NH3)4 Cl2",
        "- Cu(NH3)4\tSO4"
      ],
      [
        "- Gel",
        "- Tuman",
        "- Sut",
        "- Qatiq"
      ],
      [
        "- Gel",
        "- Chang",
        "- Suyuq dori",
        "- Tuman"
      ],
      [
        "- Fizik kimyo",
        "- Noorganik kimyo",
        "- Organik kimyo",
        "- Kolloid kimyo"
      ],
      [
        "- Atsidokomplekslar",
        "- Amminatlar",
        "- Ammiakatlar",
        "- Akvakomplekslar"
      ],
      [
        "- Akvakomplekslar",
        "- Amminatlar",
        "- Ammiakatlar",
        "- Atsidokomplekslar"
      ],
      [
        "- KMnO4",
        "- NaCl",
        "- Na2CO3",
        "- CaCO3"
      ],
      [
        "- A, B, C",
        "- Electron, pozitron, alfa",
        "- Uran, pozitroni",
        "- alfa ,betta ,gamma"
      ],
      [
        "- 2",
        "- 1",
        "- 0",
        "- 4"
      ],
      [
        "- -1",
        "- 4",
        "- 2",
        "- 0"
      ],
      [
        "- turg`un bo`lmagan yadrodagi proton faqat pozitronga aylanadi",
        "- yadrodagi proton neytronga aylanadi",
        "- turg`un bo`lmagan yadrodagi proton, neytron va pozitronga aylanadi",
        "- yadrodagi neytron pozitronga aylanadi"
      ],
      [
        "- yadroning tartib raqami bir birlikka kamayadi va bu bir element yangi elementga aylanadi",
        "- gamma yemirilish",
        "- parchalanish",
        "- alfa yemirilish"
      ],
      [
        "- faza",
        "- geterogen sistema",
        "- 2 jinsli gomogen sistema",
        "- 1 jinsli gomogen sistema"
      ],
      [
        "- suspenza",
        "- loyqa suv",
        "- chang havo",
        "- NaCl ning suvdagi eritmasi"
      ],
      [
        "- shudring",
        "- yog`li suv",
        "- shakarning suvdagi eritmasi",
        "- NaCl ning suvdagi eritmasi"
      ],
      [
        "- 2, manfiy va musbat",
        "- 2, ichki va tashqi sfera",
        "- 2, metall va kislota qoldig`i",
        "- 2, metall va ligant"
      ],
      [
        "- bunday sfera mavjud emas",
        "- 2, manfiy va musbat",
        "- 2, metall va ligant",
        "- 2, ichki va tashqi sfera"
      ],
      [
        "- metall",
        "- manfiy qism",
        "- kislota qoldig`i",
        "- addеntlar"
      ],
      [
        "- kaliy geksasiano ferrum III",
        "- dixloro tetraamino platinium IV xlorid",
        "- diamino argenium I xlorid",
        "- natriy geksagidrokso alyuminiumIII"
      ],
      [
        "- [Ag(NH3)2]Cl",
        "- K4[Fe(CN)6]",
        "- K2[Zn(OH)4]",
        "- K3[Fe(CN)6]"
      ],
      [
        "- K2[Zn(OH)4]",
        "- [Ag(NH3)2]Cl",
        "- K3[Fe(CN)6]",
        "- K4[Fe(CN)6]"
      ],
      [
        "- geometrik, optik, koordinatsion, gidrat, ionli izomeriya",
        "- Uglerod skilet izomeriyasi, qo`sh bog` izomeriyasi",
        "- Dinamik, sis va trans izomeriya",
        "- Fazoviy va geametrik izomeriya"
      ],
      [
        "- [Cr(H2O)6]CI3 va [CrCI2(H2O)4]CI*2H2O",
        "- K [PtCl3 (C2O4)]",
        "- [Pt(NH3)2NO2Cl] SO4",
        "- [CoBr(NH3)5]SO4 va [CoSO4(NH3)5]Br"
      ],
      [
        "- yunoncha termo-issiqlik, dinamika-kuch, quvvat",
        "- grekcha termo-kuch, quvvat, dinamika-issiqlik",
        "- grekcha termo-issiqlik, dinamika-kuch, quvvat",
        "- yumoncha, issiqlik mashinalari"
      ],
      [
        "- Karno",
        "- Tomson",
        "- Verner",
        "- Joul"
      ],
      [
        "- qaytar va qaytmas jarayonlarni",
        "- energiyani sarflanishini",
        "- issiqlik mashinalarida issiqlikni ishga aylanishini",
        "- sistemalarni"
      ],
      [
        "- Atrof muhitdan hayolan yoki amalda ajratib olingan jism yoki jismlar guruhi",
        "- Sistema bilan bevosita yoki bilvosita kontakda bo`ladigan barcha narsalar",
        "- Atrof muhit bilan moddalar almashina olmaydigan, ammo energiya almashina oladigan sistamalar",
        "- Faqat Oddiy probirka"
      ],
      [
        "- geterogen eritma",
        "- sistema",
        "- faza",
        "- gomogen eritma"
      ],
      [
        "- energiya bir turdan ikkinchi turga o`tganda yo`qotilishga uchramaydi 1",
        "- 1-tur abadiy ishlaydigan mashinaning amalga oshirish mumkin emas.",
        "- tashqaridan energiya berib ish bajaradigan abadiy ishlaydigan mashina qurish mumkin.",
        "- Sistema berk bo`lganda ham qanchadir energiya yo`qotiladi."
      ],
      [
        "- Q = dH + А",
        "- Q = dU + H",
        "- Q = U + P",
        "- Q = (d)U + А"
      ],
      [
        "- Atrof muhit bilan moddalar almashina olmaydigan, ammo energiya almashina oladigan sistamalar",
        "- Atrof muhit bilan modda ham, energiya ham almashina olmaydi.",
        "- Tabiatdagi barcha narsalar",
        "- Atrof muhit bilan modda va energiya almashina oladi."
      ],
      [
        "- Atrof muhit bilan modda ham, energiya ham almashina olmaydi.",
        "- Atrof muhit bilan moddalar almashina olmaydigan, ammo energiya almashina oladigan sistamalar",
        "- tabiatdagi barcha narsalar",
        "- Atrof muhit bilan modda va energiya almashina oladi."
      ],
      [
        "- Atrof muhit bilan modda va energiya almashina oladi.",
        "- tabiatdagi barcha narsalar",
        "- Atrof muhit bilan moddalar almashina olmaydigan, ammo energiya almashina oladigan sistamalar",
        "- Atrof muhit bilan modda ham, energiya ham almashina olmaydi."
      ],
      [
        "- O`z-o`zidan boradigan jarayon deyiladi",
        "- termodinamik jarayon deyiladi",
        "- Kimyoviy reaksiya deyiladi",
        "- O`z-o`zidan bormaydigan jarayon deyiladi"
      ],
      [
        "- Kinetik energiya harakat energiyasi bo`lsa, potensial energiya esa sistema zarrachalarining holat va o`zaro ta`sir energiyasidir",
        "- ikkovi ham bir xil",
        "- Kinetik energiya sistema zarrachalarining holat va o`zaro ta`sir energiyasi bo`lsa, potensial energiya esa harakat energiyasidir",
        "- Kinetik energiya harakat energiyasi bo`lsa, potensial energiya ishga teng"
      ],
      [
        "- 2, elektrolit va noelektrolitlar",
        "- suyuqlanma va eritma",
        "- 2, katod va anod",
        "- 2, eriydigan va erimaydigan"
      ],
      [
        "- manfiy",
        "- zaryadsiz",
        "- neytral",
        "- musbat"
      ],
      [
        "- manfiy",
        "- musbat",
        "- neytral",
        "- zaryadsiz"
      ],
      [
        "- bu kamida ikki fazadan iborat elektrkimyoviy sistemadir.",
        "- elektr tokini ishga aylantirib beruvchi plastinka",
        "- potensial aniqlovchi jarayonlarda ishtirok etuvchi moddalar",
        "- plastinka"
      ],
      [
        "- Ca(OH)2, Fe(OH)3,Ba(OH)2,",
        "- Zn(OH)2, AI(OH)2, Cr(OH)3",
        "- NaOH, Zn(OH)2 Cu(OH)2,",
        "- KOH, Mg(OH)2, AI(OH)3"
      ],
      [
        "- CO2, P2O5, S02 , NO2",
        "- BaO, P205, CO.",
        "- K2O, MgO, SO2, Na20;",
        "- ZnO, N2O3, Al203, H2О ;"
      ],
      [
        "- F",
        "- Cl",
        "- J",
        "- Br"
      ],
      [
        "- Li Na K",
        "- B Al Cu",
        "- Mg Ca Ba",
        "- F Cl Br"
      ],
      [
        "- Atom massasiga",
        "- Protonlarning soniga",
        "- Davr nomeriga",
        "- Neytronlar soniga"
      ],
      [
        "- 1l suvda erigan modda miqdori",
        "- 1l eritmada erigan modda mollar soni.",
        "- 1000g erituvchida erigan modda miqdori",
        "- 1000g suvda erigan modda miqdori"
      ],
      [
        "- kislota bilan suv orasida sodir bo`ladigan reaksiyalar",
        "- tuz va asos orasida sodir bo`ladigan",
        "- tuzlar bilan suv orasidagi sodir bo`ladigan reaksiyalar",
        "- tuz va kislota orasida sodir bo`ladigan reaksiyalar"
      ],
      [
        "- donor – aktseptor",
        "- Ionli",
        "- vodorod – aktseptor",
        "- metall"
      ],
      [
        "- 1, 4",
        "- 3.4",
        "- 1, 3",
        "- 2, 3"
      ],
      [
        "- +7",
        "- +4",
        "- -1",
        "- +5"
      ],
      [
        "- 54,05",
        "- 55",
        "- 52",
        "- 52.5"
      ],
      [
        "- 6",
        "- 2",
        "- 1",
        "- 8"
      ],
      [
        "- 1s, 2p",
        "- 1p, 2d",
        "- 2p, 3d",
        "- 2s, 4f"
      ],
      [
        "- 4",
        "- 3",
        "- 2",
        "- 5"
      ],
      [
        "- valentlik elektronlar soni bilan",
        "- Protonlar soni bilan",
        "- atom qatori",
        "- neytronlar soni"
      ],
      [
        "- kislorod izotoplarınıng tabiıy aralashmalarinin` atomı massasınıng 1/16 ulushi",
        "- uglerod-12 izotop atomı massasınıng 1/12 ulushi",
        "- uglerod-14 izotop atomı massasınıng 1/14 ulushi",
        "- kislorod-16 izotop atomı massasınıng 1/16 ulushi"
      ],
      [
        "- Termodinamika",
        "- Elektrokimyo",
        "- Kimyo",
        "- Kimyoviy kinetika"
      ],
      [
        "- elementning miqdoriy ko`rsatkichi",
        "- Avogadro soni",
        "- Elementning aniq o`lchangan massasi",
        "- doimiy son"
      ],
      [
        "- Al",
        "- Ca",
        "- Mg",
        "- Na"
      ],
      [
        "- 1s2",
        "- 1s22s1",
        "- 1s1",
        "- 1s22s22p63s1"
      ],
      [
        "- nm",
        "- ml",
        "- gr",
        "- l"
      ],
      [
        "- HCOOH",
        "- KF",
        "- F2",
        "- HF"
      ],
      [
        "- Neytrallanish reaksiyasi",
        "- Oksidlanish qaytarilish reaksiyasi",
        "- Oksidlanish neytrallanish reaksiyasi",
        "- Oksidlanish qaytish reaksiyasi"
      ],
      [
        "- To`g`ri javob yo`q",
        "- Modda miqdoriga va bosimga",
        "- Konsentratsiyaga bog`liq,haroratning tasiri,reaksiyaga kirishuvchi moddalar tabiatiga bog`liq, katlizatorning tasiri",
        "- Kimyoviy reaksiya tezligiga haroratning tasiri,rangining o`zgarishi"
      ],
      [
        "- Kimyoviy reaksiya tenglamalarining tezligi",
        "- Kimyoviy reaksiya tenglamalari",
        "- Katalizator",
        "- Kimyoviy muvozanat"
      ],
      [
        "- 48",
        "- 34",
        "- 28",
        "- 14"
      ],
      [
        "- -3",
        "- +3",
        "- +5",
        "- -4"
      ],
      [
        "- 29%",
        "- 75,5%",
        "- 28%",
        "- 78%"
      ],
      [
        "- V = c/t",
        "- S = VT",
        "- V = S/t",
        "- t = c/V"
      ],
      [
        "- Siljimaydi",
        "- Chapga",
        "- Awal o`ng, so`ngra chapga",
        "- O`ngga"
      ],
      [
        "- O`ngga",
        "- Chapga",
        "- Awal o`ng, so`ngra chapga",
        "- Muvozanatni siljitmaydi, ammo uni tezroq qaror topishiga yordam beradi"
      ],
      [
        "- Chapga",
        "- Siljimaydi",
        "- Awal o`ng, so`ngra chapga",
        "- O`ngga"
      ],
      [
        "- Reaksiyaning issiqlik effekti boshlang`ich moddalar bilan hosil bo`lgan mahsulotning tabiatiga bog`liq bo`lib, reaksiyaning oraliq bosqichlariga taaluqli emas.",
        "- Moddalar bir-biri bilan ularning ekvivalentlariga proportsional miqdorlarda ta`sirlashadilar.",
        "- Bir xil sharoitda turii xildagi gazlarning bir xil xajrnlardagi molekulalar soni birxil bo`ladi.",
        "- Element nisbiy atom massasining valentliklariga nisbati shu elementning ekvivalentidir."
      ],
      [
        "- Na2O, BaO, CuO;",
        "- CO2, SO3, P2O5",
        "- ZnO, Al2O3 Sb2O3",
        "- CO, NO, N2O"
      ],
      [
        "- Molekulasi tarkibida metallarga o`z o`rnini bera oladigan vodorod atomlari va kislota qoldig`idan tarkib topgan murakkab moddalar.",
        "- Tarkibida vodorod atomi va gidroksogruppa tutgan moddalar.",
        "- Metall atomi bir yoki bir necha gidroksogruppalardan tashkil topgan murakkab moddalar.",
        "- Tarkibi kislotalar va asoslar qoldiqlaridan iborat moddalar."
      ],
      [
        "- HCl",
        "- O2",
        "- H2SO4",
        "- K2O"
      ],
      [
        "- Molekulasida metall atomi va kislota qoldig`idan tashkil topgan murakkab moddalar.",
        "- Tarkibi metall atomi va gidroksogruppadan tarkib topgan murakkab moddalar.",
        "- Tarkibi metall atomi va kisloroddan tarkib topgan murakkab moddalar.",
        "- Tarkibi vodorod atomlari va kislota qoldig`idan tarkib topgan murakkab moddalar."
      ],
      [
        "- H2S, H2CO3, HF;",
        "- HBr, HCN, HI;",
        "- HNO3, H2CO3, H2SiO3;",
        "- HCI, H2CrO4, H2S."
      ],
      [
        "- Ca(OH)2, Ba(OH)2, KOH.",
        "- NaOH, AI(OH)3, Zu(OH)2",
        "- NaOH, Ca(OH)2, KOH;",
        "- Cu(OH)2, Fe(OH)2, Cr(OH)2;"
      ],
      [
        "- 2,3",
        "- 1, 4",
        "- 2,4",
        "- 1,2"
      ],
      [
        "- Kimyoviy elеmеntlаrning bir-biri bilаn o`s ekvivаlеntlаrigа пrопоrsiоnаl bo`lgаn mаssа miqdоrlаrdа birikish yoki аlmаshinishi",
        "- Elеmеnt аtоmlаrining bоshqа elеmеntning muаyyan sоndаgi аtоmlаrini biriktirib оlish хususiyati",
        "- Mоddа tаrkikibining kimyoviy bеlgilаr vа indеkslаr yordаmidа ifоdаlаnish",
        "- Bir хil shаrоitdаgi turli gаslаrning bir hаjmidаgi mоlеkulаlаr sоni bir хil bo`lishi"
      ],
      [
        "- N2",
        "- KJ",
        "- H2O",
        "- HCl"
      ],
      [
        "- NaBr",
        "- HCl",
        "- KOH",
        "- O2"
      ],
      [
        "- H2",
        "- O2",
        "- H2O",
        "- KH"
      ],
      [
        "- 60.2*1023",
        "- 30.01* 1023",
        "- 6.02*1023",
        "- 3.01* 1023"
      ],
      [
        "- Metall",
        "- Qutbli kovalent",
        "- Qutbsiz kovalent",
        "- Ion"
      ],
      [
        "- oddiy",
        "- tuzlar",
        "- allotropik",
        "- murakkab"
      ],
      [
        "- H2",
        "- Si",
        "- O2",
        "- He"
      ],
      [
        "- 1700",
        "- 1836",
        "- 1800",
        "- 1825"
      ],
      [
        "- C---M1 *100/M",
        "- C----M/V 100",
        "- C-----n /M1",
        "- C-----M/M1"
      ],
      [
        "- Vodorod bilan xlor gazlarini o`zaro reaksiyaga kirishtirib",
        "- Kaliy xlorid tuzlariga nitrat kislota ta`sir ettirib",
        "- Natriy xlorid tuzlariga fosfat kislota ta`sir ettirib",
        "- Elektroliz orqali"
      ],
      [
        "- Vm=M/g",
        "- g=M/Vm",
        "- n = m/M",
        "- m=M . V"
      ],
      [
        "- Oksidlar va asoslarga",
        "- Kislotalar va tuzlarga",
        "- Oddiy modda va murakkab moddaga",
        "- Metallar va metalmaslarga"
      ],
      [
        "- Na, K, Rb",
        "- H, C, O",
        "- Ca, Mg, Fe",
        "- B, Al, Ga"
      ],
      [
        "- 3",
        "- 1",
        "- 4",
        "- 2"
      ],
      [
        "- +3",
        "- +5",
        "- +1",
        "- 0"
      ],
      [
        "- Avogadro qonuni",
        "- Tarkibning doimiy qonuni",
        "- Massani saqlanish qonuni",
        "- Ekvivalentlar qonuni"
      ],
      [
        "- Kimyoviy reaksiyaga kirishayotgan moddalarning umumiy massasi reaksiya mahsulotlarining umumiy massasiga teng",
        "- Har qanday kimyoviy sof modda olinish usuli va joyidan qat`i nazar doimiy tar kibga ega bo`ladi",
        "- Agar ikki element bir-biri bilan bir necha kimyoviy birikma hosil qilsa, bu birikmalardagi bir element massasiga to`g`ri keluvchi boshqa element massalari o`zaro kichik butun sonlar nisbatida bo`ladi.Tabiatdagi har qanday o`zgarishlar izsiz yo`qolmaydi",
        "- Bir xil sharoitda o`zaro teng hajmdagi turli xildagi gazlarda molekulalar soni teng bo`ladi"
      ],
      [
        "- Bir xil sharoitda o`zaro teng hajmdagi turli xildagi gazlarda molekulalar soni teng bo`ladi.",
        "- Har qanday kimyoviy sof modda olinish usuli va joyidan qat`i nazar doimiy tar kibga ega bo`ladi.",
        "- Kimyoviy reaksiyaga kirishayotgan moddalarning umumiy massasi reaksiya mahsulotlarining umumiy massasiga teng.",
        "- Agar ikki element bir-biri bilan bir necha kimyoviy birikma hosil qilsa, bu birikmalardagi bir element massasiga to`g`ri keluvchi boshqa element massalari o`zaro kichik butun sonlar nisbatida bo`ladi.Tabiatdagi har qanday o`zgarishlar izsiz yo`qolmaydi."
      ],
      [
        "- elektron",
        "- neytron",
        "- pozitron",
        "- proton"
      ],
      [
        "- Izotonlar",
        "- Neytronlar",
        "- Izobarlar",
        "- Izotoplar"
      ],
      [
        "- Izotoplar",
        "- Izobarlar",
        "- Izotonlar",
        "- Neytronlar"
      ],
      [
        "- Metal-akseptor",
        "- Ion",
        "- Kovalent",
        "- Donor-akseptor"
      ],
      [
        "- Donor-akseptor",
        "- Ion",
        "- Metal",
        "- Kovalent bog`lanish"
      ],
      [
        "- H2S",
        "- O2",
        "- NaCl",
        "- Cl2"
      ],
      [
        "- Molekular",
        "- Atom",
        "- Metal",
        "- Ion"
      ],
      [
        "- Atom",
        "- Metal",
        "- Molecular",
        "- Ion"
      ],
      [
        "- Metal",
        "- Atom",
        "- Ion",
        "- Molecular"
      ],
      [
        "- Donor-akseptor",
        "- Metal",
        "- Ion",
        "- Kovalent"
      ],
      [
        "- 15",
        "- 23",
        "- 8",
        "- 7"
      ],
      [
        "- Lomonosov",
        "- Prust",
        "- Rezerford",
        "- Avogadro"
      ],
      [
        "- H2 , F2 , Cl2",
        "- H2O, H2S, NH3",
        "- NaCl, K2S, BaCl2",
        "- HCl, HBr, HI"
      ],
      [
        "- H2 , F2 , Cl2",
        "- NaCl,K2S,BaCl2",
        "- Li, Na, K, Al",
        "- Fe, Cu, Zn"
      ],
      [
        "- Prust",
        "- Lomonosov",
        "- Rezerford",
        "- Avogadro"
      ],
      [
        "- element atomi yadrosidagi protonlar sonini.",
        "- atom yadrosi atrofidagi elektronlar sonini.",
        "- atom yadrosi atrofidagi elektron qobiqchalar sonini.",
        "- element atomi yadrosidagi neytronlar sonini."
      ],
      [
        "- 81",
        "- 137",
        "- 193",
        "- 56"
      ],
      [
        "- Gess va P. Vaage",
        "- K. Guldberg va P. Vaage",
        "- Lavuazye-Laplas",
        "- Vant-Goff"
      ],
      [
        "- Lavuazye-Laplas",
        "- Gess",
        "- Y. Vant-Goff",
        "- K. Guldberg va P. Vaage"
      ],
      [
        "- Kimyoviy reaksiyani temperaturasiga qarab tezlatuvchi jarayonga kataliz deyiladi",
        "- Oksidlanish -qaytarilish jarayoni bilan boradigan sohaga aytiladi",
        "- Reaksiya borgan sohaga va mexanizmga ta`sir ko`rsatgan jarayonga kataliz deyiladi",
        "- Katalizatorlar ishtirokida boradigan reaksiyalar katalitik reaksiyalar, ularni borish hodisasiga kataliz deyiladi"
      ],
      [
        "- Reaksiyaga kirishuvchi moddalarning konsentratsiyalari nolga teng bo`lgandagi reaksiya tezligidir",
        "- Reaksiyaga kirishuvchi moddalarning konsentratsiyalari ikkiga teng bo`lgandagi reaksiya tezligidir",
        "- Reaksiyaga kirishuvchi moddalarning konsentratsiyalari uchga teng bo`lgandagi reaksiya tezligidir",
        "- Reaksiyaga kirishuvchi moddalarning konsentratsiyalari birga teng bo`lgandagi reaksiya tezligidir"
      ],
      [
        "- Metall katalizatorlar ishtirokidagi kataliz",
        "- Katalizator bilan reaksion aralashma har xil fazada bo`lgan kataliz",
        "- Katalizator bilan reaksion aralashma bir xil fazada bo`lgan kataliz",
        "- Biologik katalizatorlar – fermentlar ishtirokidagi kataliz"
      ],
      [
        "- Reaksiya tezligini tezlashtiradiga moddalar",
        "- Reaksiya tezligini temperaturaga qarab tezlashtiradigan moddalar",
        "- Reaksiya tezligini to`xtatadigan moddalar",
        "- Reaksiya tezligini bosimga qarab tezlashtiradiga moddalar"
      ],
      [
        "- Muvozanatni siljitmaydigan moddalar",
        "- Muvozanatni chapga siltijatigan moddalar",
        "- Katalizator ta`sirini oshiradigan moddalar",
        "- Ba`zi moddalar katalizatorlarning aktivligini kamaytiradi yoki butunlay yo`qotadi"
      ],
      [
        "- Qaytmas reaksiya",
        "- Oddiy reaksiya",
        "- Murakkab reaksiya",
        "- Parallel reaksiya"
      ],
      [
        "- Muvozanatni chapga siltijatigan moddalar",
        "- Katalizatorlarning aktivligi turli qo`shimchalar ta`sirida oshadi",
        "- Muvozanatni siljitmaydigan moddalar",
        "- Katalizatorlarning aktivligini kamaytiradigan moddalar"
      ],
      [
        "- To`g`ri va tеskari rеaksiyalar tеzliklarining farqi bilan.",
        "- Tеskari rеaksiya tеzligi orqali",
        "- To`g`ri va tеskari rеaksiyalar tеzliklarining yig`indisi bilan",
        "- To`g`ri rеaksiya tеzligi orqali"
      ],
      [
        "- To`yinmagan",
        "- Suyultirilgаn",
        "- Kоnsеntrlаngаn",
        "- To`yingan"
      ],
      [
        "- Kоnsеntrlаngаn",
        "- To`yinmagan",
        "- Suyultirilgаn",
        "- To`yingan"
      ],
      [
        "- Suyultirilgan",
        "- Konsentrlangan",
        "- To`yingan",
        "- Ideal eritmalar"
      ],
      [
        "- Osmos",
        "- Braun harakati",
        "- Diffuziya",
        "- Elektr o`tkazuvchanlik"
      ],
      [
        "- Osmometr",
        "- Voltmetr",
        "- Barometr",
        "- Ampermetr"
      ],
      [
        "- 4",
        "- 2",
        "- 5",
        "- 3"
      ],
      [
        "- Izotonik eritmalar",
        "- Izotermik eritmalar",
        "- Gipotonik eritmalar",
        "- Gipertonik eritmalar"
      ],
      [
        "- 2,5%",
        "- 4%",
        "- 0,9%",
        "- 8%"
      ],
      [
        "- Gipertonik",
        "- Izotonik",
        "- Izoxorik",
        "- Gipotonik"
      ],
      [
        "- izobarik",
        "- izotonik",
        "- gipotonik",
        "- gipertonik"
      ],
      [
        "- eritmа ustidа erituvchining to`yingаn bug` bоsimi shu tеmpе¬rаturаdаgi tоzа eritmаnikigа qаrаgаndа dоimо yuqоri bo`lаdi.",
        "- Temperatura xar 10°C oshganda reaksiyaning tezligi 2−4 marta ortishi.",
        "- Elektrolit qo`shilganda gazning eruvchanligini ortishi .",
        "- Elektrolit qo`shilganda gazning eruvchanligining kamayishi ."
      ],
      [
        "- Sidementatsiya xodisasi",
        "- Diffuziya xodisasi",
        "- Erish xodisasi",
        "- Osmos xodisasi"
      ],
      [
        "- Osmotik bosim",
        "- Reaksiya tezligi",
        "- Ionlar radiusi",
        "- Konsentratsiya"
      ],
      [
        "- O3",
        "- Na",
        "- K",
        "- Rb"
      ],
      [
        "- F2",
        "- NaH",
        "- KH",
        "- BaH2"
      ],
      [
        "- H2Cr2O7",
        "- KMnO4",
        "- H2SO4",
        "- KH"
      ],
      [
        "- MnSO4, HCl, FeSO4",
        "- KMnO4, H2O2, Cl2",
        "- FeSO4, HBr, HJ",
        "- KMnO4, H2O2, HJ"
      ],
      [
        "- 5",
        "- 3",
        "- 4",
        "- 6"
      ],
      [
        "- Molekulalararo",
        "- Sinproporsiya",
        "- Disproporsiya",
        "- Ichki molekular"
      ],
      [
        "- Sinproporsiya",
        "- Ichki molekular",
        "- Disproporsiya",
        "- Molekulalararo"
      ],
      [
        "- Litiy, natriy, kaliy",
        "- Nikel, simob, qo`rg`oshin",
        "- Kadmiy nikel, simob",
        "- Qalay, qo`rg`oshin, mis"
      ],
      [
        "- osmiy",
        "- kaliy",
        "- litiy",
        "- temir"
      ],
      [
        "- natriy",
        "- temir",
        "- litiy",
        "- mis"
      ],
      [
        "- 4",
        "- 5",
        "- 2",
        "- 3"
      ],
      [
        "- Kalsiy va natriy",
        "- Temir va qo`rg`oshin",
        "- Indiy va kumush",
        "- Natriy va magniy"
      ],
      [
        "- Kumush",
        "- Ftor",
        "- Natriy",
        "- Brom"
      ],
      [
        "- ion",
        "- kovalent",
        "- vodorod",
        "- metall"
      ],
      [
        "- sulfat",
        "- oksidlar",
        "- xlorid",
        "- erkin"
      ],
      [
        "- sulfid",
        "- erkin",
        "- oksid",
        "- xlorid"
      ],
      [
        "- erkin",
        "- sulfid",
        "- oksid",
        "- xlorid"
      ],
      [
        "- P2O5",
        "- PCl5",
        "- PCl",
        "- PH3"
      ],
      [
        "- metall",
        "- vodorod",
        "- ion",
        "- kovalent"
      ],
      [
        "- 22,4",
        "- 86.8",
        "- 67,2",
        "- 44,8"
      ],
      [
        "- +3",
        "- +6",
        "- +1",
        "- +2"
      ],
      [
        "- Qo`ng`ir",
        "- Qora",
        "- Rangsiz",
        "- Yashil"
      ],
      [
        "- xrom",
        "- kaliy",
        "- kumush",
        "- seziy"
      ],
      [
        "- Noelektrolitlar",
        "- Elektrolitlar",
        "- Suyuqlanma",
        "- Eritma"
      ],
      [
        "- Izotermik",
        "- Izoxorik",
        "- Izobarik",
        "- Adiabatik"
      ],
      [
        "- Izotermik",
        "- Adiabatik",
        "- Izobarik",
        "- Izoxorik"
      ],
      [
        "- Adiabatik",
        "- Izotermik",
        "- Izobarik",
        "- Izoxorik"
      ],
      [
        "- moddaning kimyoviy tabiati (tuzilishi, kimyoviy bog` turlari va h.k.) bilan belgilanadigan energiyadir.",
        "- zarrachalarning o`zaro joylashuvi bilan belgilanadigan energiya.",
        "- zarrachalarning harakat tezligi bilan belgilanadigan energiya.",
        "- makro jismlarning harakatini ta`minlaydigan va shu jarayon hisobiga sodir bo`ladigan ishni amalga oshiradigan energiya turidir."
      ],
      [
        "- makro jismlarning harakatini ta`minlaydigan va shu jarayon hisobiga sodir bo`ladigan ishni amalga oshiradigan energiya turidir",
        "- zarrachalarning o`zaro joylashuvi bilan belgilanadigan energiya",
        "- moddaning kimyoviy tabiati (tuzilishi, kimyoviy bog` turlari va h.k.) bilan belgilanadigan energiyadir",
        "- zarrachalarning harakat tezligi bilan belgilanadigan energiya"
      ],
      [
        "- İssiqlik yutilishi bilan boradigan jaroyonlar",
        "- Jarayon davomida energiya almashmasa",
        "- Jarayon davomida umumiy ish miqdori o`zgarmasa",
        "- Issiqlik ajralishi bilan boradigan jarayonlar"
      ],
      [
        "- issiqlik yutilishi bilan boradigan jaroyonlar",
        "- Jarayon davomida energiya almashmasa",
        "- Jarayon davomida umumiy ish miqdori o`zgarmasa",
        "- Issiqlik ajralishi bilan boradigan jarayonlar"
      ],
      [
        "- 1litrda 100 litr eriydi",
        "- Birga bir nisbatda aralashadi",
        "- 1hajmda 4 litr eriydi",
        "- Suv bilan fenol ma`lum bir chegarada aralashadi."
      ],
      [
        "- Ma`lum chegarada aralashadi",
        "- Umuman aralashmaydi",
        "- 1 hajmda 0,2 hajm eriydi",
        "- Cheksiz aralashadi"
      ],
      [
        "- Qisman aralashadi",
        "- Umuman aralashmaydi",
        "- 1 litrda 2 hajm eriydi",
        "- 1 litrda 0.5 hajm eriydi"
      ],
      [
        "- Elektrolit qo`shilganda gazning eruvchanligi bug` bosimidan ortib ketishi",
        "- Elektrolit qo`shilganda gazning eruvchanligini ortishi",
        "- Elektrolit qo`shilganda gazning eruvchanligining kamayishi",
        "- Elektrolit qo`shilganda gazning eruvchanligi tenglashishi"
      ],
      [
        "- natriy",
        "- kumush",
        "- simob",
        "- alyuminiy"
      ],
      [
        "- 3-10 % NaCl eritmasi",
        "- 5 % NaCl eritmasi",
        "- 0,9 % NaCl eritmasi",
        "- 0,9 % KClO eritmasi"
      ],
      [
        "- Asosli",
        "- Befarq",
        "- Amfoter",
        "- Kislotali"
      ],
      [
        "- Ichki molekulyar",
        "- Molekulalararo",
        "- Sinproporsiya",
        "- Disproporsiya"
      ],
      [
        "- Kinetik energiya",
        "- Mexanik energiya",
        "- Potensial energiya",
        "- Aktivlanish energiyasi"
      ],
      [
        "- Molekulararo",
        "- Sinproporsiya",
        "- Disproporsiya",
        "- Ichki molekulalar"
      ],
      [
        "- Ichki molekulalar",
        "- Molekulararo",
        "- Sinproporsiya",
        "- Disproporsiya"
      ],
      [
        "- Sinproporsiya",
        "- Molekulararo",
        "- Disproporsiya",
        "- Ichki molekulalar"
      ],
      [
        "- Ichki molekulalar",
        "- Molekulararo",
        "- Disproporsiya",
        "- Sinproporsiya"
      ],
      [
        "- Molekulalararo",
        "- Ichki molekulalar",
        "- Disproporsiya",
        "- Sinproporsiya"
      ],
      [
        "- Sinproporsiya",
        "- Molekulalararo",
        "- Disproporsiya",
        "- Ichki molekulalar"
      ],
      [
        "- Analitik kimyo",
        "- Kvant kimyo",
        "- Kinetika",
        "- Termokimyo"
      ],
      [
        "- Issiqlik",
        "- Gelm-Gols",
        "- entropiya",
        "- Entalpiya"
      ],
      [
        "- ∆S=∑Smax-∑Sdast.mod",
        "- ∆GT= ∑∆G T (max)- ∑∆G T(dast.mod)",
        "- U+Q=A",
        "- VT+pQ=Cv"
      ],
      [
        "- A",
        "- K",
        "- J",
        "- Q"
      ],
      [
        "- 2-tur abadiy dvigatel yaratib bo`lmaydi",
        "- Absolyut 0 temperaturani olib bo`lmaydi",
        "- Energiya bir turdan boshqa turga aylanmaydi",
        "- 1-tur abadiy dvigatel yaratib bo`lmaydi"
      ],
      [
        "- Absolyut 0 temperaturani olib bo`lmaydi",
        "- Energiya bir turdan boshqa turga aylanmaydi",
        "- 1-tur abadiy dvigatel yaratib bo`lmaydi",
        "- 2-tur abadiy dvigatel yaratib bo`lmaydi"
      ],
      [
        "- Gomopolyar yadro",
        "- Xayolan tashqi muhitdan ajratib ollingan bir biriga ta`sir etuvchi jismlar va moddalar guruhi",
        "- Gomogen eritmalar",
        "- Geterogen eritmalar"
      ],
      [
        "- izolyatsiyalangan",
        "- ochiq",
        "- Yopiq",
        "- Ochiq , yopiq, izolyatsiyalangan"
      ],
      [
        "- CO2",
        "- CuO",
        "- CaO",
        "- SO2"
      ],
      [
        "- PbO",
        "- CaO",
        "- SO2",
        "- CO2"
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
      1
    ]
  }
}
