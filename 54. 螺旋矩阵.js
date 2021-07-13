/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralarr = function (matrix) {
    const arr = [];
    let left = 0,
        right = matrix[0].length - 1,
        top = 0,
        bottom = matrix.length - 1;
    while (left <= right && top <= bottom) {
        for (let column = left; column <= right; column++) {
            arr.push(matrix[top][column]);
        }
        for (let row = top + 1; row <= bottom; row++) {
            arr.push(matrix[row][right]);
        }
        if (top !== bottom) {
            for (let column = right - 1; column > left; column--) {
                arr.push(matrix[bottom][column]);
            }
        }
        if (left !== right) {
            for (let row = bottom; row > top; row--) {
                arr.push(matrix[row][left]);
            }
        }
        left++,
            right--,
            top++,
            bottom--;
    };
    return arr;
}

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
console.log(spiralarr(matrix));

matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
];
console.log(spiralarr(matrix));