const userName = prompt("What is your name?");
document.getElementById(
  "welcomeMsg"
).innerText = `Welcome, ${userName}, let's play some Rock, Paper, Scissors!`;

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

let userScore = 0;
let computerScore = 0;
let modal1 = document.getElementById("modal1");
let modal2 = document.getElementById("modal2");
let modal3 = document.getElementById("modal3");
let modal4 = document.getElementById("modal4");
let modal5 = document.getElementById("modal5");
let modal6 = document.getElementById("modal6");

function computerWins() {
  computerScore++;
}

function userWins() {
  userScore++;
}

function unshake() {
  document.getElementById("imgChange1").classList.remove("shake1");
  document.getElementById("imgChange2").classList.remove("shake2");
  document.getElementById("imgChange1sm").classList.remove("shake1");
  document.getElementById("imgChange2sm").classList.remove("shake2");
}

function playGame(userChoice) {
  document.getElementById("imgChange1").classList.add("shake1");
  document.getElementById("imgChange2").classList.add("shake2");
  document.getElementById("imgChange1").src = "imgs/Neutral.png";
  document.getElementById("imgChange2").src = "imgs/Neutral.png";
  document.getElementById("imgChange1sm").classList.add("shake1");
  document.getElementById("imgChange2sm").classList.add("shake2");
  document.getElementById("imgChange1sm").src = "imgs/Neutral.png";
  document.getElementById("imgChange2sm").src = "imgs/Neutral.png";

  setTimeout(unshake, 1500);
  setTimeout(function () {
    let computerChoice = getComputerChoice();

    if (userChoice === computerChoice) {
      console.log("Tie!");
      if (computerChoice === "rock") {
        document.getElementById("imgChange2").src = "imgs/Rock.png";
        document.getElementById("imgChange2sm").src = "imgs/Rock.png";
      }
      if (computerChoice === "paper") {
        document.getElementById("imgChange2").src = "imgs/Paper.png";
        document.getElementById("imgChange2sm").src = "imgs/Paper.png";
      }
      if (computerChoice === "scissors") {
        document.getElementById("imgChange2").src = "imgs/Scissors.png";
        document.getElementById("imgChange2sm").src = "imgs/Scissors.png";
      }
    }
    if (userChoice === "rock") {
      document.getElementById("imgChange1").src = "imgs/Rock.png";
      document.getElementById("imgChange1sm").src = "imgs/Rock.png";
      if (computerChoice === "paper") {
        console.log("Computer Won!");
        computerWins();
        document.getElementById("imgChange2").src = "imgs/Paper.png";
        document.getElementById("imgChange2sm").src = "imgs/Paper.png";
      } else if (computerChoice === "scissors") {
        console.log("You Won!");
        userWins();
        document.getElementById("imgChange2").src = "imgs/Scissors.png";
        document.getElementById("imgChange2sm").src = "imgs/Scissors.png";
      }
    }
    if (userChoice === "paper") {
      document.getElementById("imgChange1").src = "imgs/Paper.png";
      document.getElementById("imgChange1sm").src = "imgs/Paper.png";
      if (computerChoice === "scissors") {
        console.log("Computer Won!");
        computerWins();
        document.getElementById("imgChange2").src = "imgs/Scissors.png";
        document.getElementById("imgChange2sm").src = "imgs/Scissors.png";
      } else if (computerChoice === "rock") {
        console.log("You Won!");
        userWins();
        document.getElementById("imgChange2").src = "imgs/Rock.png";
        document.getElementById("imgChange2sm").src = "imgs/Rock.png";
      }
    }
    if (userChoice === "scissors") {
      document.getElementById("imgChange1").src = "imgs/Scissors.png";
      document.getElementById("imgChange1sm").src = "imgs/Scissors.png";
      if (computerChoice === "rock") {
        console.log("Computer Won!");
        computerWins();
        document.getElementById("imgChange2").src = "imgs/Rock.png";
        document.getElementById("imgChange2sm").src = "imgs/Rock.png";
      } else if (computerChoice === "paper") {
        console.log("You Won!");
        userWins();
        document.getElementById("imgChange2").src = "imgs/Paper.png";
        document.getElementById("imgChange2sm").src = "imgs/Paper.png";
      }
    }

    if (userScore === 1) {
      document.getElementById("ComputerHeart3").classList.add("hide");
      document.getElementById("ComputerHeart3sm").classList.add("hide");
    }
    if (userScore === 2) {
      document.getElementById("ComputerHeart2").classList.add("hide");
      document.getElementById("ComputerHeart2sm").classList.add("hide");
    }
    if (userScore === 3) {
      if (computerScore === 0) {
        modal1.style.display = "block";
      } else if (computerScore === 1) {
        modal2.style.display = "block";
      } else if (computerScore === 2) {
        modal3.style.display = "block";
      }
      document.getElementById("ComputerHeart1").classList.add("hide");
      document.getElementById("ComputerHeart1sm").classList.add("hide");
      console.log(`${userName} won the game!`);
      userScore = 0;
      computerScore = 0;
    }
    if (computerScore === 1) {
      document.getElementById("UserHeart3").classList.add("hide");
      document.getElementById("UserHeart3sm").classList.add("hide");
    }
    if (computerScore === 2) {
      document.getElementById("UserHeart2").classList.add("hide");
      document.getElementById("UserHeart2sm").classList.add("hide");
    }
    if (computerScore === 3) {
      if (userScore === 0) {
        modal4.style.display = "block";
      } else if (userScore === 1) {
        modal5.style.display = "block";
      } else if (userScore === 2) {
        modal6.style.display = "block";
      }
      document.getElementById("UserHeart1").classList.add("hide");
      document.getElementById("UserHeart1sm").classList.add("hide");
      console.log("Computer won the game!");
      userScore = 0;
      computerScore = 0;
    }

    console.log(userScore);
    console.log(computerScore);
  }, 1500);
}
