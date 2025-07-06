/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let startPoint = 0, endPoint = 1;
    while (startPoint <= nums.length) {
        if (nums[startPoint] + nums[endPoint] === target) return [startPoint, endPoint]
        if (endPoint >= nums.length) {
            startPoint = startPoint + 1
            endPoint = startPoint + 1
        } else {
            endPoint++
        }
    }
};