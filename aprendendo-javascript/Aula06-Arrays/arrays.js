const listaDeConvidados = ["Danielle", "Bernardo", "Christopher", "Luna", "Helena"]; 

console.log("Lista de Convidados da festa do Wyggor: ", listaDeConvidados);
console.log("Quantos convidados tem na lista?", listaDeConvidados.length);

console.log("Convidado número 1: ", listaDeConvidados[0]);
console.log("Convidado número 2: ", listaDeConvidados[1]);
console.log("Convidado número 3: ", listaDeConvidados[2]);
console.log("Convidado número 4: ", listaDeConvidados[3]);
console.log("Convidado número 5: ", listaDeConvidados[listaDeConvidados.length -1]);

console.log("Danielle está em qual posição em nosso array?" , listaDeConvidados.indexOf("Danielle") + 1);
console.log("Bernardo está em qual posição em nosso array?" , listaDeConvidados.indexOf("Bernardo") + 1);
console.log("Christopher está em qual posição em nosso array?" , listaDeConvidados.indexOf("Christopher") + 1);
console.log("Luna está em qual posição em nosso array?" , listaDeConvidados.indexOf("Luna") + 1);
console.log("Helena está em qual posição em nosso array?" , listaDeConvidados.indexOf("Helena") + 1);

const arrayQualquer = ["Wyggor", true, 31, {valor1: 10, valor2: 20}];
console.log(arrayQualquer);