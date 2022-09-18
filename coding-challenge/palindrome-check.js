const palindrome = (str) => {
  // Regex to remove nonalphanumeric character (space, underscore, asterisk, etc)
  const regex = /[\W_]/g
  const strToLower = str.toLowerCase().replace(regex, '')

  const reversed = strToLower.split('').reverse().join('')
  return reversed === strToLower ? true : false
}

console.log(palindrome('A man, a plan, a canal. Panama'))
