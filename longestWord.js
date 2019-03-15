// Longest Word in Dictionary

/*
Given a string and a string dictionary, find the longest string in the dictionary that can be formed by deleting some characters of the given string.

If there are more than one possible results, return the longest word with the smallest lexicographical order. If there is no possible result, return the empty string.

findLongestWord(string, string_dictionary);
E.g

findLongestWord("abpcplea", ["ale","apple","monkey","plea"])
  // => "apple"
findLongestWord("abpcplea", ["a", "b", "c"])
  // => "a"
Note:

All the strings in the input will only contain lower-case letters.
The size of the dictionary won't exceed 1,000.
The length of all the strings in the input won't exceed 1,000.
Performance should be on your mind
*/

function findLongestWord(str, arr){
  let longestWord = '';
  let word = '';
  for (var i = 0; i < arr.length; i++) {
    let innerArr = arr[i].split('');
    let total = 0;
    for (var j = 0; j < innerArr.length; j++) {
      if (str.includes(innerArr[j])) {
        total++;
        word += innerArr[j];
      }
    }
    if (total == arr[i].length && arr[i].length > longestWord.length) {
      longestWord = arr[i];
    }
  }
  console.log(longestWord);
  console.log(word)
}

findLongestWord("qyovkvjogfwflqxydjnsurlvtebpjxcocjilrocappflzkcttezpdzqipbdsaaappqvofkbkbhuwgatgzjtskexcevpvrgbgoofbsszolpeszsnfgfkiypldossbqbb", ['lflyqctzekpiuvbaohg'])
