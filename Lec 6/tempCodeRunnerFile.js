const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

let n = matrix.length;
let m = matrix[0].length;

// Print "N" pattern
for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
       if (i== 0 || i == n- 1 || i == j) {
            process.stdout.write(matrix[i][j] + " ");
        } else {
            process.stdout.write("  ");
        }
    }
    console.log();
}