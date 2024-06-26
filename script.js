function getComputerChoice(array) {
  let randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

function getHumanChoice() {
  let userInput = prompt("enter ur choice");
  if (userInput.toLowerCase() === choices[0]) {
    return "rock";
  } else if (userInput.toLowerCase() === choices[1]) {
    return "paper";
  } else if (userInput.toLowerCase() === choices[2]) {
    return "scissors";
  } else {
    alert("enter a valid choice !");
    return getHumanChoice();
  }
}

function playGame(humanChoice, computerChoice) {
  let humanScore = 0;
  let computerScore = 0;
  for (i = 1; i < 6; i++) {
    if (
      //computer win case
      (humanChoice === "rock" && computerChoice === "paper") ||
      (humanChoice === "paper" && computerChoice === "scissors") ||
      (humanChoice === "scissors" && computerChoice === "rock")
    ) {
      computerScore += 1;
      console.log(
        "computer wins this round! human score is :",
        humanScore,
        "and computer score is",
        computerScore
      );

      if (i < 5) {
        humanChoice = getHumanChoice();
        computerChoice = getComputerChoice(choices);
      } else {
        break;
      }
    } else if (
      //human win case
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper") ||
      (humanChoice === "rock" && computerChoice === "scissors")
    ) {
      humanScore += 1;
      console.log(
        "human wins this round! human score is :",
        humanScore,
        "and computer score is",
        computerScore
      );

      if (i < 5) {
        humanChoice = getHumanChoice();
        computerChoice = getComputerChoice(choices);
      } else {
        break;
      }
    } else if (
      //draw case
      (humanChoice === "paper" && computerChoice === "paper") ||
      (humanChoice === "rock" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "scissors")
    ) {
      console.log(
        "A draw ! human score is :",
        humanScore,
        "and computer score is",
        computerScore
      );

      if (i < 5) {
        humanChoice = getHumanChoice();
        computerChoice = getComputerChoice(choices);
      } else {
        break;
      }
    }
  }
  if (computerScore > humanScore) {
    return "computer wins and YOU lose";
  } else {
    return "Congratulations ! You win";
  }
}

let choices = ["rock", "paper", "scissors"];
let computerChoice = getComputerChoice(choices);
let humanChoice = getHumanChoice();
console.log(playGame(humanChoice, computerChoice));
