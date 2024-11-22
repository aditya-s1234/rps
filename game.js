function getComputerChoice(b) {
    let choice = 0;
    if (0<=b && b<33) {
        choice = "rock";
    } else if (33<=b && b<66) {
        choice = "paper";
    } else if (66<=b && b<=100) {
        choice = "scissors";
    } else {
        console.log("invalid input.");
    }
    console.log(choice);
    console.log(b);    
    return choice;
}

function getHumanChoice() {
    let pick = prompt("Enter rock, paper, or scissors.")
    console.log(pick);
    return pick;
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    if(humanChoice==="paper" && computerChoice==="paper") {
        console.log("tie");
    }
    else if (humanChoice==="paper" && computerChoice==="rock") {
        console.log("you win, paper beats rock");
        return humanScore++;
    }
    else if (humanChoice==="paper" && computerChoice==="scissors") {
        console.log("you lose, scissors beats paper");
        return computerScore++;
    }
    else if (humanChoice==="rock" && computerChoice==="paper") {
        console.log("you lose, paper beats rock");
        return computerScore++;
    }
    else if (humanChoice==="rock" && computerChoice==="rock") {
        console.log("tie");
    }
    else if (humanChoice==="rock" && computerChoice==="scissors") {
        console.log("you win, rock beats scissors");
        return humanScore++;
    }
    else if (humanChoice==="scissors" && computerChoice==="paper") {
        console.log("you win, scissors beats paper");
        return humanScore++;
    }
    else if (humanChoice==="scissors" && computerChoice==="rock") {
        console.log("you lose, rock beats scissors");
        return computerScore++;
    }
    else if (humanChoice==="scissors" && computerChoice==="scissors") {
        console.log("tie");
    }
}

function playGame() {
    playRound(getHumanChoice(),getComputerChoice(computerGen));
    playRound(getHumanChoice(),getComputerChoice(computerGen));
    playRound(getHumanChoice(),getComputerChoice(computerGen));
    playRound(getHumanChoice(),getComputerChoice(computerGen));
    playRound(getHumanChoice(),getComputerChoice(computerGen));
    console.log(`Human score is ${humanScore} and computer score is ${computerScore}`);
}

let computerGen = Math.random()*100;
let humanScore = 0;
let computerScore = 0;


playGame();