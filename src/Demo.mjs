import * as readline from 'node:readline/promises';
/* A function that takes an array as an argument and returns an array of 1s and 2s. The function iterates through the array and compares each element to the next element. If the current element is greater than the next element, it pushes a 1 to the result array. If the current element is less than the next element, it pushes a 2 to the result array. */
const solve = a => {
    let result = []
    for (let i = 0; i < a.length - 1; i++) {
        if (a[i] > a[i + 1])
            result[i] = 1
        else result[i] = 2
    }
    return result
}




solve([1, 2, 3, 4, 3, 7, 10, 0]).forEach(e => console.log(e))