// const one = {
//     speak() {
//         return `${this.name} walks`
//     }
// }
// const two = {
//     walks() {
//         return `${this.name} walks`
//     }
// }
// function Person(name) {
//     this.name = name
// }
// Object.assign(Person.prototype, one, two)
// const person1 = new Person('Pranjal')
// console.log(person1.speak())
// console.log(person1.walks())



//inherit object
let obj = {
    name:"govind",
    age:21,
    prompt() {
        return `my name is ${this.name}`
    }
}

     let obj1 =Object.create(obj)
     obj1.name ='hello'
     console.log(obj1.age)
     console.log(obj1.prompt())

class perosn {
    constructor(name,age){
        this.name = name;
        this.age=age;
    }
    sayhello(){
        console.log(`hello my name is ${this.name}`);
    }
}
        class student extends perosn {
            constructor(name,age,grade) {
                super(name,age);
                this.grade=grade;
            }
            study () {
                console.log(`${this.name} is studying in the grade ${this.grade}`);
            }
        }
            let studnet1 = new student("krishn",21,"A+");
            studnet1.sayhello();
            studnet1.study();


            //multilevel
            class animal  {
                eat() {
                    console.log("eating");
                }
            }

            class dog extends animal {
                woof() {
                    console.log("woof");
                }
            }

            class puppy extends dog {
                play() {
                    console.log("puppy is playing");
                }
            }

                let puppy1 = new puppy();
                puppy1.eat();
                puppy1.woof();
                puppy1.play();