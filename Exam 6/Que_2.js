// Fibonacci:
// - Example Chronicle:
// Input: 6
// Output: 8

const fibonnaci = (n) => {
    if (n <= 1) {
        return n;
    }
    return fibonnaci(n - 1) + fibonnaci(n - 2);
};
console.log(fibonnaci(6));
