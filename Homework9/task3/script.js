const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const image = document.createElement('img');
image.setAttribute("src", `images/image${getRandomInt(1,10)}.jpeg`);
document.body.appendChild(image);