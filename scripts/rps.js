function getCpuChoice(){
    let choicenum = Math.floor(Math.random() * 3) + 1;
    if(choicenum == 1) return "Rock";
    if(choicenum == 2) return "Paper";
    if(choicenum == 3) return "Scissors";
}

function getResultString(playerChoice, cpuChoice, result){
    let p = playerChoice.toLowerCase();
    switch(result){
        case -2:
            return "Please enter rock paper or scissors.";
        case -1:
            return "You lose! " + cpuChoice + " beats " + p + "."; 
        case 0:
            return "Tie!";
        case 1:
            return "You win! " + p + " beats " + cpuChoice + ".";
    }
    return "switch didnt catch";        
}
function getWinner(playerChoice, cpuChoice){
    let p = playerChoice.toLowerCase();
    if(p == "rock"){
        switch(cpuChoice){
            case "Rock":
                return 0;
            case "Paper":
                return -1;
            case "Scissors":
                return 1;
        }
    }else if(p == "paper"){
        switch(cpuChoice){
            case "Rock":
                return 1;
            case "Paper":
                return 0;
            case "Scissors":
                return -1;
        }
    }else if(p == "scissors"){
        switch(cpuChoice){
            case "Rock":
                return -1;
            case "Paper":
                return 1;
            case "Scissors":
                return 0;
        }
    }
    else{
        return 0;
    }
    return 0;
}
function game(){
    let playerScore = 0;
    let cpuScore = 0;
    while (playerScore < 3 && cpuScore < 3){
        let playerChoice = prompt("Please enter your choice");
        let cpuChoice = getCpuChoice();
        let result = getWinner(playerChoice, cpuChoice);
        let message = getResultString(playerChoice, cpuChoice, result);
        if(result == -1) cpuScore++;
        if(result == 1) playerScore++;
        console.log(message);
        console.log("player score: " + playerScore);
        console.log("computer score: " + cpuScore);
    }
    if(playerScore >= 3) console.log("You win the Bo5!");
    if(cpuScore >= 3) console.log("You lose the Bo5  :(");
}
function logEvent(e){
    console.log(e.target.classList);
}
function playRound(e){
    let playerChoice = e.target.classList[0];
    let cpuChoice = getCpuChoice();
    let result = getWinner(playerChoice, cpuChoice);
    let message = getResultString(playerChoice, cpuChoice, result);
    if(result == -1) cpuScore++;
    if(result == 1) playerScore++;
    updateScoreDisplay();
    updateMessageDisplay(message);
    
}
function updateScoreDisplay(){
    const playerScoreNode = document.querySelector("#playerscore");
    playerScoreNode.textContent = playerScore;
    const cpuScoreNode = document.querySelector("#cpuscore");
    cpuScoreNode.textContent = cpuScore;
}
function playAgain(){
    cpuScore = 0;
    playerScore = 0;
}
function removeButtons(){
    const body = document.querySelector("body");
    keys.forEach((button) => {
        console.log(`removing ${button}`);
        body.removeChild(button)
    });
}
function updateMessageDisplay(m){
    const messageBox = document.querySelector("#messagebox");
    messageBox.textContent = m;
    if(playerScore > 4){
        messageBox.textContent = "You win the set!!!";
        removeButtons()
    }
    if(cpuScore > 4){
        messageBox.textContent = "You lose the set!";
        removeButtons();
    }
}
const keys= document.querySelectorAll(".choice");
keys.forEach((button) => {
    button.addEventListener('click', playRound);
})
let playerScore = 0;
let cpuScore = 0;
updateScoreDisplay();

//game();