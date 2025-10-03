/*function addNumbers(l1,l2) {}
    return l1 + l2;

    const result=addNumbers(56,53);
    console.log(result);*/  
    
   function  printname(name)//declration
{
    return 'hello' + name + "!!1";

}   
console.log(printname("dhruvil")); 

//insdie variable
const add = function(aa,bb){
    return aa + bb;
}
  console.log(add(5,3));


  //arrow
  //const multipy = (a,b) => a * b;

  //console.log(multipy(4,6));

  function welcome(guys = "gyzss") {
    return "welcome," + guys;
  }
    console.log(welcome());
    console.log(welcome("krishn"));



    function factorial (n) {
        if (n ==0) return 1;
        return n * factorial(n - 1);
    }
        console.log(factorial(7));

        //IIFE
       ( function() {
            console.log("run as soon as possible");
            console.log("jay mataji");
        })();

        //function with object
        function person(personn) {
            return `name: ${personn.name}, age: ${personn.age} `;
        }

        console.log("leo1",person({name:"krishn",age: 21}));

        //fun with array
        function evennumber(arr) {
            return arr.filter( num => num % 2 === 0);
        }
         
        console.log("12",evennumber([1,2,3,4,5,6,7,8]));
    