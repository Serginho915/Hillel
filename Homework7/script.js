function calculateTotalSalary(object) {
    let sum = 0;
    for (const key in object) {
        if (Array.isArray(object[key])) {
            sum += object[key].reduce(function(accumulator, currentValue) {
                return accumulator + currentValue.salary;
            }, 0);
        } else if (typeof object[key] === 'object') {
            sum += calculateTotalSalary(object[key]); 
        }
    }
    return sum;
}
// Без циклу(чиста рекурсія)
// function calculateTotalSalary(object) {
//     if (Array.isArray(object)) { 
//         return object.reduce((accumulator, currentValue) => accumulator + currentValue.salary, 0);
//     } else if (typeof object === 'object') { 
//         return Object.keys(object).reduce((accumulator, key) => accumulator + calculateTotalSalary(object[key]), 0);
//     } else { 
//         return 0;
//     }
// }

let company ={
    sales:[{name:'John',salary:1000},{name:'Steve',salary:1500},{name:'Anton',salary:20000}],
    development:{
        web:[{name:'Anna',salary:9000},{name:'Victor',salary:7000}],
        design:[{name:'Kevin',salary:5000},{name:'Lena',salary:1000}],
        HR:{
            outsource:[{name:'Amanda',salary:15000}],
            employee:[{name:'Kristina',salary:13000}]
        }
    }
}

console.log(calculateTotalSalary(company)); 