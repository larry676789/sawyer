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

function insertionSort(numbers=[]){
    for(var i = 1; i< numbers.length; i++) {
        for(var j = i - 1; j > -1; j--){
         if(numbers[j+1] < numbers[j]){
            [numbers[j + 1], numbers[j]] = [numbers[j], numbers[j+1]]
         } 
        }
    }  
    return numbers;     
}


function merge(numbers1=[], numbers2=[]) {
    let res = [],
        i = 0,
        j = 0;    
    if (numbers1.length > 1) {
        let min = 0;
        for (let i = 0; i < numbers1.length; i++) {
            if (i !== min) {

                if (numbers1[i] < numbers1[min]) {

                    [numbers1[i], numbers1[min]] = [numbers1[min], numbers1[i]];
                    min = i;
                }
            }
        }
    }
    if (numbers2.length > 1) {
        let min = 0;
        for (let i = 0; i < numbers2.length; i++) {
            if (i !== min) {
                if (numbers2[i] < numbers2[min]) {
                    [numbers2[i], numbers2[min]] = [numbers2[min], numbers2[i]];
                    min = i;
                }
            }
        }
    }
    while (i < numbers1.length && j < numbers2.length) {
        if (numbers1[i] < numbers2[j]) {
            res.push(numbers1[i]);
            i++; 
        } else {
            res.push(numbers2[j]);
            j++;
        }
    }
    while (i < numbers1.length) {
        res.push(numbers1[i]);
        i++
    }
    while (j < numbers2.length) {
        res.push(numbers2[j]);
        j++
    }
    return res; 
}
function mergeSort(numbers=[]) {
    if (numbers.length <= 1) return numbers;
    let mid = Math.ceil(numbers.length / 2);
    let numbers1= numbers.slice(0, mid);
    let numbers2 = numbers.slice(mid);
    let numbers1_subnumbers = [],
        sorted_numbers1_subnumbers = [];
    let numbers2_subnumbers = [],
        sorted_numbers2_subnumbers = [];
    for (let i =0; i < numbers1.length; i += 2) {
        numbers1_subnumbers.push(numbers1.slice(i, i + 2));
    for (let i = 0; i < numbers2.length; i += 2){
        numbers2_subnumbers.push(numbers2.slice(i, i + 2));
    }
    console.log([numbers1_subnumbers,numbers1_subnumbers])
    for (let i = 0; i < numbers1_subnumbers.length; i += 2) {
        let result = merge(numbers1_subnumbers[i], numbers1_subnumbers[i + 1]);

        result.forEach((value) => sorted_numbers1_numbers1_subnumbers.push(value));
    }
    for (let i = 0; i < numbers2_subnumbers.length; i += 2) {
        let result = merge(numbers2_subarrays[i], numbers2_subnumbers[i + 1]);
        result.forEach((value) => sorted_numbers2_subnumbers.push(value));
    }
    let result = merge(sorted_numbers1_subnumbers, sorted_numbers2_subnumbers);

    return result;
    }
}
function selectionSort(numbers=[]) {
    let min;
    for (let i = 0; i < numbers.length; i++) {
        min = i; 
        for (let j = i + 1; j < numbers.length; j++) {
            if (numbers[j] < arr[min]) {
                min = j;
            }
        }
        if (min !== i) {
            [numbers[i], numbers[min]] = [numbers[min], numbers[i]];
        }
    }
    return numbers;
}
function partition(items, left, right) {
    let pivot = items[Math.floor((right + left) / 2)],
        i = left,
        j = right;
    while (i <= j) {
        while (items[i] < pivot) {
            i++;
        }
        while (items[j] > pivot) {
            j--;
        }
        if (i <= j) {
            [items[i], items[j]] = [items[j], items[i]];
            i++;
            j--;
        }
    }
    return i;
}
function quickSort(items, left, right) {
    let index;
    if (items.length > 1) {
        index = partition(items, left, right);
        if (left < index - 1) {
            quickSort(items, left, index - 1);
        }
        if (index < right) {
            quickSort(items, index, right);
        }
    }
    return items;
}

module.exports = {
    bubbleSort,
    insertionSort,
    mergeSort,
    selectionSort,
    quickSort
}

