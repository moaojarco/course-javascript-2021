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

  //   order: function (starterIndex, mainIndex) {
  //     return [this.starterMenu[starterMenu], this.mainMenu[mainMenu]];
  //   },
};

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
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj);
console.log(a, b);

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
