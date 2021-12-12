/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function (beginWord, endWord, wordList) {
    const wordSet = new Set(wordList);
    if (!wordSet.has(endWord)) {
        return 0;
    }
    wordSet.delete(beginWord);
    wordSet.delete(endWord);
    let begin = new Set([beginWord]),
        end = new Set([endWord]);
    let step = 2;
    do {
        const nextSet = new Set();
        for (const word of begin) {
            for (let i = 0; i < beginWord.length; i++) {
                const pre = word.slice(0, i), post = word.slice(i + 1);
                for (let j = 97; j < 123; j++) {
                    const nextWord = pre + String.fromCharCode(j) + post;
                    if (end.has(nextWord)) {
                        return step;
                    }
                    wordSet.delete(nextWord) && nextSet.add(nextWord);
                }
            }
        }
        step++;
        begin = nextSet;
        begin.size > end.size && ([begin, end] = [end, begin]);
    } while (begin.size);
    return 0;
};

console.log(ladderLength("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]));
console.log(ladderLength("hit", "cog", ["hot", "dot", "dog", "lot", "log"]));