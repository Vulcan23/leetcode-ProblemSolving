/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
    let left = RegExp(Array.from(new Set(t)).join("|")).exec(s)?.index,
        minStr = "";
    if (left !== undefined) {
        const map = new Map();
        Array.from(t).forEach(char => map.set(char, (map.get(char) || 0) + 1));
        let right = left,
            count = map.size;
        while (left + t.length <= s.length) {
            const cR = s[right];
            if (map.has(cR)) {
                map.set(cR, map.get(cR) - 1);
                map.get(cR) === 0 && count--;
            }
            while (count === 0) {
                const cL = s[left];
                !minStr || right + 1 - left < minStr.length && (minStr = s.slice(left, right + 1));
                if (map.has(cL)) {
                    map.set(cL, map.get(cL) + 1);
                    map.get(cL) === 1 && count++;
                }
                left++;
            }
            if (minStr === t.length || ++right >= s.length) {
                break;
            }
        }
    }
    return minStr;
};

console.log(minWindow("ADOBECODEBANC", "ABC"));
console.log(minWindow("a", "a"));
console.log(minWindow("a", "aa"));