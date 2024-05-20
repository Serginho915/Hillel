const buttonContainer = document.getElementById('buttonContainer');

buttonContainer.addEventListener('click',(e) =>{
  if(e.target.id === 'button'){
    alert(`Ви клікнули на кнопку: ${e.target.textContent}`);
  }
})