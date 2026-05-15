const localName = localStorage.getItem('name')
let localScience = localStorage.getItem('science');

if (BANNED_USERS.includes(localName)) {
   alert(BANNED_MESSAGE + " " + localName.split(' ')[0] + "?")
   location.assign('index.html')
} else {
   if (!checkName(localName)) {
      alert(CHECK_NAME_MESSAGE)
      location.assign('index.html')
   }
   
   if (localScience in ALL_QUESTIONS) {
      if (localName) {
         let gameApp = new Questions(localScience, {
            eachAddingScore: 1,
            count: QUESTIONS_EACH_ROUND,
            testProgram: ALL_QUESTIONS[localScience],
            variants: ['A', 'B', 'C', 'D'],
            // By default -> random: true,
            randomAnswers: true,
         })
         gameApp.startGame()
      }
      else {
         location.assign('index.html')
      }
   } else {
      alert(`Bunday fan mavjud emas`)
   }
}