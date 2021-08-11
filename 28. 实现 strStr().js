/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    const n = haystack.length,
        m = needle.length;
    if (m === 0) {
        return 0;
    }
    const pi = [0];
    for (let i = 1, j = 0; i < m; i++) {
        while (j > 0 && needle[i] !== needle[j]) {
            j = pi[j - 1];
        }
        needle[i] === needle[j] && j++;
        pi[i] = j;
    }
    for (let i = 0, j = 0; i < n; i++) {
        while (j > 0 && haystack[i] !== needle[j]) {
            j = pi[j - 1];
        }
        haystack[i] === needle[j] && j++;
        if (j === m) {
            return i - m + 1;
        }
    }
    return -1;
};

console.log(strStr("hello", "ll"));
console.log(strStr("aaaaa", "bba"));
console.log(strStr("", ""));