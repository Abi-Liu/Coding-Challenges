// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.



function getCount(str) {
  let arr = str.split("");
  let count = 0;
  arr.forEach((x) => {
    if (x === "a" || x === "e" || x === "i" || x === "u" || x === "o") {
      count++;
    }
  });
  return count;
}