//const myarr = [1,2,3,4,5,6]
//console.log(myarr[2]);
//push
//myarr.push(6)
//myarr.pop()
//myarr.unshift(9)
//myarr.shift()
//console.log(myarr);

/*const new1 = myarr.join
console.log(myarr);
console.log(new1);
*/
/*const fruits = ["Apple", "Orange", "Apple", "Mango"];
let position = fruits.indexOf("Apple") + 1;

console.log(position);*/

//const myArr = Int16Array.from([1,2,3,4,5,6,7,8,9,0]);

//console.log(myarr);


/*const cars = ["Saab", "Volvo", "BMW"];


cars[0] = "Toyota";


cars.push("Audi");

console.log(cars);*/


const fruits = ["Banana", "Orange", "Apple", "Mango"];

let myList = fruits.toString();
console.log(myList);


const fruitss = ["Banana", "Orange", "Apple", "Mango"];
fruitss.push("kiwi");
console.log(fruitss);

let animal = ["lion","tiger","wolf"];
animal.pop();
animal.shift()
//animal.push("dog");
//animal.unshift("leapoard")
console.log(animal);
//console.log(animal[o]);
//console.log(animal[2]);


//loop thw array
/*let anima = ["lion","tiger","wolf"];
for (let i = 0; i < anima.length; i++) {
    console.log("for loop",anima[i]);
}
    for(let anima of anima ) {
        console.log("for..of",anima);
    }*/
    
     
   /* let arra = [10, 20, 30, 40];

console.log(arra.includes(20));          // true
console.log(arra.indexOf(30));           // 2
console.log(arra.find(n => n > 25));     // 30
console.log(arra.findIndex(n => n > 25)); // 2*/


// Take marks input from user using prompt
let sub1 = Number(prompt("Enter marks for Subject 1:"));
let sub2 = Number(prompt("Enter marks for Subject 2:"));
let sub3 = Number(prompt("Enter marks for Subject 3:"));

// Calculate total and average
let total = sub1 + sub2 + sub3;
let avg = total / 3;

console.log("Total Marks:", total);
console.log("Average Marks:", avg);

// Decide Grade
if (avg >= 90) {
  console.log("Grade: A+");
} else if (avg >= 75) {
  console.log("Grade: A");
} else if (avg >= 60) {
  console.log("Grade: B");
} else if (avg >= 40) {
  console.log("Grade: C");
} else {
  console.log("Grade: Fail");
}



    




/*let arr = [10,20,33,44,55,77];

    console.log(arr.includes(20));
    console.log(arr.indexOf(10));
    console.log(arr.find(n => n > 27));
    console.log(arr.findIndex(n => n > 50));

    let sub0 = Number("sub1");
    let sub1 = Number("sub2");
    let sub2 = Number("sub3");

    let total = sub0 + sub2 + sub2;
    let avg = total / 3;


    console.log(total);
    console.log(avg);


    if (avg>=90){
        console.log("gradeA+");

    } else if (avg>=70){
        console.log("gradeb");

    }else {
        console.log("fail");
    }







