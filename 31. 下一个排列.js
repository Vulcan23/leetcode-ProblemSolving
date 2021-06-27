/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
    if (nums.length === 1) {
        return nums;
    }
    let graph = {};
    let i = nums.length - 1;
    for (; i > 0; i--) {
        if (graph[nums[i]]) {
            graph[nums[i]]++;
        } else {
            graph[nums[i]] = 1;
        }
        if (nums[i] > nums[i - 1]) {
            break;
        }
    }
    if (i === 0) {
        return nums.reverse();
    }
    let j = nums[i - 1] + 1;
    while (!graph[j]) {
        j++;
    }
    graph[j]--;
    if (graph[nums[i - 1]]) {
        graph[nums[i - 1]]++;
    } else {
        graph[nums[i - 1]] = 1;
    }
    nums[i - 1] = j;
    for (let j in graph) {
        for (let k = 0; k < graph[j]; k++) {
            nums[i + k] = Number(j);
        }
        i += graph[j];
    }
    return nums;
};

console.log(nextPermutation([1, 2, 3]));
console.log(nextPermutation([3, 2, 1]));
console.log(nextPermutation([1, 1, 5]));
console.log(nextPermutation([1]));