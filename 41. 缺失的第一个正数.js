/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
    let n = nums.length;
    for (let i = 0; i < n; i++) {
        nums[i] < 1 && (nums[i] = n + 1);
    }
    for (let i = 0; i < n; i++) {
        const num = Math.abs(nums[i]) - 1;
        num < n && (nums[num] = -Math.abs(nums[num]));
    }
    let i = 0;
    for (; i < n && nums[i] <= 0; i++) { }
    return i + 1;
};

console.log(firstMissingPositive([1, 2, 0]));
console.log(firstMissingPositive([3, 4, -1, 1]));
console.log(firstMissingPositive([7, 8, 9, 11, 12]));