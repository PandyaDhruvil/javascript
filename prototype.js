let owner = {
    greet:function () {
        console.log("Hove hove");
    }
};
        let  employee = Object.create(owner);

        employee.greet();


console.log(person1.__proto__ === Person.prototype); 
console.log(Person.prototype.__proto__ === Object.prototype);
console.log(Object.prototype.__proto__); 
