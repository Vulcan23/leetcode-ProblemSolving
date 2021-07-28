/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
    const m = matrix.length,
        n = matrix[0].length;
    let flagCol0 = false;
    for (let i = 0; i < m; i++) {
        matrix[i][0] === 0 && (flagCol0 = true);
        for (let j = 1; j < n; j++) {
            matrix[i][j] === 0 && (matrix[i][0] = matrix[0][j] = 0);
        }
    }
    for (let i = m - 1; i >= 0; i--) {
        for (let j = 1; j < n; j++) {
            (matrix[i][0] === 0 || matrix[0][j] === 0) && (matrix[i][j] = 0);
        }
        flagCol0 && (matrix[i][0] = 0);
    }
    return matrix;
};

let matrix = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
];
console.log(setZeroes(matrix));

matrix = [
    [0, 1, 2, 0],
    [3, 4, 5, 2],
    [1, 3, 1, 5],
];
console.log(setZeroes(matrix));