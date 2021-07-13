/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
    const min = Math.min(m, n) - 1;
    return min === 0 ? 1 : factorial(m + n - 2, min) / factorial(min, min);
};

function factorial(m, n) {
    if (n-- === 1) {
        return m;
    }
    return m-- * factorial(m, n);
}

console.log(uniquePaths(3, 7));
console.log(uniquePaths(3, 2));
console.log(uniquePaths(7, 3));
console.log(uniquePaths(3, 3));