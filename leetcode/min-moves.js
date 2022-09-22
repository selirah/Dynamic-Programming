// ** Minimum Moves to Reach Target Score **
// You are playing a game with integers.
// You start with the integer '1' and you want to reach the integer 'target'
// In one move, you can either:
// - Increment the current integer by one (i.e. x = x + 1)
// - Double the current integer (i.e. x = 2 * x)
// You can use the *increment* operation *any* number of times,
// however, you can only use the *double* operation *at most* 'maxDoubles' times
// Given the two integers 'target' and 'maxDoubles',
// return *the minimum number of moves needed to reach 'target' starting with '1'*.

var minMoves = function (target, maxDoubles, moves = 0, x = 1) {
  if (x === target) return moves
  // x = maxDoubles > 0 ? 2 * x : (x += 1)
  x = x += 1
  moves++
  return minMoves(target, maxDoubles - 1, moves, x)
}

console.log(minMoves(5, 0))
console.log(minMoves(19, 2))
console.log(minMoves(10, 4))
