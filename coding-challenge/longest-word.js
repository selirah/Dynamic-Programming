const longestWordOne = (str) => {
  let longestWord = ''
  const words = str.split(' ') // split with space
  for (let word of words) {
    if (word.length > longestWord.length) longestWord = word
  }
  return longestWord.length
}

const longestWordTwo = (str) => {
  let memo = {}
  const words = str.split(' ') // split with space
  for (let word of words) {
    memo[word] = word.length
  }
  return Object.keys(memo).reduce((a, b) => (memo[a] > memo[b] ? a : b)).length
}

const longestWordThree = (str) => {
  return str.split(' ').sort((a, b) => b.length - a.length)[0].length
}

console.log(longestWordOne('The quick brown fox jumped over the lazy dog'))
console.log(longestWordTwo('The quick brown fox jumped over the lazy dog'))
console.log(longestWordThree('The quick brown fox jumped over the lazy dog'))
