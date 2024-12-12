

function findNextLetter(arr, target) {
  const greaterLetters = [];

  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] <= target) {
      left = mid + 1; // Target is in the right half
      continue;
    }
    right = mid - 1; // Target is in the left half
    const closestOver = greaterLetters[greaterLetters.length - 1];

    if (greaterLetters.length === 0 || arr[mid] < closestOver) {
      greaterLetters.push(arr[mid])
    }
  }


  return greaterLetters.length === 0 ? arr[0] : greaterLetters[greaterLetters.length -1];
}

function tests() {
  console.log(findNextLetter(['b', 'd', 'f'], 'a'))// === 'b');
  console.log(findNextLetter(['b', 'd', 'f'], 'c'))// === 'd');
  console.log(findNextLetter(['b', 'd', 'f'], 'f'))// === 'b');
  console.log(findNextLetter(['a', 'a', 'b', 'c'], 'a'))// === 'b');
  console.log(findNextLetter(['c', 'f', 'j'], 'c'))// === 'f');
  console.log(findNextLetter(['a', 'c', 'f', 'h', 'i', 'j'], 'g'))// === 'h');
  // All test cases should log true.
}
tests();