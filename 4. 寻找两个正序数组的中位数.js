/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    if (nums1.length > nums2.length) {
        return findMedianSortedArrays(nums2, nums1);
    }
    const m = nums1.length,
        n = nums2.length;
    nums1[-1] = nums2[-1] = -Infinity;
    nums1[m] = nums2[n] = Infinity;
    let left = 0,
        right = m,
        median1 = 0,
        median2 = 0;
    while (left <= right) {
        const i = Math.trunc((left + right) / 2),
            j = Math.trunc((m + n + 1) / 2 - i);
        if (nums1[i - 1] <= nums2[j]) {
            median1 = Math.max(nums1[i - 1], nums2[j - 1]);
            median2 = Math.min(nums1[i], nums2[j]);
            left = i + 1;
        } else {
            right = i - 1;
        }
    }
    return (m + n) % 2 === 0 ? (median1 + median2) / 2 : median1;
};

console.log(findMedianSortedArrays([1, 3], [2]));
console.log(findMedianSortedArrays([1, 2], [3, 4]));
console.log(findMedianSortedArrays([0, 0], [0, 0]));
console.log(findMedianSortedArrays([], [1]));
console.log(findMedianSortedArrays([2], []));