/* eslint-disable no-param-reassign */
export const randomNumber = (min, max) => Math.floor(min + Math.random() * (max + 1 - min));

export const calculate = (a, b, operator) => {
  let result = 0;
  if (operator === '*') {
    result = a * b;
  }
  if (operator === '+') {
    result = a + b;
  }
  if (operator === '-') {
    result = a - b;
  }
  return result;
};

export const gcd = (a, b) => {
  let result = 0;
  while (a !== 0 && b !== 0) {
    if (a > b) {
      a %= b;
    } else {
      b %= a;
    }
    result = a + b;
  }
  return result;
};
