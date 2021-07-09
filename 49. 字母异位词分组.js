/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    let graph = {};
    for (let i = 0; i < strs.length; i++) {
        let key = strs[i].split("").sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0)).join("");
        if (!graph[key]) {
            graph[key] = [strs[i]];
        } else {
            graph[key].push(strs[i]);
        }
    }
    return Object.values(graph);
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));