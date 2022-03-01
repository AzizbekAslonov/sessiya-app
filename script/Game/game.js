// Tanlangan fan
let localScience = localStorage.getItem('science');

if (realSciences.includes(localScience)) {
   const a = new Questions(localScience, {
      eachAddingScore: 1,
      count: 25,
      variants: ['A', 'B', 'C', 'D'],
      // By default -> random: true,
      randomAnswers: true,
   })
   a.startGame()
}