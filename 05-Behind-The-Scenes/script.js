'use strict';

function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName}, você tem ${age} anos e nasceu em ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      //Criando uma variável com o mesmo nome que uma variável de outro escopo
      const firstName = 'Steven';

      //Reatribuindo o valor de uma variável de outro escopo
      output = 'NOVO OUTPUT!!!!';
      console.log(output);

      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    console.log(millenial);
    // console.log(add(2, 3));
  }
  printAge();

  return age;
}

const firstName = 'João';
console.log(calcAge(1986));
//console.log(age);
//printAge();
