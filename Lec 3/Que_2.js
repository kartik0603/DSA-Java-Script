/*Count Pairs with Sum Less Than Target
Count the number of unique pairs in the array whose sum is less than the target.*/


function countPairs(numbers, target) {
    numbers.sort((a, b) => a - b); 
    let left = 0;
    let right = numbers.length - 1;
    let count = 0;

    while (left < right) {
        if (numbers[left] + numbers[right] < target) {
            
            count += (right - left);
            left++;
        } else {
            right--;
        }
    }

    return count;
}

let numbers = [1, 3, 5, 7];
let target = 10;
console.log(countPairs(numbers, target)); 

