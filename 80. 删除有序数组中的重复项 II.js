/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let start = 0;
    while (start < nums.length) {
        let end = 0,
            left = start + 1,
            right = nums.length - 1;
        while (left <= right) {
            const mid = Math.trunc((left + right) / 2);
            if (nums[mid] === nums[start]) {
                if (nums[mid + 1] === nums[start]) {
                    left = mid + 1;
                } else {
                    end = mid;
                    break;
                }
            } else {
                right = mid - 1;
            }
        }
        nums.splice(start, end - start - 1);
        start += 1 + (end && 1);
    }
    return nums.length;
};

console.log(removeDuplicates([1, 1, 1, 2, 2, 3]));
console.log(removeDuplicates([0, 0, 1, 1, 1, 1, 2, 3, 3]));