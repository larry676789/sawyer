function counter (count = 0) {
    
    while (true) {
        console.log (count)
        count = count + 1 
    }
}

/**
 * 
 * Continuing our journey on functions and conditions write two functions, one called factorial that computes the factorial of n
 * and another one called fibonnaci which returns the fibonnaci sequence of n
 * 
 * For a reference of what a fibonnaci sequence https://en.wikipedia.org/wiki/Fibonacci_sequence
 * For a reference of what a factorial sequence https://en.wikipedia.org/wiki/Factorial
 */


/**
 * 
 * @param {integer} n - number to compute fibonnaci sequence of
 * @returns {integer} fib - The fibonnaci sum 
 * psuedocode 
 * 
 */

function fibonnaci(n) {
    // we know that fibonnaci(0) = 0 and fibonacci(1) = 1 so lets store those two values
    let values = [0,1]
    if(n > 1) {
        // now let's make a for loop to iteratively step and build our values
        var x = 2;
        for(x; x < n+1; x++) {
            values.push(values[x-2] + values[x-1])
        }
    }
    const val = values[n]
    return val
}

function fibRecur(n) {
    // we know that fibonnaci(0) = 0 and fibonacci(1) = 1 so lets store those two values
    switch(n) {
        case 0:
            return 0
        case 1:
            return 1
        default:
            return fibRecur(n-2) + fibRecur(n-1)
    }
}

/**
 * 
 * @param {integer} n - number to computer factorial of
 * @returns {integer} factorial - the factorial of n
 */

function factorial(n) {

    let j = 1
    for(n; n>1; n--) {
        j *= n
    }
    return j
}

function factorialRec(n) {
    switch(n){
        case 0:
            return 0
        case 1:
            return 1
        default :
            return n * factorialRec(n-1)
        
    }
}
module.exports = {
    counter,
    fibonnaci,
    factorial,
    fibRecur,
    factorialRec


}   
