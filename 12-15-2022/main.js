//An ordered sequence of numbers from 1 to N is given. One number might have deleted from it, then the remaining numbers were mixed. Find the number that was deleted.

function findDeletedNumber(arr, mixArr) {
  for (let i = 0; i < arr.length; i++) {
    if (!mixArr.includes(arr[i])) {
      return arr[i];
    }
  }
  return 0;
}