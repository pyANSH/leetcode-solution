/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (s.length !== t.length) return false
    const len = s.length
    const arr = new Array(26).fill(0)
    const c = 'a'.charCodeAt(0)

    for (let i = 0; i < len; i++) {
        arr[s[i].charCodeAt() - c]++
        arr[t[i].charCodeAt() - c]--
    }
    const valid = arr.filter(i => i !== 0)
    return valid.length === 0
};