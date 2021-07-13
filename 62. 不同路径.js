/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
    let result = 1;
    let max = m - 1,
        min = n - 1;
    m < n && ([max, min] = [min, max]);
    for (let i = 1; i <= min; i++) {
        result *= (max + i) / i;
    }
    return result;
};

console.log(uniquePaths(3, 7));
console.log(uniquePaths(3, 2));
console.log(uniquePaths(7, 3));
console.log(uniquePaths(3, 3));