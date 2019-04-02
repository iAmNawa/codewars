// Mumbling

/*
This time no story, no theory. The examples below show you how to write function accum:

Examples:

accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.
*/

function accum(s) {
	let num = 1;
  let answer = [];
  let finalAnswer= [];
  for (var i = 0; i < s.length; i++) {
    let letter = s[i].toLowerCase();
    answer[i] = letter.repeat(num);
    num++;
    if (s.length) {
      answer[i] += '-';
      let cap = answer[i].split('');
      cap[0] = cap[0].toUpperCase();
      finalAnswer.push(cap.join(''));
    }
  }
  return finalAnswer.join('').slice(0, -1);
}

console.log(accum("ZpglnRxqenU"))
