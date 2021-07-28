/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    let left = 0,
        right = nums.length - 1;
    for (let i = left; i <= right;) {
        if (nums[i] === 2) {
            [nums[i], nums[right--]] = [nums[right], nums[i]];
        } else {
            nums[i] === 0 && ([nums[i], nums[left++]] = [nums[left], nums[i]]);
            i++;
        }
    }
    return nums;
};

console.log(sortColors([2, 0, 2, 1, 1, 0]));
console.log(sortColors([2, 0, 1]));
console.log(sortColors([0]));
console.log(sortColors([1]));