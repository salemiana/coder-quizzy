var quizContaniner = queryselector("quiz");
var submitBtn = getByElId("submit");
var timerEl = document.getElementById("timer"); // Timer that counts down from 5
var choicesEl = document.getElementById("choices");

function timer() {
  var totalTotal = 20;

  //if they choose th right answer continue
  //if they get the wrong answer deduct 10 seconds
  var timeInterval = setInterval(function () {
    // As long as the `timeLeft` is greater than 1
    if ((choicesEl = wrong)) {
      // Set the `textContent` of `timerEl` to show the remaining seconds
      timerEl.timer = totalTime - 2;
      // Decrement `totalTime` by 1
    } else {
      totalTime--;
    }
  }, 1000);
}

//create questions
