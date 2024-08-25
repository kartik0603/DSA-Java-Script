// Search in a 2D Matrix
// Example Input:
// matrix = [
//  [1, 3, 5],
//  [7, 9, 11],
//  [13, 15, 17]
// ]
// target = 9
// Example Output: True

const TWOd_matrix_to_ONEd_matrix = (matrix) => {
    let result = [];
    for (let row of matrix) {
        for (let element of row) {
            result.push(element);
        }
    }
    return result;
};

const serchINmatrix = (matrix, target) => {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === target) {
                return true;
            }
        }
    }
    return false;
};

let matrix = [
    [1, 3, 5],
    [7, 9, 11],
    [13, 15, 17],
];
let target = 9;

console.log(serchINmatrix(matrix, target));
