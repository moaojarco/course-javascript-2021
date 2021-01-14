"use strict";

// const myName = "João";

// if (myName === "João") {
//   console.log(`João trabalha como ${job}`);
//   const age = 2021 - 1999;
//   console.log(age);
//   const job = "teacher";
// }

// console.log(me);

// //Variables
// var me = "João";
// let job = "freelancer";
// const year = 1999;

// //Functions
// console.log(addDecl(2, 3));
// // console.log(addExpr(2,3));
// console.log(addArrow);
// // console.log(addArrow(2,3));

// function addDecl(a, b) {
//   return a + b;
// }

// const addExpr = function (a, b) {
//   return a + b;
// };

// var addArrow = (a, b) => a + b;

// //Example

// if (!numProducts) deleteShoppingCart();

// var numProducts = 10;

// function deleteShoppingCart() {
//   console.log("All products deleted!");
// }

//Primeiro Objeto
// const joao = {
//   year: 1999,
//   calcAge: function () {
//     console.log(this);
//     console.log(2020 - this.year);
//   },
// };
// joao.calcAge();

//Segundo Objeto
// const ramon = {
//   year: 1998,
// };
// ramon.calcAge = joao.calcAge;
// ramon.calcAge(); //Return 22, porque o this virou Ramon,  pois ele está chamando o método.

// const f = joao.calcAge;
// f();

// Regular Functions vs Arrow Functions

const joao = {
  firstName: "João Marco",
  year: 1999,
  calcAge: function () {
    // console.log(this);
    console.log(2020 - this.year);

    //Solução 1

    // const self = this;
    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    //   // console.log(this.year >= 1981 && this.year <= 1996);
    // };

    //Solução 2 (ES6)

    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },

  mensagem: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};

joao.mensagem();
joao.calcAge();

//arguments keyword
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5);

var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};

addArrow(2, 5);
