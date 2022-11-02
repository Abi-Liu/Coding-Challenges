// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

function stray(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers.lastIndexOf(numbers[i]) === numbers.indexOf(numbers[i])) {
      return numbers[i];
    }
  }
}