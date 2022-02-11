//leetcode 14 --> easy

function longestCommonPrefix (strs) {
    let longest = '';
    
    if(strs.length === 0) return longest
    
    let comparisonWord = strs.shift();
    let comparisonIndex = 0;
    
    for (let comparisonLetter of comparisonWord){
      for (let i = 0; i < strs.length; i++){
        let currentWord = strs[i]
        let currentLetter = currentWord[comparisonIndex]
        if(comparisonLetter !== currentLetter || comparisonIndex > currentWord.length){
          return longest
        }
      }
      longest += comparisonLetter
      comparisonIndex++
    }
    return longest
  };
  
  console.log(longestCommonPrefix(["flower","flow","flight"]))
  //console.log(longestCommonPrefix([]))
  
  /*
  notes below
  
  -return empty string if none start with same letter
  -all will be in lowercase letters
  
  
  solve steps
  -separate out the first string and compare every element in first string to every element in the second string
  -want to compare index 0 of first string to index 0 of all other strings in the array
  -keep doing this until hit strings that are not the same
  -add each to result if all are the same (for index)
  -notice how he makes use of whiteboarding
  -buy a whiteboard 
  -need to loop over every letter in the comparison word
  */
  