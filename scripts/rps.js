function getCpuChoice(){
    let choicenum = Math.floor(Math.random() * 3) + 1;
    if(choicenum == 1) return "Rock";
    if(choicenum == 2) return "Paper";
    if(choicenum == 3) return "Scissors";
}

function playRound(playerChoice, cpuChoice){
    p = playerChoice.toLowerCase();
    result = "tie"
    if(p == "rock"){
        switch(cpuChoice){
            case "Rock":
                result = "tie";
                break;
            case "Paper":
                result = "lose";
                break;
            case "Scissors":
                result = "win";
                break;
        }
    }else if(p == "paper"){
        switch(cpuChoice){
            case "Rock":
                result = "win";
                break;
            case "Paper":
                result = "tie";
                break;
            case "Scissors":
                result = "lose";
                break;
        }
    }else if(p == "scissors"){
        switch(cpuChoice){
            case "Rock":
                result = "lose";
                break;
            case "Paper":
                result = "win";
                break;
            case "Scissors":
                result = "tie";
                break;
        }
    }
    else{
        return "Please enter rock, paper or scissors.";
    }
    if(result == "win")
        return "You win! " + p + " beats " + cpuChoice + ".";
    if(result == "tie")
        return "Tie!";
    if(result == "lose");
        return "You lose! " + cpuChoice + " beats " + p + "."; 
}

console.log(playRound(getCpuChoice(), getCpuChoice()));