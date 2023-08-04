'use strict';

let randomNum = 0;
let num = Number(document.querySelector('.score').textContent);
const TOO_LOW_MSG = 'The value is too low';
const TOO_HIGH_MSG = 'The value is too high';
const FOUND_MSG = 'Correct Number';

function randomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.again').addEventListener('click', function () {
  randomNum = Math.floor(randomNumber(1, 20));
  console.log('the random value is', randomNum);
  document.querySelector('.score').textContent = 20;
  document.querySelector('.message').textContent = 'Start guessing...';
  num = Number(document.querySelector('.score').textContent);
});

//console.log(document.querySelector('.guess').value);

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  console.log('value is ', guess, 'randomNum is ', randomNum);

  let guessType = typeof guess;

  if (!guess) {
    displayMessage('No number!');
  }

  if (guessType === 'Number') {
    console.log('Please Enter the number');
    document.querySelector('.guess').value = undefined;
    displayMessage('Not a number');
  }

  if (guess === randomNum) {
    displayMessage(FOUND_MSG);
    document.querySelector('.highscore').textContent = num;
  }

  if (guess > randomNum) {
    displayMessage(TOO_HIGH_MSG);
    num = num - 1;
    document.querySelector('.score').textContent = num;
  } else if (guess < randomNum) {
    displayMessage(TOO_LOW_MSG);
    num = num - 1;
    document.querySelector('.score').textContent = num;
  }
});
