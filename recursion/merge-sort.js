const mergeSort = (data, start, end) => {
  if (start < end) {
    const mid = Math.floor((start + end) / 2)
    mergeSort(data, start, mid)
    mergeSort(data, mid + 1, end)
    merge(data, start, mid, end)
  }
  return data
}

const merge = (data, start, mid, end) => {
  // build temp array to avoid modifying the original contents
  let temp = []
  temp.push(end - start + 1)

  let i = start,
    j = mid + 1,
    k = 0

  // While both sub-array have values, then try and merge them in sorted order
  while (i <= mid && j <= end) {
    if (data[i] <= data[j]) {
      temp[k++] = data[i++]
    } else {
      temp[k++] = data[j++]
    }
  }

  // Add the rest of the values from the left sub-array into the result
  while (i <= mid) {
    temp[k++] = data[i++]
  }

  // Add the rest of the values from the right sub-array into the result
  while (j <= end) {
    temp[k++] = data[j++]
  }

  // Copy what is in temp and replace what is in data
  for (let i = start; i <= end; i++) {
    data[i] = temp[i - start]
  }
}

const data = [-5, 20, 10, 3, 2, 0]
console.log(mergeSort(data, 0, data.length - 1))
