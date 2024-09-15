// 2. Sum of Natural Numbers
// Instruction: Write a recursive function to find the sum of the first n natural numbers. The sum of the first n natural numbers is n + (n-1) + (n-2) + ... + 1.
// Sample Input and Output:
// Input: 5
// Output: 15

const sumNaturalNumbers = (n) => {
  if (n === 1) {
    return 1;
  }
  return n + sumNaturalNumbers(n - 1);
}
console.log(sumNaturalNumbers(5));