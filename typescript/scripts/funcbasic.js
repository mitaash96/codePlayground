// Palindrome Checker: Create a function that takes a string as input and returns true if it is a palindrome.
export const isPalindrome = (s) => s.split("").reverse().join("") === s;
// Prime Number Checker: Write a function that takes a number as input and returns true if it is a prime number, and false otherwise.
export const isPrime = (n) => {
    for (var i = 1; i < n / 2; i++) {
        if (n % i === 0)
            return false;
    }
    return true;
};
// FizzBuzz
export const fizzBuzz = (n) => {
    var arr = Array.from(Array(n).keys()).map(x => x + 1);
    var arr1 = arr.map(x => x % 15 === 0 ? "FizzBuzz" : x % 3 === 0 ? "Fizz" : x % 5 === 0 ? "Buzz" : x);
    return arr1;
};
// fibonacci
export const fiboNacci = (n) => {
    var fibo = [0, 1];
    if (n === 0) {
        return [fibo[0]];
    }
    else if (n === 1) {
        return fibo;
    }
    else {
        for (var i = 1; i < n; i++) {
            fibo.push(fibo[i] + fibo[i - 1]);
        }
        return fibo;
    }
};
export class arrayMani {
    arr;
    constructor(arr) {
        this.arr = arr;
    }
    ;
    min() {
        return Math.min(...this.arr);
    }
    max() {
        return Math.max(...this.arr);
    }
}
// Object manipulation
export class objectMani {
    obj;
    constructor(obj) {
        this.obj = obj;
    }
    keys() {
        return Object.keys(this.obj);
    }
}
export const randomQuote = () => {
    var quotes = ["Ae vedya", "Nahi aaya hoon", "mast code likha hai", "Abe jaa na lavde"];
    return quotes[Math.round(Math.random() * quotes.length)];
};
/*
Random Quote Generator: Create a program that displays a random quote from an array of quotes each time it is run.
*/ 
//# sourceMappingURL=funcbasic.js.map