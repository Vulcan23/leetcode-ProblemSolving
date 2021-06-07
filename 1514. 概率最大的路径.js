/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} succProb
 * @param {number} start
 * @param {number} end
 * @return {number}
 */

var maxProbability = function (n, edges, succProb, start, end) {
    let graph = {};
    for (let i = 0; i < n; i++) {
        graph[i] = {};
    }
    edges.forEach((value, index) => {
        let [i, j] = value;
        graph[i][j] = graph[j][i] = succProb[index];
    });
    let stack = [[start, 1]];
    let prob = new Array(n).fill(0);
    prob[start] = 1;
    while (stack.length) {
        let [node, _prob] = stack.pop();
        if (_prob < prob[node]) {
            continue;
        }
        let newAdd = false;
        for (let i in graph[node]) {
            if (_prob * graph[node][i] > prob[i]) {
                stack.push([i, prob[i] = _prob * graph[node][i]]);
                !newAdd && (newAdd = true);
            }
        }
        if (newAdd) {
            stack.sort((a, b) => a[1] - b[1]);
        }
    }
    return prob[end];
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