const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const getColor = () => `rgb(${getRandomInt(0,255)}, ${getRandomInt(0,255)}, ${getRandomInt(0,255)})`;

const changeText = (button, text) => {
  let isColored = false;

  button.addEventListener('click', () => {
    text.style.color = isColored ? 'black' : getColor();
    isColored = !isColored;
  });
};

const button = document.getElementById('button');
const text = document.querySelector('p');
changeText(button, text);
