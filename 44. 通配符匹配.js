/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
    let newP = "^";
    for (let i of p) {
        if (i === "?") {
            newP += ".";
        } else if (i === "*") {
            newP.slice(-2) !== ".*" && (newP += ".*");
        } else {
            newP += i;
        }
    }
    console.log(newP);
    return RegExp(newP + "$").test(s);
};

// console.log(isMatch("aa", "a"));
// console.log(isMatch("aa", "*"));
// console.log(isMatch("cb", "?a"));
// console.log(isMatch("adceb", "*a*b"));
// console.log(isMatch("acdcb", "a*c?b"));

console.log(isMatch("abbabaaabbabbaababbabbbbbabbbabbbabaaaaababababbbabababaabbababaabbbbbbaaaabababbbaabbbbaabbbbababababbaabbaababaabbbababababbbbaaabbbbbabaaaabbababbbbaababaabbababbbbbababbbabaaaaaaaabbbbbaabaaababaaaabb", "**aa*****ba*a*bb**aa*ab****a*aaaaaa***a*aaaa**bbabb*b*b**aaaaaaaaa*a********ba*bbb***a*ba*bb*bb**a*b*bb"));