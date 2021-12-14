const buttons = document.getElementsByClassName('quizy-button')
const quizyQuestion = document.getElementById('quizy-question')
const currentQuestion = document.getElementById('current_question')
const quizInterior = document.getElementById('quiz-interior')
const quizResult = document.getElementById('quiz-results')

const quizContent = document.getElementById('quiz-content')
const quizLoader = document.getElementById('quiz-loader')

let counter = 0

quizBd = [
    {
        question: 'Has your friendship1'
    },
    {
        question: 'Has your man grown distant or starting pulling away?'
    },
    {
        question: 'Have you used a commitment text message to realign his focus on you?'
    },
    {
        question: 'Are you looking for a devoted long term relationship?'
    }
]

//controlling the animation class fade in and fade out
const flashQuiz = () => {
    quizInterior.classList.toggle('flash')
}

//buttun controlled by the adevent listener
const handleQuiz = () => {
    //this check if you have finished the four question and start to load animation if match
    if (counter > 2) {
        flashQuiz()

        setTimeout(() => {
            quizContent.style.display = 'none'
            quizLoader.style.display = 'block'
            flashQuiz()
        }, 800);

        setTimeout(() => {
            flashQuiz()
        }, 3500);

        setTimeout(() => {
            quizLoader.style.display = 'none'
            quizResult.style.display = 'block'
        }, 4500);
        return
    }

    //call the animation that flash for a second it is inside that function
    flashQuiz()

    //here i set a counter and I pass to next question
    setTimeout(() => {
        counter++
        currentQuestion.textContent = counter + 1
        quizyQuestion.textContent = quizBd[counter].question
    }, 800);

    //here i remove the class with animation so i can use it again
    setTimeout(() => {
        flashQuiz()
    }, 1200);
}

buttons[0].addEventListener('click', handleQuiz)
buttons[1].addEventListener('click', handleQuiz)