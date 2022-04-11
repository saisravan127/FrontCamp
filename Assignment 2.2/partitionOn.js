//Q3
// http://www.codewars.com/kata/partition-on

function partitionOn(pred, items) {
    let arr1 = items.filter(v=>pred(v))
    let arr2 = items.filter(v=>!pred(v))
  items.length=0
  items.push(...arr2);
  items.push(...arr1);
   
  return arr2.length;
}