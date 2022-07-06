//Q3
// http://www.codewars.com/kata/function-cache

function cache(func) {
    let cachedArr = {}
    return function(...args){
      let key = JSON.stringify(args)
      if (!cachedArr.hasOwnProperty(key)) cachedArr[key] = func(...args)
      return cachedArr[key]
    }
  }