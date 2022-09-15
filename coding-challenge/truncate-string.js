const truncateString = (str, num) => {
  if (str.length <= num) return str
  if (num <= 3) return str.slice(0, num) + '...'
  return str.slice(0, num - 3) + '...'
}

console.log(truncateString('A-tisket a-tisket A green and yellow basket', 11))
console.log(truncateString('tommy goes to work', 3))
console.log(truncateString('kiara loves hiphop', 20))
