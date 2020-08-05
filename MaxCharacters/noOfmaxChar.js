// --Description
// Given a strign return the no of max chars used.

// Example
// maxChars("abccdccd recder") o/p=>"c"

function maxChars(str) {
  const charsMap = {};
  let max = 0;
  let maxChar = "";
  for (let char of str) {
    charsMap[char] = charsMap[char] + 1 || 1;
  }
  for (let char in charsMap) {
    if (charsMap[char] > max) {
      max = charsMap[char];
      maxChar = char;
    }
  }
  return maxChar;
}

console.log(maxChars("abccdccd recder"));
