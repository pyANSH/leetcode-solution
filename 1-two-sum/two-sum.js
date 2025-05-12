/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let i = 0;

  while (i <= nums.length - 2) {
    let j = i + 1;
    while (j <= nums.length - 1) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
      j++;
    }
    i++;
  }

};