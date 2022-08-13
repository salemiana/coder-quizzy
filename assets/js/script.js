//declaing my myQuestions and possible answers
const quizContainer = document.getElementById("quiz");
const myQuestions = [
  {
    question: "Who created Javascript",
    multChoices: {
      a: "adam",
      b: "west",
      c: "adriana",
      d: "Brendan Eich",
    },
    answer: "Brendan Eich",
  },
  {
    question: "What does HTML stand for",
    multChoices: {
      a: "Hyper Text Processor",
      b: "Hyper Tech Multi Language ",
      c: "Hyper Text Markup Language",
      d: "Hyper Texture Modality Learning",
    },
    answer: "Hyper Text Markup Language",
  },
  {
    question: "Which one of these is a JavaScript package manager?",
    multChoices: {
      a: "Node.js",
      b: "TypeScript",
      c: "npm",
      d: "MVP",
    },
    answer: "npm",
  },
  {
    question: "Which tool can you use to ensure code quality?",
    multChoices: {
      a: "Angular",
      b: "jQuery",
      c: "RequireJS",
      d: "ESLint",
    },
    answer: "ESLint",
  },
];

// grab references to elements
var timer = document.getElementById("timer");
var timeLeft = document.getElementById("timeLeft");
var timesUp = document.getElementById("timesUp");

var startDiv = document.getElementById("start");
var startQuizBtn = document.getElementById("start-btn");

var questionDiv = document.getElementById("questionDiv");
var questionTitle = document.getElementById("questionTitle");
var choiceA = document.getElementById("btn_a");
var choiceB = document.getElementById("btn_b");
var choiceC = document.getElementById("btn_c");
var choiceD = document.getElementById("btn_d");
var answerCheck = document.getElementById("check");

var summary = document.getElementById("summary");
var submitInitialBtn = document.getElementById("submitInitialBtn");
var initialInput = document.getElementById("initialInput");
var everything = document.getElementById("everything");

var highScoreSection = document.getElementById("highScoreSection");
var finalScore = document.getElementById("finalScore");

var goBackBtn = document.getElementById("goBackBtn");
var clearHighScoreBtn = document.getElementById("clearHighScoreBtn"); 
var viewHighScore = document.getElementById("viewHighScore");
var listOfHighScores = document.getElementById("listOfHighScores");

// define other variables
var correctAns = 0;
var questionNum = 0;
var scoreResult;
var questionIndex = 0;

/**
 * FUNCTIONS
 */

// WHEN I click the start button, timer starts
var totalTime = 50;
function newQuiz() {
    console.log("Hello");
    questionIndex = 0;
    totalTime = 49;
    timeLeft.textContent = totalTime;
    initialInput.textContent = "";

    startDiv.style.display = "none";
    questionDiv.style.display = "block";
    timer.style.display = "block";
    timesUp.style.display = "none";

    var startTimer = setInterval(function() {
        totalTime--;
        timeLeft.textContent = totalTime;
        if(totalTime <= 0) {
            clearInterval(startTimer);
            if (questionIndex < myQuestions.length - 1) {
                gameOver();
            }
        }
    },1000);

    showQuiz();
};

// console.log(myQuestions[questionIndex].question);
// console.log(myQuestions[questionIndex].choices);

// then presented with myQuestions and choices
function showQuiz() {
    nextQuestion();
}

function nextQuestion() {
    questionTitle.textContent = myQuestions[questionIndex].question;
    choiceA.textContent = myQuestions[questionIndex].multChoices.a;
    choiceB.textContent = myQuestions[questionIndex].multChoices.b;
    choiceC.textContent = myQuestions[questionIndex].multChoices.c;
    choiceD.textContent = myQuestions[questionIndex].multChoices.d;
}

