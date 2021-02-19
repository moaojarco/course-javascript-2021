// Importing Module
// import {addToCart, totalPrice as price, tq} from "./shoppingCart.js";

// import shoppingCart from "./shoppingCart";

// addToCart('HDMI Cable for DVD', 3)
// console.log(price, tq)
console.log("Importing module");


// import * as ShoppingCart from './shoppingCart.js';
// ShoppingCart.addToCart('cables', 10)
// console.log(ShoppingCart.totalPrice);

// import add, {addToCart, totalPrice as price, tq} from './shoppingCart.js';
// console.log(price)

    ////////////////////////////////////////////////////q
    //// Introduction to NPM

    // import cloneDeep from './node_modules/lodash-es/cloneDeep.js';
    import cloneDeep from 'lodash-es';
    // import add, {cart} from './shoppingCart.js';
    

const state = {
    cart: [
            { product: 'bread', quantity: 6 },
            { product: 'pizza', quantity: 2 },
    ],
    user: {loggedIn: true},
}

console.log(state);

// const stateClone = Object.assign({},state);
const stateDeepClone = cloneDeep(state);

console.log(stateDeepClone)

state.user.loggedIn = false;
// let joao = 'joao marks';
// const joaoUpper = startCase(joao);
// console.log(joaoUpper);


// console.log(stateClone);

console.log(stateDeepClone);

if(module.hot) {
    module.hot.accept();
}

class Person {
    #greeting = 'Hey';
    constructor(name) {
        this.name = name;
        console.log(`${this.#greeting}, ${this.name}`);
    }
}
const jonas = new Person('Jonas');

console.log('Jonas' ?? null);

console.log(state.cart.find(el => el.quantity >= 2))
Promise.resolve('TESTE').then(x => console.log(x));

import 'core-js/stable';
// import 'core-js/stable/array/find'
// import 'core-js/stable/promise'

// Polifilling async functions
import 'regenerator-runtime/runtime';