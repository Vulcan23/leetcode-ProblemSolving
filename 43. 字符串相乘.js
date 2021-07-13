/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
    if (num1 === "0" || num2 === "0") {
        return "0";
    }
    const arrNum1 = [],
        arrNum2 = [];
    let i = num1.length % 7;
    i !== 0 && (num1 = "0".repeat(7 - i) + num1);
    i = num2.length % 7;
    i !== 0 && (num2 = "0".repeat(7 - i) + num2);
    i = num1.length - 7;
    do {
        arrNum1.push(num1.slice(i, i + 7));
        i -= 7;
    } while (i >= 0);
    i = num2.length - 7;
    do {
        arrNum2.push(num2.slice(i, i + 7));
        i -= 7;
    } while (i >= 0);
    const arr = Array(arrNum1.length + arrNum2.length).fill().map(() => []);
    for (let i = 0; i < arrNum1.length; i++) {
        for (let j = 0; j < arrNum2.length; j++) {
            arr[i + j].push(arrNum1[i] * arrNum2[j]);
        }
    }
    for (let i = 0; i < arr.length - 1; i++) {
        let sum = 0;
        for (let j = 0; j < arr[i].length; j++) {
            sum += arr[i][j];
            if (sum >= 9 * 10 ** 15) {
                sum -= 9 * 10 ** 15;
                arr[i + 2].push(90);
            }
        }
        const j = sum % 10 ** 7;
        arr[i] = j;
        arr[i + 1].push((sum - j) / 10 ** 7);
    }
    let head = arr[arr.length - 1][0].toString();
    if (head === "0") {
        arr.pop();
        head = arr[arr.length - 1].toString();
    }
    let s = "";
    for (let i = arr.length - 2; i >= 0; i--) {
        let str = arr[i].toString();
        s += "0".repeat(7 - str.length) + str;
    }
    return head + s;
};

console.log(multiply("2", "3"));
console.log(multiply("123", "456"));