// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  let check = true;
  let str = '';
  let array = [];

  if (n < 0) { 
    check = false;
    n = Math.abs(n);
  }

  str = str+n;
  
  for (let i = str.length-1 ; i >= 0; i -= 1) {
    array.push(str[i]);
  }

  return check ? Number(array.join('')) : -Number(array.join(''));
}

module.exports = reverseInt;
