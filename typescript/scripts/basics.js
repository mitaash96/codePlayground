import * as functions from "./funcbasic.js";
console.log(functions.isPalindrome("MDM"));
console.log(functions.isPrime(20));
console.log("Hello World");
console.log(functions.fizzBuzz(15));
console.log(functions.fiboNacci(0));
var arr = new functions.arrayMani([1, 2, 3, 4, 5]);
console.log(arr.min(), arr.max());
var dict = new functions.objectMani({ "name": "mitaash", "city": "kolkata" });
console.log(dict.keys());
console.log(functions.randomQuote());
//# sourceMappingURL=basics.js.map