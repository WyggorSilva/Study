// DESESTRUTURAÇÃO DE ARRAYS Utilizando em ARRAYS e OBJETOS - Surgiu para extrair dados em array e atribuição de valores para variaveis

/* const nomes = ["Wyggor", "Danielle", "Bernardo"];

const nome1 = nomes[0];
const nome2 = nomes[1];
const nome3 = nomes[2];

const [nome1, nome2, nome3] = nomes;

console.log("Nome 1: ", nome1);
console.log("Nome 2: ", nome2);
console.log("Nome 3: ", nome3); */

const casais = [["Wyggor", "Danielle"], ["Bernardo", "Luna"]];
/* const [casal1, casal2] = casais;
console.log("Casal 1: ", casal1);
console.log("Casal 2: ", casal2); */

const [[nome1, nome2] , [nome3, nome4]] = casais;

console.log("Nome 1: "+ nome1);
console.log("Nome 2: "+ nome2);
console.log("Nome 3: "+ nome3);
console.log("Nome 4: "+ nome4);

// DESESTRUTURAÇÃO DE OBJETOS

const pessoa ={
    nome: "Wyggor",
    sobrenome:"Silva",
    familia: ["Danielle", "Bernardo", "Christopher", "Luna", "Helena"]
}

/* const {nome: primeiroNome, sobrenome: ultimoNome, familia: membrosFamilia} = pessoa;
console.log("Nome: ", primeiroNome);
console.log("Sobrenome: ", ultimoNome);
console.log("Família: ", membrosFamilia);

console.log(primeiroNome, ultimoNome, membrosFamilia); */

const {nomeCompleto: {nome: primeiroNome, sobrenome: ultimoNome}, familia} = pessoa;
