function getComputerChoice(array) {
  let randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

let choices = ["rock", "paper", "scissors"];
let computerChoice = getComputerChoice(choices);
