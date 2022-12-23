//Given an array of integers, return a new array with each value doubled.

function maps(x) {
  let newArray = [];
  for (let i = 0; i < x.length; i++) {
    newArray[i] = x[i] * 2;
  }
  return newArray;
}