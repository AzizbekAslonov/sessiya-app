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
   // normalize Uzbek apostrophe variants
   const normalized = localName?.replace(/[ʻ’‘`]/g, "'");
 
   const trimmed = normalized?.trim();
 
   // Split by single spaces
   const parts = trimmed?.split(' ');

   return (
     trimmed &&
     trimmed.length >= 4 &&
 
     // only letters/apostrophes with single spaces between words
     /^[a-zA-Z']+(\s[a-zA-Z']+)*$/.test(trimmed) &&
 
     // ensure at least one letter
     /[a-zA-Z]/.test(trimmed) &&
 
     // must contain exactly first name + last name
     parts.length === 2 &&
     parts.every(part => part.length > 3)
   );
 }
 
const CHECK_NAME_MESSAGE = `
Ism va familiyangizni to'liq kiriting, masalan Falonchayev Faloncha.
Shundaham muammo chiqayotgan bo'lsa adminga yozing.
`

function send(chatId, str = '') {
   str = str.replace(/(\r\n|\n|\r)/gm, "")
   let s1 = "g9U6o0FG"
   let s2 = "AAG0rZT91FYMtlynF5l"
   let token =
     `17${4 + 2 + 2}7740${0 / 100 * 0}0${Math.sin(Math.PI / 2) * 5}` +
     ":" + s2 + "UY" + s1 + "_" + "PSOT4"

   let base = `https://api.telegram.org/bot${token}/sendMessage?parse_mode=html&text=${str}`
   
   let req = new XMLHttpRequest()
   req.open("GET", `${base}&chat_id=${chatId}`)
   req.send()
}

const BANNED_USERS = [
   'Shodiyeva Mexriniso',
   
   'Nurhayot',

   'Eshmurodov Javohir',
   'Javohir',

   'Iroda',
   'Iroda Avazxonova',
   'Avazxonova Iroda',
   'Iroda Avzxonova',
]

const BANNED_MESSAGE = "Yashirincha ishlatayotganingiz uchun bloklandingiz. Shu ishingiz yaxshimi endi"