/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
      if (s.length !== t.length) return false;

      const createObjWithFrequency = (str) => {
        let obj = {};

        for (let i of str) {
          if (obj[i]) {
            obj[i] = obj[i] + 1;
          } else {
            obj[i] = 1;
          }
        }
        return obj;
      };

      const s1 = createObjWithFrequency(s);
      const s2 = createObjWithFrequency(t);

      for (let i in s1) {
        if (s1?.[i] !== s2?.[i]) {
          return false;
        }
      }
      return true;
    // if (s.length !== t.length) return false;
    // return s.split('').sort().join('') === t.split('').sort().join('');
};
