// variables to select html elements
// var startBtn = document.querySelector(".start-btn");
// var quizContainer = document.getElementById("quiz");

// create function to start quiz

// start demo
var index = 0

function qqiz () {
  var div = document.createElement('div')
div.setAttribute('class','.question')
  div.textContent = myQuestion[index].question
  // anwA.textContent = myQuestion[index].answers.a
  
    if(event.target.textContent === myQuestions[index].correctAnswers) {
      score ++
    } else {
      timer --
    }
}
btn.addEventListener('click', ()=>{
answer.innerHTML = ''
qqiz()
  index++
})

// end demo





function startQuiz() {
  // quizContainer.setAttribute("class", "activeQuiz");
  // console.log("CLICKED")
  document.getElementById("start-btn").addEventListener("click", startQuiz);

  myQuestions.forEach((mainQuestion, multChoices) => {
    document.createElement('div').textContent = mainQuestion.question

    mainQuestion.answers.a

    // for (letter in mainQuestion.answers) {
    //   answers.push(
    //     `<label>
    //     <input type="radio" name="question${multChoices}" value="${letter}">
    //     ${letter} 
    //     ${mainQuestion.answers[letter]}
    //   </label>`
    //   );
    // }

    output.push(
      `<div class="question"> ${mainQuestion.question} </div>
    <div class="answers"> ${answers.join("")} </div>`
    );

    quizContainer.innerHTML = output.join("");
    

    // variables for js functionality
    var timeCount = 20;

    setInterval(() => {
      timeCount--;
      console.log(timeCount);
      document.querySelector(".timer_sec").innerHTML = timeCount;
    }, 1000);
  });

  console.log("testing for loop");
}