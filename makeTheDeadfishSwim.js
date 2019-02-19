// Make the deadfish swim

/*
Write a simple parser that will parse and run Deadfish.

Deadfish has 4 commands, each 1 character long:

i increments the value (initially 0)
d decrements the value
s squares the value
o outputs the value into the return array
Invalid characters should be ignored.

parse("iiisdoso") => [ 8, 64 ]
*/

function parse( data ) {
  let solution = [];
  let temp = 0;
  data = data.split('');
  for (var i = 0; i < data.length; i++) {
    if (data[i] === 'i') {
      temp++;
    }
    if (data[i] === 'd') {
      temp--;
    }
    if (data[i] === 's') {
      temp *= temp;
    }
    if (data[i] === 'o') {
      solution.push(temp);
    }
  }
  return solution;
}
