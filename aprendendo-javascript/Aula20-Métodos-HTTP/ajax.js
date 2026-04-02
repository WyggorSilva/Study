//Método GET - Para buscar os dados

const getPosts = async () => {
    try {
        const resposta = await fetch('https://jsonplaceholder.typicode.com/posts');
        const dados = await resposta.json();
        if(dados.error){
            throw new Error(DataTransfer.error);
        }
        if(!resposta.ok){
            throw new Error('Ops! Algo deu errado no GET!');
        }
        console.log("Dados do GET: ", dados);
    } catch (err) {
        console.log(err);
    }
}

// getPosts();


//Método POST - Para colocar um item/Postar

const publishNewPost = async() => {
  try {
    const resposta = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
      }),
      headers: {
        'Content-type': 'application/json',
      },
    });
    const dados = await resposta.json();
    if (dados.error){
      throw new Error(data.error);
    }
    if (!resposta.ok){
      throw new Error('Ops! Algo deu errado no POST!');
    }
    console.log("Resposta do POST: ", dados);
  } catch (err){
    console.log(err);
  }
}

// publishNewPost();

//Método PUT - Para fazer a edição/alterando

const editPost = async() => {
  try {
    const resposta = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
      method: 'PUT',
      body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
      }),
      headers: {
        'Content-type': 'application/json',
      },
    });
    const dados = await resposta.json();
    if (dados.error){
      throw new Error(data.error);
    }
    if (!resposta.ok){
      throw new Error('Ops! Algo deu errado no PUT!');
    }
    console.log("Resposta do PUT: ", dados);
  } catch (err){
    console.log(err);
  }
}

// editPost();

//Método PATCH - Serve para editar apenas uma propriedade de 1 registro

const editPostTitle = async() => {
  try {
    const resposta = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
      method: 'PATCH',
      body: JSON.stringify({
        title: 'fooh',
      }),
      headers: {
        'Content-type': 'application/json',
      },
    });
    const dados = await resposta.json();
    if (dados.error){
      throw new Error(data.error);
    }
    if (!resposta.ok){
      throw new Error('Ops! Algo deu errado no PATCH!');
    }
    console.log("Resposta do PATCH: ", dados);
  } catch (err){
    console.log(err);
  }
}

// editPostTitle();

// Método DELETE

const deletePost = async() => {
  try {
    const resposta = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
      method: 'DELETE',
    });
    const dados = await resposta.json();
    if (dados.error){
      throw new Error(data.error);
    }
    if (!resposta.ok){
      throw new Error('Ops! Algo deu errado no DELETE!');
    }
  } catch (err){
    console.log(err);
  }
}

deletePost();