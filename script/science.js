let buttons = document.querySelector('.buttons');

const btnCollection = [
   // { data: 'Dasturlash', classes: 'btn scale btn-primary' },
   // { data: 'Geometriya', classes: 'btn scale btn-secondary' },
   // { data: 'Tarix', classes: 'btn scale btn-primary' },
   { data: 'English', classes: 'btn scale btn-secondary' },
]
btnCollection.forEach(btn => {
   const buttonEl = DOMElement({
      tag: 'a',
      value: btn.data + ' ',
      classes: btn.classes,
      attributes: ['data-science', btn.data],
      children: DOMElement({ tag: 'i', classes: btn.icon || '' })
   })

   buttonEl.addEventListener('click', () => {
      localStorage.setItem('science', btn.data);
      location.assign('game.html');
   })

   buttons.insertAdjacentElement('beforeend', buttonEl)
})