let readline = new require("readline");
let rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout

});

function calculate(num1, num2, operator) {
  try {
    if (isNaN(num1) || isNaN(num2)) throw " Please enter valid numbers.";

    let result;
    switch (operator) {
        case"+":
        result=num1 +num2;
        break;
        case"-":
        result=num1- num2;
        break;
        case"*":
        result=num1 *num2;
        break;
        case"/":
        result=num1 / num2;
        break;
        default:
            throw"vadlid";
    }      

    
}
}