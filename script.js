const userName = prompt('What is your name?')
document.getElementById('welcomeMsg').innerText = `Welcome, ${userName}, let's play some Rock, Paper, Scissors!`

function getComputerChoice() {
  let num = Math.floor(Math.random() * 3);
  if (num === 0) {
    return "rock";
  } else if (num === 1) {
    return "paper";
  } else if (num === 2) {
    return "scissors";
  } else {
    return "error";
  }
}

function playGame(userChoice) {
  let computerChoice = getComputerChoice()

  if (userChoice === computerChoice) {
    console.log("Tie!");
  }
  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      console.log("Computer Won!");
    } else if (computerChoice === "scissors") {
      console.log("You Won!");
    }
  }
  if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      console.log("Computer Won!");
    } else if (computerChoice === "rock") {
      console.log("You Won!");
    } 
  }
  if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      console.log("Computer Won!");
    } else if (computerChoice === "paper") {
      console.log("You Won!");
    } 
  }
}