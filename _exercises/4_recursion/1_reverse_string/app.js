function reverseString(str){

  function reverseArray(arr, start, end){
    if (end <= start) return;

    [arr[start], arr[end]] = [arr[end], arr[start]]
    reverseArray(arr, start + 1, end - 1);
  }

  const chars = [...str];
  reverseArray(chars, 0, str.length -1);
  return chars.join('');
}


function reverseString(str){
  const chars = [...str];
  reverseArray(chars, 0, str.length -1);
  return chars.join('');
}

function reverseArray(arr, start, end){
  if (end <= start) return;

  [arr[start], arr[end]] = [arr[end], arr[start]]
  reverseArray(arr, start + 1, end - 1);
};


function tests(){
  console.log(reverseString("hello"))// === "olleh"); 04 13 22
  console.log(reverseString("world"))// === "dlrow"); 05 14 23
  console.log(reverseString("a"))// === "a");
  console.log(reverseString(""))// === "");
  console.log(reverseString("recursion"))// === "noisrucer");

  // All test cases should log true.
}

tests();