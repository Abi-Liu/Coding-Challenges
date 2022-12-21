// Wolves have been reintroduced to Great Britain. You are a sheep farmer, and are now plagued by wolves which pretend to be sheep. Fortunately, you are good at spotting them.

// Warn the sheep in front of the wolf that it is about to be eaten. Remember that you are standing at the front of the queue which is at the end of the array:



function warnTheSheep(queue) {
  let str;
  let num;
  for (let i = 0; i < queue.length; i++) {
    if (queue[queue.length - 1] === "wolf") {
      str = "Pls go away and stop eating my sheep";
    } else if (queue[i] === "wolf") {
      num = queue.length - i - 1;
      str = `Oi! Sheep number ${num}! You are about to be eaten by a wolf!`;
    }
  }
  return str;
}