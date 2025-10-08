

let readline = require("readline");


let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function calculate(num1, num2, operator) {
  try {
    if (isNaN(num1) || isNaN(num2)) throw " Please enter valid numbers.";

    let result;
    switch (operator) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "*":
        result = num1 * num2;
        break;
      case "/":
        if (num2 === 0) throw " Division by zero not allowed.";
        result = num1 / num2;
        break;
      case "%":
        result = num1 % num2;
        break;
      default:
        throw "Invalid operator! Use +, -, *, /, or %.";
    }
    console.log(` Result: ${num1} ${operator} ${num2} = ${result}`);
  } catch (err) {
    console.log("Error:", err);
  } finally {
    console.log(" Calculation Completed.");
    rl.close();
  }
}




          rl.question("Enter first number: ", (first) => {
          rl.question("Enter operator (+, -, *, /, %): ", (op) => {
         rl.question("Enter second number: ", (second) => {
      calculate(Number(first), Number(second), op);
    });
  });
});


            // rl.question("give me the first valid number",(first) => {
            //     rl.question("give the  valid operator(+,-,*,%,/):",(op) => {
            //         rl.question("give me valid second number",(second) => {
            //             calculate(number(first,number(second),op);
            //         });
            //     });
            // });
         
            
//             let num =(1);
//             if (num % 2 ==0){
//                 console.log(num,"is even");

//             }else {
//                 console.log(num,"is odd");
//             }

//             for(let i =0; i<=10; i++){
//                 console.log(i);
//             }


//             //settimeout

//             console.log("Start");
// setTimeout(() => {
//   console.log("Running after 2 seconds");
// }, 10000);
// console.log("End");
