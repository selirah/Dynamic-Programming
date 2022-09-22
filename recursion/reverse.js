const reverseString = (input) => {
  if (input === '') return ''
  return reverseString(input.substring(1)) + input.charAt(0)
}

console.log(reverseString('the simple engineer'))
console.log(reverseString('hello'))
