let name = prompt('What`s your name?');
let surname = prompt('What`s your surname?');
let age = prompt('What`s your age?');

if((typeof(name) === 'string') && (typeof(surname) === 'string') && (+age / 1)){
    let result = `Hello ${name} ${surname}. You are ${age} years old`
    alert(result)
}
else{
    alert('Something typed wrong. Try again');
}
 