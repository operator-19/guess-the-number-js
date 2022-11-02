'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1 // random number with out decimal 1 - 20
let score = 20
let highscore = 0
// test
// document.querySelector('.number').textContent = secretNumber

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}

const displayScore = function (score) {  
    document.querySelector('.score').textContent = score;
}

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value)
    console.log(guess, typeof guess);

    if (!guess) { // if there is no number = 0 
        // document.querySelector('.message').textContent = '🚫 No number'
        displayMessage('🚫 No number!')

    } else if (guess == secretNumber) { // when player wins
        // document.querySelector('.message').textContent = '🎉 Correct number!'
        displayMessage('🎉 Correct number!')
        document.querySelector('body').style.backgroundColor = '#60b347'
        document.querySelector('.number').style.width = '30rem'

        // highscore
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore
        }

    } else if (guess !== secretNumber) { // when guess is wrong
        if (score > 1) { // guess is too high
            displayMessage(guess > secretNumber ? '⏫ Too high!!' : '⏬ Too low!!')
            score--
            // document.querySelector('.score').textContent = score;
            displayScore(score)
        } else {
            // document.querySelector('.message').textContent = '😭 You lost!!'
            displayMessage('😭 You lost!!')
            document.querySelector('.score').textContent = 0;
        }
    }
});

// reset
document.querySelector('.again').addEventListener('click', function () {
    document.querySelector('.number').textContent = '?'
    // document.querySelector('.message').textContent = 'Start guessing...'
    displayMessage('Start guessing...')
    // document.querySelector('.score').textContent = '20'
    displayScore('20')
    document.querySelector('.guess').value = ''
    document.querySelector('body').style.backgroundColor = '#222'
    document.querySelector('.number').style.width = '15rem'
})