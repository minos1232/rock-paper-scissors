function getComputerChoice(array) {
  let randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}
function getHumanChoice() {
  let userinput = prompt("enter ur choice");
  // return userinput;
  if (userinput.toLowerCase() === choices[0]) {
    return "rock";
  } else if (userinput.toLowerCase() === choices[1]) {
    return "paper";
  } else if (userinput.toLowerCase() === choices[2]) {
    return "scissors";
  } else {
    alert("enter a valid choice !");
    return getHumanChoice();
  }
}

function playgame(humanchoice, computerchoice) {
  let humanscore = 0;
  let computerscore = 0;
  for (i = 1; i < 6; i++) {
    if (
      (humanchoice === "rock" && computerchoice === "paper") ||
      (humanchoice === "paper" && computerchoice === "scissors") ||
      (humanchoice === "scissors" && computerchoice === "rock")
    ) {
      computerscore += 1;
      //return "computer wins round number ", i, " and You lose !";
      console.log(
        "human score is :",
        humanscore,
        "and computer score is",
        computerscore
      );
      if (i < 5) {
        humanchoice = getHumanChoice();
        computerchoice = getComputerChoice(choices);
      } else {
        break;
      }
    } else if (
      (humanchoice === "paper" && computerchoice === "rock") ||
      (humanchoice === "scissors" && computerchoice === "paper") ||
      (humanchoice === "rock" && computerchoice === "scissors")
    ) {
      humanscore += 1;
      //return "congrats ! you won";
      console.log(
        "human score is :",
        humanscore,
        "and computer score is",
        computerscore
      );
      if (i < 5) {
        humanchoice = getHumanChoice();
        computerchoice = getComputerChoice(choices);
      } else {
        break;
      }
    } else if (
      (humanchoice === "paper" && computerchoice === "paper") ||
      (humanchoice === "rock" && computerchoice === "rock") ||
      (humanchoice === "scissors" && computerchoice === "scissors")
    ) {
      //return "A draw!";
      console.log(
        "A draw ! human score is :",
        humanscore,
        "and computer score is",
        computerscore
      );
      if (i < 5) {
        humanchoice = getHumanChoice();
        computerchoice = getComputerChoice(choices);
      } else {
        break;
      }
    }
  }
  if (computerscore > humanscore) {
    return "computer wins and YOU lose";
  } else {
    return "Congratulations ! You win";
  }
}

let choices = ["rock", "paper", "scissors"];
let computerchoice = getComputerChoice(choices);
let humanchoice = getHumanChoice();
console.log(playgame(humanchoice, computerchoice));
