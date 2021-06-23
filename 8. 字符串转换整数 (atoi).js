/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
    let n = Number(s.match(/(?<=^ *)[\+\-]?[0-9]+/)?.[0]);
    if (n) {
        if (n > 2 ** 31 - 1) {
            return 2 ** 31 - 1;
        } else if (n < -(2 ** 31)) {
            return -(2 ** 31);
        }
        return n;
    }
    return 0;
};

console.log(myAtoi("42"));
console.log(myAtoi("   -42"));
console.log(myAtoi("4193 with words"));
console.log(myAtoi("words and 987"));
console.log(myAtoi("-91283472332"));