//Q4
// http://www.codewars.com/kata/santaclausable-interface
function isSantaClausable(obj) {
if(!(typeof obj === 'object')){
    return false;
  }
  
  const hasHo = 'sayHoHoHo' in obj && obj.sayHoHoHo instanceof Function;
  const hasGifts = 'distributeGifts' in obj && obj.distributeGifts instanceof Function;
  const goesInChim = 'goDownTheChimney' in obj && obj.goDownTheChimney instanceof Function;

  return hasHo && hasGifts && goesInChim ;
}
