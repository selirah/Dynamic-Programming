function seekAndDestroy(arr) {
  let args = Array.from(arguments)
  args.splice(0, 1)
  let targets = args
  let result = []

  for (let num of arr) {
    if (targets.indexOf(num) === -1) {
      result.push(num)
    }
  }

  return result
}

function seekAndDestroyAlt(arr) {
  let args = Array.from(arguments)
  args.splice(0, 1)
  let targets = args

  return arr.filter((num) => targets.indexOf(num) === -1)
}

console.log(seekAndDestroy([1, 2, 3, 1, 2, 3], 2, 3))
console.log(seekAndDestroyAlt([1, 2, 3, 1, 2, 3], 2, 3))
