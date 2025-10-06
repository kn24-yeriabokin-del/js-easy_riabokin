

function replaceVowels(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'y',
                  'A', 'E', 'I', 'O', 'U', 'Y'];
  let result = '';

  for (let i = 0; i < str.length; i++) {
    if (!vowels.includes(str[i])) {
      result += str[i];
    } else {
      result += '*';
    }
  }

  return result;
}

module.exports = replaceVowels;


