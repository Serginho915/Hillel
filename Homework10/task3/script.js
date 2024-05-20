const form = document.getElementById('form');



form.addEventListener('submit',(e) =>{
  e.preventDefault();

  const list = document.getElementById('list')
  const newTaskInput = document.getElementById('new-Task');
  const newTaskItem = document.createElement('li');
        newTaskItem.textContent = newTaskInput.value;

  const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';

        newTaskItem.appendChild(deleteButton);

        deleteButton.addEventListener('click',() =>{
          newTaskItem.remove(); 
        })

        list.appendChild(newTaskItem);
        


})