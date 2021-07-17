/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function (n) {
    return Array(n).fill().reduce((accumulator, c, index) => accumulator.concat(accumulator.slice().reverse().map(value => value | 1 << index)), [0]);
};

console.log(grayCode(2));
console.log(grayCode(0));