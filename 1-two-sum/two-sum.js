/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let len = nums.length
    const map = new Map()

    for (let i = 0; i < len; i++) {
        const t = target - nums[i]
        if (map.has(t)) return [i, map.get(t)]
        map.set(nums[i], i)
    }

};