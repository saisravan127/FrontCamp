//Q4
// http://www.codewars.com/kata/transportation-on-vacation

function rentalCarCost(d) {
    let res=40*d;
    if(d<3)
        return res;
    if(d>=3 && d<7)
       return res-20;
    return res-50;
}

console.log(rentalCarCost(10));