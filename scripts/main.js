//CODE CHALLENGE #01

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// // const heightJohn = 1.76;

// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / heightJohn ** 2;

// console.log(BMIMark, BMIJohn);



// CODE CHALLENGE #02

// if(BMIMark > BMIJohn){
//     console.log(`Mark BMI (${BMIMark}) é maior que o de John (${BMIJohn})!`);
// }else{
//     console.log(`John BMI (${BMIJohn}) é maior que o de John (${BMIMark})!`);
// }





// 5 False Values: 0, '', undefined, null, NaN
// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean(''));
// console.log(Boolean('Jonas'));
// console.log(Boolean({}));

// const money = 0;

// if(money){
//     console.log("Não gaste tudo.")
// }else{
//     console.log("Você deveria conseguir um emprego!")
// }





//CODE CHALLENGE #03

// const pointsDolphins = (96 + 108 + 89) / 3;
// const pointsKoalas = (88 + 91 + 110) /3;

// console.log(pointsDolphins, pointsKoalas)

// if(pointsDolphins > pointsKoalas){
//     console.log("Os Golfinhos venceram! 🏆");
// } else if(pointsKoalas > pointsDolphins){
//     console.log("Os Koalas venceram! 🏆");
// } else if (pointsDolphins === pointsKoalas){
//     console.log("Empate!");
// }

//BONUS 01
const pointsDolphins = (97 + 112 + 80) / 3;
const pointsKoalas = (109 + 95 + 50) /3;
console.log(pointsDolphins, pointsKoalas);

if(pointsDolphins > pointsKoalas && pointsDolphins >= 100){
    console.log("Os Golfinhos venceram! 🏆");
} else if(pointsKoalas > pointsDolphins && pointsKoalas >= 100){
    console.log("Os Koalas venceram! 🏆");
} else if (pointsDolphins === pointsKoalas && pointsDolphins >= 100 && pointsKoalas >= 100){
    console.log("Os dois times ganharam o troféu 🏆!");
} else{
    console.log("Ninguém ganhou o troféu. Otários demais 😂")
}