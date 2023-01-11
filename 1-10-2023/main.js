// Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates).

function minValue(values) {
  values.sort((a, b) => a - b);
  for (let i = 0; i < values.length; i++) {
    if (values[i] === values[i + 1]) {
      values.splice(i, 1);
      i--;
    }
  }
  return Number(values.join(""));
}