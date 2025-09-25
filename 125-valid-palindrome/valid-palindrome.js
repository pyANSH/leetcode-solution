/**
 * @param {string} s
 * @return {boolean}
 */
const isAlphaNumeric = (letter) => {
    if (letter >= 48 && letter <= 57) return true
    if (letter >= 65 && letter <= 90) return true
    if (letter >= 97 && letter <= 122) return true
    return false
}
var isPalindrome = function (s) {
    let left = 0
    let right = s.length - 1
    while (left < right) {
        const l = s[left]
        const r = s[right]
        if (!isAlphaNumeric(l.charCodeAt())) {
            left++
            continue
        }
        if (!isAlphaNumeric(r.charCodeAt())) {
            right--
            continue
        }
        if (l.toLowerCase() !== r.toLowerCase()) {
            return false
        } else {
            left++
            right--
        }


    }
    return true
};