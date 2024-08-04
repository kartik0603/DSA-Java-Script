/* Rotate Array

Write a function to rotate an array by a given number of positions.

Input: [1, 2, 3, 4, 5], positions: 2

Output: [4, 5, 1, 2, 3]

Input: [10, 20, 30], positions: 1

Output: [30, 10, 20] */

const rotateArray = (arr, positions) => {
    const length = arr.length;
 
    positions = positions % length; 
  
   
    return arr.slice(-positions).concat(arr.slice(0, -positions));
  }

  let arr=[1, 2, 3, 4, 5];
  let positions=2;

  console.log(rotateArray(arr, positions)); 
  