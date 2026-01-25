/* function imprimir() { //função sem parâmetros e sem retorno.
    console.log("Olá Mundo!");
}

imprimir(); */

/* function imprimir(impressao)
{
    console.log(impressao);
}
imprimir("Olá Mundo!"); */

const imprimir = function(impressao)
{
    console.log(impressao);
}
imprimir("Olá Mundo!");
const valor1 = 2;
const valor2 = 4;

const calcularSoma = function(valor1, valor2){
    //console.log(`A soma entre ${valor1} e ${valor2} é: ${valor1 + valor2}`);
    return valor1 + valor2;
}
imprimir(`A soma entre ${valor1} e ${valor2} é: ${valor1 + valor2}`);