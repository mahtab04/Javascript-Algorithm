// Given a string, return true if the string is palindrome or
// false if it is not.Palindromesare string that forms same
// if it is reversed

// Example:
// palindrome('abba') === true
// palindrome('avfd') === false

function palindrome(str) {
  const reversed = str.split("").reverse().join("");
  return str === reversed;
}

function palindrome(str) {
  str.split("").every((char, i) => {
    return char === str[str.length - i - 1];
  });
}

console.log(palindrome("abba"));
console.log(palindrome("werf"));
