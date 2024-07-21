// main.js

$(document).ready(function() {
    const $form = $('.js--form');
    const $input = $('.js--form__input');
    const $todosWrapper = $('.js--todos-wrapper');
    const $taskModal = $('#taskModal');
    const $taskText = $('#taskText');

    const loadTodos = () => {
        const todos = JSON.parse(localStorage.getItem('todos')) || [];
        $todosWrapper.empty();
        todos.forEach(todo => addTodoElement(todo));
    };

    const saveTodos = () => {
        const todos = [];
        $('.todo-item').each(function() {
            const $item = $(this);
            const description = $item.find('.todo-item__description').text();
            const completed = $item.find('input[type="checkbox"]').is(':checked');
            todos.push({ description, completed });
        });
        localStorage.setItem('todos', JSON.stringify(todos));
    };

    const addTodoElement = (todo) => {
        const $todoItem = $('<li>', { class: `todo-item ${todo.completed ? 'todo-item--checked' : ''}` });

        const $checkbox = $('<input>', { type: 'checkbox', checked: todo.completed }).on('change', function() {
            $todoItem.toggleClass('todo-item--checked');
            saveTodos();
        });

        const $description = $('<span>', { class: 'todo-item__description', text: todo.description });

        const $deleteButton = $('<button>', { type: 'button', class: 'todo-item__delete', text: 'Видалити' }).on('click', function() {
            $todoItem.remove();
            saveTodos();
        });

        $todoItem.append($checkbox, $description, $deleteButton);
        $todosWrapper.append($todoItem);

        $todoItem.on('click', function() {
            $taskText.text(todo.description);
            $taskModal.modal('show');
        });
    };

    $form.on('submit', function(e) {
        e.preventDefault();
        const newTodo = { description: $input.val().trim(), completed: false };
        if (newTodo.description) {
            addTodoElement(newTodo);
            saveTodos();
            $form.trigger('reset');
        }
    });

    loadTodos();
});
