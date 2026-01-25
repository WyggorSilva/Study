const idadeWyggor = 31;
const idadeDanielle = 27;

console.log("Wyggor é mais velho que Danielle? ", idadeWyggor > idadeDanielle);

console.log("__________________________________________");

console.log("Wyggor é mais novo que Danielle? ", idadeWyggor < idadeDanielle);

console.log("__________________________________________");

console.log("Wyggor tem idade igual ou maior que Danielle? ", idadeWyggor >= idadeDanielle);

console.log("__________________________________________");

console.log("Wyggor tem idade igual ou menor que Danielle? ", idadeWyggor <= idadeDanielle);

console.log("__________________________________________");

const maioridade = 18;

console.log("Wyggor é maior de idade: ", idadeWyggor >= maioridade);

const x = 10;
const y = 20;
const z = "10";

console.log("O número " + x + " é igual ao " + y, x===y); // === - Igualdade estrita
console.log("__________________________________________");
console.log("O número " + x + " é igual ao " + z, x==z); // === - Igualdade frouxa
console.log("__________________________________________");
console.log("O número " + x + " é diferente de " + y, x !== y); // !== - comparação de desigualdade estrita
console.log("__________________________________________");
console.log("O número " + x + " é diferente de " + z, x !== z); // !== - comparação de desigualdade estrita
console.log("__________________________________________");
console.log("O número " + x + " é diferente de " + z, x != z); // != - comparação de desigualdade frouxa