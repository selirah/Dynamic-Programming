const isPalindrome = (input) => {
  const regex = /[\W_]/g
  input = input.replace(regex, '').toLowerCase()
  // Define a base-case / stopping condition
  if (input.length === 0 || input.length === 1) return true

  // Do some work to shrink the problem space
  if (input.charAt(0) === input.charAt(input.length - 1))
    return isPalindrome(input.substring(1, input.length - 1))

  // Additional base-case to handle non-palindromes
  return false
}

console.log(isPalindrome('kayak'))
console.log(isPalindrome('race car'))
console.log(isPalindrome('A man, a plan, a canal. Panama'))
