/* Question 4: Reverse an Array

Write a function to reverse the elements of an array.

Input: [1, 2, 3, 4, 5]

Output: [5, 4, 3, 2, 1]

Input: [10, 20, 30]

Output: [30, 20, 10]*/


const reverseArray=(arr)=>{
    let reverse =arr.reverse()
    return reverse;
}
let arr=[1, 2, 3, 4, 5];
    console.log(reverseArray(arr));
    