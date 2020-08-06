// Description

// Return the no of vowels in a String

// Example
// countVowels("Hello World")=> 3
// countVowels("why")=> 0

function countVowels(str) {
  let count = 0;
  let vowels = "aeiou";
  for (let char of str.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

function countVowels(str) {
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}

console.log(countVowels("Hello World"));
console.log(countVowels("why"));
