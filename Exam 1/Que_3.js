/* Maximum Product Subarray

Given an array of integers, write a function to find the contiguous subarray within an array
(containing at least one number) which has the largest product.
 Input: [2, 3, -2, 4]
Output: 6 (The subarray [2, 3] has the largest product 6.) */

const maximumProductSubarray = (arr) => {
    let max = arr[0];
    let maxEnding = arr[0];
    let minEnding = arr[0];
    for (let i = 1; i < arr.length; i++) {
        let temp = maxEnding;
        maxEnding = Math.max(arr[i], maxEnding * arr[i], minEnding * arr[i]);
        minEnding = Math.min(arr[i], temp * arr[i], minEnding * arr[i]);
        max = Math.max(max, maxEnding);
    }

    return max;
};

let arr = [2, 3, -2, 4];
console.log(maximumProductSubarray(arr));

