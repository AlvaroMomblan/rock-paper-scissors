const POSSIBLE_PLAYS = ['rock', 'paper', 'scissors'];
function computerPlay() {
    return POSSIBLE_PLAYS[Math.floor(Math.random() * POSSIBLE_PLAYS.length)];
}

function playRound(playerSelection, computerSelection) {
    if (!POSSIBLE_PLAYS.includes(playerSelection.toLowerCase()) || !POSSIBLE_PLAYS.includes(computerSelection)) return -1;
    switch (playerSelection.toLowerCase()) {
        case 'rock':
            return computerSelection === 'scissors' ? 1 : computerSelection === 'paper' ? 2 : 0;
        case 'paper':
            return computerSelection === 'rock' ? 1 : computerSelection === 'scissors' ? 2 : 0;
        case 'scissors':
            return computerSelection === 'paper' ? 1 : computerSelection === 'rock' ? 2 : 0;
    }
}

function game() {
    let round = 0;
    let playerScore = 0;
    let computerScore = 0;
    console.log('Welcome to the game of rock, paper, scissors\n\n');
    while (round < 5) {
        console.log('\n---------------------')
        console.log(`\nCurrent round: ${round}`)
        console.log(`\nCurernt score --> Player: ${playerScore} --- Computer: ${computerScore}`);
        const computerSelection = computerPlay();
        const playerSelection = window.prompt('Select your play: ');
        let result = playRound(playerSelection, computerSelection);
        if (result === -1) console.log('Select a valid option (rock, paper or scissors)');
        else {
            if (result === 1) {
                console.log(`You win! ${playerSelection} beats ${computerSelection}`);
                playerScore++;
            } else if (result === 2) {
                console.log(`You lose! ${playerSelection} loses to ${computerSelection}`);
                computerScore++;
            } else console.log('Thats a draw!')
            round++;
        }
    }
    console.log(playerScore > computerScore ? 'You win the game!' : 
        playerScore < computerScore ? 'You lose the game...' : 'The game ended in a draw');
    console.log(`\nFinal score --> Player: ${playerScore} --- Computer: ${computerScore}`);
}

game();