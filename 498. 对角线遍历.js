/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function (mat) {
    const arr = [];
    let n = 0;
    const length = mat.length;
    let i = 0;
    do {
        const diagonal = [];
        let j = n;
        let index = i;
        do {
            diagonal.push(mat[j][index]);
        } while (++j < length && (index = i - j + n, index >= 0));
        arr.push(...((i + n) % 2 === 0 ? diagonal.reverse() : diagonal));
    } while (i === mat[0].length - 1 ? ++n !== length : ++i);
    return arr;
};

let arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
console.log(findDiagonalOrder(arr));