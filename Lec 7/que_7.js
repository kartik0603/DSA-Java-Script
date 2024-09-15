// 6. Power of a Number
// Instruction: Write a recursive function to calculate x raised to the power of n (x^n).
// Sample Input and Output:
// Input: 2, 3
// Output: 8

const powerOfNumber = (x, n) => {
  if (n === 0) {
    return 1;
  } else {
    return x * powerOfNumber(x, n - 1);
  }
}
console.log(powerOfNumber(2, 3));