/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (s.length !== t.length) return false
    const CHAR_DEDUCTION = 97
    const arr = new Array(26).fill(0)
    for (let i in s) {
        arr[s.charCodeAt(i) - CHAR_DEDUCTION]++

        arr[t.charCodeAt(i) - CHAR_DEDUCTION]--

    }


    return !!arr.every(i => i === 0)
};