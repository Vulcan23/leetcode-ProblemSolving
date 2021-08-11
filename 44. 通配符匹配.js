/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
    let sRight = s.length,
        pRight = p.length;
    while (sRight > 0 && pRight > 0 && p[pRight - 1] !== "*") {
        if (s[--sRight] !== p[--pRight] && p[pRight] !== "?") {
            return false;
        }
    }
    if (pRight === 0) {
        return sRight === 0;
    }
    let sIndex = 0,
        pIndex = 0,
        sRecord = -1,
        pRecord = -1;
    while (sIndex < sRight && pIndex < pRight) {
        if (p[pIndex] === "*") {
            sRecord = sIndex;
            pRecord = ++pIndex;
        } else if (s[sIndex] === p[pIndex] || p[pIndex] === "?") {
            sIndex++;
            pIndex++;
        } else if (sRecord !== -1 && sRecord + 1 < sRight) {
            sIndex = ++sRecord;
            pIndex = pRecord;
        } else {
            return false;
        }
    }
    return !/[^\*]/.test(p.slice(pIndex, pRight));
};

console.log(isMatch("aa", "a"));
console.log(isMatch("aa", "*"));
console.log(isMatch("cb", "?a"));
console.log(isMatch("adceb", "*a*b"));
console.log(isMatch("acdcb", "a*c?b"));

console.log(isMatch("aaaab", "*ab*"));