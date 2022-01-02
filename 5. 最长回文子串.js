/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    let start = 0, end = -1;
    this.str = `#${s.split("").join("#")}#`;
    const graph = [];
    let right = 0, j;
    for (let i = 0; i < str.length; i++) {
        if (right > i) {
            const min_arm_len = Math.min(graph[j * 2 - i] ?? 0, right - i);
            graph[i] = expand(i - min_arm_len, i + min_arm_len);
        } else {
            graph[i] = expand(i, i);
        }
        if (i + graph[i] > right) {
            j = i;
            right = i + graph[i];
        }
        if (graph[i] * 2 > end - start) {
            start = i - graph[i];
            end = i + graph[i];
        }
    }
    return str.slice(start, end + 1).split("#").join("");
};

function expand(left, right) {
    while (left-- >= 0 && right++ < this.str.length && this.str[left] === this.str[right]) { }
    return (right - left - 4) / 2;
}

console.log(longestPalindrome("babad"));
console.log(longestPalindrome("cbbd"));
console.log(longestPalindrome("a"));
console.log(longestPalindrome("ac"));