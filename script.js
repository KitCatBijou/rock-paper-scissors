let playerScore = 0;
let computerScore = 0;
let rounds = 5;

function getComputerChoice() {
    const randomInt = Math.floor(Math.random() * 3) + 1;
    
    if (randomInt === 1) {
        return 'rock';
    }
    else if (randomInt === 2) {
        return 'paper';
    }
    else {        
        return 'scissors';
    }
}

function getHumanChoice() {
    const choice = prompt("Enter Rock, Paper, or Scissors:").toLowerCase();
    return choice;
}

function playRound(playerSelection, computerSelection) {
    console.log("Computer's choice: " + computerSelection);
    console.log("Your choice: " + playerSelection);

    if (playerSelection === computerSelection) {
        console.log("It's a tie!");
    } else if ((playerSelection === 'rock' && computerSelection === 'scissors') ||
               (playerSelection === 'paper' && computerSelection === 'rock') ||
               (playerSelection === 'scissors' && computerSelection === 'paper')) {
        playerScore++;
        console.log(`You win!`);
    } else {
        computerScore++;
        console.log(`You lose!`);
    }
    console.log(`Current Score - You: ${playerScore}, Computer: ${computerScore}`);
    rounds--;
}

function playGame() {
    playRound(getHumanChoice(), getComputerChoice());
}

function playGameLoop() {
    while (rounds > 0) {
        playGame();
    }
}
