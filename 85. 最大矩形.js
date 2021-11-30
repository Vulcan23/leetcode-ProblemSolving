/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function (matrix) {
    let arr;
    return Math.max(0, ...matrix.map(row => largestRectangleArea(arr = (arr ? row.map((char, index) => Number(char) ? arr[index] + 1 : 0) : row.map(char => Number(char))))));
};

function largestRectangleArea(heights) {
    const heightsClone = heights.slice();
    heightsClone.unshift(0);
    heightsClone.push(0);
    let stack = [0];
    let res = 0;
    for (let i = 1; i < heightsClone.length; i++) {
        while (heightsClone[i] < heightsClone[stack[stack.length - 1]]) {
            res = Math.max(heightsClone[stack.pop()] * (i - stack[stack.length - 1] - 1), res);
        }
        stack.push(i);
    }
    return res;
};

console.log(maximalRectangle([
    ["1", "0", "1", "0", "0"],
    ["1", "0", "1", "1", "1"],
    ["1", "1", "1", "1", "1"],
    ["1", "0", "0", "1", "0"],
]));
console.log(maximalRectangle([]));
console.log(maximalRectangle([["0"]]));
console.log(maximalRectangle([["1"]]));
console.log(maximalRectangle([["0", "0"]]));