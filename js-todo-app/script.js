 const input = document.getElementById('todo-input');
 const form = document.getElementById('todo-form');
 const list = document.getElementById('todo-list');


 form.addEventListener('submit', (event) => {
    event.preventDefault();
    const todoItem = input.value;
    const li = document.createElement('li');
    li.textContent = todoItem;
    list.appendChild(li);
    input.value = '';
 });