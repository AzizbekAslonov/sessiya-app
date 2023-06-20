let buttons = document.querySelector('.buttons');

const btnCollection = [
   // { data: 'Dasturlash', classes: 'btn scale btn-primary' },
   { data: 'Falsafa', classes: 'btn scale btn-secondary' },
]

const localName = localStorage.getItem('name')
if (localName) {
   nameInput.value = localName
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
         localStorage.setItem('name', nameInput.value)
         localStorage.setItem('science', btn.data)
         location.assign('game.html')
      } else {
         alert('Isminigizni kiriting')
      }
   })

   buttons.insertAdjacentElement('beforeend', buttonEl)
})