const factorialize = (num) => {
  // Iteration
  if (num < 0) num = num * -1 // Convert to positive when number is negative
  let result = 1
  for (let i = 1; i <= num; i++) {
    // result = result * i
    result *= i
  }
  return result
}

const factorializeAlt = (num) => {
  // Recursion
  if (num === 0) return 1 // Base Case
  if (num < 0) num = num * -1 // Convert to positive when number is negative
  return num * factorializeAlt(num - 1)
}

const factorializeAlt2 = (num, memo = {}) => {
  // Recursion with Memoization
  if (num in memo) return memo[num]
  if (num === 0) return 1 // Base Case
  if (num < 0) num = num * -1 // Convert to positive when number is negative
  memo[num] = num * factorializeAlt2(num - 1, memo)
  return memo[num]
}

console.log(factorialize(5))
console.log(factorializeAlt(5))
console.log(factorializeAlt2(5))
