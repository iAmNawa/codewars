// Tick Toward

/*
Define a function that generates medial values between two coordinates and returns them in an array from start to target. For example, if the starting point is [1,1] and the target point is [3,2] then the shortest route from start to target would be [[1,1], [2,2], [3,2]]. The route should go only through integral coordinates.

Note: you should move diagonally until the path from your current position to the target can be represented as a fully horizontal/vertical line.

Examples:
tickToward([5,5],[5,7])  // => [[5,5],[5,6],[5,7]]
tickToward([3,2],[4,5])  // => [[3,2],[4,3],[4,4],[4,5]]
tickToward([5,1],[5,-2]) // => [[5,1],[5,0],[5,-1],[5,-2]]
*/

function tickToward(start,end){
  if (start.length === 2) {
    var arr = [[start[0],start[1]]]
  }
  while (start[0] != end[0] || start[1] != end[1]) {
    if (start[0] != end[0] && start[1] != end[1]) {
      if (start[0] > end[0]) {
        start[0]--
      } else {
        start[0]++
      }
      if (start[1] > end[1]) {
        start[1]--
      } else {
        start[1]++
      }
      arr.push([start[0],start[1]])
    }
    if (start[0] != end[0] && start[1] === end[1]) {
      if (start[0] > end[0]) {
        start[0]--
      } else {
        start[0]++
      }
      arr.push([start[0],start[1]])
    }
    if (start[0] === end[0] && start[1] != end[1]) {
      if (start[1] > end[1]) {
        start[1]--
      } else {
        start[1]++
      }
      arr.push([start[0],start[1]])
    }
  }
  return arr
}

tickToward([0,0],[4,4])
