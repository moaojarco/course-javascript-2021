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


// const calcAge = function (birthDay){
//     return 2037- birthDay;
// }

// const yearsUntilRetirement = function (birthDay, firstName) {
    //     const age = calcAge(birthDay)
    //     const retirement = 65 - age;

// if (retirement > 0){
//     console.log(`${firstName} irá se aposentar daqui a ${retirement} anos.`);
//     return retirement;
// } else {
//     console.log(`${firstName} já se aposentou. 🎉`);
//     return -1;
//     }
// }

// console.log(yearsUntilRetirement(1999, "João"));
// console.log(yearsUntilRetirement(1950, "Jonas"));



//Code Challenge Functions #01

// const calcAverage = (a, b, c) => (a + b + c) / 3;

// //Teste 01
// let scoreDolphins = calcAverage(44,23,71);
// let scoreKoalas = calcAverage(65,54,49);


// const checkWinner = function(avgDolphins, avgKoalas){
//     if (avgDolphins >= 2 * avgKoalas){
//         console.log(`Dolphins win 🏆 (${avgDolphins} vs. ${avgKoalas})`);
//     } else if (avgKoalas >= 2 * avgDolphins){
//         console.log(`Dolphins win 🏆 (${avgKoalas} vs. ${avgDolphins})`);
//     } else{
//         console.log('Nenhum time ganhou!');
//     }
// }
// // checkWinner(scoreDolphins, scoreKoalas);

// //Teste 02

// scoreDolphins = calcAverage(85,54,41);
// scoreKoalas = calcAverage(23,34,27);

// console.log(scoreDolphins, scoreKoalas);
// checkWinner(scoreDolphins, scoreKoalas);


//Começando com arrays

// const friends = ["Leonardo", "Ramon", "Luiz"];

// console.log(friends[friends.length -1]); //Retorna Luiz

// const primeiroNome = 'João';
// const moao = [primeiroNome, 'Marco', 2020 - 1999, 'student', friends];
// console.log(moao);
// console.log(moao.length);


// const calcAge = function (birthDay){
    //     return 2020- birthDay;
    // }
    
    // const years = [1973, 1990, 1999, 2002, 2006, 2012];
    
    // const age1 = calcAge(years[0]);
    // const age2 = calcAge(years[2]);
    // const age3 = calcAge(years[years.length - 1]);
    // console.log(age1, age2, age3);
    
    
    // const newAges = [calcAge(years[0]), calcAge(years[2]), calcAge(years[years.length - 1])];
    // console.log(newAges);
    


    const friends = ["Michael", "Steven", "Peter"];
    console.log(friends);
    
    //Add elements
    friends.push('Jay'); // Adiciona um elemento no final de um array.
    console.log(friends);

    friends.unshift('John'); // Adiciona um elemento no começo de um array.
    console.log(friends);

    //Remove elements
    friends.pop(); // Last
    const popped = friends.pop();
    console.log(popped);
    console.log(friends);

    friends.shift();
    console.log(friends);