//Escopo 

//Escopo Global

//Escopo de bloco

const x = 'variavel global';
if(x){
    
    const z = 'variavel de bloco';
    console.log("X é: ", x);
    console.log("Z é: ", z);
}

//escopo de função

const funcao = () => {
   
    const a = 'variavel do escopo da função';
    console.log("Na função A é:", a);
}
funcao();

//Hoisting - Pode acontecer com variaveis e também com função, portanto sempre utilize LET ou CONST para declarar ao inves de VAR.

