
let number = +prompt('Enter your number');
    bool = true;
    
    for(let i = 2; i < number; i++) {
        if(number % i === 0) bool = false;
    }


bool ? console.log(`${number} is simple number`) : console.log(`${number} is  not simple number`)