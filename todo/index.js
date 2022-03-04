const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); // [{text: "a", id: 1646354977588}] string
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter(toDo => toDo.id !== Number(li.id));
  saveToDos();
}

function paintToDo(newToDoObj) {
  const li = document.createElement("li");
  li.id = newToDoObj.id;
  const span = document.createElement("span");
  span.innerText = newToDoObj.text;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  todoList.appendChild(li);
}

todoForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const newToDo = todoInput.value;
  todoInput.value = "";
  const newToDoObj = {
    text: newToDo,
    id: Date.now(),
  };
  toDos.push(newToDoObj);
  paintToDo(newToDoObj);
  saveToDos();
});

const savedToDos = localStorage.getItem(TODOS_KEY); // [{text: "a", id: 1646354977588}] string
if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos); // (3) [{…}] array
  toDos = parsedToDos;
  parsedToDos.forEach(element => paintToDo(element)); // paintToDo({text: 'a', id: 1646354822150})  
  // 또는
  // for (let i = 0; i < parsedToDos.length; i++) {
  //   paintToDo(parsedToDos[i]);
  // }
}