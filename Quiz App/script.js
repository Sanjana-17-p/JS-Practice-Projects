const questions = [
    {
        question:"To access the services of the operating system, the interface is provided by the ___",
        answers:[
            {text:"Library",  correct:false},
            {text:"System calls", correct:true},
            {text:"Assembly instruction" ,correct:false},
            {text:"API", correct:false}
        

        ]
    },
    {
        question:"The main memory accommodates _",
        answers:[
            {text:"CPU",  correct:false},
            {text:"User Processes", correct:false},
            {text:"Operating system" ,correct:true},
            {text:"all of the mentioned", correct:false}
        

        ]
    },
    {
        question:"Network operating system runs on ___",
        answers:[
            {text:" every system in the network",  correct:false},
            {text:"server", correct:true},
            {text:" both server and every system in the network" ,correct:false},
            {text:"none of the mentioned", correct:false}
        

        ]
    },
    {
        question:" In Unix, which system call creates the new process?",
        answers:[
            {text:"create",  correct:false},
            {text:"fork", correct:true},
            {text:"new" ,correct:false},
            {text:"none ", correct:false}
        

        ]
    },
    {
        question:"The FCFS algorithm is particularly troublesome for ___",
        answers:[
            {text:" operating systems",  correct:false},
            {text:" multiprocessor systems", correct:false},
            {text:"time sharing systems" ,correct:true},
            {text:" multiprogramming systems", correct:false}
        

        ]
    }
];
//  add a variable for --
/*question
answer-buttons
next-btn 
*/
const questionElement = document.getElementById("question")
const answerbuttons = document.getElementById("answer-buttons")
const nextbutton = document.getElementById("next-btn")

// here we create a variable to store question insdex and score
let currentQuestionIndex = 0;
let score= 0;
function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextbutton.innerHTML="Next"
    showQuestion();
}
function showQuestion(){
    resetState();
    let currentQuestion=questions[currentQuestionIndex];
    let questionNo =currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". "+ currentQuestion.question;

    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement("button")
        button.innerHTML= answer.text;
        button.classList.add("btn");
        answerbuttons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct; 
        }
        button.addEventListener("click",selectAnswer)
    })

}
function resetState(){
    nextbutton.style.display = "none";
    while(answerbuttons.firstChild){
        answerbuttons.removeChild(answerbuttons.firstChild)
    }

}
function selectAnswer(e){
    const selectedbtn = e.target;
    const iscorrect = selectedbtn.dataset.correct === "true";

    if(iscorrect){
        selectedbtn.classList.add("correct");
        score++;
    
    }else{
        selectedbtn.classList.add("incorrect")
    }
    Array.from(answerbuttons.children).forEach(button=>{
        if(button.dataset.correct ==="true"){
            button.classList.add("correct")
            
        }
        button.disabled =  true
    });
    nextbutton.style.display = "block";

}

function showScore(){
    resetState();
    questionElement.innerHTML=`You scored ${score} out of ${questions.length}!`
    nextbutton.innerHTML= "Play Again"
    nextbutton.style.display="block"

}
function handleNextButton(){
    currentQuestionIndex++
    if(currentQuestionIndex<questions.length){
        showQuestion()
    }else{
        showScore()
    }
    
}

nextbutton.addEventListener("click",()=>{
    if(currentQuestionIndex<questions.length){
        handleNextButton();
    }
    else{
        startQuiz()
    }
})
startQuiz();