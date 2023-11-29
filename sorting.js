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
function sort(numbers=[]) {
    let current_highest = 1
    let current_lowest = 0
    for(var x = 0; x< numbers.length; ++x) {

        if(numbers[current_highest] < numbers[current_lowest]) {
            console.log('1')
            var temp = current_highest
            numbers.splice(current_highest,1, numbers[current_lowest])

            numbers.splice(current_lowest,1, numbers[temp])
            // numbers[current_highest] = numbers[current_lowest]
            // numbers[current_lowest] = numbers[temp]
            

        }  if(numbers[x] > numbers[current_highest]) {
            console.log('2')
            var temp = numbers[x]

            numbers.splice(x,1, numbers[current_highest])
            numbers.splice(current_highest,1, temp)
            current_highest = x
        }  if (numbers[x] < numbers[current_lowest]) {
            console.log('3')
            var temp = numbers[x]

            numbers.splice(x,1, numbers[current_lowest])
            numbers.splice(current_lowest,1, temp)

        
            current_lowest = x
        }

        console.log([numbers[current_lowest], numbers[current_highest], numbers[x]])
    }

    return numbers;
}

module.exports = {
    sort
}