/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function (s) {
    let left = 0,
        right = 0,
        max = 0;
    const map = new Map();
    while (left + max < s.length) {
        map.has(s[right]) && (left = Math.max(left, map.get(s[right]) + 1));
        map.set(s[right], right);
        max = Math.max(max, ++right - left);
    }
    return max;
};

console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));
console.log(lengthOfLongestSubstring(""));