// Write a function `countConstruct(target, wordBank)` that accepts a target string and an array of strings
// The function should return the number of ways that the `target` can be constructed the concatenating elements of the `wordBank` array
// You may reuse elements of `wordBank` as many times as needed

const countConstruct = (target, wordBank) => {
  if (target === '') return 1

  let totalCount = 0

  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length)
      const numWaysForRest = countConstruct(suffix, wordBank)
      totalCount += numWaysForRest
    }
  }

  return totalCount
}

console.log(countConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl'])) // 2
console.log(countConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])) // 1
console.log(countConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])) // 0
console.log(countConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't'])) // 4
console.log(
  countConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', [
    'e',
    'ee',
    'eee',
    'eeee',
    'eeeee',
    'eeeeee'
  ])
) // 0

// m = target.length
// n = wordBank.length

// Brute Force
// time: O(n^m * m)
// space: O(m^2)
