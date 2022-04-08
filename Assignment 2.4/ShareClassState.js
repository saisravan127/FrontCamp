//Q1
// http://www.codewars.com/kata/using-closures-to-share-class-state

var Cat = (function (name1,weight1) {
    let cats = []

   let constructor = function (name, weight) {
    if (!name || !weight) 
      throw Error('invalid parameters')
    Object.defineProperty(this, 'name', {
      get: () => {return name;}
    });
    Object.defineProperty(this, 'weight', { 
      get: () => {return weight;}, 
      set: (value) => {weight = value;} 
    });
      cats.push(this);
  }
  constructor.averageWeight = () =>{
      let res=0;
      for(let i=0;i<cats.length;i++)res+=cats[i].weight;
      return res/cats.length;
  }

  return constructor;
}());