// Shortest Word

/*
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.
*/

function findShort(s){
  let words = s.split(' ');
  let number = words[0].length;
  words.map(x => {
    if (x.length < number) {
      number = x.length;
    }
  })
  return number;
}
