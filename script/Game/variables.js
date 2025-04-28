const realSciences = [
   'Pedagogika',
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
}
