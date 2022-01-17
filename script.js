let round = 0;
let playerScore = 0;
let computerScore = 0;

const POSSIBLE_PLAYS = ['rock', 'paper', 'scissors'];
function computerPlay() {
    return POSSIBLE_PLAYS[Math.floor(Math.random() * POSSIBLE_PLAYS.length)];
}

function playRound() {
    const computerSelection = computerPlay();
    const playerSelection = this.textContent;
    let result;
    switch (playerSelection.toLowerCase()) {
        case 'rock':
            result = computerSelection === 'scissors' ? 1 : computerSelection === 'paper' ? 2 : 0;
            break;
        case 'paper':
            result = computerSelection === 'rock' ? 1 : computerSelection === 'scissors' ? 2 : 0;
            break;
        case 'scissors':
            result = computerSelection === 'paper' ? 1 : computerSelection === 'rock' ? 2 : 0;
            break;
    }
    if (result === 1) {
        console.log(`You win! ${playerSelection} beats ${computerSelection}`);
        playerScore++;
    } else if (result === 2) {
        console.log(`You lose! ${playerSelection} loses to ${computerSelection}`);
        computerScore++;
    } else console.log('Thats a draw!')
    round++;
    Infogame();
    if (playerScore === 5 || computerScore === 5) endGame(); 
}

function Infogame() {
    if (round === 0) console.log('Welcome to the game of rock, paper, scissors\n\n');
    console.log('\n---------------------');
    console.log(`\nCurrent round: ${round}`)
    console.log(`\nCurernt score --> Player: ${playerScore} --- Computer: ${computerScore}`);
}

function endGame() {
    if (playerScore === 5) console.log('You won the game!');
    else console.log('You lose...');
    playButtons.forEach(button => button.removeEventListener('click', playRound));
    console.log('\n---------------------');
    console.log('If you want to play again, please refresh the page');
}

const playButtons = document.querySelectorAll('button');
playButtons.forEach(button => button.addEventListener('click', playRound));

Infogame();