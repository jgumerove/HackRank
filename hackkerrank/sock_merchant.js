function sockMerchant(n, ar) {
    // Write your code here\
    if(n <= 1) return 0
    let pairs = 0
    const pairTracker = {
      
    }
    
    for(const element of ar){
      if(!pairTracker.hasOwnProperty(element)){
        pairTracker[element] = 0
      }
      pairTracker[element]++
    }
    for(const key in pairTracker){
     let pairVal = pairTracker[key]
     pairs += Math.floor(pairVal/2)
    }
    return pairs
}

//needs to pair the socks by color 
//note --> if can do without an array --> should do without an array

console.log(sockMerchant(7, [1, 2, 1, 2, 1, 3, 2]))