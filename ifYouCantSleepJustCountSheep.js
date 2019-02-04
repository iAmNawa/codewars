// If you can't sleep, just count sheep!!

/*
Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.
*/

var countSheep = function (num){
  var solution = "";
  for (var i = 0; i < num; i++) {
    solution = solution + (i+1) + ' sheep...';
  }
  return solution;
}
