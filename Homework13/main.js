document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.js--form');
    const input = document.querySelector('.js--form__input');
    const todosWrapper = document.querySelector('.js--todos-wrapper');


    const loadTodos = () => {
        const todos = JSON.parse(localStorage.getItem('todos')) || [];
        todosWrapper.innerHTML = ''; 
        todos.forEach(todo => addTodoElement(todo));
    };


    const saveTodos = () => {
        const todos = [];
        document.querySelectorAll('.todo-item').forEach(todoItem => {
            const description = todoItem.querySelector('.todo-item__description').textContent;
            const completed = todoItem.querySelector('input[type="checkbox"]').checked;
            todos.push({ description, completed });
        });
        localStorage.setItem('todos', JSON.stringify(todos));
    };


    const addTodoElement = (todo) => {
        const todoItem = document.createElement('li');
        todoItem.className = `todo-item ${todo.completed ? 'todo-item--checked' : ''}`;
        
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = todo.completed;
        checkbox.addEventListener('change', () => {
            todoItem.classList.toggle('todo-item--checked');
            saveTodos();
        });

        const description = document.createElement('span');
        description.className = 'todo-item__description';
        description.textContent = todo.description;

        const deleteButton = document.createElement('button');
        deleteButton.type = 'button';
        deleteButton.className = 'todo-item__delete';
        deleteButton.textContent = 'Видалити';
        deleteButton.addEventListener('click', () => {
            todoItem.remove();
            saveTodos();
        });

        todoItem.appendChild(checkbox);
        todoItem.appendChild(description);
        todoItem.appendChild(deleteButton);
        todosWrapper.appendChild(todoItem);
    };

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const newTodo = { description: input.value, completed: false };
        addTodoElement(newTodo);
        saveTodos();
        form.reset();
    });

    loadTodos();
});
