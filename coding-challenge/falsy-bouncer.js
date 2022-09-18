const falsyBouncer = (arr) => {
  return arr.filter((a) => a)
}

const falsyBouncerAlt = (arr) => {
  let truthyValues = []
  for (let elem of arr) {
    if (elem) {
      truthyValues.push(elem)
    }
  }
  return truthyValues
}

console.log(falsyBouncer([7, 'ate', '', false, 9, null, undefined, NaN, 0])) // [7, 'ate', 9]
console.log(falsyBouncerAlt([7, 'ate', '', false, 9, null, undefined, NaN, 0])) // [7, 'ate', 9]
