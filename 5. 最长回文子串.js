/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    let start = 0,
        max = 0,
        i = 0;
    while (s.length - 1 - i > max / 2) {
        let left = i,
            right = i;
        while (s[right] === s[right + 1]) {
            right++;
        }
        i = right + 1;
        const part = Math.trunc((max - (right - left)) / 2 + 1);
        if (part <= 0 || s[left - part] === s[right + part]) {
            while (left > 0 && s[left - 1] === s[right + 1]) {
                left--;
                right++;
            }
            if (right - left > max) {
                start = left;
                max = right - left;
            }
        }
    }
    return s.slice(start, start + max + 1);
};

console.log(longestPalindrome("babad"));
console.log(longestPalindrome("cbbd"));
console.log(longestPalindrome("a"));
console.log(longestPalindrome("ac"));