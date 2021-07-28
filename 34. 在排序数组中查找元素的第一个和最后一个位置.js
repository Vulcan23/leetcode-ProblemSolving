/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    let left = 0,
        right = nums.length - 1,
        i;
    while (left <= right) {
        const mid = Math.trunc((left + right) / 2);
        if (nums[mid] === target) {
            if (nums[mid - 1] !== target) {
                i = mid;
                break;
            }
            right = mid - 1;
        } else if (nums[mid] > target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    if (i === undefined) {
        return [-1, -1];
    }
    left = i;
    right = nums.length - 1;
    let j;
    while (left <= right) {
        const mid = Math.trunc((left + right) / 2);
        if (nums[mid] === target) {
            if (nums[mid + 1] !== target) {
                j = mid;
                break;
            }
            left = mid + 1;
        } else if (nums[mid] > target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return [i, j];
};

console.log(searchRange([5, 7, 7, 8, 8, 10], 8));
console.log(searchRange([5, 7, 7, 8, 8, 10], 6));
console.log(searchRange([], 0));