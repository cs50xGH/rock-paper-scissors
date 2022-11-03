 function getComputerChoice() {
    const choice = ['rock','paper','scissors'];
    const random = choice[Math.floor(Math.random() * choice.length )];
    return random;
 }
 


 function playRound() {
   let computerSelection = getComputerChoice()

      if (this.textContent == 'rock' && computerSelection == 'scissors' ||
          this.textContent == 'paper' && computerSelection == 'rock' ||
          this.textContent == 'scissors' && computerSelection == 'paper') {
      result.textContent = `It's a win ${this.textContent} beats ${computerSelection}`;
      }else if (this.textContent == computerSelection) {
            result.textContent = `it's a tie ${this.textContent} equals ${computerSelection}`;
      }else {
            result.textContent = `${this.textContent} loses against ${computerSelection}`;
          };
      }

 

  
const result = document.querySelector('.result') 
  
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');



const array = [rock, paper, scissors];
for (let i = 0; i < array.length; i++) {
   array[i].addEventListener('click', playRound);
};

  


   
