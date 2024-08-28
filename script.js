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
let aiChoice;
let playerChoice;
let options = ["Neato", "Rock", "Christian", "Paper"];

function getAiChoice() {
    let aiChoice = Math.floor(Math.random() * 3) + 1;
    return options[(aiChoice)];
}
console.log(getAiChoice());
function getPlayerChoice() {
    let playerChoice = prompt("Make your choice.")
    return playerChoice;
}

let aiScore = 0;
let playerScore = 0;

console.log(getPlayerChoice());