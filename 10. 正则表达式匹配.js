/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
    const graph = Array(s.length).fill().map(() => []);
    graph[-1] = [];
    graph[-1][-1] = true;
    for (let i = -1; i < s.length; i++) {
        for (let j = 0; j < p.length; j++) {
            if (p[j] === "*") {
                graph[i][j] = graph[i][j - 2] || (p[j - 1] === "." || s[i] === p[j - 1]) && graph[i - 1]?.[j];
            } else if (p[j] === "." || s[i] === p[j]) {
                graph[i][j] = graph[i - 1]?.[j - 1];
            }
        }
    }
    return graph[s.length - 1][p.length - 1] ?? false;
};

console.log(isMatch("aa", "a"));
console.log(isMatch("aa", "a*"));
console.log(isMatch("ab", ".*"));
console.log(isMatch("aab", "c*a*b"));
console.log(isMatch("mississippi", "mis*is*p*."));