var userChoice;
var choices = ["Rock", "Paper", "Scissors"];
var satanChoice;
var judgement;

var rock = document.body.querySelector(".rock");
rock.addEventListener("click", function(){
  userChoice = "Rock";
  alert("You Chose Rock");
  satanChoice();
})

function satanChoice(){
  satanResult = choice[Math.floor(Math.random()*choice.length)];
  compare();
}

function compare(){
  switch (satanResult) {
    case "Rock":
    if (userChoice === satanResult) {
      result = "Draw. Nice. One more chance to dance with the devil"
    } else if (userChoice === 'scissors') {
      result = "You lose. You are going to Hell. "
    } else {
      result = "Cogratulations, you do not have to go to hell"
    }
  }
  switch (computerResult) {
    case "Rock":
      if (userChoice === computerResult) {
        result = "Draw Idiot"
      } else if (userChoice === "scissors") {
        result = "You suck"
      } else {
        result = "WINNER WINNER CHICKEN DINNER"
      }
      break;
    case "Paper":
      if (userChoice === computerResult) {
        result = "Draw Idiot"
      } else if (userChoice === "scissors") {
        result = "WINNER WINNER CHICKEN DINNER"
      } else {
        result = "You suck"
      }
      break;
    case "Scissors":
      if (userChoice === computerResult) {
        result = "Draw Idiot"
      } else if (userChoice === "paper") {
        result = "You suck"
      } else {
        result = "WINNER WINNER CHICKEN DINNER"
      }
      break;
  }
  displayResult()
};