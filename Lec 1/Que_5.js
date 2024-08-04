/* Count Occurrences of an Element

Write a function to count the occurrences of a specific element in an array.

Input: [1, 2, 2, 3, 2, 4, 5], target: 2

Output: 3 */

const occuCount = (arr, target) => {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            count++;
        }
    }
    return count;
}

let arr = [1, 2, 2, 3, 2, 4, 5];
console.log(occuCount(arr, 2));


 

