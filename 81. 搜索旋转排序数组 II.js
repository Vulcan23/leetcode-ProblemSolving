/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function (nums, target) {
    let left = 0,
        right = nums.length - 1;
    while (left <= right) {
        const mid = Math.trunc((left + right) / 2);
        if (nums[mid] === target) {
            return true;
        }
        if (nums[mid] === nums[left] && nums[left] === nums[right]) {
            return nums.slice(left + 1, right).includes(target);
        }
        if (nums[mid] > target) {
            if (target < nums[left] && nums[mid] >= nums[left]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        } else {
            if (target > nums[right] && nums[mid] <= nums[right]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
    }
    return false;
};

console.log(search([2, 5, 6, 0, 0, 1, 2], 0));
console.log(search([2, 5, 6, 0, 0, 1, 2], 3));