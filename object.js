/*const information = {
    name: "krishn",
    age: 23,
    isloard: true
    

};
console.log("information".city);
information.city="universal";

const perso = {
  name: "Amit",
  age: 25,
  isStudent: true
};

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
  
 
};
console.log(person);
person.fnmae="vasudev";
delete person.age;


const person = {
  firstName: "krishn",
  lastName : "radha",
  id       : 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};
console.log(person);

const person = {
    name : "radha",
    age : 23,
    city : "mathura"

};let text = JSON.stringfy(person);
    console.log(text);
    console.log(person.name);
    console.log(person.age);
    console.log(person.city);*/


   /* const person = {
  name: "John",
  age: 30,
  city: "New York"
};

let text = JSON.stringify(person);

console.log(text);
console.log(person.name);
console.log(person.age);
console.log(person.city);*/
   
 
const mysumb = Symbol("key1")
const user = {
    name :"hitesh",
    [mysumb]: "key1",
    age : 19,
    city : "patan",
    email : "dhruviul1232gmail.com"
}

    //console.log(user.email)
    //console.log(user['email'])
    //console.log(user[mysumb])

    user.email = "pandya2322gmail.com"
    //Object.freeze(user)
    user.email = "pandya33@gmail.com"
    //console.log(user);


    user.greeting = function(){
        console.log(`hello, ${this.name}`);
    }

    console.log(user.greeting());





