/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let max = 0,
        left = 0,
        right = height.length - 1;
    while (left < right) {
        let sum;
        if (height[left] < height[right]) {
            sum = height[left] * (right - left++);
        } else {
            sum = height[right] * (right-- - left);
        }
        sum > max && (max = sum);
    }
    return max;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
console.log(maxArea([1, 1]));
console.log(maxArea([4, 3, 2, 1, 4]));
console.log(maxArea([1, 2, 1]));