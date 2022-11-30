// An  isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.



function isIsogram(str) {
  //...
  let copy = str.toLowerCase();
  if (str.length === 0) {
    return true;
  } else {
    for (let i = 0; i < str.length; i++) {
      let char = copy[i];
      for (let j = 0; j < str.length; j++) {
        if (j === i) {
          continue;
        } else if (char === str[j]) {
          return false;
        }
      }
    }
    return true;
  }
}
