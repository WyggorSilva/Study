//Spread operators em arrays - Para copias rasas

const listaDeConvidados = ["Wyggor", "Danielle", "Bernardo"];

//const listaDeConvidadosAtualizada = [listaDeConvidados[0], listaDeConvidados[1], listaDeConvidados[2], "Christopher", "Luna", "Helena"];

/* const listaDeConvidadosAtualizada = [...listaDeConvidados, "Christopher", "Luna", "Helena"]; //Pode colocar o spread no inicio ou no fim
console.log("Lista de Convidados Atualizada: ", listaDeConvidadosAtualizada); */

console.log("Lista de Convidados: ", listaDeConvidados); 

const lista2 = [...listaDeConvidados];

lista2.push("Miguel");

console.log("Lista: ", lista2);

console.log("____________________________________");

//Spread operators em objetos

const professor1 = {
    materia: "Música",
    escola: "Escola de Música",
    nome: "Wyggor",
}
const professor2 = {
    ...professor1,
       nome: "Danielle",
}

console.log("Professor 1: ", professor1);
console.log("Professor 2: ", professor2);