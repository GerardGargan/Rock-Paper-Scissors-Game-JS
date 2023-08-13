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

function playRound(playerSelection){
    playerSelection = playerSelection.toLowerCase();
    let computerSelection = getComputerChoice();



    if(playerSelection === "rock"){
        if(computerSelection === "rock"){
            return "Draw! Rock vs Rock";
        } else if(computerSelection === "paper"){
            compScore++;
            compScoreDiv.innerText = compScore;
            return "Player lost! Computer Won! Paper beats rock";
            
        } else if(computerSelection === "scissors"){
            playerScore++;
            playerScoreDiv.innerText = playerScore;
            return "Player Won! Computer lost! Rock beats scissors";
            
        } else {
            throw new Error("ERROR");
        }
    }

    if(playerSelection === "paper"){
        if(computerSelection === "paper"){
            return "Draw! Paper vs Paper";
        } else if(computerSelection === "rock"){
            playerScore++;
            playerScoreDiv.innerText = playerScore;
            return "Player won! Computer lost! Paper beats rock";
            
        } else if(computerSelection === "scissors"){
            compScore++;
            compScoreDiv.innerText = compScore;
            return "Player Lost! Computer Wins! Scissors beats paper";
            
        } else {
            throw new Error("ERROR");
        }
    }

    if(playerSelection === "scissors"){
        if(computerSelection === "scissors"){
            return "Draw! scissors vs scissors";
        } else if(computerSelection === "rock"){
            compScore++;
            compScoreDiv.innerText = compScore;
            return "Player Lost! Computer won! Rock beats Scissors";
            
        } else if(computerSelection === "paper"){
            playerScore++;
            playerScoreDiv.innerText = playerScore;
            return "Player Won! Computer Lost! Scissors beats paper";
            
        } else {
            throw new Error("ERROR");
        }
    }

    

}

let playerScore = 0;
let compScore = 0;

const resultsDiv = document.querySelector(".gameResult");
const playerDiv = document.querySelector(".playerMove");
const compDiv = document.querySelector(".compMove");
const playerScoreDiv = document.querySelector(".playerScore");
const compScoreDiv = document.querySelector(".compScore");
const currentRoundDiv = document.querySelector(".currentRound");

const rockButton = document.querySelector("#rock");

rockButton.addEventListener("click", (e) => {
    currentRoundDiv.innerText = playRound("rock");
});

const paperButton = document.querySelector("#paper");
paperButton.addEventListener("click", (e) => {
    currentRoundDiv.innerText = playRound("paper");
});

const scissorButton = document.querySelector("#scissors");
scissorButton.addEventListener("click", (e) =>{
    currentRoundDiv.innerText = playRound("scissors");
})

