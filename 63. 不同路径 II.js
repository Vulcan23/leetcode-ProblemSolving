/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
    const rowLength = obstacleGrid[0].length,
        columnLength = obstacleGrid.length,
        graph = Array(columnLength).fill().map(() => Array(rowLength).fill(0));
    for (let i = 0; i < rowLength; i++) {
        if (obstacleGrid[0][i]) {
            break;
        }
        graph[0][i] = 1;
    }
    for (let i = 0; i < columnLength; i++) {
        if (obstacleGrid[i][0]) {
            break;
        }
        graph[i][0] = 1;
    }
    for (let i = 1; i < columnLength; i++) {
        for (let j = 1; j < rowLength; j++) {
            !obstacleGrid[i][j] && (graph[i][j] = graph[i - 1][j] + graph[i][j - 1]);
        }
    }
    return graph[columnLength - 1][rowLength - 1];
};

let obstacleGrid = [
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0],
];
console.log(uniquePathsWithObstacles(obstacleGrid));

obstacleGrid = [
    [0, 1],
    [0, 0],
];
console.log(uniquePathsWithObstacles(obstacleGrid));