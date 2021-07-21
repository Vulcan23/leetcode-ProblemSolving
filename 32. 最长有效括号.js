/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
    let max = 0;
    const stack = [-1];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            stack.push(i);
        } else if (stack.length === 1) {
            stack[0] = i;
        } else {
            stack.pop();
            max = Math.max(max, i - stack[stack.length - 1]);
        }
    }
    return max;
};

console.log(longestValidParentheses("(()"));
console.log(longestValidParentheses(")()())"));
console.log(longestValidParentheses(""));