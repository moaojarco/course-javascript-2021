'use strict';

const Person = function (firstName, birthYear) {
  //propriedades da instancia
  this.firstName = firstName;
  this.birthYear = birthYear;
  // console.log(firstName);

  //Nunca faça isso
  //   this.calcAge = function () {
  //     console.log(2020 - birthYear);
  //   };
};

const jonas = new Person('Jonas', 1991);
// console.log(jonas);
//1. New {} is created
//2. function is called, this = {}
//3. {} linked to prototype
//4. function automatically return {}

const ramon = new Person('Ramon', 1998);
const leonardo = new Person('Leonardo', 1998);
// console.log(ramon, leonardo);
// console.log(ramon instanceof Person);

//Prototipos
// Person.prototype.calcAge = function () {
//   console.log(2020 - this.birthYear);
// };

// jonas.calcAge();
// leonardo.calcAge();

// console.log(leonardo.__proto__);
// console.log(leonardo.__proto__ === Person.prototype);

// console.log(Person.prototype.isPrototypeOf(ramon));
// console.log(Person.prototype.isPrototypeOf(leonardo));
// console.log(Person.prototype.isPrototypeOf(Person));

// Person.prototype.species = 'Homo sappiens';
// console.log(jonas.species);

// console.log(jonas.hasOwnProperty('firstName'));
// console.log(jonas.hasOwnProperty('species'));

// console.log(jonas.__proto__);
// Object.prototype (top of prototype chain)
// console.log(jonas.__proto__.__proto__);
// console.log(jonas.__proto__.__proto__.__proto__);

// console.log(Person.prototype.constructor);

// const arr = [3, 6, 6, 5, 6, 9, 9];

// console.log(arr.__proto__);
// console.log(arr.__proto__ === Array.prototype);

// console.log(arr.__proto__.__proto__);

// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };

// console.log(arr.unique());

// const h1 = document.querySelector('h1');

//Coding Challenge #01
// const Car = function (make, speed) {
//   this.marca = marca;
//   this.speed = speed;
// };

// Car.prototype.acelerar = function () {
//   this.speed += 10;
//   console.log(`${this.marca} is going at ${this.speed}km/h`);
// };
// Car.prototype.darRe = function () {
//   this.speed -= 5;
//   console.log(`${this.marca} is going at ${this.speed}km/h`);
// };

// const bmw = new Car('BMW', 120);
// const mercedes = new Car('Mercedes', 95);

// bmw.acelerar();
// bmw.darRe();

// mercedes.acelerar();
// mercedes.darRe();

////////////////////////////////////////////////////////////

// function A() {
//   this.x = 1;
// }

// A.prototype.DoIt = function () {
//   while (this.x < 10) {
//     this.x++;
//     console.log(this.x);
//   }
// };
// function B() {
//   this.name = 'João Marco';
// }

// B.prototype.CheckAge = function () {
//   let age = 21;
//   let name = this.name;
//   let teste = ['Olá', 'teste', 'vagamente'];
//   const face = teste.pop();
//   if (age === 21) {
//     console.log(face);
//   }
// };

// let a = new A();
// let b = new B();
// let c = new B();

// a.DoIt();
// b.CheckAge();
// c.CheckAge();

//Class Expression
// const PersonCl = class{

// }

//Class Declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  //Methods will be added to .prototype property
  calcAge() {
    console.log(2020 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}`);
  }

  get age() {
    return 2020 - this.birthYear;
  }

  set fullName(name) {
    // console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name`);
  }

  get fullName() {
    return this._fullName;
  }
}

const jessica = new PersonCl('Jessica Davis', 1998);
// console.log(jessica);
// jessica.calcAge();
console.log(jessica.age);

console.log(jessica.__proto__ === PersonCl.prototype);

// PersonCl.prototype.greet = function(){
//   console.log(`Hey ${this.firstName}`);
// }

jessica.greet();

// 1. Classes are NOT hoisted
// 2. Class are first-class citizes
// 3. Classes are executed in strict mode

//Setters and Getters
const account = {
  owner: 'Jonas',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

// console.log(account.latest);

account.latest = 50;
// console.log(account.movements);
