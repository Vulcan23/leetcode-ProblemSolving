/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function (n, k) {
    const arr = Array(n).fill().map((v, i) => i + 1);
    let s = "",
        factorial = arr.slice(1, -1).reduce((accumulator, currentValue) => accumulator * currentValue, 1);
    do {
        const i = Math.ceil(k / factorial) - 1;
        s += arr.splice(i, 1)[0];
        k -= factorial * i;
        factorial /= --n;
    } while (n !== 0);
    return s;
}

console.log(getPermutation(3, 3));
console.log(getPermutation(4, 9));
console.log(getPermutation(3, 1));