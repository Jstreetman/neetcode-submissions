class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        let ans = 0;
        let currentStreak = 0;
        for(let i = 0; i < nums.length; i++ ){
            if(nums[i] === 1){
                currentStreak += 1;
               ans = Math.max(ans, currentStreak)
            } else {
                currentStreak = 0
            }
        }

        return ans
        
    }
}
