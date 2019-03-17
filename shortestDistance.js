// Shortest Distance to a Character

/*
Given a string S and a character C, return an array of integers representing the shortest distance from the current character in S to C.

Notes
All letters will be lowercase.
If the string is empty, return an empty array.
If the character is not present, return an empty array.
Examples
shortesttoChar("lovecodewars", "e") === [3, 2, 1, 0, 1, 2, 1, 0, 1, 2, 3, 4]
shortesttoChar("aaaabbbb", "b") === [4, 3, 2, 1, 0, 0, 0, 0]
shortesttoChar("", "b") === []
shortesttoChar("abcde", "") === []
*/

function shortesttoChar(s,c){
  let letters = [];
  let answer = [];
  for (var i = 0; i < s.length; i++) {
    if (s[i] === c) {
      letters.push(i)
    }
  }
  for (var i = 0; i < s.length; i++) {
    let arr = letters
  }
}

shortesttoChar("lovecodewars", "e")
