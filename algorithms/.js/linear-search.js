const linearSearch = (list, target) => {
  // Returns the index position of the target if found, else return null
  for (let i = 0; i < list.length - 1; i++) {
    if (list[i] === target) return i
  }
  return null
}

const verify = (index) => {
  if (index !== null) console.log('Target found at index: ', index)
  else console.log('Target not found in list')
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let result = linearSearch(numbers, 12)
verify(result)

result = linearSearch(numbers, 6)
verify(result)
