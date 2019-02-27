// Debug the functions

/*
Should be easy, begin by looking at the code. Debug the code and the functions should work.

There are three functions:
Multiplication (x)
Addition (+)
and
Reverse (!esreveR)
*/

function multi(arr) {
  let number = arr[0];
  for (var i = 1; i < arr.length; i++) {
    number = number * arr[i];
  }
  return number;
}
function add(arr) {
  let number = arr[0];
  for (var i = 1; i < arr.length; i++) {
    number = number + arr[i];
  }
  return number;
}
function reverse(str) {
  var string = str.split('');
  return string.reverse().join('');
}
