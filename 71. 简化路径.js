/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
    const arr = path.split(/(?=\/)/),
        result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "/..") {
            result.pop();
        } else if (!/^\/\.?$/.test(arr[i])) {
            result.push(arr[i]);
        }
    }
    return result.join("") || "/";
};

console.log(simplifyPath("/home/"));
console.log(simplifyPath("/../"));
console.log(simplifyPath("/home//foo/"));
console.log(simplifyPath("/a/./b/../../c/"));