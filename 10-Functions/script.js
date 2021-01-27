'use strict';

const bookings = [];

// const createBooking = function (flightNum, numPassengers = 1, price = 199) {
//ES6

//ES5 (Antigo)
// numPassengers = numPassengers || 1;
//   price = price || 199;

//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };

//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking('WTF');
// createBooking('WTF', 2, 800);
// createBooking('WTF', 5);

const flight = 'LH234';
const jonas = {
  name: 'Jonas Schmedtmann',
  passport: 24739479284,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;
  if (passenger.passport === 24739479284) {
    alert('Checked in');
  } else {
    alert('Wrong Passport!');
  }
};

// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

//Is the same as doing...
// const flightNum = flight;
// const passager = jonas;

// const newPassport = function (person) {
// 24739479284;
// person.passport = Math.trunc(Math.random() * 100000000000);
// };

// newPassport(jonas);
// checkIn(flight, jonas);

//Função que deixa em LOWERCASE e tira os espaços entre as palavras
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

//Função que deixa a primeira palavra tudo UPPER
const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

//High-order function
// const transformer = function (str, fn) {
//   console.log(`Original string: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);
// };

// transformer('Kappa kappa kappa', upperFirstWord);

//Forma tradicional
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

greet('Ohayo')('Otaku');

//Arrow Function
const greetArr = (greeting) => (name) => console.log(`${greeting} ${name}`);

const greeterHey = greetArr('Hey'); //Primeiro Argumento
greeterHey('Jonas'); // Segundo Argumento
greeterHey('Steven');

greetArr('Hello')('João'); //Dois argumentos

const gol = {
  airline: 'GOL',
  iataCode: 'GOL',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`
    );

    this.bookings.push({ flight: `${this.iataCode} ${flightNum}`, name });
  },
};

gol.book(239, 'João Marco');
gol.book(635, 'Lucas Matheus');
// azul.book(145, 'Marta Falcão');
// azul.book(295, 'Pijacka');
// azul.book(555, 'King Kong');
// azul.book(325, 'Lagartixa');
console.log(gol);

const tam = {
  airline: 'TAM',
  iataCode: 'TM',
  bookings: [],
};

const book = gol.book;
//Does NOT work
// book(23, 'Sarah Williams');

// book.call(tam, 244, 'Sarah Willians');
// console.log(tam);

book.call(tam, 399, 'Julia Serrano');
console.log(tam);

const azul = {
  airline: 'Azul',
  iataCode: 'AZ',
  bookings: [],
};

book.call(azul, 583, 'Almir Dacio');

//Aply method
const flightData = [583, 'Leonardo Guimarães'];
// book.apply(azul, flightData);
console.log(azul);

book.call(azul, ...flightData);

//Bind method
// book.call(eurowings, 23, 'Sarah Williams');

const bookGOL = book.bind(gol);
const bookTAM = book.bind(tam);
const bookAZUL = book.bind(azul);

bookGOL(49, 'Leandro Reis');

const bookGOL23 = book.bind(gol, 23);
bookGOL23('Ramon Ike');
bookGOL23('Giovanna Prado');

//With Event Listener
gol.planes = 300;
gol.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};

// gol.buyPlane();

document
  .querySelector('.buy')
  .addEventListener('click', gol.buyPlane.bind(gol));

// Partial application

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// addVAT = (value) => value + value * 0.23;

console.log(addVAT(100));
console.log(addVAT(23));

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};
const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
console.log(addVAT2(23));

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();

booker();
booker();
booker();

const killEnemy = function () {
  let kill = 0;

  return function () {
    kill++;
    console.log(`${kill} kills.`);
  };
};

const killer = killEnemy();
killer();
killer();
killer();
