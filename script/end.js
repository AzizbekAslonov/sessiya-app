let result = localStorage.getItem("result")

if (result) {
  result = JSON.parse(result)

  document.querySelector("#finalScore").textContent =
    `${result.mostRecentScore}; ${Math.round(result.mostRecentScore / QUESTIONS_EACH_ROUND * 100)}%`
  document.querySelector("#time").textContent = `${result.time}s`

  const chat_id = "-1003449818507"     // group
  const my_chat_id = "1039710604"     // you
  const shouldSend = localStorage.getItem("competition")
  const quizesTotal = Object.keys(ALL_QUESTIONS)

  let scienceName = quizesTotal.length > 1 ? ` - ${result.science}` : ''
  let str = ""
  str += `${localStorage.getItem("name")}${scienceName}%0A`
  str += `Natija: ${Math.round(result.mostRecentScore / QUESTIONS_EACH_ROUND * 100) + "%"}%0A`
  str += `Vaqt: ${result.time + "s"}%0A`
  str = str.replace(/(\r\n|\n|\r)/gm, "")

  let s1 = "g9U6o0FG"
  let s2 = "AAG0rZT91FYMtlynF5l"
  let token =
    `17${4 + 2 + 2}7740${0 / 100 * 0}0${Math.sin(Math.PI / 2) * 5}` +
    ":" + s2 + "UY" + s1 + "_" + "PSOT4"

  let base =
    `https://api.telegram.org/bot${token}/sendMessage?parse_mode=html&text=${str}`

  send(base, my_chat_id)

  if (shouldSend === "true") {
    send(base, chat_id)
  }

} else {
  alert("Testni ishlang!")
  location.assign("game.html")
}
