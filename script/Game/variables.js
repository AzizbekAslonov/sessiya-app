const realSciences = [
   'Tarix',
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
  }
}
