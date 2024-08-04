/* Check if Array is Sorted

Write a function to check if an array is sorted in ascending order.

Input: [1, 2, 3, 4, 5]

Output: true

Input: [5, 3, 4, 1, 2]

Output: false*/

const isSorted = (arr) => {
   
    let sortedArray = [...arr].sort((a, b) => a - b);
   
    return JSON.stringify(arr) === JSON.stringify(sortedArray);
  }

  let arr = [1, 2, 3, 4, 5];


console.log(isSorted(arr));