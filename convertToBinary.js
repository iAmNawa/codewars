function toBinary(n) {
  let remainder = []
  while (n) {
    remainder.push(n%2)
    n = parseInt(n/2)
  }
  return Number(remainder.reverse().join(''))
}
