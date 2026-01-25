const idadeChris = 10;
const maioridade = 18;

if(idadeChris >= 18)
  {
  console.log("Chris pode dirigir?");
}
else
  {
    const anosFaltantes = maioridade - idadeChris;
  console.log("Chris NÃO pode dirigir!");
  console.log(`Faltam ${anosFaltantes} anos para Chris poder dirigir.`);
}

//operadores ternários

/* idadeChris >= maioridade ? console.log("Chris pode dirigir"): console.log("Chris NÃO pode dirigir!"); */

console.log("______________________________________");

//faixas etarias
//0 a 12 anos -> infância
//13 a 17 anos -> adolescência
//18 a 25 -> jovens adultos
//26 a 60 -> adulto
// mais que 60 anos -> idoso

const idadePessoa = 10;

if(idadePessoa >= 0 && idadePessoa <= 12){
  console.log("Infância");
} else if (idadePessoa >=13 && idadePessoa <=17) {
  console.log("Adolescência");
}else if (idadePessoa >=18 && idadePessoa <=25) {
  console.log("Jovem Adulto");
}else if (idadePessoa >=26 && idadePessoa <=60) {
  console.log("Adulto");
} else {
  console.log("Idoso"); 
}
console.log("______________________________________");


//Essa forma funciona, mas é menos otimizada
/* if(idadePessoa >= 0 && idadePessoa <= 12){
  console.log("Infância");
}
 if (idadePessoa >=13 && idadePessoa <=17) {
  console.log("Adolescência");
}
 if (idadePessoa >=18 && idadePessoa <=25) {
  console.log("Jovem Adulto");
} 
if (idadePessoa >=26 && idadePessoa <=60) {
  console.log("Adulto");
  
} if(idadePessoa >=61) {
  console.log("Idoso");
} */

  const x = 20;

  if(x % 2 === 0){
    console.log(`O número ${x} é par`);
  }
  if(x % 5 === 0){
    console.log(`O número ${x} é multiplo de 5`);
  }
console.log("______________________________________");
  //Switch case

  const diaDaSemana = 3;
  let nomeDoDia;

  switch (diaDaSemana){
    case 0:
      nomeDoDia = "Domingo";
      break;
    case 1:
      nomeDoDia = "Segunda-Feira";
      break;
    case 2:
      nomeDoDia = "Terça-Feira";
      break;
    case 3:
      nomeDoDia = "Quarta-Feira";
      break;
    case 4:
      nomeDoDia = "Quinta-Feira";
      break;
    case 5:
      nomeDoDia = "Sexta-Feira";
      break;
    case 6:
      nomeDoDia = "Sábado";
      break;
  }
  console.log("Dia da semana é: ", nomeDoDia);