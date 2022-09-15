const largestOfFour = (arr) => {
  let maxNumbers = []
  for (let i = 0; i < arr.length; i++) {
    let tempMax = arr[i][0]
    for (let j = 0; j < arr[i].length; j++) {
      const currentElement = arr[i][j]
      if (currentElement >= tempMax) {
        tempMax = currentElement
      }
    }
    maxNumbers.push(tempMax)
  }
  return maxNumbers
}

const largestOfFourAlt = (arr) => {
  let maxNumbers = []
  for (let i = 0; i < arr.length; i++) {
    tempMax = arr[i].reduce((a, b) => (a > b ? a : b))
    maxNumbers.push(tempMax)
  }
  return maxNumbers
}

console.log(
  largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1]
  ])
) // [5, 27, 39, 1001]

console.log(
  largestOfFourAlt([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1]
  ])
) // [5, 27, 39, 1001]
