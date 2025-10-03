/*let name1 = "krishn";
let age1 = 21;

let name2 = "radhe";
let age2 = 22;

function introduce(name,age){
   console.log(`hello, my name is ${name} and i am ${age} years old`);
}

introduce(name1, age1);
introduce(name2,age2);


let name3 = "jay";
let city1 = "gandhingar";

let name4 = "lalji";
let city2 ="surat";

function myself(name,city){
    console.log(`today introduce ${name} and city ${city}`);
}

myself(name3,city1);
myself(name4,city2);

//object
let car = {//object
   //properties
    Brand : "wolkswegan",
    model : "virtus",
    year : 2026,
    //method
    start : function(){
        console.log("the car is starting");
    }

}
        console.log(car.Brand);
        console.log(car.model);

        car.start();


        //prototype work
        let person ={
            jeo:function() {
                console.log("who one can message");
            }
        };


        let student = Object.create(person);

        student.nam = "radhe";

        console.log(student.nam);
        student.jeo();*/

        //class
        class perosn {
            constructor(name,age) {
                this.name = name;
                this.age = age;
            }
            greet(){
                console.log(`this  name is ${this.person}`);
            }
        }
            let person1 = new person("old High-court","thaltej");
            let person2 = new person("mahtma Mandir","motera");

            console.log(person1.name);
            console.log(person2.age);

            person1.greet();
            person2.greet();

