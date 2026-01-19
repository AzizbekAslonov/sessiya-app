class Questions {
   constructor(scienceName, options) {
      this.localScience = scienceName
      const { eachAddingScore, variants, count = 0, testProgram } = options
      // Set test resources
      this.questions = []
      this.answers = []
      this.correctAnswers = []

      if (count) {
         for (let i = 0; i < count; i++) {
            const randomIndex = Math.floor(Math.random() * testProgram.questions.length)
            this.questions.push(testProgram.questions[randomIndex])
            this.answers.push(testProgram.answers[randomIndex])
            this.correctAnswers.push(testProgram.correctAnswers[randomIndex])

            testProgram.questions.splice(randomIndex, 1)
            testProgram.answers.splice(randomIndex, 1)
            testProgram.correctAnswers.splice(randomIndex, 1)
         }
      } else {
         this.questions = testProgram.questions
         this.answers = testProgram.answers
         this.correctAnswers = testProgram.correctAnswers
      }

      this.setProperties(eachAddingScore, variants)
      this.setDOMElements()
      this.setClicksToChoices()
      this.setHelperProperties()
   }

   // Getters
   get result() {
      return {
         mostRecentScore: this.score,
         time: this.stopwatcher,
         science: this.localScience,
      }
   }

   setDOMElements() {
      this.$question = document.querySelector('#question');
      this.$progressText = document.querySelector('#progressText');
      this.$scoreText = document.querySelector('#score');
      this.$stopwatch = document.querySelector('#stopwatch');
      this.$proggressBarFull = document.querySelector('#proggressBarFull');
      this.$variants = document.querySelector('#variants');
   }

   setClicksToChoices() {
      this.$choices = []
      this.VARIANTS.forEach((variant, index) => {
         const choice = DOMElement({ tag: 'p', classes: 'choice-text', attributes: ['data-number', index + 1] })
         const cnt = DOMElement({
            classes: 'choice-container scale',
            children: DOMElement({ tag: 'div', classes: 'choice-prefix', value: variant }),
            children_2: choice
         })

         cnt.addEventListener('click', this.clickHandler.bind(this, choice, cnt))
         // $containers.push(cnt)
         this.$variants.appendChild(cnt)
         this.$choices.push(choice)
      })
   }

   setProperties(eachAddingScore, variants) {
      this.MAX_QUESTIONS = this.questions.length
      this.SCORE_POINTS = eachAddingScore
      this.VARIANTS = variants
   }

   setHelperProperties() {
      this.currentCorrectAnswer = null
      this.availableQuestions = []
      this.currentQuestion = ""
      this.currentAnswers = []
      this.acceptingAnswers = true
      this.score = 0
      this.questionCounter = 0
      this.stopwatcher = 0
   }

   clickHandler(choice, choicesParent) {
      if (!this.acceptingAnswers) return

      this.acceptingAnswers = false
      const selectedAnswerIndex = +choice.dataset['number']

      if (selectedAnswerIndex === this.currentCorrectAnswer) {
         // correct
         this.incrementScore()
         choicesParent.classList.add('correct');
      } else {
         // incorrect
         choicesParent.classList.add('incorrect');
         const correctChoice = document.querySelector(`[data-number='${this.currentCorrectAnswer}']`)
         correctChoice.parentElement.classList.add('correct')
         setTimeout(() => {
            correctChoice.parentElement.classList.remove('correct');
            choicesParent.classList.remove('incorrect')
         }, 1600)
      }

      setTimeout(() => {
         choicesParent.classList.remove('correct');
         this.getNewQuestion()
      }, 1600)
   }

   incrementScore() {
      this.score += this.SCORE_POINTS
      this.$scoreText.textContent = this.score
   }

   // Main functions
   startGame() {
      this.questionCounter = 0
      this.score = 0

      this.availableQuestions = [...this.questions]
      this.availableCorrectAnswers = [...this.correctAnswers]
      this.availableAnswers = [...this.answers]

      const stopwatchInterval = setInterval(() => {
         this.stopwatcher += 1
         this.$stopwatch.innerHTML = this.stopwatcher
      }, 1000)

      this.getNewQuestion(stopwatchInterval)
   }

   getNewQuestion(stopwatchInterval) {
      if (this.availableQuestions.length === 0 || this.questionCounter > this.MAX_QUESTIONS) {
         clearInterval(stopwatchInterval);

         localStorage.setItem('result', JSON.stringify(this.result))
         return location.assign('end.html')
      }

      this.questionCounter++;
      this.$progressText.textContent = `Savol ${this.questionCounter} / ${this.MAX_QUESTIONS}`
      this.$proggressBarFull.style.width = `${(this.questionCounter / this.MAX_QUESTIONS) * 100}%`

      const questionIndex = Math.floor(Math.random() * this.availableQuestions.length)
      this.currentQuestion = this.availableQuestions[questionIndex]
      this.currentCorrectAnswer = this.availableCorrectAnswers[questionIndex]
      this.currentAnswers = this.availableAnswers[questionIndex]

      this.$question.textContent = this.currentQuestion
      this.$choices.forEach(choice => {
         const index = choice.dataset['number'] - 1
         choice.textContent = this.currentAnswers[index]
      })

      this.availableQuestions.splice(questionIndex, 1)
      this.availableCorrectAnswers.splice(questionIndex, 1)
      this.availableAnswers.splice(questionIndex, 1)
      this.acceptingAnswers = true
   }
}