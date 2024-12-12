function isTargetFrequent(nums, target, minFrequency = 4) {
  const left = leftMost(nums, target);
  return left
  // if (left === -1) return false;
  // const right = rightMost(nums, target);
  // return right - left - 1;
}

function rightMost(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  let leastMoreThan;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] <= target) {
      left = mid + 1;
      continue;
    }

    right = mid - 1;
    if (leastMoreThan === undefined || nums[mid] < leastMoreThan){
      leastMoreThan = mid;
    }
  }
  return leastMoreThan === undefined ? -1 : leastMoreThan
}

function leftMost(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  let greatestLessThan;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] >= target) {
      right = mid - 1;
      continue;
    }

    left = mid + 1;
    if (greatestLessThan === undefined || nums[mid] > greatestLessThan){
      greatestLessThan = mid;
    }
  }
  console.log(greatestLessThan)
  return greatestLessThan === undefined ? -1 : greatestLessThan
}


function tests() {
  console.log(isTargetFrequent([1, 2, 3, 3, 3, 3, 4], 3))// === true);
  // return;
  console.log(isTargetFrequent([1, 1, 1, 1, 2, 3, 4], 1))// === true);
  console.log(isTargetFrequent([1, 2, 3, 4, 5], 2))// === false);
  console.log(isTargetFrequent([1, 1, 3, 4, 5], 2))// === false);
  console.log(isTargetFrequent([2, 2, 2, 3, 3, 3, 4], 3))// === false);
  console.log(isTargetFrequent([4, 4, 4, 4, 4, 4, 4], 4))// === true);
  // All test cases should log true.
}
tests();