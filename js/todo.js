const toDoForm = document.querySelector(".todo-box__box__form");
const toDoInput = document.querySelector(".todo-box__box__form input")
const toDoList = document.querySelector(".todo-box__box__list");


const TODOS = "todos"
let toDos = [];


function saveToDos() {
    localStorage.setItem(TODOS, JSON.stringify(toDos));
}


function deleteToDo(event) {
    const li = event.target.parentElement.parentNode;
    li.remove();
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    saveToDos();
    console.log(event.target.parentElement.parentElement)
}

function paintToDo(newTodo) {
    const ul = document.createElement("ul");
    
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.className = "todo-list"
    const button = document.createElement("button");
    const check = document.createElement("input");
    check.setAttribute("type", "checkbox");
    check.className = "check-box";
    const box = document.createElement("div");
    box.className = "todominibox";
    ul.appendChild(li);
    li.appendChild(box);
    box.appendChild(check);
    box.appendChild(span);
    li.appendChild(button);
    
    span.innerText = newTodo.text;
    button.innerHTML = `<i class="fa-solid fa-square-minus"></i>`
    button.addEventListener("click", deleteToDo)
    toDoList.appendChild(ul);
    
}



function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS);

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}