//Q3
// http://www.codewars.com/kata/basic-mathematical-operations

function basicOp(operation, value1, value2)
{
  switch(operation) {
    case "+": return value1 + value2;
    case "-": return value1 - value2;
    case "*": return value1 * value2;
  }
  return value1 / value2;
}

console.log(basicOp("-",10,3));