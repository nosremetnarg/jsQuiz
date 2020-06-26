const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
    console.log('started')
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }

}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex +1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }
   
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    } 
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [
    {
        question: 'Commonly used data types DO NOT include',
        answers: [
            { text: 'numbers', correct: false },
            { text: 'hotdogs', correct: true },
            { text: 'booleans', correct: false },
            { text: 'strings', correct: false },
        ]
    },
    {
        question: 'Who is the bassplayer in Red Hot Chili Peppers?',
        answers: [
            { text: 'ratguy', correct: false },
            { text: 'tick', correct: false },
            { text: 'sid vicious', correct: false },
            { text: 'flea', correct: true },
        ]
    },
    {
        question: 'Who is the bassplayer in Incubus?',
        answers: [
            { text: 'Dirk Lance', correct: false },
            { text: 'Ben Kenney', correct: true },
            { text: 'Fred Durst', correct: false },
            { text: 'Ziggy Stardust', correct: false },
        ]
    },
    {
        question: 'Is learning code easy?',
        answers: [
            { text: 'super easy', correct: false },
            { text: 'no', correct: true },
            { text: 'hell no', correct: true },
            { text: 'its hard AF', correct: true },
        ]
    },
    {
        question: 'Are you voting in 2020?',
        answers: [
            { text: 'no', correct: false },
            { text: 'i don\'t care', correct: false },
            { text: 'hell no', correct: false },
            { text: 'YES YES YES', correct: true },
        ]
    },
]