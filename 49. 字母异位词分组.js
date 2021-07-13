/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    const graph = {};
    for (let i = 0; i < strs.length; i++) {
        const key = strs[i].split("").sort((a, b) => a.charCodeAt() - b.charCodeAt()).join("");
        if (!graph[key]) {
            graph[key] = [strs[i]];
        } else {
            graph[key].push(strs[i]);
        }
    }
    return Object.values(graph);
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));