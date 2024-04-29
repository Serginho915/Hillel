const calcArithmeticMean = (arr) =>{
    let result = 0;
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        if(Number.isInteger(arr[i])){
            result += arr[i]
            count++;
        }
    }

    return result / count;
}



const arr = [1,2,'text',true,3,4,'text2',false];

console.log(calcArithmeticMean(arr));

