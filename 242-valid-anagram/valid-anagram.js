/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    const arr = new Array(26).fill(0)
    for (let i of s) {
        let char = i.charCodeAt() - 97
        arr[char]++
    }
    for (let i of t) {
        let char = i.charCodeAt() - 97
        arr[char]--
    }
    const checkZero = arr.every(i => i === 0)
    return !!checkZero
};