const fizzBuzz = require('./index');

describe('myFizzBuzz', () => {
  test('returns `fizzbuzz` if the argument is divisible by 3 and 5', () => {
    expect(fizzBuzz(15)).toBe('fizzbuzz');
  });

  test('return `fizz` if the argument is divisible only by 3', () => {
    expect(fizzBuzz(9)).toBe('fizz');
  });

  test('return `fizz` if the argument is divisible only by 5', () => {
    expect(fizzBuzz(25)).toBe('buzz');
  });

  test('returns the own argument if it is not disisible by 3 or 5', () => {
    expect(fizzBuzz(17)).toBe(17);
  });

  test('returns `false` if the argument is not a number', () => {
    expect(fizzBuzz('this_is_not_a_number')).toBeFalsy();
  });
});