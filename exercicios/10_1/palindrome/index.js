// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  let backward = str.length - 1;
  for (let forward = 0; forward <= backward ; forward += 1) {
    if (str[forward] !== str[backward]) return false;
    backward -= 1;
  }
  return true;
}

module.exports = palindrome;
