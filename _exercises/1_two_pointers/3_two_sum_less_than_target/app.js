function twoSumLessThanTarget(nums, target){
  const maxPossibleSum = target - 1;
  let currentMaxSum = -Infinity;

  for (let anchor = 0; anchor < nums.length -1; anchor +=1){
    for (let runner = anchor + 1; runner < nums.length; runner +=1){
      const sum = nums[anchor] + nums[runner];
      if (sum > maxPossibleSum) continue;
      if (sum === maxPossibleSum) return maxPossibleSum;

      if (sum > currentMaxSum){
        currentMaxSum = sum;
      }
    }
  }
  return currentMaxSum === -Infinity ? -1 : currentMaxSum;
}


function tests() {
  // console.log(twoSumLessThanTarget([3, 1, 4], 5))// === 4);
  // return
  console.log(twoSumLessThanTarget([8, 2, 4, 9, 5, 10, 1, 7], 16))// === 15);
  // return
  console.log(twoSumLessThanTarget([5, 8, 3, 2, 1], 6))// === 5);
  console.log(twoSumLessThanTarget([6, 8, 10, 12], 5))// === -1);
  console.log(twoSumLessThanTarget([1, 2, 3, 4, 5], 100) )//=== 9);
  console.log(twoSumLessThanTarget([10, 20, 30, 40, 50], 40))// === 30);
  console.log(twoSumLessThanTarget([7, 4, 15, 11, 21, 9], 24))// === 22);
  // All test cases should log true
}
tests();