/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    this.result = [[]],
        this.nums = nums;
    dfs([], 0);
    return result;
};

function dfs(arr, index) {
    for (let i = index; i < this.nums.length; i++) {
        arr.push(this.nums[i]);
        this.result.push(arr.slice());
        dfs(arr, i + 1);
        arr.pop();
    }
}

console.log(subsets([1, 2, 3]));
console.log(subsets([0]));