/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    if (nums.length <= 1) return false
    const arr_set = new Set(nums) 
    if (nums.length !== arr_set.size) return true
    else return false
};