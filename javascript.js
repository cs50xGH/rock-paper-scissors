 //Create a function called getComputerChoice that randomly returns R,P,S
 function getComputerChoice() {
    const choice = ["rock","paper","scissors"];
    const random = choice[Math.floor(Math.random() * choice.length )];
    return random;
 }
 
 //Write a fucntion that plays a single round of R,P,S

 function playRound(playerSelection, computerSelection) {
   if (playerSelection === "rock" && computerSelection === "paper") {
      return `You lose rock is defeated by paper`;
   } else if (playerSelection === "rock" && computerSelection === "scissors") {
      return `You win ${playerSelection} beats ${computerSelection}`;
   } else if (playerSelection === "scissors" && computerSelection === "paper") {
      return `You win ${playerSelection} beats ${computerSelection}`;
   } else if (playerSelection === "scissors" && computerSelection === "rock") {
      return `You lose rock beats scissors`;
   } else if (playerSelection === "paper" && computerSelection === "rock") {
      return "You win paper beats rock";
   } else if (playerSelection === "paper" && computerSelection === "scissors") {
      return "you lose scissors beats paper";
   } else (playerSelection === computerSelection); {
      return `Tie! ${playerSelection} equals ${computerSelection}`;
   }
 }
   
  const playerSelection = prompt("Choose rock, paper, or scissors").toLowerCase();
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));

  console.log(computerSelection)
  
  
