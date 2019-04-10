// Sum of differences in array

/*
Your task is to sum the differences between consecutive pairs in the array in descending order.

For example: sumOfDifferences([1, 2, 10] Returns 9

Descending order: [10, 2, 1]

Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

If the array is empty or the array has only one element the result should be 0.
*/

function sumOfDifferences(arr) {
  let sorted = arr.sort((a,b) => b-a);
  let number = 0;
  for (var i = 0; i < sorted.length-1; i++) {
    number += (sorted[i]-sorted[i+1]);
    console.log(number)
  }
  console.log(number)
}

sumOfDifferences([-3, -2, -1])
