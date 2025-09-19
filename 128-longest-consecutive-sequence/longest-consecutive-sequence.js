/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    let unique = new Set(nums);
    let highest = 0
    for (let val of unique) {
        if (!unique.has(val - 1)) {
            let cur = val;
            let len = 1;
            while (unique.has(cur + 1)) {
                cur++;
                len++;
            }
            if (len > highest) highest = len;
        }
    }
    return highest;
}


