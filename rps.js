function getComputerChoice(){
    var num = Math.floor(Math.random()*3 +1);
    var compChoice = null;
    if (num === 1){
        compChoice = "Rock";
    }
    else if(num === 2){
        compChoice = "Paper";
    }
    else{
        compChoice = "Scissors";
    }
    return compChoice;
}


function playRps(playerOp, compOp){
    playerOp = playerOp.toLowerCase();
    compOp = compOp.toLowerCase();
    if (playerOp == "rock" && compOp == "paper"){
        console.log(playerOp);
        console.log(compOp);
        console.log("lost");
    }
    else if(playerOp == "rock" && compOp == "scissors"){
        console.log(playerOp);
        console.log(compOp);
        console.log("Won!");
    }
    else if(playerOp == "paper" && compOp == "scissors"){
        console.log(playerOp);
        console.log(compOp);
        console.log("lost");
    }
    else if(playerOp == "paper" && compOp == "rock"){
        console.log(playerOp);
        console.log(compOp);
        console.log("Won!");
    }
    else if(playerOp == "scissors" && compOp == "paper"){
        console.log(playerOp);
        console.log(compOp);
        console.log("Won!");
    }
    else if(playerOp == "scissors" && compOp == "rock"){
        console.log(playerOp);
        console.log(compOp);
        console.log("lost");
    }
    else{
        console.log(playerOp);
        console.log(compOp);
        console.log("Looks like a draw!!");
    }


}



playRps('rock', getComputerChoice());