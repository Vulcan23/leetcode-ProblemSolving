/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
    if (n === 1) {
        return "1";
    }
    let str = "1";
    for (let i = 0; i < n - 1; i++) {
        let number = str[0],
            count = 1,
            newStr = "";
        for (let j = 1; j <= str.length; j++) {
            if (str[j] === number) {
                count++;
            } else {
                newStr += count + number;
                number = str[j];
                count = 1;
            }
        }
        str = newStr;
    }
    return str;
};

console.log(countAndSay(1));
console.log(countAndSay(4));