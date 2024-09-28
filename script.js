let userRock = document.querySelector("#rock");
let userPaper = document.querySelector("#paper");
let userScissor = document.querySelector("#scissors");

let result = document.querySelector("#resultText");
let computerChoice = document.querySelector("#computerChoice");
let numOfWins = document.querySelector("#wins");
let numOfLoses = document.querySelector("#loses");
let numOfDraws = document.querySelector("#draws");
let body = document.querySelector("body");


let userValue = null;
let wins = 0;
let loses = 0;
let draws = 0;

const startGame = () => {

    userRock.onclick = () => {
        userValue = 0;
        resultFunc();
    };

    userPaper.onclick = () => {
        userValue = 1;
        resultFunc();
    };

    userScissor.onclick = () => {
        userValue = 2;
        resultFunc();
    };
};

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * 3); // Random number between 0 and 2
    return randomIndex;
}

const resultFunc = () => {

    let randomValue = getComputerChoice();

    console.log(randomValue);
    console.log(userValue);
    
    if (
        (randomValue == 0 && userValue == 0) || 
        (randomValue == 1 && userValue == 1) || 
        (randomValue == 2 && userValue == 2)
    ) {
        result.innerText = "Draw";
        result.style.color = "orange";
        body.style.backgroundColor = "Orange";
        draws++;

        if(randomValue==0){
            computerChoice.innerText = "Computer: Rock";
        }
        else if(randomValue==1){
            computerChoice.innerText = "Computer: Paper";
        }
        else if(randomValue==2){
            computerChoice.innerText = "Computer: Scissor";
        }

        numOfWins.innerText = `Number of Wins: ${wins}`;
        numOfLoses.innerText = `Number of Loses: ${loses}`;
        numOfDraws.innerText = `Number of Draws: ${draws}`; 
    } 

    else if (
        (randomValue == 0 && userValue == 1) || // Rock (0) loses to Paper (1)
        (randomValue == 1 && userValue == 2) || // Paper (1) loses to Scissors (2)
        (randomValue == 2 && userValue == 0)    // Scissors (2) loses to Rock (0)
    ) {
        result.innerText = "You win";
        result.style.color = "green";
        body.style.backgroundColor = "green";
        wins++;

        if(randomValue==0){
            computerChoice.innerText = "Computer: Rock";
        }
        else if(randomValue==1){
            computerChoice.innerText = "Computer: Paper";
        }
        else if(randomValue==2){
            computerChoice.innerText = "Computer: Scissor";
        }

        numOfWins.innerText = `Number of wins: ${wins}`;
        numOfLoses.innerText = `Number of Loses: ${loses}`;
        numOfDraws.innerText = `Number of Draws: ${draws}`;
    } 

    else {
        result.innerText = "You Lose";
        result.style.color = "red";
        body.style.backgroundColor = "red";
        loses++;

        if(randomValue==0){
            computerChoice.innerText = "Computer: Rock";
        }
        else if(randomValue==1){
            computerChoice.innerText = "Computer: Paper";
        }
        else if(randomValue==2){
            computerChoice.innerText = "Computer: Scissor";
        }

        numOfWins.innerText = `Number of wins: ${wins}`;
        numOfLoses.innerText = `Number of Loses: ${loses}`;
        numOfDraws.innerText = `Number of Draws: ${draws}`;
    }
};

startGame();