function countZeroes(arr) {
  let leftIdx = 0;
  let rightIdx = arr.length - 1; 

  while (leftIdx <= rightIdx) {
    let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
    
    if (arr[middleIdx] === 0) {
      // Assuming arr[middleIdx] is 0, which might be the first 0.
      rightIdx = middleIdx - 1; 
    } else {
      // Assuming arr[middleIdx] is 1, keep searching right for a 0.
      leftIdx = middleIdx + 1; 
    }
  }
  
  // Code should loop until leftIdx is the first 0.
  return arr.length - leftIdx; 
}

module.exports = countZeroes;
