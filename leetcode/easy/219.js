//sliding window practice 

// function containsNearbyDuplicate(nums, k) {
//     for(let i = 0; i < nums.length; i++){
//       for(let j = i + 1; j < nums.length; j++){
//         if(nums[i] === nums[j] && Math.abs(i - j) <= k){
//           return true
//         }
//       }
//     }
//   return false
// };

console.log(containsNearbyDuplicate([1, 2, 4, 1], 3))
console.log(containsNearbyDuplicate([1,2,3,1,2,3], 2))
console.log(containsNearbyDuplicate([1, 0, 1, 1], 1))


function containsNearbyDuplicate(nums, k) {
  let map = {}
  for(let i = 0; i < nums.length; i++){
    if(!map.hasOwnProperty(nums[i])){
      map[nums[i]] = i
    }
    else {
      if(map.hasOwnProperty(nums[i]) && Math.abs(map[nums[i]] - i) <= k){
        return true
      }
      else {
        map[nums[i]] = i 
      }
    }
  }
  return false
};