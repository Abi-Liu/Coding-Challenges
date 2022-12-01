//Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

function smash (words) {
  let n = ''
  if(words.length == 0){
    return n
  } else if ( words.length ===1){
    return words[0]
  } else {
    for(let i = 0; i < words.length-1; i++){
     n += words[i] + ' '
    }
    n += words[words.length-1]
  }

  return n
};