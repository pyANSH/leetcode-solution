/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    const map = new Map()
    const len = nums.length
    for (let i = 0; i < len; i++) {
        map.set(nums[i], (map.get(nums[i]) || 0) + 1)
    }
    return [...map.keys()].sort((a, b) => map.get(b) - map.get(a)).slice(0,k);

};