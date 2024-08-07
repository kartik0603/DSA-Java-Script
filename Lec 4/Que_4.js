// 4. Subarray with Given Sum
// Question: Given an array of positive integers and a target sum, determine if there is a subarray (of
// size at least one) with a given sum. Implement the function `subarrayWithGivenSum(arr, sum)` that
// takes an array `arr` and an integer `sum` as input and returns a boolean indicating whether such a
// Subarray Practice Questions
// subarray exists.
// Sample Input and Output:
// Input: arr = [1, 4, 20, 3, 10, 5], sum = 33
// Output: true
// Explanation: [20, 3, 10] sums to 33.

let arr = [1, 4, 20, 3, 10, 5];
let sum = 33;

const findSum = (subArray) => {
    let sum = 0;
    for (let i = 0; i < subArray.length; i++) {
        sum += subArray[i];
    }
    return sum;
}

const subarrayWithGivenSum = (arr, sum) => {
    for (let i = 0; i < arr.length; i++) {
        let subArray = [];
        for (let j = i; j < arr.length; j++) {
            subArray.push(arr[j]);
            let currentSum = findSum(subArray);
            if (currentSum === sum) {
                return true;
            }
        }
    }
    return false;
}

console.log(subarrayWithGivenSum(arr, sum)); 
