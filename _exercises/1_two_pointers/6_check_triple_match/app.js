function checkTripleMatch(nums){

  return nums.some((num, idx, arr) => {
    if (num === 0){
      arr.splice(idx, 1)
    }

    const target = num * 3;
    const searchResult = binarySearch(arr, target);
    return searchResult !== -1
  })


}

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid; // Target found, return its index
    } else if (arr[mid] < target) {
      left = mid + 1; // Target is in the right half
    } else {
      right = mid - 1; // Target is in the left half
    }
  }

  return -1; // Target not found
}



function tests() {
  console.log(checkTripleMatch([1, 3, 9, 28]))// === true);
  console.log(checkTripleMatch([1, 2, 4, 10, 11, 12]))// === true);
  console.log(checkTripleMatch([0, 5, 7, 55]))// === false);
  console.log(checkTripleMatch([4, 5, 7, 9, 13, 15, 17]))// === true);
  console.log(checkTripleMatch([2, 6, 13, 54]))// === true);
  console.log(checkTripleMatch([1, 5, 17, 51]))// === true);
  console.log(checkTripleMatch([1, 2, 4, 8]))// === false);

  // All test cases should log true.
}
tests();

