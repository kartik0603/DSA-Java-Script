// 1. Maximum Subarray Sum (Kadane's Algorithm)
// Question: Given an array of integers, find the contiguous subarray (containing at least one number)
// which has the largest sum and return its sum. Implement the function `maxSubArraySum(arr)` that
// takes an array `arr` as input and returns an integer representing the maximum subarray sum.

// Sample Input and Output:
// Input: arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
// Output: 6
// Explanation: [4, -1, 2, 1] has the largest sum = 6.

// const subArray=(arr)=>{
// let mx=arr[0];
// let sm=0;

// arr.forEach((n)=>{
//     sm+=n;
//     mx=Math.max(mx,n);
//     if(sm<0){
//         sm=0

//     }
// })
// return mx;
// }
const maxSubArraySum =(arr)=> {
    let maxSum = arr[0];
    let currSum = arr[0];

    for (let i = 1; i < arr.length; i++) {
        currSum = Math.max(arr[i], currSum + arr[i]);
        maxSum = Math.max(maxSum, currSum);
    }

    return maxSum;
}

let arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubArraySum(arr)); 
