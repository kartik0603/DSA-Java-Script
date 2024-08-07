// 2. Maximum Product Subarray
// Question: Given an array of integers, find the contiguous subarray within an array (containing at
// least one number) which has the largest product. Implement the function `maxProductSubArray(arr)`
// that takes an array `arr` as input and returns an integer representing the maximum product
// subarray.
// Sample Input and Output:
// Input: arr = [2, 3, -2, 4]
// Output: 6
// Explanation: [2, 3] has the largest product = 6.



const maxSubArrayProduct =(arr)=> {
    let max = arr[0];
    let curr = arr[0];

    for (let i = 1; i < arr.length; i++) {
        curr = Math.max(arr[i], curr * arr[i]);
        max = Math.max(max, curr);
    }

    return max;
}

let arr = [2, 3, -2, 4]
console.log(maxSubArrayProduct(arr)); 