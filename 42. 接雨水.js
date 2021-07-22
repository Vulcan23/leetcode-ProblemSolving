/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    let sum = 0,
        left = 0,
        right = height.length - 1,
        leftMax = 0,
        rightMax = 0;
    while (left < right) {
        leftMax = Math.max(leftMax, height[left]);
        rightMax = Math.max(rightMax, height[right]);
        sum += height[left] < height[right] ? leftMax - height[left++] : rightMax - height[right--];
    }
    return sum;
};

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
console.log(trap([4, 2, 0, 3, 2, 5]));