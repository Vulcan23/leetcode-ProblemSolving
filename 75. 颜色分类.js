/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var sortColors = function (nums) {
    let count = nums.length,
        indexOne = nums.length - 1,
        i = 0;
    while (true) {
        if (nums[i] === 2) {
            nums.push(nums.splice(i, 1)[0]);
            indexOne--;
        } else if (nums[i] === 1) {
            nums.splice(indexOne, 0, nums.splice(i, 1)[0]);
        } else {
            i++;
        }
        if (--count === 0) {
            return nums;
        }
    }
};

console.log(sortColors([2, 0, 2, 1, 1, 0]));
console.log(sortColors([2, 0, 1]));
console.log(sortColors([0]));
console.log(sortColors([1]));