let result = localStorage.getItem('result')
// Show Result (score & time)
if (result) {
   result = JSON.parse(result)
   document.querySelector('#finalScore').textContent = `${result.mostRecentScore}`
   document.querySelector('#finalPercent').textContent = `${Math.round(result.mostRecentScore / 25 * 100)}%`
   document.querySelector('#time').textContent = `${result.time}s`

   localStorage.setItem('result', '')
} else {
   alert('Testni ishlang!')
   location.assign('game.html')
}