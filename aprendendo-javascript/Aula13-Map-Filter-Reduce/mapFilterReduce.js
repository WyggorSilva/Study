const distanciaEmMetros = [1000, 1500, 2000, 2500, 3000, 3500, 4000];

//MAP - Utiliza para varrer o array e consegue atribuir o resultado para uma variavel.

/* distanciaEmMetros.map((distancia) => {
    const distanciaemKm = distancia/1000;
    console.log("A distância em Km: ", distanciaemKm);  
}); */

const distanciaemKm = distanciaEmMetros.map(distancia => distancia /1000); //Com apenas uma expressão
console.log("A distância em Km: ", distanciaemKm); 

//FILTER - É utilizado quando quer filtrar um item no array

/* const itensFiltrados = distanciaEmMetros.filter((distancia, index, arrayOriginal) =>{ 
    console.log(`A distância ${distancia} está no índice ${index}.`)
    console.log(`Array original: ${arrayOriginal}. `);
    if(distancia >2000) return distancia;
}); */

const itensFiltrados = distanciaEmMetros.filter(distancia => distancia >2000); //Com apenas uma expressão

console.log("Itens filtrados: ", itensFiltrados);

//REDUCE - Utiliza para reduzir os valores do array e converte em um unico valor.

const distanciaTotal = distanciaEmMetros.reduce((acc, distancia) => {
    return acc + distancia
});
console.log("Distância Total: ", distanciaTotal);
