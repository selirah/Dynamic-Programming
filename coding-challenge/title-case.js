const titleCase = (str) => {
  let capitalized = []
  const words = str.toLowerCase().split(' ')
  for (let word of words) {
    capitalized.push(word.charAt(0).toUpperCase() + word.slice(1))
  }

  return capitalized.join(' ')
}

const titleCaseAlt = (str) => {
  const titleCase = str
    .toLowerCase()
    .split(' ')
    .map((word) => word[0].toUpperCase() + word.slice(1))

  return titleCase.join(' ')
}

const titleCaseAlt2 = (str) => {
  const words = str.toLowerCase().split(' ')
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1)
  }

  return words.join(' ')
}

console.log(titleCase("I'm a little tea pot"))
console.log(titleCaseAlt("I'm a little tea pot"))
console.log(titleCaseAlt2("I'm a little tea pot"))
