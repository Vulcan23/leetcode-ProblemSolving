/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    let start = 0,
        max = 0,
        left,
        right,
        i = 0;
    do {
        left = right = i;
        while (right < s.length - 1 && s[right] === s[right + 1]) {
            right++;
        }
        i = right + 1;
        const part = Math.trunc((max - (right - left)) / 2 + 1);
        if (part > 0 && (left - part < 0 || right + part >= s.length || s[left - part] !== s[right + part])) {
            continue;
        }
        while (left > 0 && s[left - 1] === s[right + 1]) {
            left--;
            if (++right >= s.length) {
                break;
            }
        }
        if (right - left > max) {
            start = left;
            max = right - left;
        }
    } while (i < s.length && s.length - i >= max / 2);
    return s.slice(start, start + max + 1)
};

console.log(longestPalindrome("babad"));
console.log(longestPalindrome("cbbd"));
console.log(longestPalindrome("a"));
console.log(longestPalindrome("ac"));