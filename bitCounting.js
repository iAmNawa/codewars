// Bit Counting

/*
Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case
*/

var countBits = function(n) {
  let remainder = []
  if (n === 0) return 0;
  while (n) {
    remainder.push(n%2)
    n = parseInt(n/2)
  }
  return remainder.reduce((a,b) => a+b)
};

countBits(1234)
