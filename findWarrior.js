// Find warrior's kyu!

/*
You will be given an array and a single item from that array. The smallest value in array has the highest kyu - 1st kyu, 2nd smallest - 2nd kyu and so on. There are 8 kyus and each one has limited spots:

 1st kyu - 1 slot
 2nd kyu - 2 slots
 3rd kyu - 2 slots
 4th kyu - 3 slots
 5th kyu - 3 slots
 6th kyu - 3 slots
 7th kyu - 4 slots
 8th kyu - 4 slots
You should return kyu for the value passed based on the array. If value isn't low enough to get a kyu then return 0.

Examples:

([66,12,90,15], 15) => 2
([1,7,2,3,4,5], 1) => 1
([1,7,2,3,4,5,9,10], 7) => 4
*/

function getKyu(allHonors, honor){
  let sorted = allHonors.sort(function(a,b){return a - b});
  let num;
  for (var i = 0; i < sorted.length; i++) {
    if (sorted[i] === honor) {
        i===0?num=1:
        i===1||i===2?num=2:
        i===3||i===4?num=3:
        i===5||i===6||i===7?num=4:
        i===8||i===9||i===10?num=5:
        i==11||i===12||i===13?num=6:
        i==14||i===15||i===16||i===17?num=7:
        i==18||i===19||i===20||i===21?num=8:num=0;
        break;
    }
  }
  return num;
}

console.log(getKyu([66,12,90,15],15))
