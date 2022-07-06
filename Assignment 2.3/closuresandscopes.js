//Q3
// http://www.codewars.com/kata/closures-and-scopes/train/javascript

function createFunctions(n) {
    var callbacks = [];
  
    for (let i=0; i<n; i++) {
      callbacks.push(function() {
        return i;
      });
    }
    
    return callbacks;
}

let arr=createFunctions(3);
console.log(arr);