// Encrypt this!

/*
Description:
Encrypt this!

You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

Your message is a string containing space separated words.
You need to encrypt each word in the message using the following rules:
The first letter needs to be converted to its ASCII code.
The second letter needs to be switched with the last letter
Keepin' it simple: There are no special characters in input.
Examples:
encryptThis("Hello") === "72olle"
encryptThis("good") === "103doo"
encryptThis("hello world") === "104olle 119drlo"
*/

var encryptThis = function(text) {
  let split = text.split(' ');
  for (var i = 0; i < split.length; i ++) {
    let secondSplit = split[i].split('');
    if (secondSplit.length === 1) {
      secondSplit[0] = secondSplit[0].charCodeAt(0);
    }
    if (secondSplit.length > 1) {
    secondSplit[0] = secondSplit[0].charCodeAt(0) + secondSplit[secondSplit.length-1];
    secondSplit.pop();
    }
    if (secondSplit.length > 2) {
      secondSplit.push(secondSplit[1]);
      secondSplit.splice(1,1)
    }
    let joined = secondSplit.join('');
    split[i] = joined;
  }
  return split.join(' ');
}
