function findAverages(nums, k){
  let start = 0;
  let end = k - 1;

  const averages = [];

  while (end < nums.length){
    averages.push(findAverage(nums, start, end));
    start++;
    end++;
  }
  return averages;
}

function findAverage(nums, rangeStart, rangeEnd){
  const elCount = rangeEnd - rangeStart +1;
  let sum = 0;
  for (let idx = rangeStart; idx <= rangeEnd; idx +=1){
    sum += nums[idx];
  }
  return sum / elCount;
}


function tests() {
  // console.log(findAverage([1, 2, 3, 4, 5, 6], 0, 2)); // 2
  // console.log(findAverage([1, 2, 3, 4, 5, 6], 0, 1)); // 1.5
  // console.log(findAverage([1, 2, 3, 4, 5, 6], 2, 4)); // 4
  // return

  console.log(findAverages([1, 2, 3, 4, 5, 6], 3)); // [ 2, 3, 4, 5 ]
  console.log(findAverages([1, 2, 3, 4, 5], 2));    // [1.5, 2.5, 3.5, 4.5]
  console.log(findAverages([10, 20, 30, 40, 50], 4)); // [ 25, 35 ]
  console.log(findAverages([5, 5, 5, 5, 5], 1));      // [ 5, 5, 5, 5, 5 ]
  console.log(findAverages([1, 3, 2, 6, -1, 4, 1, 8, 2], 5)); // [2.2, 2.8, 2.4, 3.6, 2.8]
}
tests();