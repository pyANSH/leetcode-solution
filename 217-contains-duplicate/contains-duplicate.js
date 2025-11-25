/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  const map = new Map()

  for(let i of nums){
    if(map.get(i)) return true
    map.set(i, 1)
  }
  return false

};