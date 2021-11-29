/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
    heights.unshift(0);
    heights.push(0);
    let stack = [0];
    let res = 0;
    for (let i = 1; i < heights.length; i++) {
        while (heights[i] < heights[stack[stack.length - 1]]) {
            res = Math.max(heights[stack.pop()] * (i - stack[stack.length - 1] - 1), res);
        }
        stack.push(i);
    }
    return res;
};

console.log(largestRectangleArea([2, 1, 5, 6, 2, 3]));
console.log(largestRectangleArea([2, 4]));