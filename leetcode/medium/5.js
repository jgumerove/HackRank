function longestPalindrome(s) {
    if(s.length < 1 || s === null) return ''
    let longest = '';
    for(let i = 0; i < s.length; i++){
      let oddPalindrome = expandFromCenter(s, i, i)
      let evenPalindrome = expandFromCenter(s, i-1, i)
      //console.log(longest)
      // //because will have two centers
      if(oddPalindrome.length > longest.length){
        longest = oddPalindrome
      }
      if(evenPalindrome.length > longest.length){
        longest = evenPalindrome
      }
      console.log(oddPalindrome, evenPalindrome)
    }
    return longest
  };
  
  //expand until hit null or two characters are not the same a a b b a a (note -- the values being compared have to be the same)
  function expandFromCenter(string, left, right){
    let k = 0
    while(string[left -k] && string[left - k] === string[right + k]){
      console.log(k)
      k++
      console.log(k)
    }
    k--;
    return string.slice(left - k, right + k + 1)
  }
  
  // console.log(longestPalindrome("babad"))
  //console.log(longestPalindrome("cbbd"))
  //console.log(longestPalindrome("aabbaa"))
  console.log(longestPalindrome("cccba"))