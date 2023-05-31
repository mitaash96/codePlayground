function area(l, b){
    return l*b;
}

function isPrime(num){
    for(var i= 2; i<= num/2; i++){
        if (num % i == 0){
            return false;
        }
    }
    return true;
}

function strReverse(s){
    return s.split("").reverse().join("");
}

function maxOfArray(s){
    return Math.max(...s.split("").map(Number));
}

function wordsInString(s){
    return s.split(" ").length;
}

function celsiusToFahrenheit(c){
    return c * 9/5 + 32;
}

function factorial(n){
    return Array.from(Array(n).keys()).map(x => x + 1).reduce((x, y) => x * y);
}

function isPalindrome(s){
    return strReverse(s) == s;
}

function sumOfElem(arr){
    return arr.reduce((x, y) => x + y)
}

function fibo(n){
    let fib = [0, 1];
    if (n==1){
        return [fib[0]];
    }
    else if (n==2){
        return fib;
    }
    else{
        for(var i=0; i<n-2; i++){
            fib.push(fib[fib.length-1] + fib[fib.length-2])
        }
        return fib;
    }
}

module.exports = {
    area: area,
    isPrime: isPrime,
    strReverse: strReverse,
    maxOfArray: maxOfArray,
    wordsInString: wordsInString,
    celsiusToFahrenheit: celsiusToFahrenheit,
    factorial: factorial,
    isPalindrome: isPalindrome,
    sumOfElem: sumOfElem,
    fibonacci: fibo,
};