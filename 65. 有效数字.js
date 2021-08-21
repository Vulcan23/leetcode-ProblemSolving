/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function (s) {
    return /^[\+\-]?(\d*\.?\d+|\d+\.?\d*)([eE][\+\-]?\d+)?$/.test(s);
};

console.log(isNumber("0"));
console.log(isNumber("e"));
console.log(isNumber("."));
console.log(isNumber(".1"));