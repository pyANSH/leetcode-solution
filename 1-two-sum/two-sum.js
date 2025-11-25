/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let len = nums.length

    for (let i = 0; i < len; i++) {
        const t = target - nums[i]
        for (let j = i + 1; j < len; j++) {
            if (nums[j] - t === 0) return [i, j]
        }
    }

};