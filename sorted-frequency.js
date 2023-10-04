function sortedFrequency(arr, val) {
  let leftIdx = 0; 
  let rightIdx = arr.length -1; 

  while (leftIdx <= rightIdx) {
    let middleIdx = Math.floor((leftIdx + rightIdx) / 2);

    if (arr[middleIdx] === val) {
      let freq = 1; 
      let left = middleIdx -1; 
      let right = middleIdx +1; 

      while(left >= 0 && arr[left] === val) {
        freq ++;
        left --; 
      }
      while(right < arr.length && arr[right] === val){
        freq ++;
        right ++;
      }
      return freq; 
    } else if (arr[middleIdx] < val) {
      leftIdx = middleIdx +1; 
    } else {
      rightIdx = middleIdx -1; 
    }
  }
  return -1; 
}

module.exports = sortedFrequency;