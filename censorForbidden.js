// Simple Fun #283: Censor The Forbidden Words

/*
Task
Codewars Weekly has gained popularity in the past months and is receiving lots of fan letters. Unfortunately, some of the readers use offensive words and the editor wants to keep the magazine family friendly.

To manage this, you have been asked to implement a censorship algorithm. You will be given the fan letter text and a list of forbiddenWords. Your algorithm should replace all occurrences of the forbidden words in the text with sequences of asterisks of the same length.

Be careful to censor only words, no one want to see "classic" spelled as "cl***ic".

Input/Output
[input] string text

Text to censor, composed of mixed case English (or non-English, for random cases) words separated by a single whitespace character each. No punctuation is used. All words may consist of Latin alphabet letters only.

[input] string array forbiddenWords

The list of words to censor, all in lowercase.

[output] a string

The censored text. Its length should be the same as the length of text.

Example
For text = "The cat does not like the fire" and forbiddenWords = ["cat","fire"], the output should be "The *** does not like the ****".
*/

function censorThis(text, forbiddenWords) {
  if (forbiddenWords.length === 0) {
    return text;
  }
  let star = '*';
  let answer = text;
  let split = answer.split(' ');
  for (var i = 0; i < forbiddenWords.length; i++) {
    for (var j = 0; j < split.length; j++) {
      if (split[j].toLowerCase() === forbiddenWords[i].toLowerCase()) {
        let lengthy = split[j].length;
        split[j] = star.repeat(lengthy);
      }
    }
    answer = split;
  }
  return answer.join(' ');
}

//censorThis('The cat does not like the therapy',[ 'the', 'like' ])
//censorThis('Javascript is the BEST programming language and LOLCODE is the Worst',[ 'worst', 'best' ])
