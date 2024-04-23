let number = Math.floor(+prompt('Enter your number'));
    str = '';

for (let i = 1; i <= 100; i++) {
   
    if(i ** 2> number){
        break;
    }

    str += `${i} \n`
}

console.log(str);