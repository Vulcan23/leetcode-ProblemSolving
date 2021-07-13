/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    let arr = matrix.shift();
    while (matrix.length) {
        let temp = [],
            length = matrix[0].length - 1;
        for (let i = 0; i < length; i++) {
            temp.push([]);
        }
        for (let i = length; i >= 0; i--) {
            for (let j = 0; j < matrix.length; j++) {
                (i === length ? arr : temp[length - 1 - i]).push(matrix[j][i]);
            }
        }
        matrix = temp;
    }
    return arr;
};

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
console.log(spiralOrder(matrix));

matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
];
console.log(spiralOrder(matrix));