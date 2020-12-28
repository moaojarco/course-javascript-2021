const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / heightJohn ** 2;

console.log(BMIMark, BMIJohn);


if(BMIMark > BMIJohn){
    console.log(`Mark BMI (${BMIMark}) é maior que o de John (${BMIJohn})!`)
}else{
    console.log(`John BMI (${BMIJohn}) é maior que o de John (${BMIMark})!`)
}



