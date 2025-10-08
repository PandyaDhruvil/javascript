try {
    console.log("start try block");
    console.log(d);

} catch(error) {
    console.log("show the error");
}

console.log("runnable programmers");

//try cathc throw

try{
    let age = -5
    if (age < 0) throw new Error("age cannot be negative");
    console.log("age is valid",age);
} catch (error) {
    console.log("error",error.message);
}


try{
    console.log("try");
    throw new Error("went Wrong");
} catch (err) {
    console.log("caught",err.message);
}finally {
    console.log("finally runn");
}


//using function
function divide(aa,bb) {
    try {
        if(bb === 0) throw new Error("could not divide by zero");
        return aa/bb;
    }catch (err) {
        console.log("error",err.message);
    }
}

        console.log(divide(10,5));
        console.log(divide(11,0));


        //console.log("hello" //SyntaxError: missing ) after argument list
          //  let x = ; //SyntaxError: Unexpected token ';'
            //console.log(myVar); //  myVar is not defined


            //let num = 1;
          //  num.toPrecision(500); //  too many digits


            let y = 123e5;    // 12300000//exopentional notaion
            let z = 123e-5;
            console.log( y + z);

            let x =5;
            let w = 7;
            let V= 5
            console.log(x==w);
            console.log(x==V);


//             typeof {name:'John'}   // Returns object
// typeof [1,2,3,4]       // Returns object
// typeof new Map()       // Returns object
// typeof new Set() 
    
// typeof function (){
//      console.log(typeof);
// } 

//array is anarray
const fruits = ["apples", "bananas", "oranges"];
Array.isArray(fruits);
console.log(fruits);


let time = new Date();
(time instanceof Date);
console.log(time);

let fruit = ["mango","grapes","pineaple"];
(fruit instanceof Array);
console.log(fruit);


try {
  let x = 10;
  let y = 0;
  let result = x / y;   
  console.log(result);
} catch (error) {
  console.log("Something went wrong:", error);
}

try{
    let age = 1;
    if (age< 18) {
        throw "u not old enough";
    }
    console.log("can voting");
}  catch(error){
    console.log("error caught",error)
}


