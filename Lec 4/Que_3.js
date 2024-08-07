// 3. Longest Subarray with Sum K
// Question: Given an array of integers and an integer `K`, find the length of the longest subarray that
// sums to `K`. Implement the function `longestSubarrayWithSumK(arr, K)` that takes an array `arr`
// and an integer `K` as input and returns an integer representing the length of the longest subarray
// that sums to `K`.
// Sample Input and Output:
// Input: arr = [1, -1, 5, -2, 3], K = 3
// Output: 4
// Explanation: [1, -1, 5, -2] sums to 3 and is the longest subarray

let arr = [1, -1, 5, -2, 3];
let K = 3;

const findSum = (subArray) => {
    let sum = 0;
    for (let i = 0; i < subArray.length; i++) {
        sum += subArray[i];
    }
    return sum;
}

let maxLength = 0;

for (let i = 0; i < arr.length; i++) {
    let subArray = [];
    for (let j = i; j < arr.length; j++) {
        subArray.push(arr[j]);
        let sum = findSum(subArray);
        if (sum === K) {
            let currLength = subArray.length;
            maxLength = Math.max(currLength, maxLength);
        }
    }
}

console.log(maxLength); 
