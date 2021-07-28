/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
    const arr = [];
    if (nums.length < 4) {
        return arr;
    }
    nums.sort((a, b) => a - b);
    const length = nums.length;
    for (let i = 0; nums[i] + nums[i + 1] + nums[i + 2] + nums[i + 3] <= target; i++) {
        if (nums[i] !== nums[i - 1] && nums[i] + nums[length - 3] + nums[length - 2] + nums[length - 1] >= target) {
            for (let j = i + 1; nums[i] + nums[j] + nums[j + 1] + nums[j + 2] <= target; j++) {
                if ((j === i + 1 || nums[j] !== nums[j - 1]) && nums[i] + nums[j] + nums[length - 2] + nums[length - 1] >= target) {
                    let left = j + 1,
                        right = length - 1;
                    while (left < right) {
                        const sum = nums[i] + nums[j] + nums[left] + nums[right];
                        if (sum === target) {
                            arr.push([nums[i], nums[j], nums[left], nums[right]]);
                            while (left < right && nums[left] === nums[++left]) { }
                            while (left < right && nums[right] === nums[--right]) { }
                        } else if (sum < target) {
                            left++;
                        } else {
                            right--;
                        }
                    }
                }
            }
        }
    }
    return arr;
};

console.log(fourSum([-2, -1, 0, 0, 1, 2], 0));