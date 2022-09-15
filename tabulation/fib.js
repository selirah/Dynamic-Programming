const fib = (n) => {
  // Define an array with size n + 1 and fill it with zeros
  const table = Array(n + 1).fill(0)
  // set the element at index 1 to 1
  table[1] = 1 // Base case
  for (let i = 0; i <= n; i++) {
    table[i + 1] += table[i]
    table[i + 2] += table[i]
  }
  return table[n]
}

console.log(fib(6)) // 8
console.log(fib(7)) // 13
console.log(fib(8)) // 21
console.log(fib(50)) // 12586269025
