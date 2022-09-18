const slashArray = (arr, howMany) => {
  return arr.slice(howMany)
}

const slashArrayAlt = (arr, howMany) => {
  return arr.splice(howMany)
}

console.log(slashArray([1, 2, 3], 2))
console.log(slashArrayAlt(['burgers', 'fries', 'shake'], 2))
