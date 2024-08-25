// 9. Print all Prime Numbers in a 2D Matrix:
// - Traverse the entire matrix and print all prime numbers found in the matrix.
// Example Input:
// matrix = [
//  [2, 4, 6],
//  [3, 5, 9],
//  [7, 8, 11]
// ]
// Example Output: [2, 3, 5, 7, 11]

function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
function printPrimeNumbers(matrix) {
  let primeNumbers = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (isPrime(matrix[i][j])) {
        primeNumbers.push(matrix[i][j]);
      }
    }
  }
  return primeNumbers;
}
let matrix = [
  [2, 4, 6],
  [3, 5, 9],
  [7, 8, 11],
];
console.log(printPrimeNumbers(matrix));
