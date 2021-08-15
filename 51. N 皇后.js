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

function dfs(graph) {
    if (graph[3].length === this.n) {
        return this.result.push(graph[3].slice());
    }
    for (let i = 0; i < this.n; i++) {
        if (!graph[0][i] && !graph[1][graph[3].length + i] && !graph[2][graph[3].length - i]) {
            graph[0][i] = true;
            graph[1][graph[3].length + i] = true;
            graph[2][graph[3].length - i] = true;
            graph[3].push(".".repeat(i) + "Q" + ".".repeat(n - 1 - i));
            dfs(graph);
            graph[3].pop();
            graph[0][i] = false;
            graph[1][graph[3].length + i] = false;
            graph[2][graph[3].length - i] = false;
        }
    }
}

console.log(solveNQueens(4));
console.log(solveNQueens(1));