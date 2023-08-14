function getComputerChoice() {
    let rand = Math.floor(Math.random()*3);
    switch(rand){
        case 0: 
        compChoiceDiv.innerHTML = `<img src="./resources/rock.png">`;
        return "rock";
        break;
        case 1: 
        compChoiceDiv.innerHTML = `<img src="./resources/paper.png">`;
        return "paper";
        break;
        case 2: 
        compChoiceDiv.innerHTML = `<img src="./resources/scissors.png">`;
        return "scissors";
        break;
        default: 
        compChoiceDiv.innerHTML = ``;
        return "Error";
    }
}

function playRound(playerSelection){
    playerSelection = playerSelection.toLowerCase();
    let computerSelection = getComputerChoice();
    let result = "";


    if(playerSelection === "rock"){
        if(computerSelection === "rock"){
            result = "Draw! Rock vs Rock";
        } else if(computerSelection === "paper"){
            compScore++;
            compScoreDiv.innerText = compScore;
            result = "Player lost! Computer Won! Paper beats rock";
            
        } else if(computerSelection === "scissors"){
            playerScore++;
            playerScoreDiv.innerText = playerScore;
            result = "Player Won! Computer lost! Rock beats scissors";
            
        } else {
            throw new Error("ERROR");
        }


    }

    if(playerSelection === "paper"){
        if(computerSelection === "paper"){
            result = "Draw! Paper vs Paper";
        } else if(computerSelection === "rock"){
            playerScore++;
            playerScoreDiv.innerText = playerScore;
            result = "Player won! Computer lost! Paper beats rock";
            
        } else if(computerSelection === "scissors"){
            compScore++;
            compScoreDiv.innerText = compScore;
            result = "Player Lost! Computer Wins! Scissors beats paper";
            
        } else {
            throw new Error("ERROR");
        }
    }

    if(playerSelection === "scissors"){
        if(computerSelection === "scissors"){
            result = "Draw! scissors vs scissors";
        } else if(computerSelection === "rock"){
            compScore++;
            compScoreDiv.innerText = compScore;
            result = "Player Lost! Computer won! Rock beats Scissors";
            
        } else if(computerSelection === "paper"){
            playerScore++;
            playerScoreDiv.innerText = playerScore;
            result = "Player Won! Computer Lost! Scissors beats paper";
            
        } else {
            throw new Error("ERROR");
        }
    }

    resultDiv.innerText = result;

    if(playerScore===5 || compScore===5){
    
        const winner = playerScore > compScore ? "Player wins!" : "Computer Wins!";
        overallResultDiv.textContent = winner;
        rockButton.removeEventListener("click", rockEventHandler);
        paperButton.removeEventListener("click", paperEventHandler);
        scissorButton.removeEventListener("click", scissorEventHandler);
    }   

}

let playerScore = 0;
let compScore = 0;


const playerScoreDiv = document.querySelector(".playerScore");
const compScoreDiv = document.querySelector(".compScore");

const playersChoiceDiv = document.querySelector(".playerChoiceImg");
const compChoiceDiv = document.querySelector(".compChoiceImg");
const resultDiv = document.querySelector(".roundResults");

const rockButton = document.querySelector("#rock");
const overallResultDiv = document.querySelector(".overallResult");

const rockEventHandler = function(){
    playRound("rock");
    playersChoiceDiv.innerHTML = `<img src="./resources/rock.png">`;
}

const paperEventHandler = function(){
    playRound("paper");
    playersChoiceDiv.innerHTML = `<img src="./resources/paper.png">`;
}

const scissorEventHandler = function(){
    playRound("scissors");
    playersChoiceDiv.innerHTML = `<img src="./resources/scissors.png">`;
}

rockButton.addEventListener("click", rockEventHandler);

const paperButton = document.querySelector("#paper");
paperButton.addEventListener("click", paperEventHandler);

const scissorButton = document.querySelector("#scissors");
scissorButton.addEventListener("click", (scissorEventHandler));

