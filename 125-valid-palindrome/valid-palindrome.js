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
        let p1 = s[left].charCodeAt()
        let p2 = s[right].charCodeAt()
        if (!isAlphaNumeric(p1)) {
            left++
            continue
        }
        if (!isAlphaNumeric(p2)) {
            right--
            continue
        }
        if (s[left].toLowerCase() !== s[right].toLowerCase()) {
            return false
        } else {
            left++
            right--
        }


    }
    return true
};