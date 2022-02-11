// function lengthOfLongestSubstring(s){
//   let max = -Infinity
//   for(let begin = 0; begin < s.length; begin++){
//     for(let end = begin; end < s.length; end++){
//       const substring = s.substring(begin, end + 1)
//       if(isUnique(substring)){
//         max = Math.max(max, substring.length)
//       }
//     }
//   }
//   return max
// }

// function isUnique(string){
//   const set = new Set()
//   for(let i = 0; i < string.length; i++){
//       if(set.has(string[i])){
//           return false
//       }
//       set.add(string[i])
//   }
//     return true
// }

//note --> the type complexit is too high for leetcode to accept above

console.log(lengthOfLongestSubstring("abcabcbb"))

//note --> begin represents the index at which the substring starts
//note we set end initalized to begin originally --> because would not make sense for it to end before beginnig
//initially substring will be a 


//console.log(josh.substring(0, 1))

// console.log(isUnique(josh))
//note -- do not need to check every subtring if it has repeating character -- sliding window
// function lengthOfLongestSubstring(s){
//   let max = -Infinity
//   let begin = 0
//   let map = {}
  
//   for(let end = 0; end < s.length; end++){
//     if(map[s[end]] !== undefined && map[s[end]] >= begin){
//       begin = map[s[end]] + 1
//       //go to one after the character
//     }
//     map[s[end]] = end
//     max = Math.max(max, end - begin + 1)
//     //record the index we have seen each character
//   }
//   return max
// }

//note how the map will only include as many unique characters that are in the string

//sliding window approach
function lengthOfLongestSubstring(s){
  let max = -Infinity
  let begin = 0
  let set = new Set()
  
  for(let end = 0; end < s.length; end++){
    while(set.has(s[end])) {
      set.delete(s[begin])
      begin++
    }
    set.add(s[end])
    max = Math.max(max, end - begin + 1)
  }
  return max
}




