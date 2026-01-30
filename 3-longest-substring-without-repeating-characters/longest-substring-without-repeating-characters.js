/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    const len = s.length
    if (len <= 1) return len
    let maxSize = 0
    let i = 0
    for (let j = 0; j < len; j++) {

        const q = s.indexOf(s[j], i)
        if (q !== -1 && q < j) {
            i = q + 1
        }
        maxSize = Math.max((j - i) + 1, maxSize)

    }

return maxSize
};