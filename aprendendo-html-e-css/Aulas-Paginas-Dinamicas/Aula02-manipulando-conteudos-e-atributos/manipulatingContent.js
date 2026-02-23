//ALTERANDO CONTEÚDO DE ELEMENTOS
const buttonsContainer = document.querySelector('.container');

// buttonsContainer.innerHTML += '<button>Botão 4</button>';

const firstTitle = document.querySelector('h1');
firstTitle.innerText = 'Novo Título';

//ALTERANDO ESTILOS

buttonsContainer.style.backgroundColor = 'blue';

//ALTERANDO ATRIBUTOS DA TAGS

const lastTitle = document.getElementById('title4');
title4.setAttribute('id', 'customTitle');

const thirdTitle = document.querySelector('h2:nth-of-type(3)');
thirdTitle.setAttribute('id', 'orangeTitle');

lastTitle.removeAttribute('id');

//COMO CRIAR E REMOVER ELEMENTOS EM TELA

const newLastTitle = document.createElement('h3');
newLastTitle.innerText = 'Título Novo!';
document.body.appendChild(newLastTitle);

const newButton = document.createElement('button');
newButton.innerText = 'Novo Botão';
// newButton.setAttribute('class', 'styledButton'); //APENAS PARA UMA CLASSE
newButton.classList.add('styledButton', 'boldText');
buttonsContainer.appendChild(newButton)