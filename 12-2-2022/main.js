//Complete the solution so that it reverses the string passed into it.

function solution(str) {
  let n = "";
  let len = str.length;
  for (let i = len - 1; i >= 0; i--) {
    n += str[i];
  }
  return n;
}