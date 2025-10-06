

function reverseWithoutNumbers(str) {
  let result = '';

  for (let i = str.length - 1; i >= 0; i--) {
    const char = str[i];
    if (char < '0' || char > '9') {
      result += char;
    }
  }

  return result;
}

module.exports = reverseWithoutNumbers;
