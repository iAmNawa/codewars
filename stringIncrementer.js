// String incrementer

/*
Your job is to write a function which increments a string, to create a new string.

If the string already ends with a number, the number should be incremented by 1.
If the string does not end with a number. the number 1 should be appended to the new string.
Examples:

foo -> foo1

foobar23 -> foobar24

foo0042 -> foo0043

foo9 -> foo10

foo099 -> foo100
*/

function incrementString (strng) {
  let numArr = []
  let wordArr = []
  let arr = strng.split('').forEach(x=>{
    if (!isNaN(x) && x !== '0') {
      numArr.push(x)
    } else {
      wordArr.push(x)
    }
  })
  if (numArr.length === 0 && wordArr[wordArr.length-1] === '0') {
    wordArr[wordArr.length-1] = '1'
    return wordArr.join('')
  }
  if (wordArr[wordArr.length-1] === '0'  && numArr[0] === '9') {
    wordArr.pop()
  }
  return wordArr.join('') + (Number(numArr.join(''))+1)
}

console.log(incrementString("foobar000"))
console.log(incrementString("foobar"))
