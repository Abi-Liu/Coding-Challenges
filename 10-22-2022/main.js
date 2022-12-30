// You are given an initial 2-value array (x). You will use this to calculate a score.

// If both values in (x) are numbers, the score is the sum of the two. If only one is a number, the score is that number. If neither is a number, return 'Void!'.

// Once you have your score, you must return an array of arrays. Each sub array will be the same as (x) and the number of sub arrays should be equal to the score.

// For example:

// if (x) == ['a', 3] you should return [['a', 3], ['a', 3], ['a', 3]].


function explode(x) {
  let score;
  let arr = [];
  if (Number.isInteger(x[0]) && Number.isInteger(x[1])) {
    score = x[0] + x[1];
  } else if (Number.isInteger(x[0]) && !Number.isInteger(x[1])) {
    score = x[0];
  } else if (!Number.isInteger(x[0]) && Number.isInteger(x[1])) {
    score = x[1];
  } else {
    return "Void!";
  }
  for (let i = 0; i < score; i++) {
    arr.push(x);
  }
  return arr;
}