const todoList = JSON.parse(localStorage.getItem('todoList')) || [{
  name: 'was dishes',
  dueDate: '2027-12-22'
}, {
  name: 'make dinner', 
  dueDate: '2027-11-22'
}];

renderTodoList();

document.querySelector('.js-add-task-button')
  .addEventListener('click', () => {
    addTask();
  })

function addTask() {
  const nameInputElement = document.querySelector('.js-name-input');
  const name = nameInputElement.value;

  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;

  todoList.push({
    name,
    dueDate
  });

  saveToStorage();

  nameInputElement.value = '';
  dateInputElement.value = '';

  renderTodoList();
}


function renderTodoList() {
  let todoListHTML = '';

  todoList.forEach((todoObject, index) => {
    const { name, dueDate } = todoObject;

    const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button class="delete-task-button js-delete-task-button">Delete</button>
    `;

    todoListHTML += html;
  });

  document.querySelector('.js-todo-list').innerHTML = todoListHTML;

  document.querySelectorAll('.js-delete-task-button')
    .forEach((deleteButton, index) => {
      deleteButton.addEventListener('click', () => {
        deleteTask(index);
      });
    });
    
}

function deleteTask(index) {
  todoList.splice(index, 1);
  saveToStorage();
  renderTodoList();
}

function saveToStorage() {
  localStorage.setItem('todoList', JSON.stringify(todoList));
}