// Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

// Don't change the order of the elements that are left.



function removeSmallest(numbers) {
  let x = numbers[0];
  let arr = [];
  for (let i = 1; i < numbers.length; i++) {
    if (x > numbers[i]) {
      x = numbers[i];
    }
  }
  for (let j = 0; j < numbers.length; j++) {
    if (j !== numbers.indexOf(x)) {
      arr.push(numbers[j]);
    }
  }
  return arr;
}