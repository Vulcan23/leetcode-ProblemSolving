/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (ratings) {
    const result = Array(ratings.length).fill(1);
    let left = 0,
        right = 1;
    for (let i = 0; i < ratings.length; i++) {
        if (!(ratings[i + 1] < ratings[i])) {
            if (right - left > 1) {
                for (let i = right - 2; i > left; i--) {
                    result[i] = result[i + 1] + 1;
                }
                result[left] = Math.max(result[left], result[left + 1] + 1);
            }
            if (ratings[i + 1] > ratings[i]) {
                result[i + 1] = result[i] + 1;
            }
            left = i + 1;
            right = i + 1;
        }
        right++;
    }
    return result.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
};

console.log(candy([1, 0, 2]));
console.log(candy([1, 2, 2]));