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
 */

function fibonnaci(n) {

}

/**
 * 
 * @param {integer} n - number to computer factorial of
 * @returns {integer} factorial - the factorial of n
 */

function factorial(n) {

}
module.exports = {
    counter,
    fibonnaci,
    factorial
}
