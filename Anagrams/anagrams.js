// Description

// Check if two provided strings are anagrams of each other
// One String is anagrams of another if they uses same characters.

// Example;
// isAnagram("rail safety", "fairy tales");

function isAnagram(stringA, stringB) {
  const acharMap = charMap(stringA);
  const bcharMap = charMap(stringB);
  if (Object.keys(acharMap).length !== Object.keys(bcharMap).length) {
    return false;
  }
  for (let char in acharMap) {
    if (acharMap[char] !== bcharMap[char]) {
      return false;
    }
  }
  return true;
}
function charMap(str) {
  const chars = {};
  for (let char of str.replace(/[^\w]/g, "").toLowerCase()) {
    chars[char] = chars[char] + 1 || 1;
  }
  return chars;
}

// solution 2

function isAnagram(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str) {
  return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
}
