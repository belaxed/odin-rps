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

function playRockPaperScissors(playerSelection, computerSelection) {
    computerSelection = getComputerChoice();
    playerSelection = prompt("Please choose Rock, Paper, or Scissors");
    
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();

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
    playerPointCounter = 0;
    computerPointCounter = 0;

    while (playerPointCounter < 5 && computerPointCounter < 5) {
        
        console.log(playRockPaperScissors());
        console.log(result);
        if (result == "Win") {
            playerPointCounter = playerPointCounter + 1;
        }
        else if (result == "Loss") {
            computerPointCounter = computerPointCounter + 1;
        }
        
        if (playerPointCounter == 5) {
            console.log("You Win the Game!");
        }
        else if (computerPointCounter == 5) {
            console.log("You Lose the Game...");
        }
        else {
            console.log("Score: You: " + playerPointCounter + " Computer: " + computerPointCounter);
        }
    }
}

game();