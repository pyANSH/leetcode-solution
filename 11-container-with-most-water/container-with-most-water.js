/**
 * @param {number[]} height
 * @return {number}
 */
function getHighestHold(a, b, left, right) {
    const height = Math.min(a, b)
    const width = right - left
    return height * width
}
var maxArea = function (height) {
    let left = 0
    let right = height.length - 1
    let highestHold = 0

    while (left < right) {
        const p1 = height[left]
        const p2 = height[right]
        const val = getHighestHold(p1, p2, left, right)

        if (highestHold < val) {
            highestHold = val
        }
        if (p1 === p2) {
            left++
            right--
            continue
        }
        if (p1 > p2) {
            right--
            continue
        }
        if (p1 < p2) {
            left++
            continue
        }
    }
    return highestHold
};