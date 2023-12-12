const { counter, fibonnaci, fibRecur, factorial, factorialRec } = require( "./math");
const { bubbleSort, insertionSort, mergeSort } = require('./sorting');
/* 
This is a file demonstating data structures
*/
//counter (1000000) 

// let start = Date.now();
// //fibonnaci(40)
// const factorial1 = factorial(50000)
// // console.log(factorial1)
// let end = Date.now();
// console.log(`Execution time: ${end - start} ms`);

// let start2 = Date.now();
// //fibRecur(40)
// const factorial2 = factorialRec(50000)
// //console.log(factorial2)
// let end2 = Date.now();
// console.log(`Execution time: ${end2 - start2} ms`);

console.log(bubbleSort([3,2,1,5,3,9,7]))
console.log(insertionSort([3,1,56,22,15,-23]))
console.log(mergeSort([3,1,56,22,15,-23]))