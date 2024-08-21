// 3. MiniMUm Sum of Contiguous Subarray of Size k:
// Question:
// Write a function that takes an array of integers and a number k. Using the sliding window technique,
// find the minimum sum of any contiguous subarray of size k.














const minSumOfSubArray = (arr, subArraySize) => {
    if (arr.length < subArraySize) {
        return 0;
    }

    // Calculate the sum of the first subarray
    let minSum = 0;
    for (let i = 0; i < subArraySize; i++) {
        minSum += arr[i];
    }
    let currentSum = minSum;
    let startIdx = 0;

    // Sliding Window
    for (let i = subArraySize; i < arr.length; i++) {
        currentSum = currentSum - arr[i - subArraySize] + arr[i];
        if (currentSum < minSum) {
            minSum = currentSum;
            startIdx = i - subArraySize + 1;
        }
    }

    const subArray = arr.slice(startIdx, startIdx + subArraySize);
    return { minSum, subArray };
};

const input = [-1, 2, 3, 0, -3, 9];
const k = 2;
const result = minSumOfSubArray(input, k);

console.log(result);
