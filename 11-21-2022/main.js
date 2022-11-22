//Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

function digitize(n) {
  let arr = n.toString().split("");
  arr1 = arr.map((x) => parseInt(x));
  return arr1.reverse();
}