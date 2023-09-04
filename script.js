function getComputerChoice() {
    randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        computerSelection = "Rock";
        return "Rock";
    }
    else if (randomNumber === 1) {
        computerSelection = "Paper";
        return "Paper";
    }
    else {
        computerSelection = "Scissors";
        return "Scissors";
    }
}

let result = "";

function playRockPaperScissors() {
    computerSelection = getComputerChoice();

    if (playerSelection == "Rock") {
        if (computerSelection == "Rock") {
            result = "Tie";
            return "It's a tie! Rock ties Rock";
        }
        else if (computerSelection == "Paper") {
            result = "Loss";
            return "You Lose! Paper beats Rock";
        }
        else if (computerSelection = "Scissors") {
            result = "Win";
            return "You Win! Rock beats Scissors";
        }
    }
    else if (playerSelection == "Paper") {
        if (computerSelection == "Rock") {
            result = "Win";
            return "You Win! Paper beats Rock";
        }
        else if (computerSelection == "Paper") {
            result = "Tie";
            return "It's a tie! Paper ties Paper";
        }
        else if (computerSelection = "Scissors") {
            result = "Loss";
            return "You Lose! Scissors beats Paper";
        }
    }
    else if (playerSelection == "Scissors") {
        if (computerSelection == "Rock") {
            result = "Loss";
            return "You Lose! Rock beats Scissors";
        }
        else if (computerSelection == "Paper") {
            result = "Win";
            return "You Win! Scissors beats Paper";
        }
        else if (computerSelection = "Scissors") {
            result = "Tie";
            return "It's a tie! Scissors ties Scissors";
        }
    }
    else {
        result = "Error";
        return "Error: Invalid move, please choose Rock, Paper, or Scissors.";
    }
}

function game() {
    let playerPointCounter;
    let computerPointCounter;

    while (playerPointCounter < 5 && computerPointCounter < 5) {
        
        resultsDisplay.textContent = playRockPaperScissors();

        if (result == "Win") {
            playerPointCounter = playerPointCounter + 1;
        }
        else if (result == "Loss") {
            computerPointCounter = computerPointCounter + 1;
        }
        
        if (playerPointCounter == 5) {
            finalAnnouncement.textContent = "You Win the Game!";
        }
        else if (computerPointCounter == 5) {
            finalAnnouncement.textContent = "You Lose the Game...";
        }
        
        runningScoreDisplay.textContent = "Score: You: " + playerPointCounter + " Computer: " + computerPointCounter;
        
    }
}

function getButtonClicked(e) {
    playerSelection = e.target.textContent;
    game();
}

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", getButtonClicked)
    }
    );

const resultsDisplay = document.querySelector("#resultsDisplay");

const runningScoreDisplay = document.querySelector("#runningScoreDisplay");
const finalAnnouncement = document.querySelector("#finalAnnouncement");

