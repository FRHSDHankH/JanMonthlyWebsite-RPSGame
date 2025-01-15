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

let userScore = 0
let computerScore = 0

function computerWins() {
  computerScore++
}

function userWins() {
  userScore++
}

function unshake() {
  document.getElementById('imgChange1').classList.remove('shake1')
  document.getElementById('imgChange2').classList.remove('shake2')
}

function playGame(userChoice) {
  document.getElementById('imgChange1').classList.add('shake1')
  document.getElementById('imgChange2').classList.add('shake2')

  let computerChoice = getComputerChoice()

  if (userChoice === computerChoice) {
    console.log("Tie!");
  }
  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      console.log("Computer Won!");
      computerWins()
    } else if (computerChoice === "scissors") {
      console.log("You Won!");
      userWins()
    }
  }
  if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      console.log("Computer Won!");
      computerWins()
    } else if (computerChoice === "rock") {
      console.log("You Won!");
      userWins()
    } 
  }
  if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      console.log("Computer Won!");
      computerWins()
    } else if (computerChoice === "paper") {
      console.log("You Won!");
      userWins()
    } 
  }
  
  if(userScore === 1) {
    document.getElementById('bigComputerHeart3').classList.add('hide')
  }
  if(userScore === 2) {
    document.getElementById('bigComputerHeart2').classList.add('hide')
  }
  if(userScore === 3) {
    document.getElementById('bigComputerHeart1').classList.add('hide')
  }
  if(computerScore === 1) {
    document.getElementById('bigUserHeart3').classList.add('hide')
  }
  if(computerScore === 2) {
    document.getElementById('bigUserHeart2').classList.add('hide')
  }
  if(computerScore === 3) {
    document.getElementById('bigUserHeart1').classList.add('hide')
  }

  console.log(userScore)
  console.log(computerScore)

  if(userScore === 3) {
    console.log(`${userName} won the game!`)
    userScore = 0
    computerScore = 0
  }

  if(computerScore === 3) {
    console.log('Computer won the game!')
    userScore = 0
    computerScore = 0
  }

  setTimeout(unshake, 1000)

}