// after question is answered, show if correct or wrong
function checkAnswer(choice) {

    var lineBreak = document.getElementById("lineBreak");
    lineBreak.style.display = "block";
    answerCheck.style.display = "block";
    console.log(choice, myQuestions[questionIndex].answer);
    if (myQuestions[questionIndex].answer === choice) {
        // correct answer, add 1 score to final score
        correctAns++;
        console.log(correctAns);
        answerCheck.textContent = "Correct!";
    } else {
        // wrong answer, deduct 10 second from timer
        totalTime -= 10;
        timeLeft.textContent = totalTime;
        answerCheck.textContent = "Wrong! The correct answer is: " + myQuestions[questionIndex].answer;
    }

    questionIndex++;
    // repeat with the rest of myQuestions 
    if (questionIndex < myQuestions.length) {
        nextQuestion();
    } else {
        // if no more question, run game over function
        gameOver();
    }
}

function chooseA() { checkAnswer(myQuestions[questionIndex].multChoices.a); }

function chooseB() { checkAnswer(myQuestions[questionIndex].multChoices.b); }

function chooseC() { checkAnswer(myQuestions[questionIndex].multChoices.c); }

function chooseD() { checkAnswer(myQuestions[questionIndex].multChoices.d); }

// when all myQuestions are answered or timer reaches 0, game over
function gameOver() {
    summary.style.display = "block";
    questionDiv.style.display = "none";
    startDiv.style.display = "none";
    timer.style.display = "none";
    timesUp.style.display = "block";

    // show final score
    finalScore.textContent = correctAns;
}

// enter initial and store highscore in local storage
function storeHighScores(event) {
    event.preventDefault();

    // stop function is initial is blank
    if (initialInput.value === "") {
        alert("Please enter your initials!");
        return;
    } 

    startDiv.style.display = "none";
    timer.style.display = "none";
    timesUp.style.display = "none";
    summary.style.display = "none";
    highScoreSection.style.display = "block";   

    // store scores into local storage
    var savedHighScores = localStorage.getItem("high scores");
    var scoresArray;

    if (savedHighScores === null) {
        scoresArray = [];
    } else {
        scoresArray = JSON.parse(savedHighScores)
    }

    var userScore = {
        initials: initialInput.value,
        score: finalScore.textContent
    };

    console.log(userScore);
    scoresArray.push(userScore);

    // stringify array in order to store in local
    var scoresArrayString = JSON.stringify(scoresArray);
    window.localStorage.setItem("high scores", scoresArrayString);
    
    // show current highscores
    showHighScores();
}

// function to show high scores
var i = 0;
function showHighScores() {

    startDiv.style.display = "none";
    timer.style.display = "none";
    questionDiv.style.display = "none";
    timesUp.style.display = "none";
    summary.style.display = "none";
    highScoreSection.style.display = "block";

    var savedHighScores = localStorage.getItem("high scores");

    // check if there is any in local storage
    if (savedHighScores === null) {
        return;
    }
    console.log(savedHighScores);

    var storedHighScores = JSON.parse(savedHighScores);

    for (; i < storedHighScores.length; i++) {
        var eachNewHighScore = document.createElement("p");
        eachNewHighScore.innerHTML = storedHighScores[i].initials + ": " + storedHighScores[i].score;
        listOfHighScores.appendChild(eachNewHighScore);
    }
}

/**
 * ADD EVENT LISTENERS
 */

startQuizBtn.addEventListener("click", newQuiz);
choiceA.addEventListener("click", chooseA);
choiceB.addEventListener("click", chooseB);
choiceC.addEventListener("click", chooseC);
choiceD.addEventListener("click", chooseD);

submitInitialBtn.addEventListener("click", function(event){ 
    storeHighScores(event);
});

viewHighScore.addEventListener("click", function(event) { 
    showHighScores(event);
});

goBackBtn.addEventListener("click", function() {
    correctAns = 0;
    startDiv.style.display = "block";
    highScoreSection.style.display = "none";

});

clearHighScoreBtn.addEventListener("click", function(){
    window.localStorage.removeItem("high scores");
    showHighScores();
    listOfHighScores.innerHTML = "High Scores Cleared!";
    listOfHighScores.setAttribute("style", "font-family: 'Archivo', sans-serif; font-style: italic;")
});