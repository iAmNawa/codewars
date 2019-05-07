// Two to One

/*
Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters,

each taken only once - coming from s1 or s2.
Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
*/

function longest(s1, s2) {
  let joined = s1.concat(s2)
  let sorted = joined.split('').sort()
  let looped = [sorted[0]]
  for (var i = 1; i < sorted.length; i++) {
    if (sorted[i] != sorted[i-1]) {
      looped.push(sorted[i])
    }
  }
  return looped.join('')
}

longest("aretheyhere", "yestheyarehere")
