class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        d1 = {}
        for i in strs:
            j = str(''.join(sorted(i)))
            if j not in d1:
                d1[j] = [i]  
            else:
                d1[j].append(i)
        return d1.values()