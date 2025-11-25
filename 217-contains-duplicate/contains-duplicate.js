/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  const obj = {}

  for(let i of nums){
    if(obj[i]) return true
    obj[i] = 1
  }
  return false

};