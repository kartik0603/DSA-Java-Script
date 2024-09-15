// Instruction: Write a recursive function to calculate the factorial of a given non-negative integer n. The factorial of n is defined as n! = n * (n-1) * (n-2) * ... * 1, and 0! = 1.
// Sample Input and Output:
// Input: 5
// Output: 120


const factorial = (n) => {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

console.log(factorial(5));