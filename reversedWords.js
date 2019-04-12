// Reversed Words

/*
Complete the solution so that it reverses all of the words within the string passed in.

Example:

reverseWords("The greatest victory is that which requires no battle")
// should return "battle no requires which that is victory greatest The"
*/

function reverseWords(str){
  let arr = str.split(' ')
  let solution = []
  for (var i = arr.length-1; i >= 0; i--) {
    solution.push(arr[i])
  }
  return solution.join(' ')
}

reverseWords("yoda doesn't speak like this")
