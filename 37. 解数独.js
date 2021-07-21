/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
 var solveSudoku = function (board) {
    const graph = {
        ".": [],
    };
    for (let i = 1; i <= 9; i++) {
        graph[i] = [];
    }
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            graph[board[i][j]].push([i, j]);
        }
    }
    dfs(graph);
    for (let i = 1; i <= 9; i++) {
        graph[i].forEach(item => board[item[0]][item[1]] = i.toString());
    }
    return board;
};

function dfs(graph) {
    const problemArr = graph["."];
    if (!problemArr.length) {
        return graph;
    }
    const problem = problemArr.pop();
    for (let i = 1; i <= 9; i++) {
        if (!graph[i].some(item => item[0] === problem[0]
            || item[1] === problem[1]
            || Math.floor(item[0] / 3) === Math.floor(problem[0] / 3) && Math.floor(item[1] / 3) === Math.floor(problem[1] / 3))) {
            graph[i].push(problem);
            if (dfs(graph)) {
                return true;
            }
            graph[i].pop();
        }
    }
    problemArr.push(problem);
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