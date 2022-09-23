const recursiveBinarySearch = (list, target) => {
  if (list.length === 0) return false

  const midpoint = Math.floor(list.length / 2)
  if (list[midpoint] === target) return true

  if (list[midpoint] < target)
    return recursiveBinarySearch(list.slice(midpoint + 1, list.length - 1), target)
  return recursiveBinarySearch(list.slice(0, midpoint), target)
}

const verify = (result) => {
  console.log('Target found: ', result)
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8]
let result = recursiveBinarySearch(numbers, 12)
verify(result)

result = recursiveBinarySearch(numbers, 6)
verify(result)
