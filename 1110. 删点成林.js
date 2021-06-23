/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number[]} to_delete
 * @return {TreeNode[]}
 */
var delNodes = function (root, to_delete) {
    let arr = [];
    let len = root.length;
    to_delete.forEach(value => {
        for (let i in root) {
            if (value === root[i]) {
                arr.push(parseInt(i, 10));
                break;
            }
        }
    });
    arr.sort((a, b) => b - a);
    let result = [];
    let aPush = [true, true];
    arr.forEach(value => {
        root[value] = null;
        let arrBranch = [[], []];
        let i = (value + 1) * 2 - 1;
        let n = 0;
        while (true) {
            let j = 2 ** n++;
            if ((i + 1) * j - 1 >= len) {
                break;
            }
            let k = [(i + 2) * j - 2, (i + 3) * j - 2];
            if (aPush[1]) {
                if ((i + 3) * j - 2 >= len) {
                    k[1] = len - 1;
                    if ((i + 2) * j - 1 >= len) {
                        k[1] = null;
                        if (aPush[0] && (i + 2) * j - 2 >= len) {
                            k[0] = len - 1;
                        }
                    }
                }
            } else if ((i + 2) * j - 2 >= len) {
                k[0] = len - 1;
            }
            let aRow = [[], []];
            if (aPush[0]) {
                for (let l = (i + 1) * j - 1; l <= k[0]; l++) {
                    aRow[0].push(root[l]);
                    root[l] = null;
                }
                if (aPush[1] && k[1]) {
                    for (let l = (i + 2) * j - 1; l <= k[1]; l++) {
                        aRow[1].push(root[l]);
                        root[l] = null;
                    }
                }
            } else if (k[1]) {
                for (let l = (i + 2) * j - 1; l <= k[1]; l++) {
                    aRow[1].push(root[l]);
                    root[l] = null;
                }
            }
            if (aRow[0].length && aRow[0].every(value => value === null)) {
                aPush[0] = false;
            } else {
                arrBranch[0].push(...aRow[0]);
            }
            if (aRow[1].length && aRow[1].every(value => value === null)) {
                aPush[1] = false;
            } else {
                arrBranch[1].push(...aRow[1]);
            }
            if (!aPush[0] && !aPush[1]) {
                break;
            }
        }
        result.push(...arrBranch.filter(arr => arr.length).map(arr => {
            for (let i = arr.length - 1; i > 0; i--) {
                if (arr[i] === null) {
                    arr.pop();
                } else {
                    break;
                }
            }
            return arr;
        }));
    });
    let n = 0;
    let arrBranch = [];
    while (true) {
        let j = 2 ** n++;
        if (j - 1 >= len) {
            break;
        }
        let aRow = [];
        for (let k = 2 * j - 2 >= len ? len - 1 : 2 * j - 2, l = j - 1; l <= k; l++) {
            aRow.push(root[l]);
        }
        if (aRow.every(value => value === null)) {
            break;
        } else {
            arrBranch.push(...aRow);
        }
    }
    for (let i = arrBranch.length - 1; i > 0; i--) {
        if (arrBranch[i] === null) {
            arrBranch.pop();
        } else {
            break;
        }
    }
    arrBranch.length && result.push(arrBranch);
    return result;
};

let root = [1, 2, 4, null, 3],
    to_delete = [1];
console.log(delNodes(root, to_delete));