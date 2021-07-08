/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function (timeSeries, duration) {
    let total = 0;
    timeSeries.reduce((accumulator, currentValue) => (total += Math.min(currentValue - accumulator, duration), currentValue));
    return total + duration;
};

console.log(findPoisonedDuration([1, 4], 2));
console.log(findPoisonedDuration([1, 2], 2));