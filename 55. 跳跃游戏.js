/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
    let pos = 0;
    for (let i = 0; i <= pos && pos < nums.length - 1;) {
        pos = Math.max(pos, i + nums[i++]);
    }
    return pos >= nums.length - 1;
};

console.log(canJump([2, 3, 1, 1, 4]));
console.log(canJump([3, 2, 1, 0, 4]));