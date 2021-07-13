/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
    const leftCheck = (() => {
        let left = 0,
            right = intervals.length - 1;
        while (left <= right) {
            const mid = Math.trunc((left + right) / 2);
            if (newInterval[0] < intervals[mid][0]) {
                if (newInterval[0] < intervals[mid - 1]?.[0]) {
                    right = mid - 1;
                } else {
                    return mid - 1;
                }
            } else {
                left = mid + 1;
            }
        }
        return intervals.length - 1;
    })(),
        rightCheck = (() => {
            let left = leftCheck + 1 && leftCheck,
                right = intervals.length - 1;
            while (left <= right) {
                const mid = Math.trunc((left + right) / 2);
                if (newInterval[1] > intervals[mid][1]) {
                    if (newInterval[1] > intervals[mid + 1]?.[1]) {
                        left = mid + 1;
                    } else {
                        return mid + 1;
                    }
                } else {
                    right = mid - 1;
                }
            }
            return 0;
        })();
    if (rightCheck !== 0 || leftCheck === -1) {
        if (newInterval[0] <= intervals[leftCheck]?.[1]) {
            if (newInterval[1] >= intervals[rightCheck]?.[0]) {
                intervals[leftCheck][1] = intervals[rightCheck][1];
                intervals.splice(rightCheck, 1);
            } else {
                intervals[leftCheck][1] = newInterval[1];
            }
        } else {
            if (newInterval[1] >= intervals[rightCheck]?.[0]) {
                intervals[rightCheck][0] = newInterval[0];
            } else {
                intervals.splice(rightCheck, 0, newInterval);
            }
        }
    }
    intervals.splice(leftCheck + 1, rightCheck - leftCheck - 1);
    return intervals;
};

console.log(insert([[1, 3], [6, 9]], [2, 5]));
console.log(insert([[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]], [4, 8]));
console.log(insert([], [5, 7]));
console.log(insert([[1, 5]], [2, 3]));
console.log(insert([[1, 5]], [2, 7]));