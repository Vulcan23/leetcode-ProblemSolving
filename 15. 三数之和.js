/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    let arr = [];
    if (nums.length < 3) {
        return arr;
    }
    nums.sort((a, b) => a - b);
    let length = nums.length;
    for (let i = 0; i < length - 2; i++) {
        if (nums[i] + nums[i + 1] + nums[i + 2] > 0) {
            break;
        }
        if (i > 0 && nums[i] === nums[i - 1] || nums[i] + nums[length - 2] + nums[length - 1] < 0) {
            continue;
        }
        let left = i + 1,
            right = length - 1;
        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right];
            if (sum === 0) {
                arr.push([nums[i], nums[left], nums[right]]);
                while (left < right && nums[left] === nums[++left]) { }
                while (left < right && nums[right] === nums[--right]) { }
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }
    return arr;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
console.log(threeSum([]));
console.log(threeSum([0]));