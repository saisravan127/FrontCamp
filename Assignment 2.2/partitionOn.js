//Q3
// http://www.codewars.com/kata/partition-on

function partitionOn(pred, items) {
    let arr1 = items.filter(v=>pred(v))
    let arr2 = items.filter(v=>!pred(v))
  items.length=0
  for(let i = 0; i < arr2.length; i++) { items.push(arr2[i]); }
  for(let i = 0; i < arr1.length; i++) { items.push(arr1[i]); }
  return arr2.length;
}