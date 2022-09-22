const recursiveSummation = (num) => {
  if (num <= 1) return num
  return num + recursiveSummation(num - 1)
}

const recursiveSummationAlt = (num, result = 0) => {
  if (num <= 0) return result
  result += num
  return recursiveSummationAlt(num - 1, result)
}

console.log(recursiveSummation(10))
console.log(recursiveSummationAlt(10))
