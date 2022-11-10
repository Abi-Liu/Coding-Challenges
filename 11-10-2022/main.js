//Returns true if the first argument passed ends with the second argument

function endsWith(str1, str2){
    length = str2.length
    if(str1.slice(-length) === str2){
        return true
    } else {
        return false
    }
}
