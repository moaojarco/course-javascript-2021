const time7 = [
  {
    name: 'Naruto Uzumaki',
    clan: 'Uzumaki',
    type: 'Vento',
    skill1: { name: 'Jutsu Sexy', damage: 4000 },
    skill2: { name: 'Rasengan', damage: 388 },
    chakra: 800 + 1200,
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
