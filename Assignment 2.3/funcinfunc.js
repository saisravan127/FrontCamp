//Q2
// http://www.codewars.com/kata/a-function-within-a-function

function always (n) {
    return function(){
       return n;
    };
}

let three=always(3);
console.log(three());