/*

prompt input from player

compare input to random input 

display winner of round

add score to winner of round

prompt another input from player
compare input to random input 

display winner of round
add score to winner of round

prompt another input from player
compare input to random input 

display winner of round
add score to winner of round

games stops after player or random gets to 3

*/


let computerScore = 0;
let humanScore = 0;


function getAiChoice() {
    const options = ["rock", "christian", "paper"];

    const randomOption = Math.floor(Math.random() * options.length);

    const randomPick = options[randomOption];

    console.log(randomOption);
    console.log(randomPick);
    return randomPick;
}

function getPlayerChoice() {
    let playerChoice = prompt("Rock, Paper or Christian. Make your choice.")
    return playerChoice;
}



function playGame(nRounds) {
    let computerScore = 0;
    let humanScore = 0;

    for(let i = 1; i <= nRounds; i++) {
    const humanSelection = getPlayerChoice();
    const computerSelection = getAiChoice();
    playRound(humanSelection, computerSelection);
    }

    function playRound(humanChoice, computerChoice) {
        if (humanChoice.toLowerCase() === computerChoice) {
        console.log(`It's a tie. Choose again. Both players chose ${humanChoice}.`);
    }  else if (humanChoice.toLowerCase() == "rock" && computerChoice == "christian" || humanChoice == "christian" && computerChoice == "paper" ||  humanChoice == "paper" && computerChoice == "rock") {
        console.log("You win!");
        humanScore++;
        console.log(`Your Score: ${humanScore}`);
        console.log(`AI Score: ${computerScore}`);
    } else {
        console.log("You lose!");
        computerScore++;
        console.log(`Your Score: ${humanScore}`);
        console.log(`AI Score: ${computerScore}`);
    }
    } 
    function results () {
        if (humanScore === 3) {
            console.log("You Win the Game!");
        } else if (computerScore === 3) {
            console.log("You Lose the Game!");
        } else if (humanScore > computerScore) {
            console.log("You Win the Game!");
        } else if (humanScore < computerScore) {
            console.log("You Lose the Game!");
        }
    }
    results(); 
}

playGame(5);

