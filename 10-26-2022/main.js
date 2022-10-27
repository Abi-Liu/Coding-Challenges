/* Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

Note: input will never be an empty string */

function fakeBin(x){
    let arr = x.toString().split('')
    let result = []
    arr.forEach((x, i) => {
        if(x < 5){
            result[i]= 0
        } else {
            result[i] = 1
        }
    })
  return result.join('')
}