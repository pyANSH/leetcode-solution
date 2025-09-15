/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const map = new Map();
  const rejected = new Map();
  for (let i of nums) {
    if (!rejected.has(i)) {
      if (map.has(i)) {
        map.set(i, map.get(i) + 1);
      } else {
        map.set(i, 1);
      }
    }
  }
  highest = Array.from(map.keys()).sort((a, b) => map.get(b) - map.get(a));
  return highest.slice(0, k);
};

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));