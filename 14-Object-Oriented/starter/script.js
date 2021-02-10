'use strict'; // jessica.calcAge();

// const Person = function (firstName, birthYear) {
//   //propriedades da instancia
//   this.firstName = firstName;
//   this.birthYear = birthYear;
//   // console.log(firstName);

//   //Nunca faça isso
//   //   this.calcAge = function () {
//   //     console.log(2020 - birthYear);
//   //   };
// };

// const jonas = new Person('Jonas', 1991);
// // console.log(jonas);
// //1. New {} is created
// //2. function is called, this = {}
// //3. {} linked to prototype
// //4. function automatically return {}

// const ramon = new Person('Ramon', 1998);
// const leonardo = new Person('Leonardo', 1998);
// console.log(ramon instanceof Person);

// Person.hey = function () {
//   console.log('Hey There 👊');
// };

// Person.hey();

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

// console.log(jessica.age);
// console.log(jessica.__proto__ === PersonCl.prototype);

// PersonCl.prototype.greet = function(){
//   console.log(`Hey ${this.firstName}`);
// }
// jessica.greet();

// 1. Classes are NOT hoisted
// 2. Class are first-class citizes
// 3. Classes are executed in strict mode
// const walter = new PersonCl('Walter White', 1965);
// PersonCl.hey();

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

// account.latest = 50;
// console.log(account.movements);

//Static Methods (Array.from / Number.parseFloat)
// const teste = Array.from(document.querySelectorAll('h1'));

// const PersonProto = {
//   calcAge() {
//     console.log(2020 - this.birthYear);
//   },

//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const steven = Object.create(PersonProto);
// steven.name = 'Steven Minecraft';
// steven.birthYear = 1999;
// steven.calcAge();

// console.log(steven.__proto__ === PersonProto);

// const sarah = Object.create(PersonProto);
// sarah.init('Sarah', 1996);
// sarah.calcAge();

///////////////////////////////////////
// Coding Challenge #2

/* 
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK 😀
*/

// class Car {
//   constructor(marca, speed) {
//     this.marca = marca;
//     this.speed = speed;
//   }

//   acelerar() {
//     this.speed += 10;
//     console.log(`${this.marca} is going at ${this.speed}km/h`);
//   }

//   darRe() {
//     this.speed -= 5;
//     console.log(`${this.marca} is going at ${this.speed}km/h`);
//   }

//   get speedUS() {
//     return this.speed / 1.6;
//   }

//   set speedUS(speed) {
//     this.speed = speed * 1.6;
//   }
// }

// const ford = new Car('Ford', 120);
// const mercedes = new Car('Mercedes', 95);
// console.log(ford.speedUS);
// ford.acelerar();
// ford.acelerar();
// ford.darRe();
// ford.speedUS = 50;

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2020 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

//Linking prototypes
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student('Mike', 1999, 'Computer Science');
mike.introduce();
mike.calcAge();

///////////////////////////////////////
// Coding Challenge #3

/* 
1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 😉

DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/

const Car = function (marca, speed) {
  this.marca = marca;
  this.speed = speed;
};

Car.prototype.acelerar = function () {
  this.speed += 10;
  console.log(`${this.marca} is going at ${this.speed}km/h`);
};

Car.prototype.darRe = function () {
  this.speed -= 5;
  console.log(`${this.marca} is going at ${this.speed}km/h`);
};

const EV = function (marca, speed, charge) {
  Car.call(this, marca, speed);
  this.charge = charge;
};

EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

EV.prototype.acelerar = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `${this.marca} está andando a ${this.speed}km/h. Bateria:${this.charge}`
  );
};

EV.prototype.darRe = function () {
  this.speed -= 10;
  this.charge--;
  console.log(
    `${this.marca} está andando a ${this.speed}km/h. Bateria:${this.charge}`
  );
};

const tesla = new EV('Tesla', 120, 23);

tesla.chargeBattery(99);
console.log(tesla);

const myKey = document.addEventListener('keydown', e => {
  if (e.key === 'd') {
    tesla.acelerar();
  } else if (e.key === 'a') {
    tesla.darRe();
  }
});

//Class Declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  //Instance methods
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

  //Setar uma propriedade que já existe
  set fullName(name) {
    // console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name`);
  }

  get fullName() {
    return this._fullName;
  }

  //Static Method
  static hey() {
    console.log('Hey There 👊');
    console.log(this);
  }
}

// class SdudentCl extends PersonCl{
//   constructor(fullName, birthYear, course)
//   //Always need to happen first, because the super function is responsible to create 'this' keyword.
//   super(fullName, birthYear)
//   this.course = course;
// }

const PersonProto = {
  calcAge() {
    console.log(2020 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);

const jay = Object.create(StudentProto);
