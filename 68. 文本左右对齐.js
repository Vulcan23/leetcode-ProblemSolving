/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function (words, maxWidth) {
    const result = [];
    for (let start = 0; start < words.length;) {
        let end = start,
            count = words[end].length;
        while (++end < words.length) {
            count += words[end].length;
            if (count + end - start > maxWidth) {
                count -= words[end].length;
                break;
            }
        }
        const surplusTotal = maxWidth - count;
        let surplus = surplusTotal % (end - start - 1);
        const blank = " ".repeat((surplusTotal - surplus) / (end - start - 1));
        result.push(blank ? words.slice(start, end).map(item => surplus-- > 0 ? (item += " ") : item).join(blank) : words[start] + " ".repeat(surplusTotal));
        start = end;
    }
    const s = result[result.length - 1].match(/[^ ]+/g).join(" ");
    result[result.length - 1] = s + " ".repeat(maxWidth - s.length);
    return result;
};

console.log(fullJustify(["This", "is", "an", "example", "of", "text", "justification."], 16));
console.log(fullJustify(["What", "must", "be", "acknowledgment", "shall", "be"], 16));
console.log(fullJustify(["Science", "is", "what", "we", "understand", "well", "enough", "to", "explain", "to", "a", "computer.", "Art", "is", "everything", "else", "we", "do"], 20));