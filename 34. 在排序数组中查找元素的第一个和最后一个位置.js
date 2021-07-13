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
            i = mid;
            break;
        }
        if (nums[mid] > target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    if (i !== undefined) {
        const arr = [i - 1, i + 1];
        while (left <= arr[0]) {
            const mid = Math.trunc((left + arr[0]) / 2);
            if (nums[mid] === target) {
                arr[0] = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        while (arr[1] <= right) {
            const mid = Math.trunc((arr[1] + right) / 2);
            if (nums[mid] === target) {
                arr[1] = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return [arr[0] + 1, arr[1] - 1];
    }
    return [-1, -1];
};

console.log(searchRange([5, 7, 7, 8, 8, 10], 8));
console.log(searchRange([5, 7, 7, 8, 8, 10], 6));
console.log(searchRange([], 0));