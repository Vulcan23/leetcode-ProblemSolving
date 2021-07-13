/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
    let num = 1;
    const matrix = Array(n).fill().map(() => []);
    let left = 0,
        right = n - 1,
        top = 0,
        bottom = n - 1;
    while (left <= right && top <= bottom) {
        for (let column = left; column <= right; column++) {
            matrix[top][column] = num++;
        }
        for (let row = top + 1; row <= bottom; row++) {
            matrix[row][right] = num++;
        }
        if (top !== bottom) {
            for (let column = right - 1; column > left; column--) {
                matrix[bottom][column] = num++;
            }
        }
        if (left !== right) {
            for (let row = bottom; row > top; row--) {
                matrix[row][left] = num++;
            }
        }
        left++,
            right--,
            top++,
            bottom--;
    }
    return matrix;
};

console.log(generateMatrix(3));
console.log(generateMatrix(1));