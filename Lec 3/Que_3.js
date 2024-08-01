/*
Find the Largest Number Less Than Target
Given a sorted array of integers `numbers` and a target value `target`, find the largest number
in the array that is less than the target. 
*/

const findLargest = (arr, target) => {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < target && arr[i + 1] >= target) {
            return arr[i];
        }
    }
    return arr[arr.length - 1] < target ? arr[arr.length - 1] : undefined;
};

let arr = [1, 2, 3, 4, 5];
let target = 4;
console.log(findLargest(arr, target)); 

