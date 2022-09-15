// Write a function `canConstruct(target, wordBank)` that accepts a target string and an array of strings as arguments
// The function should return a boolean indicating whether of not the `target` can be constructed by concatenating elements of the `wordBank` array
// You may reuse elements of `wordBank` as many times as needed

const canConstruct = (target, wordBank, memo = {}) => {
  if (target in memo) return memo[target]
  if (target === '') return true

  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      // return string left after taking out the word from the target
      // Eg: word = 'pot', target = 'potato'
      // target.indexOf(word) => 0 (meaning 'pot' is a prefix to 'potato' ie. beginning of the target)
      // target.slice(word.length) => 'ato'
      const suffix = target.slice(word.length)
      if (canConstruct(suffix, wordBank, memo) === true) {
        memo[target] = true
        return true
      }
    }
  }
  memo[target] = false
  return false
}

console.log(canConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])) // true
console.log(canConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])) // false
console.log(canConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't'])) // true
console.log(
  canConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', [
    'e',
    'ee',
    'eee',
    'eeee',
    'eeeee',
    'eeeeee'
  ])
) // false

// m = target.length
// n = wordBank.length

// Brute Force
// time: O(n * m^2)
// space: O(m^2)
