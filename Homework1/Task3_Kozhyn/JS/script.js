debugger;
let number = prompt("enter a five-digit number");
switch ( !(typeof(+number)=== `number`)){

    case true:
        let res = '';
        number.toString()
        for (let i = 0; i < number.length; i++) {
            res += number[i] + " ";
        }  
        alert(res);
        break;
    default:
        alert(`Try again.`);
}

