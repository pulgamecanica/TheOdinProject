const ROCK = 0;
const PAPER = 1;
const SCISSORS = 2;
let gameOptions = {
  loading: false,
  playerScore: 0,
  computerScore: 0,
  tiesScore: 0,
  themes: [
  {
    name: "Traditional",
    rockStr: "rock",
    paperStr: "paper",
    scissorsStr: "scissors",
    rockSvg: "rock",
    paperSvg: "paper",
    scissorsSvg: "scissors",
    rockIcon: "🪨",
    paperIcon: "🧻",
    scissorsIcon: "✂️"
  },
  {
    name: "Medieval",
    rockStr: "sword",
    paperStr: "bow",
    scissorsStr: "spear",
    rockSvg: "sword",
    paperSvg: "bow",
    scissorsSvg: "spear",
    rockIcon: "⚔️",
    paperIcon: "🏹",
    scissorsIcon: "🍢"
  },
  {
    name: "Natural",
    rockStr: "water",
    paperStr: "wind",
    scissorsStr: "fire",
    rockSvg: "water",
    paperSvg: "wind",
    scissorsSvg: "fire",
    rockIcon: "🌊",
    paperIcon: "🍃",
    scissorsIcon: "🔥"
  }
]};
/**
 * The strings bellow must be lowercase
 */
let rockStr;
let paperStr;
let scissorsStr;
let rockIcon;
let paperIcon;
let scissorsIcon;
const verifyOptions = () => {
  if (rockStr.toLocaleLowerCase() !== rockStr ||
  paperStr.toLocaleLowerCase() !== paperStr ||
  scissorsStr.toLocaleLowerCase() !== scissorsStr) {
    console.error("The strings must be always lowercase");
    throw EvalError("choices must be lowercase");
  }
};
function capitalize(str) {
  let firstLetterCapitalized;

  firstLetterCapitalized = str[0].toUpperCase();
  return (firstLetterCapitalized + str.substr(1));
}
// Helper to enable non sensitive case comparation
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
  if (playerNormalizedSelection === computerNormalizedSelection) {
    gameOptions.tiesScore++;
    return "It's a tie!";
  }
  win = winOrLose(playerSelection, computerSelection);
  if (win) gameOptions.playerScore++;
  else gameOptions.computerScore++;
  updateLeaderboardScores();
  return (`You ${win ? "Win" : "Lose"}! ${win ? capitalize(playerSelection) : capitalize(computerSelection)} beats ${win ? capitalize(computerSelection) : capitalize(playerSelection)}`);
}


const playRock = () => playRound(rockStr, getComputerChoice());
const playPaper = () => playRound(paperStr, getComputerChoice());
const playScissors = () => playRound(scissorsStr, getComputerChoice());

const readSVGFile = async (svgFile) => {
  const response = await fetch("images/" + svgFile + ".svg")
  return await response.text();
}
const gameArena = document.querySelector("#game-arena");
const addSVGToArena = async (svgFile) => {
  const svg = await readSVGFile(svgFile);
  if (!svg || !gameArena)
    return ;
  const option = document.createElement("button");
  option.classList.add("option");
  option.classList.add("animate__animated");
  option.classList.add("animate__bounceInDown");
  option.innerHTML = svg;
  gameArena.appendChild(option);
  return option;
}
async function setupLeaderboardIcon() {
  const leaderboardIcons = document.querySelectorAll(".icon-leaderboard");
  const leaderboardIconSvg = await readSVGFile("leaderboard");
 
  for (icon of leaderboardIcons) {
    icon.innerHTML = leaderboardIconSvg;
  }
}
const modalContainer = document.querySelector("#modal-container");
const modal = modalContainer.children[0];
const toggleModal = () => { if (modalContainer) modalContainer.classList.toggle("hidden"); };
function setupModal(argument) {
  const title = document.querySelector("#modal-tittle");
  title.textContent = rockIcon + paperIcon + scissorsIcon + " " + 
      rockStr + " " + paperStr + " " + scissorsStr;
  /**
   * selectorAll to change evry element which has the class
   */
  const rocks = document.querySelectorAll(".rock");
  const papers = document.querySelectorAll(".paper");
  const scissors = document.querySelectorAll(".scissors");

  for (rock of rocks) rock.textContent = rockIcon + " " + rockStr;
  for (paper of papers) paper.textContent = paperIcon + " " + paperStr;
  for (scissor of scissors) scissor.textContent = scissorsIcon + " " + scissorsStr;

  modalContainer.addEventListener("click", () => toggleModal(), false);
  /**
   * stopPropagation will prevent the window from closing when you click inside the modal
   */
  modal.addEventListener("click", (e) => e.stopPropagation(), false);
  updateLeaderboardScores();
}
const computerButton = document.querySelector("#computer-score-button");
const playerButton = document.querySelector("#player-score-button");
const tiesButton = document.querySelector("#ties-score-button");
function updateLeaderboardScores() {
  computerButton.textContent = gameOptions.computerScore;
  playerButton.textContent = gameOptions.playerScore;
  tiesButton.textContent = gameOptions.tiesScore;
}
const themes = document.querySelector("#themes");
function setupThemes() {
  for (let i = 0; i <  gameOptions.themes.length; ++i) {
    let option = document.createElement("button");
    option.classList.add("option");
    option.addEventListener("click", () => setupGame(gameOptions.themes[i]), false);
    option.textContent = gameOptions.themes[i].name;
    themes.appendChild(option);
  }
}
const gameStatus = document.querySelector("#game-status");
function updateLogGameStatus(status) {
  console.log(status);
  gameStatus.textContent = status;
}
async function setupGame(options) {
  if (!options || gameOptions.loading) return ;

  gameOptions.loading = true;
  gameArena.textContent = "";
  rockStr = options.rockStr;
  paperStr = options.paperStr;
  scissorsStr = options.scissorsStr;
  rockIcon = options.rockIcon;
  paperIcon = options.paperIcon;
  scissorsIcon = options.scissorsIcon;

  const rock = await addSVGToArena(options.rockSvg);
  const paper = await addSVGToArena(options.paperSvg);
  const scissors = await addSVGToArena(options.scissorsSvg);
  if (!rock || !paper || !scissors) {
    gameOptions.loading = false;
    throw "Missing SVG's";
  }
  rock.addEventListener("click", () => updateLogGameStatus(playRock()), false);
  paper.addEventListener("click", () => updateLogGameStatus(playPaper()), false);
  scissors.addEventListener("click", () => updateLogGameStatus(playScissors()), false);
  verifyOptions();
  setupModal();
  await setupLeaderboardIcon();
  gameOptions.loading = false;
}
setupThemes();
setupGame(gameOptions.themes[0]);
