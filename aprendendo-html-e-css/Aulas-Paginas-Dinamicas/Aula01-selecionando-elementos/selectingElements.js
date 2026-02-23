const selectCustomTitle = document.getElementById("customTitle");
console.log("Título selecionado:", selectCustomTitle);

const selectButtons = document.getElementsByTagName("button");
console.log("Botões da Pagina:", selectButtons);

const selectStyledButtons = document.getElementsByClassName("styledButton");
console.log("Botões estilizados:", selectStyledButtons);

// const button = document.querySelector(".styledButton");
// console.log("Botões:", button);

const button = document.querySelectorAll(".styledButton");
console.log("Botões:", button);