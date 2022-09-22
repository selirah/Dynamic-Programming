// BASEBALL GAME
// You are keeping score for a baseball game with strange rules.
// The game consists of several rounds, where the scores of past rounds may affect future rounds' score.
// At the beginning of the game, you start with an empty record.
// You are given a list og strings ops, where ops[i] is the ith operation you must apply to the record and is one of the following
// 1. An integer x - Record a new score of x
// 2. "+" - Record a new score that is the sum of the previous two scores. I is guaranteed there will always be two previous scores.
// 3. "D" - Record a new score that is double the previous score. It is guaranteed there will always be a previous score
// 4. "C" - Invalidate the previous score, removing it from the record. It is guaranteed there will always be a previous score.
// Return the sum of all the scores on the record

var calPoints = function (ops) {
  let result = []
  const regex = /^-?\d+(\.\d{1,2})?$/

  for (let i = 0; i < ops.length; i++) {
    if (regex.test(ops[i])) result.push(parseInt(ops[i]))
    if (ops[i] === 'C') result = result.filter((r) => r !== result[parseInt([i - 1])])
    if (ops[i] === 'D') result.push(2 * result[result.length - 1])
    if (ops[i] === '+') result.push(result[result.length - 2] + result[result.length - 1])
  }
  return result.reduce((a, b) => a + b)
}

console.log('***BASEBALL GAME***')
console.log(calPoints(['5', '2', 'C', 'D', '+'])) // 30
console.log(calPoints(['5', '-2', '4', 'C', 'D', '9', '+', '+'])) // 17
console.log(calPoints(['1'])) // 1

// VALID PARENTHESES
// Given a string s containing characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid
// An input string is valid if:
// 1. Open brackets must be closed by the same type of brackets.
// 2. Open brackets must be closed in the correct order.

var isValid = function (s) {
  for (let i = 0; i < s.length; i++) {
    if (s[i] + s[i + 1] === '()' || s[i] + s[i + 1] === '[]' || s[i] + s[i + 1] === '{}')
      return true
  }

  return false
}

console.log('***VALID PARENTHESES***')
console.log(isValid('()')) // true
console.log(isValid('()[]{}')) // true
console.log(isValid('(]')) // false
console.log(isValid('([)]')) // false
console.log(isValid('{[]}')) // true

// WINNING CARD
// In a card game , each player will be given a set of random cards.
// Players will throw on the table their *one winning card*, the player with the highest card wins
// A *winning card* is the card that only exists once in the set of cards, and the highest one.
// Given an array of sets of integers "cards", return the card of the winning player.
// Return -1 if no such card is found

function winningCard(cards) {
  let memo = {}
  let arr = []
  let highestCard = 0

  for (let i = 0; i < cards.length; i++) {
    let card = cards[i]
    for (let j = 0; j < card.length; j++) {
      memo[card[j]] = (memo[card[j]] || 0) + 1
    }
  }

  for (key in memo) {
    if (memo[key] === 1) {
      arr.push(parseInt(key))
    }
  }

  if (arr.length > 0) {
    for (num of arr) {
      if (num > highestCard) highestCard = num
    }
    return highestCard
  }

  return -1
}

console.log('***WINNING CARD***')
console.log(
  winningCard([
    [5, 7, 3, 9, 4, 9, 8, 3, 1],
    [1, 2, 2, 4, 4, 1],
    [1, 2, 3]
  ]) // 8
)
console.log(winningCard([5, 5], [2, 2])) // -1

// NUMBER GENERATOR
// A digit-only keyboard cntains all 10 digits from 0 to 9. *They all exist in one line*
// Given a string of 10 digits illustrating how the keys are positioned.
// To type a digit, you start from index *zero* to the index of the target digit.
// I takes |a-b| milliseconds to move from index a to index b
// Write a function to calculate the number of milliseconds needed to type a number with one finger.

var numberGenerator = function (digits, num) {
  let arr = []
  let prevIndex = 0
  let nextIndex = 0
  for (let i = 0; i < num.length; i++) {
    for (j = 0; j < digits.length; j++) {
      nextIndex = j
      if (digits[j] === num[i]) {
        arr.push(Math.abs(nextIndex - prevIndex))
        prevIndex = j
      }
    }
  }

  return arr.reduce((a, b) => a + b)
}

console.log('***NUMBER GENERATOR***')
console.log(numberGenerator('0123456789', '210')) // 4
console.log(numberGenerator('8459761203', '5439')) // 17

// Given an integer array nums of *unique* elements, return *all possible subsets (the power set)*.
// The solution set *must not* contain duplicate subsets. Return the solution in *specified order*
// Example 1
// Input: nums = [1, 2, 3]
// Output: [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]
// Example 2
// Input: nums = [0]
// Output: [[], [0]]

var subsets = function (nums) {
  let res = [[]]

  function findSubset(arr, subset) {
    if (subset.length > 0) res.push([...subset])
    for (let i = 0; i < arr.length; i++) {
      subset.push(arr[i])
      findSubset(arr.slice(i + 1), subset)
      subset.pop()
    }
  }

  findSubset(nums, [])
  // res = res.sort(function (a, b) {
  //   return a.length - b.length
  // })
  return res
}

console.log('***ARRAY***')
console.log(subsets([1, 2, 3]))
