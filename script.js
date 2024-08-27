/*

playing in the console so no need for html or css

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

let aiChoice;
let rock = 1;
let christian = 2;
let paper = 3;

function getAiChoice() {
       
    
    let aiChoice = Math.floor(Math.random() * 3) + 1; 
    
    if (aiChoice === 1) {
        return "AI chooses Rock";
    } else if (aiChoice === 2) {
        return "AI chooses Christian";
    } else {
        return "AI chooses Paper";
    }
}
console.log(getAiChoice());

let playerChoice;

function getPlayerChoice() {
    let playerChoice = prompt("Make your choice.")
    return "You chose " + playerChoice + ".";
}
console.log(getPlayerChoice());

let playerScore = 0;
let aiScore = 0;

function playRound(playerChoice, aiChoice) {
        if (playerChoice === aiChoice) {
            return "Both players choose Rock. Choose again.";
        } else {
            return "Test";
        }
}
console.log(playRound());
