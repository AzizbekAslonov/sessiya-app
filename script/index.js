let buttons = document.querySelector('.buttons');

const btnCollection = [
   // { data: 'Dasturlash', classes: 'btn scale btn-primary' },
   // { data: 'Pedagogika', classes: 'btn scale btn-secondary' },
   { data: 'Lotin tili', classes: 'btn scale btn-primary' },
]
const nameInput = document.getElementById("nameInput")
const localName = localStorage.getItem('name')
if (localName) {
   nameInput.value = localName
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
      if (nameInput.value) {
         const nameInput = document.getElementById("nameInput")
         const shouldSend = document.getElementById("shouldSend")

         localStorage.setItem('name', nameInput.value)
         localStorage.setItem('science', btn.data)
         localStorage.setItem('competition', shouldSend.checked)

         location.assign('game.html')
      } else {
         alert('Isminigizni kiriting')
      }
   })

   buttons.insertAdjacentElement('beforeend', buttonEl)
})