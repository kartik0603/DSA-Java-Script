// 5. Minimum Size Subarray Sum
// Question: Given an array of integers and a positive integer `s`, find the minimal length of a
// contiguous subarray of which the sum >= `s`. If there isn't one, return 0 instead. Implement the
// function `minSizeSubarraySum(arr, s)` that takes an array `arr` and a positive integer `s` as input
// and returns an integer representing the minimal length of the contiguous subarray.
// Sample Input and Output:
// Input: s = 7, arr = [2, 3, 1, 2, 4, 3]
// Output: 2
// Explanation: The subarray [4, 3] has the minimal length under the problem constraint.


let arr = [2, 3, 1, 2, 4, 3];
let s = 7;

const findSum = (subArray) => {
    let sum = 0;
    for (let i = 0; i < subArray.length; i++) {
        sum += subArray[i];
    }
    return sum;
}

let minLength = Number.MAX_SAFE_INTEGER;

for (let i = 0; i < arr.length; i++) {
    let subArray = [];
    for (let j = i; j < arr.length; j++) {
        subArray.push(arr[j]);
        let sum = findSum(subArray);
        if (sum >= s) {
            let currLength = subArray.length;
            minLength = Math.min(currLength, minLength);
        }
    }
}

if (minLength === Number.MAX_SAFE_INTEGER) {
    minLength = 0;
}

console.log(minLength); 

