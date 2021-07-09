/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
    if (n === 0) {
        return 1;
    }
    if (n % 2 === 0) {
        return myPow(x * x, n / 2);
    }
    if (n % 2 === 1) {
        return x * myPow(x, n - 1);
    }
    return myPow(1 / x, -n);
};

console.log(myPow(2.00000, 10));
console.log(myPow(2.10000, 3));
console.log(myPow(2.00000, -2));