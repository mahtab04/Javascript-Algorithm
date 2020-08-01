// --Directions
// Given a string, return a new stirng withthe reversed order of characters

// --Examples
// reverse('apple') === 'elppa'
// reverse('hello') === 'olleh'

function reverse(str) {
  return str.split("").reverse().join("");
}

function reverse(str) {
  let reversed = "";
  for (let char of str) {
    reversed = char + reversed;
  }
  return reversed;
}

function reverse(str) {
  str.split("").reduce((reversed, character) => {
    return reversed + character;
  }, "");
}

console.log(reverse("apple"));
console.log(reverse("hello"));
