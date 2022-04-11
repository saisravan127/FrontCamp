//Q4
// http://www.codewars.com/kata/transportation-on-vacation

function rentalCarCost(d) {
    let discount=(d<3)?0:(d>=3 && d<7)?(20):50;
    return 40*d-discount;
}

console.log(rentalCarCost(10));