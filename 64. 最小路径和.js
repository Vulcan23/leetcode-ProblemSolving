/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
    grid[0][-1] = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            grid[i][j] = Math.min(grid[i - 1]?.[j] >= 0 ? grid[i - 1][j] : Infinity, grid[i][j - 1] >= 0 ? grid[i][j - 1] : Infinity) + grid[i][j];
        }
    }
    return grid[grid.length - 1][grid[0].length - 1];
}

let grid = [
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1],
];
console.log(minPathSum(grid));

grid = [
    [1, 2, 3],
    [4, 5, 6],
];
console.log(minPathSum(grid));