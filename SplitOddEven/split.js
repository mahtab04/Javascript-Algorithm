// Write a function splitOddAndEven, that accepts one parameter: numbers,
// an array of positive numbers.

// The function should return an object with two arrays
// in it, one for all odd numbers and one for all even numbers.

//Using for loop

function splitOddAndEven(numbers) {
  let even = [];
  let odd = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      // number is even
      even.push(numbers[i]);
    } else {
      // number is not even (=odd)
      odd.push(numbers[i]);
    }
  }
  const result = {
    even: even,
    odd: odd,
  };
  return result;
}

// using filter function

function splitOddAndEven(numbers) {
  const even = numbers.filter((number) => number % 2 === 0);
  const odd = numbers.filter((number) => number % 2 !== 0);
  const result = {
    even: even,
    odd: odd,
  };
  return result;
}

//using bit manipulation
function splitOddAndEven(numbers) {
  let even = [];
  let odd = [];
  for (let number of numbers) {
    if ((number & 1) === 1) {
      odd.push(number);
    } else {
      even.push(number);
    }
  }
  const result = {
    even: even,
    odd: odd,
  };
  return result;
}

console.log(splitOddAndEven([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
