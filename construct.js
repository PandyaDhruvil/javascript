
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.sayHello = function () {
    console.log(`Hello, my name is ${this.name}`);
  };
}
console.log(Person);




const person1 = new Person("Dhruvil", 25);
const person2 = new Person("Radhe", 30);

console.log(person1.name); 
console.log(person2.age);  

person1.sayHello(); 


function car(model,brand,country){
    this.model=model;
    this.brand=brand;
    this.country=country;
    this.getinfo=function()
    {

        return(`${this.model} ${this.brand} ${this.country}`);
    }

}
    let car1 = new car("MERCEDES","GC220D","humne BANAYI");
    console.log(car1.getinfo());

