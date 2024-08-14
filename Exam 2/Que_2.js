// Given a list of items with specific weights, find pairs of items whose combined weight equals a given target weight. Use the two-pointer  Array technique in js

// Input Format
// 1. An integer `n` representing the number of items.  
// 2. An array of integers representing the weights of the items.  
// 3. An integer `target` representing the target weight.

// Output Format
// Print all pairs of item weights whose combined weight equals the target weight.

// Sample Input 


// 1 2 3 4 5 6
// target =7


//  Output 

// 1 6
// 2 5
// 3 4


function findPairs(weights, target) {
    
    

    let left = 0;
    let right = weights.length - 1;
    let result = [];

    while (left < right) {
        let sum = weights[left] + weights[right];

        if (sum === target) {
            result.push([weights[left], weights[right]]);
            left++;
            right--;
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }

    return result;
}


const weights = [1, 2, 3, 4, 5, 6];
const target = 7;


const pairs = findPairs(weights, target);


pairs.forEach(pair => console.log(pair[0], pair[1]));
