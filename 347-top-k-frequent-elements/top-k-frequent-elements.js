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
    const res = [...map.entries()].sort((a, b) =>  b[1] - a[1]).slice(0,k).map(z => z[0])
    return res
};