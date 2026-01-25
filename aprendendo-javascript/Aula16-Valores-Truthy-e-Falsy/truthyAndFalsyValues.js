//Valores Truthy e Valores Falsy

//São diferente de true e false

//Valores falsy no JS - 0 , "", undefined, null, NAN 

//Exemplos de Valores Falsy, valores que quando convertidos para Boolean são FALSE.
/* console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));
 */

//Exemplos de Valores Truthy, valores que quando convertidos para Boolean são TRUE.
/* console.log("1: ", Boolean(1));
console.log("-1: ",Boolean(-1));
console.log("Objeto: ", Boolean('Olá Mundo'));
console.log("Array: ", Boolean([1,2]));
console.log("Array Vazio: ", Boolean([]));
console.log("Objeto Vazio:", Boolean([])); */

const nomes = ['Wyggor', 'Danielle', '', 'Bernardo'];
console.log("Nomes: ", nomes);

nomes.forEach(nome => {
    if(nome){
        console.log("É truthy: ", nome);
    }
});

/* const nomesFiltrados = nomes.filter((nome) => nome);

console.log("Nomes Filtrados: ", nomesFiltrados); */
/* 
const x = 10;
const y = null;

if(x){
    console.log("X é uma variavel Truthy!");
}

if(y){
    console.log("X é uma variavel Truthy!");
} */