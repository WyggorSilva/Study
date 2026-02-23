const form = document.querySelector('form');
const pizzas = document.querySelector('#pizzas');
const checkboxes = document.querySelectorAll('input[type=checkbox]');

form.addEventListener('submit', (evento)=> {
    const atLeastOneCheckBoxMarked = Array.from(checkboxes).some(item => item.checked);
    evento.preventDefault();
    if(atLeastOneCheckBoxMarked){
        console.log("Enviando seus dados do formulário...");
        document.body.innerHTML = '<h1> Formulário Submetido com Sucesso!</h1>';
    } else{
        const feedback = document.createElement('p');
        feedback.innerText = 'Preencha ao menos 1 sabor que compraria novamente!'
        feedback.style.color = 'red';

        pizzas.appendChild(feedback);
    }
});