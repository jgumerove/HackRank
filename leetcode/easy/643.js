//leetcode 643

function findMaxAverage(nums, k) {
    let max = -Infinity
    let currentSum = 0 
    
    for(let i = 0; i < nums.length; i++){
      currentSum += nums[i]
      
      if(i >= k -1){
        max = Math.max(max,(currentSum / k))
        currentSum -= nums[i - (k - 1)]
      }
    }
    return max
};

console.log(findMaxAverage([1,12,-5,-6,50,3], 4))