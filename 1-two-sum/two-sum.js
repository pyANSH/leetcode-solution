/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const hash = new Map()
    for (let i = 0; i <= nums.length; i++) {
        const need = target - nums[i]
        if (hash.has(need)) return [hash.get(need), i]
        hash.set(nums[i], i)
    }
    return 
};