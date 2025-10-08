let student = { name: "Krish", age: 20 };
let jsonData = JSON.stringify(student);

console.log(jsonData);



let jsonText = '{"name":"krish","age":21}'
let obj = JSON.parse(jsonText);
console.log(obj.name);
console.log(obj.age);


//class constructor
class perosn {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    sayhello() {
        console.log(`hi i m ${this.name} `);

    }
}
        let ppp = new perosn("krishn",22);
        ppp.sayhello();

