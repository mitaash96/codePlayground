const functions = require("./basicFunctions");

/*
Generate Fibonacci Series:
Write a JavaScript function that takes a number as input and generates the Fibonacci series up to that number. Return an array containing the Fibonacci series.
*/

console.log("Area of rectangle of 10 x 2 =", functions.area(10,2));
console.log("Is 2 a prime number?", functions.isPrime(2));
console.log("Reverse of 'hello' = ", functions.strReverse("hello"));
console.log("max of 12345 = ", functions.maxOfArray("12345"));
console.log("Num words in sentence 'hello world' =", functions.wordsInString("hello world"));
console.log("32 deg celsius is " + functions.celsiusToFahrenheit(32) + " degrees fahrenheit.");
console.log("Factorial of 5 =", functions.factorial(5));
console.log("Is 'mdv' a palindrome?", functions.isPalindrome("mdv"));
console.log("Sum of elements in array 1,2,3,4,5 =", functions.sumOfElem([1,2,3,4,5]));
console.log("Fibonacci series upto 10th elem = ", functions.fibonacci(10));
