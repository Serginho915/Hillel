let number = prompt('enter yours number');
let res = true;
switch(number[0] == number[1] == number[2]){
    case true:
        console.log('All gigits are same!')
        break;
    case false:
        switch (number[0] == number[1] || number[0] == number[2] || number[1] == number[2]){
            case true:
                console.log('two digits same');
                break;
            case false:
                console.log('Theres no match');
                break;
        }
        
}


