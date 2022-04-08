//Q4
// http://www.codewars.com/kata/can-you-keep-a-secret

function createSecretHolder(secret) {
    let obj={   
        getSecret: function(){
             return secret;
        },
        setSecret: function(val){
          secret=val;
        }
     };
   return obj;
}

var holder=createSecretHolder(5);
console.log(holder.getSecret());