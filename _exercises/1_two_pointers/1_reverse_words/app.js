function reverseWords(sentence){
  return sentence.split(' ')
                 .map(reverseWord)
                 .join(' ');
}

function reverseWord(word){
  let charsArray = [...word];

  function swapIndexes(start, end){
    if (start > end) return;
    [charsArray[start], charsArray[end]] = [charsArray[end], charsArray[start]];
    swapIndexes(++start, --end);
  }
  swapIndexes(0, word.length -1);

  return charsArray.join('');
}


function tests() {
  console.log(reverseWord("World") === "dlroW");
  console.log(reverseWord("Coding") === "gnidoC");

  console.log(reverseWords("Hello World") === "olleH dlroW");
  console.log(reverseWords("JavaScript is fun") === "tpircSavaJ si nuf");
  console.log(reverseWords("Coding in the sun") === "gnidoC ni eht nus");
  console.log(reverseWords("Launch School") === "hcnuaL loohcS");
  console.log(reverseWords("") === "");
}
tests();