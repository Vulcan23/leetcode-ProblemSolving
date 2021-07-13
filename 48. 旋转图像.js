/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
 var rotate = function (matrix) {
    let arr = [];
    let length = matrix.length - 1;
    for (let i = 0; i <= length; i++) {
        arr.push([]);
        for (let j = 0; j <= length; j++) {
            arr[i].push(matrix[length - j][i]);
        }
    }
    matrix.splice(0, length + 1, ...arr);
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