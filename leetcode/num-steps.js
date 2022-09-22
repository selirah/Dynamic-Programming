// ** Number of Steps to Reduce a Number to Zero **
// Given an integer num, return the number of steps to reduce it to zero
// In one step, if the current number is even, you have to divide it by 2,
// otherwise, you have to subtract 1 from it

var numberOfSteps = function (num, steps = 0) {
  if (num === 0) return steps
  num = num % 2 === 0 ? num / 2 : num - 1
  steps++
  return numberOfSteps(num, steps)
}

console.log(numberOfSteps(14)) // 6
console.log(numberOfSteps(8)) // 4
console.log(numberOfSteps(123)) // 12
console.log(numberOfSteps(0)) // 0
