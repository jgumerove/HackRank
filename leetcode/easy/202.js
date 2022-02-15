
function isHappy(n) {
    let happySum = n 
    let arr = [happySum]
    while(happySum){
      happySum = getSquares(happySum)
      if(happySum === 1){
        return true
      }
      if(arr.includes(happySum)){
        return false
      }
      arr.push(happySum)
    }
};



function getSquares(n){
 let arr = n.toString().split("")
 arr = arr.map(el => parseInt(el) ** 2)
 return arr.reduce((a, b) => {
   return (a) + (b)
 })
}

console.log(getSquares(20))

console.log(isHappy(12))

// if(!false){
//   console.log("hi")
// }

