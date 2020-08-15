//to find the sum of an arrugument using rest and spread operator
    console.log(sum([1,2,3,4]));
  function sum (...array){


      if(array.length===1 && Array.isArray(array[0]))
       array=[...array[0]];

     
     return array.reduce( (accumulator,currentValue) =>{
      const sub= accumulator + currentValue;
  
     return sub;

     
     
     
    })
   
    }
   