'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 Hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterMenu], this.mainMenu[mainMenu]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '22:00',
    address,
  }) {
    console.log(
      `Pedido recebido! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} vão ser entregues em ${address} às ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Aqui está sua pasta deliciosa com: ${ing1}, ${ing2} e ${ing3}`
    );
  },
};

//SPREAD, porque está do lado direito do =
const arr = [1, 2, ...[3, 4]];

const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];

console.log(pizza, risotto, otherFood);

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
console.log(restaurantCopy);
console.log(restaurant);

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

const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

//Default Values
const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

//Mutating variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };

// ({ a, b } = obj);
// console.log(a, b);

//Objetos aninhados
const {
  fri: { open: o, close: c },
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
