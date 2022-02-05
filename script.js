let round = 1;
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
        resultsTextArea.textContent += `\nYou win! ${playerSelection} beats ${computerSelection}`;
        playerScore++;
    } else if (result === 2) {
        resultsTextArea.textContent += `\nYou lose! ${playerSelection} loses to ${computerSelection}`;
        computerScore++;
    } else resultsTextArea.textContent += '\nThat\'s a draw!';
    round++;
    Infogame();
    updateScores();
    if (playerScore === 5 || computerScore === 5) endGame(); 
}

function updateScores() {
    roundSpan.textContent = round;
    playerScoreSpan.textContent = playerScore;
    computerScoreSpan.textContent = computerScore;
}
function Infogame() {
    if (round === 1) {
        resultsTextArea.textContent += 'Welcome to the game of rock, paper, scissors!';
        updateScores();
    }
    resultsTextArea.textContent += '\n---------------------\n';
    resultsTextArea.textContent += `\nRound: ${round}\n`
}

function endGame() {
    let message;
    if (playerScore === 5) message = 'You won the game!';
    else message = 'You lose...';
    playButtons.forEach(button => button.removeEventListener('click', playRound));
    resultsTextArea.textContent += '\n---------------------\n';
    resultsTextArea.textContent += 'The game has ended. If you want to play again, press the restart button or refresh the page';
    const outcomeText = document.createElement('h1');
    outcomeText.classList.add('outcome-text');
    outcomeText.textContent = message;
    outcomeText.style.color = playerScore === 5 ? 'green' : 'red';
    document.querySelector('.results').insertBefore(outcomeText,resultsTextArea);
}

function restart() {
    round = 1;
    playerScore = 0;
    computerScore = 0;
    resultsTextArea.textContent = '';
    updateScores();
    Infogame();
    playButtons.forEach(button => button.addEventListener('click', playRound));
    document.querySelector('.outcome-text')?.remove(); 
}
function clearLog() {
    resultsTextArea.textContent = '---------------------\n';
    resultsTextArea.textContent += `\nRound: ${round}\n`
}

const playButtons = document.querySelectorAll('.play-button');
playButtons.forEach(button => button.addEventListener('click', playRound));
const restartButton = document.querySelector('#restart-button');
restartButton.addEventListener('click',restart);
const clearLogButton = document.querySelector('#clear-log-button');
clearLogButton.addEventListener('click',clearLog);
const resultsTextArea = document.querySelector('textarea');
const roundSpan = document.querySelector('#round');
const playerScoreSpan = document.querySelector('#player-score');
const computerScoreSpan = document.querySelector('#computer-score');

Infogame();