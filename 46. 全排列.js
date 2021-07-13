/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    this.result = [];
    dfs(nums, []);
    return result;
};

function dfs(arrRest, arr) {
    if (arrRest.length === 0) {
        return this.result.push(arr.slice());
    }
    for (let i = 0; i < arrRest.length; i++) {
        const arrClone = arrRest.slice();
        arr.push(arrClone.splice(i, 1)[0]);
        dfs(arrClone, arr);
        arr.pop();
    }
}

console.log(permute([1, 2, 3]));
console.log(permute([0, 1]));
console.log(permute([1]));