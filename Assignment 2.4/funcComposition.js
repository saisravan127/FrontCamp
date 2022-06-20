//Q4
// http://www.codewars.com/kata/function-composition

function compose(f,g) {
    return function(...a) {
      return f(g(...a));
    }
  }