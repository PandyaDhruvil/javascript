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
       /* class perosn {
            constructor(name,age) {
                this.name = name;
                this.age = age;
            }
            greet(){
                console.log(`this  name is ${this.person}`);
            }
        }
            const person1 = new perosn("old High-court","thaltej");
            const person2 = new perosn("mahtma Mandir","motera");

            console.log(person1.name);
            console.log(person2.age);

            person1.greet();
            person2.greet();*/

            class P{
                constructor(name,age) {
                    this.name = name;
                    this.age = age;

                }

                getD() {
                    return `${this.name} is ${this.age}`;
                }
                
            }

            const p1 = new P("sonal",51);
            const p2  = new P("monal",47);

            console.log(p1.getD());
            console.log(p2.getD());


            function a(radius) {
                return Math.PI * radius  * radius;
            }
            console.log(a(7));

            const car = {
                brand :"Toyota",
                start:function(){
                    console.log("car is started");


                }
            };car.start();


            class BankAccount {
  constructor(owner, balance) {
    this.owner = owner;
    let _balance = balance; 

    this.getBalance = function() {
      return _balance;
    };

    this.deposit = function(amount) {
      if (amount > 0) _balance += amount;
    };

    this.withdraw = function(amount) {
      if (amount > 0 && amount <= _balance) {
        _balance -= amount;
      } else {
        console.log("Insufficient funds!");
      }
    };
  }
}

let acc = new BankAccount("Riya", 1000);
console.log(acc.getBalance());  
acc.deposit(500);

console.log(acc.getBalance());  
acc.withdraw(2000);             

console.log(acc.getBalance());  


console.log(acc._balance);    



class bankaccount {
    constructor(accountnumber,accholdername,balance){
        this._accname = accountnumber;
        this._accholdername = accholdername;
        this._balance = balance;

    }
                showAccountdetail(){
                    console.log(`account ${this._accname}, ${this._accholdername} 
                        ${this._balance}`);


                }
                                 deposit(amount){
                                this._balance  += amount;
                                this.showAccountdetail();
                            }
                  withdraw(amount){
                    this._balance += amount; {
                        this._balance -= amount;
                        this.showAccountdetail();
                    }else {
                        
                    }
                }
            } 