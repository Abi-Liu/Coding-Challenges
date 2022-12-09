//You are given an array(list) strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

//n being the length of the string array, if n = 0 or k > n or k <= 0 return "" (return Nothing in Elm, "nothing" in Erlang).

// Note
// consecutive strings : follow one after another without an interruption

function longestConsec(strarr, k) {
  let s = "",
    test;
  if (k <= 0 || k > strarr.length || !strarr) {
    return "";
  }
  for (let i = 0; i < strarr.length; i++) {
    test = strarr.slice(i, i + k).join("");
    if (test.length > s.length) {
      s = test;
    }
  }
  return s;
}