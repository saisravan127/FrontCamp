//Q1
// http://www.codewars.com/kata/prefill-an-array

function prefill(n, v) {
    if (parseInt(n) !== Math.abs(n)){
      throw new TypeError(`${n} is invalid`);
    }
    if(n===0 || n==="0") return [];
    if(v==undefined) return Array(n); 
    return Array(n).fill(v);    
}