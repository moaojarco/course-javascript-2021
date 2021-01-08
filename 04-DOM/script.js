'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🔥 Correct Number';

// document.querySelector('.number').textContent = 13;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

const secretNumber = Math.floor(1 + Math.random() * 20);
console.log(secretNumber);
document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  // console.log(guess, typeof guess);
  if (guess < secretNumber) {
    document.querySelector('.message').textContent = 'Um pouco mais...';
  } else {
    document.querySelector('.message').textContent = 'Um pouco menos...';
  }

  if (!guess) {
    document.querySelector('.message').textContent =
      'Sem gracinhas, eu disse pra adivinhar um número.';
    const img = document.querySelector('.img');
    img.src = './mightguy-not.jpg';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent =
      'Co-como assim? Você acertou o meu número secreto!!!.';
    const img = document.querySelector('.img');
    img.src = './mightguy-done.jpg';

    document.querySelector('.score').textContent = guess;
  }
});
