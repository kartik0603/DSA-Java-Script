/* Remove Duplicates

Write a function to remove duplicate elements from an array.

Input: [1, 2, 2, 3, 4, 4, 5]

Output: [1, 2, 3, 4, 5]

Input: [10, 20, 20, 10]

Output: [10, 20]*/


const removeDuplicates = (arr) => {
    return [...new Set(arr)];
  }
  let arr=[1, 2, 2, 3, 4, 4, 5];
  console.log(removeDuplicates(arr));
  