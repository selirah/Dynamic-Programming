const binarySearch = (arr, left, right, x) => {
  if (left > right) return -1

  const mid = Math.floor((left + right) / 2)
  if (x === arr[mid]) return mid

  if (x < arr[mid]) return binarySearch(arr, left, mid - 1, x)

  return binarySearch(arr, mid + 1, right, x)
}

console.log(binarySearch([-1, 0, 1, 2, 3, 4, 7, 9, 10, 20], 0, 9, 10))
