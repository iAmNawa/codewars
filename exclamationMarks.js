// Exclamation marks series #11: Replace all vowel to exclamation mark in the sentence

/*
Description:
Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

Examples
replace("Hi!") === "H!!"
replace("!Hi! Hi!") === "!H!! H!!"
replace("aeiou") === "!!!!!"
replace("ABCDE") === "!BCD!"
*/

function replace(s){
  let arr = [];
  let regex = /[AEIOUaeiou]/g;
  for (var i = 0; i < s.length; i++) {
    if (s[i].match(regex)) {
      arr.push('!')
    } else {
      arr.push(s[i])
    }
  }
  return arr.join('');
}

replace("ABCDE")
