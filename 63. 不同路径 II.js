/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
    const graph = Array(obstacleGrid.length).fill().map(() => []);
    for (let i = 0; obstacleGrid[0][i] === 0;) {
        graph[0][i++] = 1;
    }
    for (let i = 0; obstacleGrid[i]?.[0] === 0;) {
        graph[i++][0] = 1;
    }
    for (let i = 1; i < obstacleGrid.length; i++) {
        for (let j = 1; j < obstacleGrid[0].length; j++) {
            !obstacleGrid[i][j] && (graph[i][j] = (graph[i - 1][j] ?? 0) + (graph[i][j - 1] ?? 0));
        }
    }
    return graph[obstacleGrid.length - 1][obstacleGrid[0].length - 1] ?? 0;
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