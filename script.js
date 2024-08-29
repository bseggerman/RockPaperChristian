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

    return randomPick;
}

function getPlayerChoice() {
    let playerChoice = prompt("Rock, Paper or Christian. Make your choice.")
    return playerChoice;
}

function playRound(humanChoice, computerChoice) {

    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        console.log("It's a tie. Choose again.");
    } 
    
    else if (humanChoice == "rock" && computerChoice == "christian" || humanChoice == "christian" && computerChoice == "paper" || humanChoice == "paper" && computerChoice == "rock") {
        console.log("You win!");
    } 
    
    else {
        console.log("You lose!");
    }
  }
  
  const humanSelection = getPlayerChoice();
  const computerSelection = getAiChoice();
  
  console.log(getAiChoice());

  playRound(humanSelection, computerSelection);