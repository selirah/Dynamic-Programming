// Say you are a traveler on a 2D grid
// You begin in the top-left corner and your goal is to travel to the bottom-right corner
// You may only move down or right
// In how many ways can you travel to the goal on the grid with dimensions m x n?
// Assuming m is the number of rows and n is the number of columns

const gridTraveler = (m, n) => {
  if (m === 1 && n === 1) return 1
  if (m === 0 || n === 0) return 0
  return gridTraveler(m - 1, n) + gridTraveler(m, n - 1)
}

console.log(gridTraveler(1, 1)) // 1
console.log(gridTraveler(2, 3)) // 3
console.log(gridTraveler(3, 2)) // 3
console.log(gridTraveler(3, 3)) // 6
console.log(gridTraveler(18, 18)) // 2333606220

// O(fib(n)) = O(2^n+m) time
// O(fib(n)) = O(m + n) space
