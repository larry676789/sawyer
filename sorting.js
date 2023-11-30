/**
 * Your next assignment is going over sorting algorithms. 
 * There are an infinite ways to sort data. You need to write a function that takes an array of numbers
 * and returns another array that is sorted from least to greatest
 */

/**
 * 
 * @param {array} numbers - an array of integers
 * @returns {array} numbers - sorted version of array from least to greatest
 */
function bubbleSort(numbers=[]) {
    for(var i = 0; i < numbers.length; i++) { 
        for(var j = 0; j < numbers.length - i - 1; j++) {
            if(numbers[j+1] < numbers[j]) {
                const temp = numbers[j]
                numbers[j] = numbers[j+1]
                numbers[j+1] = temp
            }
        }
    }
    return numbers   
}

function insertionSort(numbers=[]) {
    
}

module.exports = {
    bubbleSort
}