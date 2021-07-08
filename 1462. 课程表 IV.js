/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var checkIfPrerequisite = function (numCourses, prerequisites, queries) {
    this.graph = [];
    let marked = [];
    for (let i = 0; i < numCourses; i++) {
        graph.push([]);
        marked.push(Array(numCourses));
    }
    prerequisites.forEach(value => {
        graph[value[0]].push(value[1]);
    });
    for (let i = 0; i < numCourses; i++) {
        dfs(i, marked[i]);
    }
    return queries.map(value => marked[value[0]][value[1]] || false);
};

function dfs(i, marked) {
    marked[i] = true;
    for (let j of this.graph[i]) {
        !marked[j] && dfs(j, marked);
    }
};

let n = 2,
    prerequisites = [[1, 0]],
    queries = [[0, 1], [1, 0]];
console.log(checkIfPrerequisite(n, prerequisites, queries));

n = 2,
    prerequisites = [],
    queries = [[1, 0], [0, 1]];
console.log(checkIfPrerequisite(n, prerequisites, queries));

n = 3,
    prerequisites = [[1, 2], [1, 0], [2, 0]],
    queries = [[1, 0], [1, 2]];
console.log(checkIfPrerequisite(n, prerequisites, queries));

n = 3,
    prerequisites = [[1, 0], [2, 0]],
    queries = [[0, 1], [2, 0]];
console.log(checkIfPrerequisite(n, prerequisites, queries));

n = 5,
    prerequisites = [[0, 1], [1, 2], [2, 3], [3, 4]],
    queries = [[0, 4], [4, 0], [1, 3], [3, 0]];
console.log(checkIfPrerequisite(n, prerequisites, queries));