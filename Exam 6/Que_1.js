// Factorial's Treasure:
// - Example Journey:
// Input: 5
// Output: 120

const factorial = (n) => {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
};

console.log(factorial(5));
