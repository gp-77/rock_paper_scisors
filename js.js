const OPTIONS = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    index = Math.floor(Math.random()*3);
    return OPTIONS[index];
}


function playerSelection() {
    let choice = prompt("Please enter rock, paper or scissors:");
    choiceLowerCase = choice.toLowerCase();
    
    return choiceLowerCase;
}


function game(playerSelection, computerSelection) {

    console.log(computerSelection);
    console.log(playerSelection);

    let winner = '';

    if(playerSelection == computerSelection){
        console.log('There is a tie! No one wins!!!!');
        winner = 'tie';
    }else {

        switch(playerSelection) {
            case 'rock':
                if(computerSelection == 'paper') {
                    console.log('You Lose! Paper beats Rock');
                    winner = 'computer';
                }else {
                    console.log('You WIN! Rock beats Paper');
                    winner = 'player';
                }

                break;

            case 'paper':
                if(computerSelection == 'scissors') {
                    console.log('You Lose! Scissors beats Paper');
                    winner = 'computer';
                }else {
                    console.log('You WIN! Paper beats Rock');
                    winner = 'player';
                }

                break;

            case 'scissors':
                if(computerSelection == 'rock') {
                    console.log('You Lose! Rock beats Scissors');
                    winner = 'computer';
                }else {
                    console.log('You WIN! Scissors beats Paper');
                    winner = 'player';
                }

                break;
            
            default:
                break;
        }
    }
    return winner;
}

function playGame() {

    let score = {
        'player': 0,
        'computer': 0,
        'tie': 0
    };

    let winner = '';
    let computerSelection = '';
    let playerChoice = '';

    for(let i=0; i<5; i++) {

        computerSelection = getComputerChoice();
        playerChoice = playerSelection();

        winner = game(playerChoice, computerSelection);

        switch(winner) {
            case 'computer':
                score['computer']++;
                break;
            case 'player':
                score['player']++;
                break;
            case 'tie':
                score['tie']++;
                break;
            default:
                break;
        }

    }

    if(score['computer'] > score['player']) {
        console.log("COMPUTER WINS");
    }else if(score['computer'] < score['player']) {
        console.log("COMPUTER WINS");
    }else{
        console.log("it is a tie");
    }

    console.log(score);
}

playGame();




// function playRound(playerSelection, computerSelection) {
//     // your code here!
//   }
  
//   const playerSelection = "rock";
//   const computerSelection = getComputerChoice();
//   console.log(playRound(playerSelection, computerSelection));
  