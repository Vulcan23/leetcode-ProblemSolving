/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    const arr = [];
    let prev = intervals[0];
    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i][0] <= prev[1]) {
            prev[1] = Math.max(prev[1], intervals[i][1]);
        } else {
            arr.push(prev);
            prev = intervals[i];
        }
    }
    arr.push(prev);
    return arr;
};

console.log(merge([[1, 3], [2, 6], [8, 10], [15, 18]]));
console.log(merge([[1, 4], [4, 5]]));