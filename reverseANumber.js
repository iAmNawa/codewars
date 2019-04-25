// Reverse a Number

/*
Given a number, write a function to output its reverse digits. (e.g. given 123 the answer is 321)

Numbers should preserve their sign; i.e. a negative number should still be negative when reversed.

Examples
 123 ->  321
-456 -> -654
1000 ->    1
*/

function reverseNumber(n) {
  let arr = n.toString().split('').reverse()
  if (arr[arr.length-1] === '-') {
    arr.pop()
    arr.unshift('-')
  }
  return +arr.join('')
}

reverseNumber(123)
reverseNumber(-123)
reverseNumber(1000)
