'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const displayMessage = message => {
  document.querySelector('.message').textContent = message;
};
const checkFunction = function () {
  let guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    // Cuando el jugador no coloca ningún número(o pone un cero)
    displayMessage('⛔ No number!');
  } else if (guess === secretNumber) {
    // Cuando el jugador acierta al número
    displayMessage('Correct Number! 🎉');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    // Cuando el numero es diferente
    if (score > 0) {
      // Cuando el numero es mayor ? lower : higher
      displayMessage(guess > secretNumber ? 'Try lower!' : 'Try higher!');
      score--;
      // Si se quedó sin puntos game over
    } else {
      displayMessage('❌ GAME OVER ❌');
    }
    document.querySelector('.score').textContent = score;
  }
};

document.querySelector('.check').addEventListener('click', checkFunction);
document.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    checkFunction();
  }
});
// Funcionalidad del boton AGAIN! Resetear todo pero sigue tomando el High score.
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document;
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
