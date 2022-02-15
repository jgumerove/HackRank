//leetcode 832

function flipAndInvertImage(image) {
    for(let i = 0; i < image.length; i++){
      let arr = image[i]
      let pointer1 = 0
      pointer2 = arr.length - 1 
      while(pointer1 < pointer2){
        let oldVal = arr[pointer1]
        arr[pointer1] = arr[pointer2]
        arr[pointer2] = oldVal
        pointer1++
        pointer2--
        //could have just reveresed it 
      }
      for(let k = 0; k < arr.length; k++){
        if(arr[k] === 0){
          arr[k] = 1
        }
        else{
          arr[k] = 0
        }
      }
    }
    return image
  };
  
  /*
  notes here:
  1. iterate through the image matrix 
  2. grab the array in the matrix 
  3. perform swaps on the the matrix:
    - use pointers pointing to first matrix value and last matrix value 
    -increment and decrement while swapping
  4. after swapping -- perform the inversion -- chain all 0s to 1s and vice versa
  
  */
  
  console.log(flipAndInvertImage([[1,1,0],[1,0,1],[0,0,0]]))
  console.log(flipAndInvertImage([[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]]))