// Strings Mix

/*
Given two strings s1 and s2, we want to visualize how different the two strings are. We will only take into account the lowercase letters (a to z). First let us count the frequency of each lowercase letters in s1 and s2.

s1 = "A aaaa bb c"

s2 = "& aaa bbb c d"

s1 has 4 'a', 2 'b', 1 'c'

s2 has 3 'a', 3 'b', 1 'c', 1 'd'

So the maximum for 'a' in s1 and s2 is 4 from s1; the maximum for 'b' is 3 from s2. In the following we will not consider letters when the maximum of their occurrences is less than or equal to 1.

We can resume the differences between s1 and s2 in the following string: "1:aaaa/2:bbb" where 1 in 1:aaaa stands for string s1 and aaaa because the maximum for a is 4. In the same manner 2:bbb stands for string s2 and bbb because the maximum for b is 3.

The task is to produce a string in which each lowercase letters of s1 or s2 appears as many times as its maximum if this maximum is strictly greater than 1; these letters will be prefixed by the number of the string where they appear with their maximum value and :. If the maximum is in s1 as well as in s2 the prefix is =:.

In the result, substrings (a substring is for example 2:nnnnn or 1:hhh; it contains the prefix) will be in decreasing order of their length and when they have the same length sorted in ascending lexicographic order (letters and digits - more precisely sorted by codepoint); the different groups will be separated by '/'. See examples and "Example Tests".

Hopefully other examples can make this clearer.

s1 = "my&friend&Paul has heavy hats! &"
s2 = "my friend John has many many friends &"
mix(s1, s2) --> "2:nnnnn/1:aaaa/1:hhh/2:mmm/2:yyy/2:dd/2:ff/2:ii/2:rr/=:ee/=:ss"

s1 = "mmmmm m nnnnn y&friend&Paul has heavy hats! &"
s2 = "my frie n d Joh n has ma n y ma n y frie n ds n&"
mix(s1, s2) --> "1:mmmmmm/=:nnnnnn/1:aaaa/1:hhh/2:yyy/2:dd/2:ff/2:ii/2:rr/=:ee/=:ss"

s1="Are the kids at home? aaaaa fffff"
s2="Yes they are here! aaaaa fffff"
mix(s1, s2) --> "=:aaaaaa/2:eeeee/=:fffff/1:tt/2:rr/=:hh"
*/

function mix(s1, s2) {
  let regex = /[a-z]/g;
  let str1 = s1;
  let str2 = s2;
  let str1sort = str1.match(regex).sort();
  let str2sort = str2.match(regex).sort();
  let counts1 = {};
  let counts2 = {};
  for (var i = 0; i < str1sort.length; i++) {
    counts1[str1sort[i]] = 1 + (counts1[str1sort[i]] || 0);
  }
  for (var i = 0; i < str2sort.length; i++) {
    counts2[str2sort[i]] = 1 + (counts2[str2sort[i]] || 0);
  }
  let mixedArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  let firstArr = [];
  let secondArr = [];
  for (var i = 0; i < mixedArr.length; i++) {
    if (counts1.hasOwnProperty(mixedArr[i])) {
      firstArr.push('1:' + mixedArr[i].repeat(counts1[mixedArr[i]]))
    }
  }
  for (var i = 0; i < mixedArr.length; i++) {
    if (counts2.hasOwnProperty(mixedArr[i])) {
      secondArr.push('2:' + mixedArr[i].repeat(counts2[mixedArr[i]]))
    }
  }
  let sortedFirst = firstArr.sort(function(a, b){
    return b.length - a.length;
  })
  let sortedSecond = secondArr.sort(function(a, b){
    return b.length - a.length;
  })
  console.log(sortedFirst)
  console.log(sortedSecond)
  let merging = [];
  for (var i = 0; i < sortedFirst.length; i++) {
    let falsy = false;
    for (var j = 0; j < sortedSecond.length; j++) {
      let falsy2 = false;
      if (sortedFirst[i][2] == sortedSecond[j][2]) {
        if (sortedFirst[i].length > sortedSecond[j].length) {
          merging.push(sortedFirst[i]);
          falsy = true;
        }
        if (sortedFirst[i].length < sortedSecond[j].length) {
          merging.push(sortedSecond[j])
          falsy = true;
        }
        if (sortedFirst[i].length == sortedSecond[j].length) {
          let changeFirst = sortedFirst[i].split('');
          changeFirst[0] = '3';
          merging.push(changeFirst.join(''));
          falsy = true;
        }
      }
    }
    if (falsy === false) {
      merging.push(sortedFirst[i])
    }
  }
  for (var i = 0; i < sortedFirst.length; i++) {
    let falsy = false;
    for (var j = 0; j < sortedSecond.length; j++) {
      let falsy2 = false;
      if (sortedFirst[i][2] == sortedSecond[j][2]) {
        if (sortedFirst[i].length > sortedSecond[j].length) {
          merging.push(sortedFirst[i]);
          falsy = true;
        }
        if (sortedFirst[i].length < sortedSecond[j].length) {
          merging.push(sortedSecond[j])
          falsy = true;
        }
        if (sortedFirst[i].length == sortedSecond[j].length) {
          let changeFirst = sortedFirst[i].split('');
          changeFirst[0] = '3';
          merging.push(changeFirst.join(''));
          falsy = true;
        }
      }
    }
    if (falsy === false) {
      merging.push(sortedFirst[i])
    }
  }
  merging.sort(function(a, b){
    return b.length - a.length;
  });
  merging.sort(function(a, b){
    if (a.length === b.length) {
    return a[0] - b[0];
    }
  });
  let answer = [];
  for (var i = 0; i < merging.length; i++) {
    if (merging[i].length > 3) {
      if (merging[i][0] == 1 || merging[i][0] == 2) {
        answer.push(merging[i]);
      }
      if (merging[i][0] == 3) {
        let changeFirst = merging[i].split('');
        changeFirst[0] = '=';
        answer.push(changeFirst.join(''));
      }
    }
  }
  console.log(answer.join('/'));
}

//mix("Are they here", "yes, they are here")
//mix("looping is fun but dangerous", "less dangerous than coding")
mix(" In many languages", " there's a pair of functions")
