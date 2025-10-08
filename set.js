/*const letter = new set();
letters.add("krishn");
letters.add("radhe");
letters.add("govind");
console.log(letters);*/



/*const letter = new Set();

letter.add("krishn");
letter.add("radhe");
letter.add("govind");

console.log(letter);


letter.forEach(value => {
  console.log(value);
});*/


/*const letters = new Set();

const a = "krishn";
const b = "radhe";
const c = "govind";

letters.add("krishn");
letters.add("radhe");
letters.add("govind");

console.log(letters);*/

/*const an = [1,2,3[4,5,6],7,[6,7,[4,5]]]
const ana = an.flat(Infinity)
console.log(an);

console.log(Array.from('krishn'))*/

//we will have an array
 
//lets say 
//const arr=[34,567,76,4,67,89,5,24,77,89,76,44]
 
//Your task is to traverse the array and print element of the array using for loop one by on
//const myarr = [34,567,76,4,67,89,5,24,77,89,76,44]


//console.log(myarr[0]);
/*
console.log(myarr[1]);

for(let i=0; i <= myarr ; i++)
{
    sum = myarr + i;
    console.log(myarr[i]);
}*/






 /*const myarray = [34, 567, 76, 4, 67, 89, 5, 24, 77, 89, 76, 44];
  let sum = 0;

for (let i = 0; i < myarray.length; i++) {
  sum += myarray[i];
}

console.log( sum);*/

/*const myarray1 =[2,3,4,5,6,7];
let summ = 0;
 for (let i =0; i< myarray1.length; i++) {
    summ += myarray1[i]
;
 }
console.log(summ);*/



//let myVariable = "Hello, World!";
//console.log(myVariable); 

/*let var1 = "krishn";
console.log(var1);

function  greet(name) {
        return `hello,${name}`;
}
console.log(greet(krishn));*/

/*let age = 16;
if (age >= 18) {
    console.log("you are adult");
}else {
    console.log("you are not");
}

let =5
for(let i =0; i< 5; i++) {

console.log(i);
}

let person = {
    name:'pandya',
    age:21,
    city:'gandhingar'
};
console.log(person);*/


//const num = parseInt(prompt('enter 1st number'));
//const num1 =parseInt(prompt('enter 2nd number'));

//const  sum = num + num1;

//console.log(`the sum ${num}  of ${num1} and ${sum} total is`);


let scroe1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(scroe1,score2,score3));





const nums = new Set([1, 2, 3]);

console.log(nums.has(2));  
console.log(nums.has(5));  

nums.delete(1);
console.log(nums); 

nums.clear();
console.log(nums); 



//const letter = new setInterval(["mango","banana","cherry"]);
//console.log(letter);


/*const colors = new setInterval(["yellow","black","purple"]);

for (let color of colors) {
  console.log(color);

}
  colors.foreach(c => console.log(c));*/




  /*const colors = new Set(["red", "green", "blue"]);

for (let color of colors) {
  console.log(color);
}

// or using forEach
colors.forEach(c => console.log(c));*/


const fruits = new Set();
fruits.add("apple");
fruits.add("banana");
fruits.add("apple"); 

fruits.clear();

const number = new Set([1,2,3,4,5]);

number.delete(2);
console.log(number);

let letters = new Set(["aa","bbb","ccc"]);
for (let entry of letters.entries()) {
  console.log(entry);
}




let cities = new Set(["bombay","mumbai","pune"]);

for(let key of cities.keys(2)) {

  console.log(key)
}


let A = new Set(['a','b','c' ,'e']);
let B = new Set(['b','c','d']);

let  C = A.isSubsetOf(B);//symmetricDifference(B);//difference//intersection(A);//union(B);
console.log(A);





