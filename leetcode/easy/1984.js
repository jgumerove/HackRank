//leetcode 1984

function minimumDifference(nums, k) {
    let sorted = nums.sort((a, b) => a -b)
    let left = 0
    let right = k -1
    res = Infinity
    while(right < nums.length){
      res = Math.min(res,(Math.abs(nums[left] - nums[right])))
      left++
      right++
      console.log(res)
    }
    return res
};

console.log(minimumDifference([9,4,1,7], 2))
//note the difference want to pick something that is closest to minimize
//note -- the furth away something is in a sorted list -- greater the difference