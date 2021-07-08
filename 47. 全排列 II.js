/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
    this.result = [];
    dfs(nums, []);
    return result;
};

function dfs(arrRest, arr) {
    if (arrRest.length === 0) {
        return this.result.push(arr.slice());
    }
    let graph = {};
    for (let i = 0; i < arrRest.length; i++) {
        if (!graph[arrRest[i]]) {
            graph[arrRest[i]] = true;
            let arrClone = arrRest.slice();
            arr.push(arrClone.splice(i, 1)[0]);
            dfs(arrClone, arr);
            arr.pop();
        }
    }
}

console.log(permuteUnique([1, 1, 2]));
console.log(permuteUnique([1, 2, 3]));