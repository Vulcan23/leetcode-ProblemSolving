/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    if (numRows === 1) {
        return s;
    }
    const result = Array(numRows).fill().map(() => []);
    let index = 0;
    let direction = 1;
    for (let i = 0; i < s.length; i++) {
        result[index].push(s[i]);
        if (index === 0) {
            direction = 1;
        } else if (index === numRows - 1) {
            direction = -1;
        }
        index += direction;
    }
    return result.reduce((accumulator, currentValue) => accumulator + currentValue.join(""), "");
};

console.log(convert("PAYPALISHIRING", 3));
console.log(convert("PAYPALISHIRING", 4));
console.log(convert("A", 1));