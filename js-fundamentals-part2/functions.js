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



// const friends = ["Michael", "Steven", "Peter"];
// console.log(friends);

// //Add elements
// friends.push('Jay'); // Adiciona um elemento no final de um array.
// console.log(friends);

// friends.unshift('John'); // Adiciona um elemento no começo de um array.
// console.log(friends);

// //Remove elements
// friends.pop(); // Last
// const popped = friends.pop();
// console.log(popped);
// console.log(friends);

// friends.shift();
// console.log(friends);


// const amigos = ["Ramon", "Leonardo", "Luiz"];
// amigos.push('Paima');

// if (amigos.includes("Paima")) {
//     console.log("Tu é amigo do gordão mesmo.");
// } else {
//     console.log("Tu não é amigo do Paima mano.");
// }






//CODE CHALLENGE #02 (MEU PRIMEIRO TESTE)

// function calcTip(num) {
//     if (num >= 50 && num <= 300) {
//         num * 0.15;
//     console.log(num);
//     } else {
//         num * 0.2;
//         console.log(num);
//     }
// }

// const bill = [125, 555, 44];

// const tips = [calcTip(bill[0]), calcTip(bill[1]), calcTip(bill[2])];
// console.log(total);

// const total = bill + tips;



//AGORA COLANDO DO PROFESSOR

// const calcTip = function (bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }

// const bill = [125, 555, 44];
// const tips = [calcTip(bill[0]), calcTip(bill[1]), calcTip(bill[2])];

// const totals = [bill[0] + tips[0], bill[1] + tips[1], bill[2] + tips[2]];

// console.log(bill, tips, totals);


// Introdução a Objetos

//Array Básica -> Primeira estrutara de dados que aprendemos.

// const jonasArray = [
//     'Jonas',
//     'Schmenmann',
//     2020 - 1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven']
// ];


// Objeto
// const joao = {
//     firstName: 'João',
//     lastName: 'Marco',
//     age: 2020 - 1999,
//     job: 'Freelancer',
//     friends: ['Leonardo', 'Luiz', 'Ramon']
// };

// console.log(joao.lastName);
// console.log(joao['lastName']);

// const nameKey = 'Name';
// console.log(joao['first' + nameKey]);
// console.log(joao['last' + nameKey]);


// const interessadoEm = prompt('O que você quer saber sobre o João Marco? Escolha firstName, lastName, age, job, friends');


// if (joao[interessadoEm]) {
//     console.log(joao[interessadoEm]);
// } else {
//     console.log("Pergunta errada! Escolha firstName, lastName, age, job, friends.")
// }

//Adicionando propriedades ao objeto

// joao.favoriteTeam = 'miBR';
// joao['twitter'] = '@moaojarco';

// console.log(joao.twitter)


//Challenge 
//João tem 3 amigos, e o melhor amigo dele se chama Leonardo.

// console.log(`${joao.firstName} tem ${joao.friends.length} amigos, e o melhor amigo dele se chama ${joao.friends[0]}`);

// const joao = {
//     firstName: 'João',
//     lastName: 'Marco',
//     birthYear: 1999,
//     job: 'Freelancer',
//     friends: ['Leonardo', 'Luiz', 'Ramon'],
//     temCarteira: false,

// calcAge: function (birthYear) {
//     return 2020 - birthYear;
// }

// calcAge: function () {
//     return 2020 - this.birthYear;
// }

//     calcAge: function () {
//         this.age = 2020 - this.birthYear;
//         return this.age;
//     },

//     //Challenge
//     //Resultado do Professor

//     getSummary: function () {
//         return `${this.firstName} tem ${this.calcAge()} anos, é ${this.job}, Carteira de motorista: ${this.temCarteira ? 'tem' : 'não tem'}`;
//     },
// };
// console.log(joao.getSummary());
// console.log(joao.calcAge());

// console.log(joao.age);

// //Challenge
// //Minha tentativa

