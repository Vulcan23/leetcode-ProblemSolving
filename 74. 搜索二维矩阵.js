/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    matrix = matrix.flat();
    let left = 0,
        right = matrix.length;
    while (left <= right) {
        const mid = Math.trunc((left + right) / 2);
        if (matrix[mid] === target) {
            return true;
        } else if (matrix[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return false;
};

let matrix = [
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 60],
],
    target = 3;
console.log(searchMatrix(matrix, target));

matrix = [
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 60],
],
    target = 13;
console.log(searchMatrix(matrix, target));