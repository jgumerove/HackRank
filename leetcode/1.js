

// function twoSum(arr, target){
// let arrNew = []
// for(let i = 0; i < arr.length; i++){
//   for(let j = i + 1; j < arr.length; j++){
//     let total = arr[i] + arr[j]
//     if(total === target){
//       arrNew = [i, j]
//       return arrNew
//     }
//   }
// }
// return null
// }

console.log(twoSum([1, 2, 5, 0, 3, 4], 9))

// function twoSum(nums, target) {
//   for(let i = 0; i < nums.length; i++){
//       for(let j = i + 1; j < nums.length; j++){
//           if(nums[i] + nums[j] === target){
//               return [i, j]
//           }
//       }
//   }
//     return arr
// };

function twoSum(nums, target){
  let map = {}
  for(let i = 0; i < nums.length; i++){
    let value = nums[i]
    let complimentPair = target - value
    if(map[complimentPair] !== undefined){
      return[map[complimentPair], i]
    }
    else{
      map[value] = i
    }
  }
}