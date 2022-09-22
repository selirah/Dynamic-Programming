const fib = (num) => {
  if (num == 0 || num === 1) return num
  return fib(num - 1) + fib(num - 2)
}

const fibOptimized = (num, memo = {}) => {
  if (num in memo) return memo[num]
  if (num == 0 || num === 1) return num
  memo[num] = fibOptimized(num - 1, memo) + fibOptimized(num - 2, memo)
  return memo[num]
}

console.log(fib(7))
console.log(fibOptimized(50))
