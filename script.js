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

function playRockPaperScissors(playerSelection, computerSelection) {
    computerSelection = getComputerChoice();
    playerSelection = prompt("Please choose Rock, Paper, or Scissors");
    
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();

    console.log(playerSelection);
    
    if (playerSelection == "Rock") {
        if (computerSelection == "Rock") {
            console.log("It's a tie! Rock ties Rock");
        }
        else if (computerSelection == "Paper") {
            console.log("You Lose! Paper beats Rock");
        }
        else if (computerSelection = "Scissors") {
            console.log("You Win! Rock beats Scissors");
        }
    }
    else if (playerSelection == "Paper") {
        if (computerSelection == "Rock") {
            console.log("You Win! Paper beats Rock");
        }
        else if (computerSelection == "Paper") {
            console.log("It's a tie! Paper ties Paper");
        }
        else if (computerSelection = "Scissors") {
            console.log("You Lose! Scissors beats Paper");
        }
    }
    else if (playerSelection == "Scissors") {
        if (computerSelection == "Rock") {
            console.log("You Lose! Rock beats Scissors");
        }
        else if (computerSelection == "Paper") {
            console.log("You Win! Scissors beats Paper");
        }
        else if (computerSelection = "Scissors") {
            console.log("It's a tie! Scissors ties Scissors");
        }
    }
    else {
        console.log("Error: Invalid move, please choose Rock, Paper, or Scissors.");
    }
}

playRockPaperScissors();