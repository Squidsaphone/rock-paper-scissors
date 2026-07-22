function getComputerChoice() {
    let cpuChoice = Math.floor(Math.random() * 3 + 1);
    switch (cpuChoice) {
        case 1:
            return "Rock";
        case 2:
            return "Paper";
        case 3: 
            return "Scissors";
    }
}

function getHumanChoice() {
    let humanChoice = prompt("Enter \"Rock\", \"Paper\", or \"Scissors\".").toLowerCase();
    humanChoice = humanChoice.at(0).toUpperCase() + humanChoice.slice(1);
    return humanChoice;
}

function didPlayerWin(humanChoice, computerChoice) {
    switch (humanChoice) {
        case "Rock":
            switch (computerChoice) {
                case "Rock":
                    return "tie";
                case "Paper":
                    return "lose";
                case "Scissors":
                    return "win";
            }
        case "Paper":
            switch (computerChoice) {
                case "Rock":
                    return "win";
                case "Paper":
                    return "tie";
                case "Scissors":
                    return "lose";
            }
        case "Scissors":
            switch (computerChoice) {
                case "Rock":
                    return "lose";
                case "Paper":
                    return "win";
                case "Scissors":
                    return "tie";
            }
    }
}

function playGame() {
    function playRound(humanChoice, computerChoice) {
        let playerResult = didPlayerWin(humanChoice, computerChoice);
        switch (playerResult) {
            case "win":
                console.log("You win! " + humanChoice + " beats " + computerChoice + ".");
                humanScore++;
                break;
            case "tie":
                console.log("Tie! You both chose " + humanChoice + ".");
                ties++;
                break;
            case "lose":
                console.log("You lose! " + computerChoice + " beats " + humanChoice + ".");
                computerScore++;
                break;
        }
    }

    let humanScore = 0;
    let computerScore = 0;
    let ties = 0;
    for (let i = 0; i  < 5; i++) {
        let cpuChoice = getComputerChoice();
        let humanChoice = getHumanChoice();
        playRound(humanChoice, cpuChoice);
    }
    console.log("You won " + humanScore + " game(s), the Computer won " + computerScore + " game(s), and " + ties + " game(s) ended in a tie.");
}

playGame();
