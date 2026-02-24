const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

addTaskBtn.addEventListener("click", addTask);

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Digite uma tarefa válida!");
        return;
    }

    // Criando o elemento da tarefa
    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = taskText;

    // Container dos botões
    const buttonDiv = document.createElement("div");
    buttonDiv.classList.add("task-buttons");

    // Botão editar
    const editBtn = document.createElement("button");
    editBtn.textContent = "Editar";
    editBtn.classList.add("edit-btn");

    editBtn.addEventListener("click", function () {
        const newTask = prompt("Editar tarefa:", span.textContent);
        if (newTask !== null && newTask.trim() !== "") {
            span.textContent = newTask;
        }
    });

    // Botão excluir
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Excluir";
    deleteBtn.classList.add("delete-btn");

    deleteBtn.addEventListener("click", function () {
        taskList.removeChild(li);
    });

    // Montando estrutura
    buttonDiv.appendChild(editBtn);
    buttonDiv.appendChild(deleteBtn);

    li.appendChild(span);
    li.appendChild(buttonDiv);

    taskList.appendChild(li);

    taskInput.value = "";
}