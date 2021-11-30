/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var isScramble = function (s1, s2) {
    const length = s1.length;
    this.memo = Array(length).fill().map(() => Array(length).fill().map(() => []));
    return dfs(0, 0, length, s1, s2);
};

function dfs(i1, i2, length, s1, s2) {
    if (this.memo[i1][i2][length] !== undefined) {
        return this.memo[i1][i2][length];
    }
    if (s1.slice(i1, i1 + length) === s2.slice(i2, i2 + length)) {
        return this.memo[i1][i2][length] = true;
    }
    if (CheckIfDifference(i1, i2, length, s1, s2)) {
        return this.memo[i1][i2][length] = false;
    }
    for (let i = 1; i < length; i++) {
        if (dfs(i1, i2, i, s1, s2) && dfs(i1 + i, i2 + i, length - i, s1, s2) || dfs(i1, i2 + length - i, i, s1, s2) && dfs(i1 + i, i2, length - i, s1, s2)) {
            return this.memo[i1][i2][length] = true;
        }
    }
    return this.memo[i1][i2][length] = false;
}

function CheckIfDifference(i1, i2, length, s1, s2) {
    const freq = new Map();
    for (let i = i1; i < i1 + length; i++) {
        const c = s1[i];
        freq.set(c, (freq.get(c) ?? 0) + 1);
    }
    for (let i = i2; i < i2 + length; i++) {
        const c = s2[i];
        freq.set(c, (freq.get(c) ?? 0) - 1);
    }
    return Array.from(freq.values()).some(item => item !== 0);
}

console.log(isScramble("great", "rgeat"));
console.log(isScramble("abcde", "caebd"));
console.log(isScramble("a", "a"));