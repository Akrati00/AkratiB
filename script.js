document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-btn');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

   
    addButton.addEventListener('click', () => {
        const task = todoInput.value.trim();
        if (task !== '') {
            addTodoItem(task);
            todoInput.value = '';
        }
    });

   
    todoInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addButton.click();
        }
    });

    
    function addTodoItem(task) {
        const li = document.createElement('li');
        li.classList.add('todo-item');
        li.innerHTML = `
            <span>${task}</span>
            <button class="delete-btn">Delete</button>
        `;
        
        
        li.querySelector('.delete-btn').addEventListener('click', () => {
            li.remove();
        });

        todoList.appendChild(li);
    }
});
