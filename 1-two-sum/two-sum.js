/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let len = nums.length
    const map = new Map()

    for (let i in nums) {
        const t = target - nums[i]
        if (map.get(t)) return [+i, +map.get(t)]
        map.set(nums[i], i)
    }

};