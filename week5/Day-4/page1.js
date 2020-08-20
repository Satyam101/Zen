var div = document.createElement("div");
div.className = "container";
document.body.appendChild(div); 

var div1 = document.createElement('div');

div.appendChild(div1);


var div2 = document.createElement("div");
div2.classList = "justify-center flex-column hidden";
div.appendChild(div2);


var div3 = document.createElement("div");
div3.id = "headings";
div2.appendChild(div3);

var div4 = document.createElement("div");
div4.id = "headings-item";
div3.appendChild(div4);
var para = document.createElement("p");
para.id = "progressText";
para.className = "headings-prefix";
para.innerText = "Question"; 
div4.appendChild(para);

var div5 = div4.appendChild(divide("progessBar",));
var div6 = div5.appendChild(divide("progressTagComplete",));


var div7 = div3.appendChild(divide("headings-item"));
var para = document.createElement("p");
para.className = "headings-prefix";
para.innerText = "Score"; 
div7.appendChild(para);
var h1 = document.createElement("h1");
h1.className = "headings-main-text";
h1.id = "score";
h1.innerText = "0"; 
div7.appendChild(h1);

var h2 = document.createElement("h2");
h2.id = "question";
div2.appendChild(h2);


var div8 = div2.appendChild(divide(" ","Option-content"));
var para = document.createElement("p");
para.className = "icon";
para.innerText = "A";
div8.appendChild(para);
var para1 = document.createElement("p");
para1.className = "icon-write";
para1.setAttribute("data-number","1");
div8.appendChild(para1);

var div9 = div2.appendChild(divide(" ","Option-content"));
var para = document.createElement("p");
para.className = "icon";
para.innerText = "B";
div9.appendChild(para);
var para1 = document.createElement("p");
para1.className = "icon-write";
para1.setAttribute("data-number","2");
div9.appendChild(para1);

var div10 = div2.appendChild(divide(" ","Option-content"));
var para = document.createElement("p");
para.className = "icon";
para.innerText = "C";
div10.appendChild(para);
var para = document.createElement("p");
para.className = "icon-write";
para.setAttribute("data-number","3");
div10.appendChild(para);

var div11 = div2.appendChild(divide(" ","Option-content"));
var para = document.createElement("p");
para.className = "icon";
para.innerText = "D";
div11.appendChild(para);
var para = document.createElement("p");
para.className = "icon-write";
para.setAttribute("data-number","4");
div11.appendChild(para);

//Div Function
function divide(id,cls = " "){
    var div = document.createElement("div");
    div.id = id;
    div.className = cls;
    return div;
}


const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('icon-write'));
const progressText = document.getElementById('progressText');
const scoreText = document.getElementById('score');
const progressTagComplete = document.getElementById('progressTagComplete');
const game = document.getElementById('game');
let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [];


async function TakeQuestion(){
    try{
    var loadData =await fetch('https://opentdb.com/api.php?amount=10&category=20&difficulty=easy&type=multiple');
  var loadedQuestions= await loadData.json();
  
  
    questions = loadedQuestions.results.map((loadedQuestion) => {
            const formattedQuestion = {
                question: loadedQuestion.question,
                
            };
            
            const answerChoices = [...loadedQuestion.incorrect_answers];
            formattedQuestion.answer = Math.floor(Math.random() * 4) + 1;

                answerChoices.splice(
                formattedQuestion.answer - 1,0,loadedQuestion.correct_answer
            );
            answerChoices.forEach((choice, index) => {
                formattedQuestion['choice' + (index + 1)] = choice;
                
            });
            
            return formattedQuestion;
        });

        startGame();
    }
    catch(error){
        console.err(error)
    }
    
}

TakeQuestion();
const Score = 10;
const NoOfQuestions = 10;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
    game.classList.remove('hidden');
    blocks.classList.add('hidden');
};

getNewQuestion = () => {
    if (availableQuestions.length === 0 || questionCounter >= NoOfQuestions) {
        localStorage.setItem('mostRecentScore', score);
        return window.location.assign('./End.html');
    }
    questionCounter++;
    progressText.innerText = `Question ${questionCounter}/${NoOfQuestions}`;
    progressTagComplete.style.width = `${(questionCounter / NoOfQuestions) * 100}%`;

    const questionIndex = 0;
    currentQuestion = availableQuestions[questionIndex];
    question.innerHTML = currentQuestion.question;

    choices.forEach((choice) => {
        const number = choice.dataset['number'];
        
        choice.innerHTML = currentQuestion['choice' + number];
        
    });
    availableQuestions.splice(questionIndex, 1);
    acceptingAnswers = true;
};

choices.forEach((choice) => {
    choice.addEventListener('click', (e) => {
        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];
        const classToApply =
            (selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect');

        if (classToApply === 'correct') {
            incrementScore(Score);
        }

        selectedChoice.parentElement.classList.add(classToApply);

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();
        }, 1000);
    });
});

incrementScore = (num) => {
    score += num;
    scoreText.innerText = score;
};