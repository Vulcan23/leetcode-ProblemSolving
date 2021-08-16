/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    const map = new Map();
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (!map.has(board[i][j])) {
                map.set(board[i][j], [[i, j]]);
            } else {
                map.get(board[i][j]).push([i, j]);
            }
        }
    }
    this.arr = [];
    for (let i = 0; i < word.length; i++) {
        if (map.has(word[i])) {
            arr[i] = map.get(word[i]);
        } else {
            return false;
        }
    }
    for (let i = 0; i < arr[0].length; i++) {
        if (dfs(0, i)) {
            return true;
        }
    }
    return false;
};

function dfs(h, w) {
    if (h === this.arr.length - 1) {
        return true;
    }
    const temp = this.arr[h][w].splice(0, 2);
    for (let i = 0; i < this.arr[h + 1].length; i++) {
        const next = this.arr[h + 1][i];
        if (next.length && Math.abs(temp[1] - next[1]) + Math.abs(temp[0] - next[0]) === 1 && dfs(h + 1, i)) {
            return true;
        }
    }
    this.arr[h][w] = temp;
}

let board = [
    ["A", "B", "C", "E"],
    ["S", "F", "C", "S"],
    ["A", "D", "E", "E"],
],
    word = "ABCCED";
console.log(exist(board, word));

board = [
    ["A", "B", "C", "E"],
    ["S", "F", "C", "S"],
    ["A", "D", "E", "E"],
],
    word = "SEE";
console.log(exist(board, word));

board = [
    ["A", "B", "C", "E"],
    ["S", "F", "C", "S"],
    ["A", "D", "E", "E"],
],
    word = "ABCB";
console.log(exist(board, word));