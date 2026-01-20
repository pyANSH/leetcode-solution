/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    let sl = s.length
    let tl = t.length
    if (sl !== tl) return false
    const arr = new Array(26).fill(0)
    const base = 'a'.charCodeAt(0)

    for (let i = 0; i < sl; i++) {
        arr[s[i].charCodeAt(0) - base]++
        arr[t[i].charCodeAt(0) - base]--
    }

    return arr.every((i) => i === 0)
};