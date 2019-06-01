// Football - Yellow and Red Cards

/*
Most football fans love it for the goals and ecards[icit]ement. Well, this Kata doesn't. You are to handle the referee's little notebook and count the players who were sent off for fouls and misbehavior.

The rules: Two teams, named "A" and "B" have 11 players each; players on each team are numbered from 1 to 11. Any player may be sent off the field by being given a red card. A player can also receive a yellow warning card, which is fine, but if he receives another yellow card, he is sent off immediately (no need for a red card in that case). If one of the teams has less than 7 players remaining, the game is stopped immediately by the referee, and the team with less than 7 players loses.

A card is a string with the team's letter ('A' or 'B'), player's number, and card's color ('Y' or 'R') - all concatenated and capitalized. e.g the card 'B7Y' means player #7 from team B received a yellow card.

The task: Given a list of cards (could be empty), return the number of remaining players on each team at the end of the game (as a tuple of 2 integers, team "A" first). If the game was terminated by the referee for insufficient number of players, you are to stop the game immediately, and ignore any further possible cards.

Note for the random tests: If a player that has already been sent off receives another card - ignore it.
*/

function menStillStanding(cards) {
  let ey = [0,2,2,2,2,2,2,2,2,2,2,2];
  let bee = [0,2,2,2,2,2,2,2,2,2,2,2];
  if (cards.length === 0) {
    return [11,11]
  }
  for (var i = 0; i < cards.length; i++) {
    if (cards[i][0] === 'A') {
      if (cards[i].length === 3) {
        if (cards[i][2] === 'Y') {
          ey[cards[i][1]]--
        }
        if (cards[i][2] === 'R') {
          ey[cards[i][1]] -= 2
        }
      }
      if (cards[i].length === 4) {
        if (cards[i][3] === 'Y') {
          ey[cards[i][1]+cards[i][2]]--
        }
        if (cards[i][3] === 'R') {
          ey[cards[i][1]+cards[i][2]] -= 2
        }
      }
    }
    if (ey.filter(x=>x>0).length < 7 || bee.filter(x=>x>0).length < 7) {
      break;
    }
    if (cards[i][0] === 'B') {
      if (cards[i].length === 3) {
        if (cards[i][2] === 'Y') {
          bee[cards[i][1]]--
        }
        if (cards[i][2] === 'R') {
          bee[cards[i][1]] -= 2
        }
      }
      if (cards[i].length === 4) {
        if (cards[i][3] === 'Y') {
          bee[cards[i][1]+cards[i][2]]--
        }
        if (cards[i][3] === 'R') {
          bee[cards[i][1]+cards[i][2]] -= 2
        }
      }
    }
    if (ey.filter(x=>x>0).length < 7 || bee.filter(x=>x>0).length < 7) {
      break;
    }
  }
  return [ey.filter(x=>x>0).length,bee.filter(x=>x>0).length]
}

console.log(menStillStanding([ 'A7Y',
  'A3R',
  'A8Y',
  'A4R',
  'A8Y',
  'B1Y',
  'A3Y',
  'B9R',
  'A6R',
  'B10Y',
  'A4R',
  'B5Y',
  'A3Y',
  'A2R',
  'A7R',
  'B6Y',
  'B9R' ]))
