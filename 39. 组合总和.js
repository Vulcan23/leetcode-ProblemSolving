/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
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
                        inumber % 2 === 0 && (yesEven = true);
                        (inumber === 5 && (number === 5 || number % 2 !== 0 && yesEven) || inumber !== 5 && (number % 2 === 0 || inumber % 2 !== 0)) && (isBreak = true);
                    }
                }
            }
        }
        return isBreak;
    })()) {
        arrLessThanOrEqualTo.sort((a, b) => a - b);
        this.target = target;
        backtracking([], 0, 0);
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

function backtracking(nums, index, sum) {
    if (sum >= this.target) {
        sum === this.target && this.result.push(nums.slice());
        return true;
    }
    for (let i = index; i < this.arrLessThanOrEqualTo.length; i++) {
        nums.push(this.arrLessThanOrEqualTo[i]);
        if (backtracking(nums, i, sum + this.arrLessThanOrEqualTo[i])) {
            nums.pop();
            break;
        }
        nums.pop();
    }
}

console.log(combinationSum([2, 3, 6, 7], 7));
console.log(combinationSum([2, 3, 5], 8));