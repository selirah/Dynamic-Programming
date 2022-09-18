const mutation = (arr) => {
  let firstWord = arr[0].toLowerCase()
  let secondWord = arr[1].toLowerCase()
  for (let letter of secondWord) {
    if (firstWord.indexOf(letter) === -1) return false
  }
  return true
}

const mutationAlt = (arr) => {
  let firstWord = arr[0].toLowerCase()
  let secondWord = arr[1].toLowerCase()
  for (let letter of secondWord) {
    if (!firstWord.includes(letter)) return false
  }
  return true
}

console.log(mutation(['hello', 'hey'])) // false
console.log(mutationAlt(['Alien', 'line'])) // true
