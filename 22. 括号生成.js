/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    this.res = [];
    this.n = n;
    dfs(n, n, "");
    return res;
};

function dfs(lRemain, rRemain, str) {
    if (str.length === 2 * this.n) {
        return this.res.push(str);
    }
    lRemain > 0 && dfs(lRemain - 1, rRemain, str + "(");
    lRemain < rRemain && dfs(lRemain, rRemain - 1, str + ")");
};

console.log(generateParenthesis(3));
console.log(generateParenthesis(1));