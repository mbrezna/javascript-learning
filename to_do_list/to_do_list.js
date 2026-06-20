const todoList = ['ahoj'];

renderTodoList();

function addTask() {
  //access input element
  const inputElement = document.querySelector('.js-name-input');
  //get value from the input element and save it into a variable
  const name = inputElement.value;

  //add task on the list
  todoList.push(name);

  //remove the written task pro the input element
  inputElement.value = '';

  renderTodoList();
}

function renderTodoList() {
  //create variable for saving the result
  let todoListHTML = '';

  //using accumulator pattern for looping through the todoList array
  for (let i = 0; i < todoList.length; i++) {
    const todo = todoList[i];

    //create paragraph with each list item
    const html = `<p>${todo}</p>`;

    //add every item result variable
    todoListHTML += html;
  }

  //put result variable to the HTML
  document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}