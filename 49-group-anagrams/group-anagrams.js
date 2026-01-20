/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    const map = new Map()

    for (let i of strs) {

        let sorted = i.split('').sort().join()
        if (!map.has(sorted)) map.set(sorted, [])
        map.get(sorted).push(i)
    }

    return Array.from(map.values())

};