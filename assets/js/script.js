//declaing my questions and possible answers
const quizContainer = document.getElementById("quiz");
var myQuestions = [
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
    answer: "c",
  },
  {
    question: "Which one of these is a JavaScript package manager?",
    multChoices: {
      a: "Node.js",
      b: "TypeScript",
      c: "npm",
      d: "MVP",
    },
    answer: "c",
  },
  {
    question: "Which tool can you use to ensure code quality?",
    multChoices: {
      a: "Angular",
      b: "jQuery",
      c: "RequireJS",
      d: "ESLint",
    },
    answer: "d",
  },
];

//ref to elements
var timer = document.getElementById("timer");
var timeLeft = document.getElementById("timeLeft");
var timesUp = document.getElementById("timesUp");

var startDiv = document.getElementById("start");
var startQuizBtn = document.getElementById("start-btn");