const mergeSort = (arr) => {
  // Sorts an array in ascending order
  // Returns a new sorted arry
  // Divide: Find the midpoint of the array and divide into subarrays
  // Conquer: Recursively sort the subarrays created in the previous step
  // Combine: Merge the sorted subarrays created in the previous step
  if (arr.length <= 1) return arr
  let { left, right } = split(arr)

  const Left = mergeSort(left)
  const Right = mergeSort(right)

  return merge(Left, Right)
}

const split = (arr) => {
  // Divide the unsorted array at midpoint into subarrays
  // Returns two subarrays - left and right
  const mid = Math.floor(arr.length / 2)
  const left = arr.slice(0, mid)
  const right = arr.slice(mid, arr.length)

  return { left, right }
}

const merge = (left, right) => {
  // Returns a new merged array
  let arr = []
  let i = 0,
    j = 0

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      arr.push(left[i])
      i += 1
    } else {
      arr.push(right[j])
      j += 1
    }
  }

  while (i < left.length) {
    arr.push(left[i])
    i += 1
  }

  while (j < right.length) {
    arr.push(right[j])
    j += 1
  }

  return arr
}

const verifySorted = (arr) => {
  const n = arr.length
  if (n === 0 || n === 1) return true
  return arr[0] < arr[1] && verifySorted(arr.slice(1, arr.length))
}

const arr = [54, 26, 62, 93, 17, 77, 31, 44, 55, 20]
const result = mergeSort(arr)
console.log(verifySorted(result))
