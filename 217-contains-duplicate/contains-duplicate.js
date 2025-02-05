/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const a = new Set(nums);
    if (nums.length != a.size){
        return true
    }
    return false

};