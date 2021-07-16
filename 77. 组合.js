/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
    this.result = [],
        this.k = k;
    dfs([], n);
    return result;
};

function dfs(arr, n) {
    if (arr.length + n === this.k) {
        this.result.push(arr.concat(Array(n).fill().map((v, i) => i + 1)));
        return true;
    }
    if (arr.length === this.k) {
        this.result.push(arr.slice());
    } else {
        for (let i = n; i > 0; i--) {
            arr.push(i);
            if (dfs(arr, i - 1)) {
                arr.pop();
                break;
            }
            arr.pop();
        }
    }
}

console.log(combine(4, 2));