document.addEventListener('DOMContentLoaded', () => {
    const timeLeftDisplay = document.querySelector('#time-left')
    const startButton = document.getElementById('start-btn')
    const nextButton = document.getElementById('next-btn')
    const questionContainerElement = document.getElementById('question-container')
    const questionElement = document.getElementById('question')
    const answerButtonsElement = document.getElementById('answer-buttons')
    const startBtn = document.querySelector('#start-btn')
    const scoreDisplay = document.querySelector('#score-left')
    const correctAnswer = 1
    let myVar;
    let timeLeft = 30
    let shuffledQuestions, currentQuestionIndex
    let gameScore = 0;

    startButton.addEventListener('click', function(){
         startGame();
    })
    
    // startButton.addEventListener('click', updateCountdown)
    nextButton.addEventListener('click', () => {
        currentQuestionIndex++
        setNextQuestion()
    })

    function updateCountdown() {
         myVar = setInterval(changeClock, 1000) 
        function changeClock() {
            if (timeLeft <= -1) {
                timeLeft = 30;
                return clearInterval(myVar) 
            }
            console.log(timeLeft);
            timeLeftDisplay.innerHTML = timeLeft
            timeLeft -=1
        }
    }

    startBtn.addEventListener('click', updateCountdown)

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
                // scoreDisplay.innerHTML = gameScore;
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
        if (shuffledQuestions.length > currentQuestionIndex + 1) {
            nextButton.classList.remove('hide')
            
        } else {
            startButton.innerText = 'Restart'
            startButton.classList.remove('hide')
        }
        setScore()
            // gameScore++;
            // scoreDisplay.innerHTML = gameScore;
            // console.log("here " + gameScore);
    }

    function setStatusClass(element, correct) {
        // debugger;
        clearStatusClass(element)
        if (correct) {
            element.classList.add('correct')
            
        } else {
            element.classList.add('wrong')
        } 
    } 
    // function setScore(element, correct, wrong) {
    //     if (element === correct) {
    //         gameScore++;
    //         console.log("Your score is " + gameScore);
    //         scoreDisplay.innerHTML = gameScore
    //     } else (element === wrong) 
    //        console.log(gameScore + 'wrong');     
    //     }  
    //     if (answer == correct) {
    //     gameScore++;
    //     // scoreDisplay.innerHTML = scoreDisplay
    //     console.log("score is " + gameScore);
    //     scoreDisplay.innerHTML = gameScore;
    //     } 
    
    //     else (answer === wrong) 
    //         timeLeft -5
    //         console.log("time minus one");
    //     }
    function setScore(element, correct) {
        // debugger;
        
        if (element === correct) {
            gameScore++;
            console.log("score is " + gameScore);
            scoreDisplay.innerHTML = gameScore;
        } 
        // else {
        //     timeLeft -5
        //     console.log("time minus one");
        // }
    }

    // function checkAnswer(answer)

    function clearStatusClass(element) {
        // setScore()
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
    ]


})


// //  Working countdown function
// function updateCountdown() {
//     // setInterval(function(){
//     //     if (timeLeft <= 0) {
//     //         clearInterval(timeLeft = 0)
//     //     }
//     //     timeLeftDisplay.innerHTML = timeLeft;
//     //     timeLeft -=1
//     // }, 1000)
//     setInterval(function)
//     const minutes = Math.floor(time / 60);
//     let seconds = time % 60;
//     seconds = seconds < 10 ? '0' + seconds : seconds;
//     countdownEl.innerHTML = `${minutes}:${seconds}`;
//     time--;
//     if (time <= 0) {
//         clearInterval(time = 0)
//     }
// }