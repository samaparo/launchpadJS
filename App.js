// list of todo list items
let todos = [
  {
    title: "Ask crush out to prom",
    isDone: false,
  },
  {
    title: "Learn to skateboard",
    isDone: true,
  },
];

// render out a list of todos to #todoList
function render(todos) {
  // loop over every todo and add new DOM elements to list
  const domElements = document.createDocumentFragment();
  todos.forEach((todo) => {
    // set up checkbox and a listen for changes
    const checkboxElement = document.createElement("input");
    checkboxElement.setAttribute("type", "checkbox");
    checkboxElement.checked = todo.isDone;
    checkboxElement.addEventListener("change", function (e) {
      toggleTodo(todo, e.target.checked);
      render(todos);
    });

    const todoElement = document.createElement("div");
    todoElement.appendChild(checkboxElement);
    todoElement.appendChild(document.createTextNode(todo.title));

    domElements.appendChild(todoElement);
  });

  // replace old todo list with new one
  const todoListContainer = document.querySelector("#todoList");
  todoListContainer.innerHTML = "";
  todoListContainer.appendChild(domElements);
}

// update todos
function addTodo(newTodo) {
  todos = todos.concat(newTodo);
}

// update todos
function toggleTodo(todoToUpdate, isDone) {
  const matchingTodo = todos.find((todo) => todoToUpdate.title === todo.title);
  matchingTodo.isDone = isDone;
}

// our "main" function that runs when the page is done loading
(function () {
  // render initial list of todos
  render(todos);

  // when someone submits the todo form, add a new todo
  const form = document.querySelector("#todoForm");
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const input = form.querySelector("input");
    const todoTitle = input.value;
    // update state
    addTodo({
      title: todoTitle,
      isDone: false,
    });
    input.value = "";

    // re-render everything
    render(todos);
  });
})();
