/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    const map = new Map()
    for (let i = 0; i < nums.length; i++) {
        const current = nums[i]
        map.set(current, (map.get(current) || 0) + 1)
    }

    return Array.from(map.keys()).sort((a, b) => map.get(b) - map.get(a)).slice(0, k)
};