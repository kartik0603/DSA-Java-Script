// Maximum Sum of Subarray with Indices 
// Problem Description 
// Given an array of integers, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum along with the starting and ending indices.    js code

// Input Format  
// An array of integers.

// Output Format 
// Print the maximum sum of the subarray along with the starting and ending indices.

// Sample Input 1  [-2, 1, -3, 4, -1, 2, 1, -5, 4]

// Sample Output 1 
// Max Sum: 6, Start Index: 3, End Index: 6



const  maxSubArrayWithIndex = (arr) => {
    let maxSum = -Infinity;
    let currentSum = 0;
    let start = 0;
    let end = 0;
    let tempStart = 0;

    for (let i = 0; i < arr.length; i++) {
        currentSum += arr[i];

        if (currentSum > maxSum) {
            maxSum = currentSum;
            start = tempStart;
            end = i;
        }

        if (currentSum < 0) {
            currentSum = 0;
            tempStart = i + 1;
        }
    }

    return { maxSum, start, end };
}

//  Input 
const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const result = maxSubArrayWithIndex(arr);
console.log(`Max Sum: ${result.maxSum}, Start Index: ${result.start}, End Index: ${result.end}`);


