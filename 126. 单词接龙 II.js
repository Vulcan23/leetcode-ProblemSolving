/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
var findLadders = function (beginWord, endWord, wordList) {
    const wordSet = new Set(wordList);
    if (!wordSet.has(endWord)) {
        return [];
    }
    wordSet.delete(beginWord);
    wordSet.delete(endWord);
    let begin = new Set([beginWord]),
        end = new Set([endWord]);
    this.graph = new Map();
    let reversed = false;
    let found = false;
    this.step = 2;
    do {
        const nextSet = new Set();
        for (const word of begin) {
            for (let i = 0; i < beginWord.length; i++) {
                const pre = word.slice(0, i), post = word.slice(i + 1);
                for (let j = 97; j < 123; j++) {
                    const nextWord = pre + String.fromCharCode(j) + post;
                    if (end.has(nextWord) && (found ||= true) || wordSet.has(nextWord) && nextSet.add(nextWord)) {
                        const [k, v] = reversed ? [nextWord, word] : [word, nextWord];
                        if (graph.has(k)) {
                            graph.get(k).add(v);
                        } else {
                            graph.set(k, new Set([v]));
                        }
                    }
                }
            }
        }
        if (found) {
            break;
        } else if (!nextSet.size) {
            return [];
        }
        nextSet.forEach(word => wordSet.delete(word));
        step++;
        begin = nextSet;
        if (begin.size > end.size) {
            [begin, end] = [end, begin];
            reversed = !reversed;
        }
    } while (begin.size);
    this.result = [];
    dfs([beginWord], endWord);
    return result;
};

function dfs(path, endWord) {
    if (path[path.length - 1] === endWord) {
        return this.result.push(path.slice());
    }
    if (path.length === this.step) {
        return;
    }
    for (const word of this.graph.get(path[path.length - 1]) ?? []) {
        path.push(word);
        dfs(path, endWord);
        path.pop();
    }
}

console.log(findLadders("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]));
console.log(findLadders("hit", "cog", ["hot", "dot", "dog", "lot", "log"]));