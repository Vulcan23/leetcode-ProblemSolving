/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
    this.result = [];
    this.arrLessThanOrEqualTo = [];
    if ((() => {
        const [key, number] = getDigitsOfLastNonzeroEffectiveFigure(target);
        let yesEven = false,
            isBreak = false;
        for (const i of candidates) {
            if (i <= target) {
                arrLessThanOrEqualTo.push(i);
                if (!isBreak) {
                    const [ikey, inumber] = getDigitsOfLastNonzeroEffectiveFigure(i);
                    if (key > ikey) {
                        isBreak = true;
                    } else if (key === ikey) {
                        inumber % 2 === 0 && (yesEven ||= true);
                        (inumber === 5 && (number === 5 || number % 2 !== 0 && yesEven) || inumber !== 5 && (number % 2 === 0 || inumber % 2 !== 0)) && (isBreak = true);
                    }
                }
            }
        }
        return isBreak;
    })()) {
        arrLessThanOrEqualTo.sort((a, b) => a - b);
        this.target = target;
        dfs([], 0, 0);
    }
    return result;
};

function getDigitsOfLastNonzeroEffectiveFigure(value) {
    const s = value.toString();
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] !== "0") {
            return [s.length - i, Number(s[i])];
        }
    }
}

function dfs(nums, index, sum) {
    if (sum >= this.target) {
        sum === this.target && this.result.push(nums.slice());
        return true;
    }
    for (let i = index; i < this.arrLessThanOrEqualTo.length; i++) {
        if (i === index || this.arrLessThanOrEqualTo[i] !== this.arrLessThanOrEqualTo[i - 1]) {
            nums.push(this.arrLessThanOrEqualTo[i]);
            if (dfs(nums, i + 1, sum + this.arrLessThanOrEqualTo[i])) {
                nums.pop();
                break;
            }
            nums.pop();
        }
    }
}

console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8));
console.log(combinationSum2([2, 5, 2, 1, 2], 5));