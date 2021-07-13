/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
    if (nums.length === 1) {
        return 0;
    }
    if (nums[0] > nums.length - 2) {
        return 1;
    }
    let count = 1;
    let right = nums[0],
        left = 0;
    while (true) {
        const temp = right;
        for (let i = right; i > left; i--) {
            if (nums[i] + i > right) {
                right = nums[i] + i;
                if (right > nums.length - 2) {
                    return ++count;
                }
            }
        }
        left = temp;
        count++;
    }
};

console.log(jump([2, 3, 1, 1, 4]));
console.log(jump([2, 3, 0, 1, 4]));