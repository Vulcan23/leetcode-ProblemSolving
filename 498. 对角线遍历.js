/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function (mat) {
    let arr = [];
    let n = 0;
    let arrChildLength = mat[0].length;
    let arrLength = mat.length;
    for (let i = 0; i < arrChildLength; i++) {
        let diagonal = [];
        let j = n;
        let index = i;
        do {
            diagonal.push(mat[j][index]);
        } while (++j < arrLength && (index = i - j + n, index >= 0));
        arr.concat(((i + n) % 2 === 0 ? diagonal.reverse() : diagonal));
        if (i === arrChildLength - 1) {
            if (++n === arrLength) {
                break;
            }
            i--;
        }
    }
    return arr;
};

let arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

console.log(findDiagonalOrder(arr));