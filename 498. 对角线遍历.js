/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function (mat) {
    const m = mat.length,
        n = mat[0].length,
        arr = [];
    let row = 0,
        column = 0;
    do {
        arr.push(mat[row][column]);
        if ((row + column) % 2 === 0) {
            if (column === n - 1) {
                row++;
            } else if (row === 0) {
                column++;
            } else {
                column++;
                row--;
            }
        } else if (row === m - 1) {
            column++;
        } else if (column === 0) {
            row++;
        } else {
            column--;
            row++;
        }
    } while (row < m && column < n);
    return arr;
}

let arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
console.log(findDiagonalOrder(arr));