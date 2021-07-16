/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
 var setZeroes = function (matrix) {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] === 0) {
                matrix[i][j] = ".";
                for (let k = i - 1; k >= 0; k--) {
                    if (matrix[k][j] === ".") {
                        break;
                    }
                    matrix[k][j] = "*";
                }
                for (let k = j - 1; k >= 0; k--) {
                    if (matrix[i][k] === ".") {
                        break;
                    }
                    matrix[i][k] = "*";
                }
            }
        }
    }
    for (let i = matrix.length - 1; i >= 0; i--) {
        for (let j = matrix[0].length; j >= 0; j--) {
            if (matrix[i][j] === ".") {
                matrix[i][j] = 0;
                for (let k = i + 1; k < matrix.length; k++) {
                    if (matrix[k][j] === "0") {
                        break;
                    }
                    matrix[k][j] = "*";
                }
                for (let k = j + 1; k < matrix[0].length; k++) {
                    if (matrix[i][k] === "0") {
                        break;
                    }
                    matrix[i][k] = "*";
                }
            }
        }
    }
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            matrix[i][j] === "*" && (matrix[i][j] = 0);
        }
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