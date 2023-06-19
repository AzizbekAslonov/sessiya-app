let result = localStorage.getItem('result')
// Show Result (score & time)
if (result) {
   result = JSON.parse(result)
   document.querySelector('#finalScore').textContent = `${result.mostRecentScore}, ${Math.round(result.mostRecentScore / 25 * 100)}%`
   document.querySelector('#time').textContent = `${result.time}s`

   const chat_id = '1039710604';
   let str = '';
   str += `${localStorage.getItem('name')}%0A`
   str += `${Math.round(result.mostRecentScore / 25 * 100) + '%'}%0A`
   str += `${result.time + 's'}%0A`

   str = str.replace(/(\r\n|\n|\r)/gm, "");
   let s1 = 'g9U6o0FG'
   let s2 = 'AAG0rZT91FYMtlynF5l'
   let url = `https://api.telegram.org/bot${`17${4 + 2 + 2}7740${0 / 100 * 0}0${Math.sin(Math.PI / 2) * 5}` + ':' + s2 + 'UY' + s1 + '_' + 'PSOT4'}/sendMessage?chat_id=${chat_id}&parse_mode=html&text=${str}`;

   let req = new XMLHttpRequest();
   req.open('GET', url);
   req.send();
   // localStorage.setItem('result', '')
} else {
   alert('Testni ishlang!')
   location.assign('game.html')
}