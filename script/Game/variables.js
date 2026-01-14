const realSciences = [
   'Lotin tili',
]

const ALL_QUESTIONS = {
  'Lotin tili': {
    "questions": [
      "Lotin alifbosida nechta harf bor?",
      "Qaysi so`zda ”C“ harfi “ts” deb o`qiladi?",
      "Retsept blankasi necha qismdan iborat?",
      "Nuqtalar o`rnini to`ldiring: Murdadan qo`rish -………..phobia.",
      "Nuqtalar o`rnini to`ldiring: o`z qoni bilan davolash -…………….haemotherapia.",
      "“Ko`krak sohasida kasalligi” ma`nosini ifodalovchi atamalar yasang:",
      "“mushak to`qimasidagi o`sma” my-…..",
      "......nomlardagi tarkibiy qismlar taxminan anatomik, fiziologik va terapevtik xarakterdagi axborotni berishi mumkin.",
      "“Shirin miya siropi”",
      "Dorivor ashyolarning nomenklaturasi……",
      "“Ch”-harf birikmasi qaysi tovushni bildiradi?",
      "Diftong deb nimaga aytiladi?",
      "Berilgan atamalarning qaysi birida diftong bor?",
      "Qaysi so`zda C harfi ”k“ deb tallafuz qilinadi?",
      "Qaysi holatlarda ”S“ harfi “z” deb o`qiladi?",
      "Digraf deb nimaga aytiladi?",
      "Qaysi so`zda “s” harfi [z] deb o`qiladi?",
      "Berilgan atamalarning qaysi birida digraf bor?",
      "Lotin tilida urg`u nechinchi bo`g`indan qo`yiladi?",
      "“Antipyrinum” so`zida qaysi tarkibiy qism axborot beruvchi?",
      "« Corvalolum » so`zida qaysi tarkibiy qism axborot beruvchi ?",
      "« Novocainum » so`zida qaysi tarkibiy qism axborot beruvchi ?",
      "Qon tomirlarini kengaytiruvchi axborot beruvchi so`zni toping:",
      "Mahalliy og`riqsizlantiruvchi …….",
      "“aralashtirmoq” fe`lini ajrating",
      "Qaysi so`zda „ti” harf birikmasi [ti] deb o`qiladi",
      "V turlanishdagi otni aniqlang",
      "“Aralashtir suyuq surtma hosil bo`lsin”-bu",
      "Sifat so`z turkumi qaysi javobda berilgan?",
      "II turlanishdagi otni aniqlang",
      "V turlanishdagi ot qaysi variantda berilgan?",
      "Shakarning lotincha nomlanishi?",
      "“Yuqori jag`” ning lotincha-yunoncha dubleti?",
      "Birinchi guruh sifatni aniqlang",
      "Qaysi so`zda ikkinchi bo`g`in qisqa o`qiladi",
      "“Fosfor” elementi nomini aniqlang",
      "“Musculus longus” tarjimasini toping",
      "Qaysi so`zda ikkinchi bo`g`in cho`ziq o`qiladi",
      "“ala” so`zi Gen.Singda qanday qo`shimcha oladi",
      "“Kapsulalarda”qisqartma so`zini aniqlang",
      "“ os zygomatic...“ to`g`ri qo`shimchani qo`ying",
      "„Chirurgia” so`zining ma`nosi?",
      "[kv] tovushini beradigan so`zni aniqlang",
      "Otning rod ko`rsatkichi nechta",
      "Th- harf birikmasi qaysi tovushni bildiradi",
      "Sch- harf birikmasi qaysi tovushni bildiradi",
      "Birinchi guruh sifatni aniqlang",
      "Atamaning mos tarjimasini toping: “ponasimon suyak”",
      "Cho`ziqlik qoidasi nechta qoidadan iborat?",
      "Qaysi diftonglar urg`u oladi?",
      "“Compositus” so`zi nechta bo`gindan iborat?",
      "“Ligamentum” so`zida urg`u qaysi bo`g`inga tushadi?",
      "“Diaeta” so`zida urg`u qaysi bo`g`inga tushadi?",
      "Maqolni lotin tilida tarjimasini toping. ”Yozmoq, ikki qayta o`qimoqdir“.",
      "Lotin tilida fe`llar nechta turda bo`linadi?",
      "Birinchi tuslanishda fe`l qaysi qo`shimchaga ega?",
      "Miscere - fe`li qaysi tuslanishga ega?",
      "Audire – fe`li qaysi tuslanishga ega ?",
      "Fe`lning lug`at shakli to`gri yozilgan qatorni toping.",
      "Retseptda fe`llar qaysi maylda yoziladi?",
      "Lotin tilida otlar nechta turlanishga bo`linadi?",
      "Birinchi turlanishdagi otni aniqlang.",
      "Moslashmagan aniqlovchi atamani aniqlang.",
      "Bosh kelishik lotinchada-",
      "III - turlanishdagi otni aniqlang.",
      "V-turlanishdagi otni aniqlang:",
      "Lug`at shakli to`g`ri yozilgan otni toping",
      "IV turlanishdagi otni aniqlang",
      "Maqolni lotin tilida to`g`ri tarjimasini toping. ”Mehnat tanani chiniqtiradi”.",
      "Gen. Sing shaklidagi otni aniqlang;",
      "Gustus,us,m. Bu atama qaysi turlanishga tegishli?",
      "Moslashmagan aniqlovchili atamani toping.",
      "Berilgan qaysi javobda sifat to`g`ri yozilgan?",
      "Birinchi guruh sifatni aniqlang",
      "Ikkinchi guruh sifatga qaysi turlanish kiradi?",
      "Moslashgan aniqlovchi atamasini toping.",
      "“Yaqinlashtiruvchi ” ma`noni beradigan old qo`shimchali so`zni toping.",
      "Qaysi so`zda “ichida”old qo`shimchasi ishlatilgan?",
      "Qaysi so`zda “ostida”old qo`shimchasi ishlatilgan?",
      "“Ko`krak qafasining pastki teshigi” atamasini aniqlang.",
      "“Bosh miyaning yumshoq pardasi” atamasini toping.",
      "“Qo`shmoq” fe`lini ajrating",
      "Moslashgan aniqlovchili atamani toping",
      "Oddiy darajadagi sifatni aniqlang.",
      "“Aralashtir shamcha hosil bo`lguncha”-bu",
      "„Suyak bo`g`imlarining yallig`lanishi” ma`nosini beradigan atamani toping.",
      "„Bosh miyaning yallig`lanishi” atamasini toping.",
      "“Til`” ning lotincha-yunoncha dubleti?",
      "„Davolash” ma`nosini bildiradigan atamani yunoncha – lotincha atalishini aniqlang.",
      "„Tosh kasalligi” atamasini aniqlang.",
      "Qaysi so`zda „su” harf birikmasi [sv] deb o`qiladi?",
      "Qaysi so`zda „ti” harf birikmasi [tsi] deb o`qiladi?",
      "Bir kunlik dori qabul qilish dozasi qaysi javobda ko`rsatilgan?",
      "“Pollex” so`zining ma`nosini toping.",
      "Maqolning o`zbekcha ekvivalentini toping: “Omnium artium medicina nobillisima est”",
      "Acidum ascorbinicum- ma`nosi nima?",
      "Orttirma daraja sifatini toping.",
      "“Tishga oid” atamasi qanday ataladi?",
      "“Orqadagi” sifati qanday nomlanadi?",
      "Moslashmagan aniqlovchi nima?",
      "Moslashgan aniqlovchi atamani toping.",
      "Moslashgan aniqlovchi nima?",
      "To`qimalarni o`rganuvchi fan.",
      "“O`t tosh kasalligi” atamasini aniqlang.",
      "“Siydik – tosh kasalliklari” atamasini aniqlang.",
      "Qon bosimining tushishi-",
      "Lotin tilida “ad, ab”prefikslari qanday ma`nolarni ifodalashda qo`llaniladi?",
      "“Tish” atamasini lotincha – yunoncha dubletini aniqlang:",
      "Keksalikni o`rganuvchi fan qaysi javobda to`g`ri berilgan?",
      "Qon bosimining ko`tarilishi-",
      "Tuzning lotincha nomlanishi?",
      "Tarjima qiling: ter bezlarida hosil bo`ladigan xavfsiz o`sma",
      "“Funksiyaning buzilishi” old qo`shimchasi qaysi",
      "Vodorod-",
      "Yalpizning lotincha nomlanishi?",
      "Moyning lotincha nomlanishi?",
      "Quyida berilgan so`zlarni yunon-lotin dubletini toping. « tomir »",
      "« O`t, safro »",
      "“Soch”",
      "“burun ”",
      "“Mammologus” atamasi tarkibidagi lotincha atama elementni aniqlang.",
      "Izoh bering : ”Rhinoplastica”",
      "“Somatoscopia”",
      "“ in vitro”",
      "“Rux surtmasi”",
      "Solutio Hydrogenii peroxydi- nima?",
      "“Da tales doses ”iborasini to`gri tarjimasini toping",
      "“Auto” atamasi qanday ma`noni bildiradi?",
      "“Efkalipt moyi” atamasini toping.",
      "[ngu] tovushi qaysi so`zda “ngv” talaffuzini beradi",
      "Izoh bering : ”Haemangio ma”",
      "”Medica mente, non medicamentis “, maqolini tarjimasini toping.",
      "”Optimum medicamentum quies est “ maqolni tarjimasini toping.",
      "Moslashgan aniqlovchi atamasini to`g`ri yozilgan variantni toping. Oq na`matak",
      "Moslashgan aniqlovchi atamasini to`g`ri yozilgan variantni toping. Toza suv",
      "Damlama va qaynatma nomlari uchta otdan iborat bo`ladi. Birinchi ot (Nom) bosh kelishikda tursa qolganlari qaysi kelishikda bo`ladi ?",
      "Tarkibida 20-25% dan ortiq kukun holidagi moddalar bo`lgan surtma nima deyiladi?",
      "Sirtdan ishlatishga mo`ljallangan yopishqoq konsistensiyali yumshoq dori turi nima deyiladi?",
      "Tabuletta nima?",
      "Farmokologik axborot beruvchi tarkibiy qismlarni aniqlang.",
      "Abreviatura deganda nimani tushunasiz?",
      "Tibbiyotda qo`llaniladigan dorivor moddalar nechi xil nom bilan ataladi?",
      "“Senna barglarining damlamasi”",
      "Damlama va qaynatma nomlari nechta otdan iborat ?",
      "Tarjima qiling : « Qizilpoycha o`simligining qaynatmasi »",
      "Nastoykalar, ekstraktlar, sharbatlar nechta otdan iborat bo`ladi?",
      "“Shirin miya siropi”",
      "“Do`lananing ekstrakti”",
      "Bir dori shaklida belgilangan dozalarda birdan ortiq ta`sir etuvchi moddalarga ega bo`lgan dori-darmonlar........ deyiladi.",
      "Dorivor preparatlarning nomlari to`g`ri berilgan qatorni toping: “Valeriana nastoykasi”",
      "Dorivor vositalar nomenklaturasi ning nechta tipik guruhi mavjud?",
      "Dorivor ashyolarning nomenklaturasi……",
      "Tomirlarni kasallanishi:",
      "“Dermatomyco sis” atama elementining ma`nosi:",
      "Orqa miya suyagining yallig`lanishi:",
      "Oshqozondan qon ketishi:",
      "Izoh bering : ”xeno“ yakka atama element qanday ma`noni bildiradi?",
      "Izoh bering : ”allo“ yakka atama element qanday ma`noni bildiradi?",
      "”Cystoscopia“ qanday ma`noni bildiradi?",
      "Herba Mentae-",
      "”Dysenteria “ qanday ma`noni bildiradi?",
      "“Marvaridgul nastoykasi” iborasi qaysi javobda t o`gri k o`rsatilgan.",
      "”O`pka “ atamasini yunon-lotin dubletini toping.",
      "”Electrothera pia” atama elementi qanday ma`noni bildiradi?",
      "”Otorhinolaryngologia“ atamasining o`zbek tilida berilishi.",
      "”Cholelithiasis“ atamasining o`zbek tilidagi variant.",
      "”Yiring oqishi“ atamasining lotin tilidagi variant.",
      "Oq rangning lotincha-yunoncha dubleti?",
      "“Og`iz orqali” – bu:",
      "”Laparatomia“ atamasini tarjimasini toping:",
      "Mujskoy rodning lotincha variantini tanlang",
      "Jenskiy rodning lotincha variantini tanlang",
      "“Osteomylitis” atama elementidagi suffiksni toping.",
      "“O`rin insonni emas, inson o`rinni bezaydi” maqolni tarjimasini toping.",
      "“Invia est in medicina via sine lingua Latina” maqolni o`zbekcha tarjimasini toping.",
      "Sredniy rodning lotincha variantini tanlang",
      "Yashil rangning lotincha-yunoncha dubleti?",
      "Damlama. Qisqartma holatda.",
      "3-turlanishdagi fe`lni toping.",
      "Og`iz bo`shligi kasalliklari haqidagi fan-",
      "„Valeriana damlamasi” atamasini to`gri toping:",
      "Kislorod.",
      "Malham. Qisqartma holatda.",
      "Eritma. Qisqartma holatda.",
      "Shamcha. Qisqartma holatda.",
      "Inyeksiya uchun.",
      "To`g`ri javobni toping. Sulfat kislota.",
      "Limon kislotasi.",
      "« Kapsulalarda » atamasini aniqlang.",
      "“Brom” elementini aniqlang.",
      "« Peroksid » so`zini aniqlang.",
      "Quyidagi fe`llardan 1 – tuslanishdagi fe`lni toping.",
      "« Keyin » ma`nosini beruvchi predlogli atamani ajrating.",
      "“Kukun hosil bo`lguncha aralashtir”",
      "Agar dorini zudlik bilan bemorga berish kerak bo`lsa, u holda resept blankasining yuqori qismini o`ng tomonida qanday so`z yozilishini aniqlang.",
      "Lug`at shakli to`g`ri yozilgan fe`lni aniqlang.",
      "To`g`ri yozilgan retsept qatorini toping.",
      "“Androgen” so`zida qaysi tarkibiy qism axborot beruvchi?",
      "“Ingalyasiya uchun” iborasining tarjimasini toping.",
      "I-tuslanishdagi fe`lni aniqlang.",
      "Quyidagi fe`llardan shart maylidagi fe`lni ajrating.",
      "Quyidagi fe`llardan buyruq maylidagi fe`lni ajrating.",
      "Quyidagi dori shakllaridan qattiq dori shaklini ajrating.",
      "Quyidagi dori shakllaridan yumshoq dori shaklini ajrating.",
      "Quyidagi iboraning tarjimasini toping: « To`g`ri ichak orqali ».",
      "Gutta, ae f dorining qanday formasi.",
      "Hepatitis bu-",
      "Histo- atamasining lotincha nomlanishini aniqlang.",
      "Ich ketishi (tez-tez suyuq ich surishi)",
      "Ichakka sun`iy teshik qo`yish.",
      "Ichakni asbob yordamida tekshirish.",
      "Ichki organlarni o`rganuvchi fan:",
      "Yurakning tez urishi-",
      "„Olei Menthae piperitae” atamasini to`gri toping:",
      "-itis so`z yasovchi qo`shimchasi qaysi ma`noda qo`llaniladi?",
      "Kasallik ma`nosi bilan kelgan atamani aniqlang.",
      "Kasalliklarni dori vositalari bilan davolash.",
      "Kasallikning mazmuni va bemor holati to`g`risidagi shifokorning qisqacha xulosasi",
      "Katta ko`krak mushagi -",
      "Keyin ma`nosini beruvchi old qo`shimchani aniqlang.",
      "Kichik boldir suyakining boshchasi.",
      "Klinik atamali so`zni aniqlang.",
      "Ko`krak mushaklari nomi qanday?",
      "Ko`krak umurtqalari atamasini to`g`ri javobini aniqlang.",
      "Ko`krakni o`lchash – bu.",
      "Ko`ndalang o`simta bu-",
      "Ko`plik shaklida Aniqlik nisbatning III shaxs yozilgan fe`lni aniqlang",
      "„Extrakti Crataegi fluidi 20,0” atamasini to`gri toping:",
      "Capcula seu ampula",
      "Kukun qisqartirilgan",
      "Lotin va Yunon tillarida ishlatiladigan “Yakka” atama elementini toping.",
      "“Belgila” so`zining qisqartirilgan ma`nosi -",
      "Lotinchada “Oddiy”.",
      "Lotinchada Og`riq ma`nosi bilan kelgan atamani aniqlang.",
      "Lotinchada qisqa “Ol” nima?",
      "Lotinchada Rux elementini toping",
      "Milk shilliq qavati yallig`lanishi atamasini aniqlang.",
      "Mos old qo`shimchani qo`ying. “Tonusning buzulishi”.",
      "Mos tarjimani toping. “Takrorlash – bilimning onasi”.",
      "Mos tarjimani toping: “Bilim- bu kuchdir”.",
      "Nafas qisishi, qiynalib nafas olish.",
      "Nafasning vaqtinchalik yo`qolishi.",
      "Nephectomia – bu:",
      "O`pkaning yallig`lanish atamasini toping.",
      "Moslashgan aniqlovchi atamasini to`g`ri yozilgan variantni toping."
    ],
    "answers": [
      [
        "- 25 ta",
        "- 26 ta",
        "- 28 ta",
        "- 30 ta"
      ],
      [
        "- Clavicula",
        "- Caput",
        "- Cera",
        "- Cranium"
      ],
      [
        "- 9",
        "- 7",
        "- 6",
        "- 8"
      ],
      [
        "- Oligo",
        "- Psedo",
        "- Necro",
        "- Megalo"
      ],
      [
        "- Auto",
        "- Iso",
        "- Allo",
        "- Hetero"
      ],
      [
        "- Mammolog",
        "- Mastalgia",
        "- Mammalgia",
        "- Mastopatia"
      ],
      [
        "- –blastoma",
        "- –blastus",
        "- –oma",
        "- –therapia"
      ],
      [
        "- Farmasevtik",
        "- Shakliy",
        "- Ilmiy",
        "- Trivial"
      ],
      [
        "- Sirupus Glycyrrhizatis",
        "- Ungentum Valodanas",
        "- Sirupus Glycyrrhizae",
        "- Sirupus Analgini"
      ],
      [
        "- Retseptda yoziladigan dori darmonlarning nomlari",
        "- O`rta asrlarda qo`llanilgan dorivor vositalarning nomlari",
        "- Hozirgi davrda ham qo`llanilayotgan dorivor vositalar nomlarining yig`indisidir",
        "- XXI asrdagi dorivor vositalarning nomlari"
      ],
      [
        "- “F”",
        "- “X”",
        "- “R”",
        "- “KS”"
      ],
      [
        "- Ikki unli harfning birgalikda kelib bitta tovushni berishi",
        "- Qo`sh undoshning birgalikda kelib bitta tovushni berishi",
        "- Undosh va unli harfning birgalikda kelib bitta tovushni berishi",
        "- Unli va undosh harfning birgalikda kelib bitta tovushni berishi"
      ],
      [
        "- Mentha",
        "- Paries",
        "- Eucalyptus",
        "- Rheum"
      ],
      [
        "- Coelia",
        "- Cyctis",
        "- Cito",
        "- Costa"
      ],
      [
        "- Diftongdan oldin kelsa",
        "- Ikki undosh o`rtasida",
        "- Ikki unli ortasida, M harfidan oldin, N harfidan keyin",
        "- M harfidan oldin, N harfidan keyin"
      ],
      [
        "- Qo`sh undoshning birgalikda kelib bitta tovushni berishi",
        "- Undosh va unli harfning birgalikda kelib bitta tovushni berishi",
        "- Ikki unli harfning birgalikda kelib bitta tovushni berishi",
        "- Ikki undosh harfning birgalikda kelib bitta tovushni berishi"
      ],
      [
        "- Dosis",
        "- Colostomia",
        "- Fascia",
        "- Sulcus"
      ],
      [
        "- Oedema",
        "- Rhizoma",
        "- Auctor",
        "- Bucca"
      ],
      [
        "- Uchinchi bo`g`in",
        "- Birinchi bo`g`in",
        "- Ikkinchi bo`g`in",
        "- Beshinchi bo`g`in"
      ],
      [
        "- –pyr",
        "- anti-",
        "- –inum",
        "- -um"
      ],
      [
        "- –um",
        "- cor-",
        "- –olum",
        "- –valolum"
      ],
      [
        "- –um",
        "- –cain-",
        "- -inum",
        "- novo"
      ],
      [
        "- Vas-angio",
        "- Alg",
        "- Sulfa",
        "- Pyr"
      ],
      [
        "- -cillin",
        "- -cyclin",
        "- -mycin",
        "- -cain"
      ],
      [
        "- fiare",
        "- curare",
        "- miscere",
        "- dare"
      ],
      [
        "- solutio",
        "- lectio",
        "- tibia",
        "- curatio"
      ],
      [
        "- crus, cruris",
        "- facies",
        "- pubes",
        "- stapes"
      ],
      [
        "- Misce,fiat pulvis",
        "- Misce,fiat linimentum",
        "- Misce,fiat unguentum",
        "- lingua-glosso"
      ],
      [
        "- musculus, i m",
        "- corpus, oris n",
        "- costalis, e",
        "- mater, tris"
      ],
      [
        "- pectus",
        "- ductus",
        "- sulcus",
        "- textus"
      ],
      [
        "- rabies, ei",
        "- stapes, dis",
        "- pes, pedis",
        "- pubes, is"
      ],
      [
        "- sal",
        "- saccharum",
        "- sanus",
        "- solutio"
      ],
      [
        "- rhino-nasus",
        "- mandibula-genio",
        "- maxilla-gnatho",
        "- auris-oto"
      ],
      [
        "- vertebralis, e",
        "- longus, a, um",
        "- major, jus",
        "- costalis,e"
      ],
      [
        "- fissura",
        "- labium",
        "- maxilla",
        "- officina"
      ],
      [
        "- Zincum",
        "- Phosphorus",
        "- Sulfur",
        "- Magnesium"
      ],
      [
        "- uzun mushak",
        "- uzun oyoq",
        "- uzun bel",
        "- uzun til"
      ],
      [
        "- diaeta",
        "- thoracicus",
        "- fluidus",
        "- solubilis"
      ],
      [
        "- -ei",
        "- -ae",
        "- -is",
        "- -inis"
      ],
      [
        "- rhiz.",
        "- in caps.",
        "- inf.",
        "- obl."
      ],
      [
        "- -um",
        "- -e",
        "- -us",
        "- -er"
      ],
      [
        "- jarrohlik",
        "- ko`z o`tkirligi",
        "- aql mahorati",
        "- qo`l mahorati"
      ],
      [
        "- cultus",
        "- quadratus",
        "- cuticula",
        "- cutis"
      ],
      [
        "- 3",
        "- 2",
        "- 0",
        "- 1"
      ],
      [
        "- [t]",
        "- [ks]",
        "- [f]",
        "- [r]"
      ],
      [
        "- [sx]",
        "- [r]",
        "- [t]",
        "- [ks]"
      ],
      [
        "- Simplex",
        "- vertebralis",
        "- palatinus, a, um",
        "- teres"
      ],
      [
        "- os ethmoidale",
        "- os lunatum",
        "- os breve",
        "- os sphenoidale"
      ],
      [
        "- Oltita",
        "- Beshta",
        "- Ikkita",
        "- To`rtta"
      ],
      [
        "- Ae, au",
        "- Ae, oe",
        "- Au,eu",
        "- Ch, oe"
      ],
      [
        "- Uch bo`g`in",
        "- To`rt bo`gin",
        "- Olti bo`g`in",
        "- Besh bo`g`in"
      ],
      [
        "- -Men- ikkinchi bo`g`inda",
        "- -Li- to`rtinchi bo`g`inga",
        "- -Ga-uchinchi bo`g`inga",
        "- -Tum- birinchi bo`g`inda"
      ],
      [
        "- -AE- ikkinchi bo`g`inga",
        "- To`rtinchi bo`g`inga",
        "- -Di-uchinchi bo`g`inga",
        "- -Ta-birinchi bo`g`inga"
      ],
      [
        "- Omne principium difficile est.",
        "- Alit lectio ingenium.",
        "- Non scholae, sed vitae discimus.",
        "- Qui scribit, bis legit."
      ],
      [
        "- To`rtta turda bo`linadi",
        "- Ikkita turda bo`linadi",
        "- Oltita turda bo`linadi",
        "- Uchta turda bo`linadi"
      ],
      [
        "- Ere -qo`shimchasi",
        "- Are – qo`shimchasi",
        "- Re -qoshimchasi",
        "- Ire- qo`shimchasi"
      ],
      [
        "- Uchinchi tuslanishga",
        "- Ikkinchi tuslanishga",
        "- Birinchi tuslanishga",
        "- To`rtinchi tuslanishga"
      ],
      [
        "- Ikkinchi tuslanishga",
        "- Birinchi tuslanishga",
        "- Uchinchi tuslanishga",
        "- To`rtinchi tuslanishga"
      ],
      [
        "- Signo, are – I tuslanish",
        "- Solvere, re -III tuslanish",
        "- Are – Dare -I tuslanish",
        "- Audire, ire -II tuslanish"
      ],
      [
        "- Shart va buyruq mayli",
        "- Majhullik nisbati",
        "- Aniqlik nisbati",
        "- Sabab mayli"
      ],
      [
        "- Beshta turlanishga",
        "- Ikkita turlanishga",
        "- Uchta turlanishga",
        "- To`rta turlanishga"
      ],
      [
        "- Mediana us um",
        "- Asthma atis",
        "- Stroma atis",
        "- Gutta, ae f"
      ],
      [
        "- Glandula alveolaris",
        "- Ligament umtores",
        "- Ductus major",
        "- Tinctura Valerianae"
      ],
      [
        "- dativus",
        "- ablatuvus",
        "- genetivus",
        "- nominativus"
      ],
      [
        "- Superfecies",
        "- Brevi",
        "- Tussis",
        "- Posteriors"
      ],
      [
        "- Species",
        "- Floris",
        "- Corporis",
        "- Crus, cruris"
      ],
      [
        "- Facies, is m",
        "- Ductus, i n",
        "- Zygoma, ua f",
        "- Remedium, i m"
      ],
      [
        "- Musculus",
        "- Nasus",
        "- Oculus",
        "- ductus"
      ],
      [
        "- Alit lectio ingenium.",
        "- Labor corpus firmat.",
        "- Citius, altius, fortius.",
        "- Amat victoria curam."
      ],
      [
        "- Musculus",
        "- Aortae",
        "- Apex",
        "- Tuberculum"
      ],
      [
        "- 3-turlanishga",
        "- 5-turlanishga",
        "- 4-turlanishga",
        "- 2-turlanishga"
      ],
      [
        "- Os longum",
        "- Vena longa",
        "- Musculus longus",
        "- Os cranii"
      ],
      [
        "- Niger, gra, grum",
        "- Niger, tra,trum",
        "- Niger, era, erum",
        "- Niger, gera, gerum"
      ],
      [
        "- Simplex, icis",
        "- Ala, ae, f",
        "- Major,jus",
        "- Albus, a, um"
      ],
      [
        "- 5-turlanish",
        "- 2-turlanish",
        "- 4-turlanish",
        "- 3-turlanish"
      ],
      [
        "- Pia mater",
        "- Venter musculi",
        "- Ala vomeris",
        "- Tuber maxillae"
      ],
      [
        "- Adductor",
        "- Dilatator",
        "- Extensor",
        "- Abductor"
      ],
      [
        "- Pericardia lis, e",
        "- Paravaginalis, e",
        "- Intramuscularis, e",
        "- Postcentralis, e"
      ],
      [
        "- Endoscopia",
        "- Submandibularis, e",
        "- Praesanillis,e",
        "- Supraacromialis, e"
      ],
      [
        "- Ostium cavumnas",
        "- Apertura thoracis inferioris",
        "- Apertura thoracis inferior",
        "- Apertura thoracis posterior"
      ],
      [
        "- Pia mater encephali",
        "- Dura mater thoracis",
        "- Dura mater spinalis",
        "- Pia mater gastri"
      ],
      [
        "- Signare",
        "- Addere",
        "- Repetere",
        "- Audire"
      ],
      [
        "- Rosa alba",
        "- caput fibulae",
        "- arcus vertebrae",
        "- os pubis"
      ],
      [
        "- Minor, us",
        "- Brevior ius",
        "- Anterior, ius",
        "- Magnus, a, um"
      ],
      [
        "- Misce, fiat unguentum",
        "- Misce, fiat linimentum",
        "- Misce, fiat pasta",
        "- Misce, fiat suppositorium"
      ],
      [
        "- Osteomyelitis",
        "- Osteoarthritis",
        "- Osteoma",
        "- Osteomalacia"
      ],
      [
        "- Encephalon",
        "- Encephalopathia",
        "- Encephamyelitis",
        "- Encephalitis"
      ],
      [
        "- mandibula-genio",
        "- somato-corpus",
        "- lingua-glosso",
        "- stomato-oris"
      ],
      [
        "- Therapia – curatio",
        "- Toxo – venenum",
        "- Neuro – nervus",
        "- Angio- vas, vasis"
      ],
      [
        "- Psorias",
        "- Helminthosis",
        "- Lithiasis",
        "- Amoebiasis"
      ],
      [
        "- Suasor",
        "- Sulcus",
        "- Submucosus",
        "- Sulphus"
      ],
      [
        "- Mixtio",
        "- Articulatio",
        "- Ostium",
        "- Tibia"
      ],
      [
        "- Pro die",
        "- Pro infantibus",
        "- Pro dosi",
        "- Pro rectum"
      ],
      [
        "- Ko`rsatkich barmoq",
        "- Bosh barmoq",
        "- Jimjiloq",
        "- O`rta barmoq"
      ],
      [
        "- Barcha san`atlar ichida eng sharaflisi tibbiyotdir",
        "- Barcha sohalar ichida eng sharafli kasb egasidir",
        "- Intilganga tole yor",
        "- Mehnat tanani chiniqtiradi"
      ],
      [
        "- limon kislota",
        "- askorbin kislota",
        "- sirka kislota",
        "- yog` kislota"
      ],
      [
        "- Purmus, a, um",
        "- Purus, a, um",
        "- Purimus, a, um",
        "- Purissimus, a,um"
      ],
      [
        "- Intestinalis",
        "- Dentalis",
        "- Sacralis",
        "- Alaris"
      ],
      [
        "- Inferior",
        "- Posterior",
        "- Anterior",
        "- Superior"
      ],
      [
        "- sifat va sifat",
        "- ot va sifat",
        "- ot va ot",
        "- sifat va ot"
      ],
      [
        "- Os costalis",
        "- Apex cordis",
        "- Pars pulmonis",
        "- Apex pulmonis."
      ],
      [
        "- ot va sifat",
        "- son va ot",
        "- ot va ot",
        "- ot va son"
      ],
      [
        "- Hemotologia",
        "- Cytologia",
        "- Histologia",
        "- Embryologia"
      ],
      [
        "- Cholelithiasis",
        "- Cholecystomia",
        "- Cholestasis",
        "- Cholaemia"
      ],
      [
        "- Urologia",
        "- Urolithiasis",
        "- Urethra",
        "- Uroposis"
      ],
      [
        "- Atonia",
        "- Hypotonia",
        "- Dystonia",
        "- Hypertonia"
      ],
      [
        "- Oraliq, o`rta",
        "- Yaqinlashtiruvchi va uzoqlashtiruvchi",
        "- Tashqaridan ichkariga",
        "- Yuqorigi, ustgi"
      ],
      [
        "- gingiva-ulo",
        "- uro – urina",
        "- maxilla-gnatho",
        "- dens-odonto"
      ],
      [
        "- Psychologia",
        "- Gerontologia",
        "- Cardiologia",
        "- Paediatria"
      ],
      [
        "- Hypertonia",
        "- Hypotonia",
        "- Atonia",
        "- Dystonia"
      ],
      [
        "- Saccharum",
        "- Sanus",
        "- Sal",
        "- Solutio"
      ],
      [
        "- Myoma",
        "- Adenoma",
        "- Hydradenoma",
        "- Hidradenoma"
      ],
      [
        "- a, an",
        "- hypo",
        "- hyper",
        "- dys"
      ],
      [
        "- Hydrogenium",
        "- Zincum",
        "- Cuprum",
        "- Carbo"
      ],
      [
        "- Oleum",
        "- Mentha",
        "- Kalanchoe",
        "- Aloe"
      ],
      [
        "- Olivarum",
        "- Oleum",
        "- Kalanchoe",
        "- Mentha"
      ],
      [
        "- histo-/textus",
        "- derma/cutis",
        "- angio/vas",
        "- hydro-/ aqua"
      ],
      [
        "- Cele/hernia",
        "- Hidro-/sudor",
        "- Chole-/bilis",
        "- Oto-/auris"
      ],
      [
        "- Onco/tumor",
        "- Geri-/senex",
        "- Tricho-/papillus",
        "- Dacrio-/lacrima"
      ],
      [
        "- Onco/tumor",
        "- Geri-/senex",
        "- Rhino-/nasus",
        "- Tricho-/papillus"
      ],
      [
        "- Masto",
        "- Scopia",
        "- Logus",
        "- Mamma"
      ],
      [
        "- Burunni qayta tiklash operatsiyasi",
        "- Jag`ni qayta tiklash operatsiyasi",
        "- Jigar operatsiyasi",
        "- Bo`g`im operatsiyasi"
      ],
      [
        "- Tishni asbob yordamida tekshirish",
        "- Og`izni asbob yordamida tekshirish",
        "- Xalqumni asbob yordamida tekshirish",
        "- Tanani asbob yordamida tekshirish"
      ],
      [
        "- kapsulada",
        "- qutida",
        "- ampulada",
        "- shishada"
      ],
      [
        "- Unguenti Rici 30,0",
        "- Unguenti Cupri 30,0",
        "- Unguenti Anisi30,0",
        "- Unguenti Zinci30,0"
      ],
      [
        "- Glyukoza eritmasi",
        "- Yodning spirtli eritmasi",
        "- Vodorod peroksid eritmasi",
        "- Analgin eritmasi"
      ],
      [
        "- “Shunday dozalarda ber”",
        "- “Tomchilab ber”",
        "- “O`limgacha olib keladi`",
        "- “Bir martalik doza”"
      ],
      [
        "- O`z, xususiy",
        "- Bir xil",
        "- Boshqa",
        "- Hayvonniki"
      ],
      [
        "- Oleum Persicorum",
        "- Oleum Eucalypti",
        "- Oleum Aethereum",
        "- Oleum Anisi"
      ],
      [
        "- Lingua",
        "- Angulus",
        "- Frangula",
        "- Lingula"
      ],
      [
        "- Qonda o`sma",
        "- Qon tomiri zichlanishi",
        "- Qon tomirlarida xavfsiz o`sma",
        "- Qon tomirini kengayishi"
      ],
      [
        "- Qui scribit, bis legit.",
        "- In observatione",
        "- Una hirunda non facit ver.",
        "- Dori bilan emas, aql bilan davola."
      ],
      [
        "- Umr qisqa, san`at abadiydir.",
        "- Tinchlik eng yaxshi davodir.",
        "- Avvalo zarar keltirma.",
        "- Xasisni qorni to`ysa ham ko`zi to`ymas."
      ],
      [
        "- Infusum Valirianae",
        "- Rosa alba",
        "- Os cranii",
        "- Tincturae Convalariae"
      ],
      [
        "- Aqua pura",
        "- Tabuletta Analgini",
        "- Infusum Valirianae",
        "- Tabuletta Codeini"
      ],
      [
        "- Nominativus",
        "- Genetivus",
        "- Accusativus",
        "- Dativus"
      ],
      [
        "- Pasta",
        "- Capsula",
        "- Tinctura",
        "- Gutta"
      ],
      [
        "- Pasta",
        "- Suppository um",
        "- Unguentum",
        "- Pulvis"
      ],
      [
        "- surt Tarkibida 20-25% dan ortiq kukun holidagi moddalar bo`lgan surtma",
        "- Suyuq surtma",
        "- Sirtdan ishlatishga mo`ljallan gan yopishqoq konsistensiyali yumshoq dori",
        "- Ichish, sirtdan ishlatish yoki in`yeksiya qilish uchun mo`ljallangan, dorivor moddalarni presslab olingan, dozalangan qattiq dori turi"
      ],
      [
        "- –barb-, -mycin, -cyclin, -cort-",
        "- -oestr, -chol, -sed-, -andr-",
        "- –myko, -test-, -vas, -angi-",
        "- –dol, -mycin, -cillin, card"
      ],
      [
        "- Qisqartirish",
        "- Ko`paytirish",
        "- Olib tashlash",
        "- Kengaytirish"
      ],
      [
        "- 3 xil : ilmiy, shakliy va trivial",
        "- 2 xil: ilmiy va trivial",
        "- 2 xil: ilmiy va shakliy",
        "- 2 xil: ilmiy va adabiy"
      ],
      [
        "- Decoctum rhizomatis Tormentille",
        "- folium Sennae",
        "- Infusum foliorum Sennae",
        "- Infusum radices Valerianae"
      ],
      [
        "- 3 ta",
        "- 4 ta",
        "- 2 ta",
        "- 5 ta"
      ],
      [
        "- Extractum Crataegi",
        "- Oleum Helianti",
        "- Decoctum herbae Hyperici",
        "- Folium Saennae"
      ],
      [
        "- 3 ta",
        "- 4 ta",
        "- 1 ta",
        "- 2ta"
      ],
      [
        "- sirupus Glycyrrhizae",
        "- sirupus Glycyrrhize",
        "- sirupus Glycyrrhizatis",
        "- sirupus Glycyrrhizi"
      ],
      [
        "- extractum Crataegum",
        "- extractum Crataegi",
        "- extractum Crataegus",
        "- extractum Crataegae"
      ],
      [
        "- Sodda",
        "- Murakkab",
        "- Juft",
        "- O`xshah"
      ],
      [
        "- tinctura Valeriana",
        "- tinctura Valerianae",
        "- tinctura Valerianum",
        "- tincture Valeriani"
      ],
      [
        "- 4 ta",
        "- 3 ta",
        "- 7 ta",
        "- 5 ta"
      ],
      [
        "- XXI asrdagi dorivor vositalaring nomlari",
        "- to`g`ri javob yo`q",
        "- hozirgi davrda ham qo`llanilayotgan dorivor vositalar nomlarining yig`indisidir",
        "- XXI asrdagi dorivor vositalaring nomlari"
      ],
      [
        "- Angiopathia",
        "- Angiostenosis",
        "- Angiosclerosis",
        "- Angiosis"
      ],
      [
        "- Terining qatiqlashi shi",
        "- Terini kesish",
        "- Terining zamburug`li kasalligi",
        "- Teri kasalligi"
      ],
      [
        "- Osteoma",
        "- Osteoparo sis",
        "- Osteomyelitis",
        "- Osteosis"
      ],
      [
        "- Gastropa tia",
        "- Gastritis",
        "- Gastrosis",
        "- Gastrorha gia"
      ],
      [
        "- Boshqa odamning organ yoki to`qimalari dan foydalanish.",
        "- Organism ning o`zidagi organ yoki to`qimalari dan foydalanish",
        "- Odam organizmi o`zgarishi",
        "- Hayvon organlari yoki to`qimala ridan foydala nish"
      ],
      [
        "- Organism ning o`zidagi organ yoki to`qimalari dan foydalanish",
        "- Hayvon organlari yoki to`qimalari dan foydalanish",
        "- Boshqa odamning organ yoki to`qimalari dan foydalanish",
        "- Organizmning qismlari o`zgarishi"
      ],
      [
        "- Siydik pufagiga tosh hosil bo`lishi",
        "- Siydik pufagini tekshirish",
        "- Siydik pufagini olib tashlash",
        "- Siydik pufagi yallig`lanishi"
      ],
      [
        "- Oq galdarmoq guli",
        "- Belladonna moyi",
        "- Zaytun moyi",
        "- Yalpiz bargi"
      ],
      [
        "- Ichaklarni funksiyasini buzilishi",
        "- Ichaklarini olib tashlanishi",
        "- Ichaklar ning yallig`lanishi",
        "- Ichaklarni tekshirish"
      ],
      [
        "- Tinctura Convallariae",
        "- Infisum Valerianae",
        "- Tinctura Schizandrae",
        "- Mentha Piperita"
      ],
      [
        "- Pneumo / pulmo",
        "- Abdomen/ laparo",
        "- Laparo / abdomen",
        "- Procto / anus"
      ],
      [
        "- To`k zichligi",
        "- Asbob bilan davolash",
        "- Tekshirish asbobi",
        "- To`k bilan davolash"
      ],
      [
        "- Quloq, burun, hiqqildoq haqidagi fan",
        "- Og`iz bo`shlig`ini o`rganuvchi fan",
        "- Burun soxasini o`rganuvchi fan",
        "- Ko`z soxasini urganuvchi fan"
      ],
      [
        "- O`t pufagining yallig`lanishi",
        "- O`t pufagida tosh bo`lishi",
        "- Buyrak kasalligi",
        "- O`t pufagini olib tashlash"
      ],
      [
        "- Pyocytosis",
        "- Pyocrinia",
        "- Pyorrhagia",
        "- Empyema"
      ],
      [
        "- albus-leuco",
        "- flavus-xantho",
        "- cinereus-cyano",
        "- niger-melano"
      ],
      [
        "- per os",
        "- pro narcosi",
        "- per rectum",
        "- pro infantibus"
      ],
      [
        "- Qorin kasalligi",
        "- Qorinni kesib ochish",
        "- Qorinni ochib ko`rish",
        "- Qorinni tekshirish"
      ],
      [
        "- genus nominativum",
        "- genus neutrum",
        "- genus masculinum",
        "- genus femininum"
      ],
      [
        "- genus masculinum",
        "- genus genetivum",
        "- genus neutrum",
        "- genus femininum"
      ],
      [
        "- myelitis",
        "- osteo",
        "- myeli",
        "- itis"
      ],
      [
        "- Barba non facit philossophum",
        "- Mala herba cito crescit.",
        "- Una hirunda non facit ver.",
        "- Homo locum ornate, non hominem locus."
      ],
      [
        "- Ilmning ildizi achchiq, mevasi esa shirin.",
        "- Xasisni qorni to`ysa ham ko`zi to`ymas.",
        "- Lotin tilisiz tibbiyotga yo`l yo`q.",
        "- Avvalo zarar keltirma."
      ],
      [
        "- genus femininum",
        "- genus masculinum",
        "- genus dativum",
        "- genus neutrum"
      ],
      [
        "- cinereus-polio",
        "- viridis-chloro",
        "- niger-melano",
        "- albus-leuco"
      ],
      [
        "- Tab",
        "- Ung",
        "- Tinct",
        "- Sol"
      ],
      [
        "- Addo,ere",
        "- Do, dare",
        "- Signo,are",
        "- Habeo,re"
      ],
      [
        "- endocrinologia",
        "- oncologia",
        "- stomatologia",
        "- dermatologia"
      ],
      [
        "- Radix Valerianae",
        "- Rhizoma Valerianae",
        "- Infusum Valerianae",
        "- Tinctura Valerianae"
      ],
      [
        "- Phosphorus",
        "- Zincum",
        "- Xlor",
        "- Oxygenium"
      ],
      [
        "- Empl",
        "- Emul",
        "- Ung",
        "- Sol"
      ],
      [
        "- Sol",
        "- Tab",
        "- Decoc",
        "- Pul"
      ],
      [
        "- Emul",
        "- Ext",
        "- Gran",
        "- Supp"
      ],
      [
        "- Pro inject",
        "- Aut tab",
        "- Gel",
        "- Per inf"
      ],
      [
        "- Acidi sulfurior",
        "- Acidi sulforosum",
        "- Acidum sulfuricum",
        "- Acidum sulfurosa"
      ],
      [
        "- Acidum citricum",
        "- Acidum lacticum",
        "- Acidi citrici",
        "- Acidi boricum"
      ],
      [
        "- In vitro",
        "- In ampullis",
        "- In capsullis",
        "- In vivo"
      ],
      [
        "- Bromum",
        "- Magnium",
        "- Argentum",
        "- Cuprum"
      ],
      [
        "- Oxygenium",
        "- Cilicium",
        "- Oxydum",
        "- Peroxydum"
      ],
      [
        "- signo, are",
        "- audio, ire",
        "- misceo, ere",
        "- repeto, ere"
      ],
      [
        "- Post",
        "- Sub lineguae",
        "- Contra",
        "- Comku"
      ],
      [
        "- Misce, fiat pulvis",
        "- Misce, fiat pasta",
        "- Misce, fiat pililae",
        "- Misce, fiat emulsum"
      ],
      [
        "- Repete",
        "- Dare",
        "- Recipe",
        "- Cito va Statim"
      ],
      [
        "- Miscere 1",
        "- Addo, ere, 3",
        "- Do, are, 2",
        "- Addere 1"
      ],
      [
        "- Vilici 0,008",
        "- Tanini 30",
        "- Oleum Vaselini 30 ml(30,0)",
        "- Tabuletta 5ml"
      ],
      [
        "- -andr-",
        "- -gen-",
        "- -o-",
        "- -and-"
      ],
      [
        "- Pro inholationus",
        "- Pro infantibus",
        "- Pro injectionibus",
        "- Pro reatgena"
      ],
      [
        "- Sterilizo, are",
        "- Finio, ire",
        "- Misseo ,ere",
        "- Recepio ,ere"
      ],
      [
        "- Signetur",
        "- Signa",
        "- Misce",
        "- Addo"
      ],
      [
        "- Misceatur",
        "- Signetur",
        "- Audi",
        "- Recipio"
      ],
      [
        "- Tinctura ae f",
        "- Decoctum i n",
        "- Pilula",
        "- Infusum i n"
      ],
      [
        "- Gutta ae f",
        "- Solutio",
        "- Unguentum i n",
        "- Pilula ae f"
      ],
      [
        "- Pro intantibus",
        "- Per rectum",
        "- Per os",
        "- Pro narcosi"
      ],
      [
        "- Tomchi",
        "- Pasta",
        "- Granula",
        "- Kapsula"
      ],
      [
        "- Oshqozon ning yallig`lani shi",
        "- Jigarning yallig`lanishi",
        "- Jigarni operatsia qilish",
        "- Buyrakning yallig`lanishi"
      ],
      [
        "- Derto",
        "- Textus",
        "- Adeno",
        "- Cele"
      ],
      [
        "- Diarrea",
        "- Diathrosis",
        "- Diapedisis",
        "- Diostema"
      ],
      [
        "- Angiopathia",
        "- Stenocardia",
        "- Gastroptosis",
        "- Enteroectomia"
      ],
      [
        "- Enteroscopia",
        "- Rhomboscopia",
        "- Otoscopia",
        "- Somatoscopia"
      ],
      [
        "- Splanchnologia",
        "- Gastroenterologia",
        "- Neurologia",
        "- Biologia"
      ],
      [
        "- bradycardia",
        "- platycardia",
        "- brachycardia",
        "- tachycardia"
      ],
      [
        "- Zaytun moyi",
        "- Do`lana ekstrakti",
        "- Qalampir yalpiz moyi",
        "- Arpabodiyon suvi"
      ],
      [
        "- Qattiqlanish",
        "- Surunkali kasallik",
        "- O`sma",
        "- Yallig`lanish"
      ],
      [
        "- Gastrostomia",
        "- Angiopathia",
        "- Gastroectosia",
        "- Cystogra phia"
      ],
      [
        "- Pharmacalo gia",
        "- Pharmocolo gia",
        "- Pharmacothe rapia",
        "- Pharmacognosis"
      ],
      [
        "- Diagnostica",
        "- Diapedisis",
        "- Diarthrosis",
        "- Diagnosis"
      ],
      [
        "- M. serratos",
        "- M. pectorales major",
        "- M. brachialis",
        "- M.pectorales minor"
      ],
      [
        "- Contra",
        "- Per",
        "- Post",
        "- Sub"
      ],
      [
        "- Corpus fibulae",
        "- Caput fibulae",
        "- Caput tibea",
        "- Corpus tibea"
      ],
      [
        "- Medico",
        "- Diacta",
        "- Oculus",
        "- Trauma"
      ],
      [
        "- m. thoracis",
        "- m.vaginalis",
        "- m. adductor",
        "- m.obdemena lis"
      ],
      [
        "- Vertebrae sacrales",
        "- Ossa metacarpi",
        "- Vertebrae coccygeae",
        "- Vertebrae thoracicae"
      ],
      [
        "- Stetoscopia",
        "- Stethologia",
        "- Stetographia",
        "- Stethometria"
      ],
      [
        "- Processum transverso rum",
        "- Processus tranversus",
        "- Processus transverso rum",
        "- Processi transverse"
      ],
      [
        "- Signetur",
        "- Repetat",
        "- Signent",
        "- Audist"
      ],
      [
        "- Arpabodiyon suvi 20,0",
        "- Suyuq do`lana ekstrakti 20,0",
        "- Do`lana ekstrakti 20,0",
        "- Zaytun moyi 20,0"
      ],
      [
        "- Habdori yoki kukunda",
        "- Suyuq yoki quruq",
        "- Kapsula yoki ampulada",
        "- Achiq va quruq"
      ],
      [
        "- Solv",
        "- Pulv",
        "- Tinc",
        "- Ung"
      ],
      [
        "- Melo",
        "- Somato",
        "- Patho",
        "- Glosso"
      ],
      [
        "- Rp.",
        "- D.",
        "- M.",
        "- S."
      ],
      [
        "- Sir",
        "- Simple",
        "- Spec",
        "- Sol"
      ],
      [
        "- Rhinalgia",
        "- Encephalopathia",
        "- Otorhagia",
        "- Cardiotransplantatio"
      ],
      [
        "- Per",
        "- Repet",
        "- Past",
        "- Rp"
      ],
      [
        "- Zincum",
        "- Phosphorus",
        "- Sulfur",
        "- Silicium"
      ],
      [
        "- Gingivitis",
        "- Laryngitis",
        "- Nephritis",
        "- Mastitis"
      ],
      [
        "- Eu",
        "- Dys",
        "- dis",
        "- Ana"
      ],
      [
        "- Per fater",
        "- Pigritio mater",
        "- Per sciantiam",
        "- Repititio est mater studiorum"
      ],
      [
        "- Spes vana",
        "- Stotus communis",
        "- Scientia potestasest",
        "- Scientia potentia est"
      ],
      [
        "- Dystrophia",
        "- Dysuria",
        "- Dyspnoe",
        "- Dyspepsia"
      ],
      [
        "- Dyspnoe",
        "- Tachypnoe",
        "- Hypopnoe",
        "- Apnoe"
      ],
      [
        "- Jigarni olib tashlash",
        "- Buyrakning pastga tushishi",
        "- Buyrakning kengayishi.",
        "- Buyrakni olib tashlash"
      ],
      [
        "- Pneumonecto mia",
        "- Pneumosclerosis",
        "- Pneumolitis",
        "- Pneumonia"
      ],
      [
        "- Infusum Valirianae",
        "- Extractum siccum",
        "- Tabuletta Analgini",
        "- Os cranii"
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
      2
    ]
  },
}
