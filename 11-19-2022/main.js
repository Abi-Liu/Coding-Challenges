//Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!

function getSum(a, b) {
  //Good luck!
  let sum = 0;
  if (a === b) {
    return a;
  } else if (a < b) {
    for (a; a <= b; a++) {
      sum += a;
    }
  } else {
    for (b; a >= b; b++) {
      sum += b;
    }
  }

  return sum;
}