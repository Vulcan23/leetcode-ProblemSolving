/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    const map = new Map();
    for (let i = 0; i < strs.length; i++) {
        const key = Array.from(strs[i]).sort().join("");
        let arr;
        if (arr = map.get(key)) {
            arr.push(strs[i]);
        } else {
            map.set(key, [strs[i]]);
        }
    }
    return Array.from(map.values());
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));