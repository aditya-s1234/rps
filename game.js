let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const v = Math.random() * 100;
    if (v >= 0 && v<33) {
        return "rock";
    } else if (v >= 33 && v<66) {
        return "paper";
    } else if (v >= 66 && v<=100) {
        return "scissors";
    }
}

function compareChoices(human,computer) {
    let winner = document.createElement("p");
    
    let para = document.createElement("p");
    para.textContent= `You chose ${human} while the computer chose ${computer}`;
    if(human==="paper" && computer==="paper") {
        para.insertAdjacentText("beforeend", " : tie");
    }
    else if (human==="paper" && computer==="rock") {
        para.insertAdjacentText("beforeend", " : you win, paper beats rock");
        humanScore++;
    }
    else if (human==="paper" && computer==="scissors") {
        para.insertAdjacentText("beforeend"," : you lose, scissors beats paper");
        computerScore++;
    }
    else if (human==="rock" && computer==="paper") {
        para.insertAdjacentText("beforeend"," : you lose, paper beats rock");
        computerScore++;
    }
    else if (human==="rock" && computer==="rock") {
        para.insertAdjacentText("beforeend"," : tie");

    }
    else if (human==="rock" && computer==="scissors") {
        para.insertAdjacentText ("beforeend", " : you win, rock beats scissors");
        humanScore++;
    }
    else if (human==="scissors" && computer==="paper") {
        para.insertAdjacentText ("beforeend"," : you win, scissors beats paper");
        humanScore++;
    }
    else if (human==="scissors" && computer==="rock") {
        para.insertAdjacentText ("beforeend"," : you lose, rock beats scissors");
        computerScore++;
    }
    else if (human==="scissors" && computer==="scissors") {
        para.insertAdjacentText ("beforeend"," : tie");
    }
    let score = document.createElement("p");
    score.textContent = ` Score is: human - ${humanScore} computer - ${computerScore}`;
    
    data.appendChild(para);
    data.appendChild(score);
    if (humanScore === 5) {
        winner.textContent = "Human has won! Resetting scores."
        humanScore=0;
        computerScore=0;
        data.appendChild(winner);
    } else if (computerScore === 5) {
        winner.textContent = "Computer has won! Resetting scores."
        humanScore = 0;
        computerScore = 0;
        data.appendChild(winner);
    }
}

const data = document.querySelector(".results");

const rock = document.querySelector(".r");
const paper = document.querySelector(".p");
const scissors = document.querySelector(".s");


rock.addEventListener("click", () => {
    compareChoices("rock", getComputerChoice());
})

paper.addEventListener("click", () => {
    compareChoices("paper", getComputerChoice());
})

scissors.addEventListener("click", () => {
    compareChoices("scissors", getComputerChoice());
})




