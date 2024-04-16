const number = 10;
const bigNumber = 10000000000n;
const text = 'text';
const bool = 'true';
const unique = Symbol('a1');
const empty = null;
let nothing;
const arr = [1,'text',true,[1,2,3]];
const obj = {
    name : 'Serhii',
    surname: 'Kozhyn',
    isStudent: true,
    dateOfBirth:{
                    date: '17',
                    month: 'November',
                    year: '1997'
                }
}


console.log(
    `number = ${number}             type of number = ${typeof(number)}
     bigNumber = ${bigNumber}       type of bigNumber = ${typeof(bigNumber)}
     text = ${text}                 type of text = ${typeof(text)}
     bool = ${bool}                 type of bool = ${typeof(bool)}
     symbol =  ${String(unique)}   type of symbol = ${typeof(unique)}
     empty = ${empty}               type of empty = ${empty}
     nothing = ${nothing}           type of nothing = ${nothing}
     arr = ${arr}                   type of arr = ${typeof(arr)}
     obj = ${obj}                   type of obj = ${typeof(obj)}
    
    `
)