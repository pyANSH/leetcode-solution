/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let len = nums.length
    const diff = {}
    for (let i = 0; i < len; i++) {
        let n = target - nums[i]
        if (n in diff) return [i, diff[n]]
        diff[nums[i]] = i
    }
};