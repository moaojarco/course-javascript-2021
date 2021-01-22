'use strict';

const weekDays = ['seg', 'ter', 'qua', 'qui', 'sex', 'sab', 'dom'];

const openingHours = {
  [weekDays[3]]: {
    open: 12,
    close: 22,
  },
  [weekDays[4]]: {
    open: 11,
    close: 23,
  },
  [`day--${2 + 4}`]: {
    open: 0, // Open 24 Hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  //ES6  aprimorando objetos liteais
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterMenu], this.mainMenu[mainMenu]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '22:00', address }) {
    // console.log(
    //   `Pedido recebido! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} vão ser entregues em ${address} às ${time}`
    // );
  },

  orderPasta(ing1, ing2, ing3) {
    // console.log(
    //   `Aqui está sua pasta deliciosa com: ${ing1}, ${ing2} e ${ing3}`
    // );
  },

  orderPizza(mainIngredient, ...othersIngredients) {
    // console.log(mainIngredient, othersIngredients);
  },
};

//Working with Strings

const airline = 'TAP Air Plane';

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

//Fix capitalization in name
const passageiro = 'mArcO';
const passageiroLower = passageiro.toLowerCase();
const passageiroCorrect =
  passageiroLower[0].toUpperCase() + passageiroLower.slice(1);
console.log(passageiroCorrect); // retorna Marco

const btn = document.querySelector('#btn');
const txtEmail = document.querySelector('#email');

const checkPassageiro = function () {
  let passageiro = txtEmail.value;
  console.log(passageiro);

  const passageiroErrado = passageiro;
  const passageiroCerto = passageiroErrado.toLowerCase().trim();
  passageiro = passageiroCerto;
  console.log(passageiro);

  if (passageiro.includes('gmail')) console.log('tem gmail nessa porra');
  else if (passageiro.includes('outlook'))
    console.log('tem outlook nessa porra');
  else console.log('vai criar um email descente');
};

//Substituindo partes de uma String
const priceBR = 'R$288,97';
const priceUS = priceBR.replace('R$', '$').replace(',', '.');
console.log(priceUS); // $288,97
const anuncio = 'Todos os passageiros vão para a porta 23. porta 23!';
console.log(anuncio.replace('porta', 'portão'));
//Criando uma expressão regular
console.log(anuncio.replace(/porta/g, 'portão'));

btn.addEventListener('click', checkPassageiro);

//Booleans
const plane = 'Airbus A320neo';
console.log(plane.includes('A320')); // true
console.log(plane.includes('Boeing')); // false
console.log(plane.startsWith('Alb')); // false

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log('Part of the NEW Airbus Family');
}

//Exercicio Pratico
const checkCompra = function (items) {
  const compra = items.toLowerCase();
  if (compra.includes('ak-47') || compra.includes('desert eagle')) {
    console.log('Esse é macho');
  } else if (compra.includes('awp')) {
    console.log('Você é um falcão peregrino');
  } else {
    console.log('lixo');
  }
};
checkCompra('I have a AK-47. Uma Desert Eagle e uma Flashbang.');
checkCompra('Estou eco, vou só de Desert Eagle');
checkCompra('Peguei AWP sem colete fodase');
checkCompra('Sou humilde, comprei MP7');

const [firstName, lastName] = 'João Marco'.split(' ');

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];

  for (const n of names) {
    namesUpper.push(n[0].toUpperCase() + n.slice(1));
  }
  console.log(namesUpper.join(' '));
};

capitalizeName('leonardo guimarães');

//Mostrar apenas os 4 ultimos digitos de um cartão de créidto
const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(74282847284));
console.log(maskCreditCard('9999999999'));

//Repeat Method

const message2 = 'Bad weather... All departures delayed...';
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'🛬'.repeat(n)}`);
};

planesInLine(1);
planesInLine(5);
planesInLine(8);
planesInLine(4);

//Comparando E-mail
const email = 'hello@joao.io';
const loginEmail = ' hello@Joao.Io \n';

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim(); // Método para tirar whitespaces

const normalizeEmail = loginEmail.toLowerCase().trim();
console.log(normalizeEmail);

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) console.log(item);

// for (const [i, el] of menu.entries()) {
// console.log(`${i}: ${el}`);
// }

// 1) Destructuring

//SPREAD, porque está do lado direito do =
const arr = [1, 2, ...[3, 4]];

//REST, porque está do lado esquerdo do =
const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

//Objects
// const { sat, ...weekDays } = restaurant.openingHours;
// console.log(sat, weekDays);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
// console.log(pizza, risotto, otherFood);

// 2) Functions
// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) sum += numbers[i];
//   console.log(sum);
// };

// add(2, 3); //5
// add(5, 3, 7, 2); //17
// add(8, 2, 5, 3, 2, 1, 4); //25

// const x = [23, 5, 7];
// add(...x); //35

// restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');

// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// const newArr = [1, 2, ...arr];
// console.log(newArr);

// console.log(...newArr);
// console.log(1, 2, 7, 8, 9);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

//Copy array
const mainMenuCopy = [...restaurant.mainMenu];

//Join 2 arrays
const menuL = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menuL);

//Iterables: arrays, strings, maps e sets. NOT objects.
const str = 'Jonas';
const letters = [...str, '', 'S.'];
// console.log(letters);
// console.log(...str);

//Exemplo do mundo real
// const ingredients = [
//   prompt("Let's make pasta! ingredients 1? "),
//   prompt('Ingredient 2?'),
//   prompt('Ingredient 3?'),
// ];
// console.log(ingredients);

// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// restaurant.orderPasta(...ingredients); //Retorna o que foi colocado no PROMPT

//Objects
const newRestaurant = { foundedYear: 1991, ...restaurant, founder: 'Joseph' };
// console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
// console.log(restaurantCopy);
// console.log(restaurant);

// restaurant.orderDeliver({
//   time: '12:30',
//   address: 'Constantino Nery',
//   mainIndex: 2,
//   starterIndex: 2,
// });

restaurant.orderDelivery({
  address: 'São Geraldo Porra, 100',
  starterIndex: 1,
});

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

//Default Values
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

//Mutating variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };

// ({ a, b } = obj);
// console.log(a, b);

//Objetos aninhados
const {
  sex: { open: o, close: c },
} = openingHours;
// console.log(o, c); //11, 23

// const arr = [2, 3, 4];

// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

//depois de const usamos [] porque estamos desestruturando um Array
// const [x, y, z] = arr;
// console.log(x, y, z);
// console.log(arr);

let [main, , secondary] = restaurant.categories; // criando buraco para skippar
// console.log(main, secondary); // Retorna o primeiro e o terceiro elemento

const temp = main;
main = secondary;
secondary = temp;

[main, secondary] = [secondary, main];

// console.log(restaurant.order(2, 0));
//Retorna Galic Bread e Pizza

// const [starter, mainCourse] = restaurant.order(2, 0); // Recebendo 2 returns da função
// console.log(starter, mainCourse);

//Array dentro de Array
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);

//Desestruturação de arrays dentro de arrays
const [i, , [j, k]] = nested;
// console.log(i, j, k);

//Default Values
const [p = 1, q = 1, r = 1] = [8, 9]; // Retorna 8 9 1
// console.log(p, q, r); // terceiro elemento retorna undefined

const btnTop = document.querySelector('#scroll-top');

btnTop.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
});
