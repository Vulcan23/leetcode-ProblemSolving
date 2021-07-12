/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
 var spiralOrder = function (matrix) {
    let arr = matrix.shift();
    while (matrix.length) {
        let temp = [];
        for (let i = 0; i < matrix[0].length; i++) {
            temp.push([]);
        }
        for (let i = matrix[0].length - 1; i >= 0; i--) {
            for (let j = 0; j < matrix.length; j++) {
                temp[matrix[0].length - 1 - i].push(matrix[j][i]);
            }
        }
        matrix = temp;
        arr.push(...matrix.shift());
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