const binarySearch = (list, target) => {
  let first = 0,
    last = list.length - 1

  while (first <= last) {
    const midpoint = Math.floor((first + last) / 2)
    if (list[midpoint] === target) return midpoint
    else if (list[midpoint] < target) first = midpoint + 1
    else last = midpoint - 1
  }
  return null
}

const verify = (index) => {
  if (index !== null) console.log('Target found at index: ', index)
  else console.log('Target not found in list')
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let result = binarySearch(numbers, 12)
verify(result)

result = binarySearch(numbers, 6)
verify(result)
