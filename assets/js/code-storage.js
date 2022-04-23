// var startBtn = document.querySelector(".start-btn");
// var quizContainer = document.getElementById("quiz");
// var timerEl = document.getElementById("timer"); // Timer that counts down from 5
// var choicesEl = document.getElementById("choices");
// var mainQEl = document.getElementById("mainQuestion");
// var submitBtn = document.getElementById("submit");
// var restartBtn = document.getElementById("restart-btn");
// var clearBtn = document.getElementById("clear-scores");
// var timeCount = 120;

// startBtn.onclick = () => {
//   quizContainer.setAttribute("class", "activeQuiz");
//   console.log("CLICKED");

//   setInterval(() => {
//     timeCount--;
//     console.log(timeCount);
//     document.querySelector(".timer_sec").innerHTML = timeCount;
//   }, 1000);

//   // showQuetions(0); //calling showQestions function
//   // queCounter(1); //passing 1 parameter to queCounter
//   // startTimer(20); //calling startTimer function
//   // startTimerLine(0); //calling startTimerLine function
// };

// function startTimer(time) {
//   //counter setInterval(timer, 1000);}

//   //if start button is clicked
//   let timeValue = 15;
//   let que_count = 0;
//   let que_numb = 1;
//   let userScore = 0;
//   let counter;
//   let counterLine;
//   let widthValue = 0;

//   // if restartQuiz button clicked
//   restartBtn.onclick = () => {
//     quizContaniner.classList.add("activeQuiz"); //show quiz box
//     // result_box.classList.remove("activeResult"); //hide result box
//     timeValue = 20;
//     que_count = 0;
//     que_numb = 1;
//     userScore = 0;
//     widthValue = 0;
//     showQuetions(que_count); //calling showQestions function
//     queCounter(que_numb); //passing que_numb value to queCounter
//     clearInterval(counter); //clear counter
//     clearInterval(counterLine); //clear counterLine
//     startTimer(timeValue); //calling startTimer function
//     startTimerLine(widthValue); //calling startTimerLine function
//     // timeText.textContent = "Time Left"; //change the text of timeText to Time Left
//     next_btn.classList.remove("show"); //hide the next button
//   };
//   // getting questions and options from array

//   function showResults() {
//     results.classList.add("activeResult"); //show result box
//     const scoreText = result_box.querySelector(".score_text");
//   }

//   function startTimer(time) {
//     counter = setInterval(timer, 1000);
//     function timer() {}

//     //if they choose the right answer continue
//     //if they get the wrong answer deduct 2 seconds
//     var timeInterval = setTimer(function () {
//       if ((choicesEl = wrong)) {
//         // Set the `textContent` of `timerEl` to show the remaining seconds
//         timerEl.timer = totalTime - 2;
//         // Decrement `totalTime` by 1
//       } else {
//         totalTime--;
//       }
//     }, 20000);
//   }

//   //create questions and choices

//   var questions = [
//     {
//       numb: 1,
//       mainQuestion: "Who created Javascript",
//       multChoices: {
//         a: "adam",
//         b: "west",
//         c: "adriana",
//         d: "Brendan Eich",
//       },
//       answer: "d",
//     },
//     {
//       numb: 2,
//       mainQuestion: "What does HTML stand for",
//       multChoices: {
//         a: "Hyper Text Processor",
//         b: "Hyper Tech Multi Language ",
//         c: "Hyper Text Markup Language",
//         d: "Hyper Texture Modality Learning",
//       },
//       answer: "c",
//     },
//     {
//       question: "Which one of these is a JavaScript package manager?",
//       answers: {
//         a: "Node.js",
//         b: "TypeScript",
//         c: "npm",
//       },
//       correctAnswer: "c",
//     },
//     {
//       question: "Which tool can you use to ensure code quality?",
//       answers: {
//         a: "Angular",
//         b: "jQuery",
//         c: "RequireJS",
//         d: "ESLint",
//       },
//       correctAnswer: "d",
//     },
//   ];

//   //create functions to get the questions
//   startBtn.on("click", timer(), questions());
// }
