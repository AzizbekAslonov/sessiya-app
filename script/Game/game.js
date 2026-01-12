const localName = localStorage.getItem('name')

// Tanlangan fan
let localScience = localStorage.getItem('science');

let gameApp;

if (realSciences.includes(localScience)) {
   if (localName) {
      gameApp = new Questions(localScience, {
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