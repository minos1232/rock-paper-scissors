function getComputerChoice(array) {
  let randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

window.addEventListener("DOMContentLoaded", (event) => {
  function rockChoiceRound() {
    while (round < 5) {
      computerChoice = getComputerChoice(choices);
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
      if (round == 5 && humanScore > computerScore)
        winner.textContent = "Congratulations ! the winner of the game is you.";
      else if (round == 5 && computerScore > humanScore)
        winner.textContent = "You lost the game! Better luck next time.";
      else if (round == 5 && computerScore == humanScore)
        winner.textContent = "The game finished with a draw.";
      break;
    }
  }

  function paperChoiceRound() {
    while (round < 5) {
      computerChoice = getComputerChoice(choices);
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
      if (round == 5 && humanScore > computerScore)
        winner.textContent = "Congratulations ! the winner of the game is you.";
      else if (round == 5 && computerScore > humanScore)
        winner.textContent = "You lost the game! Better luck next time.";
      else if (round == 5 && computerScore == humanScore)
        winner.textContent = "The game finished with a draw.";
      break;
    }
  }

  function scissorsChoiceRound() {
    while (round < 5) {
      computerChoice = getComputerChoice(choices);
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
      if (round == 5 && humanScore > computerScore)
        winner.textContent = "Congratulations ! the winner of the game is you.";
      else if (round == 5 && computerScore > humanScore)
        winner.textContent = "You lost the game! Better luck next time.";
      else if (round == 5 && computerScore == humanScore)
        winner.textContent = "The game finished with a draw.";
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
  const winner = document.querySelector(".winner");

  humanChoice[0].addEventListener("click", scissorsChoiceRound);
  humanChoice[1].addEventListener("click", rockChoiceRound);
  humanChoice[2].addEventListener("click", paperChoiceRound);
  humanChoice[3].addEventListener("click", () => {
    roundResult.textContent = "Select a choice to start a game of 5 rounds.";
    round = 0;
    humanScore = 0;
    computerScore = 0;
    yourScore.textContent = 0;
    hisScore.textContent = 0;
    winner.textContent = "";
  });
});
