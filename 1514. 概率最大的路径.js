/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} succProb
 * @param {number} start
 * @param {number} end
 * @return {number}
 */
var maxProbability = function (n, edges, succProb, start, end) {
    const graph = {};
    for (let i = 0; i < n; i++) {
        graph[i] = {};
    }
    edges.forEach(([i, j], index) => graph[i][j] = graph[j][i] = succProb[index]);
    const stack = [[start, 1]],
        prob = [];
    prob[start] = 1;
    let item;
    while (item = stack.pop()) {
        if (item[1] >= prob[item[0]]) {
            let newAdd = false;
            for (const i in graph[item[0]]) {
                if (item[1] * graph[item[0]][i] > (prob[i] ?? 0)) {
                    stack.push([i, prob[i] = item[1] * graph[item[0]][i]]);
                    newAdd ||= true;
                }
            }
            newAdd && stack.sort((a, b) => a[1] - b[1]);
        }
    }
    return prob[end] ?? 0;
};

let n = 3,
    edges = [[0, 1], [1, 2], [0, 2]],
    succProb = [0.5, 0.5, 0.2],
    start = 0,
    end = 2;
console.log(maxProbability(n, edges, succProb, start, end));

n = 3,
    edges = [[0, 1], [1, 2], [0, 2]],
    succProb = [0.5, 0.5, 0.3],
    start = 0,
    end = 2;
console.log(maxProbability(n, edges, succProb, start, end));

n = 3,
    edges = [[0, 1]],
    succProb = [0.5],
    start = 0,
    end = 2;
console.log(maxProbability(n, edges, succProb, start, end));