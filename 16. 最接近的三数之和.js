/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
    nums.sort((a, b) => a - b);
    let length = nums.length;
    if (nums[0] + nums[1] + nums[2] > target) {
        return nums[0] + nums[1] + nums[2];
    } else if (nums[length - 3] + nums[length - 2] + nums[length - 1] < target) {
        return nums[length - 3] + nums[length - 2] + nums[length - 1];
    }
    let minDifference = Number.MAX_SAFE_INTEGER,
        symbol;
    for (let i = 0; i < length - 2; i++) {
        if (nums[i] + nums[i + 1] + nums[i + 2] - target >= minDifference) {
            break;
        }
        if (i > 0 && nums[i] === nums[i - 1] || -(nums[i] + nums[length - 2] + nums[length - 1] - target) >= minDifference) {
            continue;
        }
        let left = i + 1,
            right = length - 1;
        while (left < right) {
            let difference = nums[i] + nums[left] + nums[right] - target;
            if (difference === 0) {
                return target;
            }
            if (difference > 0) {
                if (difference < minDifference) {
                    minDifference = difference;
                    symbol = 1;
                }
                right--;
            } else {
                if (-difference < minDifference) {
                    minDifference = -difference;
                    symbol = -1;
                }
                left++;
            }
        }
    }
    return target + symbol * minDifference;
};

let nums = [-1, 2, 1, -4],
    target = 1;
console.log(threeSumClosest(nums, target));