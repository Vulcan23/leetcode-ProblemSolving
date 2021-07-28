/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    const arr = [];
    if (nums.length < 3) {
        return arr;
    }
    nums.sort((a, b) => a - b);
    const length = nums.length;
    for (let i = 0; nums[i] + nums[i + 1] + nums[i + 2] <= 0; i++) {
        if (nums[i] !== nums[i - 1] && nums[i] + nums[length - 2] + nums[length - 1] >= 0) {
            let left = i + 1,
                right = length - 1;
            while (left < right) {
                const sum = nums[i] + nums[left] + nums[right];
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
    }
    return arr;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
console.log(threeSum([]));
console.log(threeSum([0]));