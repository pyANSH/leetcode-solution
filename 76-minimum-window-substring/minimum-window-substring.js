/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    const need = new Map();
    for (const c of t) need.set(c, (need.get(c) || 0) + 1);
    
    const have = new Map();
    let formed = 0;
    const required = need.size;
    
    let left = 0, minLen = Infinity, minStart = 0;
    
    for (let right = 0; right < s.length; right++) {
        const c = s[right];
        have.set(c, (have.get(c) || 0) + 1);
        
        if (need.has(c) && have.get(c) === need.get(c)) formed++;
        
        while (formed === required) {
            if (right - left + 1 < minLen) {
                minLen = right - left + 1;
                minStart = left;
            }
            const leftC = s[left];
            have.set(leftC, have.get(leftC) - 1);
            if (need.has(leftC) && have.get(leftC) < need.get(leftC)) formed--;
            left++;
        }
    }
    
    return minLen === Infinity ? "" : s.slice(minStart, minStart + minLen);
};