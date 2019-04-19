// Simple Fun #395: Fibonacci digit sequence

/*
Task
You are given three non negative integers a, b and n, and making an infinite sequence just like fibonacci sequence, use the following rules:

step 1: use ab as the initial sequence.
step 2: calculate the sum of the last two digits of the sequence, and append it to the end of sequence.
repeat step 2 until you have enough digits
Your task is to complete the function which returns the nth digit (0-based) of the sequence.

Notes:
0 <= a, b <= 9, 0 <= n <= 10^10
16 fixed testcases
100 random testcases, testing for correctness of solution
100 random testcases, testing for performance of code
All inputs are valid.
Pay attention to code performance.
Examples
For a = 7, b = 8 and n = 9 the output should be 5, because the sequence is:
78 -> 7815 -> 78156 -> 7815611 -> 78156112 -> 781561123 -> 7815611235 -> ...
*/

function find(a,b,n){
  let start=''+a+b+(a+b);
  while (start.toString().length < n+1) {
    let last = start.toString().slice(-1)
    let secondLast = start.toString().split('')
    let secondLastItem = secondLast[secondLast.length-2]
    start += Number(last) + Number(secondLastItem);
  }
  return +start.toString().slice(-1);
}

console.log(find(12,14,250))
