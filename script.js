const startButton=document.getElementById('start-btn')
const nextButton=document.getElementById('next-btn')
const resultContainerElement=document.getElementById('result-container')
const questionContainerElement=document.getElementById('question-container')
let shuffledQuestions, currentQuestionIndex
const questionElement=document.getElementById('question')
const answerButtonsElement= document.getElementById('answer-buttons')




startButton.addEventListener('click', startGame)
nextButton.addEventListener('click',()=> {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame(){
    resultContainerElement.classList.add('hide')
    startButton.classList.add('hide')
    shuffledQuestions=questions.sort(() => Math.random()- .5)
    currentQuestionIndex=0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}
function setNextQuestion(){
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])

}
function showQuestion(question){
    questionElement.innerText=question.question
    question.answers.forEach(answer=> {
        const button= document.createElement('button')
        button.innerText=answer.text
        button.classList.add('btn')
        if (answer.correct){
            button.dataset.correct=answer.correct

        }
       
        button.addEventListener('click',selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}
function resetState(){
    clearStatusClass(document.body)

    
    nextButton.classList.add('hide')
    while(answerButtonsElement.firstChild){
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}


function selectAnswer(e){
    const selectedButton=e.target
    const correct=selectedButton.dataset.correct
  

    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button=>{
        setStatusClass(button, button.dataset.correct)

    })




    if(shuffledQuestions.length> currentQuestionIndex+1){
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText='Restart'
        startButton.classList.remove('hide')
        resultContainerElement.classList.remove('hide')
        questionContainerElement.classList.add('hide')
        
            
    
 
    }
    

}
function setStatusClass(element, correct){
    clearStatusClass(element)
    if(correct) {
        element.classList.add('correct')
        
    } else {
        element.classList.add('wrong')
    
    }
    }


function clearStatusClass(element){
    element.classList.remove('correct')
    element.classList.remove('wrong')

    
}


const questions= [
    {
        question:'How are you feeling today?',
        answers:[
            { text: 'Moody and overwhelmed', correct:true },
            { text: "Happy, life's goood :)", correct:false},
            { text: 'Excited!!!!', correct:false},
            { text: 'So angry stay away from me', correct:false},
        ],
         
        
    },
    {   question:'Who will you be watching with?',
        answers:[
            { text:'Alone :(' , correct:false},
            { text:'With my family', correct:true},
            { text:'Friendssss' , correct:false},
            { text:'My love' , correct:false},
        ],
        
    },
    {
        question:"What's your favourite genre?",
        answers:[
            { text:'Comedy', correct:true},
            { text:'Drama', correct:false},
            { text:'Romance', correct:false},
            { text:'Action', correct:false,}

        ],
       
    },
    {
        question:'Do you like animation movies?',
        answers:[
 
            { text:'UP UP UP!!!' , correct:false},
            { text:"No I'm not 7", correct:true},
        ],
         
    },
    {
        question:'Do you prefer black-white movies?',
        answers:[
            { text:'YES I have seen Casablanca million times' , correct:false},
            { text:'Not my style bro' , correct:true},
        ],
        
    },
    {
        question:"What's most important in life?",
        answers:[
            { text:'Love <3', correct:true},
            { text:'Peace', correct:false},
            { text:'Family and friends ofc', correct:false},
            { text:'Money money money $$$', correct:false,}

        ],
       
    },
    {
        question:"What's your favourite movie snack?",
        answers:[
            { text:'Chips', correct:true},
            { text:'Popcorn, classic!', correct:false},
            { text:'Any kind of alcohol', correct:false},
            { text:'Candiessss', correct:false,}

        ],
       
    },
    {
        question:"How often do you watch a movie?",
        answers:[
            { text:'All the time!!', correct:true},
            { text:'A couple times in a week', correct:false},
            { text:'A couple times in a month', correct:false},
            { text:'A couple times in a year', correct:false,}

        ],
       
    },
    {
        question:"How is the weather right now?",
        answers:[
            { text:'Rainy and depressive', correct:true},
            { text:'Sun is shining', correct:false},
            { text:'Snowy', correct:false},
            { text:'Cold enough to stay home', correct:false,}

        ],
       
    },
   
    
]




