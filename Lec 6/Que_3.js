// Diagonal Traversal of a 2D Matrix:
// - Traverse each diagonal from top-left to bottom-right.
// - Alternate between traversing diagonals in upward and downward directions to cover all matrix
// elements.
// Example Input:
// matrix = [
//  [1, 2, 3],
//  [4, 5, 6],
//  [7, 8, 9]
// ]
// Example Output: [1, 2, 4, 7, 5, 3, 6, 8, 9]

const diagonalTraversal = (matrix) => {
  const result = [];
  const rows = matrix.length;
  const cols = matrix[0].length;

  for (let d = 0; d < rows + cols - 1; d++) {
    if (d % 2 === 0) {
      // Traverse upward
      for (let i = Math.min(d, rows - 1); i >= 0 && d - i < cols; i--) {
        result.push(matrix[i][d - i]);
      }
    } else {
      // Traverse downward
      for (let i = Math.max(0, d - cols + 1); i <= Math.min(d, rows - 1); i++) {
        result.push(matrix[i][d - i]);
      }
    }
  }
  return result;
};
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(diagonalTraversal(matrix));
// Output: [1, 2, 4, 7, 5, 3, 6, 8, 9]
