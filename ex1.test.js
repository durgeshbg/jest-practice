import {
  capitalize,
  reversedString,
  calculator,
  caesarCipher,
  analyzeArray,
} from './ex1';

test('Capitalize', () => expect(capitalize('one')).toBe('One'));

test('Reversed String', () => expect(reversedString('three')).toMatch('eerht'));

test('Calculator: Add', () => expect(calculator.add(2, 3)).toBe(5));
test('Calculator: Subtract', () => expect(calculator.subtract(3, 3)).toBe(0));
test('Calculator: Multiply', () => expect(calculator.divide(2, 2)).toBe(1));
test('Calculator: Divide', () => expect(calculator.multiply(3, 3)).toBe(9));

test('Caesar Cipher', () =>
  expect(caesarCipher('One, comes before Two, ezZy!', 1)).toMatch(
    'Pof, dpnft cfgpsf Uxp, faAz!'
  ));

test('Analyze Array', () =>
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  }));
