/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
    if (dividend === 0) {
        return 0;
    }
    if (divisor === 1) {
        return dividend;
    }
    if (divisor === -1) {
        return dividend === -(2 ** 31) ? -dividend - 1 : -dividend;
    }
    const symbol = dividend > 0 && divisor > 0 || dividend < 0 && divisor < 0 ? 1 : -1;
    if (dividend === divisor) {
        return symbol;
    }
    this.divisor = Math.abs(divisor);
    const i = dfs(Math.abs(dividend));
    return symbol === 1 ? i : -i;
};

function dfs(a) {
    if (a < this.divisor) {
        return 0;
    }
    let i = 2,
        j = 1;
    while (Math.imul(i, this.divisor) > 0 && a >= Math.imul(i, this.divisor)) {
        j = i;
        i = i + i;
    }
    return j + dfs(a - Math.imul(j, this.divisor));
}

console.log(divide(10, 3));
console.log(divide(7, -3));