const usd = 26;
let count = 1;
let result = '';

do{
    if(count === 1){
        count += 9;
    }else{
        count +=10;
    }
    result += `${count}UAH: ${count * usd}USD, \n`
    
}while(count < 100);

console.log(result);