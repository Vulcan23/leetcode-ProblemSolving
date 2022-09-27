/**
 * @param {string} s
 * @return {number}
 */
var minCut = function (s) {
    const length = s.length;
    const graph = Array(length).fill().map(() => Array(length).fill(true));
    for (let i = length - 2; i >= 0; i--) {
        for (let j = i + 1; j < length; j++) {
            graph[i][j] = s[i] === s[j] && graph[i + 1][j - 1];
        }
    }
    const f = Array(length).fill(Number.MAX_SAFE_INTEGER);
    for (let i = 0; i < length; i++) {
        if (graph[0][i]) {
            f[i] = 0;
        } else {
            for (let j = 0; j < i; j++) {
                graph[j + 1][i] && (f[i] = Math.min(f[i], f[j] + 1));
            }
        }
    }
    return f[length - 1];
};

console.log(minCut("aab"));
console.log(minCut("a"));
console.log(minCut("ab"));