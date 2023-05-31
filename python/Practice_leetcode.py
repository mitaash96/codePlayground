from functools import reduce


class Solution:
    def maxSubArray(self, nums: list([int])) -> int:
        # https://leetcode.com/problems/maximum-subarray/
        if len(nums)== 1:
            return nums[0]
        else:
            cs= ms= nums[0]
            for _ in nums[1:]:
                cs= max(_, cs+ _)
                ms= max(cs, ms)
            return ms
    
    def plusOne(self, digits: list([int])) -> list([int]):
        n= reduce(lambda x,y: x*10+y, digits) + 1
        return [int(_) for _ in str(n)]
    
    def minCostConnectPoints(self, points: list([list([int])])) -> int:
        pass
        

Solution().minCostConnectPoints(points= [[3,12],[-2,5],[-4,1]])