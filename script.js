const playerChoiceImg = document.getElementById("player-choice-img");
const computerChoiceImg = document.getElementById("computer-choice-img");
const resultDisplay = document.getElementById("result");
const buttonsContainer = document.querySelector(".buttons");

// Set initial computer's choice icon
let initialComputerChoice = getRandomChoice();
computerChoiceImg.src = "images/" + initialComputerChoice + "-sign.svg";

buttonsContainer.addEventListener("click", (e) => {
  const clickedButton = e.target.closest("button");
  if (clickedButton) {
    const userChoice = clickedButton.id;
    playerChoiceImg.src = "images/" + userChoice + "-btn-icon.svg";

    const computerChoice = getRandomChoice();
    computerChoiceImg.src = "images/" + computerChoice + "-sign.svg";

    // Determine the winner and update the result display
    const winner = determineWinner(userChoice, computerChoice);
    resultDisplay.textContent = winner;

    // Update initialComputerChoice after user makes a choice
    initialComputerChoice = computerChoice;
  }
});

function getRandomChoice() {
  const choices = ["rock", "paper", "scissor"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function determineWinner(player, computer) {
  if (player === computer) {
    return "It's a tie!";
  } else if (
    (player === "rock" && computer === "scissor") ||
    (player === "scissor" && computer === "paper") ||
    (player === "paper" && computer === "rock")
  ) {
    return "Player wins!";
  } else {
    return "Computer wins!";
  }
}
