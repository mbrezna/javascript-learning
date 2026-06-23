const todoList = [{
  name: 'was dishes',
  dueDate: '2027-12-22'
}, {
  name: 'make dinner', 
  dueDate: '2027-11-22'
}];

renderTodoList();

function addTask() {
  const nameInputElement = document.querySelector('.js-name-input');
  const name = nameInputElement.value;

  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;

  todoList.push({
    name,
    dueDate
  });

  nameInputElement.value = '';
  dateInputElement.value = '';

  renderTodoList();
}

function renderTodoList() {
  let todoListHTML = '';

  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    const { name, dueDate } = todoObject;

    const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button class="delete-task-button" onclick="deleteTask(${i})">Delete</button>
    `;

    todoListHTML += html;
  }

  document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}

function deleteTask(index) {
  todoList.splice(index, 1);
  renderTodoList();
}