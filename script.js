let playerPointCounter = 0;
let computerPointCounter = 0;
const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
const container = document.querySelector("#container");
const outcomeDiv = document.querySelector(".outcome");
const playerScoreSpan = document.querySelector(".player-score");
const computerScoreSpan = document.querySelector(".computer-score");

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

function playRound(playerSelection, computerSelection) {
    if (playerSelection == "Rock") {
        if (computerSelection == "Rock") {
            const p = document.createElement("p");
            p.innerText = "It's a tie! Rock ties Rock";
            outcomeDiv.appendChild(p);
        }
        else if (computerSelection == "Paper") {
            computerPointCounter++;
            const p = document.createElement("p");
            p.innerText = "You Lose! Paper beats Rock";
            outcomeDiv.appendChild(p);
        }
        else if (computerSelection = "Scissors") {
            playerPointCounter++;
            const p = document.createElement("p");
            p.innerText = "You Win! Rock beats Scissors";
            outcomeDiv.appendChild(p);
        }
    }
    else if (playerSelection == "Paper") {
        if (computerSelection == "Rock") {
            playerPointCounter++;
            const p = document.createElement("p");
            p.innerText = "You Win! Paper beats Rock";
            outcomeDiv.appendChild(p);
        }
        else if (computerSelection == "Paper") {
            const p = document.createElement("p");
            p.innerText = "It's a tie! Paper ties Paper";
            outcomeDiv.appendChild(p);
        }
        else if (computerSelection = "Scissors") {
            computerPointCounter++;
            const p = document.createElement("p");
            p.innerText = "You Lose! Scissors beats Paper";
            outcomeDiv.appendChild(p);
        }
    }
    else if (playerSelection == "Scissors") {
        if (computerSelection == "Rock") {
            computerPointCounter++;
            const p = document.createElement("p");
            p.innerText = "You Lose! Rock beats Scissors";
            outcomeDiv.appendChild(p);
        }
        else if (computerSelection == "Paper") {
            playerPointCounter++;
            const p = document.createElement("p");
            p.innerText = "You Win! Scissors beats Paper";
            outcomeDiv.appendChild(p);
        }
        else if (computerSelection = "Scissors") {
            const p = document.createElement("p");
            p.innerText = "It's a tie! Scissors ties Scissors";
            outcomeDiv.appendChild(p);
        }
    }
    else {
        result = "Error";
        const p = document.createElement("p");
            p.innerText = "Error: Invalid move, please choose Rock, Paper, or Scissors.";
            outcomeDiv.appendChild(p);
    }
}

const checkForWinner = (playerPointCounter, computerPointCounter) => {
    console.log("1 ", playerPointCounter, "2 ", computerPointCounter);
    if (playerPointCounter === 5) {
        const h2 = document.createElement("h2");
        h2.classList.add("player-won");
        h2.innerText = `You win the game ${playerPointCounter} to ${computerPointCounter}!`;
        outcomeDiv.append(h2);
    }
    else if (computerPointCounter === 5) {
        const h2 = document.createElement("h2");
        h2.classList.add("computer-won");
        h2.innerText = `You lost the game ${playerPointCounter} to ${computerPointCounter}...`;
        outcomeDiv.append(h2);
    }
}

const updateScores = (playerPointCounter, computerPointCounter) => {
    playerScoreSpan.innerText = `You:${playerPointCounter}`;
    computerScoreSpan.innerText = `Computer:${computerPointCounter}`;
}

rockButton.addEventListener("click", () => {
    const computerSelection = getComputerChoice();
    const playerSelection = "Rock";
    playRound(playerSelection, computerSelection);
    updateScores(playerPointCounter, computerPointCounter);
    checkForWinner(playerPointCounter, computerPointCounter);
})
paperButton.addEventListener("click", () => {
    const computerSelection = getComputerChoice();
    const playerSelection = "Paper";
    playRound(playerSelection, computerSelection);
    updateScores(playerPointCounter, computerPointCounter);
    checkForWinner(playerPointCounter, computerPointCounter);
})
scissorsButton.addEventListener("click", () => {
    const computerSelection = getComputerChoice();
    const playerSelection = "Scissors";
    playRound(playerSelection, computerSelection);
    updateScores(playerPointCounter, computerPointCounter);
    checkForWinner(playerPointCounter, computerPointCounter);
})
/*
function game() {

    while (playerPointCounter < 5 && computerPointCounter < 5) {
        
        buttons.forEach((button) => {
            button.addEventListener("click", (e) => {
                playerSelection = e.target.textContent;
                //resultsDisplay.textContent = playRound();
                console.log(playRound())
            })
            }
        );
        

        if (result == "Win") {
            playerPointCounter = playerPointCounter + 1;
        }
        else if (result == "Loss") {
            computerPointCounter = computerPointCounter + 1;
        }
        
        else if (playerPointCounter == 5) {
            finalAnnouncement.textContent = "You Win the Game!";
        }
        else if (computerPointCounter == 5) {
            finalAnnouncement.textContent = "You Lose the Game...";
        }
        
        runningScoreDisplay.textContent = "Score: You: " + playerPointCounter + " Computer: " + computerPointCounter;
    }
}
*/