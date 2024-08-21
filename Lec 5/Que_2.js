// 2. Maximum PRoduct of Contiguous Subarray of Size k:
// Question:
// Write a function that takes an array of integers and a number k. Using the sliding window technique,
// find the maximum Product of any contiguous subarray of size k.

const maxProductOfSubArray = (arr, subArraySize) => {
    if (arr.length < subArraySize) {
        return 0;
    }

    // Calculate the product of the first subarray
    let maxProduct = 1;
    for (let i = 0; i < subArraySize; i++) {
        maxProduct *= arr[i];
    }
    let currentProduct = maxProduct;
    let startIdx = 0;

    // Sliding Window
    for (let i = subArraySize; i < arr.length; i++) {
        currentProduct = (currentProduct / arr[i - subArraySize]) * arr[i];
        if (currentProduct > maxProduct) {
            maxProduct = currentProduct;
            startIdx = i - subArraySize + 1;
        }
    }

    const subArray = arr.slice(startIdx, startIdx + subArraySize);
    return { maxProduct, subArray };
};

const input = [-1, 2, 3, 0, -3, 9];
const k = 2;
const result = maxProductOfSubArray(input, k);

console.log(result);
