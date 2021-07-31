/*
GAME FUNCTION:
- Player must guess a number between a min and max
- Player gets a certain amount of guesses
- Notify player of guesses remaining
- Notify the player of the correct answer if loose
- Let player choose to play again
*/

// game values
let min = 1,
    max = 10,
    winningNum = getWinningNum(min, max),
    guessesLeft = 3;

// UI elements
const game = document.querySelector('#game'),
    minNum = document.querySelector('.min-num'),
    maxNum = document.querySelector('.max-num'),
    guessBtn = document.querySelector('#guess-btn'),
    guessInput = document.querySelector('#guess-input'),
    message = document.querySelector('.message');

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// play again event listener
game.addEventListener('mousedown', function (e) {
    if (e.target.className === 'play-again') {
        window.location.reload();
    }
});

// listen for guess
guessBtn.addEventListener('click', function () {
    let guess = parseInt(guessInput.value);

    // validate input not empty, within min & max, must be num
    if (isNaN(guess) || guess < min || guess > max) {
        setMessage(`Please enter a number between ${min} and ${max}`, 'red');
    }


    // Check if won - game over
    if (guess === winningNum) {
        // Set message
        gameOver(true, `${winningNum} is correct, YOU WIN!!!`);

    } else {
        // Wrong number
        guessesLeft -= 1;

        if (guessesLeft === 0) {
            // Game over - lost
            gameOver(false, `Game Over, you lost. The correct number was ${winningNum}`);
        } else {
            // Game continues - answer wrong

            // Change border color
            guessInput.style.borderColor = 'red';

            // Clear Input
            guessInput.value = '';

            // Tell user its the wrong number
            setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, 'red');
        }
    }
});

function gameOver(won, msg) {
    let color;
    won === true ? color = 'lime' : color = 'red';

    // Disable input
    guessInput.disable = true;

    // Change font color
    guessInput.style.color = color;
    message.style.color = color;

    // Change border color
    guessInput.style.borderColor = color;

    setMessage(msg);

    //PLAY AGAIN?
    guessBtn.value = 'Play Again';
    guessBtn.className += 'play-again';
}

// Random winning num
function getWinningNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Set message
function setMessage(msg, color) {
    message.style.color = color;
    message.textContent = msg;
}