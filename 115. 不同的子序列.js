/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function (s, t) {
    const dp = Array(t.length + 1).fill(0);
    dp[0] = 1;
    for (let i = 0; i < s.length; i++) {
        for (let j = t.length - 1; j >= 0; j--) {
            s[i] === t[j] && (dp[j + 1] += dp[j]);
        }
    }
    return dp[t.length];
};

console.log(numDistinct("rabbbit", "rabbit"));
console.log(numDistinct("babgbag", "bag"));