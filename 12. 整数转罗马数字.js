/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
    const nums = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
        char = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    let result = "",
        i = 0;
    while (num > 0) {
        if (num >= nums[i]) {
            result += char[i];
            num -= nums[i];
        } else {
            i++;
        }
    }
    return result;
};

console.log(intToRoman(3));
console.log(intToRoman(4));
console.log(intToRoman(9));
console.log(intToRoman(58));
console.log(intToRoman(1994));