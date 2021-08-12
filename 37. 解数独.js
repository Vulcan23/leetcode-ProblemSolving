/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {
    this.board = board;
    const graph = {
        ".": [],
    };
    for (let i = 1; i <= 9; i++) {
        graph[i] = [[], [], []];
    }
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (board[i][j] === ".") {
                graph["."].push([i, j]);
            } else {
                graph[board[i][j]][0][i] = true;
                graph[board[i][j]][1][j] = true;
                graph[board[i][j]][2][Math.floor(i / 3) * 3 + Math.floor(j / 3)] = true;
            }
        }
    }
    dfs(graph);
    return board;
};

function dfs(graph) {
    let problem;
    if (!(problem = graph["."].pop())) {
        return true;
    }
    for (let i = 1; i <= 9; i++) {
        if (!graph[i][0][problem[0]] && !graph[i][1][problem[1]] && !graph[i][2][Math.floor(problem[0] / 3) * 3 + Math.floor(problem[1] / 3)]) {
            graph[i][0][problem[0]] = true;
            graph[i][1][problem[1]] = true;
            graph[i][2][Math.floor(problem[0] / 3) * 3 + Math.floor(problem[1] / 3)] = true;
            this.board[problem[0]][problem[1]] = i.toString();
            if (dfs(graph)) {
                return true;
            }
            graph[i][0][problem[0]] = false;
            graph[i][1][problem[1]] = false;
            graph[i][2][Math.floor(problem[0] / 3) * 3 + Math.floor(problem[1] / 3)] = false;
        }
    }
    graph["."].push(problem);
}

let board = [
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];
console.log(solveSudoku(board));