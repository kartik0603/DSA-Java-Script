/* Question 1: Sum of Array Elements

Write a function to calculate the sum of all elements in an array.

Input: [1, 2, 3, 4, 5]

Output: 15

Input: [10, 20, 30]

Output: 60 */




const sum = (arr) => {
    let result = 0;
   
   result = arr.reduce((a,b)=>a+b,0)
    return result;
}

let arr = [1, 2, 3, 4, 5];
console.log(sum(arr)); 
