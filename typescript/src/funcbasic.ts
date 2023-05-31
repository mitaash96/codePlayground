// Palindrome Checker: Create a function that takes a string as input and returns true if it is a palindrome.
export const isPalindrome = (s: string): boolean => s.split("").reverse().join("") === s;

// Prime Number Checker: Write a function that takes a number as input and returns true if it is a prime number, and false otherwise.
export const isPrime = (n: number): boolean => {
    for (var i=1; i<n/2; i++)
    {if (n%i === 0) return false}
    return true
}

// FizzBuzz
export const fizzBuzz = (n: number): Array<number|string> => {
    var arr : Array<number> = Array.from(Array(n).keys()).map(x => x+1);
    var arr1 = arr.map(x => x%15===0?"FizzBuzz":x%3===0?"Fizz":x%5===0? "Buzz": x)
    return arr1;
}

// fibonacci
export const fiboNacci = (n:number) => {
    var fibo = [0,1]
    if (n===0){
        return [fibo[0]]
    }
    else if (n===1){
        return fibo
    }
    else{
        for (var i=1; i<n; i++){
            fibo.push(fibo[i] + fibo[i-1]);
        }
        return fibo
    }
}

export class arrayMani{
    private arr: Array<any>;
    constructor(arr: any[]){
        this.arr = arr;
    };
    min(this:any) {
        return Math.min(...this.arr)
    }
    max(this:any) {
        return Math.max(...this.arr)
    }
}

// Object manipulation
export class objectMani{
    private obj: Object
    constructor(obj: Object){
        this.obj = obj;
    }
    keys(this){
        return Object.keys(this.obj);
    }
}

export const randomQuote = () :string => {
    var quotes = ["Ae vedya", "Nahi aaya hoon", "mast code likha hai", "Abe jaa na lavde"];
    return quotes[Math.round(Math.random() * quotes.length)]
}
