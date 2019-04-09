// Twice as old

/*
Your function takes two arguments:

current father's age (years)
current age of his son (years)
Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).
*/

function twiceAsOld(dadYearsOld, sonYearsOld) {
  if (dadYearsOld/sonYearsOld === 2) {
    return 0;
  }
  if (dadYearsOld/sonYearsOld < 2) {
    let num = 0;
    for (var i = sonYearsOld; i > 0; i--) {
      if (dadYearsOld/sonYearsOld === 2) {
        return num;
      }
      dadYearsOld--;
      sonYearsOld--;
      num++;
    }
  }
  if (dadYearsOld/sonYearsOld > 2) {
    let num = 0;
    for (var i = sonYearsOld; i < 100000; i++) {
      if (dadYearsOld/sonYearsOld === 2) {
        return num;
      }
      dadYearsOld++;
      sonYearsOld++;
      num++;
    }
  }
}

console.log(twiceAsOld(22,1))
