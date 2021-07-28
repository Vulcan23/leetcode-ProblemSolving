/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
    if (num1 === "0" || num2 === "0") {
        return "0";
    }
    const len1 = num1.length,
        len2 = num2.length,
        arr = Array(Math.ceil(len1 / 7) + Math.ceil(len2 / 7)).fill().map(() => []);
    for (let i = 0; i < Math.ceil(len1 / 7); i++) {
        for (let j = 0; j < Math.ceil(len2 / 7); j++) {
            arr[i + j].push(num1.substring(len1 - 7 * (i + 1), len1 - 7 * i) * num2.substring(len2 - 7 * (j + 1), len2 - 7 * j));
        }
    }
    for (let i = 0; i < arr.length - 1; i++) {
        const sum = arr[i].reduce((accumulator, currentValue) => (accumulator >= 9 * 10 ** 15 && (accumulator -= 9 * 10 ** 15, arr[i + 1].push(90)), accumulator += currentValue)),
            j = sum % 10 ** 7;
        arr[i] = j;
        arr[i + 1].push((sum - j) / 10 ** 7);
    }
    return (arr.pop()[0] || arr.pop()) + arr.reduceRight((accumulator, currentValue) => accumulator + "0".repeat(7 - currentValue.toString().length) + currentValue, "");
};

console.log(multiply("2", "3"));
console.log(multiply("123", "456"));