// joao.getSummary = `${joao.firstName} tem ${joao.age} anos, é ${joao.job}, Carteira de motorista: ${joao.temCarteira ? 'tem' : 'não tem'}`;

// console.log(joao.getSummary);


// const mark = {
//     fullName: 'Mark Zuckeberg',
//     mass: 78,
//     height: 1.69,

//     calcBMI: function () {
//         this.bmi = this.mass / this.height ** 2;
//         return this.bmi;
//     }
// }

// const john = {
//     fullName: 'John Travolta',
//     mass: 92,
//     height: 1.95,

//     calcBMI: function () {
//         this.bmi = this.mass / this.height ** 2;
//         return this.bmi;
//     }
// }

// mark.calcBMI();
// john.calcBMI();

// console.log(mark.bmi, john.bmi);

// //"John Travolta  BMI (28.3) is higher than Mark Zuckeberg (23.9)!"

// if (mark.bmi > john.bmi) {
//     console.log(`${mark.fullName} BMI (${mark.bmi}) é maior que o de ${john.fullName} (${john.bmi})`);
// } else if (john.bmi > mark.bmi) {
//     console.log(`${john.fullName} BMI (${john.bmi}) é maior que o de ${mark.fullName} (${mark.bmi})`);
// }


//  Aprofundando nos Loop's (LOOPS LOOPS LLOOPS LOOPS LOOPS)

// console.log("levantamento de peso repetição 1 🏋️‍♂️");
// console.log("levantamento de peso repetição 2 🏋️‍♂️");
// console.log("levantamento de peso repetição 3 🏋️‍♂️");
// console.log("levantamento de peso repetição 4 🏋️‍♂️");
// console.log("levantamento de peso repetição 5 🏋️‍♂️");
// console.log("levantamento de peso repetição 6 🏋️‍♂️");
// console.log("levantamento de peso repetição 7 🏋️‍♂️");
// console.log("levantamento de peso repetição 8 🏋️‍♂️");
// console.log("levantamento de peso repetição 9 🏋️‍♂️");
// console.log("levantamento de peso repetição 10 🏋️‍♂️");

// For (Este loop tem um contador)
// a Instrução de Loop tem três etapas

// for loops continuam rodando enquanto a condição for TRUE

// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Levantamento de peso repetição ${rep} 🏋️‍♂️`);
// };



// Loop em Arrays

// const jonas = [
//     'Jonas',
//     'Schmenmann',
//     2020 - 1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven'],
//     true
// ];

// const types = [];

// for (let i = 0; i < jonas.length; i++) {
//     //Lendo do jonas array
//     console.log(jonas[i], typeof jonas[i]);

//     //Preenchendo tipos de array
//     // types[i] = typeof jonas[i];

//     types.push(typeof jonas[i]);
// };

// console.log(types);

// // Criando uma array a partir de um loop.

// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//     ages.push(2037 - years[i])
// }

// console.log(ages);



// //continue  and  break

// console.log('---- ONLY STRINGS ----');
// for (let i = 0; i < jonas.length; i++) {
//     if (typeof jonas[i] !== 'string') continue;

//     console.log(jonas[i], typeof jonas[i]);
// };


// console.log('---- BREAK WITH NUMBERS ------');
// for (let i = 0; i < jonas.length; i++) {
//     if (typeof jonas[i] === 'number') break;

//     console.log(jonas[i], typeof jonas[i]);
// };


//Loop Inverso

const jonas = [
    'Jonas',
    'Schmenmann',
    2020 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
];

// 0, 1, ... , 4 -> Ordem crescente
// 4, 3, ..., 0 -> Ordem decrescente

for (let i = jonas.length - 1; i >= 0; i--) {
    console.log(jonas[i])
}

//Loop dentro de loop
for (let exercise = 1; exercise <= 3; exercise++) {
    console.log(`---------- Starting Exercise ------------${exercise}`)

    for (let rep = 1; rep <= 5; rep++) {
        console.log(`Exercise ${exercise}: Lifting weight repeitition ${rep} 🏋️‍♂️`)
    }
}








