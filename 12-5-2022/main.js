// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.


function highAndLow(numbers) {
  let arr = numbers.split(" ");
  arr.sort((a, b) => Number(a) - Number(b));
  return `${arr[arr.length - 1]} ${arr[0]}`;
}