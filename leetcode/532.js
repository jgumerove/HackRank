function findPairs(nums, k) {
    if(k === 0){
      return edgeCase(nums)
    }
    let set = [...new Set(nums)]
    let res = 0
    for(let num of set){
      let target = num + k
      if(set.includes(target)){
        res++
      }
      
    }
    return res 
  }
  
  function edgeCase(nums){
    let res = 0
    let count = {}
    for(let num of nums){
      count[num] = count[num] || 0
      count[num]++
      if(count[num] == 2){
        res++
      }
    }
    return res
  }
  
  console.log(findPairs([3,1,4,1,5], 2))
  