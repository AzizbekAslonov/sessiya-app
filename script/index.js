let buttons = document.querySelector('.buttons');

const btnCollection = Object.keys(ALL_QUESTIONS).map((name, index) => ({
   data: name, classes: `btn scale ${index % 2 === 0 ? 'btn-primary' : 'btn-secondary'}`
}))

// Send something to the group
// const chat_id = "-1003449818507"
// let str = "Axborot Texnologiyalari uchun testlar qo'shildi"
// let s1 = "g9U6o0FG"
// let s2 = "AAG0rZT91FYMtlynF5l"
// let token =
//   `17${4 + 2 + 2}7740${0 / 100 * 0}0${Math.sin(Math.PI / 2) * 5}` +
//   ":" + s2 + "UY" + s1 + "_" + "PSOT4"
// let base =
// `https://api.telegram.org/bot${token}/sendMessage?parse_mode=html&text=${str}`
// send(base, chat_id)
   

const nameInput = document.getElementById("nameInput")
const localName = localStorage.getItem('name');

if (BANNED_USERS.includes(localName)) {
   alert('Siz ismingizni kiritmaganingiz uchun bloklandingiz!')
   location.assign('index.html')
}

if (checkName(localName)) {
  nameInput.value = localName;
}

const shouldSend = document.getElementById("shouldSend")
const localCompetition = localStorage.getItem('competition')
if (localCompetition === "true") {
   shouldSend.checked = true
} else if (localCompetition === "false") {
   shouldSend.checked = false
} else {
   shouldSend.checked = true
}

btnCollection.forEach(btn => {
   const buttonEl = DOMElement({
      tag: 'a',
      value: btn.data + ' ',
      classes: btn.classes,
      attributes: ['data-science', btn.data],
      children: DOMElement({ tag: 'i', classes: btn.icon || '' })
   })

   buttonEl.addEventListener('click', () => {
      if (checkName(nameInput.value)) {
         const nameInput = document.getElementById("nameInput")
         const shouldSend = document.getElementById("shouldSend")

         localStorage.setItem('name', nameInput.value)
         localStorage.setItem('science', btn.data)
         localStorage.setItem('competition', shouldSend.checked)

         location.assign('game.html')
      } else {
         alert(`Iltimos isminigizni to'g'ri kiriting, bu shaffoflik uchun muhim!`)
      }
   })

   buttons.insertAdjacentElement('beforeend', buttonEl)
})