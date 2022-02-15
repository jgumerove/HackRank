//leetcode 283
// function moveZeroes(nums) {
//   let arr = nums.filter((element) => element !== 0)
//   while(arr.length !== nums.length){
//     arr.push(0)
//   }
//   return arr
// };

console.log(moveZeroes([0, 1, 0, 3, 12]))
console.log(moveZeroes([1, 0, 4, 1]))
console.log(moveZeroes([0, 1]))

// function moveZeroes(nums) {
// let pointer1 = 0
// let pointer2 = 0
 
// if(nums.length === 1) return nums
 
// while(pointer2 < nums.length){
//   if(nums[pointer2] !== 0){
//     let newVal = nums[pointer2]
//     nums[pointer2] = nums[pointer1]
//     nums[pointer1] = newVal
//     pointer1++
//   }
//   pointer2++
//   console.log(nums)
// }
// return nums
// };

//important to note that they start at the same place --> so if first number is not a zero the swap is meaningless 
//the swaps are meaningless until there is a zero 
//note --> for a pointer that is advanced no matter what --- use a for loop

function moveZeroes(nums) {
 let anchor = 0

 //if(nums.length === 1) return nums
 
 for(let explorer = 0; explorer < nums.length; explorer++){
   if(nums[explorer] !== 0){
     let temp = nums[explorer]
     nums[explorer] = nums[anchor]
     nums[anchor] = temp
     anchor++
   }
 }
 return nums
};

//note -- he did the swap the other way around

