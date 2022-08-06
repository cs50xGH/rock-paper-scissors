 //Create a function called getComputerChoice that randomly returns R,P,S
 function getComputerChoice() {
    const choice = ["rock","paper","scissor"];
    const random = choice[Math.floor(Math.random() * choice.length )];
    return random;
 }
 
 //Write a fucntion that plays a single round of R,P,S

 function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "paper") {
       return text = "You lose, paper beats rock";
    }else if (playerSelection != "scissor") {
    

  }
}
   
  const playerSelection = "rock";
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));
  
  let userAnswer = prompt('Choose rock, paper, or scissor.');
