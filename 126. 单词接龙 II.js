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
    let graph = new Map();
    let reversed = false;
    let found = false;
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
        }
        nextSet.forEach(word => wordSet.delete(word));
        begin = nextSet;
        if (begin.size > end.size) {
            [begin, end] = [end, begin];
            reversed = !reversed;
        }
    } while (begin.size);
    const queue = [[beginWord]];
    let over = false;
    do {
        const length = queue.length;
        for (let i = 0; i < length; i++) {
            const route = queue.shift();
            const nextSet = graph.get(route[route.length - 1]);
            if (nextSet) {
                if (nextSet.has(endWord)) {
                    over ||= true;
                    route.push(endWord);
                    queue.push(route);
                } else if (!over) {
                    nextSet.forEach(nextWord => queue.push(route.concat([nextWord])));
                }
            }
        }
    } while (queue.length && !over);
    return queue;
};

console.log(findLadders("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]));
console.log(findLadders("hit", "cog", ["hot", "dot", "dog", "lot", "log"]));