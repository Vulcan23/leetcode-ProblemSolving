/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
    const graph = Array(word1.length + 1).fill().map(() => []);
    for (let i = 0; i <= word1.length; i++) {
        graph[i][0] = i;
    }
    for (let i = 0; i <= word2.length; i++) {
        graph[0][i] = i;
    }
    for (let i = 1; i <= word1.length; i++) {
        for (let j = 1; j <= word2.length; j++) {
            graph[i][j] = Math.min(graph[i - 1][j] + 1, graph[i][j - 1] + 1, graph[i - 1][j - 1] + (word1[i - 1] !== word2[j - 1]));
        }
    }
    return graph[word1.length][word2.length];
};

console.log(minDistance("horse", "ros"));
console.log(minDistance("intention", "execution"));