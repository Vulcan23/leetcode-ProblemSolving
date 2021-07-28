/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
    const result = [],
        wordsMap = new Map(),
        wordsNumber = words.length,
        wordLength = words[0].length,
        wordsLength = wordLength * wordsNumber;
    words.forEach(value => wordsMap.set(value, (wordsMap.get(value) || 0) + 1));
    for (let i = 0; i < wordLength; i++) {
        let left = i,
            right = i,
            count = 0;
        const tempMap = new Map();
        while (left + wordsLength <= s.length) {
            const word = s.slice(right, right += wordLength);
            if (!wordsMap.has(word)) {
                left = right;
                tempMap.clear();
                count = 0;
            } else {
                tempMap.set(word, (tempMap.get(word) || 0) + 1);
                count++;
                let isOver = false;
                while (tempMap.get(word) > wordsMap.get(word) && !(isOver = left + wordsLength > s.length)) {
                    const tempWord = s.slice(left, left += wordLength);
                    count--;
                    tempMap.set(tempWord, tempMap.get(tempWord) - 1);
                }
                if (isOver) {
                    break;
                }
                if (count === wordsNumber) {
                    result.push(left);
                }
            }
        }
    }
    return result;
}

console.log(findSubstring("barfoothefoobarman", ["foo", "bar"]));
console.log(findSubstring("wordgoodgoodgoodbestword", ["word", "good", "best", "word"]));
console.log(findSubstring("barfoofoobarthefoobarman", ["bar", "foo", "the"]));