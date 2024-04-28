const OPTIONS = ['rock', 'paper', 'scissors'];

let playerScore = 0;
let computerScore = 0;

let container = document.querySelector(".container");

function getComputerChoice() {
    index = Math.floor(Math.random() * OPTIONS.length);
    return OPTIONS[index];
}


function playerSelection() {
    let choice = prompt("Please enter rock, paper or scissors:");
    choiceLowerCase = choice.toLowerCase();
    
    return choiceLowerCase;
}


function playRound(playerSelection, computerSelection = '') {
    const resultDiv = document.createElement('div');
    container.appendChild(resultDiv)

    if(computerSelection === '') {
        computerSelection = getComputerChoice();
    }

    console.log(computerSelection);
    console.log(playerSelection);

    let winner = '';
    let message = '';

    if(playerSelection == computerSelection){
        message = 'There is a tie! No one wins!!!!';
        winner = 'tie';
    }else {

        switch(playerSelection) {
            case 'rock':
                if(computerSelection == 'paper') {
                    message = 'You Lose! Paper beats Rock';
                    winner = 'computer';
                    computerScore++;
                }else {
                    message = 'You WIN! Rock beats Paper';
                    winner = 'player';
                    playerScore++;
                }

                break;

            case 'paper':
                if(computerSelection == 'scissors') {
                    message = 'You Lose! Scissors beats Paper';
                    winner = 'computer';
                    computerScore++;
                }else {
                    message = 'You WIN! Paper beats Rock';
                    winner = 'player';
                    playerScore++;
                }

                break;

            case 'scissors':
                if(computerSelection == 'rock') {
                    message = 'You Lose! Rock beats Scissors';
                    winner = 'computer';
                    computerScore++;
                }else {
                    message = 'You WIN! Scissors beats Paper';
                    winner = 'player';
                    playerScore++;
                }

                break;
            
            default:
                break;
        }
    }
    resultDiv.textContent = message + "! " + `Player: ` + playerScore + `/ Computer:` + computerScore;

    if(playerScore > 4) {
        resultDiv.textContent += "PLAYER WINS!!!!!!!";
        setTimeout(resetGame,3000);
        // resetGame();
    }

    if( computerScore > 4) {
        resultDiv.textContent += "COMPUTER WINS!!!!!!!";
        setTimeout(resetGame,3000);
        // resetGame();
    }

    return winner;
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;

    document.body.innerHTML = '';

    const div = document.createElement("div");

    div.classList.add("container");

    document.body.appendChild(div);

    container = document.querySelector(".container");

    playGame();
}

function playGame() {
    const rock  = document.createElement("button");
    const paper = document.createElement("button");
    const scissors = document.createElement("button");
    // const resultDiv = document.createElement('div');

    rock.innerText  = 'rock';
    paper.innerText  = 'paper';
    scissors.innerText  = 'scissors';

    container.appendChild(rock);
    container.appendChild(paper);
    container.appendChild(scissors);
    // container.appendChild(resultDiv);

    rock.addEventListener('click', () => {
        const computerSelection = getComputerChoice();
        const playerSelection = 'rock';
        playRound(playerSelection, computerSelection);
    });

    paper.addEventListener('click', () => {
        const computerSelection = getComputerChoice();
        const playerSelection = 'paper';
        playRound(playerSelection, computerSelection);
    });

    scissors.addEventListener('click', () => {
        const computerSelection = getComputerChoice();
        const playerSelection = 'scissors';
        playRound(playerSelection, computerSelection);
    });

}

playGame();

// function playGame() {

//     let score = {
//         'player': 0,
//         'computer': 0,
//         'tie': 0
//     };

//     let winner = '';
//     let computerSelection = '';
//     let playerChoice = '';

//     computerSelection = getComputerChoice();
//     playerChoice = playerSelection();

//     winner = playRound(playerChoice, computerSelection);

//     switch(winner) {
//         case 'computer':
//             score['computer']++;
//             break;
//         case 'player':
//             score['player']++;
//             break;
//         case 'tie':
//             score['tie']++;
//             break;
//         default:
//             break;
//     }

//     if(score['computer'] > score['player']) {
//         console.log("COMPUTER WINS");
//     }else if(score['computer'] < score['player']) {
//         console.log("COMPUTER WINS");
//     }else{
//         console.log("it is a tie");
//     }

//     console.log(score);
// }

// playGame();


