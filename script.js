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

let choices = ["rock", "paper", "scissors"];
let computerChoice = getComputerChoice(choices);
let humanChoice = getHumanChoice();
