function getCpuChoice(){
    let choicenum = Math.floor(Math.random() * 3) + 1;
    if(choicenum == 1) return "Rock";
    if(choicenum == 2) return "Paper";
    if(choicenum == 3) return "Scissors";
}

function getResultString(playerChoice, cpuChoice, result){
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
    p = playerChoice.toLowerCase();
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
    for (let i = 0; i < 5; i++){
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
}
game();