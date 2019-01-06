// Moving Zeros To The End


// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
// moveZeros([false,1,0,1,2,0,1,3,"a"])  returns[false,1,1,2,1,3,"a",0,0]

const moveZeros = function (arr) {
  let other = [], zeroes = [];

  arr.forEach(item => {
   if (item === 0 || item === '0') {
     zeroes.push(item);
   }
   if (item === false) {
     other.push(item)
   }
   if (item != 0 || item != '0') {
     other.push(item)
   }
 })
 return other.concat(zeroes);
}
