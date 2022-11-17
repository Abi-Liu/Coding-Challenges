// Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements, with the same multiplicities (the multiplicity of a member is the number of times it appears). "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.

// comp(a, b) returns true because in b 121 is the square of 11, 14641 is the square of 121, 20736 the square of 144, 361 the square of 19, 25921 the square of 161, and so on. It gets obvious if we write b's elements in terms of squares:


function comp(array1, array2) {
  let num;
  if (!array1 || !array2) {
    return false;
  } else {
    for (let i = 0; i < array1.length; i++) {
      num = array1[i] ** 2;
      if (array2.includes(num)) {
        array2.splice(array2.indexOf(num), 1);
      } else {
        return false;
      }
    }
  }
  return true;
}