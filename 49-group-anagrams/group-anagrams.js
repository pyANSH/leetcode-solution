/**
 * @param {string[]} strs
 * @return {string[][]}
 */

var groupAnagrams = function (strs) {
    const obj = {}
    for (let i of strs) {
        let q = i.split('').sort().join('')
        if (q in obj) {
            obj[q].push(i)
        }
        else {
            obj[q] = [i]
        }
    }
    return Object.values(obj)
};