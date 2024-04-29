const removeElement = (arr,item) =>{
    let newarr = arr.filter((arr) => arr !== item);
    return newarr;
}

const array = [1, 3, 4, 6, 2, 5, 7];



console.log(removeElement(array,4)); // Результат: [1, 3, 6, 2, 5, 7]