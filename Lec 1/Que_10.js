/* Find Missing Number

Write a function to find the missing number in an array of integers from 1 to n.

Input: [1, 2, 4, 5, 6]

Output: 3

Input: [10, 11, 13, 14]

Output: 12 */




const findMissingNumber = (arr) => {
    const n = arr.length + 1; 
    const expectedSum = (n * (n + 1)) / 2; // 
    const actualSum = arr.reduce((a, b) => a + b, 0); 
    return expectedSum - actualSum; 
  }

  let arr = [1, 2, 4, 5, 6,7,8];
console.log(findMissingNumber(arr)); 