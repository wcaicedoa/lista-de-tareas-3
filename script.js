const todos = [];

function addTodo() {
  const titleInput = document.getElementById('todo-title');
  const dateInput = document.getElementById('date-picker');
  const title = titleInput.value;
  const dueDate = dateInput.value;

  if (title && dueDate) {
    todos.push({ title, dueDate, completed: false });
    titleInput.value = '';
    dateInput.value = '';
    render();
  }
}

function toggleComplete(index) {
  todos[index].completed = !todos[index].completed;
  render();
}

function deleteTodo(index) {
  todos.splice(index, 1);
  render();
}

function render() {
  const todoList = document.getElementById('todo-list');
  todoList.innerHTML = '';

  todos.forEach((todo, index) => {
    const todoItem = document.createElement('div');
    todoItem.className = `todo-item ${todo.completed ? 'completed' : ''}`;

    const todoText = document.createElement('div');
    todoText.className = 'todo-text';
    todoText.textContent = `${todo.title} - ${todo.dueDate}`;
    todoItem.appendChild(todoText);

    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'buttons';

    const completeButton = document.createElement('button');
    completeButton.textContent = todo.completed ? 'Desmarcar' : 'Completar';
    completeButton.onclick = () => toggleComplete(index);
    buttonContainer.appendChild(completeButton);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Eliminar';
    deleteButton.onclick = () => deleteTodo(index);
    buttonContainer.appendChild(deleteButton);

    todoItem.appendChild(buttonContainer);
    todoList.appendChild(todoItem);
  });
}

render();
