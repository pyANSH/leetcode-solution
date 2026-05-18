/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    const unique = new Set(nums);
    let best = 0
    for (let n of unique) {
        if (unique.has(n - 1)) continue
        let curr = n
        let len = 1

        while (unique.has(curr + 1)) {
            curr++
            len++
        }
        best = Math.max(best, len)
    }
    return best;
}


