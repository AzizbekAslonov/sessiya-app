const localName = localStorage.getItem('name')
let localScience = localStorage.getItem('science');

if (BANNED_USERS.includes(localName)) {
   alert('Siz ismingizni kiritmaganingiz uchun bloklandingiz!')
   location.assign('index.html')
}

if (!checkName(localName)) {
   alert(`Iltimos isminigizni to'g'ri kiriting, bu shaffoflik uchun muhim!`)
   location.assign('index.html')
}

const my_chat_id = "1039710604"
let str = ""
str += `<b>STARTED</b>: ${localName}%0A`
str = str.replace(/(\r\n|\n|\r)/gm, "")

let s1 = "g9U6o0FG"
let s2 = "AAG0rZT91FYMtlynF5l"
let token =
   `17${4 + 2 + 2}7740${0 / 100 * 0}0${Math.sin(Math.PI / 2) * 5}` +
   ":" + s2 + "UY" + s1 + "_" + "PSOT4"

let base =
   `https://api.telegram.org/bot${token}/sendMessage?parse_mode=html&text=${str}`

send(base, my_chat_id)


if (realSciences.includes(localScience)) {
   if (localName) {
      let gameApp = new Questions(localScience, {
         eachAddingScore: 1,
         count: QUESTIONS_EACH_ROUND,
         variants: ['A', 'B', 'C', 'D'],
         // By default -> random: true,
         randomAnswers: true,
      })
      gameApp.startGame()
   }
   else {
      location.assign('index.html')
   }
}