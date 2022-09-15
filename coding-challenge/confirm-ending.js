const confirmEnding = (str, target) => {
  // return str.endsWith(target)
  // return str.substr(-target.length) === target
  return str.slice(-target.length) === target
}

console.log(confirmEnding('Bastian', 'n'))
