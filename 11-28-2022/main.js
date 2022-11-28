//Complete the function to find the count of the most frequent item of an array. You can assume that input is an array of integers. For an empty array return 0



function mostFrequentItemCount(collection) {
  let most = 0;
  if (!collection) {
    return [];
  } else {
    for (let i = 0; i < collection.length; i++) {
      let count = 0;
      let current = collection[i];
      for (let j = 0; j < collection.length; j++) {
        if (current === collection[j]) count++;
      }
      if (count > most) {
        most = count;
      }
    }
  }
  return most;
}