function getComputerChoice() {
    let rand = Math.floor(Math.random()*3);
    switch(rand){
        case 0: return "rock";
        break;
        case 1: return "paper";
        break;
        case 2: return "scissors";
        break;
        default: return "Error";
    }
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();

    if(playerSelection === "rock"){
        if(computerSelection === "rock"){
            return "Draw! Rock vs Rock";
        } else if(computerSelection === "paper"){
            return "You lost! Paper beats rock";
        } else if(computerSelection === "scissors"){
            return "You Won! Rock beats scissors";
        } else {
            throw new Error("ERROR");
        }
    }

    if(playerSelection === "paper"){
        if(computerSelection === "paper"){
            return "Draw! Paper vs Paper";
        } else if(computerSelection === "rock"){
            return "You win! Paper beats rock";
        } else if(computerSelection === "scissors"){
            return "You Lost! Scissors beats paper";
        } else {
            throw new Error("ERROR");
        }
    }

    if(playerSelection === "scissors"){
        if(computerSelection === "scissors"){
            return "Draw! scissors vs scissors";
        } else if(computerSelection === "rock"){
            return "You Lost! Rock beats Scissors";
        } else if(computerSelection === "paper"){
            return "You Won! Scissors beats paper";
        } else {
            throw new Error("ERROR");
        }
    }

}

comp = getComputerChoice();
player = prompt("Enter rock paper or scissors");
console.log(comp);
console.log(player);
console.log(playRound(player,comp));