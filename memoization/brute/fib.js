// Write a function `fib(n)` that takes in a number as an argument.
// The function should return the n-th number of the Fibonacci sequence.

const fib = (n) => {
  if (n <= 2) return 1
  return fib(n - 1) + fib(n - 2)
}

console.log(fib(6)) // 8
console.log(fib(7)) // 13
console.log(fib(8)) // 21
// very large number since time complexity O(fib()) = O(2^n)
console.log(fib(50)) // 12586269025

// O(fib(n)) = O(2^n) time
// O(fib(n)) = O(n) space
