// 1. Maximum Sum of Contiguous Subarray of Size k:
// Question:
// Write a function that takes an array of integers and a number k. Using the sliding window technique,
// find the maximum sum of any contiguous subarray of size k.



const maxSumOfSubArray = (arr, subArraySize) => {
    if (arr.length < subArraySize) {
        return 0;
    }

    // Calculate the sum of the first subarray
    let maxSum = 0;
    for (let i = 0; i < subArraySize; i++) {
        maxSum += arr[i];
    }
    let currentSum = maxSum;
    let startIdx = 0;

    // Sliding Window
    for (let i = subArraySize; i < arr.length; i++) {
        currentSum = currentSum - arr[i - subArraySize] + arr[i];
        if (currentSum > maxSum) {
            maxSum = currentSum;
            startIdx = i - subArraySize + 1;
        }
    }

    const subArray = arr.slice(startIdx, startIdx + subArraySize);
    return { maxSum, subArray };
};

const input = [-1,2,3,0,-3,9];
const k = 2;
const result = maxSumOfSubArray(input, k);

console.log(result);
