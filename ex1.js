function capitalize(s) {
  return s[0].toUpperCase() + s.slice(1);
}

function reversedString(s) {
  let rs = '';
  for (let i = s.length; i >= 0; i--) rs += s[i];
  return rs;
}

const calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  divide: (a, b) => a / b,
  multiply: (a, b) => a * b,
};

function upperTransForm(cc, key) {
  cc += key;
  if (cc >= 91) cc = (cc % 91) + 65;
  return String.fromCharCode(cc);
}

function lowerTransForm(cc, key) {
  cc += key;
  if (cc >= 123) cc = (cc % 123) + 97;
  return String.fromCharCode(cc);
}

function transForm(cc, key) {
  if (cc > 64 && cc < 91) return upperTransForm(cc, key);
  else if (cc > 96 && cc < 123) return lowerTransForm(cc, key);
  else return String.fromCharCode(cc);
}

function caesarCipher(text, key = 0) {
  let encrypt = '';
  for (let i in text) encrypt += transForm(text.charCodeAt(i), key);
  return encrypt;
}

function analyzeArray(array) {
  const sortedArray = [...array].sort();
  let average = sortedArray.reduce((acc, curr) => (acc += curr), 0) / array.length;
  return {
    average,
    min: sortedArray[0],
    max: sortedArray[array.length - 1],
    length: array.length,
  };
}

export { capitalize, reversedString, calculator, caesarCipher, analyzeArray };
