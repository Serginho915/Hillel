
 const removeChar = (str,arr) => {
    let resultSTR = str.toLowerCase();
    for (let i = 0; i < resultSTR.length; i++) {
        for (let j = 0; j < arr.length; j++) {
          if(resultSTR[i].includes(arr[j])){
            resultSTR = resultSTR.slice(0, resultSTR.indexOf(resultSTR[i])) + '' + resultSTR.slice(i+1);
            i--;
          }
            
        }
        
    }
    return resultSTR;
 }


 console.log(removeChar('Hello world!',['l','d']))