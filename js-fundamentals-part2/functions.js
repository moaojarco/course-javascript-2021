'use strict';

// function logger(){
//     console.log("My name is João");
// }

// logger();
// logger();
// logger();


// function fruitProcessor(apple, oranges){
//     const juice =  `Juice with ${apple} apples and ${oranges} oranges.`;
//     return juice;
// }

// const appleJuice = fruitProcessor(5,0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2,4);
// console.log(appleOrangeJuice);

// function calcPorc(num){
//     return num / 2;
// }

// console.log(calcPorc(1250));
// console.log(calcPorc(1000000));
// console.log(calcPorc(300));
// console.log(calcPorc(1000));



//Arrow Function com 1 parametro + 1 linha de código
// const calcAge3 = birthDay => 2037 - birthDay;
// const age3 = calcAge3(1991);
// console.log(age3);

//Arrow Function com 1 parametro + várias linhas de código
// const yearsParaAposentar = birthDay => {
//     const age = 2037 - birthDay;
//     const aposentadoria = 65 - age;
//     return aposentadoria;
// }
// console.log(yearsParaAposentar(1991));

//Arrow Function com vários parametros + várias linhas de código
// const yearsParaAposentar = (birthDay, firstName) => {
//     const age = 2037 - birthDay;
//     const aposentadoria = 65 - age;
//     // return aposentadoria;
//     return `${firstName} irá se aposentar daqui a ${aposentadoria} anos.`
// }
// console.log(yearsParaAposentar(1991, "João Marco"));


//Chamando uma função dentro de função

// function cutPieces(fruit){
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges){
//     const applePieces = cutPieces(apples);
//     const orangePieces = cutPieces(oranges);
    
    
//     const juice =  `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
//     return juice;
// }

// console.log(fruitProcessor(2,3));


const calcAge = function (birthDay){
    return 2037- birthDay;
}

const yearsUntilRetirement = function (birthDay, firstName) {
    const age = calcAge(birthDay)
    const retirement = 65 - age;

if (retirement > 0){
    console.log(`${firstName} irá se aposentar daqui a ${retirement} anos.`);
    return retirement;
} else {
    console.log(`${firstName} já se aposentou. 🎉`);
    return -1;
    }
}

console.log(yearsUntilRetirement(1999, "João"));
console.log(yearsUntilRetirement(1950, "Jonas"));
