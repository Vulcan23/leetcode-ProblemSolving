/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function (s) {
    if (s === "") {
        return 0;
    }
    let start = 0,
        max = 1,
        sum = 1;
    for (let i = 1; i < s.length; i++) {
        let con = true;
        if (s[i] === s[i - 1]) {
            start = i;
            sum = 1;
            con = false;
        } else {
            for (let j = start; j < i - 1; j++) {
                if (s[j] === s[i]) {
                    start = j + 1;
                    sum = i - j;
                    con = false;
                    break;
                }
            }
        }
        if (con) {
            sum++;
        }
        max = Math.max(sum, max);
    }
    return max;
};

console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));
console.log(lengthOfLongestSubstring(""));