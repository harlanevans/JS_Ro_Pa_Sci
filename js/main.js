var userChoice;
var choice = ["Rock", "Paper", "Scissors"];
var satanChoice;
var result;

var rock = document.body.querySelector(".rock");
rock.addEventListener("click", function(){
  userChoice = "Rock";
  alert("You Chose Rock");
  satanChoice();
})

var paper = document.body.querySelector(".paper");
paper.addEventListener("click", function () {
  userChoice = "Paper";
  alert("You picked Paper!");
  satanChoice();
});

var scissors = document.body.querySelector(".scissors");
scissors.addEventListener("click", function () {
  userChoice = "Scissors";
  alert("You picked Scissors!");
  satanChoice();
});

function satanChoice(){
  satanResult = choice[Math.floor(Math.random()*choice.length)];
  compare();
}

function compare(){
  switch (satanResult) {
    case "Rock":
    if (userChoice === satanResult) {
      result = "Draw. Nice. One more chance to dance with the devil."
    } else if (userChoice === 'Scissors') {
      result = "You lose. You are going to Hell."
    } else {
      result = "Congratulations, you do not have to go to hell."
    }
    break;
    case "Paper":
    if (userChoice === satanResult) {
      result = "Draw. Nice. One more chance to dance with the devil."
    } else if (userChoice === "Scissors") {
      result = "You lose. You are going to Hell."
      } else {
      result = "Congratulations, you do not have to go to hell."
      }
      break;
      case "Scissors":
      if (userChoice === satanResult) {
        result = "Draw. Nice. One more chance to dance with the devil."
      } else if (userChoice === "Paper") {
        result = "You lose. You are going to Hell."
      } else {
        result = "Congratulations, you do not have to go to hell."
      }
      break;
    }
    displayResult()
  };

function displayResult() {
  var resultContainer = document.body.querySelector("#result");
  resultContainer.innerHTML = result;
  var choiceContainer = document.body.querySelector("#choice");
  choiceContainer.innerHTML = `Satan chose ${satanResult}`;
};