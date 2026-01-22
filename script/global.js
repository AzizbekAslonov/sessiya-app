const QUESTIONS_EACH_ROUND = 35

// Global Functions
const DOMElement = options => {
   const { tag = 'div', value = '', classes = '', attributes = [], children = null, children_2 = null } = options

   let el = document.createElement(tag)
   el.textContent = value
   if (classes) el.classList = classes

   if (attributes.length > 1) {
      let count = 0;

      for (let index = 0; index < attributes.length / 2; index++) {
         el.setAttribute(attributes[index + count], attributes[index + count + 1])
         count++
      }
   }

   if (children) el.appendChild(children)
   if (children_2) el.appendChild(children_2)

   return el
}

function removeClass(collection, classNames) {
   collection.forEach(el => {
      classNames.forEach(className => {
         el.classList.remove(className)
      })
   });
}

function addClass(collection, classNames) {
   collection.forEach(el => {
      classNames.forEach(className => {
         el.classList.add(className)
      })
   });
}

function checkArrLength(arr = [], min = 0) {
   return new Promise((resolve, reject) => {
      if (arr.length > min) return resolve()
      reject()
   })
}

function checkName(localName) {
   const trimmed = localName?.trim();
   return trimmed &&
   trimmed.length >= 4 &&
   /^[a-zA-Z']+(\s[a-zA-Z']+)*$/.test(trimmed) &&  // single space between words only
   /[a-zA-Z]/.test(trimmed)  // ensure at least one letter
}

function send(base, chatId) {
   let req = new XMLHttpRequest()
   req.open("GET", `${base}&chat_id=${chatId}`)
   req.send()
}

const BANNED_USERS = [
   'Aldaysanku Sardor',
]