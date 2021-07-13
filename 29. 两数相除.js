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
        return dividend === -(2 ** 31) ? -dividend : -dividend - 1;
    }
    let symbol = 1;
    if (dividend > 0) {
        if (divisor < 0) {
            symbol = -1;
            divisor = -divisor;
        }
    } else {
        dividend = -dividend;
        if (divisor > 0) {
            symbol = -1;
        } else {
            divisor = -divisor;
        }
    }
    if (dividend === divisor) {
        return symbol;
    }
    this.divisor = divisor;
    const i = dfs(dividend);
    return symbol > 0 ? i : -i;
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