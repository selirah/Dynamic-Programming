const chunkArrayIntoGroups = (arr, size) => {
  let finalArr = []

  for (let i = 0; i < arr.length; i += size) {
    let tempArr = []
    tempArr = arr.slice(i, i + size)
    finalArr.push(tempArr)
  }

  return finalArr
}

const chunkArrayIntoGroupsAlt = (arr, size) => {
  let groups = []

  while (arr.length > 0) {
    groups.push(arr.splice(0, size))
  }

  return groups
}

console.log(chunkArrayIntoGroups(['a', 'b', 'c', 'd'], 2))
console.log(chunkArrayIntoGroupsAlt(['a', 'b', 'c', 'd'], 2))
