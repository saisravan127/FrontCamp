//Q1
// http://www.codewars.com/kata/printing-array-elements-with-comma-delimiters


function printArray(array){
    let str = "";
    for(let i = 0; i < array.length; i++){
    if(i != array.length - 1)
     str += array[i].toString() + ",";
    else
      str += array[i].toString();
    }
    return str;
  }

console.log(printArray(["h","e","l","l","o"]));
