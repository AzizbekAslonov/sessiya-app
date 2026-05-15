let buttons = document.querySelector('.buttons');

const btnCollection = Object.keys(ALL_QUESTIONS).map((name, index) => ({
   data: name, classes: `btn scale ${index % 2 === 0 ? 'btn-primary' : 'btn-secondary'}`
}))


const nameInput = document.getElementById("nameInput")
const localName = localStorage.getItem('name');

if (BANNED_USERS.includes(localName)) {
   alert(BANNED_MESSAGE + " " + localName.split(' ')[0] + "?")
   location.assign('index.html')
}

if (checkName(localName)) {
  nameInput.value = localName;
}

const shouldSend = document.getElementById("shouldSend")
const localCompetition = localStorage.getItem('competition')
if (shouldSend) {
   if (localCompetition === "true") {
      shouldSend.checked = true
   } else if (localCompetition === "false") {
      shouldSend.checked = false
   } else {
      shouldSend.checked = true
   }  
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
         alert(CHECK_NAME_MESSAGE)
      }
   })

   buttons.insertAdjacentElement('beforeend', buttonEl)
})