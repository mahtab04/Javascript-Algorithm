// Description
// Given an integer,return an integer tht is reverse ordering of
// that integer

// Example
// reverseInt(12) === 21
// reverseInt(34) === 43
// reverseInt(067) === 76

function reverseInt(number) {
  const reversedNum = number.toString().split("").reverse().join("");
  return parseInt(reversedNum) * Math.sign(number);
}

console.log(reverseInt(076));
