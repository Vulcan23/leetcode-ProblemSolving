/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
    let length = matrix.length - 1;
    for (let i = 0; i < Math.floor(matrix.length / 2); i++) {
        for (let j = 0; j < Math.ceil(matrix.length / 2); j++) {
            let temp = matrix[i][j];
            matrix[i][j] = matrix[length - j][i];
            matrix[length - j][i] = matrix[length - i][length - j];
            matrix[length - i][length - j] = matrix[j][length - i];
            matrix[j][length - i] = temp;
        }
    }
    return matrix;
};

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
console.log(rotate(matrix));

matrix = [
    [5, 1, 9, 11],
    [2, 4, 8, 10],
    [13, 3, 6, 7],
    [15, 14, 12, 16],
];
console.log(rotate(matrix));

matrix = [
    [1],
];
console.log(rotate(matrix));

matrix = [
    [1, 2],
    [3, 4],
];
console.log(rotate(matrix));