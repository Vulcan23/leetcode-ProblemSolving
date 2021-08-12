/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
    this.result = [];
    this.n = n;
    dfs([[], [], [], []]);
    return result;
};

function dfs(arr) {
    if (arr[3].length === this.n) {
        return this.result.push(arr[3].slice());
    }
    for (let i = 0; i < this.n; i++) {
        if (!arr[0][i] && !arr[1][arr[3].length + i] && !arr[2][arr[3].length - i]) {
            arr[0][i] = true;
            arr[1][arr[3].length + i] = true;
            arr[2][arr[3].length - i] = true;
            arr[3].push(".".repeat(i) + "Q" + ".".repeat(n - 1 - i));
            dfs(arr);
            arr[3].pop();
            arr[0][i] = false;
            arr[1][arr[3].length + i] = false;
            arr[2][arr[3].length - i] = false;
        }
    }
}

console.log(solveNQueens(4));
console.log(solveNQueens(1));