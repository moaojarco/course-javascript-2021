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

// const pontosGolfinhos = (96 + 108 + 89) / 3;
// const pontosCoalas = (88 + 91 + 110) /3;

// console.log(pontosGolfinhos, pontosCoalas)

// if(pontosGolfinhos > pontosCoalas){
//     console.log("Os Golfinhos venceram! 🏆");
// } else if(pontosCoalas > pontosGolfinhos){
//     console.log("Os Koalas venceram! 🏆");
// } else if (pontosGolfinhos === pontosCoalas){
//     console.log("Empate!");
// }




//BONUS
// const pontosGolfinhos = (97 + 112 + 80) / 3;
// const pontosCoalas = (109 + 95 + 50) /3;
// console.log(pontosGolfinhos, pontosCoalas);

// if(pontosGolfinhos > pontosCoalas && pontosGolfinhos >= 100){
//     console.log("Os Golfinhos venceram! 🏆");
// } else if(pontosCoalas > pontosGolfinhos && pontosCoalas >= 100){
//     console.log("Os Coalas venceram! 🏆");
// } else if (pontosGolfinhos === pontosCoalas && pontosGolfinhos >= 100 && pontosCoalas >= 100){
//     console.log("Os dois times ganharam o troféu 🏆!");
// } else{
//     console.log("Ninguém ganhou o troféu. Otários demais 😂");
// }






const day = prompt("Coloque o dia de hoje");

// switch(day){
//     case 'segunda':
//             console.log("segunda, é o Brad 😎");
//     break; 
//     case 'terça':
//             console.log("Terça, dia de café ☕");
//     break;
//     case 'quarta':
//             console.log("Quarta, é quarta-feira po 😳");
//     break;
//     case 'quinta':
//     case 'sexta':
//             console.log("os dias de salada 🥗");
//     break;
//     case 'sabado':
//     case 'domingo':
//             console.log("Dale dele doly days 🍻");
//     default:
//             console.log("Esse não é um dia válido")
// }


//DESAFIO AULA 26 (Fazer tudo acima mas com if/else e operador lógico)
if(day === "segunda"){
    console.log("Segunda, é o brad 😎");
}else if(day ==="terça"){
    console.log("Terça, dia de café ☕");
}else if(day === "quarta"){
    console.log("Quarta, é quarta-feira po 😳");
}else if(day === "quinta" || day === "sexta"){
    console.log("os dias de salada 🥗");
}else if(day === "sabado" || day === "domingo"){
    console.log("Dale dele doly days 🍻");
}else{
    console.log("Esse não é um dia válido");
}
 








