/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    const len = s.length
    if (len <= 1) return len
    let maxSize = 0
    let i = 0
    const map = new Map()
    for (let j = 0; j < len; j++) {
        if (map.has(s[j]) && map.get(s[j]) >= i) {
            i = map.get(s[j]) + 1
        }
        map.set(s[j], j)
        maxSize = Math.max((j - i) + 1, maxSize)

    }

    return maxSize
};