

function findInNestedArray(matrix, target) {
  const potentialSubarrayMatch = findPotentialSubarray(matrix, target);
  if (potentialSubarrayMatch === -1) return false;
  return findInArrayBinarySearch(potentialSubarrayMatch, target);
}

function findInArrayBinarySearch(array, target) {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (array[mid] === target) {
      return true;
    } else if (array[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return false;
}

function findPotentialSubarray(matrix, target) {
  let left = 0;
  let right = matrix.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    const minSubArray = matrix[mid][0]
    const maxSubArray = matrix[mid][matrix[mid].length - 1]

    if (isInRange(minSubArray, maxSubArray, target)) {
      return matrix[mid];
    } else if (maxSubArray < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;

}

function isInRange(min, max, target) {
  return target >= min && target <= max;
}









function tests() {
  console.log(findInNestedArray([[4, 8, 12], [16, 20, 24], [28, 32, 36]], 20))// === true);
  console.log(findInNestedArray([[3, 6, 9], [12, 15, 18], [21, 24, 27]], 27))// === true);
  console.log(findInNestedArray([[1, 3, 5], [7, 9, 11], [13, 15, 17]], 19))// === false);
  console.log(findInNestedArray([[10, 20, 30], [40, 50, 60], [70, 80, 90]], 10))// === true);
  console.log(findInNestedArray([[10, 20, 30], [40, 50, 60], [70, 80, 90]], 15))// === false);
  console.log(findInNestedArray([[15, 25, 35], [45, 55, 65], [75, 85, 95]], 5))// === false);
  // All test cases should return true.
}
tests();