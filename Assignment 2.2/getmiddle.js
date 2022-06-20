//Q2
// http://www.codewars.com/kata/get-the-middle-character

function getMiddle(s)
{
    if(s.length%2==0){
       let index=(s.length/2)-1;
       return s.substring(index,index+2);
    }
    return s[Math.floor(s.length/2)];      
}

String.prototype.getMiddle=function(){
    if(this.length%2==0){
        let index=(this.length/2)-1;
        return this.substring(index,index+2);
     }
     return s[Math.floor(this.length/2)]; 
}
console.log(getMiddle("sravan"));
console.log("sravan".getMiddle());