// Let's see some cases (input -> output):

// 1, 10  --> [1, 2, 3, 4, 5, 6, 7, 8, 9]
// 1, 100 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]
// If there are no numbers of this kind in the range [a,b][a, b][a,b] the function should output an empty list.

// 90, 100 --> []


function sumDigPow(a, b) {
  let arr = [];
  for (let i = a; i <= b; i++) {
    let sum = 0;
    let nums = String(i).split("");
    for (let j = 0; j < nums.length; j++) {
      sum += Math.pow(nums[j], j + 1);
    }
    if (sum === i) {
      arr.push(i);
    }
  }
  return arr;
}
