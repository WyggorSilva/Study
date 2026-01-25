const notasFinais = [
    {nome: "Wyggor", nota: 9},
    {nome: "Danielle", nota: 8},
    {nome: "Bernardo", nota: 6},
    {nome: "Christopher", nota: 4},
    {nome: "Luna", nota: 2},
    {nome: "Helena", nota: 7},
]

//LANÇO DE REPETIÇÃO
/* for(let i=0; i<notasFinais.length; i++)
    {
        if(notasFinais[i].nota >=6){
            console.log(`O aluno ${notasFinais[i].nome} está aprovado com ${notasFinais[i].nota}!`)
        }
        else{
            console.log(`O aluno ${notasFinais[i].nome} está reprovado com ${notasFinais[i].nota}!`)
        }

} */

//LOOP FOR OF
/* for(let aluno of notasFinais){
    if(aluno.nota >=6){
            console.log(`O aluno ${aluno.nome} está aprovado com ${aluno.nota}!`);
        }
        else{
            console.log(`O aluno ${aluno.nome} está reprovado com ${aluno.nota}!`);
        }
} */

//FOR EACH
notasFinais.forEach((aluno) =>{
 if(aluno.nota >=6){
            console.log(`O aluno ${aluno.nome} está aprovado com ${aluno.nota}!`);
        }
        else{
            console.log(`O aluno ${aluno.nome} está reprovado com ${aluno.nota}!`);
        }
});