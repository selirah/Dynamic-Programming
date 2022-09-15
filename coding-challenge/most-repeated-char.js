const mostRepeatedChar = (str) => {
  let data = {}
  for (let i = 0; i < str.length; i++) {
    if (/^[a-zA-Z]*$/.test(str[i])) {
      data[str[i]] = (data[str[i]] || 0) + 1
    }
  }
  return Object.keys(data).reduce((a, b) => (data[a] > data[b] ? a : b))
}

console.log(mostRepeatedChar('abcddefda1111133333333'))
console.log(mostRepeatedChar('AA0AB0BB0ccc0aa0aw00wo0BBBw123123'))
