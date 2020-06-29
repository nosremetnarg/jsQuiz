const startBtn = document.querySelector('#start-btn')
const startButton = document.getElementById('start-btn')
const timeLeftDisplay = document.querySelector("#time-left")
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const initialBtn = document.querySelector("#initials-btn")
const initialInput = document.querySelector("#initial-input")
const initialEl = document.getElementById("initials")
const scoreDisplay = document.getElementById("high-scores")
const highScores = []
const answerStatusEl = document.getElementById("answer-status")
var selectAnswerTimeout = null
let timeLeft = 30;
let score = 0;
    let shuffledQuestions, currentQuestionIndex
    //restart Quiz
function resetState() {
    timeLeftDisplay.innerHTML = 30
    timeLeft = 30
    startTimer()
    score = 0
    initialInput.value = ""
    initialBtn.setAttribute("disabled", true)
};
//start Quiz
function startQuiz() {
    resetState()
    startButton.classList.add("hide")
    scoreDisplay.classList.add("hide")
    questionContainerElement.classList.remove("hide")
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
        questionContainerElement.classList.remove("hide")
        setNextQuestion();
    };
    // timer variables
    var myTimer = null
    var timer = function(){
        if(timeLeft <= 0) {
            stopTimer();
            enterInitials();
    }
    const time = --timeLeft
    timeLeftDisplay.innerHTML = time < 0 ? 0 : timeLeft
    };
//timer function
function startTimer() {
     myTimer = setInterval(timer, 1000)
};
function stopTimer() {
   if (myTimer) {clearInterval(myTimer)}
   timeLeftDisplay.innerHTML = timeLeft < 0 ? 0 : timeLeft
};
//function to begin next question
    function setNextQuestion() {
         //change
        while(answerButtonsElement.firstChild) {
            answerButtonsElement.removeChild
            (answerButtonsElement.firstChild)
        }
        showQuestion(shuffledQuestions[currentQuestionIndex])
    };

    function showQuestion(question) {
        questionElement.innerText = question.question
        question.answers.forEach(answer => {
            const button = document.createElement('button')
            button.innerText = answer.text
            button.classList.add('btn')
            if (answer.correct) {
                button.dataset.correct = answer.correct
                // gameScore
                // console.log("Your score is " + gameScore);
                // scoreDisplay.innerHTML = gameScore
                // scoreDisplay.innerHTML = gameScore;
            } 
            button.addEventListener('click', selectAnswer)
            answerButtonsElement.appendChild(button)
        })
    };

    function selectAnswer(e) {
        const selectedButton = e.target
        const correct = selectedButton.dataset.correct
        keepScore(correct)
    answerStatusEl.innerHTML = correct ? "Correct, one point for you!" : "Wrong, two seconds time deducted!"
    selectAnswerTimeout = setTimeout(() => {
    if(shuffledQuestions.length > currentQuestionIndex + 1 ) {
        currentQuestionIndex++
            answerStatusEl.innerHTML = ""
            setNextQuestion()
        } else {
            stopTimer()
            enterInitials()
            answerStatusEl.innerHTML = ""
        }
    }, 1000)
};
//user enters initials
function enterInitials() {
    initialEl.classList.remove("hide")
    questionContainerElement.classList.add("hide")
};
//ensure initials are entered before saving
function handleSubmitButtonState() {
    if (initialInput.value) {
        initialBtn.removeAttribute("disabled")
    } else {
       initialBtn.setAttribute("disabled", true)    
    }
};
     //scores functions
 function displayScores() {
    initialEl.classList.add("hide")
    scoreDisplay.classList.remove("hide")
    startButton.innerText = "restart"
    startButton.classList.remove("hide")
 };
function viewHighScores() {
    stopTimer()
    clearTimeout(selectAnswerTimeout)
    questionContainerElement.classList.add("hide")
    displayScores()
};
            function keepScore(isCorrect) {
                if(isCorrect) {
                    score++
            console.log(score);
        } else {
        timeLeft -=2
        console.log(timeLeft);
    }
};
function saveScore() {
    var scoreDiv = document.createElement("div")
    scoreDiv.innerHTML = "<h2>" + initialInput.value + "</h2><div>" + score + "</div"
    document.getElementById("scoreContainer").append(scoreDiv)
    displayScores()
};

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
                { text: 'Yes of course', correct: false },
                { text: 'i know everything in 3 weeks', correct: false },
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
        {
            question: 'Who is the friendly Dinosaur?',
            answers: [
                { text: 'Triumph', correct: false },
                { text: 'Gover', correct: false },
                { text: 'Smoochy', correct: false },
                { text: 'Barney', correct: true },
            ]
        }
    ]


    document.addEventListener('DOMContentLoaded', () => {
        startButton.addEventListener('click', startQuiz)
        initialBtn.addEventListener("click", saveScore)
        initialInput.addEventListener("input", handleSubmitButtonState)
    })