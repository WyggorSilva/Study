//Push /Pop / Switch /Unshift

const listaDeConvidados = ["Danielle", "Bernardo", "Christopher", "Luna", "Helena"]; 

listaDeConvidados.push("Miguel"); //Adiciona no final do array
console.log(listaDeConvidados);

listaDeConvidados.pop();//Remove o ultimo item do array.
console.log(listaDeConvidados);

listaDeConvidados.unshift("Wyggor"); //Adiciona no primeira posição do array
console.log(listaDeConvidados);

listaDeConvidados.shift(); //Remove a primeira posição do array
console.log(listaDeConvidados);

console.log("O Wyggor está incluido na lista de convidados: ", listaDeConvidados.includes("Wyggor")); //(ES7) para verificar se o item está no array