const createSum = () => {
    let total = 0;   
    const sum = value => {
        total += value; 
        return total; 
    }
    return sum;
}
const sum = createSum();
console.log(sum(4)); 
console.log(sum(6));
console.log(sum(10)); 
console.log(sum(7)); 