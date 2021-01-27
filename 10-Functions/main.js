'use strict';

const time7 = [
  {
    name: 'Naruto',
    clan: 'Uzumaki',
    type: 'Vento',
    skill1: { name: 'Jutsu Sexy', damage: 4000 },
    skill2: { name: 'Rasengan', damage: 388 },
    chakra: 800 + 1200,
    saudacao() {
      console.log(`Eu, ${this.name}, o próximo Hokage, uma lenda ninja.`);
    },
  },
  {
    name: 'Sasuke Uchiha',
    clan: 'Uchiha',
    type: 'Trovão',
    skill1: { name: 'Bola de Fogo', damage: 200 },
    skill2: { name: 'Chidori', damage: 384 },
    chakra: 800,
  },
  {
    name: 'Sakura Hatake',
    clan: 'Hatake',
    type: 'Force',
    skill1: 'Soco',
    skill2: 'Socão',
  },
  {
    name: 'Kakashi Hatake',
    clan: '?',
    type: 'Trovão',
    skill1: 'Haikiri',
    skill2: 'Sharingan',
  },
];

const [naruto, sasuke, sakura, kakashi] = time7;

const calcDamage = function () {
  if (naruto.skill2.damage > sasuke.skill2.damage) {
    console.log('Naruto venceu o duelo! 🍃');
    console.log(naruto.skill2.damage);
  } else {
    console.log('Sasuke venceu o duelo! 🔥');
  }
  while (naruto.skill2.damage < 388) {
    console.log('Sasuke lixo porra');
    naruto.skill2.damage = 0;

    if (naruto.skill2.damage == 408) {
      break;
    } else {
      console.log('crash');
    }
  }
};
calcDamage();

// const char = document.querySelector('img#char');
// const images = ['./img/chara-1.png', './img/chara-2.png', './img/chara-3.png'];

// setInterval(function moves() {
//   if ((char.src = images[0])) {
//     document.querySelector('img#char').src = images[1];
//   }
// }, 2000);
// setInterval(function move2() {
//   if (char.src == images[1]) {
//     document.querySelector('img#char').src = images[2];
//   }
// }, 3000);

// const animacaoUrso = [
//   'https://raw.githubusercontent.com/gabrieldarezzo/helpjs-ravi/master/images/chara-1.png',
//   'https://raw.githubusercontent.com/gabrieldarezzo/helpjs-ravi/master/images/chara-2.png',
//   'https://raw.githubusercontent.com/gabrieldarezzo/helpjs-ravi/master/images/chara-3.png',
// ];

// setInterval(function () {
//   const larguraDaTela = window.screen.availWidth;
//   let position = 0;
//   let aumentar = true;
//   let animacaoFrame = 0;

//   if (position > larguraDaTela + 200) {
//     return false;
//   }

//   document.getElementById('urso-img').src = animacaoUrso[animacaoFrame];

//   document.getElementById('urso-img').style = 'left: ' + position + 'px;';

//   position += 4;
//   animacaoFrame++;
//   if (animacaoFrame > 2) {
//     animacaoFrame = 0;
//   }
// }, 200);
