"use strict";

// main.js

$(document).ready(function () {
  var $form = $('.js--form');
  var $input = $('.js--form__input');
  var $todosWrapper = $('.js--todos-wrapper');
  var $taskModal = $('#taskModal');
  var $taskText = $('#taskText');
  var loadTodos = function loadTodos() {
    var todos = JSON.parse(localStorage.getItem('todos')) || [];
    $todosWrapper.empty();
    todos.forEach(function (todo) {
      return addTodoElement(todo);
    });
  };
  var saveTodos = function saveTodos() {
    var todos = [];
    $('.todo-item').each(function () {
      var $item = $(this);
      var description = $item.find('.todo-item__description').text();
      var completed = $item.find('input[type="checkbox"]').is(':checked');
      todos.push({
        description: description,
        completed: completed
      });
    });
    localStorage.setItem('todos', JSON.stringify(todos));
  };
  var addTodoElement = function addTodoElement(todo) {
    var $todoItem = $('<li>', {
      "class": "todo-item ".concat(todo.completed ? 'todo-item--checked' : '')
    });
    var $checkbox = $('<input>', {
      type: 'checkbox',
      checked: todo.completed
    }).on('change', function () {
      $todoItem.toggleClass('todo-item--checked');
      saveTodos();
    });
    var $description = $('<span>', {
      "class": 'todo-item__description',
      text: todo.description
    });
    var $deleteButton = $('<button>', {
      type: 'button',
      "class": 'todo-item__delete',
      text: 'Видалити'
    }).on('click', function () {
      $todoItem.remove();
      saveTodos();
    });
    $todoItem.append($checkbox, $description, $deleteButton);
    $todosWrapper.append($todoItem);
    $todoItem.on('click', function () {
      $taskText.text(todo.description);
      $taskModal.modal('show');
    });
  };
  $form.on('submit', function (e) {
    e.preventDefault();
    var newTodo = {
      description: $input.val().trim(),
      completed: false
    };
    if (newTodo.description) {
      addTodoElement(newTodo);
      saveTodos();
      $form.trigger('reset');
    }
  });
  loadTodos();
});