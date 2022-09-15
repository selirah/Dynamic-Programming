const repeatStringNumTimes = (str, num) => {
  if (num < 0) return ''
  return str.repeat(num)
}

const repeatStringNumTimesAlt = (str, num) => {
  if (num < 0) return ''
  let final = ''
  for (let i = 0; i < num; i++) {
    final += str
  }
  return final
}

const repeatStringNumTimesAlt2 = (str, num) => {
  // Recursion
  if (num < 0) return ''
  if (num === 1) return str // Base case
  return str + repeatStringNumTimesAlt2(str, num - 1)
}

console.log(repeatStringNumTimesAlt2('abc', 5))
