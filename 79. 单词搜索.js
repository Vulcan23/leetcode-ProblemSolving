/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    let chars = {};
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            let char = board[i][j];
            if (!chars[char]) {
                chars[char] = [[i, j]];
            } else {
                chars[char].push([i, j]);
            }
        }
    }
    this.arr = [];
    for (let i = 0; i < word.length; i++) {
        if (chars[word[i]]) {
            arr[i] = chars[word[i]];
        } else {
            return false;
        }
    }
    for (let i = 0; i < arr[0].length; i++) {
        if (search(0, i)) {
            return true;
        }
    }
    return false;
};

function search(index, i) {
    if (index === this.arr.length - 1) {
        return true;
    }
    let prev = this.arr[index][i],
        temp = prev.slice();
    for (let j = 0; j < this.arr[index + 1].length; j++) {
        let next = this.arr[index + 1][j];
        if (next.length && (prev[0] === next[0] && Math.abs(prev[1] - next[1]) === 1 || prev[1] === next[1] && Math.abs(prev[0] - next[0]) === 1)) {
            prev.splice(0, 2);
            if (search(index + 1, j)) {
                return true;
            }
            prev.push(...temp);
        }
    }
}

let board = [["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]],
    word = "SEE";
console.log(exist(board, word));