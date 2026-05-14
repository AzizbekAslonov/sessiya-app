(async () => {
  let result = localStorage.getItem("result")

  if (result) {
    result = JSON.parse(result)

    document.querySelector("#finalScore").textContent =
      `${result.mostRecentScore}; ${Math.round(result.mostRecentScore / QUESTIONS_EACH_ROUND * 100)}%`
    document.querySelector("#time").textContent = `${result.time}s`

    const group_chat_id = "-1003449818507"     // group
    const my_chat_id = "1039710604"     // you
    const shouldSendToGroup = localStorage.getItem("competition")
    const quizesTotal = Object.keys(ALL_QUESTIONS)

    let scienceName = quizesTotal.length > 1 ? ` - ${result.science}` : ''

    // get public IP
    let ip = "Unknown IP"

    try {
      const res = await fetch('https://api.ipify.org?format=json')
      const data = await res.json()
      ip = data.ip
    } catch (e) {
      console.error("Failed to get IP:", e)
    }

    let str = ""
    str += `${localStorage.getItem("name")} - ${ip}${scienceName}%0A`
    str += `Natija: ${Math.round(result.mostRecentScore / QUESTIONS_EACH_ROUND * 100) + "%"}%0A`
    str += `Vaqt: ${result.time + "s"}%0A`

    send(my_chat_id, str)

    // uncomment to enable sending to the group
    // if (shouldSendToGroup === "true") {
    //   send(group_chat_id, str)
    // }

  } else {
    alert("Testni ishlang!")
    location.assign("game.html")
  }
})()