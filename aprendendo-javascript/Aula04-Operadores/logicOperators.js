// AND / OR / NOT

console.log("__________________________________________");

console.log("Bernardo foi parada em uma blitz.");

console.log("__________________________________________");

const idadeBernardo = 18;
const bernardoPossuiCNH = false;

//AND 
console.log("Bernardo vai ser preso? ", idadeBernardo >= 18 && bernardoPossuiCNH === false);

console.log("__________________________________________");

console.log("Bernardo foi para a balada e na entrada precisava mostrar o seu documento!");


//OR
const bernardoPossuiRG = true;
console.log("Bernardo levou o seu RG: ", bernardoPossuiRG);
console.log("__________________________________________");
console.log("Bernardo é maior de idade: ", idadeBernardo >=18);
console.log("__________________________________________");
console.log("Bernardo consegui comprovar que é maior de idade? ", bernardoPossuiCNH === true || bernardoPossuiRG === true);
console.log("__________________________________________");
console.log("Bernardo entrou na balada!");
console.log("__________________________________________");

//NOT
const gostaDeBeber = true;
const bernardoGostaDeBeber = !gostaDeBeber;
console.log("Bernardo gosta de beber? ", bernardoGostaDeBeber);
