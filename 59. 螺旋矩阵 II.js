/**
 * @param {number} n
 * @return {number[][]}
 */
 var generateMatrix = function (n) {
    let start = n ** 2;
    let arr = [[start]],
        length;
    while (arr.length !== n) {
        let tempRotate = [];
        arr.push([]);
        length = arr.length - 1;
        for (let i = 0; i < arr[0].length; i++) {
            tempRotate.push([]);
            arr[length].push(--start);
            for (let j = 0; j <= length; j++) {
                tempRotate[i].push(arr[length - j][i]);
            }
        }
        arr = tempRotate;
    }
    if (length) {
        let tempRotate = [];
        for (let i = 0; i <= length; i++) {
            tempRotate.push([]);
            for (let j = 0; j <= length; j++) {
                tempRotate[i].push(arr[length - j][i]);
            }
        }
        arr = tempRotate;
    }
    return arr;
};

console.log(generateMatrix(3));
console.log(generateMatrix(1));