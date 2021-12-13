const buttons = document.getElementsByClassName('quizy-button')
const quizyQuestion = document.getElementById('quizy-question')
const currentQuestion = document.getElementById('current_question')
const quizInterior = document.getElementById('quiz-interior')
const quizResult = document.getElementById('quiz-results')

const quizContent = document.getElementById('quiz-content')
const quizLoader = document.getElementById('quiz-loader')

let counter=0

quizBd =[
    {
        question:'Has your friendship1'
    },
    {
        question:'Has your man grown distant or starting pulling away?'
    },
    {
        question:'Have you used a commitment text message to realign his focus on you?'
    },
    {
        question:'Are you looking for a devoted long term relationship?'
    }
]

//controlling the animation class fade in and fade out
const flashQuiz =()=>{
    quizInterior.classList.toggle('flash')
}

//buttun controlled by the adevent listener
const handleQuiz =()=>{

    if(counter >2 ){
        flashQuiz()
        
        setTimeout(() => {
            
            quizContent.style.display ='none'
            quizLoader.style.display ='block'
           flashQuiz()
        }, 800);
        
        
        
        
        setTimeout(() => {
            flashQuiz()
            
        //    quizInterior.classList.toggle('flash-out')
        
    }, 3500);
    
    
    setTimeout(() => {
            quizLoader.style.display ='none'
            quizResult.style.display ='block'
            
        }, 4500);
        
        
        // setTimeout(() => {
            
        //     flashQuiz()
        //     quizLoader.style.display ='none'
        //     quizResult.style.display ='block'
            
        // }, 2682);
        
        
        
  
        return

    }
   

    
    flashQuiz()
    
    setTimeout(() => {
        counter++
        currentQuestion.textContent = counter + 1
        quizyQuestion.textContent= quizBd[counter].question
        
    }, 800);
    
    setTimeout(() => {
        // quizInterior.classList.toggle('flash')
        flashQuiz()
        
    }, 1200);

}


buttons[0].addEventListener('click', handleQuiz)
buttons[1].addEventListener('click', handleQuiz)


console.log(buttons[0])
console.log(quizyQuestion)
console.log(quizInterior)