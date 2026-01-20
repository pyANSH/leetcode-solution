/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const obj = {}

    for (let num of nums){
        if (obj[num] === true) return true
        obj[num] = true
    }
    return false
};