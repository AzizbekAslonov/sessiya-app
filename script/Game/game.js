const localName = localStorage.getItem('name')
let localScience = localStorage.getItem('science');

if (!checkName(localName)) {
   alert(`Iltimos isminigizni to'g'ri kiriting, bu shaffoflik uchun muhim!`)
   location.assign('index.html')
}

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