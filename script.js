function getComputerChoice(array) {
  let randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

window.addEventListener("DOMContentLoaded", (event) => {
  function rockChoiceRound() {
    while (round < 5) {
      round += 1;
      if (computerChoice == "paper") {
        roundResult.textContent = "Round " + round + ": u lost.";
        computerScore += 1;
      } else if (computerChoice == "scissors") {
        roundResult.textContent = "Round " + round + ": u won.";
        humanScore += 1;
      } else roundResult.textContent = "Round " + round + ": a draw.";
      yourScore.textContent = humanScore;
      hisScore.textContent = computerScore;
      break;
    }
  }

  function paperChoiceRound() {
    while (round < 5) {
      round += 1;
      if (computerChoice == "scissors") {
        roundResult.textContent = "Round " + round + ": u lost.";
        computerScore += 1;
      } else if (computerChoice == "rock") {
        roundResult.textContent = "Round " + round + ": u won.";
        humanScore += 1;
      } else roundResult.textContent = "Round " + round + ": a draw.";
      yourScore.textContent = humanScore;
      hisScore.textContent = computerScore;
      break;
    }
  }

  function scissorsChoiceRound() {
    while (round < 5) {
      round += 1;
      if (computerChoice == "paper") {
        roundResult.textContent = "Round " + round + ": u won.";
        humanScore += 1;
      } else if (computerChoice == "rock") {
        roundResult.textContent = "Round " + round + ": u lost.";
        computerScore += 1;
      } else roundResult.textContent = "Round " + round + ": a draw.";
      yourScore.textContent = humanScore;
      hisScore.textContent = computerScore;
      break;
    }
  }

  let round = 0;
  let humanScore = 0;
  let computerScore = 0;

  let choices = ["rock", "paper", "scissors"];
  let computerChoice = getComputerChoice(choices);

  const humanChoice = document.querySelectorAll("button");
  const yourScore = document.querySelector(".humanScore");
  const hisScore = document.querySelector(".computerScore");
  const roundResult = document.querySelector(".resultText");

  humanChoice[0].addEventListener("click", scissorsChoiceRound);
  humanChoice[1].addEventListener("click", rockChoiceRound);
  humanChoice[2].addEventListener("click", paperChoiceRound);
});
