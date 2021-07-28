/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
    let i = nums.length - 1;
    while (nums[i] <= nums[i - 1]) {
        i--;
    }
    if (i === 0) {
        return nums.reverse();
    }
    let j = nums.length - 1;
    while (nums[j] <= nums[i - 1]) {
        j--;
    }
    [nums[i - 1], nums[j]] = [nums[j], nums[i - 1]];
    nums.splice(i, nums.length - i, ...nums.slice(i).reverse());
    return nums;
};

console.log(nextPermutation([1, 2, 3]));
console.log(nextPermutation([3, 2, 1]));
console.log(nextPermutation([1, 1, 5]));
console.log(nextPermutation([1]));