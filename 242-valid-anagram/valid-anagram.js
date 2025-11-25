/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (s.length !==t.length) return false
    const CHAR_DEDUCTION = 97
    const arr = new Array(26).fill(0)
    for (let i in s) {
        let char = s.charCodeAt(i) - CHAR_DEDUCTION
        arr[char]++
        let char1 = t.charCodeAt(i) - CHAR_DEDUCTION
        arr[char1]--
    }
    
    
    return !!arr.every(i => i === 0)
};