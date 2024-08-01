/* Question 1: Find Pairs with Sum Less Than Target
Given an array of integers `numbers` and a target value `target`, find all unique pairs of
numbers whose sum is less than the target. */


function findPairs(numbers, target) {
    numbers.sort((a, b) => a - b); 
    let pairs = [];
    let left = 0;
    let right = numbers.length - 1;

    while (left < right) {
        if (numbers[left] + numbers[right] < target) {
           
            for (let i = right; i > left; i--) {
                pairs.push([numbers[left], numbers[i]]);
            }
            left++;
        } else {
            right--;
        }
    }

    return pairs;
}

let numbers = [1, 2, 3, 4, 5];
let target = 6;
console.log(findPairs(numbers, target));
// Expected Output: [[1, 5], [1, 4], [1, 3], [1, 2], [2, 5], [2, 4], [2, 3], [3, 5], [3, 4], [4, 5]]
