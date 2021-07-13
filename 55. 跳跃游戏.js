/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var canJump = function (nums) {
    if (nums[0] > nums.length - 2) {
        return true;
    }
    let right = nums[0],
        left = 0;
    do {
        const temp = right;
        for (let i = right; i > left; i--) {
            if (nums[i] + i > right) {
                right = nums[i] + i;
                if (right > nums.length - 2) {
                    return true;
                }
            }
        }
        left = temp;
    } while (right !== left);
    return false;
};

console.log(canJump([2, 3, 1, 1, 4]));
console.log(canJump([3, 2, 1, 0, 4]));