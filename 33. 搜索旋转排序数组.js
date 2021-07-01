/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let left = 0,
        right = nums.length - 1;
    while (left <= right) {
        if (left + 1 >= right) {
            for (let i = left; i <= right; i++) {
                if (nums[i] === target) {
                    return Number(i);
                }
            }
            return -1;
        }
        let mid = Math.trunc((left + right) / 2);
        if (nums[mid] === target) {
            return mid;
        }
        if (nums[mid] > target) {
            if (target < nums[left] && nums[mid] > nums[left]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        } else {
            if (target > nums[right] && nums[mid] < nums[right]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
    }
    return -1;
};

console.log(search([4, 5, 6, 7, 0, 1, 2], 0));
console.log(search([4, 5, 6, 7, 0, 1, 2], 3));
console.log(search([1], 0));