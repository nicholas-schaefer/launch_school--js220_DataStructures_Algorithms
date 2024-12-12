function isSquareInteger(target) {

  let left = 0;
  let right = target;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    const squaredInt = mid ** 2;

    if (squaredInt === target) {
      return true;
    } else if (squaredInt < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return false;
}

function tests() {
  console.log(isSquareInteger(1))// === true);
  console.log(isSquareInteger(4))// === true);
  console.log(isSquareInteger(16))// === true);
  console.log(isSquareInteger(14))// === false);
  console.log(isSquareInteger(25))// === true);
  console.log(isSquareInteger(26))// === false);
  // All test cases should log true.
}
tests();