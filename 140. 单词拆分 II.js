/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function (s, wordDict) {
    this.s = s;
    this.setWordDict = new Set(wordDict);
    this.result = [];
    dfs(0, []);
    return this.result;
};

function dfs(length, arr) {
    if (length === s.length) {
        return this.result.push(arr.slice().join(" "));
    }
    for (let i = length + 1; i <= s.length; i++) {
        const word = s.slice(length, i);
        if (this.setWordDict.has(word)) {
            arr.push(word);
            dfs(length + word.length, arr);
            arr.pop();
        }
    }
}

console.log(wordBreak("catsanddog", ["cat", "cats", "and", "sand", "dog"]));
console.log(wordBreak("pineapplepenapple", ["apple", "pen", "applepen", "pine", "pineapple"]));
console.log(wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"]));