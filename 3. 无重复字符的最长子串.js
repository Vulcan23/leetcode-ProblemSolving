/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let left = 0,
        right = 0,
        max = 0;
    const graph = {};
    while (left + max < s.length) {
        graph[s[right]] !== undefined && (left = Math.max(left, graph[s[right]] + 1));
        graph[s[right]] = right;
        max = Math.max(max, ++right - left);
    }
    return max;
};

console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));
console.log(lengthOfLongestSubstring(""));