const ROCK = 0;
const PAPER = 1;
const SCISSORS = 2;

// this must ALWAYS be lowercase
let rockStr = "rock";
let paperStr = "paper";
let scissorsStr = "scissors";
if (rockStr.toLocaleLowerCase() !== rockStr ||
  paperStr.toLocaleLowerCase() !== paperStr ||
  scissorsStr.toLocaleLowerCase() !== scissorsStr) {
  console.error("The strings must be always lowercase");
  throw EvalError("choices must be lowercase");
}
// Capitalize only the first letter of the str
function capitalize(str) {
  let firstLetterCapitalized;

  firstLetterCapitalized = str[0].toUpperCase();
  return (firstLetterCapitalized + str.substr(1));
}
// Normalize the selection based on the strings given
function normalizeSelection(selection) {
  if (!selection)
    return null;
  selection = selection.toLowerCase().trim();

  if (selection === rockStr)
    return ROCK;
  else if (selection === paperStr)
    return PAPER;
  else if (selection === scissorsStr)
    return SCISSORS;
  return null;
}
// Randomly return either "Rock", "Paper" or "Scissors"
function getComputerChoice() {
  let choice = parseInt(Math.random() * 3, 10);
  switch (choice) {
    case ROCK :
      return capitalize(rockStr);
    case PAPER :
      return capitalize(paperStr);
    case SCISSORS:
    default :
      return capitalize(scissorsStr);
  }
}
// Prompt for a valid input
function getPlayerChoice() {
  let choice;
  while (normalizeSelection(choice) === null) {
    choice = prompt(`Please enter your choice [${capitalize(rockStr)}, ${capitalize(paperStr)}, ${capitalize(scissorsStr)}]: `);
  }
  return choice;
}
/**
 * Rock -X-> Paper
 * Rock ---> Scissors
 * 
 * Paper ---> Rock
 * Paper -X-> Scissors
 * 
 * Scissors ---> Paper
 * Scissors -x-> Rock
 * 
 *     1
 *   /   \
 *  2     3
 *    --- 
 */
function winOrLose(mySelection, vsSelection) {
  let myNormalizedSelection, vsNormalizedSelection;

  myNormalizedSelection = normalizeSelection(mySelection);
  vsNormalizedSelection = normalizeSelection(vsSelection);
  if (myNormalizedSelection === vsNormalizedSelection)
    return null;
  switch (myNormalizedSelection) {
    case ROCK :
      return vsNormalizedSelection === SCISSORS;
    case PAPER :
      return vsNormalizedSelection === ROCK;
    case SCISSORS :
      return vsNormalizedSelection === PAPER;
    default :
      return false
  }
}
// Play a round and return a statement
function playRound(playerSelection, computerSelection) {
  let playerNormalizedSelection, computerNormalizedSelection;
  let win;

  playerNormalizedSelection = normalizeSelection(playerSelection);
  computerNormalizedSelection = normalizeSelection(computerSelection);
  if (playerNormalizedSelection === null || computerNormalizedSelection === null)
    return "Wrong parameters";
  if (playerNormalizedSelection === computerNormalizedSelection)
    return "It's a tie!";
  win = winOrLose(playerSelection, computerSelection);
  return (`You ${win ? "Win" : "Lose"}! ${win ? capitalize(playerSelection) : capitalize(computerSelection)} beats ${win ? capitalize(computerSelection) : capitalize(playerSelection)}`);
}
// Play 5 rounds, return the result and keep the score
function game() {
  let computerScore = 0;
  let playerScore = 0;
  let computerChoice;
  let playerChoice;

  for (let i = 0; i < 5; ++i) {
    playerChoice = getPlayerChoice();
    computerChoice = getComputerChoice();
    console.log(playRound(playerChoice, computerChoice));
    if (winOrLose(playerChoice, computerChoice)) {
      playerScore++;
    } else if (winOrLose(playerChoice, computerChoice) !== null) {
      computerScore++;
    }
    console.log(`Player (${playerScore}) | Computer (${computerScore})`);
  }
  console.log(`The winner is: ${ playerScore > computerScore ? "Player" : computerScore > playerScore ? "Computer" : "None, it's a tie"}!`)
}

game();
