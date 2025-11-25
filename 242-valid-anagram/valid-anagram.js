/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (s.length !==t.length) return false
    const CHAR_DEDUCTION = 97
    const arr = new Array(26).fill(0)
    for (let i of s) {
        let char = i.charCodeAt() - CHAR_DEDUCTION
        arr[char]++
    }
    for (let i of t) {
        let char = i.charCodeAt() - CHAR_DEDUCTION
        arr[char]--
    }
    
    return !!arr.every(i => i === 0)
};