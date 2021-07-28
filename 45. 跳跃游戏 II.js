/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
    let pos = 0,
        count = 0,
        max = 0;
    for (let i = 0; pos < nums.length - 1;) {
        pos = Math.max(pos, i + nums[i]);
        if (i++ === max) {
            max = pos;
            count++;
        }
    }
    return count + (pos !== max);
};

console.log(jump([2, 3, 1, 1, 4]));
console.log(jump([2, 3, 0, 1, 4]));