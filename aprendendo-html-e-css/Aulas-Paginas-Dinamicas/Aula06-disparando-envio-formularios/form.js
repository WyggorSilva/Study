const form = document.querySelector('form');
const pizzas = document.querySelector('#pizzas');
const checkboxes = document.querySelectorAll('input[type=checkbox]');

const sendForm = async(bodyObject) => {
  try {
    const resposta = await fetch('https://jsonplaceholder.typicode.com/posts/', {
      method: 'POST',
      body: JSON.stringify(bodyObject),
      headers: {
        'Content-type': 'application/json',
      },
    });
    if (!resposta.ok){
      throw new Error('Ops! Algo deu errado no POST!');
    }
  } catch (err){
    throw err;
  }
}

form.addEventListener('submit', async (evento)=> {
    evento.preventDefault();
    const atLeastOneCheckBoxMarked = Array.from(checkboxes).some(item => item.checked);
    if(atLeastOneCheckBoxMarked){
       
       const formData = new FormData(form);
       const body  = Object.fromEntries(formData.entries());

       body.pizzas = formData.getAll('pizzas');

        try {
            await sendForm(body);
            document.body.innerHTML = '<h1> Formulário Submetido com Sucesso!</h1>';
        } catch (err) {
            document.body.innerHTML = '<h1> Ops! Algo deu errado ao submeter o formulário!</h1>';
        }
    } else{
        const feedback = document.createElement('p');
        feedback.innerText = 'Preencha ao menos 1 sabor que compraria novamente!'
        feedback.style.color = 'red';

        pizzas.appendChild(feedback);
    }
});