const OPTIONS = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    index = Math.floor(Math.random()*3);
    return OPTIONS[index];
}

computerSelection = getComputerChoice();


function playerSelection() {
    let choice = prompt("Please enter rock, paper or scissors:");
    choiceLowerCase = choice.toLowerCase();
    
    return choiceLowerCase;
}

playerChoice = playerSelection();

game(playerChoice, computerSelection)

function game(playerSelection, computerSelection) {

    console.log(computerSelection);
    console.log(playerSelection);

    if(playerSelection == computerSelection){
        console.log('There is a tie! No one wins!!!!');
    }else {

        switch(playerSelection) {
            case 'rock':
                if(computerSelection == 'paper') {
                    console.log('You Lose! Paper beats Rock');
                }else {
                    console.log('You WIN! Rock beats Paper');
                }

                break;

            case 'paper':
                if(computerSelection == 'scissors') {
                    console.log('You Lose! Scissors beats Paper');
                }else {
                    console.log('You WIN! Paper beats Rock');
                }

                break;

            case 'scissors':
                if(computerSelection == 'rock') {
                    console.log('You Lose! Rock beats Scissors');
                }else {
                    console.log('You WIN! Scissors beats Paper');
                }

                break;
            
            default:
                break;
        }
    }
     
}





// function playRound(playerSelection, computerSelection) {
//     // your code here!
//   }
  
//   const playerSelection = "rock";
//   const computerSelection = getComputerChoice();
//   console.log(playRound(playerSelection, computerSelection));
  