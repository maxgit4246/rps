// Retrieve the score from localStorage or initialize if it doesn't exist
let score = JSON.parse(localStorage.getItem('score')) || {
    win: 0,
    losses: 0,
    tie: 0,
};
//result function:to display the result on the webpage using js
function Result(result = 'No Result Yet') {
    document.querySelector('.js-result').innerHTML = `${result}`;
}
//playermove and compmove display function to display the moves on the webpage using js
function playermoveDisplay(playermove, compmove) {
    document.querySelector('.js-moves').innerHTML =
        (`
        You
        <img class="move-icon" src="./assets/${playermove}-emoji.png">    
        Computer 
        <img class="move-icon" src="./assets/${compmove}-emoji.png">
    `);
}

// Update score display on the webpage
function updateScoreDisplay() {
    document.querySelector('.js-score').innerHTML =
        `Wins: ${score.win}, Losses: ${score.losses}, Ties: ${score.tie}`;
}

/*INITIALLY*/
// Display current score on page load
updateScoreDisplay();
//Display current result on page load
Result();
/*INITIALLY*/


//the main function playGame that drives everything

function playGame(playerMove) {
    const ComputerMove = pickCompMove();

    let result = '';     //3 cases first for scissors then 3 more depending on compmove
    if (playerMove === 'Scissors') {
        if (ComputerMove === 'Rock') {
            result = 'You lose!';
            score.losses += 1;
        } else if (ComputerMove === 'Paper') {
            result = 'You win!';
            score.win += 1;
        } else {
            result = 'Tie!';
            score.tie += 1;
        }
    } else if (playerMove === 'Rock') {
        if (ComputerMove === 'Rock') {
            result = 'Tie!';
            score.tie += 1;
        } else if (ComputerMove === 'Paper') {
            result = 'You lose!';
            score.losses += 1;
        } else {
            result = 'You win!';
            score.win += 1;
        }
    } else if (playerMove === 'Paper') {
        if (ComputerMove === 'Rock') {
            result = 'You win!';
            score.win += 1;
        } else if (ComputerMove === 'Paper') {
            result = 'Tie!';
            score.tie += 1;
        } else {
            result = 'You lose!';
            score.losses += 1;
        }
    }

    // Update localStorage and the DOM
    localStorage.setItem('score', JSON.stringify(score));
    updateScoreDisplay();
    Result(result);
    playermoveDisplay(playerMove, ComputerMove);

    /* alert(`You picked ${playerMove}. Computer picked ${ComputerMove}. ${result}
 Wins: ${score.win}, Losses: ${score.losses}, Ties: ${score.tie}`);*/
}

function pickCompMove() {
    const Rand = Math.random();
    if (Rand < 1 / 3) {
        return 'Rock';
    } else if (Rand < 2 / 3) {
        return 'Paper';
    } else {
        return 'Scissors';
    }
}