const realSciences = [
   'Tarix', 'Dinshunoslik'
]

const ALL_QUESTIONS = {
  'Tarix': {
    "questions": [
      "Toshkent-Samarqandni bog`lovchi tezyurar poyezd?",
      "BMTning Bosh kotibi kim?",
      "O`zbekiston Respublikasi Konstitutsiyasi va qonunlarda necha yoshga to`lgan fuqarolarning saylash huquqiga ega ekanligi belgilab qo`yilgan?",
      "O`zbekiston Respublikasi Parlamentining quyi palatasi qanday nomlanadi?",
      "Jamiyatda ikki yoki undan ortiq partiyaning faoliyat yuritishi nima deyiladi?",
      "Oʻzbekiston Respublikasi Davlat madhiyasi matni kim tomonidan yozilgan?",
      "Toshkentda birinchi bo`lib qaysi davlatning elchixonasi ochildi?",
      "Vakolatli davlat organiga saylangan kishi, vakil qanday ataladi?",
      "Toshkent islom instituti kimning nomiga qo`yilgan?",
      "Ta`lim, fan va madaniyat masalalari bo`yicha Xalqaro islom tashkiloti qanday nomlanadi?",
      "Necha yoshdan kam bo`lmagan fuqarolar Prezidentlikka saylanishi mumkin?",
      "SH.M.Mirziyoyev O`zbekistonda harbiy ta`lim maktablariga qanday nom berishni taklif qilgan?",
      "Konstitutsiyaga muvofiq o`zbekiston Respublikasining davlat boshlig`i kim?",
      "Yuneskoning qarorgohi qaysi davlatda joylashgan?",
      "O`zbekistonning eng yangi tarixi fani qaysi davrni o`rganadi?",
      "Oliy Majlisning yuqori palatasi qanday nomlanadi?",
      "Mustaqillik davrida tashkil topgan ilk siyosiy partiya bu qaysi partiya edi?",
      "Taraqqiyotning “o`zbek modeli” ning asoschisi kim?",
      "O`zbekiston Respublikasi Oliy Kengashining X sessiyasida 1992 yil 2 iyulda qaysi davlat ramzi qabul qilindi?",
      "Viloyat va Toshkent shahar hokimi kim tomonidan qonunga muvofiq tayinlanadi hamda lavozimidan ozod etiladi?",
      "O`zbekiston Respublikasining Davlat gerbida quyidagi qaysi rang mavjud emas?",
      "Quyidagi qaysi rang qonun ustuvorligi va or nomuslilik ramzi?",
      "1993 yil 1-noyabrda O`zbekistonda qanday pul muomalaga kiritildi?",
      "Uzoqqa boruvchi ta`sir vositalari va uslublari; maqsadni istiqbolli dinamik aniqlab olish bu—…?",
      "Bugungi kunda O`zbekistonda fuqarolarni qamoqqa olishga sanksiya berish huquqi …… o`tkazildi?",
      "Tuman va shaharlarning hokimlari kim tomonidan tayinlanadi va lavozimidan ozod qilinadi?",
      "1999-yil — „Alpomish“ dostonining necha yilligi o`tkazildi?",
      "Innovatsiya- atamasini izohlang.?",
      "O`zbekistonda favqulodda sudlar tuzishga …….",
      "BMT homiyligidagi ta`lim, fan va madaniyat bilan shug`ullanuvchi xalqaro tashkilot –bu…",
      "Mang`itlar sulolasining eng oxirgi vakili?",
      "O`zbekiston SSRning birinchi poytaxti ni aniqlang",
      "O`rta Osiyo tarixi haqida ma`lumot beruvchi eng qadimgi manba?",
      "YUNESKO tomonidan qaysi kun “Xalqaro bag`rikenglik kuni” deb e`lon qilingan?",
      "O`zbekiston Respublikasining aholisi mustaqillik e`lon qilingan paytda necha kishini tashkil etgan?",
      "O`zbekistonda so`m valyutasi qachondan muomalaga kiritildi?",
      "Toshkent xalqaro aeroportiga qachon O`zbekiston Respublikasi birinchi prezidenti I.Karimov nomi berildi?",
      "Ro`za hayiti qachondan dam olish kuni deb e`lon qilindi?",
      "Taraqqiyot strategiyasi nechanchi yillarni o`z ichiga oladi?",
      "Demokratiya so`zining ma`nosi nima?",
      "“Al Jome` as-Sahih “asari kimning qalamiga mansub?",
      "“Fikrga qarshi fikr,g`oyaga qarshi g`oya, jaholatga qarshi ….bilan kurashmoq kerak.",
      "1996 yilda qaysi shaharlar “Amir Temur” ordeni bilan mukofotlandi?",
      "BMTning doimiy ish oʻrni (shtab kvartirasi) qaysi shaharda joylashgan?",
      "Yer yuzida tinchlikni mustahkamlash va xavfsizlikni ta`minlash, davlatlarning oʻzaro hamkorligini rivojlantirish maqsadida tashkil etilgan xalqaro tashkilotni aniqlang",
      "YUNESKO qaroriga binoan qaysi shaharda Markaziy Osiyo tadqiqotlari xalqaro instituti tashkil etilgan?",
      "O`zbekiston Respublikasi Prezidentining iqtidorli yoshlarning chet ellarga o`qishini qo`llab quvvatlash bo`yicha tashkil etilgan jamg`arma nomini aniqlang.",
      "Toshkent xalqaro aeroportiga qachon I.Karimov nomi berildi?",
      "Qachon “O`zDAEWOavto” qo`shma korxonasi ochildi?",
      "Qachon ”GM-Uzbekistan” qo`shma korxonasi tashkil etildi?",
      "“Tarix” so`zi qaysi tildan olinib “o`tmish, o`tgan voqealar haqida hikoya qilish” degan manoni beradi?",
      "Ittifoqdosh respublikalar o`rtasida birinchi bo`lib qaysi birida prezidentlik boshqaruvi joriy qilingan?",
      "O`zbekiston Respublikasi  Prezidenti saylovi tog`risida”gi qonuni qachon qabul qilingan?",
      "Qachongacha parlamentimiz Oliy Kengash nomi bilan atalgan?",
      "2003 -2016- yillarda O`zbekiston respublikasida kim Bosh vazir bo`lgan?",
      "O`zbekiston Respublikasi parlamenti necha palatadan iborat?",
      "Buxoro shahri qachon YUNESKO ro`yxatiga kiradi?",
      "“Buxoro tarixi” asarining muallifi kim?",
      "O`zbekistonni dengiz yo`liga olib chiqadigan eng yaqin yo`l qaysi davlat orqali o`tgan?",
      "Mamlakat Prezidenti 1996-yilni ... deb atash to`g`risida farmon qabul qildi",
      "1994-yilni hukumat qarori bilan mamlakatimizda .... deb e`lon qilindi",
      "BMT ning Toshkentdagi vakolatxonasi qachon ochilgan?",
      "O`zbekis-ton qaysi tashkilotga 1991-yilning dekabr oyida a`zo bo`lgan?",
      "Mustaqil O`zbekistonda ilk bor “Ta`lim to`g`risida”gi qonun qachon qabul qilindi?",
      "Qachondan 9 may – “Xotira va qadrlash kuni” sifatida nishonlanadigan bo`ldi?",
      "2023 yilning 30-aprel sanasida referendum o`tkazilib,O`zbekiston Respublikasi Konstitutsiyasiga o`zgartirishlar kiritilishi natijasida,Konstitutsiyamizninig tarkibi...",
      "1993 yil yanvar oyida Toshkentda tashkil etilgan uchrashuvda qaysi tashkilot tuzildi?",
      "O`zbekiston maktablari uchun darsliklar necha tilda chop etiladi?",
      "Toshkentda Temuriylar tarixi davlat muzeyi qachon ochildi?",
      "Muqaddas kitob-Qur`oni Karim 1992-yilda ilk bor kim tomonidan o`zbek tiliga tarjima qilindi?",
      "Davlat hokimiyati necha bo`g`inga bo`linadi?",
      "O`zbekistonda 1996-yida qaysi turdagi mashinalar ishlab chiqildi?",
      "Shimoliy alyans harbiy bloki (NATO) ga qachon asos solingan?",
      "Qaysi buyuk bobokalonimiz Humo qushini barcha tirik mavjudotlar ichida eng saxovatlisi deb ta`riflagan?",
      "O`zbekistonning Birinchi Prezidenti qaysi yilga qadar o`z lavozimida bo`lgan?",
      "2017-yilgi Harakatlar strategiyasi nechta ustuvor yo`nalishni o`z ichiga oladi?",
      "1970-1980-yillarda Paxta maydonlariga sepilayotgan zaharli kimyoviy moddalar va defoliantlarning necha turi qo`llanildi?",
      "“Suyunchi”, “Kelinlar qo`zg`oloni” kabi filmlar rejissori kim edi?",
      "1980-yillar oxirida Navro`z bayrami, aprel oyining o`rtalaridan sun`iy o`ylab topilgan, qanday nomlangan bayram bilan almashtirilgan?",
      "Quyidagi arboblardan qaysi biri “O`rta Osiyo jadidlarining otasi” deb tan olingan?",
      "SSSR qachon parchalandi?",
      "Jadid so`zinig ma`nosi nima?",
      "O`zbekistonda qonun chiqaruvchi organ bu qaysi organ?",
      "O`rta asrning qaysi olimi algebra fani asoschisi hisoblanadi?",
      "Vijdon erkinligi- bu nima degani ?",
      "Quyidagi shaxslardan qaysi biri jadid namoyondasi bo`lmagan?",
      "Mamlakat iqtisodiyotida narx-navoning ko`tarilib, pulning qadrsizlanishi qanday nomlanadi?",
      "O`zbekiston quyidagi qaysi davlat bilan chegaradosh emas?",
      "O`zbekistonning qaysi viloyati hududi jihatdan eng katta?",
      "“Har kim ta`lim olish huquqiga ega. Davlat bepul umumiy o`rta ta`lim va boshlang`ich professional ta`lim olishni kafolatlaydi. Umumiy o`rta ta`lim majburiydir”. Ushbu qoida yangi tahrirdagi Konstitutsiyamizning nechanchi moddasida belgilab qо`yilgan?",
      "Mamlakatimizda aholining necha yoshgacha bо`lgan qismi yoshlar toifasiga kiritiladi?",
      "Qaysi sana о`zbekistonda “Yoshlar kuni” sifatida nishonlanadi?",
      "O`zbekistonda an`anaviy “Sharq taronalari” xalqaro musiqa festivali qaysi shaharda o`tkazib kelinmoqda?",
      "1991-yilda yurtimizda qaysi allomaning 550 yilligi nishonlangan edi?",
      "О`zbekiston Ekologik partiyasi qachon tashkil etildi?",
      "O`zbekiston Respublikasida ijroiya hokimiyat rahbari kim?"
    ],
    "answers": [
      [
        "- Afrosiyob",
        "- Marokand",
        "- Nasaf",
        "- Lokomotiv"
      ],
      [
        "- Rumen Pudev",
        "- Si Szinpin",
        "- Antonio Guterrish",
        "- Kristin Lagard"
      ],
      [
        "- 18",
        "- 19",
        "- 25",
        "- 21"
      ],
      [
        "- Sotsial",
        "- Senat",
        "- Qonunchilik",
        "- Mulkdorlar"
      ],
      [
        "- Ko`p partiyaviylik",
        "- Kuchli fuqarolik jamiyati",
        "- Mahalliy o`zo`zini boshqarish",
        "- Huquqiy Demokratik tamoyil"
      ],
      [
        "- Alisher Navoiy",
        "- Muhammad Yusuf",
        "- Erkin Vohidov",
        "- Abdulla Oripov"
      ],
      [
        "- Fransiya",
        "- Turkiya",
        "- AQSH",
        "- Rossiya"
      ],
      [
        "- Deputat",
        "- Delegate",
        "- Elchi",
        "- Vazir"
      ],
      [
        "- Al Moturidiy",
        "- Iso Termiziy",
        "- Imom Buxoriy",
        "- Mahmud Zamaxshariy"
      ],
      [
        "- YUNISEF",
        "- OIK",
        "- ISESCO",
        "- YUNESCO"
      ],
      [
        "- 21 yoshdan",
        "- 35 yoshdan",
        "- 18 yoshdan",
        "- 25 yoshdan"
      ],
      [
        "- Temurbeklar maktabi",
        "- Vatan himoyachilari",
        "- Yosh vatanparvarlar",
        "- Manguberdi o`g`lonlari"
      ],
      [
        "- Vazirlar Mahkamasi rahbari",
        "- Bosh vazir",
        "- Prezident",
        "- Oliy Majlis raisi"
      ],
      [
        "- Shvetsariya",
        "- AQSH",
        "- Rossiya",
        "- Fransiyada"
      ],
      [
        "- Sovetlar davrini",
        "- Mustamlakachilik davrini",
        "- Milliy istqlol davrini",
        "- O`rta asrlar davrini"
      ],
      [
        "- Qonunchilik palatasi",
        "- Prezident administratsiyasi",
        "- Hukumat kotibiyati",
        "- Senat"
      ],
      [
        "- O`zbekiston Xalq demokratik partiyasi",
        "- Fidokorlar milliydemokratik partiyasi",
        "- Vatan taraqqiyoti partiyasi",
        "- Erk demokratik partiyasi"
      ],
      [
        "- M.S.Gorbachev",
        "- I.A.Karimov",
        "- V.Elsin",
        "- R.Nishonov"
      ],
      [
        "- O`zbekiston Respublikasining Davlat valyutasi",
        "- O`zbekiston Respublikasining Davlat madhiyasi",
        "- O`zbekistonning Davlat gerbi",
        "- O`zbekiston Respublikasining Davlat bayrog`i"
      ],
      [
        "- O`zbekiston Respublikasi prezidenti",
        "- Xalq tomonidan",
        "- Oliy Majlis",
        "- Vazirlar Mahkamasi"
      ],
      [
        "- Qora",
        "- Qirmizi",
        "- Kumush",
        "- Yashil"
      ],
      [
        "- Moviy havorang",
        "- Siyoh rang",
        "- Oq rang",
        "- Tilla rang"
      ],
      [
        "- so`m-kupon",
        "- so`m",
        "- Manat",
        "- rubl"
      ],
      [
        "- Sanksiya",
        "- Konversiya",
        "- Konsepsiya",
        "- Strategiya"
      ],
      [
        "- Prezidentga",
        "- Hokimga",
        "- Sudga",
        "- Proukrorga"
      ],
      [
        "- O`zbekiston Respublikasi Prezidenti",
        "- Xalq deputatlari",
        "- Tegishli viloyat hokimlari",
        "- Xalq tomonidan"
      ],
      [
        "- 1200 yilligi",
        "- 1000 yilligi",
        "- 1700 yilligi",
        "- 500 yilligi"
      ],
      [
        "- (yun. — tushuncha, ta`limot) Organizmning kimyoviy xususiyatlari, uning immuniteti haqidagi fan",
        "- – (ingl.— kiritilgan yangilik, ixtiro)",
        "- – (lot. o`xshatmoq, tenglashtirmoq, baravarlamoq) monandlik. Siyosiy identifikatsiya - u yoki bu siyosiy guruhga o`zini boshqalardan ajratish imkonini beruvchi barqaror belgilar",
        "- lot.-cōnfessio dinlar va uning shaxobchalari, tarmoqlari, mazhab, oqim va yo`nalishlarini ifodalovchi umumiy tushuncha"
      ],
      [
        "- zarurat sababchi bo`lishi mumkin",
        "- faqat poytaxtda ruxsat bor",
        "- yo`l qo`yilmaydi",
        "- majbur qilinadi"
      ],
      [
        "- UNISEF",
        "- JST",
        "- YUNES KO",
        "- MOQ"
      ],
      [
        "- Amir Olimxon",
        "- Tuvaxon",
        "- Xudoyorxon",
        "- Sherg`ozixon"
      ],
      [
        "- Toshkent",
        "- Buxoro",
        "- Samarqand",
        "- Qo`qon"
      ],
      [
        "- Marhumlar kitobi",
        "- Rigveda",
        "- Avesto",
        "- Videvdat"
      ],
      [
        "- 21 dekabr",
        "- 16 noyabr",
        "- 21 fevral",
        "- 9 may"
      ],
      [
        "- 19,5 mln kishini",
        "- 21,5 mln kishini",
        "- 20 mln kishini",
        "- 31,5 mln kishini"
      ],
      [
        "- 1995 yil noyabrda",
        "- 1994 yil 1 iyul",
        "- 1995yil iyunda",
        "- 1995 yil martda"
      ],
      [
        "- 2017 yil",
        "- 2018yil",
        "- 2015 yil",
        "- 2016 yil"
      ],
      [
        "- 1992 yil 27 martda",
        "- 1990 yil 27 martda",
        "- 1991 yil 2 martda",
        "- 1990 yil 5 avgust"
      ],
      [
        "- 2020-2024 yillar",
        "- 2022-2026 yillar",
        "- 2021-2025 yillar",
        "- 2018-2024 yillar"
      ],
      [
        "- Tasdiqlayman",
        "- Xalq hokimiyati",
        "- Oldinda o`tiruvchi",
        "- Yakka hokimlik"
      ],
      [
        "- Imom al Buxoriy",
        "- Xoja Ahror Valiy",
        "- B.Naqshband",
        "- Burhoniddin al Marg`inoniy"
      ],
      [
        "- madaniyat",
        "- Tarbiya",
        "- So`z",
        "- Ma`rifat"
      ],
      [
        "- Toshkent va Samarqand.",
        "- Samarqand va Shahrisabz.",
        "- Qarshi va Shahrisabz.",
        "- Toshkent va Buxoro."
      ],
      [
        "- Nyu-York",
        "- Vashington",
        "- Parij",
        "- Chikago"
      ],
      [
        "- BMT",
        "- YUNESKO",
        "- NATO",
        "- SHHT"
      ],
      [
        "- Samarqand",
        "- Buxoro",
        "- Xiva",
        "- Toshkent"
      ],
      [
        "- Fitrat",
        "- Kamolot",
        "- Umid",
        "- Ulug`bek"
      ],
      [
        "- 2013-yil",
        "- 2014-yil",
        "- 2018-yil",
        "- 2017 -yil"
      ],
      [
        "- 1995- yil avgust",
        "- 1994 - yil sentabr",
        "- 1993 - yil avgust",
        "- 1996- yil iyul"
      ],
      [
        "- 2009-yil",
        "- 2007-yil",
        "- 2003-yil",
        "- 2008-yil"
      ],
      [
        "- Fors",
        "- Arab",
        "- lotin",
        "- Ingliz"
      ],
      [
        "- O`zbekiston",
        "- Tojikiston",
        "- Turkmaniston",
        "- Qozog`iston"
      ],
      [
        "- 1991-yil 18-noyabr",
        "- 1991-yil 29-dekabr",
        "- 1992- yil 10-dekabr",
        "- 1992 –yil 5-dekabr"
      ],
      [
        "- 1998yil",
        "- 1997-yil",
        "- 1999-yil",
        "- 1995-yil"
      ],
      [
        "- Shavkat Mirziyoyev",
        "- Shukrullo Mirsaidov",
        "- Abdulhoshim Mutalibov",
        "- O`tkir Sultonov"
      ],
      [
        "- 3",
        "- 2",
        "- 1",
        "- 4"
      ],
      [
        "- 1998 yil",
        "- 1993yil",
        "- 1995 yil",
        "- 1999 yil"
      ],
      [
        "- Beruniy",
        "- Farg`oniy",
        "- Xorazmiy",
        "- Narshaxiy"
      ],
      [
        "- Afg`oniston",
        "- Turkmaniston",
        "- Hindiston",
        "- Xitoy"
      ],
      [
        "- “Amir Temur yili”",
        "- Ibn Sino",
        "- “Navoiy yili”",
        "- “Ulug`bek yili”"
      ],
      [
        "- “Ulug`bek yili”",
        "- “Ibn Sino yili”",
        "- “Amir Temur yili”",
        "- “Navoiy yili”"
      ],
      [
        "- 1999-yil 2-avgust",
        "- 1998-yil 4-avgust",
        "- 1995-yil 24-avgust",
        "- 1993-yil 24-avgust"
      ],
      [
        "- BMT",
        "- Yunesko",
        "- Yunisef",
        "- MDH"
      ],
      [
        "- 1994-yil 31-avgustda",
        "- 2000-yil 15-sentyabrda",
        "- 1997-yil 27-avgustda",
        "- 1992-yil 2-iyulda"
      ],
      [
        "- 1998-yil",
        "- 2001-yil",
        "- 1999-yil",
        "- 1997-yil"
      ],
      [
        "- Muqaddi-ma,6 bo`lim,27 bob 155 moddadan iborat bo`ldi",
        "- Muqadddima,6 bo`lim,28 bob 160 moddadan iborat bo`ldi",
        "- Muqadddima,6 bo`lim,27 bob 158moddadan iborat bo`ldi",
        "- Muqadddima,4 bo`lim,30 bob 130 moddadan iborat bo`ldi"
      ],
      [
        "- Mintaqaviy xavfsizlik tashkiloti",
        "- Kollektiv xavfsizlik kengashi",
        "- Mustaqil davlatlar Hamdo`stligi",
        "- Markaziy Osiyo Hamdo`stligi"
      ],
      [
        "- 8 tilda",
        "- 9 tilda",
        "- 6 tilda",
        "- 7 tilda"
      ],
      [
        "- 1994-yilda",
        "- 1996-yilda",
        "- 1999-yilda",
        "- 1998-yilda"
      ],
      [
        "- Sams Tabriziy tomonidan",
        "- Alouddin Mansur tomonidan",
        "- Shamsiddin Toshkandiy tomonidan",
        "- Abdulaziz Samarqandiy tomonidan"
      ],
      [
        "- 4",
        "- 2",
        "- 3",
        "- 1"
      ],
      [
        "- Nexia,Chevrolet Spark",
        "- Matiz,yangilangan Damas",
        "- Matiz, Nexia Donc",
        "- Damas, Tico, Nexia"
      ],
      [
        "- 1949 yil 4 aprel",
        "- 2005 yil 19 dekabr",
        "- 2001 yil 14 iyun",
        "- 1945 yil 24 oktyabr"
      ],
      [
        "- Amir Temur",
        "- Mirzo Ulug`bek",
        "- Bobur",
        "- Аlisher Navoiy"
      ],
      [
        "- 2023-yil 30-mart",
        "- 1992-yil",
        "- 1993-yil 26-sentabrda",
        "- 2016-yil"
      ],
      [
        "- 5",
        "- 2",
        "- 12",
        "- 6"
      ],
      [
        "- 80 dan ortiq turi",
        "- 90 dan ortiq turi",
        "- 100 dan ortiq turi",
        "- 70 dan ortiq turi"
      ],
      [
        "- L.Fayziyev",
        "- А.Qobulov",
        "- M.Аbzalov",
        "- L.Fayziyev"
      ],
      [
        "- “Mehrjon”",
        "- “Navbahor”",
        "- “Qizil karvon”",
        "- “Paxta bayrami”"
      ],
      [
        "- Abdurauf Fitrat",
        "- Abdulla Avloniy",
        "- M.Behbudiy",
        "- Munavvar Qori"
      ],
      [
        "- 1991-yil",
        "- 1995-yil",
        "- 1989-yil",
        "- 1993yil"
      ],
      [
        "- Boshlash",
        "- Yangi",
        "- O`zgartirish",
        "- Eski"
      ],
      [
        "- Oliy Majlis",
        "- Vazirlar mahkamasi",
        "- Prokuratura",
        "- Konstitutsiyaviy sud"
      ],
      [
        "- Al-Farobiy",
        "- Al-Beruniy",
        "- Al-Farg`oniy",
        "- Al-Xorazmiy"
      ],
      [
        "- Dinga e`tiqot qilish",
        "- Dinga e`tiqot qilmaslik",
        "- Dinlararo totuvlik",
        "- Xohlagan diniga e`tiqot qilish yoki qilmaslik"
      ],
      [
        "- Abduqodir Shukuriy",
        "- Hamid Olimjon",
        "- Hamza",
        "- Abdulla Avloniy"
      ],
      [
        "- Integratsiya",
        "- Konvertizatsiya",
        "- Emissiya",
        "- Inflyatsiya"
      ],
      [
        "- Afg`oniston",
        "- Qirg`iziston",
        "- Eron",
        "- Turkmaniston"
      ],
      [
        "- Navoiy",
        "- Samarqand",
        "- Buxoro",
        "- Qashqadaryo"
      ],
      [
        "- 38-modda",
        "- 12-modda",
        "- 50-modda",
        "- 41-modda"
      ],
      [
        "- 30 yoshgacha",
        "- 18 yoshgacha",
        "- 13 yoshgacha",
        "- 25 yoshgacha"
      ],
      [
        "- 8-dekabr",
        "- 30-iyun",
        "- 1-yanvar",
        "- 2-iyul"
      ],
      [
        "- Samarqand",
        "- Namangan",
        "- Andijon",
        "- Buxoro"
      ],
      [
        "- Bobur",
        "- Alisher Navoiy",
        "- Amir Temur",
        "- Mirzo Ulug`bek"
      ],
      [
        "- 2019-yil yanvarda",
        "- 2017-yil fevralda",
        "- 2013-yil mayda",
        "- 2018-yil oktabrda"
      ],
      [
        "- Senat raisi",
        "- Bosh vazir",
        "- Spiker",
        "- Oliy Majlis raisi"
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
      2
    ]
  },
  'Dinshunoslik': {
    "questions": [
      "Zardushtiylik ta`limotiga ko`ra, Zardusht necha yoshga yetganida unga payg`ambarlik vazifasi berilgan?",
      "“Avesto”matniga yozilgan sharh nima deb nomlanadi?",
      "Cherkov bu − ...?",
      "E`tiqod qiluvchilarning soniga koʻra eng katta jahon dini qaysi?",
      "Eng qadimgi jahon dini...?",
      "Islomga qadar Markaziy Osiyoda eng keng tarqalgan din qaysi javobda berilgan?",
      "Iso Masih qaysi dinning paygʻambari hisoblanadi?",
      "Iso Masih tugʻilgan joy nomi?",
      "Iso Masihning nechta apostoli boʻlgan?",
      "Jahon dinlaridan birining nomini aniqlang?",
      "Qaysi dinlar jahon dinlari deb ataladi?",
      "Qaysi dinlar milliy dinlardan hisoblanadi?",
      "Islom dininig asoschisi qaysi javobda to`g`ri ko`rsatilgan?",
      "Xristianlik qachon va qayerda vujudga kelgan?",
      "Yahudiylik dinidagi muqaddas dam olish kuni qaysi?",
      "Zardushtiylik dinining asosiy gʻoyasi nimadan iborat?",
      "Zardushtiylikning muqaddas manbasi ...",
      "Yakkaxudolik dini qanday din hisoblanadi?",
      "Zardushtiylik dinida muqaddas hisoblangan to`rt unsur qaysi javobda to`g`ri ko`rsatilgan?",
      "Islom dini qachon paydo bo`lgan?",
      "Islom dinining muqaddas kitobi qaysi javobda to`g`ri ko`rsatilgan?",
      "“Qur`on” so`zining ma`nosini aniqlang",
      "Muhammad (sav) ayollarining ismi qaysi javobda tog`ri ko`rsatilgan?",
      "Xristianlik dinining asoschisi Iso necha yoshida xudoning amri bilan Yaxyo payg`ambar oldiga boradi ?",
      "Muhammad (sav) onalarining ismi qaysi javobda tog`ri ko`rsatilgan?",
      "Qachon Muhammad (sav) ga Allohdan Jabroil farishta vositasida birinchi vahiy tushadi?",
      "BMT tomonidan qaysi kun –“Xalqaro bag`rikenglik kuni” deb e`lon qilingan?",
      "XII asr oxirida yuzaga kelgan mashhur Kubroviya tariqatati qayerda yuzaga kelgan?",
      "“Dil bayor-u dast bakor” (“ko`ngil Allohda bo`lsin-u, qo`1 ish bilan band bo`lsin”) degan hikmati bilan mashur tariqatni aniqlang",
      "Hadis to`plovchi kishilar… deyiladi",
      "“Missiya” atamasining izohi qaysi javobda to`g`ri ko`rsatilgan?",
      "Har bir musulmon kishining kuniga besh mahal poklanib,qiblaga yuzlangan holda amalga oshiradigan farz ibodati nima deyiladi?",
      "Qur`oni Karim necha yil davomida payg`ambarimizga nozil bo`lgan?",
      "Qu`roni Karimda nechta sura bor?",
      "Muhammad(sav) vafotidan so`ng nechta xalifa xalifalikni boshqargan?",
      "Islom dinining Qur`oni Karimdan keying o`rinda turuvchi manbasi nima deyiladi?",
      "“Al Jome`as-Sahih” asarining muallafini aniqlang",
      "Qaysi xalifa davrida Qur`on kitob holatiga keltirilgan?",
      "Muhammad (s.a.v) qizlarining ismini aniqlang",
      "Qur`on necha oyatdan iborat?",
      "Mo`gullat istilosiga qarshi lashkar to`plagan shayx N.Kubro necha yoshda bo`lgan?",
      "“Devoni Hikmat” asari kimning qalamiga mansub?",
      "Jahon dinlarining qaysi biri yosh din hisoblanadi?",
      "Diniy urf-odatlar yigʻindisi qanday ataladi?",
      "Bugunki kunda bir necha terrorchi tashkilotlar o`z saflariga ijtimoiy tarmoqlar orqali asosan necha yosh oralig`idagi bo`lgan kishilarni yollamoqda?",
      "632–634 yillarda hukmronlik qilgan xalifani aniqlang",
      "Umar ibn Xattobning hukmronlik qilgan yillari qaysi javobda to`g`ri ko`rsatilgan?",
      "Tassavuf ta`limoti qayerda paydo bo`lgan?",
      "Bobolari Abdulmutollibning vafotidan keyin Rasululloh (s.a.v)ni kim tarbiyasiga olgan?",
      "Kasta nima?",
      "AQSHda ro`y berga terroristik harakat natijasida \"egizak minoralar\"ning qulatilishi qachon sodir bo`lgan edi?",
      "Musulmonlar uchun muborak sanalgan kunni belgilang",
      "“Xushxabar” deb tarjima qilingan nasroniylikning muqaddas kitoblaridan biri...?",
      "Musulmonlarning ibodat qiladigan joyi qanday ataladi?",
      "Arab tilida “shariat” soʻzining ma`nosi...?",
      "Qur`oni Karim birinchi qayerda nozil boʻlgan?",
      "“Tolerantlik” soʻzining ma`nosi?",
      "Dunyoda nechta diniy konfessiyalar faoliyat olib boradi?",
      "Nechanchi yilda “Toshkent – islom madaniyati poytaxti”deb nomlangan?",
      "“Terrorizm” qanday oqibatlarga olib keladi?",
      "Qachon Toshkent shahrida terroristlar tomonidan uyushtirilgan portlashlardan keyin terrorizm muammosi Oʻzbekistondagi ijtimoiy-siyosiy hayotga tahdid soluvchi asosiy xavf-xatarlardan biriga aylandi?",
      "Musulmonlrning diniy ta`lim oladigan joyi qanday nomlanadi ?",
      "Qaysi daryoda Iso Masih choʻqintirilgan?",
      "Qur`onda nechta payg`ambarning nomlari zikr etilgan?",
      "Yassaviya g`oyalari qaysi asarda jamlangan?",
      "Qaysi tariqatning 2-nomi Xojagon yo`nalishi deb nomlanadi?",
      "Qur`on nechanchi yillarda nozil bo`lgan?",
      "Qur`oni Karimda “ilm” so`zi necha marta takrorlangan?",
      "Payg`ambarni ko`rgan, u bilan muloqatda bo`lgan musulmonlar nima deb ataladi?",
      "Qaysi alloma islom olamida “Musulmonlarning е`tiqodini tuzatuvchi” degan yuksak sharafga sazovor bo`lgan?",
      "Hadis so`zining ma`nosi?",
      "Alisher Navoiy va Abdurahmon Jomiy hazratlari qaysi tasavvuf tariqatiga е`tiqod qilganlar?",
      "O`zbekiston Respublikasining fuqarosi necha yoshda diniy jamiyatga a`zo bo`lishi mumkin?",
      "O`zbekistonda diniy tashkilotlar qaysi idora tomonidan ro`yxatga olinadi?",
      "Toshkent Islom universiteti qachon tashkil еtilgan?",
      "Qaysi davlatlar terroristik faoliyatning markazlari hisoblanadi?",
      "“Sekulyarizatsiya” atamasi diniy jihatdan qanday ma`noda ishlatiladi?",
      "Budda qaysi qabiladan bo`lgan?",
      "Budda so`zining ma`nosi nima?",
      "Mil.avv I asrda qaysi hududda buddaviylik ustuvor mavqega ega bo`ldi?",
      "Buddaviylik dini Turkiston mintaqasiga qaysi podsholik davrida kirib kelgan?",
      "“Insonlar bilan hayvon va oʻsimliklar oʻrtasida qarindoshchilik aloqalari mavjud”- degan tasavvur qaysi diniy tasavvurda namoyon boʻladi?",
      "“Insonning joni oʻlgandan keyin korinmas ruh boʻlib yashaydi”- degan tasavvur qaysi dinning ibtidoiy shaklida uchraydi?",
      "Grek tilidagi “Christos” soʻzining ma`nosi...?",
      "Politeizm – bu...:",
      "\"Vijdon erkinligi” tushunchasi nimani anglatadi?",
      "Xristian dinini “boshqa dinlar bilan teng”- deb e`lon qilgan imperator kim edi?",
      "Yaponlarning milliy dini qanday nomlanadi?",
      "Yaxudiylik dinining paygʻambarini aniqlang",
      "Alloh bilan payg`ambarlar o`rtasida elchi vazifasini bajaruvchi farishtaning nomi qaysi javobda to`g`ri ko`rsatilgan?",
      "Bajarilishi yomon sanalgan amalga nima deyiladi?",
      "Islom diniga qadar Makkadagi bosh ilohning nomi qaysi javobda to`g`ri ko`rsatilgan?",
      "Muhammad (sav) Arabiston tarixida “Fil voqeasi” nomi bilan mashhur jangdan necha kundan keyin tavallud topgan?",
      "Qur`on Madinada necha yil davomida nozil bo`lgan?",
      "Din talablarini bajarmagan gunohkorlar oxiratda jazolanadigan joy qanday ataladi?",
      "Arabcha-“bog`,bo`ston”- taqvodor dindorlar narigi dunyoda rohat va farog`atda yashaydigan joyga nima deyiladi?",
      "Qur`on Makkada necha yil davomida nozil bo`lgan?",
      "Hamma uchun vijdon erkinligi kafolatlanadi.Har kim xohlagan diniga e`tiqod qilish yoki hech qaysi dinga e`tiqod qilmaslik huquqiga ega.Diniy qarashlarni majburan singdirishga yo`l qo`yilmaydi. Ushbu modda O`zbekiston Respublikasi Konstitutsiyasining nechanchi moddasida bayon etilgan?",
      "Islom dinining asoschisi Muhammad (sav) qaysi voqeadan 50 kun o`tgach tavallud topgan?"
    ],
    "answers": [
      [
        "30 yoshga",
        "28 yoshga",
        "35 yoshga",
        "55 yoshga"
      ],
      [
        "Yasht",
        "Vidovat",
        "Zend",
        "Vispart"
      ],
      [
        "Xristianlik diniy marosim oʻtkazish uchun moʻljallangan diniy tashkilot",
        "Muqaddas matnlar toʻplami",
        "Kult, e`tiqod",
        "Diniy dunyoqarash turi"
      ],
      [
        "Hinduiylik",
        "Buddizm",
        "Xristianlik",
        "Islom"
      ],
      [
        "Buddizm",
        "Yahudiylik",
        "Xristianlik",
        "Islom"
      ],
      [
        "Buddaviylik",
        "Braxmanchilik",
        "Konfutsiychilik",
        "Zardushtiylik"
      ],
      [
        "Islom",
        "Sintoiylik",
        "Xristianlik",
        "Lamaizm"
      ],
      [
        "Nazaret",
        "Misr",
        "Vizantiya",
        "Bobil"
      ],
      [
        "Yettita",
        "uchta",
        "Oʻn ikkita",
        "Oʻn uchta"
      ],
      [
        "Baptistlik",
        "Pyatidesyatniklik",
        "Islom",
        "Adventistlik"
      ],
      [
        "Islom, krishnachilik, bahoiylik",
        "Buddizm, xristianlik, islom",
        "Yahudiylik, xristianlik, islom",
        "Zardushtiylik, sintoiylik, daolik"
      ],
      [
        "Hinduizm, jaynizm, konfutsilik",
        "Katolisizm, pravoslaviya,protestantlik",
        "Fetishizm, totemizm,anemizm",
        "Buddizm, islom,xristianlik"
      ],
      [
        "Sidhata",
        "Iso",
        "Muhammad(s a v)",
        "Muso"
      ],
      [
        "Mil.avv.IV-asrda Suriyada",
        "Mil.avv.I-asrda Suriyada",
        "Mil.IV asrda Vizantiyada",
        "Mil.I asrda Falastinda"
      ],
      [
        "Juma",
        "Payshanba",
        "Shanba",
        "Dushanba"
      ],
      [
        "Yovuz fikr, Yovuz soʻz, Yovuz amal",
        "Yovuzlik bilan murosa qilish",
        "Toʻgʻri javob yoq`",
        "Ezgu fikr, Ezgu soʻz, Ezgu amal"
      ],
      [
        "Аvesto",
        "Tavrot",
        "Veda",
        "Zabur"
      ],
      [
        "polo-monotelistik",
        "monoteistik",
        "politeizm",
        "teologik"
      ],
      [
        "Kitob,yozuv,olov,tuproq",
        "Non,tuz,suv,havo",
        "Suv,havo,tuproq,olov",
        "Tuz,suv,kitob,qilich"
      ],
      [
        "Mil.VII asrda",
        "Mil.avv XII asrda",
        "Mil. avv.VI asrda",
        "Mil.I asrda"
      ],
      [
        "“Bibliya”",
        "“Qur`on”",
        "“Avesto”",
        "“Tavrot”"
      ],
      [
        "“itoat etish”",
        "``o`qish”",
        "“muqaddas”",
        "“gapirish”"
      ],
      [
        "Xadicha",
        "Fotima",
        "Omina",
        "Halima"
      ],
      [
        "35 yoshida",
        "45yoshida",
        "40 yoshida",
        "33 yoshida"
      ],
      [
        "Fotima",
        "Halima",
        "Omina",
        "Xadicha"
      ],
      [
        "622 yil",
        "632 yil",
        "610 yil",
        "630 yil"
      ],
      [
        "18- sentabr",
        "16-noyabr",
        "22-fevral",
        "25- mart"
      ],
      [
        "Buxoroda",
        "Xorazmda",
        "Xurosonda",
        "Eronda"
      ],
      [
        "Kubroviya tariqati",
        "Yassaviya tariqati",
        "Naqshbandiya tariqati",
        "Gijduvoniy tariqati"
      ],
      [
        "mutakallimlar",
        "So`fiylar",
        "Musahhihlar",
        "Faqihlar"
      ],
      [
        "“yuborish”, “vazifa topshirish”",
        "“muhokama”, vaziyat”",
        "«so`z», «gap», «jumla»",
        "“tinchlik,vatanparvarlik”"
      ],
      [
        "imon",
        "namoz",
        "zakot",
        "ijmo"
      ],
      [
        "40 yil",
        "20 yil",
        "23 yil",
        "36 yil"
      ],
      [
        "220 ta",
        "114 ta",
        "125 ta",
        "200 ta"
      ],
      [
        "8 ta",
        "4ta",
        "5 ta",
        "12 ta"
      ],
      [
        "namoz",
        "Hadis",
        "sunnat",
        "ro`za"
      ],
      [
        "Imom Al- Buxoriy",
        "Zamaxshariy",
        "Marg`inoniy",
        "Farg`oniy"
      ],
      [
        "Usmon ibn Affon",
        "Zayud ibn Sobit",
        "Abu Bakr Siddiq",
        "Ali"
      ],
      [
        "Omina",
        "Fotima",
        "Xadicha",
        "Halima"
      ],
      [
        "7890",
        "6236",
        "7654",
        "4578"
      ],
      [
        "76 yoshda",
        "70 yoshda",
        "89 yoshda",
        "80 yoshda"
      ],
      [
        "Kubroviy",
        "Gijduvoniy",
        "Naqshbandiy",
        "A.Yassaviy"
      ],
      [
        "Xristianlik",
        "Islom",
        "Buddizm",
        "hinduiylik"
      ],
      [
        "Diniy marosim",
        "An`ana",
        "Diniy ong",
        "Duo"
      ],
      [
        "17- 35 yosh",
        "20-25 yosh",
        "25-35 yosh",
        "30-40 yosh"
      ],
      [
        "Xalifa Abu Bakr",
        "Umar ibn Xattob",
        "Usmon ibn Affon",
        "Hazrat Ali"
      ],
      [
        "634-644 yillar",
        "656-661yillar",
        "644-656 yillar",
        "632-634 yillar"
      ],
      [
        "Misrda",
        "Hindistonda",
        "Eronda",
        "Iroqda"
      ],
      [
        "Abu Bakr",
        "Umar",
        "Usmon",
        "Amakilari"
      ],
      [
        "Tumor",
        "Tabaqa",
        "Din",
        "Ishonch"
      ],
      [
        "1999-yil 16-fevralda",
        "2001-yil 11-sentabrda",
        "2008-yil 14-oktabrda",
        "2005-yil 13- mayda"
      ],
      [
        "Juma",
        "Qadr kechasi",
        "Payshanba",
        "Dushanba"
      ],
      [
        "Injil",
        "Tavrot",
        "Apokalipsis",
        "Muqaddas yozuvlar"
      ],
      [
        "Sinagoga",
        "Cherkov",
        "Madrasa",
        "Masjid"
      ],
      [
        "Toʻgʻri yoʻl",
        "Gunohsiz yoʻl",
        "Ta`qiq",
        "Notoʻgʻri yoʻl"
      ],
      [
        "Teshiktoshk gʻorida",
        "Makkada, Hiro togʻida",
        "Sinoy togʻida",
        "Himolay togʻida"
      ],
      [
        "yaxshilik",
        "bagʻrikenglik",
        "Baxillik",
        "yovuzlik"
      ],
      [
        "100 tacha",
        "3000",
        "2000",
        "1000 dan ortiq"
      ],
      [
        "2007 yilda",
        "2017 yilda",
        "2000 yilda",
        "1997 yilda"
      ],
      [
        "Insoniyatni hayotini xavf ostiga olib keladi",
        "Tinchlikka olib keladi",
        "Baxt-saodatga olib keladi",
        "Koʻngilocharlikka olib keladi"
      ],
      [
        "1999 yil 16 fevral",
        "2004 yil 29 mart",
        "2001 yil 11 sentabr",
        "2005 yil 15 may"
      ],
      [
        "Masjid",
        "Seminariya",
        "Akademiya",
        "Madrasa"
      ],
      [
        "Nil daryosida",
        "Gang daryosida",
        "Yefrat daryosida",
        "Iordan daryosida"
      ],
      [
        "35",
        "30",
        "20",
        "25"
      ],
      [
        "“Hindiston”",
        "“As-Sahih”",
        "“Devoni Hikmat”",
        "“Musnad”"
      ],
      [
        "Naqshbandiya",
        "Yassaviya",
        "Molikiya",
        "Kubroviya"
      ],
      [
        "515-533 yillarda",
        "315-363 yillarda",
        "720-740 yillarda",
        "610-632 yillarda"
      ],
      [
        "650 martadan ortiq",
        "720 marta",
        "850 marta",
        "750 martadan ortiq"
      ],
      [
        "Xalifalar",
        "Sahobalar",
        "Elchilar",
        "Xabarchilar"
      ],
      [
        "Termiziy",
        "Moturidiy",
        "Farg`oniy",
        "Marg`inoniy"
      ],
      [
        "Qoida",
        "Haq",
        "Hikoya",
        "Maqola"
      ],
      [
        "Ja`fariya",
        "Kubroviya",
        "Yassaviya",
        "Naqshbandiya"
      ],
      [
        "18 yosh",
        "21 yosh",
        "20 yosh",
        "16 yosh"
      ],
      [
        "Diniy ishlar idorasi",
        "Vazirlar Mahkamasi",
        "O`zbekiston musulmonlari idorasi",
        "Adliya Vazirligi"
      ],
      [
        "2002-yil",
        "2001-yil",
        "1997-yil",
        "1999-yil"
      ],
      [
        "Iroq, Afg`oniston, Suriya",
        "AQSH, Rossiya, Fransiya",
        "Buyuk Britaniya, Germaniya, Yaponiya",
        "Eron, Misr, Pokiston"
      ],
      [
        "Dinning davlatdan ajratilganligini ifodalash uchun",
        "Diniy tashkilotlarning qonun oldida tengligini ifodalanish uchun",
        "Diniy bag`rikenglikni ifodalanish uchun",
        "Vijdon еrkinligini ifodalanish uchun"
      ],
      [
        "Shaxsana",
        "Shavkana",
        "Shakya",
        "Shashya"
      ],
      [
        "poklangan",
        "Nurlangan",
        "sanamlarga sig`inuvchi",
        "Iyonmangan"
      ],
      [
        "Xolchayonda",
        "Buxoroda",
        "Termizda",
        "Qashqarda"
      ],
      [
        "Kushon",
        "Qang`",
        "Davan",
        "Baqtriya"
      ],
      [
        "Fetishizm",
        "Тotemizm",
        "Animizm",
        "Мagiya"
      ],
      [
        "Animizm",
        "Тotemizm",
        "Fetishizm",
        "Мagiya"
      ],
      [
        "Paygʻambar",
        "Sariq tuya yetaklagan",
        "Nurlangan",
        "Xaloskor"
      ],
      [
        "Yakkaxudolik",
        "Sekta",
        "Cherkov tashkiloti",
        "Koʻpxudolik"
      ],
      [
        "Fuqarolarning oʻz millatiga ishonish huquqi",
        "Fuqarolarning biron bir dinga e`tiqod qilish yoki e`tiqod qilmaslik huquqi",
        "Fuqarolarning dinga ishonmaslik va unga qarshi chiqish huquqi",
        "Fuqarolarning bitta dinga ishonishi zarurligi"
      ],
      [
        "Litsiniy,",
        "Yustian",
        "Luliy Sezar",
        "Konstantin"
      ],
      [
        "Lamaizm",
        "Buddizm",
        "Sintoizm",
        "Krishnachilik"
      ],
      [
        "Muso",
        "Dovud",
        "Iso Masih",
        "Muhammad(s.a.v)"
      ],
      [
        "Mikoil",
        "Azroil",
        "Jabroil",
        "Sulaymon"
      ],
      [
        "Makruh",
        "Kasta",
        "Qiyomat",
        "Mandub"
      ],
      [
        "Manot",
        "Hubal",
        "Uzot",
        "Lot"
      ],
      [
        "50 kun",
        "150 kun",
        "100 kun",
        "120 kun"
      ],
      [
        "12 yil",
        "10 yil",
        "20 yil",
        "15 yil"
      ],
      [
        "Do`zax",
        "Sunnat",
        "Jannat",
        "Vojib"
      ],
      [
        "Mazhab",
        "Jannat",
        "Sunnat",
        "Vojib"
      ],
      [
        "20 yil",
        "11 yil",
        "15 yil",
        "13 yil"
      ],
      [
        "38- modda",
        "35- modda",
        "40- modda",
        "42- modda"
      ],
      [
        "“Shiffin janggi”",
        "“Fil voqeasi”",
        "“Quraysh janggi”",
        "“Chinoz janggi”"
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
      2
    ]
  }
}
