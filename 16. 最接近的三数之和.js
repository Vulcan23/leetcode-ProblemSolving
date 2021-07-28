/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
    nums.sort((a, b) => a - b);
    const length = nums.length;
    if (nums[0] + nums[1] + nums[2] > target) {
        return nums[0] + nums[1] + nums[2];
    } else if (nums[length - 3] + nums[length - 2] + nums[length - 1] < target) {
        return nums[length - 3] + nums[length - 2] + nums[length - 1];
    }
    let minDifference = Infinity,
        symbol;
    for (let i = 0; nums[i] + nums[i + 1] + nums[i + 2] - target < minDifference; i++) {
        if (nums[i] !== nums[i - 1] && -(nums[i] + nums[length - 2] + nums[length - 1] - target) < minDifference) {
            let left = i + 1,
                right = length - 1;
            while (left < right) {
                const difference = nums[i] + nums[left] + nums[right] - target;
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
    }
    return target + symbol * minDifference;
};

console.log(threeSumClosest([-1, 2, 1, -4], 1));