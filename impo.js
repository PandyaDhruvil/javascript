// math.js
export default function add(a, b) {
  return a + b;
}

// main.js
import add from "./try.js"; // relative path
console.log(add(2, 3)); // 5

