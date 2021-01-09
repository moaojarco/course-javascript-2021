'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🔥 Correct Number';

// document.querySelector('.number').textContent = 13;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 20);
let score = (document.querySelector('.score').textContent = 20);
let highScore = (document.querySelector('.highscore').textContent = 0);
let again = document.querySelector('.again');

// document.querySelector('.number').textContent = secretNumber;
console.log(secretNumber);
document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  const img = document.querySelector('.img');

  if (guess < secretNumber) {
    document.querySelector('.message').textContent = 'Um pouco mais...';
  } else {
    document.querySelector('.message').textContent = 'Um pouco menos...';
  }

  if (!guess) {
    document.querySelector('.message').textContent =
      'Sem gracinhas, eu disse pra adivinhar um número.';
    img.src = './mightguy-not.jpg';
  }

  if (guess != secretNumber) {
    score = score - 1;
    document.querySelector('.score').textContent = `${score}`;
  }

  if (guess === secretNumber) {
    document.querySelector('.message').textContent =
      'Co-como assim? Você acertou o meu número secreto!!!';
    img.src = './mightguy-done.jpg';

    score = document.querySelector('.highscore').textContent = `${
      score + highScoreLocal
    }`;

    localStorage.setItem('highScore', `${score}`);
  }
});

let highScoreLocal = Number(localStorage.getItem('highScore'));
document.querySelector('.highscore').textContent = `${highScoreLocal}`;

again.addEventListener('click', () => {
  document.querySelector('.score').textContent = 20;
  document.querySelector('.highscore').textContent = 0;

  localStorage.removeItem('highScore');
});
