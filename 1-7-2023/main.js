// Given a string str, reverse it and omit all non-alphabetic characters.

// Example
// For str = "krishan", the output should be "nahsirk".

// For str = "ultr53o?n", the output should be "nortlu".

function reverseLetter(str) {
  let arr = str.split("");
  let filter = arr.filter((x) => x.toLowerCase() != x.toUpperCase());
  return filter.reverse().join("");
}