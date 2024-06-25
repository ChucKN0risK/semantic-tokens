// Taken from: https://zellwk.com/blog/case-conversion/

// Checks whether character is Uppercase.
// Crude version. Checks only A-Z.
function isCaps(char) {
  return /\p{Lu}/u.test(char);
}

// Checks whether character is digit.
function isDigit(char) {
  return /[0-9]/.test(char);
}

export function kebabcasify(string) {
  return string
    .split('')
    .map((letter, index) => {
      const previousLetter = string[index - 1] || ''
      const currentLetter = letter

      if (isDigit(currentLetter) && !isDigit(previousLetter)) {
        return `-${currentLetter}`
      }

      if (!isCaps(currentLetter)) return currentLetter

      if (previousLetter === '') {
        return `${currentLetter.toLowerCase()}`
      }

      if (isCaps(previousLetter)) {
        return `${currentLetter.toLowerCase()}`
      }

      return `-${currentLetter.toLowerCase()}`
    })
    .join('')
    .trim()
    .replace(/[-_\s]+/g, '-')
}