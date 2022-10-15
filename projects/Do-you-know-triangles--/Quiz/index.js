let quizform = document.querySelector(".container");
let submitBtn = document.querySelector("#submit");
let outputEl = document.querySelector(".output");

const correctAnswers = [
  "90°",
  "Right angle",
  "One right angle",
  "12, 16, 20",
  "Equilateral triangle",
  "100°",
  "30°",
  "a+b+c",
  "no",
  '45°',
];



function calculateScore() {
  const formResults = new FormData(quizform);
  let score = 0;
    index = 0;
  for (let value of formResults.values()) {

    console.log("value ",value )

    if (value === correctAnswers[index]) {
      score++;
    }
    index++;
  }
  console.log("The score is ", score);
  outputEl.innerText = "The score is "+score;
}

submitBtn.addEventListener("click", calculateScore);
