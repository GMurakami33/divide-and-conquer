function findRotationCount(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    // If the array is sorted and not rotated, return 0
    if (arr[left] <= arr[right]) {
      return left;
    }

    const mid = Math.floor((left + right) / 2);
    const prev = (mid + arr.length - 1) % arr.length; 
    const next = (mid + 1) % arr.length; 

    // Check if mid is the minimum element (rotation point)
    if (arr[mid] < arr[prev] && arr[mid] < arr[next]) {
      return mid;
    }

    // Adjust the search range based on which side is unsorted
    if (arr[mid] >= arr[left]) {
      // Left side is sorted, search on the right side
      left = mid + 1;
    } else {
      // Right side is sorted, search on the left side
      right = mid - 1;
    }
  }

  return 0; 
}

module.exports = findRotationCount;
