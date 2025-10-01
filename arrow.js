const divideby = (a, b) => {
    if(b === 0) {
        return "cannot divide by zero";
    }
    return a / b;

};

const numbers = [1,2,3,4,5,6,7]
const doubled = numbers.map(n=> n*2)
console.log("doubled",doubled);