//Q2
// http://www.codewars.com/kata/a-chain-adding-function

function add(n){
    
    let res= function(b){
        return add(n+b);
    }
    res.toString=()=> n;
    return res;
    
}

console.log(add(1)(2)(3).valueOf());