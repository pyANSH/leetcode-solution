/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    if (nums.length === 0) return false
    const visited = {}
    for(let i of nums){
        if(visited[i]) {
            return true
        }
        else {
            visited[i] = 1
        }
    }
    return false
};